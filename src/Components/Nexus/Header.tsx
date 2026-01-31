import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#2A554E] backdrop-blur-md shadow-lg" : "bg-[#2A554E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <motion.img
          src="https://www.nexus-clinic.com/wp-content/uploads/2023/03/logo_nexus1-1.png"
          className="w-50 md:w-75 font-playfair text-2xl font-bold text-[#2A554E]"
          whileHover={{ scale: 1.05 }}
        ></motion.img>
        <motion.a
          href="tel:+60123456789"
          className="bg-white text-[#2A554E] px-2 py-1 md:px-6 md:py-3 rounded-full text-sm font-semibold hover:bg-[#ebe4dd] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-phone md:mr-2"></i>
          <p className="hidden md:inline">Call Doctor</p>
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
