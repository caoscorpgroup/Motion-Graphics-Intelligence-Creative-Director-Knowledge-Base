# The Luminous Wilds — estudio de sistemas de movimiento

Prototipo experimental de un ecosistema bioluminiscente construido con React, React Three Fiber y Three.js.

## Sistemas incluidos

- **Entorno espacial 3D:** suelo, rocas, árboles, niebla y luces ambientales.
- **Vegetación reactiva:** hojas y copas con oscilación orgánica vinculada al parámetro global de viento.
- **Agua procedural:** superficie con desplazamiento de vértices y shader de color/ondas controlado por pulso y bioluminiscencia.
- **Red de raíces energéticas:** curvas Catmull-Rom y tubos emisivos.
- **Partículas instanciadas:** hasta 650 organismos luminosos, con deriva, oscilación y pulsación.
- **Esporas atmosféricas:** hasta 260 elementos flotantes.
- **Cámara reactiva:** desplazamiento suave según el puntero.
- **Panel de dirección:** controles de viento, bioluminiscencia, densidad, pulso de agua, pausa y reinicio.

## Ejecución

Abrir `index.html` desde un servidor estático con acceso a Internet. Las dependencias React, Three.js y React Three Fiber se importan desde esm.sh mediante import map. No hay backend, API de pago ni telemetría.

## Estado de validación

Primera implementación de referencia, pendiente de ejecución y prueba visual en Safari/iPad y navegadores de escritorio. La inspección del código no equivale a validar rendimiento, compatibilidad ni calidad visual en dispositivo.

## Qué debe evaluarse

1. Estabilidad de la escena y carga de módulos externos.
2. Fluidez con densidad baja, media y máxima.
3. Respuesta táctil y adaptación vertical/horizontal.
4. Continuidad de animación al cambiar parámetros y al pausar/reanudar.
5. Coherencia visual entre vegetación, agua, raíces y partículas.
6. Posibles mejoras: interacción local con el agua, ondas de choque, variación de especies vegetales, cámara por keyframes, audio-reactividad opcional y composición narrativa por fases.

Este experimento no pretende ser un motor ni un generador de partículas independiente. Es una prueba de dirección y coordinación de múltiples sistemas gráficos en una sola composición.
