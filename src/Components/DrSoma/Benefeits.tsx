import { motion } from "framer-motion";

const benefits = [
  {
    icon: "fas fa-cut",
    title: "Removes Loose Skin",
    desc: "Eliminates sagging abdominal skin",
  },
  {
    icon: "fas fa-dumbbell",
    title: "Tightens Muscles",
    desc: "Repairs weakened abdominal wall",
  },
  {
    icon: "fas fa-ruler-combined",
    title: "Improves Contour",
    desc: "Creates flatter, firmer profile",
  },
  {
    icon: "fas fa-walking",
    title: "Better Posture",
    desc: "Enhances core stability",
  },
  {
    icon: "fas fa-infinity",
    title: "Long-lasting",
    desc: "Results maintained with stable weight",
  },
  {
    icon: "fas fa-plus-circle",
    title: "Combinable",
    desc: "Can include liposuction",
  },
];

const aftercare = [
  "Compression garment for 6-8 weeks",
  "Pain relief medication",
  "Drain care instructions",
  "Wound care guidance",
  "Scheduled follow-up visits",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Benefits Grid */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-orange-brand font-semibold mb-4"
            >
              ADVANTAGES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-10"
            >
              Benefits of Tummy Tuck
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 hover:bg-gray-600 p-6 rounded-2xl flex items-start gap-4 group hover:bg-orange-brand transition-colors cursor-default"
                >
                  <div className="w-12 h-12 bg-orange-brand/10 group-hover:bg-orange-brand rounded-xl flex items-center justify-center shrink-0">
                    <i
                      className={`${benefit.icon} text-orange-brand group-hover:text-white`}
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-white/80">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Aftercare Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white h-full">
              <div className="w-14 h-14 bg-orange-brand rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-heartbeat text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Post-Operative Care</h3>
              <p className="text-white/60 mb-8">
                What you receive after surgery
              </p>

              <div className="space-y-4">
                {aftercare.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-orange-brand rounded-full"></div>
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/60 italic">
                  Early walking is encouraged. Discomfort is typically described
                  as tightness rather than sharp pain.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
