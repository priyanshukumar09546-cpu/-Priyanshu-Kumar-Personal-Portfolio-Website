export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: "Internship Certificate" | "Virtual Simulation" | "Hackathon / Competition" | "Technical Program";
  year: string;
  description: string;
  credentialUrl?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "ibm-aicte",
    title: "Gen AI and Cloud Computing Internship Credential",
    issuer: "IBM SkillsBuild × AICTE (via BharatCares)",
    category: "Internship Certificate",
    year: "2026",
    description: "Certificate of completion for the 6-week technical program on Generative AI and Cloud Computing.",
  },
  {
    id: "ey-risk",
    title: "Technology Risk Virtual Job Simulation",
    issuer: "EY (Ernst & Young) via Forage",
    category: "Virtual Simulation",
    year: "2026",
    description: "Completed practical simulation tasks analyzing enterprise technology risk, IT governance, and cybersecurity controls.",
  },
  {
    id: "aws-arch",
    title: "Solutions Architecture Virtual Job Simulation",
    issuer: "AWS (Amazon Web Services) via Forage",
    category: "Virtual Simulation",
    year: "2026",
    description: "Simulated real-world solutions architecture challenges, designing cloud scalability and security architectures on AWS.",
  },
  {
    id: "ms-ai",
    title: "Microsoft Season of AI",
    issuer: "Microsoft",
    category: "Technical Program",
    year: "2025",
    description: "Participated in Microsoft's technical learning initiative exploring modern AI tooling, Azure AI, and applied machine learning.",
  },
  {
    id: "designathon",
    title: "Design-A-Thon Participant",
    issuer: "Manipal University Jaipur × Unstop",
    category: "Hackathon / Competition",
    year: "2025",
    description: "Competed in collaborative problem-solving and UI/UX design challenges addressing real-world user problems.",
  },
  {
    id: "synapse",
    title: "Synapse 2K25",
    issuer: "NIT Calicut",
    category: "Hackathon / Competition",
    year: "2025",
    description: "National technical symposium event participation in engineering problem-solving and software design.",
  },
];
