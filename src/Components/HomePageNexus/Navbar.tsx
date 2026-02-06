import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  ShoppingCart,
  Phone,
  ChevronRight,
} from "lucide-react";

const toSlug = (name: string): string => {
  return (
    "/" +
    name
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  );
};

const navItems = [
  {
    label: "Weight Loss",
    href: "#",
    submenu: {
      weightLoss: [
        "Ozempic Malaysia",
        "Wegovy Malaysia",
        "Saxenda Malaysia",
        "Duromine Malaysia",
        "HCG Weight Loss Malaysia",
        "Fat Freezing Treatment",
        "Body Contouring Malaysia",
      ],
    },
  },
  {
    label: "Aesthetic Treatments",
    href: "#",
    submenu: {
      skin: [
        "Acne & Acne Scars",
        "Pigmentation / Age Spots",
        "Dark Spot Removal",
        "Skin Lightening",
        "Milia / Mole / Wart Removal",
      ],
      face: [
        "Botox",
        "Wrinkle & Fine Line Removal",
        "Facial Sculpting / Contouring",
        "Non-surgical Face Lift",
        "Face Contouring",
        "Cheek Augmentation",
      ],
      hair: [
        "Hair Transplant",
        "Hair Loss Treatments",
        "Hair Mesotherapy",
        "PRP for Hair",
        "Stem Cell Therapy for Hair Loss",
      ],
      body: [
        "Stretch Marks",
        "Body Contouring",
        "Emsculpt - Muscle Toning & Fat Loss",
        "Vanquish ME - Fat Reduction",
        "Clatuu - Fat Freezing",
      ],
    },
  },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "/blogs" },
  { label: "Cart", href: "/cart" },
];

const languages = [
  { code: "EN", flag: "🇺🇸", href: "/en/" },
  { code: "ID", flag: "🇮🇩", href: "/id/" },
  { code: "MS", flag: "🇲🇾", href: "/ms/" },
  { code: "ZH", flag: "🇨🇳", href: "/zh/" },
  { code: "AR", flag: "🇸🇦", href: "/ar/" },
];

