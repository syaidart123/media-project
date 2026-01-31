import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "A deep dive into your medical history and goals with our expert doctors.",
  },
  {
    num: "02",
    title: "Customized Plan",
    desc: "A personalized plan including injections and lifestyle recommendations.",
  },
  {
    num: "03",
    title: "Regular Monitoring",
    desc: "Continuous tracking and adjustments to ensure optimal results.",
  },
  {
    num: "04",
    title: "Guidance",
    desc: "Comprehensive support for meal plans, exercise, and long-term motivation.",
  },
];

const Journey = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
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
            YOUR JOURNEY
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A554E]"
          >
            How Treatment Works
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-[#2A554E] via-[#C5A47E] to-[#2A554E] -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative"
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#FDF8F2] p-6 lg:p-8 rounded-3xl text-center relative z-10 h-full border border-[#2A554E]/10 hover:border-[#C5A47E] transition-colors">
                  <motion.div
                    className="w-14 h-14 lg:w-16 lg:h-16 bg-[#2A554E] rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-lg lg:text-xl">
                      {step.num}
                    </span>
                  </motion.div>
                  <h4 className="font-playfair text-xl lg:text-2xl font-bold text-[#2A554E] mb-3 lg:mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 lg:mt-12"
        >
          <motion.a
            href="#"
            className="bg-[#C5A47E] text-white px-8 lg:px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-[#C5A47E]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
