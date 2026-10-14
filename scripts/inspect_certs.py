import fitz
import os

pdf_path = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\public\certificates\all_certificates.pdf"
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

out_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\scratch_certs"
os.makedirs(out_dir, exist_ok=True)

for i, page in enumerate(doc):
    print(f"\n--- Page {i+1} ---")
    print(f"Rect: {page.rect}, Rotation: {page.rotation}")
    text = page.get_text().strip()
    print(f"Text sample (first 100 chars): {repr(text[:100])}")
    imgs = page.get_images()
    print(f"Images count: {len(imgs)}")
    for j, img in enumerate(imgs):
        xref = img[0]
        base_img = doc.extract_image(xref)
        print(f"  Img {j+1} (xref {xref}): format={base_img['ext']}, size=({base_img['width']}, {base_img['height']})")
    
    # Render page to image at 2x resolution (144 dpi) to preview
    pix = page.get_pixmap(dpi=150)
    out_img = os.path.join(out_dir, f"page_{i+1}_raw.png")
    pix.save(out_img)
    print(f"Saved raw page render: {out_img} ({pix.width}x{pix.height})")
