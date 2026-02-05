import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations";

const treatments = [
  {
    icon: "fa-syringe",
    title: "Ozempic Malaysia",
    desc: "Trusted injectable program for healthy weight loss.",
    color: "#2A554E",
  },
  {
    icon: "fa-prescription-bottle-alt",
    title: "Saxenda Weight Loss",
    desc: "Clinically proven treatment for effective results.",
    color: "#C5A47E",
  },
  {
    icon: "fa-pills",
    title: "Duromine Weight Loss",
    desc: "Powerful appetite suppressant for body management.",
    color: "#2A554E",
  },
  {
    icon: "fa-dna",
    title: "HCG Programme",
    desc: "Balanced hormone-based treatment for fat reduction.",
    color: "#C5A47E",
  },
  {
    icon: "fa-leaf",
    title: "Detox & Cleanse",
    desc: "Rejuvenate your system with our detox therapy.",
    color: "#2A554E",
  },
  {
    icon: "fa-tint",
    title: "IV Drip Therapy",
    desc: "Hydration and vitamin infusion for total wellness.",
    color: "#C5A47E",
  },
];

const TreatmentsList = () => {
  return (
    <section
      id="treatments"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A554E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            Our Treatments
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-[#2A554E] mb-6"
          >
            List of Treatments
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Below are the core treatments in this category. Each designed for
            effective, safe weight management.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group relative"
            >
              <motion.div
                className="relative bg-[#FDF8F2] p-8 rounded-3xl h-full border border-transparent hover:border-[#C5A47E]/30 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Hover Background */}
                <motion.div className="absolute inset-0 bg-linear-to-br from-[#2A554E] to-[#1e3d38] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
                    style={{ backgroundColor: `${treatment.color}20` }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <i
                      className={`fas ${treatment.icon} text-2xl transition-colors duration-500 group-hover:text-white`}
                      style={{ color: treatment.color }}
                    ></i>
                  </motion.div>

                  <h3 className="font-playfair text-xl font-bold text-[#2A554E] mb-3 group-hover:text-white transition-colors duration-500">
                    {treatment.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                    {treatment.desc}
                  </p>

                  <motion.div
                    className="mt-6 flex items-center gap-2 text-[#C5A47E] group-hover:text-[#C5A47E] font-semibold text-sm"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <i className="fas fa-arrow-right"></i>
                  </motion.div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C5A47E]/10 rounded-full group-hover:bg-white/10 transition-colors duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsList;
