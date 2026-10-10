const fs = require('fs');

function createPDF() {
  const content = [
    'BT',
    '/F1 20 Tf',
    '50 780 Td',
    '(PRIYANSHU KUMAR) Tj',
    '0 -18 Td',
    '/F2 10 Tf',
    '(AI/ML Engineer & Full-Stack Developer | Ghaziabad, UP, India) Tj',
    '0 -14 Td',
    '(Email: priyanshukumar09546@gmail.com | GitHub: github.com/priyanshukumar09546-cpu | LinkedIn: linkedin.com/in/priyanshu-kumar-9a2732255) Tj',
    '0 -24 Td',
    '/F1 12 Tf',
    '(EDUCATION) Tj',
    '0 -14 Td',
    '/F2 9.5 Tf',
    '(B.Tech in Computer Science and Engineering - ABES Engineering College, Ghaziabad (AKTU, 2024 - 2028)) Tj',
    '0 -12 Td',
    '(Class XII: Tagore Shiksha Sadan Inter College, Hapur (2022 - 80%)) Tj',
    '0 -12 Td',
    '(Class X: Tagore Shiksha Sadan Inter College, Hapur (2020 - 75%)) Tj',
    '0 -22 Td',
    '/F1 12 Tf',
    '(TECHNICAL SKILLS) Tj',
    '0 -14 Td',
    '/F2 9.5 Tf',
    '(Languages: Python, TypeScript, JavaScript, C, C++, Java) Tj',
    '0 -12 Td',
    '(Frontend: React, Next.js 14, Tailwind CSS, HTML5, CSS3) Tj',
    '0 -12 Td',
    '(Backend & Databases: Node.js, Express.js, FastAPI, REST APIs, MongoDB, MySQL, Prisma) Tj',
    '0 -12 Td',
    '(AI / ML & CV: TensorFlow/Keras, OpenCV, CNNs, MobileNetV2, Google Gemini API, Tesseract OCR) Tj',
    '0 -12 Td',
    '(Tools & Cloud: Git, GitHub, Vercel, Render, VS Code) Tj',
    '0 -22 Td',
    '/F1 12 Tf',
    '(FEATURED PROJECTS) Tj',
    '0 -14 Td',
    '/F1 10 Tf',
    '(MentorNearby - Full-Stack Educational Marketplace) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- Connecting students and verified local/online tutors based on budget, subjects, and location.) Tj',
    '0 -11 Td',
    '(- Tech Stack: React, Vite, Node.js, Express, MongoDB Atlas, JWT, Razorpay, Cloudinary.) Tj',
    '0 -16 Td',
    '/F1 10 Tf',
    '(ScamShield AI - AI Financial Scam Analysis Platform) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- Multimodal fraud analysis evaluating suspicious messages, OCR screenshots, and links using Gemini & Tesseract.js.) Tj',
    '0 -11 Td',
    '(- Tech Stack: Next.js 14, TypeScript, Prisma, Tailwind CSS, Google Gemini API, Zod.) Tj',
    '0 -16 Td',
    '/F1 10 Tf',
    '(CampusPrep / ProfessorVirus - Academic & Placement Prep Platform) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- Comprehensive academic portal for AKTU students featuring notes, PYQs, Ask Virus AI study bot, and Interview Pro.) Tj',
    '0 -11 Td',
    '(- Tech Stack: React, Vite, Node.js, Express, MongoDB, OpenAI API, Gemini API, Tesseract.) Tj',
    '0 -16 Td',
    '/F1 10 Tf',
    '(CropDetect AI - Plant Disease Classification CNN) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- MobileNetV2 CNN trained on PlantVillage 54,000+ images with 95.5% benchmark accuracy.) Tj',
    '0 -11 Td',
    '(- Tech Stack: Python, TensorFlow/Keras, OpenCV, FastAPI, React, Streamlit.) Tj',
    '0 -22 Td',
    '/F1 12 Tf',
    '(EXPERIENCE & INTERNSHIPS) Tj',
    '0 -14 Td',
    '/F1 10 Tf',
    '(MentorNearby | Founder & Lead Developer) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- Architected edtech platform with role-based auth, matching algorithms, and REST APIs.) Tj',
    '0 -14 Td',
    '/F1 10 Tf',
    '(Codveda Technologies | Web Development Intern) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- Developed responsive web interfaces and reusable components with modern web standards.) Tj',
    '0 -14 Td',
    '/F1 10 Tf',
    '(IBM SkillsBuild x AICTE (BharatCares) | Gen AI & Cloud Computing Intern) Tj',
    '0 -12 Td',
    '/F2 9 Tf',
    '(- Hands-on 6-week intensive on generative AI, prompt engineering, and cloud infrastructure.) Tj',
    'ET'
  ].join('\n');

  const streamLength = Buffer.byteLength(content, 'latin1');

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj',
    '4 0 obj\n<< /Length ' + streamLength + ' >>\nstream\n' + content + '\nendstream\nendobj',
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj',
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj'
  ];

  let offset = 9;
  const header = '%PDF-1.4\n';
  let body = '';
  let xref = 'xref\n0 7\n0000000000 65535 f \n';

  for (let i = 0; i < objects.length; i++) {
    const objStr = objects[i] + '\n';
    const pad = String(offset).padStart(10, '0');
    xref += pad + ' 00000 n \n';
    body += objStr;
    offset += Buffer.byteLength(objStr, 'latin1');
  }

  const trailer = 'trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n' + offset + '\n%%EOF\n';
  const pdfData = header + body + xref + trailer;

  fs.writeFileSync('public/Priyanshu_Kumar_Resume.pdf', pdfData, 'latin1');
  console.log('Successfully written public/Priyanshu_Kumar_Resume.pdf');
}

createPDF();
