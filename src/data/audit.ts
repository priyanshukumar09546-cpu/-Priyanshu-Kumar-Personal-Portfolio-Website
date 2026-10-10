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
    category: "Deployments",
    item: "Supply-Chainer Live Platform",
    status: "DEPLOYED_VERIFIED",
    details: "Built and deployed frontend to Vercel at https://supply-chainer-snowy.vercel.app (HTTP 200 OK). Source verified at github.com/priyanshukumar09546-cpu/Supply-chainer.",
  },
  {
    category: "Deployments",
    item: "ScamShield AI Live Platform",
    status: "DEPLOYED_VERIFIED",
    details: "Built full-stack Next.js app and deployed to Vercel at https://scamshield-ai-steel-gamma.vercel.app (HTTP 200 OK). Source verified at github.com/priyanshukumar09546-cpu/scamshield-ai.",
  },
  {
    category: "Deployments",
    item: "CropDetect AI Live Web Portal",
    status: "DEPLOYED_VERIFIED",
    details: "Built React/Vite dashboard from verified repository and deployed to Vercel at https://cropdetect-ai.vercel.app (HTTP 200 OK). Source verified at github.com/priyanshukumar09546-cpu/CropDetect-AI.",
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
