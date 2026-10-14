export type CertificateCategory =
  | "Internship"
  | "Certifications & Job Simulations"
  | "Events & Participation";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  date: string;
  description: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfPage: number;
  pdfPageEnd?: number;
  imagePath: string;
  cleanPdfPath: string;
  tags?: string[];
  dimensions: { width: number; height: number };
}

export const COMBINED_CERTIFICATES_PDF_PATH = "/certificates/all_certificates.pdf";
export const CLEAN_COMBINED_CERTIFICATES_PDF_PATH = "/certificates/Priyanshu_Kumar_Clean_Certificates.pdf";
export const TOTAL_CERTIFICATE_PAGES = 8;

export const certificationsData: CertificationItem[] = [
  // Page 1: Internship
  {
    id: "ibm-skillsbuild-internship",
    title: "IBM SkillsBuild Gen AI & Cloud Computing Internship",
    issuer: "BharatCares, AICTE & IBM SkillsBuild",
    category: "Internship",
    date: "June 2026 to July 2026",
    description:
      "Successfully completed the 6-week technical internship conducted in association with the All India Council for Technical Education (AICTE) and IBM SkillsBuild, focused on practical Generative AI and Cloud Computing workflows.",
    credentialId: "BHIBMAC03987",
    pdfPage: 1,
    pdfPageEnd: 1,
    imagePath: "/certificates/clean/cert_1_clean.png",
    cleanPdfPath: "/certificates/clean/cert_1_clean.pdf",
    tags: ["Gen AI", "Cloud Computing", "AICTE", "IBM SkillsBuild"],
    dimensions: { width: 1154, height: 1620 },
  },

  // Page 2: IBM Generative AI
  {
    id: "ibm-generative-ai",
    title: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    category: "Certifications & Job Simulations",
    date: "June 2026",
    description:
      "Completion credential awarded by IBM SkillsBuild covering core Generative AI concepts, foundation models, prompt engineering, and ethical AI deployment principles.",
    credentialId: "PLAN-BAEFCCAAD520",
    pdfPage: 2,
    pdfPageEnd: 2,
    imagePath: "/certificates/clean/cert_2_clean.png",
    cleanPdfPath: "/certificates/clean/cert_2_clean.pdf",
    tags: ["Generative AI", "LLMs", "IBM SkillsBuild", "Prompt Engineering"],
    dimensions: { width: 1170, height: 723 },
  },

  // Page 3: Synapse 2K25 – Tathva'25, NIT Calicut
  {
    id: "nit-calicut-synapse",
    title: "Synapse 2K25 – Tathva’25",
    issuer: "National Institute of Technology Calicut",
    category: "Events & Participation",
    date: "October 2025",
    description:
      "Certificate of participation for active technical engagement in Synapse 2K25, conducted as part of TATHVA '25 by National Institute of Technology, Calicut.",
    pdfPage: 3,
    pdfPageEnd: 3,
    imagePath: "/certificates/clean/cert_3_clean.png",
    cleanPdfPath: "/certificates/clean/cert_3_clean.pdf",
    tags: ["NIT Calicut", "Tathva '25", "Technical Symposium", "Innovation"],
    dimensions: { width: 1148, height: 870 },
  },

  // Page 4: Season of AI – MCP Event Participation, Microsoft
  {
    id: "microsoft-season-of-ai",
    title: "Season of AI – MCP Event Participation Certificate",
    issuer: "Microsoft",
    category: "Events & Participation",
    date: "November 2025",
    description:
      "Participated in the Season of AI - MCP event hosted at Microsoft Office, Gurugram. Explored cutting-edge AI technologies, Model Context Protocol (MCP), and industry trends alongside tech leaders.",
    pdfPage: 4,
    pdfPageEnd: 4,
    imagePath: "/certificates/clean/cert_4_clean.png",
    cleanPdfPath: "/certificates/clean/cert_4_clean.pdf",
    tags: ["Microsoft", "Season of AI", "Model Context Protocol", "AI Community"],
    dimensions: { width: 1170, height: 829 },
  },

  // Page 5: EY Technology Risk Virtual Job Simulation
  {
    id: "ey-tech-risk",
    title: "EY Technology Risk Virtual Job Simulation",
    issuer: "Forage & Ernst & Young",
    category: "Certifications & Job Simulations",
    date: "June 2026",
    description:
      "Completed practical enterprise risk simulation tasks with Ernst & Young on Forage, analyzing technology governance, IT general controls (ITGC), and cybersecurity risk mitigation.",
    credentialId: "Xk3h7FgiLS7EnftZY",
    pdfPage: 5,
    pdfPageEnd: 5,
    imagePath: "/certificates/clean/cert_5_clean.png",
    cleanPdfPath: "/certificates/clean/cert_5_clean.pdf",
    tags: ["Technology Risk", "Cybersecurity", "IT Governance", "Enterprise Audit"],
    dimensions: { width: 1158, height: 819 },
  },

  // Page 6: Happy Holidays LinkedIn Challenge
  {
    id: "microsoft-powerbi-challenge",
    title: "Happy Holidays LinkedIn Challenge",
    issuer: "Microsoft User Group & UP Power BI Club",
    category: "Events & Participation",
    date: "January 2026",
    description:
      "Awarded for active participation and technical data storytelling in the festive challenge organized across the community by Microsoft User Group and UP Power BI Club.",
    credentialId: "HHLC-26-6J5GKEGR",
    pdfPage: 6,
    pdfPageEnd: 6,
    imagePath: "/certificates/clean/cert_6_clean.png",
    cleanPdfPath: "/certificates/clean/cert_6_clean.pdf",
    tags: ["Power BI", "Microsoft User Group", "Data Analytics", "Community"],
    dimensions: { width: 1170, height: 827 },
  },

  // Page 7: Design-A-Thon — Unstop
  {
    id: "unstop-designathon",
    title: "Design-A-Thon – Online Round (PPT Submission) Certificate of Participation",
    issuer: "LEARNIT, Manipal University Jaipur & Unstop",
    category: "Events & Participation",
    date: "November 2025",
    description:
      "Certificate of participation for completing Round 1 (PPT submission) of DESIGN-A-THON organized by LEARNIT in collaboration with Manipal University Jaipur on Unstop.",
    pdfPage: 7,
    pdfPageEnd: 7,
    imagePath: "/certificates/clean/cert_7_clean.png",
    cleanPdfPath: "/certificates/clean/cert_7_clean.pdf",
    tags: ["Unstop", "Design-A-Thon", "UI/UX", "Product Design"],
    dimensions: { width: 1074, height: 734 },
  },

  // Page 8: AWS Solutions Architecture Job Simulation
  {
    id: "aws-solutions-architecture",
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage & AWS",
    category: "Certifications & Job Simulations",
    date: "August 2025",
    description:
      "Completed practical solutions architecture tasks with AWS on Forage, designing scalable, highly available, and cost-efficient cloud architectures adhering to the AWS Well-Architected Framework.",
    credentialId: "9hd9vbyqdRtQhK7k8",
    pdfPage: 8,
    pdfPageEnd: 8,
    imagePath: "/certificates/clean/cert_8_clean.png",
    cleanPdfPath: "/certificates/clean/cert_8_clean.pdf",
    tags: ["AWS", "Cloud Architecture", "Scalability", "System Design"],
    dimensions: { width: 1128, height: 797 },
  },
];
