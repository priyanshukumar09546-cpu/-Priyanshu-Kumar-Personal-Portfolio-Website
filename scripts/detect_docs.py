import cv2
import numpy as np
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
debug_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\debug"
os.makedirs(debug_dir, exist_ok=True)

for i in range(1, 9):
    path = os.path.join(extracted_dir, f"cert_{i}_orig.png")
    img = cv2.imread(path)
    h, w, _ = img.shape
    
    # Let's crop out phone status bar (top 150px) and bottom home indicator (bottom 100px)
    # and find the actual document boundaries within
    sub = img[130:h-100, :]
    sub_gray = cv2.cvtColor(sub, cv2.COLOR_BGR2GRAY)
    
    # Find background color (most common color or edge color)
    # Check corners of sub
    corner_pixels = np.vstack([
        sub[0:30, 0:30].reshape(-1, 3),
        sub[0:30, w-30:w].reshape(-1, 3),
        sub[-30:, 0:30].reshape(-1, 3),
        sub[-30:, w-30:w].reshape(-1, 3)
    ])
    bg_med = np.median(corner_pixels, axis=0)
    
    # Distance from corner bg
    dist = np.linalg.norm(sub.astype(float) - bg_med.astype(float), axis=2)
    
    # Find rows and cols that are NOT this background
    # (using a threshold like > 35)
    doc_mask = dist > 35
    
    # Find horizontal and vertical profile of document
    row_presence = np.mean(doc_mask, axis=1) # fraction of non-bg pixels
    col_presence = np.mean(doc_mask, axis=0)
    
    # A certificate document row will typically have > 20% non-background pixels
    cert_rows = np.where(row_presence > 0.15)[0]
    cert_cols = np.where(col_presence > 0.15)[0]
    
    if len(cert_rows) > 0 and len(cert_cols) > 0:
        y_start = cert_rows[0] + 130
        y_end = cert_rows[-1] + 130
        x_start = cert_cols[0]
        x_end = cert_cols[-1]
    else:
        y_start, y_end, x_start, x_end = 130, h-100, 0, w
        
    print(f"Cert {i}: detected y=[{y_start}, {y_end}] (h={y_end-y_start}), x=[{x_start}, {x_end}] (w={x_end-x_start}), bg_med={bg_med.astype(int)}")
    
    # Save preview of this detected crop
    cropped = img[y_start:y_end, x_start:x_end]
    cv2.imwrite(os.path.join(debug_dir, f"cert_{i}_detected.png"), cropped)
