import fitz
import cv2
import numpy as np
from PIL import Image
import os

pdf_path = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\public\certificates\all_certificates.pdf"
doc = fitz.open(pdf_path)

out_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
os.makedirs(out_dir, exist_ok=True)

for i, page in enumerate(doc):
    imgs = page.get_images()
    xref = imgs[0][0]
    base_img = doc.extract_image(xref)
    image_bytes = base_img["image"]
    ext = base_img["ext"]
    
    file_path = os.path.join(out_dir, f"cert_{i+1}_orig.{ext}")
    with open(file_path, "wb") as f:
        f.write(image_bytes)
    
    print(f"Extracted page {i+1} image to {file_path}")
