import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "../../lib/animations";

const stats = [
  {
    icon: "fa-map-marker-alt",
    title: "Treated Area",
    desc: "Stomach, thighs, or upper arms",
  },
  { icon: "fa-clock", title: "Duration", desc: "A few minutes" },
  { icon: "fa-calendar-alt", title: "Frequency", desc: "1 injection per day" },
  { icon: "fa-walking", title: "Downtime", desc: "Minimal / None" },
];

const Stats = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#2A554E] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl text-center text-white border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.i
                className={`fas ${stat.icon} text-3xl lg:text-4xl text-[#C5A47E] mb-4`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              <h4 className="font-semibold text-base lg:text-lg mb-2">
                {stat.title}
              </h4>
              <p className="text-white/80 text-xs lg:text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
