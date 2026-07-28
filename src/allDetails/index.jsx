
import Certificate1 from "../assets/Certificate1.jpg";
import Certificate2 from "../assets/Certificate2.jpg";
import Certificate3 from "../assets/Certificate3.jpg";


import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoLaravel, IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaGithub, FaHtml5, FaCss3Alt, FaWindows } from "react-icons/fa";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import {
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiTypeorm,
  SiGoogleplay,
  SiCloudflare,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { MdPhp } from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";




export const Projects = [
  {
    year: "2026",
    name: "YBS Way",
    description: "A public transportation mobile application for accessing YBS bus routes and transportation information across Yangon.",
    projectFeatures: [
      {
        section: "Mobile Experience",
        items: [
          "Access YBS bus routes and transportation information",
          "Reusable UI components across application screens",
          "Clear screen navigation for mobile users",
          "Responsive layouts for different device sizes",
        ]
      },
      {
        section: "Technology",
        items: [
          "Built with React Native and TypeScript",
          "Component-driven interface architecture",
          "Mobile-first interaction patterns",
          "Structured for maintainable feature growth",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit",
    live: "https://ybs-way-web.pages.dev/",
    liveLabel: "Open App",
    technologies: ["React Native", "TypeScript", "Mobile App", "YBS"],
  },

  {
    year: "2026",
    name: "Spendly",
    description: "A React Native mobile application for tracking personal income and expenses with transaction management, categories, and spending summaries.",
    projectFeatures: [
      {
        section: "Core Features",
        items: [
          "Track income and expenses with custom categories",
          "Set budget limits and savings goals",
          "Review financial summaries and insights",
          "Export backup files locally when needed",
        ]
      },
      {
        section: "Product Highlights",
        items: [
          "Published on Google Play Store",
          "Stores financial data locally on the device",
          "Supports theme, currency, and language preferences",
          "Built with Expo and AsyncStorage",
        ]
      }
    ],
    git: "https://github.com/kyawhla-commit/expense-tracker-Mobile.git",
    live: "https://play.google.com/store/apps/details?id=com.bp8.spendly",
    liveLabel: "Play Store",
    technologies: ["React Native", "TypeScript", "Expo", "AsyncStorage"],
  },

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

];




export const Educations = [
  {
    id: 1,
    image: Certificate1,
    title: "Professional Web Developer - Laravel and PHP | Fairway Technology",
    description: "This certification validates proficiency in backend web development, covering JavaScript fundamentals, responsive design with Bootstrap, database management with PHP/MySQL, and building full-stack applications using the Laravel framework.",
    skills: ["JavaScript", "Bootstrap", "PHP/MySQL", "Laravel Framework"],
  },
  {
    id: 2,
    image: Certificate2,
    title: "Professional Web Developer - React.js, Next.js and Express.js | Fairway Technology",
    description: "This certification demonstrates expertise in modern frontend and full-stack development, including React ecosystem, React Native for mobile apps, server-side rendering with Next.js, and backend development with Express.js.",
    skills: ["JavaScript", "React", "React Native", "Express", "Next.js"],
  },
  {
    id: 3,
    image: Certificate3,
    title: "Professional UI/UX Design | Fairway Technology",
    description: "This certification validates skills in user interface and user experience design, covering Figma, design thinking process, user research, customer journey mapping, visual hierarchy, typography, color theory, and mobile/web design patterns.",
    skills: ["Figma", "UI Design", "UX Design", "Design Thinking", "User Research", "Prototyping"],
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
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
      category: "Frontend"
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
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
      name: "React Native",
      icon: TbBrandReactNative, 
      color: "#3178C6",
      category: "Frontend"
    },
  ];

  export const backendSkills = [
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "#E0234E",
      category: "Backend"
    },
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
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
      category: "Database"
    },
    {
      name: "TypeORM",
      icon: SiTypeorm,
      color: "#FE0803",
      category: "ORM"
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
      name: "VS Code",
      icon: VscCode,
      color: "#007ACC",
      category: "Development"
    },
    {
      name: "Google Play Console",
      icon: SiGoogleplay,
      color: "#34A853",
      category: "App Distribution"
    },
    {
      name: "NSSM",
      icon: FaWindows,
      color: "#0078D4",
      category: "Windows Services"
    },
    {
      name: "Cloudflare Pages",
      icon: SiCloudflare,
      color: "#F38020",
      category: "Cloud Hosting"
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#000000",
      category: "Cloud Hosting"
    },
    {
      name: "GitHub Pages",
      icon: FaGithub,
      color: "#4078C0",
      category: "Cloud Hosting"
    },
    {
      name: "Render",
      icon: SiRender,
      color: "#46E3B7",
      category: "Cloud Hosting"
    },
  ];
