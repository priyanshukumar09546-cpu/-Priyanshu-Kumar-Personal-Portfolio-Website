import fitz
from PIL import Image
import os

clean_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\public\certificates\clean"
pdf_out_dir = r"c:\Users\ASUS\OneDrive\Desktop\my_portfolio\public\certificates"

combined_doc = fitz.open()

for i in range(1, 9):
    png_path = os.path.join(clean_dir, f"cert_{i}_clean.png")
    pdf_path = os.path.join(clean_dir, f"cert_{i}_clean.pdf")
    
    # Open image with PIL
    img = Image.open(png_path)
    w, h = img.size
    
    # Create single-page PDF with exact image dimensions
    rect = fitz.Rect(0, 0, w, h)
    page_doc = fitz.open()
    page = page_doc.new_page(width=w, height=h)
    page.insert_image(rect, filename=png_path)
    page_doc.save(pdf_path)
    page_doc.close()
    
    # Add to combined doc
    comb_page = combined_doc.new_page(width=w, height=h)
    comb_page.insert_image(rect, filename=png_path)
    
    print(f"Generated clean single-page PDF: {pdf_path} ({w}x{h})")

combined_pdf_path = os.path.join(pdf_out_dir, "Priyanshu_Kumar_Clean_Certificates.pdf")
combined_doc.save(combined_pdf_path)
combined_doc.close()
print(f"Generated combined clean PDF: {combined_pdf_path}")
