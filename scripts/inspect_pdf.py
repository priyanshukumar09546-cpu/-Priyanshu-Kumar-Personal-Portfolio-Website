import fitz

doc = fitz.open("public/certificates/all_certificates.pdf")
print("Number of pages:", len(doc))
for i, page in enumerate(doc):
    print(f"\n=== Page {i+1} ===")
    print("MediaBox:", page.rect)
    print("Rotation:", page.rotation)
    text = page.get_text()
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    print("Extracted text count:", len(lines))
    if lines:
        print("Lines:", lines[:6])
    images = page.get_images()
    print("Images count:", len(images))
    for img in images:
        xref = img[0]
        base = doc.extract_image(xref)
        print(f"  xref={xref}, ext={base['ext']}, size=({base['width']}, {base['height']})")
