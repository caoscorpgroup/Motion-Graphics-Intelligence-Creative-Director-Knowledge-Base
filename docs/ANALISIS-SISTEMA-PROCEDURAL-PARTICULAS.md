# Análisis técnico: Procedural Particle Systems

**Clasificación:** referencia técnica de alto valor para gráficos y animación procedural 2D  
**Fuente:** `referencias-visuales/por-clasificar/Procedural Particle Systems.html`  
**Estado:** revisión estática del código fuente; no se ha ejecutado ni validado visualmente en navegador  
**Propósito:** extraer patrones de arquitectura, simulación, interacción, renderizado y control que puedan convertirse en criterios del Director Creativo.

## 1. Conclusión ejecutiva

La muestra destaca por integrar varios sistemas procedurales dentro de una escena compartida y por ofrecer controles que modifican parámetros y comportamientos reales. Su principal aportación no es una estética concreta ni el número de partículas, sino la combinación de:

- modelos de partículas separados por función;
- campos y fuerzas que actúan sobre los sistemas;
- búsqueda espacial de vecinos para el comportamiento colectivo;
- tiempo de simulación basado en delta time;
- interacción directa mediante puntero;
- separación conceptual entre controles, simulación y renderizado;
- diagnóstico y ajuste adaptativo de densidad.

Debe utilizarse como **referencia de ingeniería visual procedural**, no como plantilla estética ni como estándar de ilustración final. No debe hacer que el Director convierta todos los encargos en sistemas de partículas.

## 2. Arquitectura identificada

El HTML contiene una aplicación React compilada/minificada y una escena Canvas 2D. La implementación no está organizada como un proyecto fuente modular legible: la lógica de React y la escena aparecen empaquetadas en un bloque extenso. La arquitectura funcional sí permite distinguir estas responsabilidades:

### 2.1 Interfaz y dirección de la simulación

React administra:
- parámetros globales mediante controles deslizantes;
- activación independiente de los sistemas;
- presets que aplican conjuntos de parámetros;
- paletas de color;
- modos de interacción del puntero;
- reproducción y pausa;
- reinicio, pulso, explosión y pantalla completa;
- mensajes de estado y panel de diagnóstico.

La simulación lee el estado operativo desde una referencia mutable compartida. Esto evita depender de una actualización de React por cada partícula o fotograma. React se reserva principalmente para los cambios de interfaz y las métricas.

### 2.2 Motor de simulación

La escena mantiene colecciones distintas para:
- 1.200 partículas del enjambre;
- 340 partículas asociadas a vórtices;
- 240 partículas orbitales;
- 320 partículas de polvo;
- 42 elementos de bruma de fondo;
- polos magnéticos, vórtices, puntos de fuerza, ondas expansivas y arcos eléctricos.

La separación por colecciones evita tratar todos los objetos como si tuvieran la misma física. Cada sistema conserva sus propiedades y reglas de actualización.

### 2.3 Renderizado

Canvas 2D se encarga de dibujar la escena. El código utiliza:
- gradientes radiales para núcleo y bruma;
- composición aditiva para acumular luz;
- trazos para campos, arcos, órbitas y fractales;
- transparencia progresiva del fondo para producir persistencia;
- orden de dibujo para superponer atmósfera, campos, partículas y núcleo.

La interfaz no sustituye el renderizador: los controles cambian los datos que utiliza la simulación y el Canvas presenta el resultado.

## 3. Técnicas concretas que merece la pena conservar

### 3.1 Búsqueda espacial por cuadrícula

La clase de cuadrícula divide el espacio en celdas y almacena en cada una los índices de las partículas que contiene. Para consultar vecinos, revisa la celda actual y las ocho celdas adyacentes.

En el enjambre, esto reduce la búsqueda local frente a comparar cada partícula con las 1.199 restantes. La muestra utiliza celdas de aproximadamente 48 píxeles y consulta vecindarios compatibles con sus radios de interacción.

