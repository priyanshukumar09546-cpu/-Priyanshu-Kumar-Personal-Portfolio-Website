import cv2
import os

extracted_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs\extracted"
output_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\public\certificates\clean"
os.makedirs(output_dir, exist_ok=True)

# Precise coordinates: (y1, y2, x1, x2)
# cert 1: y=[547, 2167], x=[8, 1162]
# cert 2: y=[989, 1712], x=[0, 1170]
# cert 3: y=[916, 1786], x=[11, 1159]
# cert 4: y=[936, 1765], x=[0, 1170]
# cert 5: y=[938, 1757], x=[6, 1164]
# cert 6: y=[285, 1112], x=[0, 1170]
# cert 7: y=[1082, 1816], x=[48, 1122]
# cert 8: y=[309, 1106], x=[21, 1149]

crops = {
    1: (547, 2167, 8, 1162),
    2: (989, 1712, 0, 1170),
    3: (916, 1786, 11, 1159),
    4: (936, 1765, 0, 1170),
    5: (938, 1757, 6, 1164),
    6: (285, 1112, 0, 1170),
    7: (1082, 1816, 48, 1122),
    8: (309, 1106, 21, 1149),
}

for idx, (y1, y2, x1, x2) in crops.items():
    orig_path = os.path.join(extracted_dir, f"cert_{idx}_orig.png")
    img = cv2.imread(orig_path)
    cropped = img[y1:y2, x1:x2]
    
    out_path = os.path.join(output_dir, f"cert_{idx}_clean.png")
    cv2.imwrite(out_path, cropped, [cv2.IMWRITE_PNG_COMPRESSION, 3])
    print(f"Saved {out_path}: shape={cropped.shape} (WxH={cropped.shape[1]}x{cropped.shape[0]})")
