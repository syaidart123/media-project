import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "../../lib/animations";
import { ChevronDown } from "lucide-react";

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Doctor-led care",
      content:
        "Injectables and prescriptions are assessed and performed by doctors.",
    },
    {
      title: "MOH-registered clinic",
      content:
        "Medical protocols, hygiene standards, and patient safety come first.",
    },
    {
      title: "Evidence-based planning",
      content:
        "We explain expected outcomes, risks, downtime, and alternatives.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#2A554E] font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-5xl font-bold text-[#2A554E] mb-6"
            >
              Why Nexus Clinic Kuala Lumpur
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#4A4A4A] mb-8 text-lg"
            >
              Nexus Clinic is a medical aesthetic clinic, not a beauty salon.
              Our approach is doctor-first and diagnosis-driven. That means we
              prioritise safety, facial harmony, and long-term skin health over
              short-term trends.
            </motion.p>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-[#2A554E]/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === index ? -1 : index)
                    }
                    className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
                      activeAccordion === index
                        ? "bg-[#2A554E] text-white"
                        : "bg-white text-[#2A554E] hover:bg-[#EFE9DB]"
                    }`}
                  >
                    <span className="font-semibold">{item.title}</span>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 py-4 text-[#4A4A4A] bg-[#2A554E]/5">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-[#4A4A4A] mt-8 text-sm"
            >
              Our team follows conservative dosing and ethical patient
              selection. If a treatment is not suitable, we will explain why and
              discuss safer options.
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://www.nexus-clinic.com/wp-content/uploads/2026/01/Facial-Contouring.webp"
                alt="Facial Contouring"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2A554E]/30 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-2.5 md:-left-8 bg-[#2A554E] text-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm text-[#EFE9DB]">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
