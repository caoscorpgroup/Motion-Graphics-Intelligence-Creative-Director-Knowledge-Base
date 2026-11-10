# Implementación 2D y 2.5D por capas: flujo de producción

**Estado:** directriz vigente  
**Prioridad técnica:** 2D y 2.5D  
**Propósito:** mantener el proyecto enfocado en motion graphics e ilustración animada programática, sin desviarlo hacia el desarrollo de videojuegos ni hacia una producción 3D completa.

## 1. Decisión de alcance

El núcleo del Director Creativo será:

1. **2D gráfico:** ilustraciones, personajes, objetos y escenarios diseñados para verse principalmente de frente o en el plano de la composición.
2. **2.5D por capas:** composición de recursos 2D separados en planos con profundidad aparente, paralaje y cámara simulada.
3. **3D completo:** no es una prioridad ni un requisito del flujo habitual. No introducir Blender, modelado 3D, rigs tridimensionales o motores de juego por defecto. Solo considerar una herramienta 3D si el usuario lo solicita expresamente o si existe una necesidad concreta que no pueda resolverse razonablemente en 2D/2.5D.

El resultado puede tener apariencia cinematográfica o recordar visualmente a un escenario de videojuego, pero el objetivo sigue siendo una pieza de motion graphics o animación gráfica, no un videojuego interactivo.

## 2. 2D: diseño y animación gráfica

Trabajar con recursos y técnicas como SVG, Canvas 2D, HTML/CSS, JavaScript, imágenes rasterizadas y herramientas/bibliotecas existentes.

Capacidades relevantes:
- Composición de formas, siluetas, curvas, color, textura y tipografía.
- Personajes construidos con piezas o capas cuando la animación lo requiera.
- Pivotes, jerarquías, articulaciones y rigging 2D.
- Animación facial, corporal y de objetos.
- Ciclos de movimiento, deformación, anticipación, seguimiento, inercia y movimiento secundario.
- Animación procedural y por fotogramas cuando cada método sea adecuado.
- Integración de ilustración vectorial y rasterizada; no vectorizar ni reconstruir todo innecesariamente.

No reducir el diseño a figuras primitivas improvisadas. La geometría debe tener intención: proporciones, silueta, ritmo, jerarquía, personalidad y acabado. La complejidad visual debe corresponder al material de referencia y al alcance real, no a una búsqueda automática de hiperrealismo.

## 3. 2.5D: composición por capas

La profundidad se construye principalmente separando el escenario en planos 2D independientes. Una escena puede incluir, según lo requiera:

- Fondo lejano: cielo, horizonte, montañas o arquitectura distante.
- Plano de fondo: edificios, paisaje y elementos ambientales.
- Plano medio: escenario principal y zona de acción.
- Primer plano: objetos que enmarcan, cruzan o tapan parcialmente la escena.
- Personajes y objetos animados: situados en el plano que corresponda y con posibilidad de moverse entre planos si el diseño lo permite.

Cada capa puede tener posición, escala, velocidad, opacidad, orden de dibujo y transformaciones propias. La cámara simulada puede desplazarse, hacer zoom o realizar movimientos moderados para reforzar la sensación espacial.

### Paralaje (parallax)

Aplicar velocidades de desplazamiento diferentes según la profundidad: normalmente los elementos cercanos se mueven más que los lejanos. La relación debe ser coherente con la dirección y el movimiento de cámara; no basta con mover todas las capas al azar.

También se pueden combinar:
- Escala y perspectiva dibujada dentro de cada capa.
- Oclusión y superposición entre planos.
- Desplazamiento horizontal, vertical y diagonal.
- Cambios de escala para sugerir acercamiento o alejamiento.
- Niebla, contraste, color y detalle atmosférico para separar distancias.
- Elementos animados independientes dentro de una misma capa.

El paralaje produce una ilusión de profundidad; no equivale a modelar un entorno 3D completo.

## 4. No convertir el proyecto en un videojuego

No introducir por defecto:
- Motor de juego, controles de jugador, físicas de gameplay o lógica de niveles.
- Escenarios 3D navegables.
- Modelado tridimensional detallado.
- Sistemas complejos de iluminación y materiales 3D.
- Arquitecturas de software excesivas para una pieza audiovisual.

Usar una escena, timeline o sistema de composición proporcional al video solicitado. Los controles de reproducción, pausa, reinicio o velocidad son herramientas de revisión y producción, no una razón para construir un videojuego.

## 5. Flujo de producción con recursos proporcionados por el usuario

Cuando el usuario entregue personajes, escenarios, fondos, objetos o referencias visuales previamente diseñados, estos recursos serán la base artística del proyecto. El Director no debe reemplazar su identidad visual inventando otra sin autorización.

Flujo recomendado:

