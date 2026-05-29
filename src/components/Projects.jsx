import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      id: "01",
      category: "E-Commerce",
      title: "Kamadhenu Swadeshi Bhandar",
      description:
        "A modern and responsive e-commerce platform developed for a swadeshi products brand, focused on clean UI, seamless navigation, optimized performance, and enhanced user experience.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",

        "Responsive Design",
        "Git & GitHub",
        
      ],
      link: "https://kamadhenuswadeshibhandar.in/",
    },
    {
      id: "02",
      category: "Publication",
      title: "AMHR Publication House",
      description:
        "A professional academic publication platform designed with a clean interface, research paper listings, publication details, and responsive user experience.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Responsive Design",
        "Git & GitHub",
      ],
      link: "https://amhrjournal.com/",
    },
  ];

  return (
    <section
      id="projects"
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
            Projects
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            Selected Projects
          </h2>

          <p className="text-[#8b8ba7] mt-4 text-[15px] sm:text-base md:text-lg max-w-[650px] leading-7">
            Real-world projects showcasing my experience
            in building responsive and modern web applications.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-5">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-[#2b2d42] rounded-[22px] overflow-hidden hover:border-[#8b5cf6] transition duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-center">

                  <p className="text-[#8b5cf6] text-xs sm:text-sm tracking-[2px] uppercase">
                    {project.id} — {project.category}
                  </p>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-[#b4b4c7] leading-6 text-sm sm:text-[15px] mt-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#a78bfa] px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-fit flex items-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] px-4 py-2 rounded-lg transition text-sm font-medium"
                  >
                    Visit Website
                    <FiArrowUpRight />
                  </a>
                </div>

                {/* Right Preview */}
                <div className="bg-gradient-to-br from-[#111827] to-[#1a1a2e] flex items-center justify-center min-h-[150px] sm:min-h-[180px] p-4 sm:p-5">

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-[130px] sm:h-[160px] rounded-[20px] bg-[#0f172a] border border-[#2b2d42] flex items-center justify-center text-center p-4"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold">
                        {project.title}
                      </h3>

                      <p className="text-[#8b8ba7] mt-2 text-xs sm:text-sm">
                        Live Client Project
                      </p>
                    </div>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;