**Criterio reutilizable:** cuando una simulación necesite vecinos por proximidad, evaluar una cuadrícula espacial, hash espacial u otra estructura de búsqueda local antes de implementar comparaciones globales O(n²). La estructura debe corresponder al radio de interacción y al tamaño de celda; no copiar sus valores sin medir.

### 3.2 Comportamiento colectivo tipo Boids

El enjambre calcula tres comportamientos clásicos:
- **Separación:** evita aglomeraciones mediante una fuerza que aumenta al acercarse demasiado a otros agentes.
- **Alineación:** aproxima la velocidad propia a la velocidad media de los vecinos.
- **Cohesión:** dirige el movimiento hacia la posición media de los vecinos.

Después combina esas fuerzas con turbulencia, atracción/repulsión del núcleo, vórtices, ondas expansivas, polos magnéticos y el puntero. También limita la velocidad y aplica amortiguación.

**Criterio reutilizable:** si se solicita un enjambre, bandada, cardumen o multitud orgánica, implementar reglas de comportamiento identificables y ajustables. No llamar “Boids” a un conjunto de partículas que solo se atraen al centro o siguen un campo.

### 3.3 Campo de ruido coherente en el espacio y el tiempo

La clase de ruido construye una permutación determinista a partir de una semilla y calcula valores interpolados entre ocho esquinas de una celda tridimensional. La tercera coordenada cambia con el tiempo.

Esto corresponde a **value noise 3D interpolado**, no a Simplex Noise ni a Perlin Noise de gradientes. Aun así, ofrece continuidad espacial y temporal suficiente para orientar corrientes y variaciones orgánicas.

El ángulo del campo combina más de una escala de ruido, turbulencia y perturbación local del puntero. Se utiliza para influir en el enjambre y el polvo, además de dibujar pequeñas muestras vectoriales de dirección.

**Criterio reutilizable:** usar ruido procedural coherente —value noise, Perlin, Simplex u otra variante adecuada— cuando se necesiten campos suaves y cambiantes. Identificar correctamente el algoritmo utilizado. Un valor aleatorio independiente por píxel o fotograma no equivale a un campo coherente.

### 3.4 Composición de fuerzas

La simulación suma influencias de distintas fuentes antes de actualizar el movimiento: separación, alineación, cohesión, ruido, núcleo, vórtices, polos, ondas y puntero. Aplica amortiguación y limita la velocidad para contener la energía.

**Criterio reutilizable:** definir qué sistemas pueden influir en cuáles, con radios, intensidades, prioridades y límites claros. Las interacciones deben tener una razón visual o física; no basta con activar varios efectos a la vez.

### 3.5 Delta time y control temporal

El bucle calcula delta time entre fotogramas y lo limita para evitar saltos excesivos después de una pausa o bloqueo. La velocidad global escala el paso de simulación. La escena usa `requestAnimationFrame` para coordinar actualización y dibujo.

**Criterio reutilizable:** los sistemas temporales deben avanzar según tiempo transcurrido, no asumir que todos los dispositivos renderizan a 60 FPS. Separar tiempo real, velocidad de reproducción y tiempo de simulación cuando el proyecto requiera pausa, cámara lenta o aceleración.

### 3.6 Colecciones especializadas y reinicialización

Cada familia de partículas tiene propiedades y reglas distintas. Una función de inicialización distribuye los elementos en relación con el tamaño del lienzo y limpia los efectos transitorios.

**Criterio reutilizable:** separar los modelos por comportamiento, mantener funciones claras de inicialización/reinicio y evitar un único pool genérico cuando los sistemas necesitan estados incompatibles. Reutilizar objetos cuando el volumen de creación y destrucción lo justifique.

### 3.7 Interacción espacial directa

Los modos de puntero incluyen atracción, repulsión, vórtice, explosión, descarga eléctrica, colocación de puntos de fuerza y perturbación local del campo. La posición del puntero se transforma a coordenadas del Canvas y se utiliza como fuente de fuerzas o eventos.

