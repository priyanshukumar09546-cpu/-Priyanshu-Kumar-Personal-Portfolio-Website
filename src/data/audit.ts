export interface AuditItem {
  category: string;
  item: string;
  status: "VERIFIED" | "OMITTED_UNVERIFIED" | "DISCLOSED_LIMITATION" | "HIDDEN_OFFLINE" | "DEPLOYED_VERIFIED";
  details: string;
}

export const auditReportData: AuditItem[] = [
  {
    category: "Identity & Profile",
    item: "GitHub Profile & Ownership",
    status: "VERIFIED",
    details: "Confirmed ownership of github.com/priyanshukumar09546-cpu. Authentic avatar bundled with PK monogram fallback.",
  },
  {
    category: "Identity & Profile",
    item: "College & Degree",
    status: "VERIFIED",
    details: "B.Tech Computer Science and Engineering at ABES Engineering College, Ghaziabad (AKTU, Class of 2028).",
  },
  {
    category: "Deployments",
    item: "CodeTrace Live Deployment",
    status: "DEPLOYED_VERIFIED",
    details: "Successfully built and deployed to Vercel production at https://codetrace-nu.vercel.app (HTTP 200 OK). Source verified at github.com/priyanshukumar09546-cpu/CodeTrace.",
  },
  {
    category: "Deployments",
    item: "MentorNearby Live Marketplace",
    status: "VERIFIED",
    details: "Tested https://www.mentornearby.com — returned HTTP 200 OK. Repository at github.com/priyanshukumar09546-cpu/MentorNearby verified.",
  },
  {
    category: "Deployments",
    item: "CampusPrep (ProfessorVirus) Live Platform",
    status: "VERIFIED",
    details: "Tested https://professorvirus.site — returned HTTP 200 OK. Repository at github.com/priyanshukumar09546-cpu/CampusPrep verified.",
  },
  {
    category: "Projects",
    item: "Supply-Chainer Architecture & Repo",
    status: "VERIFIED",
    details: "Verified exact repository at github.com/priyanshukumar09546-cpu/Supply-chainer. Pushed comprehensive architecture specification covering Quantile Regression (p10/p50/p90), DAG route optimization, and disruption simulation.",
  },
  {
    category: "Projects",
    item: "ScamShield AI Live Demo Recheck",
    status: "HIDDEN_OFFLINE",
    details: "Rechecked scamshield-ai-official.vercel.app — returned HTTP 404. Live demo button hidden per strict accuracy guidelines. Verified repo kept.",
  },
  {
    category: "Projects",
    item: "CropDetect AI Streamlit Demo Recheck",
    status: "HIDDEN_OFFLINE",
    details: "Rechecked cropdetect-ai.streamlit.app — operation timed out (sleeping free-tier instance). Live demo button hidden. 95.5% accuracy benchmark verified.",
  },
  {
    category: "Experience",
    item: "Codveda Technologies Internship",
    status: "VERIFIED",
    details: "Confirmed via verified web development internship project repositories and commits on GitHub.",
  },
  {
    category: "Metrics",
    item: "DSA Problem Counts",
    status: "OMITTED_UNVERIFIED",
    details: "LeetCode / CodeChef profiles not provided. Unverified '500+ DSA problems' statistic omitted to adhere to strict truthfulness policy.",
  },
];
