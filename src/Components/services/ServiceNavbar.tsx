import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#trust" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
];

const ServicesNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="/"
              className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-[#2A554E]" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              NEXUS CLINIC
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                    scrolled
                      ? activeSection === link.href.replace("#", "")
                        ? "text-[#2A554E]"
                        : "text-gray-600 hover:text-[#2A554E]"
                      : activeSection === link.href.replace("#", "")
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}

                  {/* Active Indicator */}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        scrolled ? "bg-[#C5A47E]" : "bg-white"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-[#2A554E] hover:bg-[#2A554E]/10"
                    : "text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-whatsapp text-lg"></i>
                Chat
              </motion.a>

              <motion.a
                href="#footer"
                onClick={(e) => scrollToSection(e, "#footer")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-[#2A554E] text-white hover:bg-[#1e3d38]"
                    : "bg-white text-[#2A554E] hover:bg-[#C5A47E] hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    scrolled ? "bg-[#2A554E]" : "bg-white"
                  }`}
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    scrolled ? "bg-[#2A554E]" : "bg-white"
                  }`}
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    scrolled ? "bg-[#2A554E]" : "bg-white"
                  }`}
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[#C5A47E]"
          style={{
            width: scrolled ? "100%" : "0%",
            opacity: scrolled ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-75 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <span className="font-playfair text-xl font-bold text-[#2A554E]">
                    Menu
                  </span>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-times text-gray-600"></i>
                  </motion.button>
                </div>

                {/* Mobile Links */}
                <nav className="flex-1 overflow-y-auto py-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center justify-between px-6 py-4 text-lg transition-colors ${
                        activeSection === link.href.replace("#", "")
                          ? "text-[#2A554E] bg-[#FDF8F2] font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.label}
                      {activeSection === link.href.replace("#", "") && (
                        <motion.div
                          className="w-2 h-2 rounded-full bg-[#C5A47E]"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-6 border-t space-y-3">
                  <motion.a
                    href="https://wa.link/q64h1l"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#2A554E] text-[#2A554E] font-semibold"
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-whatsapp text-xl text-green-500"></i>
                    Chat on WhatsApp
                  </motion.a>

                  <motion.a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "#contact")}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#2A554E] text-white font-semibold"
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-calendar-check"></i>
                    Book Consultation
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesNavbar;
