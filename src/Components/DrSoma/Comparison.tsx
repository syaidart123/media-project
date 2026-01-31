import { motion } from "framer-motion";

const comparisonData = [
  { feature: "Removes fat", tummy: true, lipo: true },
  { feature: "Removes loose skin", tummy: true, lipo: false },
  { feature: "Tightens muscles", tummy: true, lipo: false },
  { feature: "Scarring", tummy: "Longer but hidden", lipo: "Minimal" },
  { feature: "Downtime", tummy: "3-4 weeks", lipo: "1-2 weeks" },
  {
    feature: "Best for",
    tummy: "Loose skin & muscle muscles",
    lipo: "Fat pockets only",
  },
];

const candidates = {
  suitable: [
    "Excess abdominal skin",
    "Muscle separation after pregnancy",
    "Stable body weight",
    "Good general health",
    "Realistic expectations",
  ],
  notSuitable: [
    "Future pregnancy planned",
    "Uncontrolled medical conditions",
    "Unstable weight or severe obesity",
  ],
};

const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-brand font-semibold mb-4">COMPARISON</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Tummy Tuck vs Liposuction
            </h2>

            <div className="bg-gray-50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-900 text-white">
                <div className="p-5 font-semibold">Feature</div>
                <div className="p-5 font-semibold text-center text-orange-brand">
                  Tummy Tuck
                </div>
                <div className="p-5 font-semibold text-center">Liposuction</div>
              </div>

              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 border-b border-gray-200 last:border-none"
                >
                  <div className="p-5 font-medium">{row.feature}</div>
                  <div className="p-5 text-center">
                    {typeof row.tummy === "boolean" ? (
                      row.tummy ? (
                        <span className="w-6 h-6 bg-green-100 rounded-full inline-flex items-center justify-center">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </span>
                      ) : (
                        <span className="w-6 h-6 bg-red-100 rounded-full inline-flex items-center justify-center">
                          <i className="fas fa-times text-red-500 text-xs"></i>
                        </span>
                      )
                    ) : (
                      <span className="text-gray-700">{row.tummy}</span>
                    )}
                  </div>
                  <div className="p-5 text-center">
                    {typeof row.lipo === "boolean" ? (
                      row.lipo ? (
                        <span className="w-6 h-6 bg-green-100 rounded-full inline-flex items-center justify-center">
                          <i className="fas fa-check text-green-600 text-xs"></i>
                        </span>
                      ) : (
                        <span className="w-6 h-6 bg-red-100 rounded-full inline-flex items-center justify-center">
                          <i className="fas fa-times text-red-500 text-xs"></i>
                        </span>
                      )
                    ) : (
                      <span className="text-gray-700">{row.lipo}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Clinical overview source: Mayo Clinic – Tummy Tuck
              (Abdominoplasty)
            </p>
          </motion.div>

          {/* Right - Candidate Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-orange-brand font-semibold mb-4">CANDIDACY</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Who Is a Good Candidate?
            </h2>

            <div className="space-y-6">
              {/* Suitable */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  Suitable Candidates Usually Have:
                </h4>
                <div className="space-y-3">
                  {candidates.suitable.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Suitable */}
              <div className="bg-red-50 rounded-2xl p-6">
                <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-exclamation-circle"></i>A Tummy Tuck May
                  Not Be Recommended If:
                </h4>
                <div className="space-y-3">
                  {candidates.notSuitable.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
