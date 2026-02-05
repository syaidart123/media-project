import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInRight } from "../../lib/animations";

const ServicesHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div className="absolute inset-0 bg-linear-to-br from-[#2A554E] via-[#1e3d38] to-[#2A554E]" />
        <motion.div
          className="absolute top-0 right-0 w-150 h-150 bg-[#C5A47E]/20 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-100 h-100 bg-[#FDF8F2]/10 rounded-full blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#C5A47E]/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ y }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-5 py-2 rounded-full text-sm mb-8 border border-white/20"
            >
              <span className="w-2 h-2 bg-[#C5A47E] rounded-full animate-pulse" />
              Weight Loss Treatments KL
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              Feel{" "}
              <span className="relative inline-block">
                lighter
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#C5A47E]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              ,<br />
              healthier & <span className="text-[#C5A47E]">confident</span>{" "}
              again
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
            >
              Discover doctor-guided weight management in Kuala Lumpur. Safe
              options, kind care, and a plan that respects your daily life.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                className="group relative bg-white text-[#2A554E] px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Book Consultation</span>
                <motion.span
                  className="relative z-10 w-8 h-8 bg-[#2A554E]/10 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 45 }}
                >
                  <i className="fas fa-arrow-right text-sm"></i>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-[#C5A47E]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 backdrop-blur-sm hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp text-xl text-green-400"></i>
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Floating Cards */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative h-125">
              {/* Main Image Card */}
              <motion.div
                className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ delay: 0.3 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
              >
                <img
                  src="https://www.nexus-clinic.com/wp-content/uploads/2025/11/Ozempic-weight-solution.jpg"
                  alt="Weight Loss Treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2A554E]/60 to-transparent" />
              </motion.div>

              {/* Stat Card 1 */}
              <motion.div
                className="absolute top-10 left-0 bg-white p-5 rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A554E]/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-user-md text-[#2A554E] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2A554E]">20+</p>
                    <p className="text-xs text-gray-500">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                className="absolute bottom-20 left-10 bg-[#C5A47E] p-5 rounded-2xl shadow-xl text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-heart text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5000+</p>
                    <p className="text-xs text-white/80">Happy Patients</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                className="absolute bottom-0 right-20 bg-white px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <span className="text-sm font-semibold text-[#2A554E]">
                  FDA Approved
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#FDF8F2"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default ServicesHero;
