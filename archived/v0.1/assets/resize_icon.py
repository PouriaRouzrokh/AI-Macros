from PIL import Image
import os

def resize_icon(icon_path, output_path, size):
    icon = Image.open(icon_path)
    icon.thumbnail((size, size))
    icon.save(output_path)

root_path = os.path.dirname(os.path.abspath(__file__))
resize_icon(root_path + '/icon_no_text.png', root_path + '/icon16.png', 16)
resize_icon(root_path + '/icon_no_text.png', root_path + '/icon48.png', 48)
resize_icon(root_path + '/icon.png', root_path + '/icon128.png', 128)