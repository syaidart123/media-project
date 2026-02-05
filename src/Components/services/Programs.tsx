import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const programs = [
  {
    title: "Personalised Pathway",
    desc: "After a friendly consultation, receive a tailored plan with clear guidance and practical aftercare.",
    icon: "fa-route",
    number: "01",
  },
  {
    title: "Clear Guidance",
    desc: "Get expert advice without pressure or judgement — every step is focused on your comfort and results.",
    icon: "fa-compass",
    number: "02",
  },
  {
    title: "Non-surgical & Minimal Disruption",
    desc: "Doctor supervised programs designed for your pace, supporting appetite control and healthy habits.",
    icon: "fa-hand-holding-medical",
    number: "03",
  },
  {
    title: "Practical Aftercare",
    desc: "Simple, realistic aftercare plans that fit easily into your lifestyle and daily routine.",
    icon: "fa-heart",
    number: "04",
  },
];

const Programs = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-[#FDF8F2] to-transparent" />

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
            Our Approach
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-[#2A554E] mb-6"
          >
            Weight Loss Programs at{" "}
            <span className="text-[#C5A47E]">Nexus Clinic</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Our clinic offers doctor supervised programs that respect your pace.
            Sessions are calm, private, and designed to fit a busy schedule in
            the city.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <motion.div
                className="relative bg-[#FDF8F2] p-8 lg:p-10 rounded-3xl h-full overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Large Number Background */}
                <span className="absolute -right-4 -top-4 text-[120px] font-bold text-[#2A554E]/5 font-playfair leading-none select-none">
                  {program.number}
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 bg-[#2A554E] rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i
                        className={`fas ${program.icon} text-2xl text-white`}
                      ></i>
                    </motion.div>
                    <span className="text-[#C5A47E] font-bold text-lg">
                      {program.number}
                    </span>
                  </div>

                  <h3 className="font-playfair text-2xl font-bold text-[#2A554E] mb-4">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {program.desc}
                  </p>
                </div>

                {/* Hover Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#C5A47E]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
