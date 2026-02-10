import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navigation = (colors: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl lg:text-3xl tracking-tight"
            style={{ fontFamily: "Georgia, serif", color: colors.brown }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-normal">NEXUS</span>
            <span className="font-light" style={{ color: colors.wine }}>
              CLINIC
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {["About", "Services", "Treatments", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide relative group"
                style={{ color: colors.brown }}
                whileHover={{ color: colors.wine }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: colors.wine }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:flex items-center px-6 py-3 rounded-full text-sm tracking-wide border"
            style={{ borderColor: colors.brown, color: colors.brown }}
          >
            Book Now
          </motion.button>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            style={{ color: colors.brown }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-8 space-y-6">
              {["About", "Services", "Treatments", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-2xl"
                  style={{ fontFamily: "Georgia, serif", color: colors.brown }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
