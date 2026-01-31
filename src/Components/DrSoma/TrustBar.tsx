import { motion } from "framer-motion";

const trustItems = [
  { icon: "fas fa-shield-alt", text: "MOH Regulated" },
  { icon: "fas fa-user-md", text: "Certified Surgeon" },
  { icon: "fas fa-hospital", text: "Licensed Facility" },
  { icon: "fas fa-award", text: "Safety First" },
];

const TrustBar = () => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-orange-brand/10 rounded-xl flex items-center justify-center">
                <i className={`${item.icon} text-orange-brand`}></i>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
