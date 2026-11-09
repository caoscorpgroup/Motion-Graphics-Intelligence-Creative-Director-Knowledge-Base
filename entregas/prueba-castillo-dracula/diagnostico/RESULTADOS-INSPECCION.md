# Resultados ejecutados — diagnóstico de assets del Castillo de Drácula

**Fecha:** 2026-11-09  
**Estado:** inspección de archivos ejecutada; composición y animación siguen pendientes.  
**Método:** los seis PNG se descargaron desde el repositorio en un entorno Linux aislado y se analizaron con Pillow. Se abrió cada archivo en lectura; no se sobrescribió ningún original.

## Resultado general

<badge>6/6 archivos leídos</badge>

- Los seis recursos miden exactamente **1920 × 1080 px** y comparten relación 16:9.
- Los seis son PNG con modo RGBA.
- Cinco tienen transparencia alfa real.
- El fondo de cielo es opaco en todo el lienzo, como corresponde a un plano posterior.
- La coincidencia de dimensiones facilita la composición, pero no demuestra por sí sola que todos los objetos estén alineados correctamente.

## Resultados por archivo

| Archivo | Transparencia medida | Diagnóstico |
|---|---|---|
| `01-fondo-cielo.PNG` | 0 píxeles transparentes | Fondo opaco correcto para plano lejano. |
| `02-castillo.PNG` | 1,578,726 transparentes; 1,125 semitransparentes | Alfa real; apto como capa independiente. |
| `03-colina-camino.PNG` | 742,859 transparentes; 493 semitransparentes | Alfa real; zona superior transparente y terreno opaco hasta los bordes inferiores. |
| `04-primer-plano.PNG` | 1,563,523 transparentes; 4,558 semitransparentes | Alfa interno real, pero las cuatro esquinas son opacas y oscuras. No es un marco frontal completamente aislado. Requiere revisar máscara y bordes antes de usar parallax. |
| `05-carruaje-caballo.PNG` | 1,335,932 transparentes; 2,537 semitransparentes | Alfa real. El contenido ocupa una zona amplia del lienzo; hay que evaluar recorte y separación del caballo/carruaje antes de articular. |
| `06-murcielagos-humo.PNG` | 1,324,214 transparentes; 7,331 semitransparentes | Alfa real. Es una hoja combinada de efectos; hay que extraer murciélagos y columnas de humo. Las siluetas estáticas no constituyen un ciclo de aleteo. |

## Decisiones técnicas

1. **No aplicar chroma key ni eliminación de blanco** a las capas que ya tienen alfa real. Sus esquinas transparentes contienen RGB blanco residual con alfa 0; esto no es un fondo blanco visible y no debe eliminarse como color.
2. Mantener el cielo como fondo completo.
3. Usar castillo y colina como capas separadas; la posición final debe verificarse en una composición.
4. Tratar el primer plano con precaución: sus esquinas opacas pueden formar un marco/vignette o ser restos de fondo. No recortarlas a ciegas. Probar máscara y borde sobre fondos claros y oscuros.
5. Separar caballo y carruaje solo después de revisar si sus siluetas se solapan. Si están fusionados, animación limitada de conjunto o reconstrucción parcial; no prometer rigging completo.
6. Recortar cada murciélago por separado y las columnas de humo como elementos separados. Para el aleteo hace falta crear/obtener poses intermedias o deformar alas mediante rig 2D; el sheet actual no es un sprite sheet de movimiento.
7. Para el humo, priorizar deformación y desplazamiento procedural; no hace falta generar un sprite sheet si la textura existente se presta a deformación.

## Estado de las fases

### Fase 1 — Preparación del escenario
- [x] Se recuperaron y leyeron los seis archivos.
- [x] Se comprobaron dimensiones, formato, modo de color y alfa.
- [x] Se detectó la excepción del primer plano con esquinas opacas.
- [ ] Confirmar alineación semántica de colina, camino y base del castillo en composición de tamaño completo.
- [ ] Corregir o aislar el primer plano sin alterar originales.
- [ ] Separar murciélagos y humo en derivados.
- [ ] Evaluar separación del carruaje y caballo.
- [ ] Ejecutar prueba de cámara/parallax y revisar huecos.

### Fase 2 — Incorporación del personaje
Pendiente de recibir el character sheet. Se inspeccionará antes de decidir rigging por piezas, deformación o animación por poses.

## Archivos de diagnóstico

- `diagnostico/asset-report.json`: valores medidos por archivo.
- `tools/inspect_scene_assets.py`: script reproducible que genera el informe y hoja de contacto sin modificar originales.

**Conclusión:** el problema de lectura de los dos PNG quedó resuelto. No hace falta volver a subirlos. La transparencia está mayoritariamente bien preparada; el trabajo pendiente ya no es recuperar archivos, sino validar la composición, resolver el primer plano y preparar derivados animables.
