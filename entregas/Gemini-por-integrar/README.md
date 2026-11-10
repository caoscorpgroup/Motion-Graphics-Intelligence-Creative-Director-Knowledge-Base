# Entregas de Gemini — materiales revisados

Esta carpeta conserva los archivos y trabajos originales generados durante las pruebas del Director de Diseño Gráfico y Motion Graphics.

## Estado de revisión — 2026-11-10

Se realizó una revisión estática de los trabajos y códigos almacenados en esta carpeta. Los materiales originales se conservan sin modificación. La revisión identifica distintas arquitecturas útiles —SVG con JavaScript, Canvas 2D, composiciones multicapa y láminas vectoriales—, pero no significa que todas las funciones anunciadas estén verificadas.

- `index.html` + `script.js` + `style.css`: demostración híbrida SVG/HTML/CSS/JavaScript con movimiento procedural; no implementa IK real y su avance temporal depende de la frecuencia de fotogramas.
- `thalassorin_alien_concept.html` y `last_orbit_character_sheet.html`: láminas estáticas de concept art dibujadas programáticamente con Canvas 2D.
- `wildlife_sanctuary.html`: composición 2.5D con cuatro Canvas 2D, movimiento procedural, paralaje por puntero y ciclo temporal de 20 segundos; la continuidad exacta del bucle no cuenta con una prueba automatizada.
- `CHRONO-ASTROLABE-III-1m2-1x1-OBSIDIAN.svg`: ilustración SVG compleja y estática, con grupos identificables; la afirmación de compatibilidad simultánea con formatos cuadrados y 16:9 requiere una adaptación de composición.

Consultar `docs/AUDITORIA-REPOSITORIO-2026-11-10.md` y `docs/MATRIZ-SELECCION-TECNOLOGIAS-Y-CAPAS-PROGRAMATICAS.md`. No reemplazar, borrar ni sobrescribir los archivos originales.
