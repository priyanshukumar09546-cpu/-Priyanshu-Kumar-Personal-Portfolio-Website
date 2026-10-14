import cv2
import numpy as np
import os
import fitz

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
crop_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\crops"
os.makedirs(crop_dir, exist_ok=True)

# Let's save slices for each cert to see what's in them
# For each cert, save:
# 1. full image scaled down
# 2. main candidate crop
# 3. inspect cert 6 and cert 7 specifically

for i in range(1, 9):
    path = os.path.join(extracted_dir, f"cert_{i}_orig.png")
    img = cv2.imread(path)
    h, w, _ = img.shape
    
    # Save preview scaled down for quick inspection
    preview = cv2.resize(img, (w // 2, h // 2))
    cv2.imwrite(os.path.join(crop_dir, f"cert_{i}_preview.png"), preview)
    
print("Saved 8 previews.")
