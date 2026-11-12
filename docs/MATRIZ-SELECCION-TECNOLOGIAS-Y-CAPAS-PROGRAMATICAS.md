# Matriz de selección de tecnologías y capas programáticas

**Estado:** directriz vigente  
**Ámbito:** diseño gráfico, ilustración, interfaces, publicidad y motion graphics 2D, 2.5D y 3D cuando el encargo lo requiera.  
**Regla de alcance:** enfoque 2D-first, no 2D-only. La profundidad aparente puede resolverse con capas 2D/2.5D; cuando se necesite volumen, cámara, iluminación o geometría tridimensional real, se permite incorporar 3D mediante tecnologías existentes.

## 1. Propósito

El Director Creativo debe seleccionar la tecnología que mejor resuelva cada encargo. No debe tratar HTML, CSS, SCSS, SVG, Canvas y JavaScript como si fueran seis formatos de dibujo equivalentes.

La selección depende de qué se necesita producir: una composición editorial, un gráfico vectorial, una interfaz, una ilustración procedural, una animación, una pieza interactiva o una combinación de estas.

## 2. Qué hace realmente cada tecnología

| Tecnología | Función principal | Ventajas | Límites y precauciones |
|---|---|---|---|
| **HTML** | Estructura y semántica de una página o presentación | Organiza títulos, paneles, controles, contenido y regiones | No es por sí mismo un motor de ilustración |
| **CSS** | Estilos, disposición, tipografía, transformaciones y animaciones de elementos DOM | Muy eficaz para interfaces, composición tipográfica, formas simples, transiciones y movimiento de paneles | No sustituye un sistema de dibujo vectorial complejo ni una escena de Canvas |
| **SCSS** | Sintaxis de autoría que se compila a CSS | Variables, funciones, anidamiento y organización de estilos extensos | El navegador no ejecuta SCSS directamente; se debe compilar a CSS |
| **SVG** | Gráficos vectoriales mediante elementos y trazados editables | Nitidez a cualquier escala, grupos identificables, paths, máscaras, gradientes, filtros y transformación individual | Muchos elementos y filtros complejos pueden aumentar el coste de renderizado; una estructura SVG desordenada dificulta la edición |
| **Canvas 2D** | Dibujo programático sobre un lienzo rasterizado | Excelente para ilustración procedural, partículas, pinceladas, texturas, escenas densas y renderizado continuo | Los elementos dibujados no quedan como nodos independientes; se necesita mantener un modelo de objetos y redibujar |
| **JavaScript** | Lógica, datos, eventos, tiempo, interacción, cálculo y coordinación | Controla animaciones, estados, generación procedural, controles y exportación | No es un formato gráfico independiente: necesita DOM/CSS, SVG, Canvas u otro destino de renderizado |
| **PNG/JPEG/WebP** | Recursos rasterizados | Texturas, pintura, fotografía, ilustraciones complejas y assets ya terminados | No son vectoriales; revisar resolución, recortes, alfa, halos y escalado |

## 3. Reglas de selección

### Elegir SVG cuando

- Se necesitan formas vectoriales nítidas y editables.
- Cada parte debe tener un identificador y transformarse por separado.
- Se construyen logotipos, iconos, diagramas, personajes modulares, ilustraciones geométricas o gráficos con trazados precisos.
- La exportación vectorial es importante.

### Elegir HTML + CSS cuando

- El resultado es una página, ficha, panel, presentación, anuncio digital o entorno interactivo.
- Predominan la tipografía, las cajas, la retícula, los botones, las tarjetas y las transiciones de interfaz.
- Las formas visuales pueden resolverse con elementos DOM y propiedades CSS sin forzar una ilustración compleja.

### Elegir Canvas 2D + JavaScript cuando

- La imagen se genera mediante dibujo procedural o muchas operaciones por fotograma.
- Se necesitan partículas, pinceladas, ruido, texturas, vegetación, agua, humo o movimiento orgánico.
- Hay una escena con muchos elementos que se redibujan continuamente.
- El equipo de producción puede mantener un modelo de objetos, coordenadas, orden de dibujo y controles de depuración.

### Elegir JavaScript con SVG cuando

- Se necesita conservar cada elemento vectorial como objeto identificable.
- La lógica debe cambiar atributos, transformaciones, trazados, estados o visibilidad de grupos.
- Se requieren controles de animación y manipulación individual de componentes.

### Elegir una arquitectura híbrida cuando