**Criterio reutilizable:** las interacciones deben modificar el modelo de simulación, no limitarse a cambiar el cursor o mostrar una animación decorativa. En interfaces táctiles, utilizar áreas de interacción suficientes y no depender de hover.

### 3.8 Densidad adaptativa y diagnóstico

La aplicación estima FPS y tiempos de actualización/renderizado. Si la frecuencia cae por debajo de un umbral, reduce progresivamente un factor de densidad; si se recupera, lo incrementa con mayor cautela.

**Criterio reutilizable:** para escenas costosas, diseñar niveles de calidad o densidad adaptativa y mostrar métricas útiles. La adaptación debe degradar primero elementos secundarios, preservando la composición y la legibilidad. No anunciar un objetivo de FPS sin medirlo en los dispositivos pertinentes.

### 3.9 Persistencia y composición luminosa

El sistema de estelas se logra reduciendo la opacidad del rectángulo que limpia el fondo en cada fotograma. La composición aditiva acumula luz en elementos luminosos.

**Criterio reutilizable:** entender la persistencia del framebuffer y los modos de composición como técnicas de renderizado. Diferenciar este efecto de un sistema independiente de partículas con historial de posiciones. Controlar el balance entre brillo, saturación, acumulación y limpieza para evitar que la imagen se sature.

### 3.10 Núcleo y atmósfera como capas de composición

El núcleo se construye mediante varias capas de gradientes, un contorno irregular influido por ruido y anillos expansivos. La bruma utiliza gradientes radiales y grupos de polvo con movimiento suave.

**Criterio reutilizable:** los efectos procedurales deben diseñarse también como composición: jerarquía, escala, contraste, capas, profundidad aparente, color, densidad y ritmo. La matemática no sustituye la dirección artística.

## 4. Qué implementa realmente cada sistema

| Sistema | Implementación observada | Clasificación |
|---|---|---|
| Swarm | Separación, alineación y cohesión; búsqueda espacial; suma de fuerzas externas | Implementación sustancial |
| Vortex | Cinco centros de vórtice; componentes tangencial y radial; partículas actualizadas por órbita local | Implementación funcional |
| Magnetic | Cuatro polos de dos signos; fuerzas sobre el enjambre; líneas de campo aproximadas | Implementación funcional, modelo simplificado |
| Flow Field | Ruido 3D de valores interpolados; orientación de partículas y polvo; pequeñas flechas de visualización | Implementación funcional |
| Plasma | Polilíneas con puntos intermedios aleatorios entre regiones densas o el núcleo | Efecto eléctrico visual; no se observa ramificación recursiva real |
| Explosions | Ondas concéntricas, anillos y fuerzas sobre enjambre y órbitas; detonaciones periódicas y manuales | Implementación funcional de ondas, no simulación completa de fragmentos |
| Nebula | Gradientes radiales de fondo en varias escalas y polvo móvil | Atmósfera por capas; paralaje de cámara limitado/no demostrado |
| Trails | Persistencia global del lienzo mediante limpieza con alfa variable | Técnica de renderizado, no sistema autónomo de estelas |
| Orbital | Órbitas elípticas paramétricas con excentricidad y perturbación por ondas | Implementación funcional |
| Fractal | Árboles binarios recursivos de segmentos, con ángulo y longitud animados | Estructura recursiva sencilla |
| Núcleo | Gradientes, contorno modulado por ruido, pulso y anillos | Composición procedural |

La interfaz anuncia algunos comportamientos con términos más amplios que su implementación. En particular, los arcos eléctricos no muestran un algoritmo de ramificación física, las explosiones no generan fragmentos con colisiones y la bruma no demuestra un sistema completo de cámara/paralaje. Esta distinción debe conservarse en cualquier evaluación futura.

## 5. Interacción entre sistemas: mapa de influencias

La escena no implementa una interacción universal entre todos los sistemas. Las conexiones principales observadas son:

