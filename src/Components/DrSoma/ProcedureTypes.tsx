import { motion } from "framer-motion";
import { useState } from "react";

const procedures = [
  {
    id: "full",
    title: "Full Tummy Tuck",
    subtitle: "Most Comprehensive",
    features: [
      "Removes excess skin above and below navel",
      "Repairs muscle separation",
      "Repositions the belly button",
      "Most comprehensive correction available",
    ],
    recommended: "After pregnancy or major weight loss",
  },
  {
    id: "mini",
    title: "Mini Tummy Tuck",
    subtitle: "Targeted Approach",
    features: [
      "Targets mild lower-abdominal skin laxity",
      "Smaller incision required",
      "Limited or no muscle repair needed",
      "Shorter recovery period",
    ],
    recommended: "For mild skin excess below navel",
  },
  {
    id: "extended",
    title: "Extended Tummy Tuck",
    subtitle: "Full Transformation",
    features: [
      "Addresses skin extending to the flanks",
      "Often chosen after massive weight loss",
      "Improves overall waistline contour",
      "Comprehensive body contouring",
    ],
    recommended: "After bariatric surgery or 50+ lb loss",
  },
];

const ProcedureTypes = () => {
  const [active, setActive] = useState("full");

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
            PROCEDURE OPTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Types of Tummy Tuck
          </motion.h2>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {procedures.map((proc) => (
            <button
              key={proc.id}
              onClick={() => setActive(proc.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                active === proc.id
                  ? "bg-orange-brand text-white shadow-lg shadow-orange-brand/30"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {proc.title}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        {procedures.map((proc) => (
          <motion.div
            key={proc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: active === proc.id ? 1 : 0,
              y: active === proc.id ? 0 : 20,
              display: active === proc.id ? "grid" : "none",
            }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-center hover:cursor-pointer"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100">
              <div className="inline-block bg-orange-brand/10 text-orange-brand px-4 py-1 rounded-full text-sm font-medium mb-4">
                {proc.subtitle}
              </div>
              <h3 className="text-3xl font-bold mb-6">{proc.title}</h3>

              <div className="space-y-4 mb-8">
                {proc.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fas fa-check text-green-600 text-xs"></i>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-brand/5 rounded-2xl p-4">
                <p className="text-sm">
                  <span className="font-semibold text-orange-brand">
                    Recommended:
                  </span>{" "}
                  <span className="text-gray-600">{proc.recommended}</span>
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
              <h4 className="text-xl font-semibold mb-4">
                Clinical Assessment Required
              </h4>
              <p className="text-white/70 mb-6">
                The appropriate type of tummy tuck depends on your individual
                anatomy, skin quality, and cosmetic goals. During consultation,
                Dr. Soma will evaluate and recommend the best approach for your
                situation.
              </p>
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-orange-brand font-semibold hover:gap-4 transition-all"
              >
                Schedule Assessment <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcedureTypes;
