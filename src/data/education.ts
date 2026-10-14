export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  boardOrAffiliation: string;
  period: string;
  status?: string;
  score?: string;
  location: string;
  description: string;
  tags: string[];
  logo: string;
}

export const educationData: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "ABES Engineering College, Ghaziabad",
    boardOrAffiliation: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2024 – 2028",
    status: "Currently Pursuing",
    location: "Ghaziabad, Uttar Pradesh, India",
    description:
      "Four-year undergraduate engineering degree focusing on core computer science foundations, algorithm engineering, modern web applications, and artificial intelligence systems.",
    tags: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "AI & ML",
    ],
    logo: "/images/education/abes-logo.png",
  },
  {
    id: "class-xii",
    degree: "Senior Secondary (Class XII)",
    institution: "Tagore Shiksha Sadan Inter College",
    boardOrAffiliation: "State Board",
    period: "2022",
    score: "80%",
    location: "Hapur, Uttar Pradesh, India",
    description:
      "Completed higher secondary education with a strong focus on Science, Mathematics, and Computer Science.",
    tags: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
    ],
    logo: "/images/education/tagore-logo.jpg",
  },
  {
    id: "class-x",
    degree: "Secondary School (Class X)",
    institution: "Tagore Shiksha Sadan Inter College",
    boardOrAffiliation: "State Board",
    period: "2020",
    score: "75%",
    location: "Hapur, Uttar Pradesh, India",
    description:
      "Completed secondary school examinations with a strong academic foundation across core subjects.",
    tags: [
      "Mathematics",
      "Science",
      "English",
      "Social Science",
    ],
    logo: "/images/education/tagore-logo.jpg",
  },
];

export const educationQuote = {
  text: "Continuous learning and a strong foundation in fundamentals drive my passion for building real-world solutions.",
  author: "Priyanshu Kumar",
};
