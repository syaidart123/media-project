import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "../../lib/animations";

const benefits = [
  {
    title: "Reduces Hunger",
    desc: "It helps suppress your appetite, making it easier to resist cravings.",
  },
  {
    title: "Increases Fullness",
    desc: "By helping you feel fuller for longer, sticking to a healthy diet becomes much more manageable.",
  },
  {
    title: "Sustainable Results",
    desc: "Unlike quick-fix diets, it promotes steady, healthy progress you can maintain.",
  },
];

const GLP = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FDF8F2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - Benefits Cards */}
          <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                  whileHover={{ x: 10 }}
                >
                  <motion.div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A47E] group-hover:w-2 transition-all" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2A554E]/10 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#2A554E] font-bold text-sm lg:text-base">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-playfair text-lg lg:text-xl font-bold text-[#2A554E] mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm lg:text-base">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInRight} className="order-1 lg:order-2">
            <motion.span
              className="inline-block text-[#C5A47E] font-semibold mb-4 tracking-wider text-sm"
              variants={fadeInUp}
            >
              ABOUT THE TREATMENT
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A554E] mb-6"
            >
              What is GLP-1 Liraglutide?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
            >
              GLP-1 Liraglutide was originally developed to manage diabetes but
              has since been proven highly effective for weight management. It
              mimics a hormone that helps regulate appetite and satiety, making
              it easier to lose weight without feeling deprived or constantly
              hungry.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base lg:text-lg leading-relaxed"
            >
              At Nexus Clinic, we harness this power to help you reach your
              weight loss goals, giving you a sense of control and determination
              like never before.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white bg-linear-to-br from-[#2A554E] to-[#C5A47E]"
                  />
                ))}
              </div>
              <div>
                <p className="text-xl lg:text-2xl font-bold text-[#2A554E]">
                  5,000+
                </p>
                <p className="text-xs lg:text-sm text-gray-500">
                  Happy Patients
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GLP;
