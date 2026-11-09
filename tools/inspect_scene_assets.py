#!/usr/bin/env python3
"""Inspect the Dracula 2.5D scene assets without modifying source images.

Run from the repository root:
    python tools/inspect_scene_assets.py

Outputs are written only to entregas/prueba-castillo-dracula/diagnostico/.
Requires Pillow: python -m pip install Pillow
"""
from __future__ import annotations

import json
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "entregas" / "Gemini-por-integrar"
OUT = ROOT / "entregas" / "prueba-castillo-dracula" / "diagnostico"
FILES = [
    "01-fondo-cielo.PNG",
    "02-castillo.PNG",
    "03-colina-camino.PNG",
    "04-primer-plano.PNG",
    "05-carruaje-caballo.PNG",
    "06-murcielagos-humo.PNG",
]
TILE_W, TILE_H = 640, 360
CELL = 16


def checkerboard(size: tuple[int, int]) -> Image.Image:
    w, h = size
    bg = Image.new("RGB", size, (235, 235, 235))
    d = ImageDraw.Draw(bg)
    for y in range(0, h, CELL):
        for x in range(0, w, CELL):
            if (x // CELL + y // CELL) % 2:
                d.rectangle((x, y, x + CELL - 1, y + CELL - 1), fill=(190, 190, 190))
    return bg


def inspect(path: Path) -> dict:
    with Image.open(path) as im:
        im.load()
        info = {
            "file": path.name,
            "format": im.format,
            "mode": im.mode,
            "width": im.width,
            "height": im.height,
            "aspect_ratio": round(im.width / im.height, 6),
            "has_alpha_channel": "A" in im.getbands() or "transparency" in im.info,
            "alpha_min": None,
            "alpha_max": None,
            "transparent_pixel_count": 0,
            "partial_alpha_pixel_count": 0,
            "opaque_pixel_count": im.width * im.height,
            "alpha_bbox": None,
            "corner_rgba": [],
        }
        rgba = im.convert("RGBA")
        alpha = rgba.getchannel("A")
        amin, amax = alpha.getextrema()
        info["alpha_min"], info["alpha_max"] = amin, amax
        hist = alpha.histogram()
        info["transparent_pixel_count"] = hist[0]
        info["partial_alpha_pixel_count"] = sum(hist[1:255])
        info["opaque_pixel_count"] = hist[255]
        info["alpha_bbox"] = list(alpha.getbbox()) if alpha.getbbox() else None
        w, h = rgba.size
        for x, y in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
            info["corner_rgba"].append(list(rgba.getpixel((x, y))))

        # Preview over checkerboard to reveal true alpha; source is never changed.
        preview = checkerboard(rgba.size).convert("RGBA")
        preview.alpha_composite(rgba)
        preview.thumbnail((TILE_W, TILE_H), Image.Resampling.LANCZOS)
        return info, preview.convert("RGB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    records = []
    previews = []
    missing = []
    for name in FILES:
        path = SOURCE / name
        if not path.is_file():
            missing.append(name)
            continue
        try:
            record, preview = inspect(path)
            records.append(record)
            previews.append((name, preview))
        except Exception as exc:
            records.append({"file": name, "error": repr(exc)})

    (OUT / "asset-report.json").write_text(
        json.dumps({"source_directory": str(SOURCE), "assets": records,
                    "missing_files": missing}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    cols = 2
    rows = (len(previews) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * TILE_W, rows * (TILE_H + 34)), (28, 28, 36))
    draw = ImageDraw.Draw(sheet)
    for i, (name, preview) in enumerate(previews):
        x = (i % cols) * TILE_W
        y = (i // cols) * (TILE_H + 34)
        sheet.paste(preview, (x, y + 34))
        draw.text((x + 8, y + 9), name, fill=(245, 245, 245))
    if previews:
        sheet.save(OUT / "alpha-contact-sheet.jpg", quality=92)

    print(f"Inspected: {len(records)} / {len(FILES)}")
    print(f"Missing: {', '.join(missing) if missing else 'none'}")
    print(f"Report: {OUT / 'asset-report.json'}")
    if previews:
        print(f"Contact sheet: {OUT / 'alpha-contact-sheet.jpg'}")
    for r in records:
        print(json.dumps(r, ensure_ascii=False))


if __name__ == "__main__":
    main()
