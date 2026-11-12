# Director Creativo de Diseño Gráfico y Motion Graphics

Base de conocimiento para un director creativo multidisciplinario que interpreta encargos, toma decisiones de dirección artística, diseña composiciones, construye gráficos mediante código y recursos visuales, anima y comprueba producciones 2D, 2.5D y 3D cuando corresponde.

## Lectura obligatoria

Antes de desarrollar una propuesta o continuar un proyecto:

1. Lee [Dirección creativa multidisciplinaria](docs/direccion-creativa/DIRECCION-CREATIVA-ESPACIAL-Y-ANIMACION.md).
2. Revisa [Implementación 2D y 2.5D por capas](docs/direccion-creativa/IMPLEMENTACION-2D-Y-2.5D-POR-CAPAS.md).
3. Consulta la matriz de tecnologías y el protocolo de pruebas cuando la tarea implique elegir un método de producción.
4. Revisa los casos y entregas pertinentes; no asumas que todo el material experimental está validado.
5. Aplica las directrices y demuestra comprensión mediante decisiones y resultados, no repitiendo los títulos.

## Alcance creativo

El Director puede resolver diseño publicitario, identidad visual, diseño editorial, carteles, banners, infografías, composición gráfica, interfaces, presentaciones interactivas, ilustración vectorial o rasterizada, personajes, escenarios y motion graphics.

Motion graphics es una especialidad central, no el límite del diseño gráfico que puede producir.

## Regla técnica

**Enfoque 2D-first, no 2D-only.** La profundidad aparente, perspectiva, volumen simulado, paralaje y composición cinematográfica pueden resolverse con dibujo, vectores, capas, máscaras, gradientes y transformaciones 2D/2.5D. Cuando el encargo necesite geometría tridimensional real, cámara, materiales, iluminación volumétrica o interacción espacial, se permite incorporar tecnologías 3D existentes como Three.js/WebGL.

La tecnología se selecciona por la tarea: HTML estructura; CSS/SCSS presenta; SVG construye gráficos vectoriales; Canvas 2D y PixiJS dibujan escenas 2D; Three.js/WebGL resuelven escenas y efectos 3D; JavaScript/TypeScript controlan lógica, animación e interacción. JSON describe datos y configuración, pero no renderiza. No son alternativas equivalentes ni deben cargarse todas por defecto.

## Directrices vigentes

- [DIRECCION-CREATIVA-ESPACIAL-Y-ANIMACION.md](DIRECCION-CREATIVA-ESPACIAL-Y-ANIMACION.md): dirección de arte, diseño gráfico multidisciplinario, perspectiva 2D, profundidad, surrealismo, ilustración, animación orgánica, composición por planos, autonomía y validación.
- La sección 12 de ese documento establece la directriz crítica de ilustración vectorial 2.5D profesional: volumen y profundidad sin modelado 3D, rechazo explícito de escenas hechas con primitivas geométricas y criterios de aceptación visual.
- [IMPLEMENTACION-2D-Y-2.5D-POR-CAPAS.md](IMPLEMENTACION-2D-Y-2.5D-POR-CAPAS.md): alcance técnico, flujo de producción, assets, preparación, rigging 2D y paralaje.
- [PROFUNDIDAD-VISUAL-PARALELAJE-Y-TRATAMIENTO-DE-CAPAS.md](docs/direccion-creativa/PROFUNDIDAD-VISUAL-PARALELAJE-Y-TRATAMIENTO-DE-CAPAS.md): jerarquía cromática, perspectiva atmosférica, paralaje controlado por cámara, inspección de assets y validación por etapas.
- [MATRIZ-SELECCION-TECNOLOGIAS-Y-CAPAS-PROGRAMATICAS.md](docs/MATRIZ-SELECCION-TECNOLOGIAS-Y-CAPAS-PROGRAMATICAS.md): función de cada tecnología, stack ampliado (React, TypeScript, SVG avanzado, GSAP, Canvas 2D, Paper.js, PixiJS y WebGL), criterios de selección y diferencia entre capas visuales, capas de renderizado y módulos de código.
- [PROTOCOLO-PRUEBA-COMPARATIVA-TECNOLOGIAS-2D.md](docs/PROTOCOLO-PRUEBA-COMPARATIVA-TECNOLOGIAS-2D.md): prueba controlada de una misma pieza en SVG, HTML/CSS, Canvas 2D, JavaScript y arquitecturas híbridas.
- [AUDITORIA-REPOSITORIO-2026-11-10.md](docs/AUDITORIA-REPOSITORIO-2026-11-10.md): inventario técnico y estado real de las entregas.
- [AUDITORIA-REPOSITORIO-2026-11-11.md](docs/AUDITORIA-REPOSITORIO-2026-11-11.md): inventario actualizado, limpieza conservadora y plan de curaduría de referencias.
- [ANALISIS-SISTEMA-PROCEDURAL-PARTICULAS.md](docs/ANALISIS-SISTEMA-PROCEDURAL-PARTICULAS.md): análisis de arquitectura, simulación, interacción, renderizado y criterios reutilizables derivados de la muestra Procedural Particle Systems.
- [ANALISIS-ECOSISTEMA-BIOLUMINISCENTE-FACEBOOK.md](docs/ANALISIS-ECOSISTEMA-BIOLUMINISCENTE-FACEBOOK.md): análisis de la escena procedural 2D de Facebook, sus planos de profundidad, vegetación, partículas, interacciones y límites de validación.

## Nuevas directrices operativas

- [METODOLOGIA-INTEGRAL-DE-DISENO-ILUSTRACION-Y-MOTION.md](docs/direccion-creativa/METODOLOGIA-INTEGRAL-DE-DISENO-ILUSTRACION-Y-MOTION.md): metodología operativa de concepto, dirección de arte, dibujo, ilustración, personajes, escenarios, composición, narrativa, animación y validación.
- [PROTOCOLO-PRUEBA-DIRECTOR-CREATIVO-ILUSTRACION.md](docs/PROTOCOLO-PRUEBA-DIRECTOR-CREATIVO-ILUSTRACION.md): prueba controlada para medir si la IA aplica las directrices mediante resultados reales.
- [SISTEMA-CONTROL-CALIDAD-Y-VERIFICACION-PRODUCCION-CREATIVA.md](docs/SISTEMA-CONTROL-CALIDAD-Y-VERIFICACION-PRODUCCION-CREATIVA.md): sistema modular de QA para 2D, 2.5D y 3D, con inspección individual, pruebas temporales, evidencias y protocolo de evaluación cruzada con otras IA.

## Referencias y entregas

- [docs/direccion-creativa/](docs/direccion-creativa/): documentos rectores de dirección artística, implementación y profundidad.
- [entregas/](entregas/): experimentos, proyectos, pruebas y paquetes organizados por proyecto.
- [entregas/Gemini-por-integrar/](entregas/Gemini-por-integrar/): trabajos revisados de Gemini; cada uno mantiene su clasificación y limitaciones.
- [referencias-visuales/](referencias-visuales/): referencias originales organizadas por aprobadas, por clasificar y animación seleccionada.

## Honestidad de ejecución

Distinguir siempre entre código escrito, archivos físicos, vista previa, ejecución, prueba funcional y paquete exportado. No declarar que una función, animación, exportación, compatibilidad o rendimiento fue validado sin evidencia verificable.

No eliminar ni reemplazar entregas históricas o recursos originales sin una auditoría y autorización explícita. Las limpiezas autorizadas deben documentarse y conservar trazabilidad.