import cv2
import numpy as np
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"

for i in range(1, 9):
    path = os.path.join(extracted_dir, f"cert_{i}_orig.png")
    img = cv2.imread(path)
    h, w, _ = img.shape
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    print(f"\n================ CERT {i} DETAILED SCAN ================")
    # Print row brightness at various intervals
    # Check y in steps of 100
    row_means = [np.mean(gray[r, :]) for r in range(h)]
    
    # Find contiguous segments of bright rows (mean > 60)
    bright_segments = []
    in_segment = False
    start = 0
    for r, m in enumerate(row_means):
        if m > 50 and not in_segment:
            in_segment = True
            start = r
        elif m <= 50 and in_segment:
            in_segment = False
            bright_segments.append((start, r, r - start))
    if in_segment:
        bright_segments.append((start, h, h - start))
        
    print(f"Bright row segments (mean > 50): {bright_segments}")
