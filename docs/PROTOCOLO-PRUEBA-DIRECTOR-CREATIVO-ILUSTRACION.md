# Protocolo de prueba del Director Creativo: ilustración, narrativa y motion 2D

**Estado:** protocolo de evaluación pendiente de ejecución  
**Objetivo:** comprobar si una IA aplica las nuevas directrices de diseño e ilustración en decisiones y resultados, no solo si puede repetir instrucciones o escribir código.

## 1. Principio de la prueba

La prueba debe evaluar el cambio de método. No se considera éxito que el resultado tenga más líneas de código, más nodos SVG, más gradientes, más partículas o más bibliotecas. Se evalúa la calidad del diseño, la originalidad de la dirección visual, la construcción de los componentes, la secuencia y la ejecución.

No cambiar el encargo a mitad de la prueba ni proporcionar a la IA una solución visual completa. El usuario puede aprobar o rechazar cada etapa según el flujo operativo.

## 2. Encargo de prueba recomendado

Crear una microhistoria ilustrada de duración breve, con:
- Un personaje original claramente identificable.
- Un escenario con profundidad y perspectiva.
- Dos objetos relevantes para la acción.
- Una interacción comprensible entre personaje y objeto/entorno.
- Tres momentos narrativos conectados: presentación, acontecimiento y consecuencia.
- Un lenguaje visual elegido y justificado por la IA.
- Producción 2D/2.5D; sin modelado 3D.

La temática y el estilo se seleccionarán al iniciar la prueba. No imponer de antemano estética isométrica, line-art, minimalista, geométrica, editorial o pictórica. La IA debe justificar por qué el lenguaje elegido sirve al concepto.

## 3. Ejecución por etapas

### Etapa A — Concepto y dirección
La IA presenta:
- Interpretación del encargo.
- Audiencia y mensaje.
- Dos o tres rutas conceptuales breves si existe espacio real para explorar.
- Dirección visual elegida, paleta preliminar, materiales y referencias conceptuales.
- Propuesta de los tres momentos narrativos.

**Evaluar:** claridad, originalidad, pertinencia, intención y capacidad de tomar decisiones. No aceptar una lista de estilos sin concepto.

### Etapa B — Personaje
La IA presenta un diseño legible que incluya:
- Silueta individualizada.
- Proporciones y anatomía estilizada.
- Rasgos, expresión, personalidad y pose.
- Vestuario/accesorios cuando correspondan.
- Vistas o poses adicionales solo si la continuidad las necesita.

**Evaluar:** identidad, construcción dibujada, expresividad y consistencia. Rechazar el personaje si es una colección de círculos, rectángulos y líneas sin diseño específico.

### Etapa C — Escenario
La IA presenta:
- Composición espacial completa.
- Horizonte/puntos de fuga o sistema de perspectiva apropiado.
- Primer plano, plano medio y fondo con funciones claras.
- Arquitectura/entorno y objetos con siluetas y superficies diseñadas.
- Valor, color, luz, sombras, atmósfera y materiales coherentes.

**Evaluar:** profundidad real dentro de la ilustración, escala, perspectiva, composición e integración. No confundir capas separadas con profundidad convincente.

### Etapa D — Objetos e interacción
Definir los objetos necesarios, su función narrativa, material, escala, puntos de contacto y partes móviles si las hay.

**Evaluar:** que los objetos parezcan diseñados para el mundo y la historia, no iconos genéricos añadidos al escenario.

### Etapa E — Planificación temporal
Presentar storyboard o Design Board de tres momentos, con encuadres, acciones, cámara, transiciones y continuidad. Indicar qué se mueve y qué permanece quieto.

**Evaluar:** claridad de acción, variedad de planos, ritmo, continuidad y legibilidad de la historia sin explicación excesiva.

### Etapa F — Prueba de animación
Después de aprobar los componentes y la planificación, implementar una acción breve que incluya al menos:
- Una acción principal legible.
- Anticipación y resolución cuando correspondan.
- Timing y spacing deliberados.
- Seguimiento/inercia o movimiento secundario apropiado.
- Interacción con un objeto o el entorno.
- Continuidad espacial y oclusiones correctas.

