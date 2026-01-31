import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Pre-operative Markings",
    desc: "Guide incision placement and symmetry",
  },
  {
    step: "02",
    title: "Excess Removal",
    desc: "Remove abdominal skin and fat",
  },
  {
    step: "03",
    title: "Muscle Repair",
    desc: "Tighten stretched abdominal muscles",
  },
  {
    step: "04",
    title: "Navel Repositioning",
    desc: "When required for natural look",
  },
  { step: "05", title: "Layered Closure", desc: "Support optimal healing" },
  { step: "06", title: "Drain Placement", desc: "When clinically indicated" },
  { step: "07", title: "Compression", desc: "Application of garments" },
];

const Process = () => {
  return (
    <section id="procedure" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-orange-brand font-semibold mb-4">
                THE PROCESS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                How a Tummy Tuck Works
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                By addressing both skin laxity and muscle separation,
                abdominoplasty achieves results that liposuction alone cannot
                provide.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-brand rounded-xl flex items-center justify-center">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Surgery Duration</p>
                    <p className="text-white/60 text-sm">
                      2-4 hours depending on extent
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-brand rounded-xl flex items-center justify-center">
                    <i className="fas fa-hospital text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Performed In</p>
                    <p className="text-white/60 text-sm">
                      Licensed Malaysian facilities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Steps */}
          <div className="space-y-4">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="flex items-center gap-6 p-5 rounded-2xl transition-all cursor-default group"
              >
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-brand group-hover:border-orange-brand transition-colors">
                  <span className="text-xl font-bold text-orange-brand group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
