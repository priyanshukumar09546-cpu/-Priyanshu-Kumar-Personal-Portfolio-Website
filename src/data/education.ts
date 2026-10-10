export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  boardOrAffiliation: string;
  period: string;
  score?: string;
  location: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "ABES Engineering College, Ghaziabad",
    boardOrAffiliation: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2024 – 2028",
    location: "Ghaziabad, Uttar Pradesh, India",
    description:
      "Four-year undergraduate engineering degree focusing on core computer science foundations, algorithm engineering, modern web applications, and artificial intelligence systems.",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, and DBMS.",
      "Active participant in technical student clubs and developer communities.",
      "Hands-on project development bridging theoretical machine learning with full-stack delivery.",
    ],
  },
  {
    id: "class-xii",
    degree: "Senior Secondary (Class XII)",
    institution: "Tagore Shiksha Sadan Inter College",
    boardOrAffiliation: "State Board",
    period: "2022",
    score: "80%",
    location: "Hapur, Uttar Pradesh, India",
    description: "Completed higher secondary education with a strong focus on Science, Mathematics, and Computer Science.",
    highlights: ["Mathematics, Physics, Chemistry, and Computer Science foundations."],
  },
  {
    id: "class-x",
    degree: "Secondary School (Class X)",
    institution: "Tagore Shiksha Sadan Inter College",
    boardOrAffiliation: "State Board",
    period: "2020",
    score: "75%",
    location: "Hapur, Uttar Pradesh, India",
    description: "Completed secondary school examinations with comprehensive academic performance across sciences and mathematics.",
    highlights: ["Strong academic background in secondary mathematics and science fundamentals."],
  },
];
