import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
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

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote:
        "Nexus Clinic transformed not just my appearance, but my confidence. The doctors truly listen and create personalized solutions.",
      author: "Sarah Chen",
      role: "Business Executive",
    },
    {
      quote:
        "I was impressed by their transparent approach. They never push unnecessary treatments. A clinic you can truly trust.",
      author: "Michael Tan",
      role: "Entrepreneur",
    },
    {
      quote:
        "The weight loss program changed my life. With proper medical guidance, I achieved my goals safely and sustainably.",
      author: "Emily Wong",
      role: "Creative Director",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span
              className="text-sm tracking-widest uppercase mb-4 block"
              style={{ color: colors.wine }}
            >
              Testimonials
            </span>
            <h2
              className="text-3xl lg:text-5xl mb-12"
              style={{ fontFamily: "Georgia, serif", color: colors.brown }}
            >
              What Our <span style={{ color: colors.wine }}>Patients</span> Say
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Quote
                  size={48}
                  style={{ color: colors.wine }}
                  className="mb-6 opacity-30"
                />
                <p
                  className="text-xl lg:text-2xl mb-8 leading-relaxed"
                  style={{ fontFamily: "Georgia, serif", color: colors.brown }}
                >
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <p className="font-semibold" style={{ color: colors.brown }}>
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm" style={{ color: colors.taupe }}>
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-3 mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="w-12 h-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      current === index ? colors.wine : colors.taupe + "40",
                  }}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl lg:rounded-[40px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&auto=format&fit=crop"
                alt="Happy Patient"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Rating Card */}
            <GlassCard
              color={colors}
              className="absolute -bottom-6 left-6 lg:left-12 p-5"
              delay={0.5}
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={colors.wine}
                      style={{ color: colors.wine }}
                    />
                  ))}
                </div>
                <span className="font-semibold" style={{ color: colors.brown }}>
                  5.0
                </span>
                <span className="text-sm" style={{ color: colors.taupe }}>
                  (500+ Reviews)
                </span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
