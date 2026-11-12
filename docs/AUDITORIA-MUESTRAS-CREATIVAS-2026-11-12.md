# Auditoría de muestras creativas — 12 de noviembre de 2026

## Alcance y criterio

Revisión estructural del código fuente disponible en `referencias-visuales/por-clasificar/`. Se identificaron tecnologías, arquitectura, técnicas de dibujo, geometría, animación y utilidad como referencia para el Director Creativo.

**Límite de esta auditoría:** leer el código no equivale a ejecutar los archivos ni a validar su resultado visual. No se declara calidad visual comprobada donde no hubo renderizado e inspección de la imagen final.

## Comparación: Observatorio de los Mandalas

### Facebook AI — `editorial_crew_production.html`

La implementación utiliza React para la interfaz y Canvas 2D para la escena. Incluye controles de pausa, velocidad y regeneración por semilla; reloj temporal con delta time; adaptación al tamaño de pantalla y densidad de píxeles; y seis composiciones dibujadas por funciones diferenciadas.

La lógica propia contiene más elaboración geométrica que la muestra Gemini enviada previamente:
- Mandala solar con anillos, simetría radial, alternancia de radios, pétalos y ornamentos en varias escalas.
- Composición lunar con fases representadas mediante recorte y cambios de iluminación.
- Flor de la Vida basada en una retícula hexagonal de centros, círculos e intersecciones calculadas.
- Rueda ceremonial con sectores, arcos, símbolos y anillos segmentados.
- Composición orgánica con ramificación recursiva y variaciones temporales.
- Constelaciones generadas mediante distribución de puntos con separación mínima, conexiones entre vecinos y pulsos luminosos que recorren las aristas.

También incluye un fondo procedural con partículas, gradientes, conexiones y viñeta.

**Limitaciones:** el código entregado está compilado/minificado y mezcla el runtime de React con la lógica de la escena; eso dificulta mantenerlo y estudiarlo. Algunas figuras se construyen mediante patrones paramétricos y primitivas Canvas, por lo que la complejidad matemática no demuestra por sí sola una ilustración ornamental de acabado excepcional. No se ha validado visualmente el render.

### Gemini — versión del Observatorio enviada anteriormente en el chat

La implementación anterior estaba organizada en funciones de dibujo separadas y tenía reloj de animación, semilla y simetría radial. Sin embargo, la mayoría de las composiciones eran patrones manuales más simples: círculos, rayos, sectores, pétalos y rotaciones. La Flor de la Vida no desarrollaba una retícula geométrica completa; la composición orgánica no ramificaba recursivamente; y las constelaciones tenían una lógica limitada.

**Conclusión comparativa:** Facebook AI desarrolló una lógica geométrica y temporal más elaborada para este encargo. No debe atribuirse como trabajo propio todo el volumen del archivo: una parte considerable es código de React compilado. La ventaja observada está en las funciones de escena, no en el tamaño total del HTML.

## Clasificación de las muestras conservadas

| Archivo | Clasificación y utilidad |
|---|---|
| `React Artifact.html` | Ciudad procedural 2.5D. Referencia para generación de mundos, capas, curvas, paralaje, partículas y reloj de animación. Ya se había revisado estructuralmente. |
| `React Artifact 2.html` | Túnel de cubos wireframe. Ejercicio geométrico sencillo y de interfaz; utilidad secundaria. |
| `React Artifact 3.html` | Mecanismo geométrico animado. Referencia secundaria para estados, controles y sincronización; no equivale a ilustración compleja. |
| `editorial_crew_production.html` | Observatorio de los Mandalas de Facebook AI. Referencia técnica para geometría procedural, simetría, recursión y animación temporal. |
| `editorial_illustration_lyra.html` | Ilustración editorial Canvas con curvas Bézier, gradientes, sombras y atmósfera. Referencia para construcción pictórica 2D; no se observó un sistema de animación. |
| `editorial_vector_gloop.html` | Personaje vectorial Canvas de alcance reducido. Muestra de diseño de personaje simple; utilidad comparativa. |
| `last_orbit_character_sheet.html` | Hoja de concepto de dos criaturas/personajes. Incluye funciones diferenciadas para cabeza, extremidades cristalinas, manos, tentáculos articulados, accesorios y llamadas editoriales; referencia útil para construcción de personajes complejos. No implementa rigging reutilizable. |
| `xylar_bartender_concept.html` | Hoja de concepto de personaje y utilería. Referencia de diseño de personaje/escena; requiere inspección visual para valorar el acabado. |
| `pelagocystis_concept_art.html` | Concept art de criatura abisal, con manto, corona, tentáculos, núcleo bioluminiscente y llamadas editoriales. Referencia para criaturas y composición de concepto. |
| `wildlife_sanctuary.html` | Ecosistema con capas ambientales y funciones específicas para elefante, jirafa, cebra, mono, flamenco, aves y vegetación. Incluye animación y utilidades temporales; referencia importante para escenas naturales y personajes animales. |
| `CHRONO-ASTROLABE-III-1m2-1x1-OBSIDIAN.svg` | Composición ornamental vectorial extensa. Referencia para SVG, jerarquía de grupos, geometría, tipografía y acabado editorial; no es una animación. |
| `triptico_personajes_vectorial.html` | Experimento wireframe con proyección y mallas de extremidades. Útil como referencia matemática, pero no corresponde al objetivo de ilustración 2D/2.5D. |
| `triptico_personajes_vectorial 2.html` | Experimento breve de viaje estelar continuo. Referencia secundaria de movimiento/ambiente. |

