import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInRight } from "../../lib/animations";

const problems = [
  {
    title: "Sedentary work patterns",
    desc: "Long office hours reduce movement and slow metabolism.",
    icon: "fa-laptop-house",
  },
  {
    title: "Sugary snacks and drinks",
    desc: "Hidden calories from sweet drinks add up throughout the day.",
    icon: "fa-cookie-bite",
  },
  {
    title: "Stress and poor sleep",
    desc: "Emotional stress triggers overeating and poor food choices.",
    icon: "fa-moon",
  },
  {
    title: "Post pregnancy changes",
    desc: "Hormonal shifts can make fat loss more challenging.",
    icon: "fa-baby",
  },
  {
    title: "Stubborn fat areas",
    desc: "Abdomen, arms, flanks resist diet and exercise.",
    icon: "fa-weight",
  },
];

const WeightProblems = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FDF8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-[#C5A47E] font-semibold mb-4 tracking-wider text-sm uppercase"
            >
              Understanding The Challenge
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-3xl lg:text-5xl font-bold text-[#2A554E] mb-6"
            >
              Weight Problems of{" "}
              <span className="text-[#C5A47E]">Malaysians</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm mb-8"
            >
              <p className="text-gray-600 leading-relaxed">
                Many people here carry silent weight on their shoulders and
                around their waist. Busy office hours, long commutes, sweet
                drinks, and late meals all add up.
                <span className="font-semibold text-[#2A554E]">
                  {" "}
                  You are not failing. You are human.
                </span>
                With thoughtful medical support, progress becomes calmer and
                more consistent.
              </p>
            </motion.div>

            <motion.a
              variants={fadeInUp}
              href="#"
              className="inline-flex items-center gap-3 bg-[#2A554E] text-white px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Assessment
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </motion.div>

          {/* Right - Problem Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                className="group flex items-start gap-5 bg-white p-5 rounded-2xl hover:shadow-lg transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 bg-[#2A554E]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#2A554E] transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                >
                  <i
                    className={`fas ${problem.icon} text-xl text-[#2A554E] group-hover:text-white transition-colors duration-300`}
                  ></i>
                </motion.div>
                <div>
                  <h4 className="font-semibold text-[#2A554E] mb-1">
                    {problem.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeightProblems;