- Hay una interfaz HTML/CSS alrededor de una ilustración SVG o una escena Canvas.
- Se necesitan controles, paneles de inspección, timeline, capas y un área principal de renderizado.
- Cada tecnología tiene una responsabilidad clara y no se duplican sistemas sin necesidad.

### Utilizar SCSS solo cuando aporte valor

SCSS es una herramienta de organización del CSS, no un motor de dibujo ni un formato de salida independiente. Si la hoja de estilos es pequeña, CSS directo puede ser suficiente. Si crece, SCSS puede facilitar variables, funciones, módulos y mantenimiento, siempre que se incluya el CSS compilado y no se dependa de que el navegador interprete SCSS.

## 4. Capas programáticas: qué significa y qué no significa

Una capa programática es una unidad lógica de composición o renderizado que puede tener una función, orden, estado, transformación o comportamiento propio. No tiene por qué ser una fotografía ni un archivo independiente.

Hay que distinguir tres conceptos:

1. **Capa visual o de composición:** fondo, plano medio, sujeto, accesorios, tipografía, partículas, primer plano o interfaz.
2. **Capa de renderizado:** grupo SVG, grupo de elementos DOM, canvas independiente o conjunto de objetos dibujados en un orden definido.
3. **Módulo de código:** archivo o función JavaScript que controla una responsabilidad, como geometría, animación, cámara, interacción o exportación.

Un archivo JavaScript no se convierte automáticamente en una capa visual. Un grupo SVG puede ser una capa visual aunque todo el SVG esté en un solo archivo. En Canvas, los elementos necesitan una representación lógica propia porque el lienzo no conserva nodos editables individuales.

### Correspondencia según la tecnología

| Tecnología | Cómo representar una capa programática |
|---|---|
| SVG | Un grupo `<g>` con identificador, orden y transformaciones propias |
| HTML/CSS | Un contenedor DOM con posición, orden de apilamiento y estado visual definidos |
| Canvas 2D | Un grupo de objetos dentro del modelo de escena, una pasada de dibujo o un canvas separado cuando se necesite aislamiento real |
| JavaScript | Un módulo/controlador que gestiona una o varias capas; no es una capa visual por sí mismo |
| Arquitectura híbrida | La interfaz DOM, el render SVG/Canvas y el controlador se mantienen separados y se comunican mediante una API clara |

### Contrato lógico recomendado

Cuando el proyecto requiera capas controlables, cada una debe poder describirse con los campos pertinentes:

- `id`: identificador estable.
- `purpose`: función visual o narrativa.
- `renderer`: SVG, DOM/CSS, Canvas o raster.
- `drawOrder`: orden de composición.
- `visible` y `opacity`: visibilidad y opacidad.
- `transform`: posición, escala, rotación y deformación permitidas.
- `pivot`: punto de transformación cuando corresponda.
- `depth` y `parallaxWeight`: profundidad y peso de paralaje si la escena los utiliza.
- `animationController`: comportamiento o timeline asignado.
- `interaction`: área y tipo de interacción.
- `debug`: posibilidad de mostrar límites, nombres, pivotes y valores.

No exigir todos los campos a todas las capas. Utilizar una estructura proporcionada al proyecto y evitar construir un framework propio.

## 5. Errores típicos que deben poder localizarse

- **Estructura:** el elemento no existe, está duplicado o no se encuentra por su identificador.
- **Geometría:** coordenadas, paths, pivotes, escala o relación de aspecto incorrectos.
- **Apilamiento:** orden de dibujo, `z-index`, contexto de apilamiento u oclusión equivocados.
- **Transformación:** origen de transformación, matriz, escala o rotación incorrectos.
- **Renderizado:** estilos, filtros, gradientes, antialias o límites del canvas.
- **Animación:** reloj, duración, interpolación, aceleración, sincronización o continuidad del bucle.
- **Interacción:** eventos, áreas táctiles, hit testing o controles que no modifican el estado real.
- **Adaptación:** desbordamiento, recorte, pixel ratio o diseño defectuoso en otro tamaño de pantalla.
- **Exportación:** archivo incompleto, dependencias externas, estilos no incorporados o estado dinámico no incluido.

La depuración debe poder mostrar, cuando corresponda, nombre de capa, límites, pivote, orden, transformaciones, visibilidad, tiempo actual y estado del controlador. No añadir overlays de depuración a la entrega final salvo que se soliciten.

## 6. Caso de referencia: OCCULTUM MOTION

El HTML compartido por el usuario el 10 de noviembre de 2026 es una referencia de una arquitectura híbrida:

