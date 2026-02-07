import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./lib/animations";
import { useState } from "react";
import { BeforeAfterCard } from "./Components/ClassyNexus/BeforeAfter";
import { FAQSection } from "./Components/ClassyNexus/FAQ";

export const ClassyNexus = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Regenerative Aesthetics",
      description: "View Treatments",
      img: "https://plus.unsplash.com/premium_photo-1702598531958-f20cbd116a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVnZW5lcmF0aXZlJTIwQWVzdGhldGljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Medical Weight Science",
      description: "View Treatments",
      img: "https://plus.unsplash.com/premium_photo-1661690177761-8d521bd794f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVkaWNhbCUyMFdlaWdodCUyMFNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Skin Precision",
      description: "View Treatments",
      img: "https://plus.unsplash.com/premium_photo-1661490315149-2434c0a67832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2tpbiUyMFByZWNpc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="bg-[#DED9D1] min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-light tracking-wider text-stone-800"
            >
              NEXUS CLINIC
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              {["The Clinic", "The Nexus Collection", "Results"].map(
                (item, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors duration-300"
                  >
                    {item}
                  </motion.a>
                ),
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#84725E] text-white px-8 py-3 text-sm tracking-wide transition-all duration-300 rounded-sm"
              >
                Reserve Your Consultation
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  className="w-full h-0.5 bg-stone-800 transition-all"
                />
                <motion.span
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-stone-800 transition-all"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  className="w-full h-0.5 bg-stone-800 transition-all"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-stone-200"
            >
              <div className="px-6 py-6 space-y-4">
                {["The Clinic", "The Nexus Collection", "Results"].map(
                  (item, idx) => (
                    <motion.a
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      href="#"
                      className="block text-sm tracking-wide text-stone-600 hover:text-stone-900"
                    >
                      {item}
                    </motion.a>
                  ),
                )}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="w-full bg-[#84725E] text-white px-8 py-3 text-sm tracking-wide rounded-sm"
                >
                  Reserve Your Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-stone-100 to-stone-50" />

        <div
          className="absolute inset-0 opacity-90 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/nexus/nexus-clinic.png)`,
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#eaeaea] leading-tight">
                The Future of Your Skin,
                <br />
                <span className="italic font-serif">Refined</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-lg text-[#3C3D2D] max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              KL's premier Medi-Aesthetic destination for medical weight loss
              and regenerative aesthetics
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-amber-100 hover:bg-amber-200 text-stone-800 px-12 py-4 text-sm tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl rounded-sm"
              >
                RESERVE YOUR CONSULTATION
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#3C3D2D]"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm"
            >
              <div className="w-12 h-12 rounded-full border border-[#3C3D2D] flex items-center justify-center">
                <span className="text-xs">MOH</span>
              </div>
              <span className="tracking-wide">Accredited</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-sm"
            >
              <div className="w-12 h-12 rounded-full border border-[#3C3D2D] flex items-center justify-center">
                <span className="text-xs">★</span>
              </div>
              <span className="tracking-wide">Awarded Best Clinic 2025</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-serif italic"
            >
              VOGUE
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-stone-400 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Authority Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 text-xs tracking-widest text-stone-400">
            <hr />
            <span>━━━</span>
            <span className="text-lg">AUTHORITY BAR</span>
            <span>━━━</span>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="pt-8 pb-20 px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="group relative bg-white transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* linear Background on Hover */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-linear-to-br from-amber-200 to-stone-200"
                />

                <div className="relative z-10 space-y-8 bg-[#f7f5f1]">
                  {/* Image Placeholder */}
                  <div className=" bg-stone-100 flex items-center justify-center overflow-hidden rounded-sm">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full bg-linear-to-br from-stone-200 to-stone-100 flex items-center justify-center"
                    >
                      <img src={service.img} alt={service.title} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4 py-6">
                    <h3 className="text-xl font-light tracking-wide text-stone-800">
                      {service.title}
                    </h3>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-sm tracking-wider text-stone-500 group-hover:text-stone-800 transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
                    >
                      {service.description}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <BeforeAfterCard />
      <FAQSection />

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-stone-800 text-white px-6 lg:px-12"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-4xl font-light tracking-tight"
          >
            Begin Your <span className="italic font-serif">Transformation</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-300 text-lg tracking-wide"
          >
            Schedule your personalized consultation today
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-amber-100 hover:bg-amber-200 text-stone-800 px-12 py-4 text-sm tracking-widest transition-all duration-300 shadow-lg rounded-sm"
          >
            BOOK NOW
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};
