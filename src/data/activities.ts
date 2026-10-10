export interface ActivityItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: string;
}

export const activitiesData: ActivityItem[] = [
  {
    id: "internshala",
    role: "Campus Ambassador",
    organization: "Internshala",
    period: "2026 – Present",
    type: "Campus Leadership & Outreach",
    description:
      "Representing Internshala at ABES Engineering College, facilitating career opportunities, internship awareness, and skill development programs among fellow undergraduate students.",
  },
  {
    id: "powerbi-club",
    role: "Volunteer & Data Enthusiast",
    organization: "Microsoft PowerBI Club",
    period: "2025 – Present",
    type: "Community & Peer Learning",
    description:
      "Collaborating on business intelligence projects, data dashboard design, and exploratory analytics sessions with club members.",
  },
];
