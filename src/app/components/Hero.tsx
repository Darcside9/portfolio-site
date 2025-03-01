"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import ThreeScene from "./ThreeScene";
import Link from 'next/link';
import {
  FaGithub,
  FaSlack,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import {
  SiFigma,
 } from "react-icons/si";

const Hero = () => {
  const [text, setText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fullText = "UI/UX Designer | Web Developer | Ethical Hacker";
  const typingSpeed = 50;

  useEffect(() => {
    let i = 0;
    const typeText = () => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
  
    return () => setText("");
  }, []);
  

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      className: "bg-blue-700 hover:bg-blue-500 text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(20, 93, 221, 0.82)'},
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/darc_999",
      className: "bg-sky-500 hover:bg-sky-400 text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(27, 175, 222, 0.82)'},
    },
    {
      icon: FaEnvelope,
      href: "mailto:darcside999@gmail.com",
      className: "bg-green-600 hover:bg-green-400 text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(27, 222, 62, 0.82)'},
    },
    {
      icon: SiFigma,
      href: "",
      className: "bg-pink-500 hover:bg-pink-400 text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(218, 28, 208, 0.82)'},
    },
    {
      icon: FaDiscord,
      href: "",
      className: "bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(133, 28, 218, 0.82)'},
    },
    {
      icon: FaTelegramPlane,
      href: "",
      className: "bg-sky-600 hover:bg-sky-500 text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(32, 186, 230, 0.8)'},
    },
    {
      icon: FaWhatsapp,
      href: "",
      className: "bg-[#12a60acc] hover:bg-[#25de5dcc] text-white p-2 rounded-full",
      whileHover: {scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(42, 230, 32, 0.8)'},
    },
  ];
  

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (isExpanded && containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  }, [isExpanded]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <motion.section 
      ref={containerRef}
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
          className="text-[70px] md:text-7x2 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-poppins"
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
            whileHover={{ scale: 1.1, rotate: -10, boxShadow: '0px 0px 40px'}}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=100090027917721"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 10, boxShadow: '0px 0px 40px rgba(22, 109, 225, 0.82)' }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </motion.a>

          <AnimatePresence>
            <motion.div
              ref={containerRef}
              initial={{ width: 140, height: 45 }}
              animate={{
                width: isExpanded ? (window.innerWidth <= 768 ? 170 : 400) : 140,
                height: isExpanded ? (window.innerHeight <= 768 ? 55 : 55) : 45,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => {
                if (window.innerWidth > 768) setIsExpanded(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) setIsExpanded(false);
              }}
              onClick={handleToggle}
              className="bg-gray-500 hover:bg-gray-300/30 text-white font-bold rounded-2xl flex items-center justify-center overflow-hidden relative duration-200 cursor-pointer"
            >
              {!isExpanded && <span>Get in Touch</span>}
              {isExpanded && (
                <motion.div
                  className="flex flex-row md:grid-cols-3 gap-4 p-2"
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
                      whileHover={link.whileHover}
                      whileTap={{ scale: 0.95 }}
                      className={link.className}
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
            whileHover={{ scale: 1.1, rotate: -10, boxShadow:'0px 0px 40px rgba(134, 22, 225, 0.82)'}}
            whileTap={{ scale: 0.9 }}
            className="bg-[#4A154B] hover:bg-[#783d91] text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaSlack size={24} />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@coder__22?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 10, boxShadow:'0px 0px 40px rgba(225, 29, 22, 0.82)'}}
            whileTap={{ scale: 0.9 }}
            className="bg-black hover:bg-red-900 text-white p-3 rounded-full transition-colors duration-300"
          >
            <FaTiktok size={24} />
          </motion.a>
        </div>

        <div>
          <motion.div
          >
            <Link href="/resume"
              style={{
                position: "relative",
                top: "40px",
                fontSize: '18px',
              }}
              className="bg-gray-700 hover:bg-gray-300/30 text-white px-10 py-4 mt-4 font-bold rounded-xl transition-all duration-200 cursor-pointer"
            >
              Get Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;