- El campo de flujo orienta el enjambre y el polvo.
- El núcleo atrae o repele el enjambre según los parámetros.
- Los vórtices afectan el movimiento del enjambre y tienen su propio conjunto de partículas.
- Los polos magnéticos afectan el enjambre.
- Las ondas expansivas empujan el enjambre y modifican el radio de las órbitas.
- El puntero puede ejercer fuerzas sobre el enjambre y perturbar el campo.
- El plasma toma puntos de origen y destino de partículas o del núcleo.
- El pulso modifica la intensidad de la escena y de las fuerzas asociadas.

**Criterio reutilizable:** documentar explícitamente el mapa de influencias de cada escena. Activar dos sistemas a la vez no demuestra integración; debe existir una relación de datos, fuerzas, eventos o composición entre ellos.

## 6. Límites y defectos que no deben heredarse

La muestra es útil, pero no constituye una arquitectura de producción lista para reutilizar sin revisión:

1. El código está compilado/minificado y concentrado en un bloque extenso. Es difícil de mantener, inspeccionar y ampliar.
2. La simulación y el renderizado viven dentro de un efecto React extenso, en vez de módulos legibles con contratos definidos.
3. El reinicio del tamaño del lienzo también reinicializa partículas y limpia efectos transitorios; redimensionar puede interrumpir la continuidad.
4. El bucle sigue solicitando fotogramas mientras está en pausa, aunque evita actualizar y dibujar la escena. Puede optimizarse suspendiendo el bucle o separando la actualización de métricas.
5. El modo de reinicio escribe `detonte` en vez de `detonate`; parece una errata en una propiedad no utilizada por el bucle. El reinicio efectivo se realiza mediante un evento personalizado.
6. Los arcos eléctricos son polilíneas con desviaciones aleatorias, no ramas generadas por un algoritmo de ramificación.
7. Las ondas expansivas no equivalen a una simulación de escombros, fragmentación, colisiones y conservación de energía.
8. La bruma tiene capas visuales, pero no debe describirse como paralaje de cámara completo sin comprobar desplazamientos diferenciados y controlables.
9. El campo magnético es una aproximación visual y de fuerzas, no una simulación electromagnética.
10. No se dispone de mediciones de ejecución independientes ni de pruebas en Safari/iPad. Los valores de diagnóstico presentes en el código no prueban el rendimiento real de esta revisión.

## 7. Criterios que deben incorporarse al Director Creativo

Estos criterios son generales y se aplican cuando la tarea realmente necesita gráficos o animación procedural.

### A. Diseño antes de programar

- Identificar qué debe generar el procedimiento: partículas, patrones, líneas, redes, vegetación, fluidos simulados, geometría ornamental, atmósfera u otro elemento.
- Definir la intención artística, la jerarquía visual y el papel narrativo del sistema.
- Establecer parámetros que tengan significado visual y límites coherentes.
- Elegir el renderizador según la tarea. Para este alcance 2D, Canvas 2D, SVG y DOM/CSS son opciones principales; no introducir modelado 3D.

### B. Modelo y arquitectura

- Separar interfaz, estado de simulación, reglas de comportamiento y renderizado.
- Definir objetos y colecciones con responsabilidades claras.
- Mantener identificadores y parámetros legibles.
- Separar inicialización, actualización, dibujo, interacción y reinicio.
- Evitar que React u otra interfaz se actualice por cada objeto en cada fotograma.
- Usar estructuras espaciales cuando la interacción local haga costosa la búsqueda global.
- Utilizar semillas cuando la reproducibilidad de una composición sea importante.

### C. Simulación y movimiento

- Utilizar delta time y límites estables de velocidad/fuerza.
- Elegir reglas explícitas: fuerzas, campos, órbitas, reglas de agentes, curvas paramétricas o ruido coherente.
- Definir interacciones reales entre sistemas y evitar acoplamientos accidentales.
- Controlar amortiguación, límites, respawn y estados transitorios.
- Mantener la continuidad cuando cambie el tamaño del lienzo, salvo que el reinicio sea intencional.

### D. Dirección visual y renderizado

