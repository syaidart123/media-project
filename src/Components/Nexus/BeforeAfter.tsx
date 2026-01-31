import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations";

const BeforeAfter = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[#C5A47E] font-semibold mb-4 tracking-wider text-sm"
          >
            TRANSFORMATIONS
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A554E]"
          >
            Real Results: Before & After
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="group relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="h-48 lg:h-64 bg-linear-to-br from-[#2A554E]/10 to-[#C5A47E]/10 flex items-center justify-center relative">
                  <img
                    src="https://media.istockphoto.com/id/2220226254/id/foto/seorang-pria-menunjukkan-penurunan-berat-badan-dengan-mengulurkan-pinggang-celana-jeansnya.jpg?s=2048x2048&w=is&k=20&c=xunfQmJg_zFjfTCTCSItyvmatH50D79KMHlJHsXXPc8="
                    alt="after before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-dashed border-[#2A554E]/20 m-4 rounded-2xl" />
                </div>
                <div className="p-4 lg:p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs lg:text-sm text-gray-500">
                        Results
                      </p>
                      <p className="text-lg lg:text-xl font-bold text-[#2A554E]">
                        -12kg in 3 months
                      </p>
                    </div>
                    <motion.div
                      className="w-10 h-10 lg:w-12 lg:h-12 bg-[#C5A47E] rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 45 }}
                    >
                      <i className="fas fa-arrow-right text-white"></i>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