- HTML organiza el estudio, los paneles, las pestañas y los controles.
- Tailwind CSS y CSS personalizado definen la interfaz, la paleta, la tipografía y las animaciones.
- SVG construye el personaje Vexel Mirmidon mediante paths, formas, gradientes, filtros y tres grupos principales: accesorios, cabeza y cuerpo.
- JavaScript cambia pestañas, aísla grupos, alterna animaciones y presenta notificaciones.

### Aprendizajes que sí se pueden reutilizar

- Separar la interfaz de presentación del área de ilustración.
- Construir el personaje con grupos SVG que tengan responsabilidades claras.
- Mantener identificadores estables para poder inspeccionar y animar partes.
- Diseñar una paleta, tipografía y sistema de paneles coherentes con la dirección artística.
- Incorporar controles para inspeccionar componentes sin modificar el arte original.
- Presentar decisiones de diseño y técnicas junto con la pieza gráfica.

### Limitaciones que no deben heredarse

- «Exportar JSON» solo muestra una notificación; no exporta datos.
- «Validar estándares» solo muestra una notificación; no ejecuta una validación.
- El botón de parpadeo produce una compresión puntual del ojo, no un ciclo de parpadeo.
- La indicación de hacer clic directamente sobre las capas no coincide con el mecanismo real, que utiliza casillas.
- El conteo anunciado de nodos Bézier no se mide ni se demuestra en el código.

La referencia debe clasificarse como una presentación interactiva de ilustración vectorial, no como un rig avanzado ni como un exportador completo.

## 7. Regla de decisión

Primero identificar el tipo de producto visual y las operaciones que debe soportar. Después seleccionar el renderizador y, por último, la estructura de código. No seleccionar una tecnología solo porque ya se utilizó en otro proyecto.

La calidad artística, la claridad de las capas y el funcionamiento real son criterios independientes: una tecnología adecuada no compensa una ilustración débil ni una interfaz cuyos controles no hacen lo que anuncian.

## 8. Documentación relacionada

- [Dirección creativa multidisciplinaria](../DIRECCION-CREATIVA-ESPACIAL-Y-ANIMACION.md)
- [Implementación 2D y 2.5D por capas](../IMPLEMENTACION-2D-Y-2.5D-POR-CAPAS.md)
- [Protocolo de prueba comparativa](PROTOCOLO-PRUEBA-COMPARATIVA-TECNOLOGIAS-2D.md)
- [Auditoría del repositorio](AUDITORIA-REPOSITORIO-2026-11-10.md)

## 9. Stack ampliado de producción gráfica programática

El Director Creativo debe conocer y poder seleccionar React, TypeScript, SVG avanzado, GSAP, Canvas 2D, Paper.js, PixiJS y WebGL, además de HTML, CSS y JavaScript. No son sustitutos entre sí: cada uno resuelve una responsabilidad distinta.

| Tecnología | Tipo | Responsabilidad | No confundir con |
|---|---|---|---|
| React | Biblioteca de interfaz | Componentes, estados, controles y estructura de una aplicación/escena | Un motor de dibujo o garantía de calidad visual |
| TypeScript | Lenguaje tipado que compila a JavaScript | Modelos, tipos, contratos y mantenimiento del código | Un lenguaje ejecutado directamente por el navegador |
| SVG avanzado | Formato vectorial y modelo de renderizado | Paths complejos, grupos, máscaras, filtros, gradientes, patrones y edición por elemento | Una estética minimalista de primitivas |
| GSAP | Biblioteca de animación | Timelines, secuencias, easing, sincronización y control temporal | Un motor de ilustración |
| Canvas 2D | API de dibujo rasterizado | Pinceladas simuladas, texturas, partículas y dibujo procedural | Un documento vectorial con nodos editables |
| Paper.js | Biblioteca vectorial | Creación, edición, selección y operaciones sobre paths y curvas | Un motor de pintura raster o director artístico |
| PixiJS | Motor/renderizador 2D acelerado | Escenas, sprites, filtros, máscaras y partículas en GPU | Una herramienta de modelado 3D |
| WebGL | API GPU de bajo nivel | Shaders y efectos personalizados | Una solución obligatoria para toda escena 2D |
| HTML/CSS | Estructura y estilos | Interfaz, tipografía, disposición y controles DOM | Un sustituto universal de SVG/Canvas |
| JavaScript | Lenguaje de programación | Lógica, eventos, estados, geometría e integración | Un formato de dibujo |

