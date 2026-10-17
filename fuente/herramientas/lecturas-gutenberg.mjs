// Busca textos libres por obra para Génesis (Wikidata → Wikisource / Proyecto Gutenberg).
import fs from "node:fs"; import path from "node:path";
const DIR = process.cwd();
const UA = "GenesisFilosofia/1.0 (https://github.com/Jhenner55/genesis)";
const O = JSON.parse(fs.readFileSync(path.join(DIR, "obras.json"), "utf8")).filter(x => x.pd);
const RET = fs.existsSync(path.join(DIR, "retratos.json")) ? JSON.parse(fs.readFileSync(path.join(DIR, "retratos.json"), "utf8")) : {};
const OUTF = path.join(DIR, "lecturas.json");
const LOGF = path.join(DIR, "lecturas-gutenberg.log");
const res = fs.existsSync(OUTF) ? JSON.parse(fs.readFileSync(OUTF, "utf8")) : {};
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function j(url) { for (let i = 0; i < 4; i++) { try { const r = await fetch(url, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(12000) }); if (r.ok) return r.json(); } catch (_) {} await sleep(1500 * (i + 1)); } return null; }
const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[«»"“”'’.,;:¿?¡!()\[\]]/g, " ").replace(/\b(el|la|los|las|lo|un|una|de|del|y|the|of|a|an|on|and|sobre)\b/g, " ").replace(/\s+/g, " ").trim();
const base = t => String(t).split(" (")[0].split("/")[0].split(":")[0].trim();
const same = (a, b) => { const x = norm(a), y = norm(b); return x && y && (x === y || (x.length > 6 && y.startsWith(x) && y.length - x.length < 12) || (y.length > 6 && x.startsWith(y) && x.length - y.length < 12)); };
const surname = n => norm(n).split(" ").filter(w => w.length > 2).pop() || norm(n);
async function authorQid(a) {
  if (RET[a.id]?.qid) return RET[a.id].qid;
  for (const [lang, t] of [["es", a.n], ["en", a.en]]) {
    const d = await j(`https://${lang}.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageprops&ppprop=wikibase_item&titles=${encodeURIComponent(t)}`);
    const pg = d && Object.values(d.query?.pages || {})[0]; if (pg?.pageprops?.wikibase_item) return pg.pageprops.wikibase_item;
  } return null;
}
async function viaWikidata(title, aq) {
  const cands = new Set();
  for (const lang of ["es", "en"]) {
    const s = await j(`https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&type=item&limit=10&language=${lang}&uselang=${lang}&search=${encodeURIComponent(title)}`);
    (s?.search || []).forEach(x => cands.add(x.id)); if (cands.size >= 6) break;
  }
  if (!cands.size) return null;
  const e = await j(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims|sitelinks|labels&languages=es|en&ids=${[...cands].slice(0, 30).join("|")}`);
  for (const id of cands) { const it = e?.entities?.[id]; if (!it) continue;
    const auth = (it.claims?.P50 || []).map(c => c.mainsnak?.datavalue?.value?.id);
    if (!auth.includes(aq)) continue;
    const les = it.labels?.es?.value, len = it.labels?.en?.value;
    if (!same(title, les || "") && !same(title, len || "") && !same(title, base(les || ""))) continue;
    return { qid: id, les, len, eswsi: it.sitelinks?.eswikisource?.title, enwsi: it.sitelinks?.enwikisource?.title, pg: (it.claims?.P2034 || []).map(c => c.mainsnak?.datavalue?.value).filter(Boolean) };
  } return null;
}
async function wikisourceSearch(title, a) {
  const s = await j(`https://es.wikisource.org/w/api.php?action=query&format=json&list=search&srnamespace=0&srlimit=6&srsearch=${encodeURIComponent(title + " " + surname(a.n))}`);
  for (const h of s?.query?.search || []) { if (!same(title, base(h.title))) continue;
    const p = await j(`https://es.wikisource.org/w/api.php?action=query&format=json&prop=revisions&rvprop=content&rvslots=main&titles=${encodeURIComponent(base(h.title))}`);
    const pg = p && Object.values(p.query?.pages || {})[0]; const txt = norm(pg?.revisions?.[0]?.slots?.main?.["*"]?.slice(0, 6000) || "");
    if (txt.includes(surname(a.n)) || txt.includes(surname(a.en))) return base(h.title);
  } return null;
}
async function gutendex(t, a, lang) {
  const s = await j(`https://gutendex.com/books/?languages=${lang}&search=${encodeURIComponent(surname(a.en) + " " + t)}`);
  for (const b of s?.results || []) { const au = norm((b.authors || []).map(x => x.name).join(" "));
    if (!au.includes(surname(a.en)) && !au.includes(surname(a.n))) continue;
    if (same(t, b.title.split(/[;:]/)[0])) return b.id; } return null;
}

async function gsearch(q, title, a) {
  let h = null; for (let i = 0; i < 3 && !h; i++) { try { const r = await fetch("https://www.gutenberg.org/ebooks/search/?query=" + encodeURIComponent(q), { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(15000) }); if (r.ok) h = await r.text(); } catch (_) {} if (!h) await sleep(2000); }
  if (!h) return null;
  const items = h.split('<li class="booklink">').slice(1);
  for (const it of items) { const id = it.match(/href="\/ebooks\/(\d+)"/)?.[1]; const t = (it.match(/<span class="title">([^<]*)</)?.[1] || "").replace(/&amp;/g, "&").replace(/&#39;/g, "'"); const au = norm(it.match(/<span class="subtitle">([^<]*)</)?.[1] || "");
    if (!id) continue; if (!au.includes(surname(a.en)) && !au.includes(surname(a.n))) continue;
    if (same(title, t.split(/[;:]/)[0]) || same(title, base(t))) return { id, t }; }
  return null;
}
let added = 0;
for (const a of O) { const r = res[a.id] || (res[a.id] = {}); const aq = await authorQid(a);
  for (let i = 0; i < a.o.length; i++) { if (r[i]) continue; const t = a.o[i];
    if (/perdid|no escrib|no dej|no se conservan|fragmentos$|^muchos|^m[aá]s de/i.test(norm(t)) ) continue;
    const w = aq ? await viaWikidata(t, aq) : null; let g = null;
    if (w?.len) g = await gsearch(surname(a.en) + " " + w.len, w.len, a);
    if (!g) g = await gsearch(surname(a.en) + " " + base(t), base(t), a);
    if (g) { r[i] = [["Gutenberg", "https://www.gutenberg.org/ebooks/" + g.id]]; added++; }
    const line = `${a.id} | ${t} | ${g ? g.id + " " + g.t : "—"} | ${w ? w.len || "" : ""}`; console.log(line); fs.appendFileSync(LOGF, line + "\n");
    await sleep(400); }
  fs.writeFileSync(OUTF, JSON.stringify(res, null, 1)); }
console.log("LISTO pasada 2:", added, "obras nuevas con Gutenberg");
