export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  location: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "mentornearby",
    role: "Founder & Lead Developer",
    organization: "MentorNearby",
    period: "August 2026 – Present",
    type: "EdTech Startup / Product Development",
    location: "Ghaziabad, India",
    description:
      "Leading product architecture, system design, and full-stack development for an educational marketplace connecting students and parents with vetted local and online tutors.",
    bullets: [
      "Architected and deployed a multi-tier web application featuring separate portals for students, tutors, and administrators.",
      "Engineered secure authentication workflows utilizing JWT tokens stored in httpOnly cookies, password hashing with bcrypt, and role-based route guards.",
      "Developed modular RESTful endpoints for tutor profile verification, location-based query filtering, and scheduling.",
      "Integrated third-party service providers including Cloudinary for document assets and Razorpay for payment processing.",
    ],
    skills: ["React 18", "Node.js", "Express.js", "MongoDB", "System Architecture", "REST APIs"],
  },
  {
    id: "codveda",
    role: "Web Development Intern",
    organization: "Codveda Technologies",
    period: "June 2026 – July 2026",
    type: "Internship",
    location: "Remote",
    description:
      "Developed responsive web applications and practical frontend interfaces following modern web standards and responsive layout methodologies.",
    bullets: [
      "Built clean, modular, and responsive static and dynamic web interfaces conforming to UI/UX specifications.",
      "Implemented standards-compliant HTML5 structure, modular CSS3 styling, and DOM manipulation using JavaScript.",
      "Practiced collaborative Git workflows, code reviews, and cross-browser debugging.",
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Git"],
  },
  {
    id: "ibm-skillsbuild",
    role: "Gen AI & Cloud Computing Intern",
    organization: "IBM SkillsBuild × AICTE (via BharatCares)",
    period: "June 2026 – July 2026",
    type: "Intensive Program & Simulation",
    location: "Virtual / India",
    description:
      "Selected for an intensive six-week curriculum covering practical generative artificial intelligence concepts and cloud computing infrastructure.",
    bullets: [
      "Engaged in hands-on learning modules covering generative AI concepts, LLM architectures, and prompt design strategies.",
      "Studied cloud deployment models, containerized workloads, and foundational enterprise cloud architecture.",
      "Completed hands-on laboratory exercises and earned the official program completion credential.",
    ],
    skills: ["Generative AI", "Prompt Engineering", "Cloud Computing", "AI Foundations"],
  },
];
