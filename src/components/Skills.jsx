import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      level: "Strong",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      level: "Strong",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
      level: "Intermediate",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-sky-400",
      level: "Strong",
    },
    {
      name: "Responsive Design",
      icon: <FaLaptopCode />,
      color: "text-green-400",
      level: "Strong",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "text-orange-600",
      level: "Intermediate",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "text-gray-300",
      level: "Intermediate",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "text-orange-500",
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-10"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[#8b5cf6] uppercase tracking-[3px] text-xs sm:text-sm">
            Skills
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            What I Work With
          </h2>

          <p className="text-[#8b8ba7] mt-4 text-[15px] sm:text-base md:text-lg max-w-[650px] leading-7">
            Technologies and tools I use to build
            modern, responsive, and user-friendly
            web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              className="group bg-white/5 border border-[#2b2d42] rounded-2xl p-4 sm:p-5 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300"
            >

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#111827] flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 ${skill.color}`}
              >
                {skill.icon}
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-sm sm:text-[16px] font-semibold">
                {skill.name}
              </h3>

              {/* Level */}
              <span
                className={`inline-block mt-3 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium
                ${
                  skill.level === "Strong"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                }`}
              >
                {skill.level}
              </span>

              {/* Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="h-[2px] bg-[#8b5cf6] rounded-full mt-4"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;