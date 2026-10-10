const fs = require('fs');

function createPDF() {
  const content = [
    'BT',
    '/F1 18 Tf',
    '50 792 Td',
    '(PRIYANSHU KUMAR) Tj',
    '0 -16 Td',
    '/F2 9.5 Tf',
    '(AI/ML Engineer & Full-Stack Developer | Ghaziabad, UP, India) Tj',
    '0 -13 Td',
    '(Email: priyanshukumar09546@gmail.com | GitHub: github.com/priyanshukumar09546-cpu | LinkedIn: linkedin.com/in/priyanshu-kumar-9a2732255) Tj',
    '0 -20 Td',
    '/F1 11 Tf',
    '(EDUCATION) Tj',
    '0 -13 Td',
    '/F2 9 Tf',
    '(B.Tech in Computer Science and Engineering - ABES Engineering College, Ghaziabad (AKTU, 2024 - 2028)) Tj',
    '0 -11 Td',
    '(Class XII: Tagore Shiksha Sadan Inter College, Hapur (2022 - 80%) | Class X: TSSIC (2020 - 75%)) Tj',
    '0 -18 Td',
    '/F1 11 Tf',
    '(TECHNICAL SKILLS) Tj',
    '0 -13 Td',
    '/F2 9 Tf',
    '(Languages: Python, TypeScript, JavaScript, C, C++, Java, SQL) Tj',
    '0 -11 Td',
    '(Frontend: React 18/19, Next.js 14, Vite, Tailwind CSS, Monaco Editor, Leaflet) Tj',
    '0 -11 Td',
    '(Backend & Databases: Node.js, Express.js, FastAPI, REST APIs, MongoDB, Prisma ORM) Tj',
    '0 -11 Td',
    '(AI / ML & Systems: TensorFlow/Keras, OpenCV, CNNs, MobileNetV2, Google Gemini API, Babel AST) Tj',
    '0 -11 Td',
    '(Tools & Cloud: Git, GitHub, Vercel, Render, VS Code, Vitest) Tj',
    '0 -18 Td',
    '/F1 11 Tf',
    '(FEATURED PROJECTS (6 VERIFIED SYSTEMS)) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(1. MentorNearby - EdTech Marketplace (Live: mentornearby.com)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Connecting students & verified tutors with location matching, JWT auth, Razorpay & Cloudinary.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(2. CodeTrace - AI Developer Education & AST Tracing (Live: codetrace-nu.vercel.app)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Deterministic execution visualizer using Babel AST instrumentation & live memory layout in Monaco.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(3. CampusPrep (ProfessorVirus) - Academic & Placement Suite (Live: professorvirus.site)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- AKTU university study companion featuring notes, PYQs, AI bot Ask Virus, and Interview Pro.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(4. ScamShield AI - Multimodal Fraud Analysis (Live: scamshield-ai-steel-gamma.vercel.app)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Multimodal fraud risk detection for pitches & screenshots using Gemini API, OCR & deterministic rules.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(5. CropDetect AI - Plant Leaf CNN Classifier (Live: cropdetect-ai.vercel.app)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Deep CNN (MobileNetV2) trained on 54k+ PlantVillage images achieving 95.5% benchmark accuracy.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(6. Supply-Chainer - Operations Research & Risk Engine (Live: supply-chainer-snowy.vercel.app)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Quantile delay forecasting (p10/p50/p90), Monte-Carlo bottleneck simulation & DAG route optimization.) Tj',
    '0 -18 Td',
    '/F1 11 Tf',
    '(EXPERIENCE & INTERNSHIPS) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(MentorNearby | Founder & Lead Developer (2024 - Present)) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Architected full marketplace platform with role-based auth, dynamic search, and payment flows.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(Codveda Technologies | Web Development Intern) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Developed responsive web interfaces and modular components adhering to production standards.) Tj',
    '0 -13 Td',
    '/F1 9.5 Tf',
    '(IBM SkillsBuild x AICTE (BharatCares) | Gen AI & Cloud Intern) Tj',
    '0 -11 Td',
    '/F2 8.5 Tf',
    '(- Hands-on 6-week intensive training on generative AI, prompt engineering, and cloud deployment.) Tj',
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
  console.log('Successfully written public/Priyanshu_Kumar_Resume.pdf with all 6 projects!');
}

createPDF();
