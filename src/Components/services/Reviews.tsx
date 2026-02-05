import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#FDF8F2] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[#C5A47E] font-semibold mb-4 tracking-wider text-sm uppercase"
          >
            Patient Stories
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-[#2A554E] mb-8"
          >
            What Our Patients Say
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto bg-[#FDF8F2] p-8 lg:p-12 rounded-3xl relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#C5A47E] rounded-full flex items-center justify-center">
              <i className="fas fa-quote-left text-white text-xl"></i>
            </div>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed italic mb-8">
              "Patients often describe feeling lighter in body and spirit. They
              mention better sleep, calmer cravings, and new confidence in their
              clothes. They also appreciate how respectful and private the
              clinic feels."
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.i
                  key={i}
                  className="fas fa-star text-[#C5A47E] text-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                />
              ))}
            </div>

            <p className="text-gray-500 text-sm">Based on 500+ reviews</p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center items-center gap-8"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <i className="fab fa-google text-2xl"></i>
              <span className="font-semibold">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <i className="fab fa-facebook text-2xl"></i>
              <span className="font-semibold">Facebook</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
