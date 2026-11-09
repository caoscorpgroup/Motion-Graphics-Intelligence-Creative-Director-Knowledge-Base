# Especificación obligatoria para prompts de generación de assets 2D / 2.5D

Esta especificación se aplica a todos los recursos visuales que se generen para el proyecto Director Creativo de Motion Graphics. El objetivo no es solo obtener una imagen atractiva: cada recurso debe poder integrarse, recortarse, componerse y animarse mediante código.

## 1. Entrega y formato

- Entregar PNG con canal alfa real cuando el recurso deba superponerse a otros planos.
- La transparencia debe estar codificada en el canal alfa. No usar fondos blancos, negros, grises, verdes ni patrones de cuadros para simular transparencia.
- No aplanar el recurso con un fondo opaco si se solicita transparencia.
- Mantener resolución suficiente para el tamaño final y los movimientos de cámara previstos.
- Usar dimensiones de lienzo explícitas y consistentes entre capas de una misma escena.
- No recortar partes del sujeto ni cortar sombras, accesorios, extremidades, alas, cabello o elementos que luego deban animarse.
- Evitar halos, bordes blancos, píxeles del color del fondo, sombras pegadas al fondo y contaminación de color en los contornos.
- Entregar originales y, cuando sea posible, una vista previa de control sobre fondos contrastantes (oscuro y claro). La vista previa no sustituye al PNG con alfa.

## 2. Elementos independientes

Cada elemento que vaya a moverse de forma independiente debe entregarse en un archivo separado. No combinar en una sola imagen objetos que deban tener trayectorias, deformaciones, profundidad u oclusión diferentes.

Ejemplos:
- Personaje, caballo y carruaje en recursos separados si tendrán movimientos diferentes.
- Cada murciélago en una imagen independiente si tendrá vuelo o trayectoria propia.
- Cada columna de humo separada si nace de una torre distinta.
- Primer plano, plano medio y fondo en capas independientes.

Si se solicita una hoja de recursos, organizar cada elemento en celdas claramente separadas, con margen suficiente y sin solapamientos.

## 3. Spritesheets y movimiento

Cuando se solicite un spritesheet:
- Especificar número de filas y columnas, cantidad exacta de fotogramas y orden de lectura.
- Mantener tamaño de celda uniforme, escala, centro/pivote y orientación consistentes.
- Incluir poses intermedias suficientes para un ciclo fluido, no solo dos poses extremas.
- No dibujar marcos, numeración, etiquetas, separadores decorativos ni fondos dentro de las celdas.
- Indicar claramente si el ciclo debe ser continuo y qué pose conecta el último fotograma con el primero.
- Entregar el spritesheet y, si es posible, los fotogramas individuales exportados.

No pedir spritesheet para elementos que se puedan animar mejor de forma procedural, como humo, niebla, partículas o ciertos efectos atmosféricos. En esos casos, entregar una textura o varias máscaras limpias, aisladas y con alfa real.

## 4. Personajes preparados para rigging 2D

Si el personaje se va a articular:
- Solicitar character sheet con vistas y proporciones coherentes.
- Solicitar piezas separadas o separables: cabeza, torso, brazo superior, antebrazo, mano, muslo, pierna, pie, cabello y accesorios según el diseño.
- Las piezas deben incluir zonas de solapamiento suficientes en hombros, codos, muñecas, caderas, rodillas y tobillos para evitar huecos al rotar.
- Indicar pose neutral, orientación, escala y pivotes aproximados.
- No fusionar manos con objetos, brazos con torso, piernas entre sí ni cabello con fondo cuando deban moverse por separado.
- Si se entrega una ilustración completa no separada, identificarla como ilustración para animación limitada, no prometer rigging completo.

## 5. Continuidad entre capas de una escena

Para todas las capas de una escena:
- Usar el mismo lienzo, resolución, cámara virtual, horizonte, perspectiva y escala de referencia.
- Respetar coordenadas y puntos de anclaje acordados.
- No reencuadrar, cambiar zoom, cambiar punto de vista ni alterar la posición de elementos comunes entre generaciones.
- Los elementos deben encajar con las capas vecinas; evitar duplicar contenido que ya exista en otra capa.
- Extender fondos más allá del borde visible cuando la cámara vaya a moverse, para evitar huecos durante el parallax.
- Definir qué partes quedan delante y detrás de otros elementos.

## 6. Prompts con referencias

Al generar capas sucesivas:
- Adjuntar la imagen maestra de composición y las capas relevantes ya aprobadas como referencias.
- Describir explícitamente qué debe permanecer idéntico y qué elemento nuevo se debe producir.
- Pedir que no se rediseñen ni reinterpreten los elementos existentes.
- Reiterar dimensiones, encuadre, perspectiva, escala, paleta e iluminación.
- Generar cada asset por separado y revisar el resultado antes de continuar con la siguiente capa.

## 7. Verificación antes de aceptar

No considerar un asset listo solo porque visualmente parece correcto. Verificar:
1. Dimensiones y relación de aspecto.
2. Formato y modo de color.
3. Existencia de canal alfa y valores de transparencia reales.
4. Bordes y halos sobre fondos claro y oscuro.
5. Elementos completos, sin recortes accidentales.
6. Ausencia de contenido ajeno a la capa.
7. Escala, perspectiva, encuadre y anclajes respecto a las demás capas.
8. Preparación real para el tipo de animación previsto.

Si alguna verificación falla, corregir o volver a generar el recurso antes de iniciar la composición final.

## 8. Regla de honestidad técnica

Distinguir siempre entre:
- recurso recibido;
- recurso inspeccionado visualmente;
- transparencia y dimensiones comprobadas;
- recurso recortado/procesado;
- animación implementada;
- resultado ejecutado y validado.

No declarar una etapa completada si solo existe un plan o una inspección parcial.
