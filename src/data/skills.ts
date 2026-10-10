export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    featured?: boolean;
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages for algorithms and applications",
    skills: [
      { name: "Python", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript", featured: true },
      { name: "C++", featured: true },
      { name: "C" },
      { name: "Java" },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Neural network modeling, multimodal inference, and CV",
    skills: [
      { name: "Google Gemini Multimodal API", featured: true },
      { name: "Convolutional Neural Networks (CNNs)", featured: true },
      { name: "MobileNetV2 Transfer Learning", featured: true },
      { name: "TensorFlow / Keras", featured: true },
      { name: "OpenCV Computer Vision", featured: true },
      { name: "Tesseract.js OCR" },
      { name: "Prompt Engineering" },
      { name: "Generative AI" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Modern, accessible, responsive user interfaces",
    skills: [
      { name: "React 18", featured: true },
      { name: "Next.js 14 (App Router)", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "Framer Motion", featured: true },
      { name: "Vite" },
      { name: "HTML5 & Semantic Web" },
      { name: "Modern CSS3" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Scalable REST APIs, authentication, and server frameworks",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "FastAPI (Python)", featured: true },
      { name: "RESTful API Design", featured: true },
      { name: "JWT Authentication & Cookies" },
      { name: "Bcrypt Security" },
      { name: "Zod Schema Validation" },
    ],
  },
  {
    category: "Databases & ORM",
    description: "Document stores, relational databases, and data modeling",
    skills: [
      { name: "MongoDB Atlas & Mongoose", featured: true },
      { name: "Prisma ORM", featured: true },
      { name: "MySQL" },
      { name: "Data Modeling & Indexing" },
    ],
  },
  {
    category: "DevOps & Developer Tools",
    description: "Version control, automated deployments, and development tooling",
    skills: [
      { name: "Git & GitHub", featured: true },
      { name: "Vercel Cloud Deployment", featured: true },
      { name: "Render" },
      { name: "VS Code" },
      { name: "AWS Cloud Fundamentals" },
      { name: "Postman / Thunder Client" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Rigorous academic and software engineering foundations",
    skills: [
      { name: "Data Structures & Algorithms", featured: true },
      { name: "Object-Oriented Programming (OOP)", featured: true },
      { name: "Database Management Systems (DBMS)", featured: true },
      { name: "Operating Systems Fundamentals", featured: true },
    ],
  },
];
