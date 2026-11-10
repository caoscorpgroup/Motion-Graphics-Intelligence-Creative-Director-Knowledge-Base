# Protocolo de prueba comparativa de tecnologías 2D

**Estado:** propuesta de prueba para ejecutar con Gemini  
**Objetivo:** comparar métodos de construcción y renderizado usando exactamente el mismo encargo visual, sin confundir lenguajes, formatos y motores de dibujo.

## 1. Hipótesis

Una misma pieza gráfica puede construirse con diferentes arquitecturas 2D, pero cada arquitectura ofrece ventajas y límites distintos. La prueba debe permitir observar fidelidad visual, calidad de formas, separación de componentes, facilidad de animación, respuesta de controles, adaptación, depuración, mantenibilidad y exportación real.

No se busca declarar un ganador universal. Se busca definir para qué tareas conviene cada método.

## 2. Un único encargo para todas las versiones

Gemini debe construir una pieza de presentación gráfica basada en el concepto visual de OCCULTUM MOTION / Vexel Mirmidon:

- composición horizontal 16:9;
- fondo de estudio con retícula o ambiente discreto;
- personaje vectorial central con accesorios, cabeza y cuerpo diferenciados;
- panel lateral o inferior con nombre, ficha breve y paleta;
- tres capas visuales identificables y aislables;
- animación breve y continua de flotación, accesorio y núcleo óptico;
- controles de reproducción, pausa, reinicio y velocidad cuando la arquitectura los permita;
- controles de visibilidad de las tres capas;
- adaptación a escritorio y a Safari en iPad, con controles táctiles y composición legible sin depender de hover.

La geometría, el texto, la paleta, la escala, el encuadre, la duración y el comportamiento deben mantenerse iguales entre las versiones. No rediseñar el personaje para favorecer una tecnología.

## 3. Versiones que debe entregar

Cada versión debe estar separada, identificada y ser ejecutable por sí misma. Se pueden presentar en una única hoja comparativa con pestañas, pero los archivos de cada implementación deben permanecer independientes.

### A. SVG independiente

- Construir las formas y grupos dentro de un archivo SVG.
- Usar identificadores y grupos semánticos.
- Mantener los elementos vectoriales editables.
- Puede incluir estilos y animaciones declarativas SVG/CSS, pero debe indicar exactamente qué mecanismo utiliza.
- No simular controles que no estén implementados.

### B. HTML + CSS

- Construir la composición con elementos HTML y CSS.
- No utilizar SVG ni Canvas para dibujar el personaje en esta variante.
- Resolver las formas con elementos DOM, geometría CSS y pseudo-elementos cuando sea razonable.
- Indicar qué detalles no se pueden reproducir con la misma fidelidad o complejidad.

### C. Canvas 2D + JavaScript

- Dibujar el personaje y la composición en Canvas 2D.
- Mantener un modelo de objetos con identificadores, orden de dibujo, visibilidad y transformaciones.
- Separar las funciones de dibujo, actualización temporal y controles.
- No depender de un único bloque monolítico de código.
- Incluir un modo de depuración que muestre límites y nombres de objetos.

### D. SVG + JavaScript

- Construir el personaje en SVG y controlar sus estados, transformaciones y animaciones con JavaScript.
- Mantener los grupos editables.
- Conectar los controles a los elementos reales.
- Diferenciar la lógica de animación de la geometría de la ilustración.

### E. Arquitectura híbrida

- HTML para estructura e interfaz.
- CSS para diseño y presentación.
- SVG o Canvas 2D como renderizador principal, justificando la elección.
- JavaScript como controlador de tiempo, interacción y estados.
- No duplicar la misma ilustración en dos renderizadores sin una razón de prueba.

### SCSS: comparación complementaria

SCSS no debe presentarse como un sexto motor de dibujo. Si Gemini lo utiliza, debe entregar el archivo SCSS fuente y el CSS compilado, explicar el proceso de compilación y mostrar si mejora la organización del estilo. La vista final debe ejecutarse con CSS válido para el navegador.

### JavaScript: comparación complementaria

JavaScript no debe presentarse como un formato gráfico independiente. Se debe evaluar como controlador de lógica, geometría procedural, animación, eventos y estado. La prueba debe indicar si controla SVG, Canvas o el DOM.

