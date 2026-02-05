import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#2A554E] pt-16 lg:pt-24 pb-8 relative overflow-hidden"
    >
      {/* Decorative Element */}
      <motion.div
        className="absolute top-0 right-0 w-72 lg:w-96 h-72 lg:h-96 bg-[#C5A47E]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-playfair text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-6">
            Start Your Transformation
            <span className="block text-[#C5A47E]">Today</span>
          </h2>
          <p className="text-white/80 text-base lg:text-lg max-w-2xl mx-auto mb-8 lg:mb-10">
            Take control of your weight loss journey with the experts at Nexus
            Clinic Kuala Lumpur.
          </p>
          <motion.a
            href="#"
            className="bg-white text-[#2A554E] px-8 lg:px-10 py-4 rounded-full font-bold inline-flex items-center gap-3 shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-calendar-check"></i>
            Book Your Appointment
          </motion.a>
        </motion.div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs lg:text-sm text-center md:text-left">
            © 2024 Nexus Clinic Kuala Lumpur. All Rights Reserved.
          </p>
          <div className="flex gap-3 lg:gap-4">
            {["facebook-f", "instagram", "twitter", "linkedin-in"].map(
              (social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-9 h-9 lg:w-10 lg:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#C5A47E] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <i className={`fab fa-${social} text-sm`}></i>
                </motion.a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
