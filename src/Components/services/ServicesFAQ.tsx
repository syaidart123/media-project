import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const faqs = [
  {
    q: "Are medical weight treatments safe?",
    a: "Yes. Doctors review your health and choose options that suit your profile. Monitoring continues throughout your journey.",
  },
  {
    q: "How soon can I notice changes?",
    a: "Many people feel better appetite control within weeks. Visible changes increase with steady follow up.",
  },
  {
    q: "Is there downtime?",
    a: "Most options are non surgical with little to no downtime. You can often return to work on the same day.",
  },
  {
    q: "How do I know which treatment is right for me?",
    a: "Your doctor will guide you after a friendly consultation and body composition check.",
  },
  {
    q: "Do I need to prepare before my visit?",
    a: "Wear comfortable clothing and bring any recent health reports. We will handle the rest.",
  },
];

const ServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FDF8F2]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[#C5A47E] font-semibold mb-4 tracking-wider text-sm uppercase"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-[#2A554E]"
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <motion.div
                className={`bg-white rounded-2xl overflow-hidden transition-shadow duration-300 ${
                  activeIndex === index
                    ? "shadow-xl"
                    : "shadow-sm hover:shadow-md"
                }`}
              >
                <motion.button
                  className="w-full p-6 lg:p-8 text-left flex justify-between items-center gap-6"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span className="font-semibold text-[#2A554E] text-lg">
                    {faq.q}
                  </span>
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      activeIndex === index ? "bg-[#2A554E]" : "bg-[#2A554E]/10"
                    }`}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i
                      className={`fas fa-chevron-down transition-colors duration-300 ${
                        activeIndex === index ? "text-white" : "text-[#2A554E]"
                      }`}
                    ></i>
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
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
