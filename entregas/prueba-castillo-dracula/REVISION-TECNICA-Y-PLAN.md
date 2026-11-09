# Prueba 2.5D — Castillo de Drácula
## Revisión técnica y plan de preparación

**Estado:** preparación en curso; no declarar Fase 1 ni Fase 2 completas todavía.  
**Fuentes:** archivos originales en `entregas/Gemini-por-integrar/`.  
**Regla de preservación:** no modificar, reemplazar ni mover los originales. Todo procesamiento debe producir derivados en esta carpeta.

## 1. Inventario recibido

| Archivo | Función prevista | Observación visual disponible | Estado |
|---|---|---|---|
| `01-fondo-cielo.PNG` | Fondo lejano | Cielo nocturno con luna, nubes, montañas y bosque distante. Ya contiene varios niveles visuales; no conviene dividirlo sin una razón compositiva. | Vista inspeccionada |
| `02-castillo.PNG` | Plano principal | Castillo gótico geométrico, ventanas cálidas. Se muestra sobre blanco; falta comprobar canal alfa y borde real. | Vista inspeccionada |
| `03-colina-camino.PNG` | Plano medio / suelo | Archivo presente en GitHub, pero el conector no entregó sus bytes en esta revisión. No se puede validar alineación ni transparencia. | Inspección pendiente |
| `04-primer-plano.PNG` | Marco frontal | Árboles secos, ramas, rocas y vegetación en los bordes, con apertura central. Se muestra sobre blanco; falta comprobar canal alfa. | Vista inspeccionada |
| `05-carruaje-caballo.PNG` | Elemento móvil | Archivo presente en GitHub, pero el conector no entregó sus bytes en esta revisión. No se puede evaluar el recorte ni articulaciones. | Inspección pendiente |
| `06-murcielagos-humo.PNG` | Elementos animados | Hoja combinada con varios murciélagos y tres columnas de humo. Se muestran sobre blanco. Hay que separar elementos y verificar si existe alfa. | Vista inspeccionada |

## 2. Hallazgos y riesgos

1. La dirección visual es consistente: ilustración 2D geométrica, paleta azul/violeta nocturna y luces cálidas en el castillo.
2. El fondo de cielo ya integra luna, nubes, montañas y bosque. Es una capa compuesta; se recomienda conservarla como plano lejano salvo que una prueba visual revele una necesidad concreta de separación.
3. La capa de primer plano funciona como marco visual, pero su gran apertura central debe coincidir con la posición del camino y la base de la colina.
4. La hoja de murciélagos y humo no es una capa final de escena: es una hoja de recursos. Los murciélagos deben recortarse uno por uno y el humo debe separarse en columnas/variantes.
5. No se ha confirmado si el blanco visible es fondo opaco o si el canal alfa se está representando sobre blanco. No aplicar eliminación de blanco ni chroma key hasta inspeccionar los píxeles: podría destruir brillos y detalles claros.
6. No se puede certificar todavía que las seis imágenes compartan exactamente lienzo, cámara, escala o puntos de anclaje.
7. Los bytes de `03-colina-camino.PNG` y `05-carruaje-caballo.PNG` no fueron entregados por el conector pese a que los archivos aparecen en el repositorio. Se requiere reintentar la lectura binaria o recibir copias adjuntas para procesarlos.

## 3. Arquitectura propuesta de composición

Orden de atrás hacia delante:

1. Cielo / atmósfera lejana.
2. Colina, camino y siluetas de montañas que pertenezcan a ese plano.
3. Castillo.
4. Carruaje y caballo, sujetos al camino y con profundidad coherente.
5. Murciélagos en varias distancias para reforzar profundidad.
6. Humo delante del cielo pero detrás de elementos que deban ocluirlo; el punto de origen debe coincidir con cada torre.
7. Árboles, ramas y rocas del primer plano.

La cámara debe tener desplazamiento moderado. El fondo se mueve menos; colina y castillo tienen desplazamiento intermedio; primer plano tiene el mayor desplazamiento. Evitar amplitudes que revelen huecos o bordes de las imágenes.

