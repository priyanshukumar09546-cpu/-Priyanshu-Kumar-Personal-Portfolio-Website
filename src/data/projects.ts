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
  statusBadge: "Live Production" | "Source Verified" | "Benchmark Verified" | "Architecture Verified" | "Experimental Prototype";
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
      "Role-based authentication & dashboards (Student, Tutor, Admin) with JWT & httpOnly cookie security",
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
    image: "/projects/mentornearby.png",
  },
  {
    id: "codetrace",
    title: "CodeTrace",
    category: "AI / Developer Education & Runtime Tracing",
    tagline: "AI-powered interactive programming platform making execution visible via real-time AST tracing.",
    description:
      "An interactive computer science education platform that eliminates the invisible execution barrier. Unlike generic LLM chat wrappers, CodeTrace executes code deterministically using an AST instrumentation and runtime tracing engine to visualize memory layout, call stack, control flow, and variable state step-by-step.",
    highlights: [
      "Deterministic runtime tracing engine powered by Babel AST instrumentation (@babel/parser, @babel/traverse)",
      "Monaco Editor with step-over, step-into, pause/resume, and execution speed controls (0.5x to 4x)",
      "Live Memory Layout & Call Stack visualizer tracking activation frames and heap references",
      "Contextual AI tutoring strictly grounded in verified runtime execution state streams",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Monaco Editor",
      "Babel AST",
      "Tailwind CSS",
      "Vitest",
      "Vercel",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/CodeTrace",
    liveUrl: "https://codetrace-nu.vercel.app",
    statusBadge: "Live Production",
    featured: true,
    image: "/projects/codetrace.png",
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
    image: "/projects/campusprep.png",
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
    statusBadge: "Source Verified",
    featured: true,
    image: "/projects/scamshield.svg",
    disclaimer:
      "Risk-assessment aid designed for fraud awareness and educational evaluation. Not a financial guarantee or legal counsel. Live demo currently offline for infrastructure updates.",
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
    statusBadge: "Benchmark Verified",
    featured: false,
    image: "/projects/cropdetect-home.png",
    disclaimer:
      "Benchmark results measured on laboratory PlantVillage dataset. Real-world in-field accuracy may vary with sunlight, occlusion, and background conditions. Free tier Streamlit demo sleeping.",
  },
  {
    id: "supply-chainer",
    title: "Supply-Chainer",
    category: "AI / Operations Research & Risk Intelligence",
    tagline: "Probabilistic supply chain risk intelligence, route optimization, and disruption simulation.",
    description:
      "An enterprise supply chain resilience platform built to forecast multimodal transit delays, simulate global chokepoint disruptions, and compute Pareto-optimal freight routing using gradient-boosted quantile regression and directed acyclic graphs.",
    highlights: [
      "Quantile Delay Prediction (p10, p50, p90) forecasting tail-risk distributions beyond naive averages",
      "Monte-Carlo simulation modeling chokepoint closures, supplier cascades, and buffer stock needs",
      "Directed Acyclic Graph (DAG) route optimization balancing lead time, cost, and carbon emissions",
      "Comprehensive architecture and deployment specification published to open-source repository",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Next.js 14",
      "LightGBM / Quantile ML",
      "NetworkX",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/priyanshukumar09546-cpu/Supply-chainer",
    statusBadge: "Architecture Verified",
    featured: false,
    image: "/projects/supplychainer.svg",
    disclaimer:
      "Full mathematical model and architecture specification published. Open-source core implementation in active development.",
  },
];