### 9.1 Arquitectura híbrida recomendada

Cuando el proyecto lo justifique, una aplicación puede organizarse con React + TypeScript y combinar capas de renderizado independientes:

- DOM/HTML/CSS para interfaz y controles.
- SVG avanzado para ilustración vectorial editable.
- Paper.js para construir y manipular trazados complejos.
- GSAP para timelines y coordinación de animación.
- Canvas 2D para texturas, trazos, partículas y efectos rasterizados.
- PixiJS para escenas 2D densas y renderizado acelerado.
- WebGL para shaders o efectos GPU específicos no cubiertos adecuadamente por una biblioteca de nivel superior.

Definir coordenadas, resolución, orden de capas, cámara y comunicación entre renderizadores. Mantener una única autoridad temporal para propiedades animadas compartidas. No duplicar sistemas ni introducir una biblioteca si no aporta una ventaja concreta.

### 9.2 Disponibilidad no significa instalación automática

El stack se incorpora a la capacidad del skill como caja de herramientas. No se deben instalar o cargar todas las dependencias en todos los proyectos. Antes de utilizarlas, comprobar compatibilidad de versiones, entorno, empaquetador, dispositivo, exportación y funcionamiento sin conexión. Declarar dependencias y pasos de ejecución. No afirmar que una biblioteca se ejecutó si solo se escribió código que la importa.

### 9.3 Criterio de calidad independiente

React organiza; TypeScript estructura; SVG representa; Paper.js manipula trazados; GSAP anima; Canvas dibuja; PixiJS/WebGL renderizan efectos acelerados. Ninguno decide por sí mismo la calidad artística.

No confundir cantidad de código, nodos, polígonos o elementos con calidad de ilustración. Para objetos y sujetos principales se requieren siluetas individualizadas, curvas y superficies deliberadas, volumen, materiales, texturas, iluminación y composición. Las primitivas geométricas se permiten cuando sean una decisión estilística consciente o una parte secundaria, no como sustituto automático de ilustración profesional.

### 9.4 Interactividad real

Los controles deben cambiar el estado y la apariencia de la escena. Por ejemplo, un interruptor de lámpara debe modificar la emisión de luz y sus efectos visuales; el humo debe tener animación real; los objetos deben responder a controles y acciones. Los botones decorativos o las notificaciones que no realizan la acción anunciada no cuentan como funcionalidad.

### 9.5 Validación

Comprobar instalación/carga, compilación, renderizado, estados, controles, sincronización de animaciones, adaptación al dispositivo y calidad visual por separado. La funcionalidad técnica no compensa una ilustración deficiente, y una buena imagen no demuestra que la interacción funcione.


## 10. Sistemas procedurales e interacción en tiempo real

Cuando una pieza requiera generación procedural, Canvas 2D + JavaScript es una opción adecuada para escenas densas y redibujado continuo. SVG/JavaScript es preferible cuando los elementos generados deben seguir siendo nodos vectoriales identificables y editables. HTML/CSS organiza paneles, controles y presentación. React puede coordinar la interfaz, pero no debe recibir actualizaciones de estado por cada partícula o por cada operación del bucle de simulación.

Para simulaciones con muchos agentes, evaluar estructuras de búsqueda espacial (por ejemplo, cuadrícula o hash espacial) cuando se necesiten vecinos por proximidad. Para movimiento orgánico, considerar campos de ruido coherente en el espacio y el tiempo. Para comportamiento colectivo, definir reglas explícitas; para interacciones, documentar las fuerzas y el mapa de influencias.

Separar el modelo de objetos, la actualización temporal, el renderizado, la interfaz y la interacción. Utilizar delta time, límites de velocidad/fuerza y estados de reinicio definidos. Medir el coste de actualización y dibujo antes de introducir optimizaciones complejas. La reutilización de objetos, la caché de geometría y la densidad adaptativa deben justificarse por el volumen real y las mediciones.

No confundir:
- persistencia del lienzo con un sistema independiente de estelas;
- líneas eléctricas irregulares con ramificación recursiva;
- ondas expansivas con fragmentación y colisiones físicas;
- ruido interpolado con cualquier otro algoritmo de ruido por el solo hecho de ser tridimensional;
- capas atmosféricas estáticas con paralaje de cámara completo;
- varios efectos simultáneos con sistemas realmente acoplados.

