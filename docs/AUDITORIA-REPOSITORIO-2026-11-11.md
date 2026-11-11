# Auditoría y limpieza del repositorio — 2026-11-11

**Repositorio:** `caoscorpgroup/Motion-Graphics-Intelligence-Creative-Director-Knowledge-Base`  
**Rama:** `main`  
**Alcance:** inventario recursivo del árbol Git, tamaños declarados por GitHub, detección de hashes duplicados y revisión documental de la estructura.  
**Estado:** limpieza conservadora aplicada; curaduría visual completa pendiente.

## 1. Estado del repositorio

Inventario posterior a la limpieza:

- **126 archivos** en el árbol actual.
- **142.97 MiB** de contenido sumado según los tamaños declarados por GitHub.
- **47 GIF**: 137,793,998 bytes (aprox. 131.45 MiB).
- **6 WEBP**: 3,178,600 bytes.
- **6 PNG**: 6,161,809 bytes.
- **6 JPEG**: 1,220,185 bytes.
- **5 ZIP**: 596,659 bytes.
- El resto corresponde a Markdown, HTML, SVG, JavaScript, CSS, JSON, Python y workflows.

La carpeta `referencias-visuales/` ocupa aproximadamente 100.6 MiB en el árbol actual. Los GIF son, con diferencia, el principal componente del tamaño.

El metadato de tamaño del repositorio que devuelve GitHub continúa en **146,135 KB**. Esto es esperado: eliminar archivos en un commit nuevo los quita de la versión actual del árbol, pero sus blobs pueden seguir presentes en commits anteriores.

## 2. Limpieza aplicada

Se eliminaron únicamente archivos cuya redundancia o falta de vigencia estaba suficientemente establecida:

### Duplicados exactos de imágenes

Se conservaron las variantes en minúsculas y se retiraron las copias con extensión en mayúsculas:

- `referencias-visuales/901294837_1654842746343340_1714308230741263645_n.WEBP`
- `referencias-visuales/902142087_1523726333137938_3367900312318582667_n.WEBP`

Los hashes de cada par eran idénticos.

### ZIP duplicados

Se conservaron los archivos originales de la raíz y se retiraron las copias exactas dentro de `entregas/Gemini-por-integrar/`:

- `entregas/Gemini-por-integrar/Biblioteca-Contemporanea.zip`
- `entregas/Gemini-por-integrar/biblioteca_contemporanea_v2.zip`
- `entregas/Gemini-por-integrar/director-creativo-motion-graphics-v0.4.0.zip`

Cada copia tenía el mismo hash que su correspondiente archivo de la raíz.

### Archivo accidental

- `entregas/Gemini-por-integrar/Trst`: archivo de un byte, sin contenido útil identificado.

### Recursos de la rama de rigging personal pausada

Se retiraron del árbol actual nueve láminas WEBP vinculadas a la experimentación de caricatura personal y piezas anatómicas/poses, que quedó pausada y no forma parte del objetivo activo del skill:

- `899383559_1676287700560361_6055695973221218036_n.webp`
- `899822191_1896117061355344_3409335272798678296_n.webp`
- `899954581_1869688894386701_409772100550181048_n.webp`
- `903305225_2566570983755444_8279201414080220721_n.webp`
- `referencias-visuales/899465104_2419286538878250_5836275615987752778_n.webp`
- `referencias-visuales/899690599_1122113494117611_892972120252622254_n.webp`
- `referencias-visuales/900713470_1479283160747034_6116977921580921734_n.webp`
- `referencias-visuales/901475214_2941054362929570_1731106039852513477_n.webp`
- `referencias-visuales/902452479_3096673313868354_5952479104896634651_n.webp`

**Límite importante:** estos commits eliminan los archivos de la versión actual de `main`, pero no purgan automáticamente sus versiones históricas. La purga del historial requeriría reescribir Git y hacer force-push; no se ha realizado.

## 3. Material conservado deliberadamente

- La referencia editorial 2.5D principal `899272111_1122831820365172_5788129178806138609_n.webp`.
- Los documentos centrales de dirección creativa, implementación 2D/2.5D, profundidad, matriz tecnológica y especificación de assets.
- Los experimentos de Biblioteca Contemporánea, Castillo de Drácula, Wildlife Sanctuary, concept art y Chrono Astrolabe, porque contienen evidencia técnica o visual que permite aprender de aciertos y fallos.
- `React Artifact.html` y `React Artifact 2.html`: se conservan como evidencia comparativa de las dos construcciones SVG geométricas que se analizaron.
- Los GIF de referencia todavía no se eliminan: no se inspeccionó visualmente cada archivo de forma individual, por lo que no sería responsable decidir cuáles representan referencias valiosas y cuáles son prescindibles.
- Los PNG del experimento del Castillo de Drácula se conservan junto con sus informes.

## 4. Hallazgos estructurales

1. La raíz todavía contiene varios GIF con nombres automáticos. Esto dificulta la navegación, aunque no altera la función del skill.
2. `referencias-visuales/` contiene una colección extensa de GIF, WEBP y JPEG. Se necesita una selección visual y un índice descriptivo para distinguir referencias esenciales, duplicadas visualmente, irrelevantes o experimentales.
3. `entregas/` mezcla proyectos, pruebas y archivos históricos. La documentación permite distinguir su estado, pero la navegación puede simplificarse.
4. Los documentos Markdown son pequeños frente a los recursos visuales; eliminarlos no resolvería el tamaño.
5. Los paquetes ZIP históricos no deben borrarse solo por su nombre o antigüedad: algunos podrían ser versiones descargables útiles.

## 5. Próximas acciones recomendadas

1. Revisar visualmente los 47 GIF y seleccionar únicamente los que aporten una referencia técnica o artística identificable.
2. Identificar y clasificar las imágenes JPEG/PNG/WEBP que no tengan una función documentada.
3. Crear un índice breve de referencias seleccionadas con nombre descriptivo, disciplina, rasgos que deben estudiarse y ruta del archivo.
4. Mantener una carpeta pequeña de referencias aprobadas y otra de experimentos/evidencias solo cuando sean realmente necesarias.
5. Revisar si los ZIP históricos siguen siendo necesarios para distribución o recuperación.
6. Si el objetivo es reducir también el almacenamiento histórico de GitHub y retirar completamente archivos de commits anteriores, decidir por separado si se autoriza reescribir el historial. No hacerlo como parte de una limpieza ordinaria.

## 6. Criterio de conservación

La base de conocimiento debe conservar directrices, decisiones aprobadas, tecnologías, procesos reproducibles y un conjunto pequeño de referencias visuales de alta utilidad. Los experimentos fallidos se conservan solo cuando documentan un fallo que pueda prevenirse en el futuro. Las duplicaciones exactas, archivos accidentales y recursos de ramas pausadas sin función vigente pueden retirarse de la versión activa.

No se debe confundir una carpeta con muchos archivos con una base de conocimiento más capaz. La prioridad es calidad, claridad, trazabilidad y utilidad para una IA que consulte el repositorio.
