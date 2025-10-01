
import Certificate1 from "../assets/Certificate1.jpg";
import Certificate2 from "../assets/Certificate2.jpg";

// export const HeroContent = `I am a passionate full stack developer specializing in PHP, Laravel and React.js with hands-on experience in building CRUD applications, Rest APIs, and responsive user interfaces. I enjoy solving practical problems and am eager to grow in a collaborative team. I'm open to learning new tools and technologies and excited to contribute to real-world projects.`;

// export const AboutContent = `I am looking for a role that aligns with my values and allows me to contribute to society in a meaningful way. I believe that everyone has the potential to make a positive impact, and I am committed to doing so through my work. I am open to exploring different industries and roles that align with my passions and values. My main focus these days is learning new technologies and architecting solutions to grow my career.`;

export const Projects = [
  {
    year: "2025",
    name: "Inventory Management Mobile App",
    description:
      "A React Native Expo app for managing inventory, built to work with the Laravel Inventory Management API.",
    projectFeatures: [
      "Dashboard: Overview of inventory status, sales, and alerts",
      "Product Management: View, search, and manage products",
      "Barcode Scanner: Scan barcodes to quickly find products",
      "Reports: Generate sales and inventory reports",
      "Real-time Notifications: Low stock alerts and updates",
      "Settings: User profile and app configuration",
    ],
    git: "https://github.com/kyawhla-commit/inventoryMobile",
    technologies: ["React Native", "Tailwindcss"],
  },

  {
    year: "2025",
    name: "Inventory Management System",
    description: "A comprehensive Laravel-based inventory management solution",
    projectFeatures: [
      "Multi-User Role System (Admin, Manager, Staff)",
      "Product Management - Track inventory items with categories",
      "Customer Management - Maintain customer records and order history",
      " Supplier Management - Manage suppliers and their products",
      "Purchase Orders - Record and track inventory purchases",
      " Sales Management - Process and track customer sales",
      "Order Management - Manage customer orders and order statuses",
      "Dashboard - Visual overview of key metrics and reports",
      "Low Stock Alerts - Get notified when inventory runs low",
    ],
    git: "https://github.com/kyawhla-commit/inventoryProject",
    technologies: ["Laravel", "API", "Blade"],
  },

  {
    year: "2025",
    name: "Modern Full-Stack Development Portfolio",
    description:
      "A comprehensive full-stack web development portfolio showcasing modern technologies, best practices, and scalable application architectures.",
    git: "https://github.com/kyawhla-commit/react-nodejs-showcase",
    technologies: ["React Native","Express.js", "TailwindCss", "Prisma", "Docker", "TypeScript", "Node.js"],
  },

  {
    year: "2024",
    name: "Blog & Category Management",
    description:
      "A full-stack web application featuring a Laravel 12 backend and a simple HTML/JS frontend for managing articles, categories, and user authentication",
    projectFeatures: [
      {
        section: "Frontend (app/)",
        items: [
          "Minimal HTML/JavaScript UI for category management (list, add, delete)",
          "Uses Bootstrap and FontAwesome for styling",
          "Communicates with backend API for CRUD operations",
          "Token-based authentication",
        ],
      },
      {
        section: "Backend (blog/)",
        items: [
          "Laravel 12 (PHP 8.2+) RESTful API for categories and articles",
          "User authentication with Laravel Sanctum",
          "Article management with Blade templates",
          "Web interface for articles, categories, and authentication",
          "Uses Vite, Tailwind, and Bootstrap for frontend assets",
        ],
      },
    ],
    git: "https://github.com/kyawhla-commit/100300",
    technologies: ["Laravel", "Bootstrap", "Blade" ,"API" ,"JavaScript"],
  },

];

// export const Educations = [
//   {
//     title: "Professional Web Developer Course | Fairway Technology",
//     image: Certificate1.jpg,
//     skills: ["JavaScript", "Bootstrap", "PHP/MySQL", "Laravel Framework"],
//   },
//   {
//     title: "Professional Web Developer Course | Fairway Technology ",
//     image: Certificate2.jpg,
//     skills: ["JavaScript", "React", "React Navive", "Express", "Next.js"],
//   }
// ]

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
