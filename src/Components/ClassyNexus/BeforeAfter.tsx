import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "../../lib/animations";

export const BeforeAfterCard = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderChange = (e: any) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-24 lg:py-32 bg-stone-50 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-stone-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-amber-200 mb-6"
            />
            <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-800">
              Real <span className="italic font-serif">Results</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Before & After Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex lg:flex-col gap-8 lg:gap-0"
          >
            <div className="flex-1">
              <h3 className="text-lg font-light text-stone-800 tracking-wide mb-2">
                Before & After
              </h3>
              <div className="w-12 h-px bg-stone-300 lg:my-8 hidden lg:block" />
            </div>
          </motion.div>

          {/* Center - Image Comparison */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="lg:col-span-6"
          >
            <div className="relative bg-white p-4 lg:p-6 shadow-xl rounded-sm">
              {/* Image Container */}
              <div className="relative h-125 overflow-hidden bg-stone-100 rounded-sm">
                {/* After Image (Background) */}
                <motion.img
                  src="/images/nexus/after-clinic.png"
                  alt="After treatment"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />

                {/* Before Image (Foreground with clip-path) */}
                <div
                  className="absolute inset-0 overflow-hidden transition-all duration-75"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src="/images/nexus/before-clinic.png"
                    alt="Before treatment"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Vertical Divider Line */}
                <motion.div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                  animate={{
                    opacity: isDragging ? 1 : 0.9,
                    boxShadow: isDragging
                      ? "0 0 20px rgba(255, 255, 255, 0.8)"
                      : "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {/* Slider Handle */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: isDragging ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex gap-2">
                      <motion.div
                        className="w-1 h-5 bg-stone-400 rounded-full"
                        animate={{ x: isDragging ? -1 : 0 }}
                      />
                      <motion.div
                        className="w-1 h-5 bg-stone-400 rounded-full"
                        animate={{ x: isDragging ? 1 : 0 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Invisible Range Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Before and after comparison slider"
                />

                {/* Before Label */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 left-6 px-5 py-2.5 bg-stone-900/80 backdrop-blur-sm text-white text-xs tracking-[0.2em] rounded-sm font-light"
                >
                  BEFORE
                </motion.div>

                {/* After Label */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-6 right-6 px-5 py-2.5 bg-amber-100/95 backdrop-blur-sm text-stone-800 text-xs tracking-[0.2em] rounded-sm font-light"
                >
                  AFTER
                </motion.div>

                {/* Drag Instruction */}
                <AnimatePresence>
                  {!isDragging && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 1 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/95 backdrop-blur-sm text-stone-600 text-xs tracking-wide rounded-full shadow-lg pointer-events-none"
                    >
                      <span className="flex items-center gap-2">
                        <span>←</span>
                        <span>Drag to compare</span>
                        <span>→</span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Result Info Below Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-6 pt-6 border-t border-stone-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-widest text-stone-400 uppercase mb-2">
                      Treatment Result
                    </p>
                    <p className="text-2xl font-light text-stone-800 mb-1">
                      Face treatment in 2 months
                    </p>
                    <p className="text-sm text-stone-500 font-light">
                      Medical Weight Science
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-stone-800 text-xl">↗</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Chat Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 shadow-lg rounded-sm">
              {/* Doctor Avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-stone-200 to-stone-300 flex items-center justify-center shrink-0 overflow-hidden">
                  {/* Placeholder for doctor image */}
                  <div className="w-12 h-12 rounded-full bg-stone-400/30" />
                </div>
                <div className="flex-1 pt-2">
                  <div className="inline-block">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="h-px bg-amber-200 mb-3"
                    />
                    <h3 className="text-lg font-light text-stone-800 mb-1">
                      Hello, I'm here to help
                    </h3>
                    <p className="text-stone-600 text-sm font-light">
                      What is your primary goal today?
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="space-y-3"
              >
                {[
                  "Regenerative Aesiheltics",
                  "Medical Weight Science",
                  "Skin Precision",
                ].map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 4, backgroundColor: "#fef3c7" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left px-5 py-3 border border-stone-200 rounded-sm text-sm text-stone-700 hover:border-amber-200 transition-all duration-300"
                  >
                    {option}
                  </motion.button>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-stone-800 hover:bg-stone-900 text-white py-4 text-sm tracking-widest transition-all duration-300 rounded-sm shadow-lg"
              >
                START CONSULTATION
              </motion.button>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="mt-6 bg-amber-50 border border-amber-100 p-6 rounded-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
                  <span className="text-amber-800 text-sm">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-800 mb-1">
                    Personalized Treatment
                  </h4>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    Each program is tailored to your unique needs and goals
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {[
            { number: "2,500+", label: "Success Stories" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                <h3 className="text-3xl lg:text-4xl font-light text-stone-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs tracking-widest text-stone-500 uppercase">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
