# Extracción de efectos: murciélagos y humo

**Resultado:** 10 elementos aislados a partir de `06-murcielagos-humo.PNG`.

Se utilizó el canal alfa de la imagen y un análisis de componentes conectados de 8 vecinos. Se encontraron diez siluetas independientes. La inspección visual de la hoja permitió clasificarlas como tres columnas de humo y siete murciélagos.

## Archivos generados

### Humo
- `humo-01.png`
- `humo-02.png`
- `humo-03.png`

### Murciélagos
- `murcielago-01.png`
- `murcielago-02.png`
- `murcielago-03.png`
- `murcielago-04.png`
- `murcielago-05.png`
- `murcielago-06.png`
- `murcielago-07.png`

Cada recorte conserva transparencia y un margen de 8 píxeles. La extracción aplica una máscara del componente detectado para impedir que otros elementos de la hoja queden dentro del recorte. El PNG original permanece intacto.

## Limitaciones y siguientes acciones

- Los siete murciélagos son siete siluetas estáticas distintas; no forman un ciclo de aleteo. Para animar alas se necesita crear poses, deformar las alas mediante rig 2D o generar un spritesheet específico.
- Las tres columnas de humo se pueden animar proceduralmente con deformación, desplazamiento, expansión y variación de opacidad.
- La extracción separa componentes por alfa; no reconstruye detalles ocultos ni separa partes que estén conectadas físicamente.
- Los recortes deben revisarse dentro de la composición final antes de aceptarse como assets definitivos.

## Reproducción

Ejecutar desde la raíz del repositorio:

```bash
python -m pip install Pillow opencv-python-headless
python tools/extract_dracula_effects.py
```

El script valida que el número y las cajas de componentes sigan coincidiendo con la hoja revisada. Si cambian, se detiene para evitar extraer elementos equivocados.