Los criterios de diseño, interacción, tiempo, diagnóstico y aceptación están detallados en [ANALISIS-SISTEMA-PROCEDURAL-PARTICULAS.md](ANALISIS-SISTEMA-PROCEDURAL-PARTICULAS.md). Esta referencia amplía el criterio de selección; no obliga a utilizar partículas ni Canvas en encargos que se resuelvan mejor con SVG, CSS, ilustración raster o técnicas mixtas.


## 11. Extensión selectiva a 2.5D y 3D

El Director Creativo trabaja con una caja de herramientas multidimensional. No debe imponer 3D a todos los encargos ni prohibirlo cuando sea la solución correcta. La decisión se toma a partir del resultado visual y de las operaciones necesarias.

### 11.1 Cuándo mantener una solución 2D/2.5D

Preferir HTML/CSS, SVG, Canvas 2D, PixiJS y composición por capas cuando la pieza necesite ilustración plana o estilizada, personajes 2D, tipografía, diagramas, partículas, atmósferas, profundidad por planos, paralaje, máscaras o movimiento gráfico. La perspectiva y el volumen aparente pueden construirse con dibujo, escala, oclusión, gradientes, sombras y desplazamiento diferencial.

### 11.2 Cuándo incorporar 3D/WebGL

Considerar Three.js u otra biblioteca 3D existente cuando la dirección artística o la interacción necesite geometría tridimensional real, cámara con perspectiva, navegación espacial, iluminación y materiales en volumen, reflejos, refracción, profundidad de campo o interacción entre objetos en el espacio. WebGL permite renderizado acelerado por GPU y shaders personalizados; Three.js ofrece una capa de mayor nivel para organizar escenas, cámaras, luces, materiales y geometrías.

No elegir WebGL por moda ni porque haya muchas partículas. Una escena 2D procedural compleja puede funcionar muy bien con Canvas 2D o PixiJS. La complejidad visual no demuestra por sí sola que se requiera 3D.

### 11.3 Arquitectura híbrida 2D + 3D

Una misma producción puede combinar:
- DOM/HTML/CSS para interfaz y tipografía.
- SVG para gráficos vectoriales, iconos y elementos editables.
- Canvas 2D o PixiJS para partículas, texturas y capas 2D.
- Three.js/WebGL para entorno, geometría, materiales, cámara o efectos espaciales.
- GSAP o un reloj central para coordinar timelines y transiciones entre capas.

Definir una sola autoridad temporal, coordenadas y unidades coherentes, orden de composición, resolución, cámara, transparencia y comunicación entre renderizadores. No duplicar elementos ni mantener dos sistemas de animación compitiendo por las mismas propiedades.

### 11.4 JSON como formato de datos, no como renderizador

JSON puede describir escenas, capas, objetos, parámetros, presets, estados, rutas de animación, cámaras, materiales y relaciones entre sistemas. No dibuja ni anima por sí mismo. El Director debe diseñar esquemas legibles y validados, separar datos de lógica y renderizado, y evitar convertir JSON en un formato propietario innecesariamente complejo.

### 11.5 Referencia comparativa: Mundo luminoso, Face.html

La muestra guardada en `referencias-visuales/por-clasificar/Mundo luminoso, Face.html` utiliza React para la interfaz y Canvas 2D para la escena. Su implementación observada incluye cinco planos de profundidad/paralaje, vegetación procedural ramificada, flores, hongos, raíces luminosas, charcas, atmósfera e interacciones, además de poblaciones diferenciadas de partículas.

La muestra demuestra que Canvas 2D puede sostener una escena procedural rica y con múltiples subsistemas. No demuestra que React sea un motor gráfico ni que se necesite WebGL. Tampoco prueba geometría 3D real: los planos y el paralaje son una composición 2D.

**Estado de evidencia:** análisis estático del código. No se ha validado todavía su render final, rendimiento o controles en Safari/iPad. Véase [ANALISIS-ECOSISTEMA-BIOLUMINISCENTE-FACEBOOK.md](ANALISIS-ECOSISTEMA-BIOLUMINISCENTE-FACEBOOK.md).

### 11.6 Regla de decisión

1. Definir el objetivo artístico y la interacción requerida.
2. Determinar si la profundidad necesaria es aparente (2D/2.5D) o geométrica real (3D).
3. Seleccionar el renderizador mínimo que cumpla el objetivo con calidad.
4. Añadir capas o tecnologías híbridas solo cuando resuelvan una necesidad demostrable.
5. Validar por separado calidad visual, funcionamiento, rendimiento y compatibilidad en el dispositivo objetivo.