## 4. Preparación de elementos animables

### Murciélagos
- Recortar cada silueta como archivo independiente conservando contorno y antialias.
- Crear un ciclo de aleteo con poses suficientes para un bucle fluido; si la hoja no contiene poses alternas, no fingir que una silueta estática es un ciclo completo.
- Programar trayectorias curvas, escalas y velocidades distintas para evitar movimiento sincronizado.
- Variar profundidad y desenfoque sutilmente, sin ocultar la silueta.

### Humo
- Separar las tres columnas de humo de la hoja y limpiar los márgenes.
- Probar animación procedural por deformación, desplazamiento vertical, expansión, opacidad y turbulencia.
- Mantener el origen de cada columna anclado a la torre correspondiente.
- Si la separación deja artefactos o el recurso es demasiado ilustrativo para deformarse bien, conservarlo como textura y generar variaciones de movimiento mediante máscaras y transformaciones.

### Carruaje y caballo
- Inspeccionar por separado caballo, ruedas, cuerpo del carruaje, conductor/ornamentos si existen.
- Determinar si basta desplazamiento lateral con leve rebote o si hacen falta piezas articuladas.
- No reconstruir patas ni ruedas con rigging hasta verificar que la imagen permite separar las partes sin inventar geometría.

## 5. Criterios de aceptación de la Fase 1

- [ ] Los seis archivos originales se pueden leer y sus dimensiones quedan registradas.
- [ ] Canal alfa y fondo real comprobados en cada PNG.
- [ ] Composición 1920×1080 revisada con las seis capas en su posición.
- [ ] No hay halos blancos, bordes cortados, huecos ni desajustes evidentes.
- [ ] Murciélagos y humo separados en derivados.
- [ ] Se define un método viable de animación para cada elemento.
- [ ] Prueba de paralaje sin revelar bordes ni zonas vacías.
- [ ] Derivados y código de prueba guardados sin tocar los originales.

## 6. Fase 2 — Integración del personaje

**Bloqueada hasta recibir el character sheet.** No se debe inventar el diseño del personaje ni generar una versión sustituta.

Cuando llegue:
1. Inspeccionar vistas, poses, proporciones, silueta y resolución.
2. Identificar qué partes están separadas y cuáles vienen fusionadas.
3. Definir pivotes y jerarquía de cabeza, torso, brazos, manos, piernas, pies, cabello, ropa y accesorios según el diseño real.
4. Elegir rig por piezas, deformación de malla o animación por poses, según lo que permita el sheet.
5. Preparar una pose neutral y prueba de movimiento antes de integrarlo.
6. Ajustar escala, perspectiva, iluminación y oclusión para situarlo en el escenario.
7. Validar que el personaje se vea integrado y que sus articulaciones no se rompan.

### Requisitos prácticos del character sheet
- Preferible PNG de alta resolución.
- Fondo transparente o fondo uniforme claramente separable.
- Personaje completo, sin recortes de cabeza, manos o pies.
- Vista principal clara y, si existen, vistas adicionales y expresiones/poses.
- Para rigging por piezas, brazos, antebrazos, manos, muslos, piernas, pies, cabello y accesorios deben estar separados o ser separables. Si no lo están, se documentará qué reconstrucción hace falta.

## 7. Límites de esta revisión

**Actualización 2026-11-09:** los seis PNG ya fueron recuperados y analizados con Pillow en un entorno Linux aislado. Se confirmó que todos miden 1920×1080, están en RGBA y que cinco contienen transparencia alfa real; el cielo es opaco de forma intencional. El primer plano presenta esquinas opacas y requiere tratamiento especial. Los resultados medidos están en `diagnostico/asset-report.json` y `diagnostico/RESULTADOS-INSPECCION.md`. Aún no se ha certificado alineación semántica, separación de elementos, composición final ni prueba de paralaje. No declarar Fase 1 completa hasta ejecutar esas pruebas.

## 8. Ubicación de originales

`entregas/Gemini-por-integrar/`

Los derivados de esta prueba deben guardarse exclusivamente bajo:

`entregas/prueba-castillo-dracula/`
