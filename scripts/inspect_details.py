import cv2
import numpy as np
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
crop_test_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\crop_test"
os.makedirs(crop_test_dir, exist_ok=True)

for i in range(1, 9):
    path = os.path.join(extracted_dir, f"cert_{i}_orig.png")
    img = cv2.imread(path)
    h, w, _ = img.shape
    
    # Save a thumbnail / downsampled version for quick reference
    thumb = cv2.resize(img, (int(w*0.3), int(h*0.3)))
    cv2.imwrite(os.path.join(crop_test_dir, f"cert_{i}_thumb.png"), thumb)
    
    # Sample lines at top (0-200), bottom (h-200-h)
    print(f"\n================ CERT {i} ================")
    print(f"Top 100px average color (BGR): {np.mean(img[0:100, :, :], axis=(0,1))}")
    print(f"Bottom 100px average color (BGR): {np.mean(img[h-100:h, :, :], axis=(0,1))}")
    
    # Let's inspect rows from top to bottom
    row_std = np.std(img, axis=(1,2))
    row_mean = np.mean(img, axis=(1,2))
    
    # Print slices where significant changes happen
    print(f"Row mean profile: min={np.min(row_mean):.1f}, max={np.max(row_mean):.1f}, median={np.median(row_mean):.1f}")
