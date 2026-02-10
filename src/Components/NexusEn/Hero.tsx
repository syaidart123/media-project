import { motion } from "framer-motion";
import { ChevronRight, Play, Scan } from "lucide-react";
import { GlassCard } from "./GlassCard";

const colors = {
  cream: "#F3EFEE",
  wine: "#8C4F58",
  brown: "#4B3A33",
  taupe: "#AC9990",
  rose: "#AB8068",
  light: "#FAF8F7",
  glass: "rgba(255, 255, 255, 0.7)",
};

const CircularProgress = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  const circumference = 2 * Math.PI * 36;
  const progress = ((100 - value) / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke={colors.cream}
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            stroke={colors.wine}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
            }}
            animate={{ strokeDashoffset: progress }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-xl font-semibold"
            style={{ color: colors.brown }}
          >
            {value}
          </span>
        </div>
      </div>
      <span
        className="text-sm mt-2 font-medium"
        style={{ color: colors.taupe }}
      >
        {label}
      </span>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen pt-24 lg:pt-0 overflow-hidden"
      style={{ backgroundColor: colors.cream }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 right-0 w-200 h-200 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.rose}20 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-150 h-150 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.taupe}15 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Decorative Quote */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-6xl lg:text-8xl mb-4 opacity-20"
                style={{ fontFamily: "Georgia, serif", color: colors.wine }}
              >
                "
              </motion.span>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
                style={{ fontFamily: "Georgia, serif", color: colors.brown }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  Redefine Your
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="block"
                  style={{ color: colors.wine }}
                >
                  Natural Beauty
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base lg:text-lg mb-10 max-w-md mx-auto lg:mx-0"
                style={{ color: colors.taupe, lineHeight: 1.8 }}
              >
                We specialize in enhancing your natural beauty, creating
                timeless radiance with a harmony of science & artistry.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(140, 79, 88, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full text-white text-sm tracking-wider flex items-center gap-3"
                  style={{ backgroundColor: colors.brown }}
                >
                  Arrange Schedule
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 text-sm tracking-wider"
                  style={{ color: colors.brown }}
                >
                  <span
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: colors.brown }}
                  >
                    <Play size={16} fill={colors.brown} />
                  </span>
                  View Your Treatment
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-12 mt-16"
            >
              <div className="text-center lg:text-left">
                <span
                  className="text-5xl lg:text-6xl font-light"
                  style={{ fontFamily: "Georgia, serif", color: colors.brown }}
                >
                  35
                </span>
                <p className="text-sm mt-2" style={{ color: colors.taupe }}>
                  Traditional & Modern
                  <br />
                  Beauty Treatments
                </p>
              </div>
              <div
                className="w-px h-16"
                style={{ backgroundColor: colors.taupe + "30" }}
              />
              <div className="text-center lg:text-left">
                <span
                  className="text-5xl lg:text-6xl font-light"
                  style={{ fontFamily: "Georgia, serif", color: colors.brown }}
                >
                  50+
                </span>
                <p className="text-sm mt-2" style={{ color: colors.taupe }}>
                  Professional Expert
                  <br />
                  Beauticians
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Hero Image with Floating Elements */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              className="relative"
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-md lg:max-w-full"
              >
                <div className="relative rounded-[40px] lg:rounded-[60px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop"
                    alt="Beauty Treatment"
                    className="w-full aspect-3/4 object-cover"
                  />

                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${colors.cream}40 0%, transparent 50%)`,
                    }}
                  />

                  {/* Decorative dotted lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: 0.6 }}
                  >
                    <motion.path
                      d="M 200 150 Q 250 200 280 280"
                      stroke={colors.cream}
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.circle
                      cx="200"
                      cy="150"
                      r="6"
                      fill={colors.cream}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 }}
                    />
                    <motion.circle
                      cx="280"
                      cy="280"
                      r="6"
                      fill={colors.cream}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 }}
                    />
                  </svg>
                </div>

                {/* Floating Cards */}

                {/* Scan Face Card */}
                <GlassCard
                  className="absolute -top-4 lg:top-8 right-0 lg:-right-8 p-3 lg:p-4"
                  delay={1.2}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: colors.cream }}
                    >
                      <Scan size={20} style={{ color: colors.wine }} />
                    </div>
                    <span
                      className="text-sm font-medium pr-2"
                      style={{ color: colors.brown }}
                    >
                      Scan Your Face
                    </span>
                  </div>
                </GlassCard>

                {/* Moisture Card */}
                <GlassCard
                  className="absolute top-1/3 -left-4 lg:-left-16 p-4 lg:p-5"
                  delay={1.4}
                >
                  <CircularProgress value={75} label="Moisture" />
                </GlassCard>

                {/* Treatment Gallery Card */}
                <GlassCard
                  className="absolute -bottom-8 lg:bottom-8 -right-4 lg:-right-12 p-4 lg:p-5 max-w-70"
                  delay={1.6}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-semibold"
                      style={{ color: colors.brown }}
                    >
                      Natural Skin Treatment
                    </span>
                    <ChevronRight size={18} style={{ color: colors.taupe }} />
                  </div>
                  <div className="flex gap-2 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="w-12 h-12 rounded-xl overflow-hidden"
                      >
                        <img
                          src={`https://images.unsplash.com/photo-${
                            [
                              "1596755389378-c31d21fd1273",
                              "1515377905703-c4788e51af15",
                              "1570172619644-dfd03ed5d881",
                              "1552693673-1bf958298935",
                            ][i - 1]
                          }?w=100&auto=format&fit=crop`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-2 rounded-full text-sm border text-center"
                    style={{ borderColor: colors.taupe, color: colors.brown }}
                  >
                    View Recommendations
                  </motion.button>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest"
          style={{ color: colors.taupe }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: colors.taupe }}
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: colors.taupe }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
