import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <img
                src="/images/dr_soma_logo.png"
                alt="Logo"
                className="w-10 h-10"
              />
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {["About", "Procedure", "Recovery", "FAQ"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-600 hover:text-orange-brand"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/yourlink"
                className="hidden sm:flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#consultation"
                className="bg-orange-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Book Now
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                <i
                  className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: mobileOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-40 lg:hidden pt-24 px-6"
      >
        <div className="space-y-4">
          {["About", "Procedure", "Recovery", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
