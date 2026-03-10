import React from "react";

export type TimelineData = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const timelineData: TimelineData[] = [
  {
    title: "2025",
    content: [
      {
        title: "Reached $20K MRR with my VSCode fork.",
        description: "Reached the revenue milestone of $28K MRR with my VSCode fork.",
      },
    ]
  },
  {
    title: "2024",
    content: [
      {
        title: "Contributed to Next.js core.",
        description: "Had my first PR merged into the Next.js repository, improving hydration performance.",
      },
    ]
  },
  {
    title: "2023",
    content: [
      {
        title: "Joined Aceternity as a Senior Developer.",
        description: "Started working with a world-class team to build beautiful UI components and templates.",
      },
    ]
  },
  {
    title: "2022",
    content: [
      {
        title: "Launched my first SaaS product.",
        description: "Successfully launched a productivity tool for developers that reached 5,000 active users.",
      },
    ]
  },
  {
    title: "2021",
    content: [
      {
        title: "Graduated with a degree in Computer Science.",
        description: "Completed my Bachelor's degree with honors and started my career as a full-stack developer.",
      },
    ]
  }
];
