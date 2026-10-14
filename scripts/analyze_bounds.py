import cv2
import numpy as np
from PIL import Image
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"

for i in range(1, 9):
    path = os.path.join(extracted_dir, f"cert_{i}_orig.png")
    img = cv2.imread(path)
    h, w, c = img.shape
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Analyze brightness along rows and cols
    # In phone screenshots, background around certificate is often black (near 0) or white
    row_means = np.mean(gray, axis=1)
    col_means = np.mean(gray, axis=0)
    
    # Threshold for dark background (phone screen background around document is usually < 30)
    # Let's find rows where row_mean > 30
    non_dark_rows = np.where(row_means > 25)[0]
    non_dark_cols = np.where(col_means > 25)[0]
    
    row_min = non_dark_rows[0] if len(non_dark_rows) > 0 else 0
    row_max = non_dark_rows[-1] if len(non_dark_rows) > 0 else h
    col_min = non_dark_cols[0] if len(non_dark_cols) > 0 else 0
    col_max = non_dark_cols[-1] if len(non_dark_cols) > 0 else w
    
    print(f"Cert {i}: size=({w}x{h}), Non-dark bbox: y=[{row_min}, {row_max}], x=[{col_min}, {col_max}], height={row_max-row_min}, width={col_max-col_min}")
    
    # Also check if there are distinct edges or bounding rects
    # threshold image to find white/bright certificate paper
    _, thresh = cv2.threshold(gray, 30, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if contours:
        # Sort contours by area
        contours = sorted(contours, key=cv2.contourArea, reverse=True)
        c_largest = contours[0]
        x, y, bw, bh = cv2.boundingRect(c_largest)
        print(f"  Largest contour bbox: x={x}, y={y}, w={bw}, h={bh}, area={cv2.contourArea(c_largest)}")
