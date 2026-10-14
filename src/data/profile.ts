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
    "I turn ideas into functional software products by combining AI, full-stack engineering, and thoughtful product design. From developing intelligent applications and backend APIs to building responsive interfaces and deploying complete solutions, I enjoy working across the entire development lifecycle.",
  statusBadge: "Open to Internships & Collaborations",
  avatarUrl: "/images/priyanshu.png",
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
      value: "6+",
      label: "Projects Built",
      detail:
        "AI-powered applications, developer tools, computer vision, and full-stack platforms.",
    },
    {
      value: "6+",
      label: "Live Deployments",
      detail:
        "Explore deployed applications and real product experiences through the portfolio's verified live links.",
    },
    {
      value: "19+",
      label: "Public Repositories",
      detail:
        "Source code and engineering experiments across AI/ML, full-stack development, computer vision, and developer tools.",
    },
  ],
};