## Limpieza realizada

Se eliminó únicamente `editorial_crew_production 2.html`, porque su contenido y SHA de Git eran idénticos a `editorial_crew_production.html`. No se borraron muestras únicas: aunque algunas sean sencillas o secundarias, sirven para comparar capacidades y documentar límites.

La eliminación no reescribe el historial Git; el archivo puede seguir existiendo en commits anteriores.

## Conclusiones para el skill

1. Separar la interfaz de control de la escena gráfica. React puede coordinar estado y controles; Canvas/SVG realizan el dibujo.
2. El reloj central, delta time, semillas reproducibles y funciones de escena diferenciadas son técnicas reutilizables.
3. La geometría procedural puede ir más allá de rotar círculos: retículas, intersecciones, redes, ramificación, curvas paramétricas y fases animadas.
4. Las muestras de personajes y criaturas aportan referencias para dibujar siluetas y anatomías mediante curvas, capas y componentes; no demuestran por sí mismas segmentación automática ni rigging.
5. La muestra de fauna aporta una referencia de escena viva con varios animales, vegetación y movimiento ambiental.
6. Mantener separadas las pruebas de ilustración, animación, geometría procedural, dirección artística y rigging.
7. La validación visual sigue siendo obligatoria. Un código largo, minificado o técnicamente sofisticado no demuestra por sí solo un resultado visual profesional.


## Ampliación: Procedural Particle Systems

Se incorporó una revisión técnica de la muestra `referencias-visuales/por-clasificar/Procedural Particle Systems.html`.

**Clasificación:** referencia técnica de alto valor para simulación y gráficos procedurales 2D. Aporta búsqueda espacial por cuadrícula, comportamiento tipo Boids, ruido 3D de valores interpolados, composición de fuerzas, delta time, colecciones especializadas, interacción táctil, persistencia luminosa y densidad adaptativa.

La revisión distingue las implementaciones funcionales de sus aproximaciones: el plasma es una polilínea con desviaciones aleatorias, no ramificación recursiva; las explosiones son ondas y fuerzas, no fragmentación física; las estelas se producen mediante persistencia del lienzo; y la bruma por capas no demuestra paralaje de cámara completo.

**Límite:** análisis estático. No se ha ejecutado la muestra ni validado su apariencia, fluidez o rendimiento en navegador/iPad.

El análisis detallado y los criterios propuestos para el Director Creativo están en [ANALISIS-SISTEMA-PROCEDURAL-PARTICULAS.md](ANALISIS-SISTEMA-PROCEDURAL-PARTICULAS.md).


## Ampliación: Mundo luminoso, Face.html — ecosistema bioluminiscente

Se incorporó el archivo `referencias-visuales/por-clasificar/Mundo luminoso, Face.html` como referencia técnica de ecosistema procedural 2D.

**Tecnología observada:** React para interfaz y Canvas 2D para el renderizado; no se identificó Three.js, WebGL ni shaders GLSL. La muestra organiza cinco planos de profundidad/paralaje y varios subsistemas ambientales. Se identificaron árboles ramificados, plantas, hojas, flores, hongos, raíces luminosas, dos charcas con ondas, haces de luz y atmósfera. El código configura seis poblaciones de partículas (170 esporas, 54 luciérnagas, 210 polvo, 120 polen, 150 agua y 116 energía; 820 en total antes de aplicar el factor de densidad).

