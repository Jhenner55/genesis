// Busca retratos libres en Wikimedia Commons para los pensadores de Génesis.
import fs from "node:fs";
import path from "node:path";
const DIR = process.cwd();
const UA = "GenesisFilosofia/1.0 (https://github.com/Jhenner55/genesis)";
const P = JSON.parse(fs.readFileSync(path.join(DIR, "pensadores.json"), "utf8"));
const OUT = path.join(DIR, "retratos-raw");
fs.mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function j(url) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.ok) return r.json();
    await sleep(1500 * (i + 1));
  }
  throw new Error("HTTP " + url);
}
async function qidFrom(lang, title) {
  const u = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageprops&ppprop=wikibase_item|disambiguation&titles=${encodeURIComponent(title)}`;
  const d = await j(u);
  const pg = Object.values(d.query?.pages || {})[0];
  if (!pg || pg.missing !== undefined || pg.pageprops?.disambiguation !== undefined) return null;
  return pg.pageprops?.wikibase_item ? { qid: pg.pageprops.wikibase_item, title: pg.title, lang } : null;
}
const OKLIC = /^(pd|cc0|cc-by(-sa)?-\d|cc-by(-sa)?-\d\.\d|public domain)/i;
const strip = h => String(h || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const res = {};
const prev = fs.existsSync(path.join(DIR, "retratos.json")) ? JSON.parse(fs.readFileSync(path.join(DIR, "retratos.json"), "utf8")) : {};
for (const p of P) {
  if (prev[p.id]) { res[p.id] = prev[p.id]; continue; }
  try {
    let w = await qidFrom("es", p.n) || await qidFrom("en", p.en) || await qidFrom("en", p.n);
    if (!w) { res[p.id] = { ok: false, why: "sin artículo" }; console.log(p.id, "sin artículo"); continue; }
    const wd = await j(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims|descriptions&languages=es|en&ids=${w.qid}`);
    const ent = wd.entities[w.qid];
    const desc = ent.descriptions?.es?.value || ent.descriptions?.en?.value || "";
    const file = ent.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    if (!file) { res[p.id] = { ok: false, why: "sin imagen", qid: w.qid, desc }; console.log(p.id, "sin imagen"); continue; }
    const c = await j(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=320&titles=${encodeURIComponent("File:" + file)}`);
    const ii = Object.values(c.query.pages)[0].imageinfo?.[0];
    const md = ii?.extmetadata || {};
    const lic = md.License?.value || "", licName = md.LicenseShortName?.value || "";
    if (!OKLIC.test(lic) && !/public domain|dominio p/i.test(licName)) { res[p.id] = { ok: false, why: "licencia: " + licName, qid: w.qid, desc, file }; console.log(p.id, "licencia", licName); continue; }
    const img = await fetch(ii.thumburl, { headers: { "User-Agent": UA } });
    if (!img.ok) throw new Error("descarga " + img.status);
    const ext = (ii.thumburl.match(/\.(jpe?g|png|webp|gif)$/i)?.[1] || "jpg").toLowerCase();
    fs.writeFileSync(path.join(OUT, `${p.id}.${ext}`), Buffer.from(await img.arrayBuffer()));
    res[p.id] = { ok: true, qid: w.qid, desc, file, ext, lic: licName, autor: strip(md.Artist?.value).slice(0, 160), url: ii.descriptionurl };
    console.log(p.id, "OK", licName);
  } catch (e) { res[p.id] = { ok: false, why: "error: " + e.message }; console.log(p.id, "ERROR", e.message); }
  fs.writeFileSync(path.join(DIR, "retratos.json"), JSON.stringify(res, null, 1));
  await sleep(250);
}
fs.writeFileSync(path.join(DIR, "retratos.json"), JSON.stringify(res, null, 1));
console.log("LISTO", Object.values(res).filter(r => r.ok).length, "de", P.length);
