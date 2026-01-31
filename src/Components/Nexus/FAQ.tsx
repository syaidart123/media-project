import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const faqs = [
  {
    q: "What is the best injection for weight loss?",
    a: "GLP-1 Liraglutide is one of the most effective FDA-approved injections for weight management, helping regulate appetite and promote sustainable weight loss.",
  },
  {
    q: "Are there any side effects?",
    a: "Common side effects may include mild nausea, which typically subsides as your body adjusts. Our doctors will monitor your progress closely.",
  },
  {
    q: "Who is not suitable for the treatment?",
    a: "Those with a history of thyroid cancer, pancreatitis, or pregnant women should avoid this treatment. A consultation will determine your eligibility.",
  },
  {
    q: "How long does it take to show results?",
    a: "Most patients see noticeable results within 4-8 weeks, with optimal results achieved over 3-6 months of consistent treatment.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
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
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A554E]"
          >
            Common Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#FDF8F2] rounded-2xl overflow-hidden"
            >
              <motion.button
                className="w-full p-5 lg:p-6 text-left flex justify-between items-center gap-4"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-[#2A554E] text-sm lg:text-base">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-[#2A554E] rounded-full flex items-center justify-center shrink-0"
                >
                  <i className="fas fa-chevron-down text-white text-xs lg:text-sm"></i>
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-gray-600 text-sm lg:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
