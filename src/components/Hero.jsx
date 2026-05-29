function Hero() {
  return (
    <section className="bg-[#050816] text-white min-h-screen flex items-center px-5 sm:px-8 lg:px-10 pt-36 md:pt-40 lg:pt-44">
      <div className="max-w-[1200px] mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Side */}
          <div>

            {/* Badge */}
            <div className="inline-block border border-[#5b42f3] rounded-full px-4 py-2 text-[#7c6cff] text-[11px] sm:text-xs uppercase tracking-[2px] mb-7">
              Available For Opportunities
            </div>

            {/* Heading */}
            <h1 className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[74px] font-black leading-[0.95] tracking-[-2px]">
              Vishalkumar <br />
              <span className="text-[#9b7cff]">
                Frontend <br />
                Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#8b8ba7] text-[15px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8 max-w-[650px] mt-6 md:mt-8">
              Passionate Frontend Developer skilled in HTML,
              CSS, JavaScript, React.js, Tailwind CSS,
              Flexbox, Grid, Git, GitHub, and Responsive
              Web Design — building modern, responsive,
              and user-friendly web experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">

              {/* View My Work */}
              <a href="#projects">
                <button className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] transition duration-300 px-6 py-3 rounded-xl text-white text-[15px] md:text-[16px] font-semibold">
                  View My Work
                </button>
              </a>

              {/* Resume */}
              <a
                href="/Vishal_Wali_Resume.pdf"
                download
              >
                <button className="w-full sm:w-auto border border-[#8b5cf6] hover:bg-[#8b5cf6] transition duration-300 px-6 py-3 rounded-xl text-white text-[15px] md:text-[16px] font-semibold">
                  Download Resume
                </button>
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 md:mt-14">

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  1+
                </h2>
                <p className="text-[#8b8ba7] text-xs sm:text-sm mt-1">
                  Year Exp
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  2
                </h2>
                <p className="text-[#8b8ba7] text-xs sm:text-sm mt-1">
                  Live Projects
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  9+
                </h2>
                <p className="text-[#8b8ba7] text-xs sm:text-sm mt-1">
                  Skills
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#8b5cf6] blur-[90px] opacity-20 rounded-full" />

              {/* Image */}
              <img
                src="./vishal2.jpg"
                alt="Vishalkumar"
                className="relative w-[230px] sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-[30px] border border-[#2b2d42] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;