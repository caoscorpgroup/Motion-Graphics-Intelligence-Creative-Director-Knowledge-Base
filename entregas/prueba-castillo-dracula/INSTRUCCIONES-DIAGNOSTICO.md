# Diagnóstico de assets — Castillo de Drácula

## Objetivo

Inspeccionar los seis PNG originales sin alterarlos. El primer paso no elimina fondos ni recorta píxeles: identifica dimensiones, modo de color, canal alfa y distribución de transparencia para decidir el tratamiento correcto.

## Ejecución

Desde la raíz del repositorio:

```bash
python -m pip install Pillow
python tools/inspect_scene_assets.py
```

## Salidas

Se crean en `entregas/prueba-castillo-dracula/diagnostico/`:

- `asset-report.json`: dimensiones, relación de aspecto, modo, rango alfa, conteos de píxeles transparentes/semitransparentes/opacos, caja de contenido y color de las cuatro esquinas.
- `alpha-contact-sheet.jpg`: vista de cada imagen sobre tablero de contraste. Si el fondo aparece como tablero, hay transparencia; si aparece blanco sólido, el blanco forma parte de la imagen.

## Reglas de seguridad

- El script abre los PNG en modo lectura y nunca los sobrescribe.
- No aplica eliminación automática de blanco, chroma key, recorte ni limpieza de bordes.
- No centra, escala ni alinea capas para una composición final.
- Si una imagen no tiene alfa, el reporte lo mostrará. La estrategia de extracción se decide después de inspeccionar sus colores y bordes.
- No considerar lista una capa hasta revisar su transparencia y su relación espacial con las demás.

## Próximo procesamiento

Tras ejecutar el diagnóstico:
1. Revisar los seis registros y el contacto visual.
2. Confirmar que los seis lienzos comparten dimensiones y encuadre.
3. Determinar si los PNG de castillo, primer plano, carruaje y hoja de efectos ya tienen alfa real.
4. Si tienen fondo opaco, preparar máscaras específicas por objeto, conservando los originales y revisando bordes sobre fondos claro y oscuro.
5. Separar murciélagos y columnas de humo en derivados individuales. No convertir la hoja combinada en una secuencia de vuelo: las poses visibles son recursos estáticos, no fotogramas de aleteo.
6. Preparar una composición solo cuando las coordenadas y anclajes de las seis capas estén comprobados.

Este diagnóstico es una herramienta de preparación; no equivale a haber procesado ni validado la escena.
