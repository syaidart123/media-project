import { Award, Heart, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "../../lib/animations";

const Stats = () => {
  const stats = [
    { value: "5,000+", label: "Patients Treated", icon: Users },
    { value: "15+ Yrs", label: "Clinical Excellence", icon: Award },
    { value: "FDA", label: "Approved Collagen", icon: Shield },
    { value: "98%", label: "Natural Satisfaction", icon: Heart },
  ];

  return (
    <section className="py-16 md:py-6 bg-[#EFE9DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-[#2A554E] rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="text-[#EFE9DB]" size={28} />
              </motion.div>
              <p className="text-3xl lg:text-4xl font-bold text-[#2A554E] mb-1">
                {stat.value}
              </p>
              <p className="text-[#4A4A4A] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