- Diseñar paleta, contraste, densidad, escala, ritmo y composición.
- Controlar capas, orden de dibujo, transparencia, modos de composición y persistencia.
- Crear profundidad aparente con escala, opacidad, desenfoque, oclusión, movimiento diferencial y perspectiva 2D.
- Evitar que la acumulación de partículas o luz destruya la legibilidad.
- Adaptar la densidad y el detalle al tamaño y capacidad del dispositivo.

### E. Interfaz e interacción

- Cada control anunciado debe modificar un parámetro o acción real.
- Los presets deben aplicar valores definidos y coherentes.
- Ofrecer pausa, reproducción, reinicio, velocidad y controles específicos cuando el proyecto lo requiera.
- Hacer que las herramientas táctiles funcionen sin depender de hover.
- Proporcionar valores visibles, límites y estados comprensibles.
- Incluir modo de diagnóstico si la complejidad lo justifica.

### F. Rendimiento y validación

- Medir actualización y renderizado por separado.
- Evitar crear objetos y arrays innecesarios dentro de cada fotograma.
- Evaluar object pooling, caché de geometría y reducción adaptativa de densidad cuando aporten una ventaja medible.
- Comprobar DPR, resize, orientación, interacción táctil y estabilidad.
- Probar los sistemas individualmente y después en combinación.
- Diferenciar lo implementado, lo aproximado, lo simulado y lo realmente validado.

## 8. Prueba de aceptación para futuros sistemas procedurales

Una implementación puede considerarse técnicamente bien planteada cuando supera las pruebas aplicables:

1. **Aislamiento:** activar y desactivar cada sistema sin romper los demás.
2. **Control:** modificar parámetros y observar cambios previsibles en el comportamiento real.
3. **Interacción:** demostrar que el puntero o los controles alteran el modelo, no solo la interfaz.
4. **Integración:** mostrar al menos una interacción verificable entre sistemas.
5. **Tiempo:** mantener velocidad coherente a distintas frecuencias de fotograma.
6. **Reinicio:** restablecer un estado definido sin dejar efectos residuales involuntarios.
7. **Adaptación:** cambiar tamaño y orientación sin deformar o perder innecesariamente la escena.
8. **Rendimiento:** medir FPS, tiempo de actualización y tiempo de renderizado en el dispositivo objetivo.
9. **Legibilidad:** conservar jerarquía y contraste bajo densidad alta.
10. **Evidencia:** adjuntar una vista o grabación de ejecución y declarar qué no se pudo comprobar.

## 9. Aplicación al alcance general del skill

El Director Creativo debe poder usar estos principios en muchos tipos de producción, no únicamente en particle systems:

- ornamentos, mandalas y geometría generativa;
- redes, constelaciones y diagramas dinámicos;
- humo, polvo, lluvia, nieve, agua y atmósferas;
- vegetación, organismos y movimiento colectivo;
- fondos, transiciones, loops y visuales abstractos;
- tipografía cinética y composiciones gráficas reactivas;
- efectos de energía, luz, ondas y distorsión;
- escenas narrativas 2D con elementos procedurales complementarios.

La técnica procedural debe resolver una necesidad concreta y reforzar la dirección artística. No debe reemplazar ilustraciones, personajes, escenarios ni composición manual cuando estos requieran control formal y acabado específico.

## 10. Relación con las directrices existentes

Este análisis complementa, pero no reemplaza:

- `docs/MATRIZ-SELECCION-TECNOLOGIAS-Y-CAPAS-PROGRAMATICAS.md`: selección de renderizadores y separación de responsabilidades.
- `docs/PROTOCOLO-PRUEBA-COMPARATIVA-TECNOLOGIAS-2D.md`: pruebas, evidencia y honestidad de validación.
- `docs/direccion-creativa/DIRECCION-CREATIVA-ESPACIAL-Y-ANIMACION.md`: dirección artística, profundidad 2D, composición e integración.

La referencia debe seguir clasificada como material por estudiar hasta que se inspeccione visualmente en ejecución. El análisis estático permite identificar técnicas de código, pero no certificar la calidad final, la fluidez percibida ni el rendimiento.
