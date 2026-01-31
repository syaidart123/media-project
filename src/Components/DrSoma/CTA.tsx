import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="consultation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-brand rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-brand rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 p-10 lg:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-orange-brand font-semibold mb-4"
                >
                  TAKE THE NEXT STEP
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Ready to Restore
                  <span className="block text-orange-brand">
                    Your Confidence?
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/70 text-lg mb-8 leading-relaxed"
                >
                  A tummy tuck is about restoring structure, comfort, and
                  proportion. When performed with proper planning and surgical
                  precision, it delivers predictable, confidence-restoring
                  results.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://wa.me/yourlink"
                    className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                    Chat on WhatsApp
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#"
                    className="inline-flex items-center justify-center gap-3 bg-orange-brand hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
                  >
                    Book Consultation
                    <i className="fas fa-arrow-right"></i>
                  </motion.a>
                </motion.div>
              </div>

              {/* Right - Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    At Dr. Soma Plastic Surgery
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      "Patient safety is the priority",
                      "Anatomical precision in every procedure",
                      "Natural-looking results, never shortcuts",
                      "Structured postoperative care",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-brand rounded-lg flex items-center justify-center shrink-0">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-orange-brand rounded-2xl flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-white text-xl"></i>
                      </div>
                      <div>
                        <p className="text-white font-semibold">Malaysia</p>
                        <p className="text-white/60 text-sm">
                          Licensed Healthcare Facilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
