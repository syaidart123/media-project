import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { Locate, Mail, Phone } from "lucide-react";

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "What is Regenerative Aesthetics?",
      answer:
        "Regenerative Aesthetics harnesses your body's natural healing processes to rejuvenate skin and restore youthful vitality. Using advanced treatments like PRP therapy, stem cell treatments, and growth factor serums, we stimulate collagen production and cellular renewal for natural-looking results.",
    },
    {
      question: "How long do results from regenerative treatments last?",
      answer:
        "Results typically last 12-18 months, depending on the treatment type and individual factors. Since we're working with your body's natural regeneration, results develop gradually over 3-6 months and continue to improve. Maintenance treatments are recommended annually to sustain optimal results.",
    },
    {
      question: "Is there any downtime after regenerative procedures?",
      answer:
        "Most regenerative treatments have minimal downtime. You may experience mild redness or swelling for 24-48 hours. Most patients return to normal activities immediately, though we recommend avoiding intense exercise for 24 hours post-treatment.",
    },
    {
      question: "What makes medical weight loss different from diet programs?",
      answer:
        "Medical weight loss is supervised by healthcare professionals and tailored to your unique metabolism, hormones, and health conditions. We use FDA-approved medications, comprehensive lab testing, and evidence-based protocols to address the root causes of weight gain, not just symptoms.",
    },
    {
      question: "How much weight can I expect to lose?",
      answer:
        "Most patients lose 10-15% of their body weight within 3-6 months. Results vary based on starting weight, commitment level, and individual metabolism. Our program focuses on sustainable, healthy weight loss of 1-2kg per week, which is optimal for long-term success.",
    },
    {
      question: "How is my skin analyzed?",
      answer:
        "We use state-of-the-art imaging technology that analyzes skin layers beneath the surface, measuring hydration, pigmentation, pore size, wrinkles, and sun damage. This detailed analysis allows us to create a truly customized treatment plan targeting your exact needs.",
    },
    {
      question: "How do I choose the right treatment for me?",
      answer:
        "We recommend starting with a complimentary consultation where our specialists assess your concerns, goals, and medical history. We'll discuss all suitable options and create a personalized treatment plan that fits your lifestyle and budget.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible payment plans to make treatments accessible. Options include installment payments, package discounts, and partnerships with healthcare financing companies. Our team will discuss all financial options during your consultation.",
    },
    {
      question: "Are treatments painful?",
      answer:
        "Comfort levels vary by procedure, but we prioritize your comfort throughout. Most treatments involve minimal discomfort. We offer numbing options for more intensive procedures and ensure you're comfortable at every stage of treatment.",
    },
  ];

  const toggleItem = (index: any) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-stone-50 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 left-10 w-80 h-80 bg-amber-100 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-stone-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-[#84725E] mx-auto mb-6"
            />
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-800 mb-6">
              Frequently Asked{" "}
              <span className="italic font-serif">Questions</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
              Find answers to common questions about our treatments and services
            </p>
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            {faqData.map((faq, index) => (
              <motion.div
                key={`${index}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="bg-white border border-stone-200 overflow-hidden rounded-sm hover:border-[#84725E] transition-all duration-300"
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors duration-300"
                  whileHover={{ backgroundColor: "rgba(250, 250, 249, 0.8)" }}
                >
                  <span className="flex-1 text-stone-800 font-light text-lg pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-stone-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.3, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 border-t border-stone-100">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="text-stone-600 leading-relaxed font-light"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white border border-stone-200 rounded-sm p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-stone-800 mb-4">
              Still have <span className="italic font-serif">questions?</span>
            </h3>
            <p className="text-stone-600 mb-8 font-light">
              Our team of specialists is here to help you understand your
              options and create a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-stone-800 hover:bg-stone-900 text-white text-sm tracking-widest transition-all duration-300 shadow-lg rounded-sm"
              >
                BOOK CONSULTATION
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white hover:bg-stone-50 text-stone-800 text-sm tracking-widest border border-stone-300 hover:border-stone-400 transition-all duration-300 rounded-sm"
              >
                CONTACT US
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: <Phone />,
              title: "Call Us",
              description: "+60 123 456 7890",
              detail: "Mon-Sat, 9AM-6PM",
            },
            {
              icon: <Mail />,
              title: "Email Us",
              description: "hello@nexusclinic.com",
              detail: "Response within 24 hours",
            },
            {
              icon: <Locate />,
              title: "Visit Us",
              description: "Kuala Lumpur, Malaysia",
              detail: "Book an appointment",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white border border-stone-200 p-6 rounded-sm text-center hover:border-[#84725E] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-light text-stone-800 mb-2">
                {item.title}
              </h4>
              <p className="text-stone-700 font-medium mb-1">
                {item.description}
              </p>
              <p className="text-sm text-stone-500">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
