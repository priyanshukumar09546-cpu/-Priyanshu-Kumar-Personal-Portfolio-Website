import cv2
import numpy as np
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
inspect_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\inspect"
os.makedirs(inspect_dir, exist_ok=True)

# For each image, let's look at the slices
# Cert 1: 547:2167
# Cert 2: 989:1712
# Cert 3: 916:1786
# Cert 4: 936:1766
# Cert 5: 938:1757
# Cert 6: let's save full and check what is at top, middle, bottom
# Cert 7: 1077:1821 or full
# Cert 8: 309:1106 or 2008:2400

for i in range(1, 9):
    img = cv2.imread(os.path.join(extracted_dir, f"cert_{i}_orig.png"))
    h, w, _ = img.shape
    
    # Save a high-quality slice of the potential document
    if i == 1:
        crop = img[540:2170, 0:w]
    elif i == 2:
        crop = img[980:1720, 0:w]
    elif i == 3:
        crop = img[910:1790, 0:w]
    elif i == 4:
        crop = img[930:1770, 0:w]
    elif i == 5:
        crop = img[930:1770, 0:w]
    elif i == 6:
        crop = img[280:2400, 0:w]
    elif i == 7:
        crop = img[280:2300, 0:w]
    elif i == 8:
        crop = img[300:1120, 0:w]
    
    cv2.imwrite(os.path.join(inspect_dir, f"cert_{i}_crop_candidate.png"), crop)
    print(f"Saved cert_{i}_crop_candidate.png ({crop.shape[1]}x{crop.shape[0]})")