## 4. Hoja de comparación

La hoja debe incluir una pestaña por implementación y una vista de comparación. Debe mostrar tecnologías usadas, archivos, renderizador, método de animación, estructura de capas, funciones implementadas, funciones no disponibles, dependencias, resultado visual y errores detectados.

No debe incluir botones decorativos. Cada control visible debe tener una función real y verificable.

## 5. Depuración por capas programáticas

Cada implementación debe poder activar un modo de diagnóstico que muestre, cuando aplique:

1. nombre e identificador de cada capa;
2. contorno o caja delimitadora;
3. orden de dibujo o apilamiento;
4. pivote y origen de transformación;
5. posición, escala y rotación;
6. estado visible/oculto y opacidad;
7. área interactiva;
8. tiempo actual y estado de animación.

En Canvas, esta información debe proceder del modelo de objetos y del orden de dibujo. En SVG y DOM puede obtenerse de los elementos y sus transformaciones. No fingir que Canvas conserva nodos individuales equivalentes a SVG.

## 6. Pruebas comunes

Ejecutar las mismas comprobaciones en todas las versiones que soporten la función: carga inicial, composición, aislamiento de capas, reproducción, pausa, reinicio, velocidad, continuidad del bucle, cambio de tamaño, uso táctil, ausencia de recortes, exportación real cuando se anuncie.

Ejecutar la prueba en un navegador de escritorio y en Safari para iPad. Comprobar orientación, viewport, densidad de píxeles, áreas táctiles, desplazamiento accidental de la página y controles sin hover. Para una función que no corresponda a una variante —por ejemplo, controles en un SVG puramente estático— marcar «no aplicable» y explicar por qué. No declarar que pasó una prueba que no se ejecutó.

## 7. Matriz de evaluación

Puntuar cada dimensión de 1 a 5 y adjuntar evidencia:

| Criterio | Qué se evalúa |
|---|---|
| Fidelidad visual | Coincidencia con el diseño común |
| Calidad gráfica | Curvas, bordes, proporciones, color y detalle |
| Editabilidad | Facilidad para modificar un componente sin rehacer el conjunto |
| Capas | Claridad, aislamiento y control independiente |
| Animación | Fluidez, sincronización, continuidad y control temporal |
| Interacción | Funcionamiento real de los controles |
| Adaptación | Legibilidad y encuadre en distintos tamaños |
| Depuración | Facilidad para localizar el origen de un error |
| Exportación | Archivo producido, completo y verificable |
| Mantenibilidad | Claridad, modularidad y complejidad razonable |

Registrar además errores concretos y el archivo/función donde se originan. La puntuación no sustituye la evidencia.

## 8. Reglas para Gemini

- No cambiar el diseño entre variantes para ocultar limitaciones.
- No entregar pseudocódigo ni controles simulados como si fueran funciones reales.
- No depender de servicios, APIs o suscripciones de pago.
- No descargar bibliotecas externas si la prueba puede resolverse con tecnologías nativas.
- No introducir modelado 3D ni recursos tridimensionales.
- No declarar rendimiento, compatibilidad o validación sin medirlos.
- Mantener los archivos separados y nombrados claramente.
- Entregar un README con instrucciones de ejecución y una matriz de resultados.
- Informar qué partes se implementaron, cuáles son aproximaciones y cuáles no se pudieron completar.

## 9. Resultado esperado

Al terminar, el Director Creativo debe poder consultar la matriz y decidir con criterio: SVG para gráficos vectoriales editables; HTML/CSS para interfaces, disposición y tipografía; Canvas 2D para dibujo procedural y escenas con redibujado continuo; JavaScript para lógica, control, interacción y animación; SCSS cuando la organización del CSS lo justifique; y combinaciones híbridas cuando cada tecnología tenga una responsabilidad clara.

La prueba debe generar conocimiento reutilizable, no una colección de ejemplos sin relación ni un nuevo framework propio.

## 10. Relación con el repositorio

Registrar los resultados como una nueva entrega experimental bajo `entregas/`, sin sustituir pruebas anteriores. Solo integrar una técnica en las directrices generales cuando exista evidencia suficiente y una ventaja clara para un tipo de tarea.
