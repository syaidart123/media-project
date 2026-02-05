import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations";

const trustItems = [
  {
    icon: "fa-user-md",
    title: "Experienced Doctors",
    desc: "Led by skilled doctors with years of hands-on expertise.",
  },
  {
    icon: "fa-certificate",
    title: "FDA / CE Approved",
    desc: "We use only certified, medically approved devices.",
  },
  {
    icon: "fa-lock",
    title: "Private Rooms",
    desc: "Your comfort and privacy are our priority.",
  },
  {
    icon: "fa-spa",
    title: "Clean Environment",
    desc: "High hygiene standards and relaxing atmosphere.",
  },
  {
    icon: "fa-map-marker-alt",
    title: "Near KLCC",
    desc: "Conveniently located in the heart of the city.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-br from-[#2A554E] via-[#1e3d38] to-[#2A554E] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: 300 + i * 200,
              height: 300 + i * 200,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
            }}
          />
        ))}
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
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Trusted & What Makes Us{" "}
            <span className="text-[#C5A47E]">Better</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 h-full text-center hover:bg-white/20 transition-colors duration-300"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-20 h-20 bg-[#C5A47E] rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={`fas ${item.icon} text-3xl text-white`}></i>
                </motion.div>

                <h3 className="font-playfair text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
