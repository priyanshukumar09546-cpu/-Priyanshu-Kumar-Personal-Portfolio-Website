import cv2
import numpy as np
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"

for i in range(1, 9):
    path = os.path.join(extracted_dir, f"cert_{i}_orig.png")
    img = cv2.imread(path)
    h, w, _ = img.shape
    
    # Check dark background color from bottom corner
    bg_sample = img[h-20:h-5, 10:50]
    bg_color = np.median(bg_sample, axis=(0,1))
    
    # Compute color distance from background
    diff = np.linalg.norm(img.astype(float) - bg_color.astype(float), axis=2)
    
    # Mask of pixels significantly different from dark viewer background
    mask = (diff > 40).astype(np.uint8) * 255
    
    # Let's find rows with significant content (> 50 pixels wide)
    row_counts = np.sum(mask > 0, axis=1)
    col_counts = np.sum(mask > 0, axis=0)
    
    active_rows = np.where(row_counts > 100)[0]
    active_cols = np.where(col_counts > 100)[0]
    
    y1 = active_rows[0] if len(active_rows) else 0
    y2 = active_rows[-1] if len(active_rows) else h
    x1 = active_cols[0] if len(active_cols) else 0
    x2 = active_cols[-1] if len(active_cols) else w
    
    print(f"Cert {i}: bg={bg_color.astype(int)}, active bbox: y=[{y1}, {y2}] (h={y2-y1}), x=[{x1}, {x2}] (w={x2-x1})")
