import {
  FaBriefcase,
  FaCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaRocket,
  FaPhoneAlt,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] text-white py-20 md:py-28 px-5 sm:px-8"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#8b5cf6] uppercase tracking-[3px] text-xs sm:text-sm">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4">
            Who I Am
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left Side */}
          <div>
            <p className="text-[#b4b4c7] text-[15px] sm:text-[16px] md:text-lg leading-8 md:leading-10">
              Hi, I'm{" "}
              <span className="text-white font-semibold">
                Vishalkumar Wali
              </span>
              , a passionate{" "}
              <span className="text-white font-semibold">
                Frontend Developer
              </span>{" "}
              with{" "}
              <span className="text-white font-semibold">
                1 year 1 month
              </span>{" "}
              of hands-on experience creating responsive,
              modern, and user-friendly web applications.
            </p>

            <p className="text-[#b4b4c7] text-[15px] sm:text-[16px] md:text-lg leading-8 md:leading-10 mt-6 md:mt-8">
              Currently working at{" "}
              <span className="text-white font-semibold">
                Vizionexl Technologies
              </span>
              , where I develop clean and responsive interfaces
              using{" "}
              <span className="text-white font-semibold">
                HTML, CSS, JavaScript, React.js, Tailwind CSS,
                Flexbox, Grid, and Responsive Web Design
              </span>.
            </p>

            <p className="text-[#b4b4c7] text-[15px] sm:text-[16px] md:text-lg leading-8 md:leading-10 mt-6 md:mt-8">
              I also have practical experience with{" "}
              <span className="text-white font-semibold">
                Git, GitHub, Manual Testing,
                and Postman API Testing
              </span>
              . Passionate about building real-world projects
              and continuously improving my frontend skills.
            </p>

            {/* Experience Box */}
            <div className="mt-8 md:mt-10 border border-[#2b2d42] rounded-2xl px-5 py-4 inline-flex items-center gap-4 bg-[#111827]/40">
              <h3 className="text-3xl md:text-4xl font-bold text-[#8b5cf6]">
                1.1
              </h3>

              <div>
                <p className="text-[#b4b4c7] text-xs sm:text-sm">
                  Years of
                </p>

                <p className="text-white font-medium text-sm sm:text-base">
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#111827]/40 border border-[#2b2d42] rounded-[24px] md:rounded-[30px] p-5 sm:p-6 md:p-8">

            {/* Company */}
            <div className="flex items-start gap-4 border-b border-[#2b2d42] pb-5">
              <FaBriefcase className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Company
                </h3>

                <p className="text-[#8b8ba7] text-sm md:text-base">
                  Vizionexl Technologies
                </p>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-start gap-4 border-b border-[#2b2d42] py-5">
              <FaCode className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Role
                </h3>

                <p className="text-[#8b8ba7] text-sm md:text-base">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 border-b border-[#2b2d42] py-5">
              <FaMapMarkerAlt className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Location
                </h3>

                <a
                  href="https://www.google.com/maps/place/Vijayapura,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b8ba7] hover:text-[#8b5cf6] transition text-sm md:text-base"
                >
                  Vijayapura, Karnataka, India
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 border-b border-[#2b2d42] py-5">
              <FaEnvelope className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Email
                </h3>

                <a
                  href="mailto:vwali110@gmail.com"
                  className="text-[#8b5cf6] hover:text-[#a78bfa] transition text-sm md:text-base break-all"
                >
                  vwali110@gmail.com
                </a>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="flex items-start gap-4 border-b border-[#2b2d42] py-5">
              <FaPhoneAlt className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Mobile
                </h3>

                <a
                  href="tel:+919008951435"
                  className="text-[#8b5cf6] hover:text-[#a78bfa] transition text-sm md:text-base"
                >
                  +91 9008951435
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 border-b border-[#2b2d42] py-5">
              <FaLinkedin className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  LinkedIn
                </h3>

                <a
                  href="https://www.linkedin.com/in/vishalsoftwarengineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b5cf6] hover:text-[#a78bfa] transition text-sm md:text-base break-all"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-start gap-4 pt-5">
              <FaRocket className="text-[#8b5cf6] text-lg md:text-xl mt-1" />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Status
                </h3>

                <p className="text-[#8b8ba7] text-sm md:text-base">
                  Open to Work
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;