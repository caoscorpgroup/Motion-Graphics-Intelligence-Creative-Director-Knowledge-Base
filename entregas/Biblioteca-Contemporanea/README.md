# Biblioteca Contemporánea — Prototipo experimental 2D

Esta entrega se conserva como experimento de arquitectura visual y organización modular. **No debe presentarse como un sistema de rigging profesional ni como una prueba funcional completa.** La auditoría del código encontró módulos aislados, recursos SVG muy básicos y controles sin conexión verificable con un controlador central.

## Estructura del Repositorio
- `index.html`: Punto de entrada de la aplicación.
- `assets/`: Ilustraciones vectoriales (personajes, fondos y objetos).
- `source/`: Código modular en JavaScript (Rigging, Cinemática, Caminatas, Línea de tiempo).
- `styles/`: Hojas de estilo CSS.
- `tests/`: Suites de prueba e informe de auditoría técnica.
- `documentation/`: Arquitectura y especificaciones de rigs.

## Estado de validación

- El escenario SVG existe, pero los grupos de personajes del HTML están vacíos y los SVG externos no se cargan desde la página.
- Las funciones FK, IK, caminata, expresiones, transferencia de objetos y X-Ray son utilidades aisladas; no constituyen un rig completo integrado.
- Los controles de timeline, reproducción, velocidad, auditoría y X-Ray no están conectados de forma verificable a un sistema central en esta entrega.
- Los archivos de pruebas JavaScript existentes solo imprimen mensajes; no ejecutan aserciones.
- El informe histórico de pruebas fue corregido en `documentation/test-report.md` para reflejar esta limitación.

## Ejecución
Abra `index.html` en un navegador moderno para inspeccionar el prototipo visual. La apertura no implica que las funciones anunciadas estén implementadas.
