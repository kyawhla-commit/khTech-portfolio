
import Certificate1 from "../assets/Certificate1.jpg";
import Certificate2 from "../assets/Certificate2.jpg";

import { RiReactjsLine, RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoLaravel, IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaDigitalOcean, FaFigma, FaGithub } from "react-icons/fa";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import {
  SiMysql,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMui,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { MdPhp } from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";




export const Projects = [

  {
    year: "2025",
    name: "Next Movie",
    description: "A movie discovery app built with Next.js 16 and the TMDB API. Browse popular and top-rated movies, search, and explore by genre.",
    projectFeatures: [
      {
        section: "Features",
        items: [
          "Browse popular and top-rated movies",
          "Search movies by title",
          "Filter movies by genre",
          "View movie details and cast",
          "Server-side rendering with Next.js App Router",
        ]
      },
      {
        section: "Tech Stack",
        items: [
          "Framework: Next.js 16 (App Router)",
          "Language: TypeScript",
          "Styling: Tailwind CSS 4",
          "UI Components: Radix UI + shadcn/ui",
          "Icons: Lucide React",
          "API: TMDB (The Movie Database)",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit/Movie",
    live: "https://movie-five-blush.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "TMDB API"],
  },

  {
    year: "2025",
    name: "Social App",
    description: "A React frontend for the Social API - a social media platform with posts, comments, and likes.",
    projectFeatures: [
      {
        section: "Features",
        items: [
          "User authentication (login/register)",
          "View and create posts",
          "Comment on posts",
          "Like/unlike posts",
          "Dark/light theme toggle",
          "Responsive Material UI design",
        ]
      },
      {
        section: "Tech Stack",
        items: [
          "Framework: React 18",
          "Build Tool: Vite",
          "UI Library: Material UI (MUI) 7",
          "Routing: React Router 7",
          "State Management: TanStack React Query",
          "Forms: React Hook Form",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit/social-app",
    live: "https://kyawhla.netlify.app/",
    technologies: ["React", "Vite", "MUI", "React Query"],
  },

  {
    year: "2025",
    name: "Inventory Management System",
    description: "A comprehensive Laravel-based inventory management solution",
    projectFeatures: [
      {
        section: "Core Features",
        items: [
          "Multi-User Role System (Admin, Manager, Staff)",
          "Product Management - Track inventory items with categories",
          "Customer Management - Maintain customer records and order history",
          "Supplier Management - Manage suppliers and their products",
          "Purchase Orders - Record and track inventory purchases",
          "Sales Management - Process and track customer sales",
          "Order Management - Manage customer orders and order statuses",
          "Dashboard - Visual overview of key metrics and reports",
          "Low Stock Alerts - Get notified when inventory runs low",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit/inventoryProject",
    technologies: ["Laravel", "API", "Blade"],
  },

  {
    year: "2025",
    name: "Social API",
    description: "A RESTful API for a social media platform built with Express.js, Prisma, and SQLite.",
    projectFeatures: [
      {
        section: "Features",
        items: [
          "User registration and JWT authentication",
          "Create, read, and delete posts",
          "Comment on posts",
          "Like/unlike posts",
          "Password hashing with bcrypt",
        ]
      },
      {
        section: "Tech Stack",
        items: [
          "Runtime: Node.js",
          "Framework: Express.js 5",
          "ORM: Prisma",
          "Database: SQLite",
          "Authentication: JWT + bcrypt",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit/social-api",
    live: "https://social-api-15e4.onrender.com/posts",
    technologies: ["Node.js", "Express.js", "Prisma", "SQLite", "JWT"],
  },

  {
    year: "2024",
    name: "Blog & Category Management",
    description: "A full-stack web application featuring a Laravel 12 backend and a simple HTML/JS frontend for managing articles, categories, and user authentication",
    projectFeatures: [
      {
        section: "Frontend (app/)",
        items: [
          "Minimal HTML/JavaScript UI for category management (list, add, delete)",
          "Uses Bootstrap and FontAwesome for styling",
          "Communicates with backend API for CRUD operations",
          "Token-based authentication",
        ]
      },
      {
        section: "Backend (blog/)",
        items: [
          "Laravel 12 (PHP 8.2+) RESTful API for categories and articles",
          "User authentication with Laravel Sanctum",
          "Article management with Blade templates",
          "Web interface for articles, categories, and authentication",
          "Uses Vite, Tailwind, and Bootstrap for frontend assets",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit/100300",
    technologies: ["Laravel", "Bootstrap", "Blade", "API", "JavaScript"],
  },
];




export const Educations = [
  {
    id: 1,
    image: Certificate1,
    title: "Professional Web Developer Course | Fairway Technology",
    skills: ["JavaScript", "Bootstrap", "PHP/MySQL", "Laravel Framework"],
  },
  {
    id: 2,
    image: Certificate2,
    title: "Professional Web Developer Course | Fairway Technology ",
    skills: ["JavaScript", "React", "React Navive", "Express", "Next.js"],
  },
];


export const frontendSkills = [
    { 
      name: "React", 
      icon: RiReactjsLine, 
      color: "#61DAFB",
      category: "Frontend"
    },
    { 
      name: "JavaScript", 
      icon: IoLogoJavascript, 
      color: "#F7DF1E",
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript, 
      color: "#3178C6",
      category: "Frontend"
    },
    { 
      name: "MUI", 
      icon: SiMui, 
      color: "#3178C6",
      category: "Frontend"
    },
    { 
      name: "TailwindCss", 
      icon: RiTailwindCssFill, 
      color: "#3178C6",
      category: "Frontend"
    },
    { 
      name: "Bootstrap", 
      icon: FaBootstrap, 
      color: "#3178C6",
      category: "Frontend"
    },
    { 
      name: "ReactNative", 
      icon: TbBrandReactNative, 
      color: "#3178C6",
      category: "Frontend"
    },
  ];

  export const backendSkills = [
    { 
      name: "Laravel", 
      icon: IoLogoLaravel, 
      color: "#FF2D20",
      category: "Backend"
    },
    { 
      name: "PHP", 
      icon: MdPhp, 
      color: "#777BB4",
      category: "Backend"
    },
    { 
      name: "MySQL", 
      icon: SiMysql, 
      color: "#4479A1",
      category: "Database"
    },
    { 
      name: "RESTful API", 
      icon: TbApi, 
      color: "#FF6B6B",
      category: "Backend"
    },
    { 
      name: "Node.js", 
      icon: SiNodedotjs, 
      color: "#339933",
      category: "Backend"
    },
    { 
      name: "Express.js", 
      icon: SiExpress, 
      color: "#000000",
      category: "Backend"
    },
  ];

  export const toolSkills = [
    { 
      name: "Git", 
      icon: FaGitAlt, 
      color: "#F05032",
      category: "Version Control"
    },
    { 
      name: "GitHub", 
      icon: FaGithub, 
      color: "#4078c0",
      category: "Version Control"
    },
    { 
      name: "Postman", 
      icon: SiPostman, 
      color: "#FF6C37",
      category: "Development"
    },
    { 
      name: "Ubuntu", 
      icon: FaUbuntu, 
      color: "#E95420",
      category: "Infrastructure"
    },
    { 
      name: "Digital Ocean", 
      icon: FaDigitalOcean, 
      color: "#0080FF",
      category: "Cloud"
    },
    { 
      name: "Docker", 
      icon: SiDocker, 
      color: "#2496ED",
      category: "Infrastructure"
    },
    { 
      name: "Figam", 
      icon: FaFigma, 
      color: "#2496ED",
      category: "Degsin"
    },
  ];