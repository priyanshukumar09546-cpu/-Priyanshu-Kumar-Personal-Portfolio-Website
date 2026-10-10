export interface AuditItem {
  category: string;
  item: string;
  status: "VERIFIED" | "OMITTED_UNVERIFIED" | "DISCLOSED_LIMITATION" | "HIDDEN_OFFLINE";
  details: string;
}

export const auditReportData: AuditItem[] = [
  {
    category: "Identity & Profile",
    item: "GitHub Profile & Avatar",
    status: "VERIFIED",
    details: "Confirmed ownership of github.com/priyanshukumar09546-cpu. Real avatar extracted from GitHub CDN.",
  },
  {
    category: "Identity & Profile",
    item: "College & Affiliation",
    status: "VERIFIED",
    details: "ABES Engineering College, Ghaziabad, affiliated with AKTU (Class of 2028).",
  },
  {
    category: "Identity & Profile",
    item: "LinkedIn Crawling Access",
    status: "DISCLOSED_LIMITATION",
    details: "LinkedIn returned HTTP 999 (anti-scraping wall). Handled honestly: verified identity via GitHub profile bio and public links.",
  },
  {
    category: "Projects",
    item: "MentorNearby Live Deployment",
    status: "VERIFIED",
    details: "Tested https://www.mentornearby.com — returned HTTP 200 OK. Repository at github.com/priyanshukumar09546-cpu/MentorNearby verified.",
  },
  {
    category: "Projects",
    item: "CampusPrep (ProfessorVirus) Live Deployment",
    status: "VERIFIED",
    details: "Tested https://professorvirus.site — returned HTTP 200 OK. Repository at github.com/priyanshukumar09546-cpu/CampusPrep verified.",
  },
  {
    category: "Projects",
    item: "ScamShield AI Live Demo",
    status: "HIDDEN_OFFLINE",
    details: "scamshield-ai-official.vercel.app returned HTTP 404. Live demo button hidden per strict accuracy guidelines. Verified repo kept.",
  },
  {
    category: "Projects",
    item: "CropDetect AI Streamlit Demo",
    status: "HIDDEN_OFFLINE",
    details: "cropdetect-ai.streamlit.app timed out. Live demo button hidden. 95.5% benchmark accuracy verified from repo evaluation logs.",
  },
  {
    category: "Projects",
    item: "AI Medicine Assistant Prototype",
    status: "VERIFIED",
    details: "Experimental prototype verified in repo. Clearly disclaimed as non-clinical prototype.",
  },
  {
    category: "Experience",
    item: "Codveda Technologies Internship",
    status: "VERIFIED",
    details: "Verified via internship task repositories and commits on GitHub.",
  },
  {
    category: "Metrics",
    item: "DSA Problems Solved Count",
    status: "OMITTED_UNVERIFIED",
    details: "LeetCode / CodeChef profiles not provided. Unverified '500+ DSA problems' statistic omitted to adhere to strict truthfulness policy.",
  },
];
