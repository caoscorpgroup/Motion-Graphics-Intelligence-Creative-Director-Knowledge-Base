# Sistema de control de calidad y verificación de producción creativa

**Estado:** directriz operativa vigente  
**Ámbito:** diseño gráfico, ilustración, interfaces, motion graphics y escenas 2D, 2.5D y 3D.  
**Referencia metodológica:** [sloemo01/diorama](https://github.com/sloemo01/diorama).  
**Naturaleza de la adaptación:** se adoptan principios de inspección y verificación; no se copian ni se incorporan como dependencias los scripts de Diorama.

## 1. Propósito

El Director Creativo debe comprobar tanto la calidad visual como el funcionamiento técnico de cada producción. Una captura atractiva no demuestra que una animación sea continua, que todos los personajes funcionen, que los controles respondan o que la pieza se adapte al dispositivo objetivo.

El control de calidad (QA) es una fase de producción, no una corrección opcional al final. Debe comenzar desde la planificación, aplicarse en las etapas pertinentes y conservar evidencias suficientes para revisar defectos y correcciones.

## 2. Principios obligatorios

1. **Verificar el resultado, no solo el código.** Inspeccionar el renderizado real y el comportamiento observable. La complejidad del código no prueba calidad artística.
2. **Separar calidad visual y calidad técnica.** Una pieza puede funcionar y verse mal, o verse bien y tener interacciones rotas. Evaluar ambas.
3. **Probar elementos individuales y el conjunto.** Un fallo en un personaje, capa, objeto o sistema puede quedar oculto en la composición general.
4. **Reproducir estados y tiempos.** Cuando la tecnología lo permita, poder solicitar un instante concreto de la animación y obtener el mismo estado de escena.
5. **Usar pruebas proporcionales.** No ejecutar pruebas 3D en un cartel estático ni exigir colisiones físicas a una animación tipográfica.
6. **Registrar evidencia y límites.** Cada conclusión debe indicar qué se probó, en qué entorno y qué sigue sin comprobarse.
7. **No fingir validación.** Si no se pudo ejecutar el proyecto, registrar la revisión como estática o pendiente; no marcarla como prueba funcional.
8. **Corregir la causa.** No ocultar un defecto de composición, dibujo o animación añadiendo efectos decorativos.

## 3. Selección de pruebas según la producción

El Director selecciona los módulos aplicables después de identificar el tipo de pieza, su tecnología, el dispositivo objetivo y las interacciones solicitadas.

| Módulo de QA | Qué comprueba | Cuándo aplicarlo |
|---|---|---|
| Ejecución y captura | Carga, errores, tamaños de viewport y capturas en momentos definidos | Piezas ejecutables o interactivas |
| Auditoría estructural | Elementos faltantes, duplicados, referencias rotas, estados y dependencias | Proyectos con estructura de escena o componentes |
| Inspección individual | Visibilidad, límites, pivotes, transformaciones y estado de cada elemento | Personajes, objetos y capas animadas |
| Continuidad temporal | Saltos, congelamientos, cambios bruscos, loops y sincronización | Toda animación relevante |
| Interacción y relaciones | Contacto, colisiones, distancias, orden de acciones y respuesta de controles | Escenas narrativas o interactivas |
| Inspección visual | Paleta, contraste, bordes, legibilidad, composición, materiales y acabado | Toda pieza visual |
| Hoja de contacto | Comparación de varios fotogramas en una sola vista | Animaciones, secuencias y transiciones |
| Evidencias e informe | Capturas, resultados, defectos, estado y pendientes | Toda entrega que requiera validación |

Estos módulos son capacidades de verificación, no nombres de herramientas obligatorias. Se pueden implementar con Playwright, Chromium, scripts propios, capturas manuales, utilidades del renderizador u otros medios adecuados. No construir un framework propio si una herramienta existente resuelve la prueba.

## 4. Pruebas específicas por dimensión

### 4.1 Producción 2D

Aplicar cuando se utilicen SVG, DOM/CSS, Canvas 2D, PixiJS o recursos raster/vectoriales.

- Verificar existencia, identificadores, visibilidad y orden de capas.
- Revisar límites, recortes, pivotes, escalas y transformaciones.
- Comprobar trazados, deformaciones y articulaciones de personajes.
- Revisar solapamientos, máscaras, filtros, bordes y legibilidad.
- En Canvas, inspeccionar el modelo lógico de objetos y sus límites; el bitmap por sí solo no conserva nodos independientes.
- Comprobar la continuidad de las trayectorias y el ciclo de animación.

### 4.2 Producción 2.5D

Aplicar cuando se simule profundidad mediante planos, cámara, escala, perspectiva y paralaje.

- Verificar orden y oclusión entre planos.
- Comprobar que el paralaje conserva la perspectiva y no separa elementos que deberían permanecer unidos.
- Revisar escala relativa, puntos de fuga y continuidad de cámara.
- Detectar intersecciones, recortes y cambios de profundidad involuntarios.
- Comprobar que sombras, atmósfera y desenfoque refuerzan el espacio en lugar de sustituir una construcción visual deficiente.

### 4.3 Producción 3D

Aplicar cuando exista geometría y espacio tridimensional real, por ejemplo con Three.js/WebGL.

- Verificar jerarquías de escena, geometrías, materiales, texturas y recursos.
- Inspeccionar cámara, encuadre, clipping, iluminación, sombras y oclusión.
- Comprobar rigging, articulaciones, puntos de apoyo y deformaciones cuando existan personajes.
- Revisar colisiones o contactos si se anuncian como comportamiento implementado.
- Medir rendimiento en el dispositivo objetivo cuando sea relevante.
- Distinguir una aproximación visual de una simulación física real.

## 5. Tiempo determinista y continuidad

Cuando la animación lo permita, definir una función de actualización que pueda evaluarse en un tiempo explícito, por ejemplo `renderAt(t)` o un mecanismo equivalente. El estado de cada objeto debe poder derivarse de un reloj de escena controlado, no depender exclusivamente de cuántos fotogramas hayan transcurrido.

Beneficios:
- Capturar el mismo instante de forma reproducible.
- Comparar antes y después de una corrección.
- Detectar elementos que no avanzan o desaparecen.
- Crear hojas de contacto y pruebas de regresión.
- Revisar sincronización entre personajes, objetos, cámara y efectos.

No imponer una arquitectura temporal nueva a proyectos simples. Si la librería o motor utiliza otro mecanismo, documentarlo y construir un adaptador de prueba cuando sea viable.

### Muestreo recomendado

Para una animación con duración conocida:
- capturar inicio, preparación, acción principal, contacto o punto de cambio, reacción, recuperación y final;
- añadir muestras uniformes a intervalos regulares;
- inspeccionar el loop en el punto de unión;
- revisar fotogramas alrededor de cualquier transición sospechosa.

La cantidad de muestras depende de la duración y complejidad. Una hoja de contacto ayuda a localizar problemas, pero no reemplaza la reproducción continua ni la inspección de fotogramas intermedios.

## 6. Inspección individual de elementos

Cada personaje u objeto relevante debe poder identificarse de forma estable mediante un ID o una referencia equivalente.

Para cada elemento animado comprobar, cuando corresponda:
- presencia y visibilidad durante el intervalo esperado;
- movimiento real de las propiedades que deberían cambiar;
- límites y posición en pantalla;
- continuidad de escala, orientación y transformación;
- pivotes y articulaciones;
- relación espacial con otros elementos;
- ausencia de saltos, desapariciones o teletransportes involuntarios.

No exigir movimiento a un elemento que debe permanecer estático. La prueba debe conocer el comportamiento esperado y distinguirlo de un congelamiento accidental.

## 7. Interacción, contactos y relaciones

Cuando una escena incluya acciones entre personajes y objetos, descomponerlas en estados verificables: preparación, aproximación, contacto, respuesta, separación y recuperación, según corresponda.

Comprobar:
- que el objeto y el personaje alcanzan posiciones compatibles;
- que el contacto visual coincide con el estado lógico anunciado;
- que no hay penetraciones, separaciones o deslizamientos no intencionales;
- que el orden de acciones y reacciones es coherente;
- que los controles cambian el estado real y producen un efecto observable.

No anunciar física, colisión, agarre, peso o interacción real si solo existe una animación decorativa aproximada.

## 8. Inspección de calidad visual

La revisión visual es independiente de las pruebas de código. Comprobar:

- concepto, jerarquía y claridad del mensaje;
- composición, equilibrio, encuadre y lectura;
- siluetas, dibujo, volumen, perspectiva y profundidad;
- coherencia de paleta, contraste, luz y materiales;
- calidad de trazados, bordes, máscaras y texturas;
- legibilidad tipográfica y consistencia de identidad;
- acabado y nivel de detalle adecuados al encargo;
- ausencia de defectos visibles, artefactos y elementos accidentales.

No aprobar una ilustración profesional solo porque el SVG o Canvas sea técnicamente válido. Aplicar también los criterios de aceptación visual de la dirección creativa y la metodología integral.

## 9. Registro de resultados

Cada prueba importante debe registrar:

- proyecto y versión o commit;
- fecha de prueba;
- entorno y dispositivo;
- tecnología y método de ejecución;
- módulo de QA aplicado;
- pasos y condiciones de reproducción;
- resultado: aprobado, defectuoso, bloqueado o no probado;
- evidencia: capturas, hoja de contacto, vídeo, logs o mediciones;
- defectos con gravedad, elemento afectado y tiempo de escena;
- corrección aplicada y resultado de la repetición;
- limitaciones y pruebas pendientes.

Formato sugerido de informe JSON (esquema ilustrativo, no un validador por sí mismo):

```json
{
  "project": "nombre-del-proyecto",
  "revision": "commit-o-version",
  "environment": {
    "browser": "browser-y-version",
    "device": "dispositivo",
    "viewport": "ancho x alto"
  },
  "checks": [
    {
      "id": "animation-continuity",
      "status": "pass",
      "evidence": ["evidence/contact-sheet.png"],
      "notes": "Sin saltos visibles en los intervalos inspeccionados."
    }
  ],
  "issues": [],
  "unverified": []
}
```

Los estados deben conservar su significado:
- **PASS:** comprobado y cumple el criterio.
- **FAIL:** comprobado y presenta un defecto.
- **BLOCKED:** no pudo probarse por una dependencia o limitación.
- **NOT TESTED:** no se ejecutó la prueba.
- **PARTIAL:** solo se comprobó una parte del criterio.

No convertir BLOCKED o NOT TESTED en PASS por ausencia de errores observados.

## 10. Criterios de salida y aceptación

Una entrega puede considerarse lista cuando:
1. La ejecución y las funciones esenciales se han probado en el entorno disponible.
2. La composición y calidad visual cumplen los criterios del encargo.
3. Los elementos animados relevantes se han inspeccionado individualmente.
4. La continuidad se ha revisado con reproducción y muestras suficientes.
5. Los controles e interacciones anunciados funcionan realmente.
6. Los defectos críticos están corregidos o se han declarado explícitamente.
7. Se conserva evidencia y se indican las limitaciones no verificadas.

Si el proyecto no se pudo ejecutar, el estado de entrega debe decir **revisión estática; ejecución pendiente**. Si la calidad visual no se pudo inspeccionar en el dispositivo objetivo, declararlo. No afirmar compatibilidad o rendimiento sin medirlos.

## 11. Flujo de trabajo integrado

1. **Planificar:** definir criterios de aceptación y pruebas pertinentes antes de producir.
2. **Construir:** implementar la pieza con el stack elegido para el encargo.
3. **Inspeccionar temprano:** probar estructura, composición y elementos principales antes de completar todos los detalles.
4. **Animar:** controlar tiempos, estados y relaciones entre elementos.
5. **Capturar:** producir muestras temporales y hojas de contacto cuando corresponda.
6. **Probar:** ejecutar pruebas visuales, funcionales y de interacción.
7. **Corregir:** priorizar defectos críticos y repetir las pruebas afectadas.
8. **Entregar:** conservar fuentes, evidencias, informe y pendientes.

## 12. Referencia externa: Diorama

El repositorio [sloemo01/diorama](https://github.com/sloemo01/diorama) se utiliza como referencia metodológica para:
- capturas en tiempos y tamaños determinados;
- auditorías estructurales;
- inspección individual de personajes y articulaciones;
- secuencias de fotogramas y hojas de contacto;
- análisis de distancias y relaciones entre elementos;
- inspección de color y bordes;
- conservación de informes y evidencias.

Sus herramientas están orientadas a un flujo concreto de dioramas 3D y no se convierten en dependencias generales del Director Creativo. Algunos controles deben adaptarse a SVG, DOM, Canvas, PixiJS o WebGL según el renderizador. Las pruebas de píxeles o las reglas de estética pixel art solo se aplican cuando el encargo las requiere.

La referencia inspira la metodología de verificación; no autoriza copiar código, instalar dependencias ni imponer su arquitectura a otros proyectos. Si en el futuro se reutiliza código de terceros, comprobar licencia, atribución, dependencias, compatibilidad y necesidad antes de incorporarlo.

## 13. Prueba cruzada del skill con otra IA

Para comprobar que las directrices se aplican fuera de ChatGPT, realizar una prueba controlada con otra IA que pueda leer el repositorio y producir código o un artefacto ejecutable.

### Condiciones de prueba

- Entregar a la IA el enlace al repositorio y pedirle que lea los documentos rectores, incluida esta directriz.
- Usar el mismo encargo, recursos, dispositivo objetivo y criterios de aceptación en cada IA.
- No darle la solución técnica por adelantado: debe justificar qué stack selecciona.
- Solicitar el artefacto, sus fuentes y evidencias de ejecución.
- No confundir una respuesta que resume las reglas con una IA que realmente las aplica.
- Registrar versión/modelo, fecha, instrucciones, archivos consultados y limitaciones de herramientas.
- No conceder permisos de escritura al repositorio durante la primera prueba. Trabajar en una rama o entrega separada después de revisar el resultado.

### Encargo de evaluación sugerido

> Diseña y produce una microescena narrativa de 8 a 12 segundos para una pieza de motion graphics. Debe contener dos personajes estilizados con siluetas diferenciadas, un escenario con profundidad y un objeto que uno entrega al otro. Desarrolla una dirección de arte propia y profesional; no utilices ensamblajes de primitivas geométricas como sustituto de ilustración. Define una secuencia con preparación, aproximación, contacto, reacción y recuperación. Selecciona libremente entre 2D, 2.5D, 3D o un enfoque híbrido, justificando la elección. Implementa controles funcionales para reproducir, pausar y reiniciar. Identifica por separado los personajes y el objeto. Si el entorno lo permite, permite inspeccionar la escena en tiempos deterministas y genera una hoja de contacto con al menos seis instantes. Comprueba encuadre, continuidad, visibilidad individual, interacción y adaptación a una vista móvil. Entrega el código, instrucciones reproducibles, capturas y un informe que distinga PASS, FAIL, BLOCKED y NOT TESTED. No afirmes que ejecutaste o validaste lo que no pudiste probar.

### Rúbrica de evaluación

Puntuar cada dimensión de 0 a 4:
- **0:** ausente o contradice el requisito.
- **1:** intento superficial, incompleto o no verificable.
- **2:** parcialmente correcto, con defectos importantes.
- **3:** cumple el requisito con evidencia razonable.
- **4:** resuelto con calidad alta, consistencia y evidencia reproducible.

| Dimensión | Qué observar |
|---|---|
| Comprensión y dirección de arte | Concepto, intención, estilo y decisiones justificadas |
| Calidad de ilustración | Siluetas, dibujo, volumen, materiales y acabado |
| Composición y espacio | Jerarquía, perspectiva, profundidad y encuadre |
| Elección tecnológica | Stack apropiado y arquitectura proporcionada |
| Animación narrativa | Acciones legibles, timing, continuidad y movimiento orgánico |
| Interacción | Reproducción, pausa y reinicio reales |
| QA por elemento | Inspección individual de personajes y objeto |
| QA temporal | Muestras, continuidad y hoja de contacto |
| Reproducibilidad | Fuentes, dependencias, instrucciones y evidencias |
| Honestidad técnica | Diferencia entre implementado, probado y pendiente |

**Interpretación:** 30–40 indica una aplicación sólida; 20–29, aplicación parcial que requiere correcciones; 0–19, la IA no demuestra todavía que el skill se haya traducido en resultados. Una puntuación alta no compensa fallos críticos de ejecución, honestidad o calidad visual. Registrar también los defectos cualitativos; la puntuación no sustituye el juicio de dirección de arte.

### Cómo diagnosticar fallos

Clasificar cada defecto antes de cambiar las instrucciones:
- **No consultó la documentación:** mejorar acceso, instrucciones de lectura y contexto suministrado.
- **La consultó pero no la aplicó:** reforzar prioridades, reglas obligatorias y criterios de aceptación.
- **La aplicó pero eligió mal la tecnología:** mejorar matriz de selección y ejemplos de decisión.
- **El código funciona pero el arte es débil:** reforzar dirección de arte, dibujo, siluetas y revisión visual.
- **La imagen se ve bien pero la animación falla:** reforzar reloj, estados, pruebas temporales y control individual.
- **No puede probar por limitaciones del entorno:** adaptar la estrategia de evidencia; no rebajar el criterio ni declarar éxito.
- **La IA inventa pruebas o capacidades:** reforzar el registro de estados y la regla de honestidad de ejecución.

Cambiar una causa por iteración y repetir el mismo encargo. Así se puede atribuir una mejora o regresión a una modificación concreta del skill.

## 14. Regla final

El control de calidad debe demostrar que la pieza se ve como fue diseñada, se comporta como fue especificada y puede reproducirse y revisarse. La aprobación requiere evidencia proporcional al encargo, no una afirmación de la IA.
