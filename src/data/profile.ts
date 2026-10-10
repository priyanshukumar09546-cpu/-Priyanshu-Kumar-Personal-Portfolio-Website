export interface ProfileData {
  name: string;
  monogram: string;
  eyebrow: string;
  headline: string;
  supportingCopy: string;
  aboutHeading: string;
  aboutNarrative: string;
  statusBadge: string;
  avatarUrl: string;
  resumeUrl: string;
  academic: {
    degree: string;
    college: string;
    university: string;
    graduationYear: string;
    location: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Priyanshu Kumar",
  monogram: "PK",
  eyebrow: "B.TECH CSE STUDENT • CLASS OF 2028",
  headline: "AI/ML Engineer & Full-Stack Developer",
  supportingCopy:
    "I build AI-powered products that solve real problems, from idea to deployment.",
  aboutHeading: "Curious by nature. Builder by choice.",
  aboutNarrative:
    "I'm a B.Tech Computer Science Engineering student at ABES Engineering College, Ghaziabad, and the founder of MentorNearby. I combine AI with full-stack development to turn ideas into working applications. I enjoy building end-to-end products that are useful, accessible, and designed around real user needs. I'm continuously strengthening my foundations in data structures, algorithms, software engineering, and AI.",
  statusBadge: "Open to Internships & Collaborations",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/Priyanshu_Kumar_Resume.pdf",
  academic: {
    degree: "B.Tech in Computer Science and Engineering",
    college: "ABES Engineering College",
    university: "AKTU",
    graduationYear: "2028",
    location: "Ghaziabad, Uttar Pradesh, India",
  },
  socials: {
    github: "https://github.com/priyanshukumar09546-cpu",
    linkedin: "https://www.linkedin.com/in/priyanshu-kumar-9a2732255/",
    email: "priyanshukumar09546@gmail.com",
  },
  stats: [
    {
      value: "6",
      label: "Engineered Platforms",
      detail: "Full-stack apps, compiler AST engines, AI models & developer tools published on GitHub",
    },
    {
      value: "3",
      label: "Verified Live Deployments",
      detail: "Production web applications active online (MentorNearby, CodeTrace, CampusPrep)",
    },
    {
      value: "19",
      label: "Public Repositories",
      detail: "Verified source code spanning AI, ML, AST tracing, computer vision & full-stack development",
    },
  ],
};
