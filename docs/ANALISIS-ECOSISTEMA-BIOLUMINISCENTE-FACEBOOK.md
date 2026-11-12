# Análisis técnico: Mundo luminoso, Face.html

**Clasificación:** referencia técnica de alto valor para ecosistemas y escenas procedurales 2D.  
**Fuente:** `referencias-visuales/por-clasificar/Mundo luminoso, Face.html`  
**Tecnologías observadas:** React + Canvas 2D.  
**Estado:** inspección estática del código; no se ha ejecutado ni validado visualmente en navegador o iPad.

## 1. Conclusión ejecutiva

La muestra de Facebook construye un ecosistema bioluminiscente 2D con múltiples subsistemas que comparten una misma escena. Su aportación principal está en la variedad de elementos, la organización por planos, el comportamiento ambiental y la interacción. No utiliza Three.js, WebGL ni shaders GLSL según el código inspeccionado.

La muestra es una referencia valiosa para demostrar que Canvas 2D puede sostener una escena procedural compleja. Sus cinco planos y el paralaje generan profundidad aparente, pero no geometría tridimensional real.

## 2. Arquitectura y composición

- React gestiona la interfaz, parámetros y controles.
- Canvas 2D dibuja la escena.
- La composición se organiza en cinco planos de profundidad con movimiento diferencial/paralaje.
- Los elementos ambientales se construyen mediante funciones procedurales especializadas.
- El bucle utiliza `requestAnimationFrame`, delta time limitado y ResizeObserver.
- La configuración limita el DPR a 2.
- Una cuadrícula espacial de aproximadamente 64 px permite consultas locales para interacciones.
- La semilla permite regenerar una distribución reproducible.

La separación funcional entre interfaz y dibujo es útil, aunque el HTML distribuido no equivale necesariamente a una arquitectura fuente modular lista para reutilizar.

## 3. Sistemas de escena identificados

### 3.1 Vegetación y organismos

Se observan:
- árboles con ramificación recursiva;
- plantas y tallos finos;
- hojas;
- flores con pétalos animados;
- hongos;
- raíces o redes luminosas.

Los elementos no son solo puntos de partículas: existe una composición ambiental con siluetas y estructuras vegetales diferenciadas.

### 3.2 Agua y atmósfera

La escena contiene dos charcas con ondas e interacción, haces de luz, bruma y capas ambientales. La sensación de profundidad procede de la distribución de planos, la escala, la transparencia y el desplazamiento diferencial.

### 3.3 Poblaciones de partículas

El código configura seis colecciones:

| Población | Cantidad configurada |
|---|---:|
| Esporas | 170 |
| Luciérnagas | 54 |
| Polvo | 210 |
| Polen | 120 |
| Agua | 150 |
| Energía | 116 |
| **Total** | **820** |

La densidad operativa puede reducir el número visible/activo respecto del total configurado.

## 4. Interacción y tiempo

Se identifican controles y lógica para:
- atracción y repulsión;
- perturbación por viento;
- ondas sobre el agua;
- variación de densidad;
- regeneración por semilla;
- interacción mediante puntero/tacto;
- actualización temporal con delta time;
- adaptación al tamaño del canvas.

La presencia de una función o un control en el código no demuestra que funcione correctamente en todos los navegadores. Es necesario ejecutar la muestra para validar cada operación.

## 5. Comparación con nuestro primer prototipo Canvas

El HTML autónomo propio priorizó apertura local y robustez, sin dependencias externas. Como consecuencia, su escena inicial era más sencilla en variedad de geometría, vegetación, composición por planos y subsistemas.

La muestra de Facebook demuestra un nivel de desarrollo procedural 2D más amplio en el código: más familias de elementos, árboles ramificados, flores, hongos, raíces, agua interactiva y distribución por planos. Esta diferencia de arquitectura y alcance estática no permite afirmar todavía que su resultado visual sea superior en todos los criterios; hace falta abrir y observar ambas escenas en condiciones comparables.

## 6. Qué puede aprender el Director Creativo

1. Diseñar el ecosistema como una composición de planos, no como una nube indiferenciada de partículas.
2. Separar poblaciones y organismos por comportamiento y función visual.
3. Combinar estructuras persistentes (árboles, raíces, plantas, rocas) con elementos móviles (esporas, polvo, polen, luciérnagas).
4. Utilizar ramificación recursiva cuando la forma orgánica lo justifique.
5. Dar a agua, vegetación y energía comportamientos distintos y reconocibles.
6. Relacionar la interacción con el modelo de escena, no solo con efectos de interfaz.
7. Usar semillas, delta time, límites de DPR y búsqueda espacial cuando sean apropiados.
8. Mantener una dirección artística clara: complejidad técnica y cantidad de partículas no sustituyen siluetas, materiales, iluminación, jerarquía ni composición.

## 7. Clasificación de evidencia

| Aspecto | Estado |
|---|---|
| React en interfaz | Identificado en código |
| Canvas 2D como renderizador | Identificado en código |
| Cinco planos de profundidad/paralaje | Identificado en código |
| Poblaciones y cantidades configuradas | Identificadas en código |
| Árboles ramificados y otros organismos | Identificados en código |
| Agua e interacciones | Lógica identificada; no ejecutada |
| Controles | Declarados/implementados en código; no probados |
| Calidad visual final | Pendiente de inspección |
| Fluidez y rendimiento | Pendientes de medición |
| Compatibilidad Safari/iPad | Pendiente de prueba |
| Geometría 3D/WebGL | No identificada; no es una muestra 3D |

## 8. Implicación para el stack del skill

La referencia no debe interpretarse como argumento para usar siempre Canvas 2D ni para evitar 3D. Refuerza una política de selección por necesidad:

- Canvas 2D/SVG/PixiJS para escenas gráficas y ecosistemas 2D.
- Composición 2.5D cuando la profundidad aparente y el paralaje sean suficientes.
- Three.js/WebGL cuando se necesiten geometría, cámara, materiales o iluminación tridimensionales reales.
- Arquitectura híbrida cuando cada renderizador tenga una responsabilidad clara.
- JSON para describir objetos, capas, parámetros, presets y relaciones de datos; no como motor de renderizado.

La regla general del skill es **2D-first, no 2D-only**.

## 9. Pruebas pendientes

- Ejecutar el archivo original en navegador.
- Capturar la escena completa y observar la jerarquía visual.
- Probar cada control y cada tipo de interacción.
- Medir FPS y estabilidad en Safari/iPad.
- Comparar con el prototipo propio usando mismo dispositivo, tamaño de pantalla y condiciones.
- Evaluar por separado composición, ilustración, profundidad, movimiento, interacción y rendimiento.

Hasta completar estas pruebas, la muestra se conserva como referencia técnica estática, no como validación de calidad visual final.
