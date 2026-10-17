# Génesis · código fuente

Esta carpeta contiene todo lo necesario para reconstruir Génesis. El sitio publicado (`index.html`, `sw.js`, `manifest.webmanifest`) se genera desde aquí. No lo edites a mano.

## Cómo reconstruir

Requisito: Node.js 18 o superior.

```
cd "C:\Users\Jhenner Flores\Documents\Genesis-web"
node fuente\build.mjs
git add -A
git commit -m "Describe el cambio"
git push origin main
```

GitHub Pages actualiza https://jhenner55.github.io/genesis/ en uno o dos minutos.

`build.mjs` genera:

- En la raíz del sitio: `index.html`, `sw.js` y `manifest.webmanifest`.
- En `fuente/salida/`:
  - `stoa.html`: tu versión personal en Claude.
  - `genesis-publica.html`: la versión pública en Claude.
  - Estas dos se publican desde una conversación con Claude, no desde GitHub. La carpeta `salida/` no se sube al repositorio.

## Qué hay en cada archivo

| Archivo | Contenido |
|---|---|
| `template.html` | Interfaz, estilos y lógica de la app |
| `data.js` … `data5.js` | Épocas (`ERAS`), pensadores (`P`) y relaciones (`E`) |
| `data6.js` | Relaciones de crítica |
| `data7.js` | Ramas de la filosofía (`RAMAS`, `RAMA_DE`) y nombres alternativos (`ALIAS`) |
| `data8.js` | Pensamiento y obra a detalle (`PENS`) |
| `data9.js`, `data10.js` | «Por qué es un gran pensador» (`ESENCIA`, `HUELLA`) |
| `data11.js` … `data14.js` | Lotes de ampliación: Roma, corrientes, filósofas, Latinoamérica y Asia |
| `data15.js` | Rutas de aprendizaje |
| `data16.js` | Conceptos, debates, experimentos, citas e historias |
| `data17.js` | Freud y Jung |
| `data18.js` | Créditos de los retratos (`RETRATOS`) |
| `data19.js` | Textos libres por obra (`LECTURAS`) |
| `data20.js` | Bloque C: 15 pensadores, 5 conceptos y un debate |
| `data21.js` | Retratos y textos de los autores del Bloque C |
| `sw_template.js` | Funcionamiento sin conexión |
| `vendor/d3.min.js` | Librería de gráficos d3 v7.8.5 |
| `herramientas/` | Scripts para buscar retratos y textos libres |

`build.mjs` lee automáticamente todos los archivos `dataN.js` en orden numérico. Para agregar contenido nuevo, crea el siguiente (`data22.js`, …) en lugar de reescribir los anteriores.

## Cómo agregar un pensador

En un archivo `dataN.js` nuevo, sigue el modelo de `data20.js`:

1. `P.push({...})` con `id`, nombre, fechas, época (`e`), escuela, biografía y obras.
2. `E.push([origen, destino, tipo])`, donde el tipo es:
   - `m`: maestro → discípulo.
   - `i`: influencia.
   - `c`: crítica, en el orden `[criticado, crítico]`.
3. Entradas en `RAMA_DE`, `ALIAS` y `ESENCIA`. Son obligatorias.
4. Opcional: `CITAS`, `HISTORIAS` y `CONCEPTOS`.
5. Para el retrato, coloca la imagen en `retratos/<id>.jpg` (256×256) y su crédito en `RETRATOS`.

Si un `id` no existe o falta una sección obligatoria, la app no carga. Prueba siempre abriendo `index.html` en el navegador antes de hacer `git push`.

## Herramientas (carpeta `herramientas/`)

Se ejecutan desde una carpeta de trabajo, por ejemplo `_trabajo\`, porque leen y escriben ahí:

- `retratos.mjs`: lee `pensadores.json` (`[{id,n,en}]`) y busca en Wikidata y Wikimedia Commons retratos con licencia libre. Guarda las imágenes en `retratos-raw\` y los créditos en `retratos.json`.
- `lecturas.mjs` y `lecturas-gutenberg.mjs`: leen `obras.json` y buscan textos libres en Wikisource y Proyecto Gutenberg. Guardan los resultados en `lecturas.json`.
- `verifica.mjs`: revisa cada enlace de `lecturas.json` (autor, idioma, desambiguación) y guarda el resultado en `verifica.json`.

Revisa siempre a mano los resultados antes de agregarlos a un `dataN.js`.
