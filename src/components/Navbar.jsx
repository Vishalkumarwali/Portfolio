import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-[#1a1a2e] bg-[#050816]/90 backdrop-blur-md z-50">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide"
        >
          <span className="text-white">
            {"<"}
          </span>

          <span className="text-[#8b5cf6]">
            Vishal
          </span>

          <span className="text-white">
            .Dev
          </span>

          <span className="text-white">
            {" />"}
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-[14px] lg:text-[15px] uppercase text-[#8b8ba7] font-medium">

          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="hover:text-[#8b5cf6] transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1120] border-t border-[#1a1a2e]">
          <ul className="flex flex-col items-center py-6 gap-5 text-[#b4b4c7] uppercase text-sm">

            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#8b5cf6] transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;