La implementación incluye reloj con delta time limitado, ResizeObserver, DPR máximo 2, cuadrícula espacial de 64 px para consultas locales, semilla reproducible, interacción táctil/puntero y controles para fuerzas, viento, ondas y regeneración.

**Valor como referencia:** arquitectura procedural 2D integrada, composición por planos, variedad de subsistemas, comportamiento ambiental e interacción. Es una referencia más elaborada que nuestro primer HTML autónomo de Canvas 2D en cuanto a estructura de escena y diversidad de elementos.

**Límites:** cinco planos y paralaje no equivalen a geometría tridimensional real. La lectura del código no valida por sí sola la calidad del render, la fluidez ni la funcionalidad real de cada control. No se ha ejecutado en navegador ni probado en Safari/iPad.

### Conclusión tecnológica ampliada

La base del skill pasa de una regla exclusivamente 2D a un enfoque **2D-first, con 2.5D y 3D selectivo**. El 2D conserva prioridad cuando resuelve el encargo; Three.js/WebGL se incorporan cuando se necesitan volumen, cámara, materiales, iluminación o interacción espacial reales. JSON se considera un formato para describir datos y configuración de escenas, no una tecnología de renderizado.

La comparación entre el ecosistema de Facebook y el prototipo propio también debe mantenerse separada en dos ejes: complejidad de arquitectura/código y calidad visual comprobada. La primera se puede estudiar estáticamente; la segunda requiere ejecutar y observar ambos resultados.


## Ampliación: comparación de ilustración urbana Gemini vs. Meta AI

**Archivos revisados:** `referencias-visuales/por-clasificar/Chica, perro Gemini.html` y `Chica, perro meta.html`. La revisión fue principalmente estática sobre el código HTML/JSX/SVG compartido y recuperado del repositorio. No equivale a una auditoría exhaustiva de todos los controles ni a una prueba completa en Safari/iPad.

### Resultado comparativo

**Gemini**
- Construye una escena urbana nocturna más desarrollada: cielo, arquitectura lejana e intermedia, fachadas, escaparates, calle y aceras en perspectiva, charcos, alcantarillas, bicicletas, farolas y mobiliario urbano.
- Separa escenario, protagonista y perro en componentes y grupos SVG identificables.
- Incluye poses seleccionables y pivotes articulados para partes de la chica y el perro, además de una correa curva.
- La implementación evidencia preparación modular y poses articuladas, pero no demuestra por sí sola un ciclo de caminata continuo, timeline narrativo ni rigging anatómico avanzado. No atribuirle esas capacidades sin pruebas adicionales.
- La explicación del propio modelo sobre la calidad de su trabajo es una justificación autogenerada, no una evaluación independiente.

**Meta AI**
- Presenta una interfaz de inspección y controles más desarrollada, con estructura de capas y opciones de visualización.
- Su escena utiliza una construcción más esquemática y elemental que la de Gemini en la muestra examinada.
- Incluye animaciones ambientales CSS, pero no se debe confundir ese movimiento con una secuencia narrativa o un ciclo de locomoción completo.
- No se verificó exhaustivamente el comportamiento de cada control ni su compatibilidad en todos los dispositivos.

### Qué se conserva como aprendizaje

1. **Dirección visual antes de implementación:** interpretar el encargo como una imagen o escena que debe diseñarse. Resolver concepto, composición, punto focal, perspectiva, escala, siluetas, personajes, arquitectura, color, luz y atmósfera antes de elegir componentes o escribir código.
2. **Escenario como espacio unificado:** establecer horizonte y puntos de fuga; organizar primer plano, plano medio y fondo; dar escala y coherencia a edificios, fachadas, objetos, personajes y calle. Las capas ayudan a producir y animar, pero no sustituyen la perspectiva dibujada.
3. **Diseño de formas con identidad:** las figuras principales deben tener siluetas, contornos, proporciones y superficies deliberadas. Las primitivas son válidas para geometría intencional, guías y detalles, pero no como solución automática para personajes, animales, edificios u objetos que requieren ilustración.
4. **Color e iluminación con función:** definir una paleta relacionada con el concepto y separar planos mediante valor, contraste, saturación, luz, sombra y atmósfera. Una combinación cromática coherente ayuda, pero no corrige un dibujo débil.
5. **Diseño preparado para movimiento:** separar componentes y capas según las necesidades reales de animación; definir pivotes, articulaciones, poses, partes móviles, trayectorias y movimiento secundario. La modularidad del código es útil, pero no demuestra que la animación exista o sea fluida.
6. **Interfaz e inspección:** conservar como referencia secundaria los controles y la inspección estructural de Meta. Deben complementar la escena, nunca desplazar tiempo de trabajo que corresponda al diseño visual.
7. **Tecnología subordinada al resultado:** React organiza interfaz y estado; SVG representa elementos vectoriales; CSS puede animar propiedades; JavaScript puede coordinar tiempo y comportamiento. Ninguna tecnología garantiza por sí sola dirección de arte o calidad de ilustración.