1. **Recepción e inventario:** listar archivos, formatos, dimensiones, transparencia, variantes y dependencias.
2. **Inspección visual:** identificar qué representa cada recurso, su estilo, orientación, escala y uso previsto.
3. **Plan de capas:** determinar qué elementos deben estar separados para permitir movimiento, oclusión y paralaje.
4. **Preparación:** recortar, separar o adaptar piezas solo cuando sea necesario; conservar originales intactos y trabajar sobre copias.
5. **Rigging 2D:** definir pivotes, jerarquías, articulaciones, deformaciones y controles adecuados al personaje.
6. **Composición 2.5D:** ordenar fondos y elementos en planos, definir profundidad relativa y preparar la cámara simulada.
7. **Animación:** crear ciclos, acciones, trayectorias y movimientos secundarios, manteniendo coherencia con el diseño entregado.
8. **Integración:** comprobar escala, oclusión, perspectiva, iluminación gráfica y relación entre personaje y escenario.
9. **Vista previa y revisión:** permitir inspeccionar el resultado y corregir problemas sin cambiar silenciosamente la dirección artística.
10. **Entrega:** conservar una estructura clara de archivos, instrucciones y vista previa ejecutable cuando corresponda.

No todos los archivos estarán listos para rigging. Si una imagen tiene brazos, piernas, cabello u objetos fusionados con el cuerpo o el fondo, puede requerir separación, reconstrucción parcial o recursos adicionales. Explicar las limitaciones antes de prometer articulación completa.

## 6. Materiales recomendados para una prueba de paralaje

Una prueba inicial puede comenzar con cinco o seis imágenes/capas de escenario, por ejemplo:

1. Cielo o fondo más lejano.
2. Silueta de paisaje o arquitectura distante.
3. Edificios u objetos de plano medio.
4. Elementos principales del escenario.
5. Primer plano u objetos que enmarcan la composición.
6. Capa ambiental opcional: nubes, niebla, partículas o luces.

No es obligatorio que sean exactamente seis: el número depende de la escena. Si una imagen contiene varios elementos que necesitan moverse por separado, conviene entregarlos en archivos independientes o con transparencia.

Para el personaje, es útil aportar una hoja de diseño (character sheet) con vistas, proporciones, expresiones y poses de referencia. Si se entrega un sprite sheet de animación, identificar claramente sus celdas, orden, dimensiones y ciclo previsto. Una hoja de diseño no es lo mismo que un sprite sheet.

También conviene especificar:
- Resolución y relación de aspecto objetivo.
- Qué elementos deben moverse.
- Dirección y recorrido aproximado de cámara.
- Si el personaje camina, vuela, mira, interactúa o permanece en una posición.
- Duración aproximada y ritmo de la pieza.

El usuario puede proporcionar estos datos progresivamente; no exigir todos antes de inspeccionar los materiales.

## 7. Criterios de aceptación

La prueba se considera técnicamente prometedora si:
- Los recursos originales se conservan.
- Las capas están organizadas y se dibujan en el orden correcto.
- El paralaje produce profundidad perceptible y coherente.
- El personaje puede integrarse sin perder su diseño original.
- Los movimientos y oclusiones se mantienen consistentes durante la cámara.
- La vista previa puede reproducirse y revisarse en el dispositivo objetivo.
- Se documenta qué fue implementado y qué no pudo validarse.

No declarar rigging, separación, animación, reproducción o rendimiento como completados sin haberlos comprobado.

## 8. Regla de decisión

Ante cada proyecto, el Director debe preguntarse primero: ¿se resuelve mejor como 2D, como 2.5D por capas o mediante una combinación de ambos? La opción predeterminada es la solución 2D/2.5D más sencilla que alcance la calidad solicitada. No escalar a 3D completo ni a herramientas de videojuegos por inercia.


## 9. Ampliación: profundidad visual y tratamiento de capas

La implementación por capas debe complementarse con una dirección visual específica para cada distancia. No basta con separar imágenes y asignarles distintas velocidades.

- Diferenciar cromáticamente los planos: el fondo puede integrarse con tonos atmosféricos y menor saturación/contraste; los planos intermedios deben mantener una transición gradual; el sujeto y el primer plano deben conservar la jerarquía necesaria para la lectura.
- Aplicar perspectiva atmosférica y detalle progresivo: los elementos lejanos suelen mostrar menos detalle fino, contraste local y saturación. Evitar desenfocar indiscriminadamente o aplicar filtros uniformes sin criterio artístico.
- Inspeccionar los PNG con alfa antes de componer. La transparencia no garantiza bordes limpios: revisar halos, contaminación de color, matte, esquinas opacas, huecos y elementos fusionados.
- Preparar derivados sobre copias, conservando los originales. Corregir máscaras, bordes y recortes solo después de inspeccionar y previsualizar; no ejecutar procesos destructivos en lote sin aprobación.
- Validar primero una composición estática completa. No añadir cámara ni animación hasta que encuadre, perspectiva, color, oclusión e integración visual funcionen.
- Configurar el paralaje por capa con pesos horizontales y verticales explícitos, asociados a una profundidad definida. Los pesos deben calibrarse para la cámara y la escena, no copiarse ciegamente de ejemplos de otro motor.
- Probar el recorrido de cámara para detectar huecos, límites de imágenes, bordes residuales y oclusiones incorrectas.

La secuencia ampliada de diagnóstico, preparación, tratamiento cromático, composición estática, aprobación, paralaje, animación y verificación se documenta en [PROFUNDIDAD-VISUAL-PARALELAJE-Y-TRATAMIENTO-DE-CAPAS.md](PROFUNDIDAD-VISUAL-PARALELAJE-Y-TRATAMIENTO-DE-CAPAS.md). La prueba del castillo se conserva como experimento fallido y no como validación del método; sus incidencias deben servir como controles preventivos.
