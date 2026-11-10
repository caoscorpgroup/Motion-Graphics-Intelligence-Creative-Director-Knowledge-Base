# Arquitectura del prototipo

**Estado:** descripción de la implementación existente, no de una arquitectura objetivo.

La página actual utiliza un SVG embebido en `index.html`, hojas CSS y scripts JavaScript clásicos cargados mediante etiquetas `<script>`. El CSS combina Grid y Flexbox para la interfaz.

Aunque el código está separado en archivos por responsabilidad, la revisión no encontró un sistema completo de módulos ES, un controlador central conectado ni una integración funcional de los cuatro personajes. La separación de archivos no demuestra por sí sola que la arquitectura esté terminada.
