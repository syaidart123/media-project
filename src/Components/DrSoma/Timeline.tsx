import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "Week 1-2",
    title: "Initial Recovery",
    desc: "Swelling, tightness, limited mobility. Rest is essential.",
    color: "bg-red-500",
  },
  {
    period: "Week 3-4",
    title: "Gradual Improvement",
    desc: "Improved comfort and posture. Light activities resume.",
    color: "bg-orange-500",
  },
  {
    period: "Week 6-8",
    title: "Visible Progress",
    desc: "Visible abdominal flattening. Return to most activities.",
    color: "bg-yellow-500",
  },
  {
    period: "Month 3-6",
    title: "Final Results",
    desc: "Final contour emerges. Full activity resumes.",
    color: "bg-green-500",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section id="recovery" ref={containerRef} className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-brand font-semibold mb-4"
          >
            RECOVERY JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Results & Recovery Timeline
          </motion.h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-orange-brand origin-top"
            />
          </div>

          <div className="space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
              >
                <div
                  className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 inline-block max-w-md ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${item.color}`}
                    >
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 rounded-full ${item.color} border-4 border-white shadow-lg`}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${item.color}`}
              >
                {item.period}
              </span>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 text-white rounded-3xl p-8 text-center"
        >
          <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
            Postoperative recovery protocols align with internationally
            recognized surgical safety standards. In Malaysia, tummy tuck
            surgery is a regulated medical procedure performed in licensed
            healthcare facilities under Ministry of Health Malaysia standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
