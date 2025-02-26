"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ThreeScene from "./ThreeScene";
import {
  FaGithub,
  FaSlack,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const fullText = "UI/UX Designer | Web Developer | Ethical Hacker";
  const typingSpeed = 100;

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, typingSpeed);
    return () => clearInterval(typingEffect);
  }, []);

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername" },
    { icon: FaEnvelope, href: "mailto:your.email@example.com" },
  ];

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const handleClickOutside = (e) => {
    if (
      isExpanded &&
      containerRef.current &&
      !containerRef.current.contains(e.target)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isExpanded]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900"
    >
      <div className="absolute inset-0 z-0 blur-md">
        <ThreeScene />
      </div>

      <div className="relative z-10 text-center p-8 rounded-lg">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[70px] md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-poppins"
        >
          Omotoyosi Jamiu Fujah
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl mb-8"
          aria-live="polite"
        >
          {text}
        </motion.p>

        {/* Dynamic Island Section */}
        <div className="flex items-center justify-center gap-4">
          <motion.a
            href="https://github.com/Darcside9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaGithub size={24} />
          </motion.a>

          <AnimatePresence>
            <motion.div
              ref={containerRef}
              initial={{ width: 140, height: 50 }}
              animate={{
                width: isExpanded ? 300 : 140,
                height: isExpanded ? 70 : 50,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              onMouseEnter={() => {
                if (window.innerWidth > 768) setIsExpanded(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) setIsExpanded(false);
              }}
              onClick={handleToggle}
              className="bg-blue-500 text-white font-bold rounded-full flex items-center justify-center overflow-hidden relative cursor-pointer"
            >
              {!isExpanded && <span>Get in Touch</span>}
              {isExpanded && (
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white"
                    >
                      <link.icon size={24} />
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.a
            href="https://darc-999.slack.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#4A154B] hover:bg-[#783d91] text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaSlack size={24} />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@coder__22?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black hover:bg-red-900 text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaTiktok size={24} />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
