import { motion } from "framer-motion";

const reasons = [
  "Skin fibers stretch beyond their elastic limit",
  "Rectus abdominal muscles separate along midline (diastasis recti)",
  "Skin often does not retract fully after pregnancy",
  "Fat distribution becomes uneven",
  "Core support weakens, affecting posture",
];

const WhyChanges = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                className="rounded-3xl w-full"
                alt="Medical"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-orange-brand text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">Exercise</div>
                  <div className="text-sm opacity-80">alone isn't enough</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-brand/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-orange-brand font-semibold mb-4">
              UNDERSTANDING THE CAUSE
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Your Abdomen Changes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              After pregnancy or significant weight loss, the body undergoes
              structural changes that cannot be reversed through diet and
              exercise alone.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-brand/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-brand transition-colors">
                    <i className="fas fa-chevron-right text-orange-brand text-xs group-hover:text-white transition-colors"></i>
                  </div>
                  <p className="text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChanges;
