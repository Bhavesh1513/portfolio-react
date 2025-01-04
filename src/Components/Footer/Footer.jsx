import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer"  className="bg-gradient-to-r from-[#283593] to-[#465697] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Get in Touch</h1>
          <p className="text-sm md:text-lg font-light">
            I’d love to hear from you. Let’s connect!
          </p>
        </div>

        {/* Contact Links */}
        <ul className="space-y-4">
          {/* Email */}
          <li className="flex items-center gap-4">
            <MdOutlineEmail size={24} />
            <a
              href="mailto:chaudhri.mvbhavesh15@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg hover:text-[#FFC107] transition-colors"
            >
              chaudhri.mvbhavesh15@gmail.com
            </a>
          </li>
          {/* LinkedIn */}
          <li className="flex items-center gap-4">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/bhavesh-chaudhari-388824256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg hover:text-[#FFC107] transition-colors"
            >
              linkedin.com/in/bhavesh-chaudhari-388824256/
            </a>
          </li>
          {/* GitHub */}
          <li className="flex items-center gap-4">
            <FaGithub size={24} />
            <a
              href="https://github.com/Bhavesh1513"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg hover:text-[#FFC107] transition-colors"
            >
              github.com/Bhavesh1513
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs md:text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Bhavesh Chaudhari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
