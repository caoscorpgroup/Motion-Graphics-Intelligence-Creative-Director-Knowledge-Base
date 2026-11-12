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