### Qué no se conserva como regla o conclusión

- No aceptar como hechos las descripciones de los supuestos procesos mentales de Gemini o Meta. Son explicaciones generadas después del resultado; no permiten conocer literalmente el razonamiento interno de los modelos.
- No adoptar la autocalificación de Gemini como «profesional», «cinematográfica» o equivalente a un estudio de animación. La calidad debe juzgarse observando el resultado y contrastándolo con criterios explícitos.
- No inferir anatomía correcta, rigging avanzado, locomoción orgánica o continuidad narrativa por la mera presencia de curvas Bézier, nombres como `ProtagonistRig`, grupos SVG o varias poses.
- No asumir que muchas capas, componentes, líneas de código, controles o elementos visuales significan mayor calidad.
- No convertir la paleta nocturna azul/cian con escaparates cálidos, el estilo urbano ni la línea clara en una estética obligatoria para otros encargos.
- No descartar React, SVG, primitivas o interfaces de control en general. El problema no es la herramienta: es utilizarlas sin una intención visual adecuada o confundir estructura técnica con acabado artístico.
- No desechar los dos HTML: ambos se conservan como evidencia comparativa. Se descartan únicamente sus afirmaciones no demostradas y cualquier criterio que confunda complejidad técnica con calidad visual.

### Escala de evaluación que se desprende de la prueba

1. **Geometría básica:** formas elementales ensambladas. Es válida si el encargo pide abstracción o esquematismo; insuficiente si se pide ilustración desarrollada.
2. **Ilustración vectorial diseñada:** siluetas, curvas, superficies, proporciones, detalles, color y profundidad con intención.
3. **Dirección artística:** concepto, composición, jerarquía, perspectiva, identidad, atmósfera y coherencia entre todos los elementos.
4. **Producción animada:** además de lo anterior, movimiento convincente, articulación, timing, continuidad, interacción y puesta en escena temporal.

Estos niveles no son una escala de complejidad obligatoria para todos los proyectos. El nivel apropiado depende del encargo, pero no debe presentarse una pieza geométrica elemental como ilustración profesional cuando no cumple ese objetivo.

### Siguiente experimento: conservar el estilo y añadir animación

La prueba siguiente debe medir si Gemini puede trasladar el lenguaje visual de su propia escena urbana a una producción animada sin simplificarlo, cambiar de estilo ni sustituir la ilustración por una plantilla genérica.

**Diseño de prueba recomendado:**
- Usar el HTML de Gemini como referencia directa y conservar la misma escena, protagonista, perro, arquitectura, paleta, proporciones, contornos y tratamiento de luz.
- Solicitar una secuencia animada breve con acción narrativa legible, no solo parpadeos, partículas o desplazamientos ambientales.
- Exigir código editable y ejecutable; SVG y componentes/capas identificables. No aceptar un video rasterizado, GIF incrustado, secuencia de imágenes ni una captura estática como sustituto del proyecto.
- Definir storyboard o momentos clave, duración, acciones, trayectorias, poses, timing y movimientos secundarios antes de implementar.
- Animar a la chica y al perro con locomoción coherente, relación entre ambos y correa con seguimiento e inercia; mantener arquitectura y perspectiva estables. Incorporar movimiento ambiental solo si refuerza la escena.
- Evaluar por separado: (a) fidelidad al estilo original; (b) calidad del dibujo; (c) coherencia espacial; (d) actuación y locomoción; (e) continuidad temporal; (f) calidad técnica y controles; (g) ejecución y adaptación al dispositivo.
- Comparar el fotograma inicial con el HTML original y revisar varios momentos de la secuencia. Una animación técnicamente funcional que rediseña o degrada la escena no supera la prueba de continuidad estilística.
- Registrar limitaciones: la inspección del código no demuestra calidad visual ni funcionamiento. Se requiere ejecutar y observar la secuencia en el entorno objetivo.

**Hipótesis a comprobar:** Gemini puede conservar la dirección visual al pasar de una escena estática/articulada a una secuencia temporal. El resultado aún no se conoce; no anticipar que la prueba será exitosa.
