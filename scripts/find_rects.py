import cv2
import numpy as np
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
crop_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\crops"

def analyze_cert(num):
    path = os.path.join(extracted_dir, f"cert_{num}_orig.png")
    img = cv2.imread(path)
    h, w, _ = img.shape
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    print(f"\n--- Analysing Cert {num} ---")
    
    # Let's find contours of rectangular objects
    # Blur slightly
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    
    # Otsu thresholding or Canny
    edges = cv2.Canny(blurred, 50, 150)
    
    # Dilate edges to close gaps
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))
    dilated = cv2.dilate(edges, kernel, iterations=2)
    
    contours, _ = cv2.findContours(dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    
    # Filter contours by size (area > 200,000)
    rects = []
    for c in contours:
        x, y, bw, bh = cv2.boundingRect(c)
        area = bw * bh
        if area > 100000 and bh > 200 and bw > 400:
            # Check if this rect is not just the whole phone screen
            if bh < h - 100:
                rects.append((area, x, y, bw, bh))
                
    rects.sort(key=lambda r: r[0], reverse=True)
    for r in rects[:5]:
        print(f"  Candidate Rect: x={r[1]}, y={r[2]}, w={r[3]}, h={r[4]}, area={r[0]}")
        
    return img

for i in range(1, 9):
    analyze_cert(i)
