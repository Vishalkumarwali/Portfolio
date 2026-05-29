import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-10"
    >
      <div className="max-w-[1000px] mx-auto">

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-[#2b2d42] rounded-[24px] md:rounded-[30px] p-5 sm:p-8 md:p-10 text-center backdrop-blur-md"
        >

          {/* Heading */}
          <p className="text-[#8b5cf6] uppercase tracking-[3px] text-xs sm:text-sm">
            Contact
          </p>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Let’s Build Something <br />
            <span className="text-[#8b5cf6]">
              Amazing Together 🚀
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#8b8ba7] text-[15px] sm:text-base md:text-lg leading-7 md:leading-8 max-w-[650px] mx-auto mt-5">
            I'm open to frontend developer opportunities,
            freelance projects, and exciting collaborations.
            Feel free to reach out and let’s build
            something modern together.
          </p>

          {/* Email Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:vwali110@gmail.com"
            className="inline-flex items-center justify-center gap-3 bg-[#8b5cf6] hover:bg-[#7c3aed] px-5 sm:px-6 py-3 rounded-xl mt-8 text-sm sm:text-base font-medium transition duration-300"
          >
            <FaEnvelope />
            <span className="break-all">
              vwali110@gmail.com
            </span>
          </motion.a>

          {/* Contact Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

            {/* Mobile Number */}
            <motion.a
              whileHover={{ y: -3 }}
              href="tel:+919008951435"
              className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#2b2d42] bg-white/5 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 px-5 py-3 rounded-xl transition duration-300 text-sm sm:text-base"
            >
              <FaPhoneAlt className="text-green-400 text-lg" />
              +91 9008951435
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/Vishalkumarwali"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#2b2d42] bg-white/5 hover:border-[#8b5cf6] px-5 py-3 rounded-xl transition duration-300 text-sm sm:text-base"
            >
              <FaGithub className="text-lg" />
              GitHub
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/vishalsoftwarengineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#2b2d42] bg-white/5 hover:border-[#8b5cf6] px-5 py-3 rounded-xl transition duration-300 text-sm sm:text-base"
            >
              <FaLinkedin className="text-lg text-blue-400" />
              LinkedIn
            </motion.a>

          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-10 border-t border-[#1e293b] pt-6">
          <p className="text-[#8b8ba7] text-xs sm:text-sm leading-6">
            Designed & Built by{" "}
            <span className="text-white font-semibold">
              Vishalkumar Wali
            </span>{" "}
            • Frontend Developer • Vijayapura, Karnataka
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;