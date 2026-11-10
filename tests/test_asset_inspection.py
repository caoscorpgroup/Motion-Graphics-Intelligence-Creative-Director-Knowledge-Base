from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "tools" / "inspect_scene_assets.py"
SPEC = spec_from_file_location("inspect_scene_assets", MODULE_PATH)
assert SPEC is not None and SPEC.loader is not None
MODULE = module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


def test_checkerboard_has_contrasting_tiles():
    board = MODULE.checkerboard((32, 32))
    assert board.mode == "RGB"
    assert board.size == (32, 32)
    assert board.getpixel((0, 0)) != board.getpixel((16, 0))


def test_inspect_reports_alpha_and_content_bounds(tmp_path):
    source = tmp_path / "synthetic.png"
    image = Image.new("RGBA", (4, 3), (20, 40, 60, 255))
    for y in range(3):
        image.putpixel((0, y), (255, 0, 0, 0))
    image.putpixel((1, 0), (0, 255, 0, 128))
    image.save(source)

    record, preview = MODULE.inspect(source)

    assert record["width"] == 4
    assert record["height"] == 3
    assert record["has_alpha_channel"] is True
    assert record["alpha_min"] == 0
    assert record["alpha_max"] == 255
    assert record["transparent_pixel_count"] == 3
    assert record["partial_alpha_pixel_count"] == 1
    assert record["opaque_pixel_count"] == 8
    assert record["alpha_bbox"] == [1, 0, 4, 3]
    assert record["corner_rgba"][0] == [255, 0, 0, 0]
    assert preview.mode == "RGB"
    assert preview.size == (4, 3)
