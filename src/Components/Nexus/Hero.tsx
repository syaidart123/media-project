import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const Hero = () => {
  // const { scrollY } = useScroll();
  // const y = useTransform(scrollY, [0, 500], [0, 150]);
  // const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-[#FDF8F2] via-white to-[#FDF8F2]">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-[#2A554E]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#C5A47E]/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            // style={{ opacity }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block bg-[#2A554E]/10 text-[#2A554E] px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              FDA-Approved Treatment
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2A554E] leading-tight mb-6"
            >
              Transform Your
              <span className="block text-[#C5A47E]">Weight Loss</span>
              Journey
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              At Nexus Clinic Kuala Lumpur, we understand your challenges. Break
              free from the cycle of diets with minimal results using GLP-1
              Liraglutide — your path to sustainable weight management.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                className="bg-[#2A554E] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-[#2A554E]/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(42,85,78,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
                <i className="fas fa-arrow-right"></i>
              </motion.a>
              <motion.a
                href="#"
                className="border-2 border-[#2A554E] text-[#2A554E] px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2A554E",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play-circle"></i>
                Watch Video
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // style={{ y }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="relative z-10 rounded-4xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                  alt="Weight Management"
                  className="w-full h-100 lg:h-125 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2A554E]/40 to-transparent" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 lg:-left-8 bottom-20 bg-white p-4 lg:p-6 rounded-2xl shadow-xl z-20"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#C5A47E]/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-weight text-[#C5A47E] text-lg lg:text-xl"></i>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold text-[#2A554E]">
                      15kg+
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">
                      Average Loss
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Shapes */}
              <motion.div
                className="absolute -right-6 -top-6 w-24 lg:w-32 h-24 lg:h-32 bg-[#C5A47E] rounded-full -z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-10 top-1/2 w-16 lg:w-20 h-16 lg:h-20 bg-[#2A554E]/20 rounded-full -z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-[#2A554E]/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-[#2A554E] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
