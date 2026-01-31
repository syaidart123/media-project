import { motion } from "framer-motion";

const problems = [
  {
    number: "01",
    title: "Excess Skin",
    description:
      "Sagging abdominal skin that lacks elasticity and won't retract naturally.",
    icon: "fas fa-layer-group",
  },
  {
    number: "02",
    title: "Stubborn Fat",
    description:
      "Accumulated fat deposits resistant to diet and exercise efforts.",
    icon: "fas fa-circle",
  },
  {
    number: "03",
    title: "Muscle Separation",
    description: "Weakened or separated abdominal muscles (diastasis recti).",
    icon: "fas fa-expand-alt",
  },
];

const CoreProblems = () => {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-brand font-semibold mb-4"
          >
            THE CORE ISSUES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Three Problems We Address
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 hover:border-orange-brand/30 hover:shadow-xl hover:shadow-orange-brand/5 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 bg-orange-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-brand transition-colors duration-300"
                  >
                    <i
                      className={`${problem.icon} text-2xl text-orange-brand transition-colors`}
                    ></i>
                  </motion.div>
                  <span className="text-6xl font-bold text-gray-100 group-hover:text-orange-brand/20 transition-colors">
                    {problem.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProblems;