const categoryLabels: Record<string, string> = {
  weightLoss: "Fat & Weight Loss",
  skin: "Skin",
  face: "Face",
  hair: "Hair",
  body: "Body",
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<any>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hover with delay
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#2A554E] shadow-lg"
            : "bg-[#2A554E]/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/nexus/en"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0"
            >
              <img
                src="https://www.nexus-clinic.com/wp-content/uploads/2023/03/logo_nexus1-1.png"
                alt="Nexus Clinic"
                className="h-9 md:h-14 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative cursor-pointer"
                  onMouseEnter={() =>
                    item.submenu && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.submenu ? undefined : item.href}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "bg-white/15 text-white"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    } ${item.label === "Cart" ? "ml-1" : ""}`}
                  >
                    {item.label === "Cart" && <ShoppingCart size={16} />}
                    <span>{item.label}</span>
                    {item.submenu && (
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        style={{
                          minWidth:
                            Object.keys(item.submenu).length > 1
                              ? "680px"
                              : "260px",
                        }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Dropdown Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />

                        <div className="relative p-6">
                          <div
                            className={`grid gap-8 ${
                              Object.keys(item.submenu).length > 1
                                ? "grid-cols-4"
                                : "grid-cols-1"
                            }`}
                          >
                            {Object.entries(item.submenu).map(
                              ([category, items]) => (
                                <div key={category}>
                                  <h4 className="text-[#2A554E] font-bold text-sm mb-3 pb-2 border-b-2 border-[#EFE9DB]">
                                    {categoryLabels[category]}
                                  </h4>
                                  <ul className="space-y-1">
                                    {(items as string[]).map((subItem, idx) => (
                                      <li key={idx}>
                                        <motion.a
                                          href={toSlug(subItem)}
                                          whileHover={{ x: 4 }}
                                          className="group flex items-center gap-2 text-[#4A4A4A] hover:text-[#c1272d] text-sm py-1.5 transition-colors"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-[#2A554E]/30 group-hover:bg-[#c1272d] transition-colors" />
                                          {subItem}
                                        </motion.a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="bg-linear-to-r from-[#EFE9DB]/50 to-[#EFE9DB]/30 px-6 py-4 border-t border-[#EFE9DB]">
                          <a
                            href="/contact-us"
                            className="flex items-center justify-between text-[#2A554E] hover:text-[#184341] font-medium text-sm group"
                          >
                            <span>Book a consultation with our doctors</span>
                            <motion.div
                              whileHover={{ x: 4 }}
                              className="flex items-center gap-1"
                            >
                              <span className="text-[#c1272d]">
                                Get Started
                              </span>
                              <ChevronRight
                                size={16}
                                className="text-[#c1272d]"
                              />
                            </motion.div>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Language Selector */}
              <div className="relative ml-2 cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Globe size={16} />
                  <span className="text-sm font-medium">EN</span>
                  <ChevronDown size={12} />
                </motion.button>

                <AnimatePresence>
                  {isLangOpen && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0"
                        onClick={() => setIsLangOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-32.5 border border-gray-100 overflow-hidden"
                      >
                        {languages.map((lang, idx) => (
                          <motion.a
                            key={lang.code}
                            href={lang.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ backgroundColor: "#EFE9DB" }}
                            className="flex items-center gap-3 px-4 py-2.5 text-[#2A554E]"
                          >
                            <span className="text-base">{lang.flag}</span>
                            <span className="text-sm font-medium">
                              {lang.code}
                            </span>
                          </motion.a>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/contact-us"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className="ml-3 bg-white text-[#2A554E] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#EFE9DB] transition-colors"
              >
                Book Now
              </motion.a>
            </nav>

            {/* Mobile: Right Actions */}
            <div className="flex items-center gap-1 lg:hidden">
              {/* <motion.a
                href="/cart"
                whileTap={{ scale: 0.9 }}
                className="text-white p-2.5 rounded-lg hover:bg-white/10"
              >
                <ShoppingCart size={20} />
              </motion.a> */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setMobileSubmenu(null);
                }}
                className="text-white p-2.5 rounded-lg hover:bg-white/10"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[#184341] border-t border-white/10 overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain"
              >
                <div className="px-4 py-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileSubmenu(
                                mobileSubmenu === item.label
                                  ? null
                                  : item.label,
                              )
                            }
                            className={`max-w-[92%] w-full flex items-center justify-between py-3 px-3 rounded-xl transition-colors ${
                              mobileSubmenu === item.label
                                ? "bg-white/10 text-white"
                                : "text-white/90 hover:bg-white/5"
                            }`}
                          >
                            <span className="font-medium">{item.label}</span>
                            <motion.div
                              animate={{
                                rotate: mobileSubmenu === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileSubmenu === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="bg-[#2A554E]/40 max-w-[90%] rounded-xl mt-1 mb-2 p-4 space-y-5">
                                  {Object.entries(item.submenu).map(
                                    ([category, items], catIdx) => (
                                      <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: catIdx * 0.05 }}
                                      >
                                        <h5 className="text-[#EFE9DB] font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                          <span className="w-2 h-0.5 bg-[#EFE9DB]" />
                                          {categoryLabels[category]}
                                        </h5>
                                        <div className="grid grid-cols-1 gap-0.5">
                                          {(items as string[]).map(
                                            (subItem, idx) => (
                                              <motion.a
                                                key={idx}
                                                href={toSlug(subItem)}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                  delay: idx * 0.02,
                                                }}
                                                className="text-white/70 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                                              >
                                                {subItem}
                                              </motion.a>
                                            ),
                                          )}
                                        </div>
                                      </motion.div>
                                    ),
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/5 py-3 px-3 rounded-xl font-medium transition-colors"
                        >
                          {item.label === "Cart" && <ShoppingCart size={18} />}
                          {item.label}
                        </a>
                      )}
                    </motion.div>
                  ))}

                  {/* Divider */}
                  <div className="my-4 border-t border-white/10" />

                  {/* Mobile Language Selector */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-3 px-3">
                      Select Language
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang, idx) => (
                        <motion.a
                          key={lang.code}
                          href={lang.href}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.35 + idx * 0.03 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl text-white text-sm transition-colors"
                        >
                          <span>{lang.flag}</span>
                          <span className="font-medium">{lang.code}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 space-y-3 max-w-[88%]"
                  >
                    <a
                      href="/contact-us"
                      className="block bg-white text-[#2A554E] px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#EFE9DB] transition-colors"
                    >
                      Book Your Consultation
                    </a>
                    <a
                      href="tel:0167025699"
                      className="flex items-center justify-center gap-2 text-white/70 hover:text-white py-3 transition-colors"
                    >
                      <Phone size={16} />
                      <span className="font-medium">016-702 5699</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* <div className="h-16 lg:h-20" /> */}
    </>
  );
};

export default Navbar;