**Evaluar:** movimiento con intención y peso, no solo traslación uniforme o bucles decorativos.

### Etapa G — Implementación y validación
Construir una vista previa ejecutable con la tecnología adecuada. Inspeccionar el render final, corregir errores y documentar lo que realmente se comprobó.

**Evaluar por separado:** calidad visual, comportamiento de animación, controles, adaptación y entrega.

## 4. Reglas contra atajos que invalidan la prueba

- No presentar solo un moodboard o una descripción como si fuera la producción.
- No sustituir ilustración por una imagen generada aislada si se está evaluando dibujo programático y animación.
- No construir todo con primitivas geométricas por conveniencia.
- No añadir efectos para disimular siluetas, anatomía, perspectiva o composición débiles.
- No animar antes de aprobar los componentes y la composición.
- No copiar una referencia ni una entrega anterior como solución automática.
- No declarar que se renderizó, probó o exportó algo sin hacerlo.
- No instalar dependencias o usar servicios pagados sin autorización.
- No avanzar a la etapa siguiente sin revisión del usuario.

## 5. Matriz de evaluación

Puntuar cada criterio de 1 a 5:
- **1:** deficiente o ausente.
- **2:** débil; presenta problemas evidentes.
- **3:** funcional, pero con limitaciones importantes.
- **4:** sólido y coherente.
- **5:** convincente, intencional y bien resuelto.

| Criterio | Qué se observa |
|---|---|
| Concepto | Idea clara, pertinente y con potencial narrativo. |
| Dirección visual | Estilo elegido por una razón y aplicado con coherencia. |
| Dibujo | Siluetas, trazos, curvas, anatomía y superficies diseñadas; no ensamblaje automático de primitivas. |
| Composición | Jerarquía, foco, espacio positivo/negativo, escala y ritmo. |
| Profundidad | Perspectiva, oclusión, valor, color, detalle y planos convincentes. |
| Materiales e iluminación | Superficies diferenciadas, luz y sombras coherentes. |
| Personaje | Identidad, expresividad, proporción y consistencia. |
| Narrativa | Los tres momentos se conectan y la acción se entiende. |
| Animación | Timing, spacing, peso, anticipación, seguimiento e interacción. |
| Integración | Personajes, objetos y escenario pertenecen al mismo espacio visual. |
| Calidad técnica | Render, controles, reproducción, adaptación y archivos comprobables. |
| Honestidad | La IA distingue lo implementado de lo que no pudo verificar. |

No promediar para ocultar una falla crítica: dibujo, composición, profundidad, narrativa y validación visual son criterios esenciales. Un resultado con código correcto pero ilustración deficiente no aprueba.

## 6. Evidencias que deben conservarse

Guardar:
- Brief utilizado y versión de las instrucciones.
- Propuesta conceptual aprobada.
- Diseños aprobados de personaje, escenario y objetos.
- Storyboard/Design Board.
- Vista previa estática antes de animación.
- Capturas o grabación del resultado animado.
- Archivos fuente y versión ejecutable cuando existan.
- Matriz de evaluación y lista de defectos/correcciones.
- Diferencia respecto a pruebas anteriores.

## 7. Comparación con pruebas anteriores

Cuando se compare con una prueba previa, usar el mismo encargo o uno de dificultad equivalente. Mantener iguales formato, duración y restricciones. Comparar:
- Diseño de siluetas y personajes.
- Complejidad y calidad de ilustración.
- Profundidad y composición.
- Coherencia de estilo.
- Narrativa y cámara.
- Calidad de movimiento.
- Número y gravedad de correcciones necesarias.

No concluir que la IA mejoró por una sola imagen atractiva o por una explicación convincente. La mejora debe verse en la producción completa y en la capacidad de corregir defectos.

## 8. Resultado

Clasificar la prueba como:
- **Aprobada:** cumple criterios esenciales y no tiene defectos críticos.
- **Aprobada con observaciones:** demuestra mejora, pero necesita correcciones concretas.
- **No aprobada:** persisten fallas esenciales de dibujo, composición, profundidad, narrativa o validación.

La prueba no certifica que la IA nunca volverá a cometer errores. Sirve para medir si aplica el proceso, detecta problemas y produce resultados mejores de manera verificable.
