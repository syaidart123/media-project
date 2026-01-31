import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://drsomaplasticsurgery.com/images/home_page_banner_image.png"
          className="w-full h-full object-cover opacity-40"
          alt="Background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/50 via-gray-900/70 to-gray-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-orange-brand rounded-full animate-pulse"></span>
                <span className="text-white/90 text-sm">
                  Expert Body Contouring in Malaysia
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Restore Your
              <span className="block text-orange-brand">Confidence</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-light mt-2 text-white/80">
                with Tummy Tuck Surgery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              Achieve a flatter, firmer abdomen through surgical precision.
              Performed by Dr. Soma, a certified plastic surgeon in licensed
              Malaysian facilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#consultation"
                className="inline-flex items-center gap-3 bg-orange-brand hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
              >
                Book Consultation
                <i className="fas fa-arrow-right"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#about"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-orange-brand mb-2">
                    15+
                  </div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-orange-brand mb-2">
                    1000+
                  </div>
                  <div className="text-white/70 text-sm">Procedures Done</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-orange-brand mb-2">
                    MOH
                  </div>
                  <div className="text-white/70 text-sm">Regulated</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-orange-brand mb-2">
                    100%
                  </div>
                  <div className="text-white/70 text-sm">Safety Focus</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100"
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-brand"
                    alt="Dr. Soma"
                  />
                  <div>
                    <p className="text-white font-semibold">Dr. Soma</p>
                    <p className="text-white/60 text-sm">
                      Certified Plastic Surgeon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/50 text-center"
        >
          <p className="text-xs mb-2 uppercase tracking-widest">Scroll</p>
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
