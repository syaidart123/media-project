import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "../../lib/animations";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is an aesthetic clinic?",
      answer:
        "An aesthetic clinic is a medical-led facility focused on enhancing appearance, skin health, and overall confidence through evidence-based, non-surgical medical aesthetic services. Treatments and programmes are overseen by licensed medical professionals.",
    },
    {
      question: "What are aesthetic treatments?",
      answer:
        "Aesthetic treatments are non-surgical medical procedures designed to improve skin quality, facial balance, and body contours. These treatments are personalised and typically performed under medical supervision following a consultation.",
    },
    {
      question: "Is Nexus Clinic a medical aesthetic clinic?",
      answer:
        "Yes. Nexus Clinic operates as a medical aesthetic clinic where consultations, treatment planning, and clinical procedures are overseen by qualified medical doctors in accordance with medical guidelines.",
    },
    {
      question: "Does Nexus Clinic provide a medical weight loss programme?",
      answer:
        "Yes. We offer a doctor-guided weight loss programme that focuses on medical assessment, lifestyle guidance, and clinically supervised solutions tailored to each individual.",
    },
    {
      question: "Do you offer WhatsApp support for enquiries?",
      answer:
        "Yes. We provide dedicated WhatsApp support for enquiries, appointment scheduling, and general assistance during business hours to ensure fast and convenient communication.",
    },
    {
      question: "Is consultation required before proceeding?",
      answer:
        "Yes. Every patient begins with a professional consultation to understand goals, medical background, and suitability before any procedure is considered.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2A554E] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A4A4A] text-lg">
            Everything you need to know about our services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EFE9DB]"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[#2A554E] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown size={20} className="text-[#2A554E]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[#4A4A4A]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
