import { useState } from "react";
import { cn } from "@/lib/utils";

// Replace with the correct paths to your PNGs in /public or /assets
const skills = [
  // Frontend
  {
    name: "HTML",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    category: "frontend",
  },
  {
    name: "CSS",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    category: "frontend",
  },
  // { name: "TypeScript", img: "/skills/typescript.png", category: "frontend" },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    category: "frontend",
  },
  // { name: "Next.js", img: "/skills/nextjs.png", category: "frontend" },

  // Backend
  // {
  //   name: "Node.js",
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  //   category: "backend",
  // },
  // {
  //   name: "Express",
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  //   category: "backend",
  // },
  // {
  //   name: "MongoDB",
  //   img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  //   category: "backend",
  // },

  // Tools
  {
    name: "Git/GitHub",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    category: "tools",
  },
  // { name: "Docker", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", category: "tools" },
  {
    name: "VS Code",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    category: "tools",
  },
];

const categories = ["all", "frontend", "tools"];    

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid with Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col items-center bg-card p-4 rounded-lg shadow-xs card-hover"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="font-medium text-lg text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
