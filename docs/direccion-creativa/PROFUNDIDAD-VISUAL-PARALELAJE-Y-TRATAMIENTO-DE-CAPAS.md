# Profundidad visual, paralaje y tratamiento de capas

**Estado:** ampliación vigente de las directrices 2D/2.5D  
**Origen de referencia:** [GameMaker — Creating Depth & Immersion: Parallax](https://gamemaker.io/en/blog/creating-depth-and-immersion-parallax)  
**Ámbito:** escenas ilustradas, motion graphics, fondos multicapa y composiciones 2.5D.

## 1. Principio central

La profundidad convincente no se obtiene únicamente separando imágenes y desplazándolas a distintas velocidades. Debe construirse mediante la combinación coordinada de:

- composición y perspectiva;
- separación espacial y oclusión;
- paralaje y movimiento de cámara;
- jerarquía cromática entre planos;
- variación de contraste, saturación, nitidez y detalle;
- integración de iluminación y atmósfera.

El código controla el comportamiento de los planos, pero no sustituye la dirección artística ni la preparación gráfica de los recursos. Una escena con paralaje técnicamente correcto puede seguir siendo visualmente deficiente.

## 2. Jerarquía espacial de capas

Definir la función de cada capa antes de componer. La nomenclatura puede variar según la escena, pero normalmente se distinguen:

1. **Fondo distante:** cielo, horizonte, montañas lejanas o masas arquitectónicas remotas.
2. **Planos lejanos:** siluetas de paisaje, edificios o elementos ambientales.
3. **Planos intermedios:** estructuras y objetos que conectan el fondo con la zona principal.
4. **Plano principal:** sujeto, arquitectura o zona de acción que debe atraer la mirada.
5. **Primer plano:** vegetación, objetos, marcos o siluetas que generan escala, oclusión e inmersión.
6. **Capas ambientales:** niebla, humo, nubes, polvo, lluvia, partículas, luces u otros elementos; pueden pertenecer a distintas distancias y no deben agruparse automáticamente en un único plano.

No imponer una cantidad fija de capas. Separar un elemento en otra capa cuando necesite posición, oclusión, tratamiento cromático o movimiento independiente.

## 3. Paralaje controlado por cámara

El paralaje debe responder al movimiento de cámara. Cada plano recibe un factor de desplazamiento o peso de paralaje, de modo que los elementos cercanos suelen desplazarse más que los lejanos en relación con la cámara.

La referencia de GameMaker ilustra este principio con arreglos de pesos horizontales y verticales asociados a capas identificadas mediante nombres. La lógica puede trasladarse a JavaScript, CSS, SVG o Canvas 2D; no obliga a utilizar GameMaker.

Criterios de implementación:

- Mantener una configuración explícita por capa: profundidad, peso horizontal, peso vertical, escala, orden de dibujo y transformaciones permitidas.
- No depender de que el orden de un arreglo coincida accidentalmente con el orden de las capas del editor.
- Calibrar los pesos según la escena y la trayectoria de cámara; no copiar valores de ejemplo sin validarlos.
- Aplicar el movimiento de forma coherente en los ejes horizontal y vertical. Añadir desplazamiento diagonal o escala solo cuando la perspectiva lo justifique.
- Evitar movimientos excesivos que rompan la continuidad, revelen huecos o expongan los límites de las imágenes.
- Si la cámara sigue un sujeto, calcular el desplazamiento de cada plano respecto a una referencia de cámara estable, evitando saltos al iniciar o reiniciar.
- Los elementos animados dentro de una capa pueden conservar movimiento propio además del paralaje ambiental.
- El paralaje es una ilusión 2D de profundidad; no requiere un escenario 3D ni lógica de videojuego.

## 4. Tratamiento cromático según profundidad

El color es una herramienta estructural para separar planos. Si todas las capas conservan exactamente el mismo tono, saturación y contraste, pueden fundirse visualmente y perder profundidad.

Diseñar una progresión cromática deliberada y coherente con la iluminación y la atmósfera de la escena:

- **Fondo lejano:** suele tender a tonos relacionados con la atmósfera, con menor saturación y contraste.
- **Planos intermedios:** variaciones cromáticas graduales que mantengan la separación sin parecer elementos de otra ilustración.
- **Plano principal:** conservar una jerarquía de color suficiente para que el sujeto y la acción se lean claramente.
- **Primer plano:** puede tener colores más intensos, oscuros o contrastados para reforzar escala y enmarcado, según la dirección artística.

No aplicar un filtro uniforme por capa de manera automática. El tratamiento debe considerar iluminación, material, hora del día, clima, paleta original y función narrativa. Mantener coherencia entre todos los recursos.

## 5. Perspectiva atmosférica, nitidez y detalle

La distancia modifica cómo percibimos los objetos. La atmósfera reduce progresivamente la claridad de los elementos lejanos; además, los detalles pequeños se perciben con mayor facilidad en los planos próximos.

Aplicar de forma gradual y selectiva:

- **Planos lejanos:** menos detalle fino, contraste local y saturación; integración cromática con la atmósfera. Suavizar bordes o nitidez solo si el estilo y la distancia lo justifican.
- **Planos intermedios:** conservar detalle suficiente para identificar las formas, con contraste moderado.
- **Plano principal y primer plano:** permitir mayor definición, textura y contraste cuando deban dominar la lectura.

No confundir perspectiva atmosférica con desenfoque indiscriminado. No aplicar blur a todos los fondos por sistema. La pérdida de detalle puede lograrse mediante simplificación, reducción de contraste, color atmosférico y tratamiento selectivo. Respetar el lenguaje gráfico original.

## 6. Preparación y control de calidad de assets

Un archivo PNG con canal alfa no debe considerarse automáticamente un recorte limpio y listo para producción. Antes de componer, inspeccionar cada recurso individualmente:

- dimensiones, formato, perfil y canal alfa;
- transparencia real, zonas semitransparentes y píxeles residuales;
- halos claros u oscuros, contaminación de color y matte/fringing;
- bordes blancos, negros o dentados;
- esquinas opacas, huecos, sombras o contornos incrustados;
- elementos fusionados que deberían moverse por separado;
- continuidad de los bordes cuando se superponga con otras capas.

La inspección visual debe realizarse sobre fondos contrastantes (por ejemplo, claro, oscuro y un color saturado), además de revisar el alfa cuando sea posible.

Cuando sea necesario preparar el recurso, trabajar sobre copias y conservar intactos los originales. Las operaciones posibles incluyen recorte de bounding box, corrección de máscara, decontaminación de bordes, defringe, feathering controlado, reconstrucción localizada y limpieza de fondo. Elegir la intervención según el defecto real.

No ejecutar correcciones destructivas en lote sin previsualización. No inventar ni reconstruir partes importantes de la ilustración sin autorización o sin explicar el alcance de la intervención. Registrar qué se corrigió y qué sigue siendo una limitación.

## 7. Composición antes de animación: etapas obligatorias

La producción debe avanzar mediante etapas con validación visual:

1. **Inventario y diagnóstico:** identificar archivos, dimensiones, transparencia, estilo, contenido y problemas.
2. **Mapa espacial:** definir planos, profundidad relativa, oclusiones, horizonte, punto de fuga y función narrativa de cada elemento.
3. **Preparación de recursos:** limpiar o separar únicamente lo necesario, conservando originales y generando derivados identificables.
4. **Tratamiento visual por profundidad:** establecer paleta, saturación, contraste, nitidez y detalle para cada plano.
5. **Composición estática:** construir una imagen fija completa y coherente, con escala, perspectiva, encuadre, iluminación y continuidad.
6. **Revisión y aprobación:** comprobar la composición sobre el dispositivo o formato objetivo. No avanzar si la imagen fija no funciona.
7. **Sistema de cámara y paralaje:** asignar pesos y probar desplazamientos moderados en ambos ejes.
8. **Animación ambiental y de elementos:** añadir movimiento orgánico, inercia y acciones sin romper el espacio.
9. **Pruebas de recorrido:** revisar huecos, bordes, oclusiones, límites de las capas y continuidad durante todo el movimiento.
10. **Empaquetado y verificación:** probar carga de recursos, reproducción, pausa, reinicio, controles y entrega real.

La aprobación de una etapa no implica que las siguientes estén validadas. Distinguir siempre entre composición estática aprobada, paralaje implementado, animación funcional y entrega comprobada.

## 8. Lecciones de la prueba del castillo

La prueba anterior no se considera una validación satisfactoria del flujo ni del skill. Se conserva como experimento fallido y como fuente de criterios preventivos:

- Apilar recursos sin preparar bordes, máscaras y transparencias no produce una composición integrada.
- Los halos y líneas blancas entre imágenes indican que los recursos o sus bordes requieren inspección y corrección antes de usarse.
- Mantener todos los planos con un tratamiento cromático idéntico reduce la separación espacial.
- Colocar imágenes a distintas profundidades y moverlas a velocidades diferentes no garantiza una escena cinematográfica.
- No comenzar la animación hasta que la composición fija tenga calidad y continuidad visual.
- No declarar que una página, archivo, animación o paquete funciona sin haberlo ejecutado y comprobado realmente.

La próxima prueba debe cambiar el método de preparación y dirección visual, no limitarse a retocar los desplazamientos de las capas.

## 9. Criterios de aceptación ampliados

Una escena multicapa debe revisarse por separado en estos aspectos:

- **Lectura espacial:** se distinguen fondo, planos intermedios, sujeto y primer plano.
- **Color:** cada plano contribuye a la profundidad mediante una jerarquía cromática intencional.
- **Detalle y atmósfera:** la distancia se comunica con una reducción gradual y apropiada de detalle, contraste y saturación.
- **Integridad de assets:** no aparecen halos, líneas residuales, bordes defectuosos ni transparencias inesperadas.
- **Composición:** escala, perspectiva, oclusión, iluminación y continuidad forman un espacio unificado.
- **Paralaje:** los desplazamientos corresponden a la profundidad y al movimiento de cámara, sin revelar huecos ni romper la escena.
- **Animación:** los elementos tienen movimiento adecuado a su naturaleza, no solo traslación rígida.
- **Verificación:** la vista previa y los controles se prueban de verdad en el entorno de entrega.

## 10. Regla final

**Primero se dirige y prepara la imagen; después se construye la profundidad; al final se anima.** El paralaje es una herramienta dentro de la dirección artística, no un sustituto de ella.
