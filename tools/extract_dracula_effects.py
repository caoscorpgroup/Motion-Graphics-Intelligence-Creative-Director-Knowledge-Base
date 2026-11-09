#!/usr/bin/env python3
"""Split the Dracula effects sheet into transparent smoke and bat assets.

The source sheet was inspected and its ten alpha-connected components were
classified visually: three smoke columns followed by seven bat silhouettes.
This script re-detects connected components, matches them to the recorded
bounding boxes, and writes transparent crops. It never modifies the source.

Run from repository root:
    python -m pip install Pillow opencv-python-headless
    python tools/extract_dracula_effects.py
"""
from pathlib import Path
import json
import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "entregas" / "Gemini-por-integrar" / "06-murcielagos-humo.PNG"
OUT = ROOT / "entregas" / "prueba-castillo-dracula" / "assets" / "effects"

# Connected-component boxes measured from the source alpha mask, sorted by area.
# First three are smoke columns; remaining seven are individual bat silhouettes.
EXPECTED = [
    (42, 267, 417, 800),       # smoke 01
    (1444, 328, 457, 748),     # smoke 02
    (670, 404, 673, 672),      # smoke 03
    (12, 15, 821, 339),        # bat 01
    (1215, 34, 700, 299),      # bat 02
    (813, 123, 484, 238),      # bat 03
    (367, 318, 494, 263),      # bat 04
    (383, 699, 380, 223),      # bat 05
    (1136, 454, 401, 194),     # bat 06
    (1158, 763, 389, 171),     # bat 07
]
PADDING = 8
TOLERANCE = 3


def main():
    if not SOURCE.is_file():
        raise SystemExit(f"Source not found: {SOURCE}")
    original = Image.open(SOURCE).convert("RGBA")
    rgba = np.array(original)
    alpha = rgba[:, :, 3]
    count, labels, stats, _ = cv2.connectedComponentsWithStats(
        (alpha > 0).astype(np.uint8), connectivity=8
    )
    found = []
    for idx in range(1, count):
        x, y, w, h, area = map(int, stats[idx])
        if area > 100:
            found.append((x, y, w, h, area, idx))
    found.sort(key=lambda item: item[4], reverse=True)

    if len(found) != len(EXPECTED):
        raise SystemExit(
            f"Expected {len(EXPECTED)} components, found {len(found)}. "
            "Do not extract until the sheet is reviewed again."
        )

    OUT.mkdir(parents=True, exist_ok=True)
    records = []
    for pos, (expected, actual) in enumerate(zip(EXPECTED, found), start=1):
        x, y, w, h = actual[:4]
        if any(abs(a - b) > TOLERANCE for a, b in zip(expected, (x, y, w, h))):
            raise SystemExit(
                f"Component {pos} bbox changed: expected {expected}, "
                f"found {(x, y, w, h)}. Reinspect before extraction."
            )
        x0, y0 = max(0, x - PADDING), max(0, y - PADDING)
        x1, y1 = min(original.width, x + w + PADDING), min(original.height, y + h + PADDING)
        crop = rgba[y0:y1, x0:x1].copy()
        component_mask = (labels[y0:y1, x0:x1] == actual[5])
        crop[:, :, 3] = np.where(component_mask, crop[:, :, 3], 0).astype(np.uint8)
        kind = "humo" if pos <= 3 else "murcielago"
        number = pos if pos <= 3 else pos - 3
        name = f"{kind}-{number:02d}.png"
        Image.fromarray(crop, "RGBA").save(OUT / name, optimize=True)
        records.append({
            "file": name,
            "source_bbox": [x, y, w, h],
            "output_size": [x1 - x0, y1 - y0],
            "padding": PADDING,
            "alpha_preserved": True
        })

    (OUT / "extraction-report.json").write_text(
        json.dumps({
            "source": str(SOURCE.relative_to(ROOT)),
            "method": "8-connected components on alpha > 0",
            "classification": "first 3 largest components = smoke; remaining 7 = bats",
            "source_modified": False,
            "assets": records
        }, indent=2, ensure_ascii=False),
        encoding="utf-8"
    )
    print(f"Extracted {len(records)} transparent crops to {OUT}")
    for record in records:
        print(record["file"], record["source_bbox"], record["output_size"])


if __name__ == "__main__":
    main()
