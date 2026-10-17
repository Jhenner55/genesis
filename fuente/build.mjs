// Construye Génesis a partir de la plantilla y los archivos de datos.
// Uso (desde cualquier carpeta):  node fuente/build.mjs
// Genera: index.html, sw.js y manifest.webmanifest en la raíz del sitio,
// y las versiones para Claude (stoa.html y genesis-publica.html) en fuente/salida/.
import fs from "node:fs"; import path from "node:path"; import crypto from "node:crypto"; import { fileURLToPath } from "node:url";
const F = path.dirname(fileURLToPath(import.meta.url)), R = path.dirname(F);
const rd = f => fs.readFileSync(path.join(F, f), "utf8");
const t = rd("template.html");
const files = fs.readdirSync(F).filter(f => /^data\d*\.js$/.test(f)).sort((a, b) => (+(a.match(/\d+/)?.[0] || 1)) - (+(b.match(/\d+/)?.[0] || 1)));
const d = files.map(rd).join("");
const TAG = '<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>';
if (t.split(TAG).length !== 2) throw new Error("La plantilla debe incluir una sola vez la etiqueta de d3");
const d3 = rd("vendor/d3.min.js"); if (d3.includes("</script") || !d3.includes("v7.8.5")) throw new Error("d3.min.js inesperado");
const priv = t.replace("/*DATA*/", () => d).replace(TAG, () => "<script>/* d3 v7.8.5 (npm), incluido para no depender de servidores externos */\n" + d3 + "</script>");
const pub = priv.replace("/*PUBLICA*/false", "true").replace("<title>Génesis</title>", "<title>Génesis Filosofía</title>");
fs.mkdirSync(path.join(F, "salida"), { recursive: true });
fs.writeFileSync(path.join(F, "salida", "stoa.html"), priv); fs.writeFileSync(path.join(F, "salida", "genesis-publica.html"), pub);
let web = pub.replace("const WEB=/*WEB*/false;", "const WEB=true;"); if (web === pub) throw new Error("No se encontró el interruptor WEB");
const head = `<meta name="description" content="Génesis: el universo del pensamiento humano. Un mapa interactivo de 184 pensadores, de Tales de Mileto a nuestros días.">
<meta property="og:title" content="Génesis · El universo del pensamiento humano">
<meta property="og:description" content="Un mapa interactivo de la historia de la filosofía: 184 pensadores conectados por maestros, influencias y críticas.">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jhenner55.github.io/genesis/tarjeta.png">
<meta property="og:url" content="https://jhenner55.github.io/genesis/">
<meta name="theme-color" content="#03050C">
<link rel="icon" type="image/svg+xml" href="icono.svg">
<link rel="apple-touch-icon" href="icono-180.png">
<link rel="manifest" href="manifest.webmanifest">`;
web = web.replace("<title>Génesis Filosofía</title>", "<title>Génesis · El universo del pensamiento humano</title>");
web = '<!doctype html>\n<html lang="es">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' + head + "\n" + web.replace("</style>\n", "</style>\n</head>\n<body>\n") + "\n</body>\n</html>\n";
const n = (d.match(/\{id:"[a-z_]+",n:"[^"]+",g:/g) || []).length; if (!(n > 180 && n < 1000)) throw new Error("Conteo de pensadores raro: " + n);
web = web.split("184 pensadores").join(n + " pensadores");
fs.writeFileSync(path.join(R, "index.html"), web);
const man = { name: "Génesis · El universo del pensamiento humano", short_name: "Génesis", description: "Mapa interactivo de la historia de la filosofía.", lang: "es-MX", start_url: "./", scope: "./", display: "standalone", background_color: "#03050C", theme_color: "#03050C",
  icons: [{ src: "icono-192.png", sizes: "192x192", type: "image/png" }, { src: "icono-512.png", sizes: "512x512", type: "image/png" }, { src: "icono-mask-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }, { src: "icono.svg", sizes: "any", type: "image/svg+xml" }] };
fs.writeFileSync(path.join(R, "manifest.webmanifest"), JSON.stringify(man, null, 1));
const ver = crypto.createHash("sha1").update(web, "utf8").digest("hex").slice(0, 10);
const ret = "[" + fs.readdirSync(path.join(R, "retratos")).map(f => "retratos/" + f).sort().map(s => JSON.stringify(s)).join(", ") + "]";
fs.writeFileSync(path.join(R, "sw.js"), rd("sw_template.js").replace("__VER__", ver).replace("__VER__", ver).replace("__RETRATOS__", ret));
console.log(`Listo: ${n} pensadores · ${files.length} archivos de datos · versión ${ver}`);
