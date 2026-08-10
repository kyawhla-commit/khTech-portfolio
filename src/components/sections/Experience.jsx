import { RevealOnScroll } from "../RevealOnScroll";
import {
  IoBriefcase,
  IoCarSport,
  IoBusiness,
  IoWater,
  IoCheckmarkCircle,
} from "react-icons/io5";

const enterpriseProjects = [
  {
    name: "Smart Car Parking Management System",
    icon: IoCarSport,
    stack: ["React.js", "TypeScript", "NestJS", "PostgreSQL", "AI Camera"],
    contributions: [
      "Developed parking transactions, dashboards, reports, passes, and rate-management features.",
      "Integrated an AI-powered camera system for automatic vehicle license-plate detection and recognition.",
    ],
    accent: "blue",
  },
  {
    name: "Smart Factory Management System",
    icon: IoBusiness,
    stack: ["React.js", "TypeScript", "NestJS", "PostgreSQL", "Kiosk Hardware"],
    contributions: [
      "Developed production planning, job and machine monitoring, and QR-code management features.",
      "Contributed to warehouse, inventory, OEE dashboard, and production-reporting modules.",
      "Integrated kiosk hardware with backend APIs for on-site production workflows and real-time operational updates.",
    ],
    accent: "cyan",
  },
  {
    name: "Blood Bank Management System",
    icon: IoWater,
    stack: ["React.js", "TypeScript", "NestJS", "PostgreSQL"],
    contributions: [
      "Developed donor, blood inventory, blood request, and hospital-management features.",
      "Implemented CRUD operations, validation, database integration, and RESTful APIs.",
    ],
    accent: "rose",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    border: "hover:border-blue-500/50",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
    border: "hover:border-cyan-500/50",
  },
  rose: {
    icon: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    border: "hover:border-rose-500/50",
  },
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="down" duration={600}>
          <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3 sm:mb-4">
              <IoBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
                Enterprise Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Systems Built at M-Tech
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Production work across parking operations, factory management, and healthcare workflows—built with reusable interfaces, typed APIs, and relational data.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {enterpriseProjects.map((project, index) => {
            const styles = accentStyles[project.accent];
            const Icon = project.icon;

            return (
              <RevealOnScroll
                key={project.name}
                direction="up"
                delay={index * 100}
                duration={600}
              >
                <article
                  className={`h-full bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200 dark:border-gray-800 ${styles.border} transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${styles.icon}`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 sm:mt-6 space-y-3">
                    {project.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                      >
                        <IoCheckmarkCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
