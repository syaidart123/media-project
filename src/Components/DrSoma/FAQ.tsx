import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What is a tummy tuck?",
    a: "A tummy tuck is a surgical procedure that removes excess abdominal skin and fat while tightening weakened abdominal muscles to create a flatter abdomen.",
  },
  {
    q: "Is a tummy tuck the same as liposuction?",
    a: "No. Liposuction removes fat only, while a tummy tuck also removes loose skin and tightens muscles.",
  },
  {
    q: "Is tummy tuck surgery safe?",
    a: "When performed by a certified plastic surgeon in a regulated facility, it is considered a safe and well-established procedure.",
  },
  {
    q: "How long does recovery take?",
    a: "Most patients return to daily activities within 2–4 weeks, with final results visible over 3–6 months.",
  },
  {
    q: "Will there be a scar?",
    a: "Yes, but it is placed low on the abdomen and typically hidden by underwear or swimwear.",
  },
  {
    q: "Are tummy tuck results permanent?",
    a: "Results are long-lasting if body weight remains stable.",
  },
  {
    q: "Can pregnancy affect tummy tuck results?",
    a: "Yes. Pregnancy can stretch the abdomen again, so surgery is best after completing childbearing.",
  },
  {
    q: "Who should consider a tummy tuck?",
    a: "Patients with loose abdominal skin, muscle laxity, stable weight, and realistic expectations.",
  },
  {
    q: "Can a tummy tuck improve posture?",
    a: "Yes. Muscle repair can enhance core support and posture.",
  },
  {
    q: "Can it be combined with other procedures?",
    a: "Yes. It is commonly combined with liposuction for enhanced contouring.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Split FAQs into two columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  const FAQItem = ({
    faq,
    index,
    actualIndex,
  }: {
    faq: (typeof faqs)[0];
    index: number;
    actualIndex: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="mb-4"
    >
      <button
        onClick={() =>
          setOpenIndex(openIndex === actualIndex ? null : actualIndex)
        }
        className={`w-full text-left p-5 rounded-2xl transition-all ${
          openIndex === actualIndex
            ? "bg-orange-brand text-white"
            : "bg-white hover:bg-gray-50 border border-gray-100"
        }`}
      >
        <div className="flex justify-between items-center gap-4">
          <span className="font-semibold">{faq.q}</span>
          <motion.i
            animate={{ rotate: openIndex === actualIndex ? 45 : 0 }}
            className={`fas fa-plus shrink-0 ${openIndex === actualIndex ? "text-white" : "text-orange-brand"}`}
          ></motion.i>
        </div>
      </button>

      <AnimatePresence>
        {openIndex === actualIndex && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 text-gray-600 leading-relaxed">{faq.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section id="faq" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-brand font-semibold mb-4"
          >
            GOT QUESTIONS?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            {leftFaqs.map((faq, index) => (
              <FAQItem
                key={index * 2}
                faq={faq}
                index={index}
                actualIndex={index * 2}
              />
            ))}
          </div>
          <div>
            {rightFaqs.map((faq, index) => (
              <FAQItem
                key={index * 2 + 1}
                faq={faq}
                index={index}
                actualIndex={index * 2 + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
