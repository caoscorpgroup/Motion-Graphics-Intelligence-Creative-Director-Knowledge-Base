# Capacidades multimodales para dirección visual y producción de assets

**Estado:** directriz de capacidad reutilizable; no implica integración de un proveedor específico.  
**Ámbito:** Director Creativo, modelos colaboradores y herramientas de generación/edición visual.  
**Origen del análisis:** revisión exploratoria de [OpenSenseNova/SenseNova-U1](https://github.com/OpenSenseNova/SenseNova-U1), 2026-11-13.  
**Objetivo:** convertir las capacidades interesantes observadas en requisitos transferibles para cualquier modelo o herramienta compatible, sin acoplar el flujo a SenseNova.

## 1. Principio de arquitectura

El Director Creativo debe poder utilizar modelos multimodales como colaboradores especializados para comprender referencias, proponer recursos visuales, generar imágenes y realizar ediciones. Estas herramientas son proveedores intercambiables dentro del flujo, no el Director Creativo, no el motor de animación y no una dependencia obligatoria.

La elección del proveedor se realiza por tarea, calidad demostrada, disponibilidad, coste, licencia, privacidad, compatibilidad y facilidad de integración. Si no hay un proveedor adecuado o su uso no está disponible, el flujo debe continuar con recursos existentes, diseño programático o una alternativa validada.

No asumir que un modelo anunciado como multimodal puede ejecutar todas las operaciones visuales con precisión. Verificar cada capacidad mediante pruebas y evidencia.

## 2. Capacidades transferibles que sí se deben incorporar

### 2.1 Comprensión y análisis de referencias

Cuando se proporcionen imágenes, hojas de personaje, escenarios, storyboards, composiciones o capturas, el modelo colaborador debe poder:

- Identificar sujetos, objetos, materiales, estilo, paleta, iluminación y jerarquía visual.
- Describir encuadre, perspectiva, horizonte, planos, oclusiones y relaciones espaciales.
- Reconocer la estructura de una composición y distinguir elementos principales, secundarios y ambientales.
- Detectar inconsistencias entre una referencia y el objetivo solicitado.
- Extraer restricciones explícitas: elementos que deben conservarse, modificarse, añadirse o eliminarse.
- Separar observaciones verificables de interpretaciones o inferencias.

El análisis debe producir información útil para producción: inventario de elementos, relaciones espaciales, decisiones de dirección de arte y requisitos de los assets. No limitarse a una descripción genérica de la imagen.

### 2.2 Generación de recursos visuales

Los modelos de imagen pueden apoyar la creación de:

- Personajes, expresiones, poses y variaciones de vestuario.
- Escenarios, fondos, arquitectura, objetos y utilería.
- Texturas, materiales, patrones, elementos atmosféricos y referencias de iluminación.
- Ilustraciones editoriales, carteles, conceptos gráficos, composiciones y storyboards.
- Variantes de concepto para explorar dirección artística.

La generación debe seguir una especificación visual preparada por el Director Creativo. Cuando un asset vaya a animarse, el encargo debe incluir requisitos de producción: vista, pose, silueta, separación de extremidades, espacio negativo, fondo, encuadre, proporciones, zonas de articulación y elementos que no deben quedar ocultos.

Una imagen atractiva no es automáticamente un asset utilizable. Evaluar su legibilidad, coherencia, resolución, recorte, fondo, transparencia, continuidad estilística y posibilidad real de preparación.

### 2.3 Edición localizada y conservación

Preferir operaciones delimitadas cuando solo deba cambiar una parte de una imagen. La instrucción de edición debe especificar:

1. Región u objeto que se modifica.
2. Cambio exacto requerido.
3. Elementos que deben permanecer intactos.
4. Relación de iluminación, perspectiva, escala, material y estilo que debe conservarse.
5. Criterios de aceptación y defectos que invalidarían el resultado.

Después de editar, comparar con el original. Comprobar identidad del personaje, silueta, pose, composición, fondo, proporciones, bordes, artefactos y cualquier elemento que debía permanecer sin cambios. No afirmar conservación perfecta sin inspección.

### 2.4 Composición, diagramas e infografías

Un modelo visual puede asistir en la exploración de jerarquía, distribución, relaciones, iconografía y estructura de infografías o composiciones con varios elementos.

Para piezas con texto exacto, datos, diagramas técnicos o requisitos de alineación, mantener el contenido estructurado y renderizarlo mediante HTML/CSS, SVG u otra herramienta determinista cuando sea necesario. No confiar exclusivamente en una imagen generada para texto pequeño, cifras, etiquetas, gráficos cuantitativos o diagramas que deban ser exactos.

### 2.5 Continuidad visual y narrativa

Para secuencias, storyboards o familias de assets, definir una biblia visual compartida: identidad de personajes, proporciones, vestuario, paleta, materiales, iluminación, perspectiva, escala, escenario y reglas de composición.

Generar variaciones a partir de referencias y especificaciones comunes. Evaluar la continuidad entre resultados; no asumir que el modelo mantiene automáticamente la identidad de un personaje o la geometría de un escenario entre generaciones.

## 3. Flujo de trabajo recomendado

1. **Brief:** el Director interpreta el objetivo y determina el producto visual y sus restricciones.
2. **Descomposición:** identifica personajes, objetos, escenarios, planos, texto, efectos y elementos que requieren edición o animación.
3. **Dirección de arte:** fija estilo, composición, perspectiva, iluminación, paleta, materiales y continuidad.
4. **Selección de proveedor:** elige modelo/herramienta por capacidad comprobada, coste, licencia, disponibilidad y privacidad.
5. **Instrucción de producción:** genera prompts específicos por asset, incluyendo requisitos de animabilidad y conservación.
6. **Generación o edición:** produce alternativas o cambios acotados.
7. **Inspección:** revisa calidad, continuidad, anatomía, perspectiva, texto, artefactos y cumplimiento del brief.
8. **Preparación:** recorta, separa, limpia, organiza y prepara capas/partes; usar herramientas de imagen o código según convenga.
9. **Implementación:** construir la composición y animación con tecnologías adecuadas (SVG, HTML/CSS, Canvas 2D, GSAP, PixiJS, Three.js u otras ya justificadas).
10. **QA:** validar por separado calidad artística, integridad de assets, funcionamiento, continuidad temporal, rendimiento y exportación.

El Director Creativo conserva la responsabilidad de dirección, selección, integración y aceptación. El proveedor visual no aprueba su propio resultado.

## 4. Contrato mínimo para solicitar un asset

Cada solicitud a un proveedor visual debería incluir, según corresponda:

- **Objetivo:** función del asset dentro de la pieza.
- **Sujeto y contenido:** qué debe aparecer.
- **Estilo:** lenguaje gráfico, nivel de acabado y referencias.
- **Composición:** encuadre, punto de vista, perspectiva, escala y ubicación.
- **Luz y materiales:** dirección, intensidad, contraste y superficies.
- **Continuidad:** referencias y rasgos que deben conservarse.
- **Animabilidad:** pose, separación, articulaciones, silueta y espacio para movimiento.
- **Fondo y formato:** transparencia, relación de aspecto, resolución y formato requerido.
- **Restricciones:** elementos prohibidos, texto exacto, objetos inmutables y límites de edición.
- **Aceptación:** condiciones observables que determinan si el resultado sirve.

No rellenar datos que el encargo no requiera. Preguntar solo si falta una condición esencial; en los demás casos, el Director toma decisiones razonables.

## 5. Límites: qué no delegar a un generador de imágenes

Una imagen generada no sustituye por sí sola:

- Rigging, jerarquías de huesos, pivotes o deformación controlada.
- Animación temporal, interpolación, ciclos, sincronización o interacción funcional.
- Separación fiable de todas las capas de un personaje complejo.
- Código editable, estructura DOM/SVG, lógica, controles o exportación.
- Precisión garantizada de texto, datos, diagramas o geometría.
- Validación técnica, pruebas de funcionamiento o mediciones de rendimiento.

Estas tareas deben resolverse con herramientas especializadas y verificarse en el proyecto real. Un proveedor de imagen puede entregar referencias o recursos iniciales, pero la preparación y animación siguen siendo responsabilidad del flujo de producción.

## 6. Evaluación de proveedores

No declarar un modelo como recomendado por sus demostraciones, tamaño, nombre o licencia general. Ejecutar una prueba representativa y registrar:

- Comprensión correcta de la instrucción y de la referencia.
- Fidelidad de identidad y continuidad entre variaciones.
- Calidad de silueta, anatomía, perspectiva, composición y materiales.
- Precisión de edición localizada y conservación de regiones no afectadas.
- Legibilidad y exactitud de texto cuando aplique.
- Resolución, formatos, transparencia y calidad de salida.
- Tiempo, límites de uso, coste y disponibilidad.
- Licencia de pesos, código, datos y dependencias; no asumir que todas comparten términos.
- Requisitos de hardware, privacidad y posibilidad de ejecución local o remota.
- Facilidad para integrarse sin bloquear a otros proveedores.

Clasificar cada capacidad como **probada**, **prometedora**, **no probada** o **no adecuada**. Mantener ejemplos y criterios de comparación para evitar conclusiones basadas solo en marketing.

## 7. Aplicación al análisis de SenseNova-U1

El repositorio [OpenSenseNova/SenseNova-U1](https://github.com/OpenSenseNova/SenseNova-U1) se toma como un caso de estudio de un enfoque multimodal que combina comprensión y generación visual.

### Aprendizajes reutilizables

- La comprensión visual y la generación pueden formar parte del mismo flujo de trabajo.
- La edición de una región debe tratarse como una operación con restricciones de conservación.
- La interpretación espacial de referencias es útil antes de construir una escena.
- Las tareas especializadas (por ejemplo, composición informativa o narrativa visual) deben evaluarse por separado y no suponerse resueltas por el modelo general.
- La disponibilidad de checkpoints, cuantizaciones, interfaces o integraciones debe comprobarse en el momento de evaluar el proveedor.

### Lo que no se incorpora como regla

- No imponer SenseNova-U1/U1.5 como modelo predeterminado.
- No imponer ComfyUI, GGUF, llama.cpp, stable-diffusion.cpp ni una GPU concreta al resto del flujo.
- No asumir que 8B, MoT, una cuantización o un requisito de VRAM garantizan rendimiento o calidad en el dispositivo objetivo.
- No afirmar que el modelo genera animación, rigging o proyectos editables completos.
- No considerar una licencia del repositorio como prueba suficiente de que pesos, datos, dependencias y servicios externos tengan idénticas condiciones.
- No añadir costes, servicios de pago ni infraestructura sin aprobación del usuario.

**Estado de SenseNova en este proyecto:** candidato para pruebas comparativas, no integrado ni validado como proveedor de producción.

## 8. Criterio final

La capacidad que se incorpora al Director Creativo no es «usar SenseNova», sino saber dirigir y evaluar colaboradores multimodales: analizar referencias, especificar assets, generar o editar recursos, comprobar continuidad y preparar material apto para producción.

La dirección artística, el diseño, la preparación de assets, la implementación programática y el control de calidad deben seguir funcionando aunque un proveedor desaparezca, cambie de licencia, requiera hardware no disponible o deje de ofrecer acceso.
