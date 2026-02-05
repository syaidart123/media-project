import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";

const BeforeAfterGallery = () => {
  const [sliderPositions, setSliderPositions] = useState([50, 50, 50]);

  const handleSliderChange = (index: number, value: number) => {
    const newPositions = [...sliderPositions];
    newPositions[index] = value;
    setSliderPositions(newPositions);
  };

  const cases = [
    {
      before:
        "https://www.nexus-clinic.com/wp-content/uploads/2025/11/waight-loss.jpg",
      after:
        "https://www.nexus-clinic.com/wp-content/uploads/2025/11/waight-loss2.jpg",
      result: "-15kg in 3 months",
    },
    {
      before:
        "https://www.nexus-clinic.com/wp-content/uploads/2025/11/waight-loss.jpg",
      after:
        "https://www.nexus-clinic.com/wp-content/uploads/2025/11/waight-loss2.jpg",
      result: "-12kg in 2 months",
    },
    {
      before:
        "https://www.nexus-clinic.com/wp-content/uploads/2025/11/waight-loss.jpg",
      after:
        "https://www.nexus-clinic.com/wp-content/uploads/2025/11/waight-loss2.jpg",
      result: "-18kg in 4 months",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#2A554E] relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#C5A47E]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
            Real Results
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Before & After Gallery
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/70 max-w-2xl mx-auto"
          >
            See the transformations our patients have achieved with our
            treatments.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20">
                {/* Image Comparison Container */}
                <div className="relative h-80 overflow-hidden">
                  {/* After Image (Background) */}
                  <img
                    src={item.after}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Before Image (Foreground with clip) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                    }}
                  >
                    <img
                      src={item.before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Slider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                    style={{ left: `${sliderPositions[index]}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <i className="fas fa-arrows-alt-h text-[#2A554E]"></i>
                    </div>
                  </div>

                  {/* Slider Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPositions[index]}
                    onChange={(e) =>
                      handleSliderChange(index, Number(e.target.value))
                    }
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-[#C5A47E] text-white text-xs px-3 py-1 rounded-full">
                    After
                  </div>
                </div>

                {/* Result Info */}
                <div className="p-6 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-sm">Result</p>
                      <p className="text-white font-bold text-lg">
                        {item.result}
                      </p>
                    </div>
                    <motion.div
                      className="w-12 h-12 bg-[#C5A47E] rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                    >
                      <i className="fas fa-arrow-right text-white"></i>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
