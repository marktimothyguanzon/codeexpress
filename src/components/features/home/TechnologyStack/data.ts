import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiNginx,
  SiPostman,
} from "react-icons/si";

export const categories = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    title: "Backend",
    technologies: [
      {
        name: "Java",
        icon: FaJava,
        color: "#EA2D2E",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#3C873A",
      },
    ],
  },

  {
    title: "Database",
    technologies: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#00758F",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    title: "Cloud & DevOps",
    technologies: [
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
      },
      {
        name: "Nginx",
        icon: SiNginx,
        color: "#009639",
      },
    ],
  },

  {
    title: "Tools",
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#111827",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "#A259FF",
      },
    ],
  },
];