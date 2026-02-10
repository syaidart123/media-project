import { Award, Heart, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
export const ProductSection = () => {
  const features = [
    {
      icon: Shield,
      title: "MOH Registered",
      desc: "Fully compliant with medical standards",
    },
    {
      icon: Award,
      title: "Doctor-Led Care",
      desc: "Licensed medical professionals",
    },
    {
      icon: Heart,
      title: "Personalized Plans",
      desc: "Tailored to your unique needs",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      desc: "FDA approved treatments",
    },
  ];

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl lg:rounded-[40px] overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&auto=format&fit=crop"
                  alt="Clinic Interior"
                  className="w-full aspect-4/5 object-cover"
                />
              </motion.div>

              {/* Floating Experience Card */}
              <GlassCard
                colors={colors}
                className="absolute -bottom-8 -right-8 lg:-right-12 p-6"
                delay={0.3}
              >
                <div className="text-center">
                  <span
                    className="text-5xl font-light"
                    style={{ fontFamily: "Georgia, serif", color: colors.wine }}
                  >
                    15+
                  </span>
                  <p className="text-sm mt-2" style={{ color: colors.taupe }}>
                    Years of
                    <br />
                    Excellence
                  </p>
                </div>
              </GlassCard>

              {/* Decorative */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border opacity-30"
                style={{ borderColor: colors.wine }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-sm tracking-widest uppercase mb-4 block"
              style={{ color: colors.wine }}
            >
              Why Nexus Clinic
            </span>
            <h2
              className="text-3xl lg:text-5xl mb-6"
              style={{ fontFamily: "Georgia, serif", color: colors.brown }}
            >
              Where Science Meets{" "}
              <span style={{ color: colors.wine }}>Artistry</span>
            </h2>
            <p
              className="text-lg mb-12"
              style={{ color: colors.taupe, lineHeight: 1.8 }}
            >
              At Nexus Clinic, we believe in enhancing your natural beauty
              through evidence-based treatments. Our doctor-led approach ensures
              safety, efficacy, and results you'll love.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white"
                >
                  <feature.icon
                    size={28}
                    style={{ color: colors.wine }}
                    className="mb-4"
                  />
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: colors.brown }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.taupe }}>
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
