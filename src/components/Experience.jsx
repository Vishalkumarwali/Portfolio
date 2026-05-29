import {
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] text-white py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-10"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[#8b5cf6] uppercase tracking-[3px] text-xs sm:text-sm font-medium">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            Where I've Worked
          </h2>

          <p className="text-[#8b8ba7] mt-4 text-[15px] sm:text-base md:text-lg max-w-[550px] leading-7">
            My professional journey building modern,
            responsive, and scalable web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#2b2d42] ml-2 sm:ml-4">

          {/* Circle */}
          <div className="absolute -left-[10px] top-4 w-5 h-5 rounded-full bg-[#8b5cf6] border-[4px] border-[#050816]" />

          {/* Experience Card */}
          <div className="ml-8 sm:ml-10 bg-white/5 backdrop-blur-md border border-[#2b2d42] rounded-[24px] p-5 sm:p-6 md:p-7 hover:border-[#8b5cf6] transition-all duration-300">

            {/* Top Content */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

              <div>
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-[#8b5cf6] text-lg md:text-xl" />

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    Frontend Developer
                  </h3>
                </div>

                <p className="text-[#8b5cf6] text-base md:text-lg mt-3 font-medium">
                  Vizionexl Technologies
                </p>

                <div className="flex items-center gap-2 text-[#8b8ba7] mt-2 text-sm md:text-base">
                  <FaMapMarkerAlt className="text-sm" />
                  <p>Vijayapura, Karnataka, India</p>
                </div>
              </div>

             
            </div>

            {/* Description */}
            <p className="text-[#b4b4c7] text-[14px] sm:text-[15px] md:text-[16px] leading-7 md:leading-8 mt-6">
              Working on responsive and user-friendly web
              applications for real-world clients. Contributed
              to live production projects including an
              e-commerce platform and an academic journal
              website while improving UI development,
              responsiveness, API testing using Postman,
              version control with Git & GitHub, and
              frontend best practices.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Tailwind CSS",
                "Git",
                "GitHub",
                
                "Responsive Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#a78bfa] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:border-[#8b5cf6] transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;