"use client";

import { FaReact, FaNodeJs } from "@/node_modules/react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "I'm Shahab Hussain, a MERN Stack Developer with 2+ years of professional experience in Frontend Development. I specialize in building responsive, user-friendly, and scalable web applications using React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, and modern UI libraries. I'm passionate about creating clean, efficient, and maintainable solutions that provide excellent user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shahab Hussain",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "+92-3427565103",
    },
    {
      fieldName: "Email",
      fieldValue: "shahabhussain098123@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Peshawar City, Pakistan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Pashto",
    },
  ],
};

// education data - UPDATED with correct information
const education = {
  title: "My education",
  description:
    "Solid academic foundation in computer science, enhanced by specialized certifications.",
  items: [
    {
      institution: "Agriculture University of Peshawar",
      degree: "BS in Computer Science",
      duration: "2022 - 2027 (Expected)",
    },
    {
      institution: "GOVT College Peshawar City",
      degree: "Intermediate (FSc / ICS)",
      duration: "2020 - 2022",
    },
    {
      institution: "GOVT Shaheed Hasnain Shareef No 1 Peshawar",
      degree: "Matriculation (Science)",
      duration: "2018 - 2020",
    },
    {
      institution: "ITSAWK IT Training Center",
      degree: "Full-Stack Web Development Certificate",
      duration: "2024",
    },
  ],
};

// experience data - UPDATED with actual work experience
const experience = {
  title: "My experience",
  description:
    "Skilled in both frontend and backend technologies, with practical experience in building dynamic web applications and collaborating effectively with cross-functional teams.",
  items: [
    {
      position: "Frontend Developer",
      duration: "Dec 2025 - Present",
      description: "800Motoguru - Building and optimizing user interfaces",
    },
    {
      position: "MERN Stack Developer",
      duration: "Dec 2024 - Dec 2025",
      description: "Apptex Software Solution - React.js, Next.js, REST APIs",
    },
    {
      position: "Frontend Developer",
      duration: "Oct 2024 - July 2025",
      description: "MyCoderBro - React.js, Next.js, Tailwind CSS",
    },
  ],
};

// skills data - UPDATED with actual skills from CV
const skills = {
  title: "My technical skills",
  description:
    "Adept in the JavaScript ecosystem, I work with modern frameworks and tools to build fast and visually engaging web applications that deliver seamless user experiences.",
  skillList: [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript ES6+",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] h-[80vh] xl:h-[582px] overflow-hidden"
        >
          {/* list */}
          <TabsList className="flex flex-row md:flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6 overflow-x-auto whitespace-nowrap">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{about.title}</h3>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base tracking-tight text-white/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{education.title}</h3>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:text-left">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:text-left">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="max-w-[260px] min-h-[60px] flex items-center justify-center">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                                <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                                <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                  {skill.name}
                                </p>
                              </TooltipTrigger>
                              <TooltipContent className="hidden xl:block">
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;