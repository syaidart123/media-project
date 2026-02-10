import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export const ServicesSection = (colors: any) => {
  const services = [
    {
      title: "Facial Rejuvenation",
      subtitle: "Anti-Aging & Contouring",
      description: "Botox, fillers, and advanced lifting treatments",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
      span: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Medical Weight Loss",
      subtitle: "Science-Based Programs",
      description: "Ozempic, Mounjaro & body contouring",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      span: "",
    },
    {
      title: "Skin Treatments",
      subtitle: "Acne & Pigmentation",
      description: "Laser therapy & chemical peels",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400",
      span: "",
    },
    {
      title: "Hair Restoration",
      subtitle: "PRP & Mesotherapy",
      description: "Advanced hair loss solutions",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
      span: "lg:col-span-2",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span
              className="text-sm tracking-widest uppercase mb-4 block"
              style={{ color: colors.wine }}
            >
              Our Expertise
            </span>
            <h2
              className="text-3xl lg:text-5xl"
              style={{ fontFamily: "Georgia, serif", color: colors.brown }}
            >
              Specialized <br className="hidden lg:block" />
              <span style={{ color: colors.wine }}>Treatments</span>
            </h2>
          </div>
          <p className="max-w-md mt-6 lg:mt-0" style={{ color: colors.taupe }}>
            Discover our comprehensive range of medical aesthetic services, each
            tailored to your unique needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${service.span}`}
              style={{
                minHeight: service.span.includes("row-span-2")
                  ? "500px"
                  : "250px",
              }}
            >
              {/* Background Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${colors.brown}CC 0%, ${colors.brown}40 50%, transparent 100%)`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <span className="text-xs tracking-widest text-white/70 mb-2">
                  {service.subtitle}
                </span>
                <h3
                  className="text-xl lg:text-2xl text-white mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 max-w-xs">
                  {service.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-white text-sm group-hover:gap-4 transition-all"
                >
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
