export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  statusBadge: "Live Production" | "Source Verified" | "Benchmark Verified" | "Experimental Prototype";
  featured: boolean;
  image?: string;
  disclaimer?: string;
}

export const projectsData: Project[] = [
  {
    id: "mentornearby",
    title: "MentorNearby",
    category: "Startup / EdTech Marketplace",
    tagline: "Educational marketplace connecting students & parents with verified local and online tutors.",
    description:
      "A production-ready edtech marketplace designed to connect students and parents with verified home and online tutors based on location, subjects, budget, and specific learning needs. Features role-based dashboards, tutor matching algorithms, and modular REST APIs.",
    highlights: [
      "Role-based authentication & dashboards (Student, Tutor, Admin) with JWT & httpOnly security",
      "Dynamic tutor discovery with location, subject, and budget filtering",
      "Cloudinary file storage & secure Razorpay payment gateway integration",
      "Hardened Node.js backend using Helmet, express-rate-limit, and mongo-sanitize",
    ],
    stack: [
      "React 18",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
      "Razorpay",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/MentorNearby",
    liveUrl: "https://www.mentornearby.com",
    statusBadge: "Live Production",
    featured: true,
  },
  {
    id: "scamshield-ai",
    title: "ScamShield AI",
    category: "AI / Multimodal Cybersecurity",
    tagline: "Multimodal AI platform protecting retail investors from fraudulent schemes and phishing.",
    description:
      "An AI-powered cybersecurity and investor protection platform designed to help retail investors and citizens evaluate suspicious messages, investment pitches, URLs, and screenshots before trusting them.",
    highlights: [
      "Multimodal analysis integrating Google Gemini API and client-side Tesseract.js OCR",
      "Deterministic safety rules coupled with an explainable risk scoring system (0 to 100)",
      "Strict PII redaction and robust schema verification powered by Zod",
      "Exportable forensic audit reports and risk advisories built with jsPDF",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Prisma ORM",
      "Tailwind CSS",
      "Google Gemini API",
      "Tesseract.js",
      "Zod",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/scamshield-ai",
    // Note: Live demo at scamshield-ai-official.vercel.app returned 404, so liveUrl is omitted per audit rules
    statusBadge: "Source Verified",
    featured: true,
    disclaimer:
      "Risk-assessment aid designed for fraud awareness and educational evaluation. Not a financial guarantee or legal counsel.",
  },
  {
    id: "campusprep",
    title: "CampusPrep (ProfessorVirus)",
    category: "EdTech / Academic & Career Suite",
    tagline: "All-in-one academic and recruitment platform for AKTU B.Tech & BCA students.",
    description:
      "An extensive academic and placement preparation platform engineered for university students. Provides handwritten notes, categorized PYQs, academic search, an AI study companion ('Ask Virus'), and an end-to-end recruitment suite ('Interview Pro').",
    highlights: [
      "Categorized engineering notes, syllabus breakdowns, and university PYQ archives",
      "'Ask Virus' AI study companion utilizing Gemini & OpenAI for instant doubt resolution",
      "'Interview Pro' module covering Aptitude, Coding challenges, Technical questions, and HR rounds",
      "Interactive quizzes, academic calculators, and resume building tools",
    ],
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "Google Gemini",
      "pdf-lib",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/CampusPrep",
    liveUrl: "https://professorvirus.site",
    statusBadge: "Live Production",
    featured: true,
    image: "/projects/campusprep-logo.png",
  },
  {
    id: "cropdetect-ai",
    title: "CropDetect AI",
    category: "AI / Deep Learning & Computer Vision",
    tagline: "Automated plant disease diagnosis classifying 38 pathogen classes using CNNs.",
    description:
      "An automated crop leaf disease classification system that analyzes plant leaf images using a trained MobileNetV2 Deep Convolutional Neural Network across 38 classes, delivering confidence-ranked probabilities and agronomic management advice.",
    highlights: [
      "Trained and benchmarked on the PlantVillage dataset (54,305 curated images across 14 crops & 38 classes)",
      "Empirical model evaluation achieved 95.5% test accuracy and 95.2% F1-score across 25 training epochs",
      "Dual deployment modality: FastAPI REST service with React frontend and interactive Streamlit explorer",
      "Authentic Softmax probability distribution, image validation, and pathogen profiles",
    ],
    stack: [
      "Python 3.10+",
      "TensorFlow/Keras",
      "MobileNetV2 CNN",
      "OpenCV",
      "FastAPI",
      "React",
      "TypeScript",
      "Streamlit",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/CropDetect-AI",
    // Note: Streamlit deployment timed out; liveUrl hidden per verification policy
    statusBadge: "Benchmark Verified",
    featured: false,
    image: "/projects/cropdetect-home.png",
    disclaimer:
      "Benchmark results measured on laboratory PlantVillage dataset. Real-world in-field accuracy may vary with sunlight, occlusion, and background conditions.",
  },
  {
    id: "ai-medicine-assistant",
    title: "AI Medicine Assistant",
    category: "AI / Assistive Technology Prototype",
    tagline: "Accessibility prototype identifying medicines from photos with voice narration.",
    description:
      "An experimental accessibility-focused prototype that assists visually impaired users by analyzing medicine packaging photos and vocalizing the predicted medicine name using text-to-speech audio feedback.",
    highlights: [
      "Computer vision image classification pipeline predicting pharmaceutical packaging labels",
      "Dual response modality providing results in high-contrast text and audio speech synthesis",
      "Lightweight, accessible user interface optimized for assistive and screen-reading workflows",
    ],
    stack: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Text-to-Speech (TTS)",
      "Streamlit",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/AI-Medicine-Assistant-Identifier-for-visually-impaired",
    // No live demo URL supplied; liveUrl omitted
    statusBadge: "Experimental Prototype",
    featured: false,
    disclaimer:
      "Experimental prototype built for accessibility research. Not clinically validated; never use for medical diagnosis or prescription verification.",
  },
];
