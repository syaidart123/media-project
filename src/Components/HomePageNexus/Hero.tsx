import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import {
  Award,
  CheckCircle,
  ChevronRight,
  MessageCircle,
  Shield,
  Star,
} from "lucide-react";

const Hero = () => {
  const features = [
    "Botox in Malaysia (wrinkles, jaw slimming, facial tension)",
    "Dermal fillers in KL (cheek, chin, jawline, under-eye)",
    "Sculptra collagen stimulation",
    "Laser treatments for acne and pigmentation",
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://www.nexus-clinic.com/wp-content/uploads/2026/01/Botox-Hero-Image-Background.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#2A554E]/90 via-[#2A554E]/70 to-[#2A554E]/40" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 right-0 w-150 h-150 bg-[#EFE9DB] rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-white"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Award size={16} className="text-[#EFE9DB]" />
              <span className="text-sm font-medium">MOH Accredited Clinic</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Advanced Aesthetic &{" "}
              <span className="text-[#EFE9DB]">Medical Weight Loss</span> Clinic
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/80 mb-8 max-w-xl"
            >
              Ministry of Health (MOH) registered and compliant. Doctor-led.
              Non-surgical, results-focused care for face, skin, hair, and body.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} className="text-[#EFE9DB] shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2A554E] px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
              >
                Book Your Assessment
                <ChevronRight size={18} />
              </motion.a>
              <motion.a
                href="https://wa.link/q64h1l"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 bg-white/10 backdrop-blur-md p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EFE9DB] rounded-full flex items-center justify-center">
                  <Star className="text-[#2A554E]" size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-2xl">5,000+</p>
                  <p className="text-white/70 text-sm">Patients Treated</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-md p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EFE9DB] rounded-full flex items-center justify-center">
                  <Shield className="text-[#2A554E]" size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-2xl">15+ Years</p>
                  <p className="text-white/70 text-sm">Clinical Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
