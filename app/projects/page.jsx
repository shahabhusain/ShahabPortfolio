"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Filter buttons data
const filterButtons = [
  { label: "All", value: "all" },
  { label: "800Motoguru", value: "800motoguru" },
  { label: "Apptex", value: "apptex" },
  { label: "MyCoderBros", value: "mycoderbros" },
  { label: "Personal Projects", value: "myself" },
];

const projects = [
  {
    num: "01",
    category: "MernStack",
    company: "800motoguru",
    title: "800batterypro",
    description: "Developed full-stack solution for battery products e-commerce platform.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/projects/battery.png",
    live: "https://800batterypro.com/",
    github: "",
  },
  {
    num: "02",
    category: "MernStack",
    company: "800motoguru",
    title: "800Motoguru",
    description: "Built and optimized user interfaces for dynamic automotive web applications.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
    ],
    image: "/assets/projects/motor.png",
    live: "https://800motorguru.com/",
    github: "",
  },

   {
    num: "03",
    category: "frontend",
    company: "800motoguru",
    title: "800motoguruAe",
    description: "Developed frontend for caregiver services platform with responsive design.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "REST APIs" },
    ],
    image: "/assets/projects/ae.png",
    live: "https://800motorguru.ae/",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    company: "apptex",
    title: "LocalCaregiver",
    description: "Developed frontend for caregiver services platform with responsive design.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "REST APIs" },
    ],
    image: "/assets/projects/locale.png",
    live: "https://localcaregiver.net/",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    company: "apptex",
    title: "Verbalisers",
    description: "Built responsive frontend for language learning platform with modern UI.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "ShadCN UI" },
    ],
    image: "/assets/projects/verb.png",
    live: "https://verbalisers.com/",
    github: "",
  },
  {
    num: "06",
    category: "frontend",
    company: "mycoderbros",
    title: "Sovereign International",
    description: "Developed modern, responsive frontend for international business website.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
    ],
    image: "/assets/projects/ser.png",
    live: "https://sovereigninternational.uk/",
    github: "",
  },

  {
    num: "07",
    category: "frontend",
    company: "mycoderbros",
    title: "OnlyWheel",
    description: "Developed modern, responsive frontend for international business website.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "REST APIs" },
    ],
    image: "/assets/projects/only.png",
    live: "https://onlywheel.com/",
    github: "",
  },
  {
    num: "08",
    category: "fullstack",
    company: "myself",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with secure payments and modern UI.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "JWT Authentication" },
    ],
    image: "/assets/projects/ecom.jpg",
    live: "",
    github: "https://github.com/shahabhusain/Ecommerce",
  },


    {
    num: "08",
    category: "fullstack",
    company: "myself",
    title: "AI Resume Builder",
    description: "Mern Stack AI Resume Builder with modern UI.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "JWT Authentication" },
    ],
    image: "/assets/projects/resume.jpg",
    live: "",
    github: "https://github.com/shahabhusain/AI-Resume-Builder",
  },
 
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.company === activeFilter);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-4 text-accent text-center">Selected Work</h3>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterButtons.map((button) => (
            <button
              key={button.value}
              onClick={() => setActiveFilter(button.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === button.value
                  ? "bg-accent text-primary shadow-lg shadow-accent/30"
                  : "bg-secondary text-white/70 hover:bg-secondary/80 hover:text-white"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-contain rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Company Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-3 py-1 bg-accent/90 text-primary text-xs font-semibold rounded-full shadow-lg">
                  {filterButtons.find(b => b.value === project.company)?.label || project.company}
                </span>
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80 line-clamp-2">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex flex-wrap gap-2 text-xs mt-2">
                  {project.stack.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="text-accent">
                      {item.name}
                      {idx < project.stack.slice(0, 4).length - 1 && ","}
                    </li>
                  ))}
                  {project.stack.length > 4 && (
                    <li className="text-white/60">+{project.stack.length - 4} more</li>
                  )}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
               {
                project.live === "" ? null :    <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
               }
                   {
                    project.github === "" ? null : <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsGithub className="text-xl" />
                    </div>
                  </Link>
                   }
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No projects found for this company.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;