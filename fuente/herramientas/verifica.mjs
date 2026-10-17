import fs from "node:fs";
const UA="GenesisFilosofia/1.0 (https://github.com/Jhenner55/genesis)";
const L=JSON.parse(fs.readFileSync("lecturas.json","utf8")); const out=[];
for(const [id,r] of Object.entries(L)) for(const [i,ls] of Object.entries(r)) for(const [s,u] of ls){
  try{
    if(u.includes("gutenberg.org")){ const n=u.split("/").pop(); const h=await (await fetch(`https://www.gutenberg.org/ebooks/${n}`,{headers:{"User-Agent":UA},signal:AbortSignal.timeout(15000)})).text();
      const lang=(h.match(/<tr[^>]*>\s*<th>Language<\/th>\s*<td>([^<]*)</)||h.match(/property="dcterms:language"[^>]*>\s*<td>([^<]*)</)||[])[1]||(h.match(/Language<\/th>[\s\S]{0,80}?<td>([^<]+)</)||[])[1];
      const ti=(h.match(/<h1[^>]*>([^<]*)</)||[])[1]; out.push([id,i,u,"lang="+(lang||"?").trim(),ti]); }
    else { const host=new URL(u).host, t=decodeURIComponent(u.split("/wiki/")[1]);
      const d=await (await fetch(`https://${host}/w/api.php?action=query&format=json&prop=revisions|pageprops&rvprop=content&rvslots=main&redirects=1&titles=${encodeURIComponent(t)}`,{headers:{"User-Agent":UA},signal:AbortSignal.timeout(15000)})).json();
      const pg=Object.values(d.query.pages)[0]; const tx=(pg.revisions?.[0]?.slots?.main?.["*"]||"");
      const dis=pg.pageprops&&("disambiguation" in pg.pageprops); const au=(tx.match(/autor\s*=\s*([^|\n}]*)/i)||tx.match(/author\s*=\s*([^|\n}]*)/i)||[])[1];
      const tr=(tx.match(/traductor\s*=\s*([^|\n}]*)/i)||tx.match(/translator\s*=\s*([^|\n}]*)/i)||[])[1];
      out.push([id,i,u,(pg.missing!==undefined?"MISSING ":"")+(dis?"DISAMBIG ":"")+"autor="+(au||"?").trim()+" trad="+(tr||"").trim(), tx.slice(0,90).replace(/\s+/g," ")]); }
  }catch(e){ out.push([id,i,u,"ERR "+e.message]); }
  await new Promise(r=>setTimeout(r,200)); }
fs.writeFileSync("verifica.json",JSON.stringify(out,null,0)); console.log("OK",out.length);
