import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const WhoWeHelp = () => {
  const points = [
    "If you want smoother skin, firmer tone, or better body balance",
    "If you feel tired or dull from stress or city life",
    "Our gentle treatments are made for real people living busy lives in KL",
    "You will not feel rushed or judged. You will feel supported and understood",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FDF8F2] relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-[#2A554E]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6">
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
            Who We Help
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-[#2A554E] mb-12"
          >
            Our Body Treatments <br className="hidden lg:block" />
            <span className="text-[#C5A47E]">Are For You</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-left"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A47E] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2A554E]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#2A554E] transition-colors">
                    <i className="fas fa-check text-[#2A554E] group-hover:text-white transition-colors"></i>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{point}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
