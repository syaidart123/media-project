import { ChevronRight, Scale, Scissors, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

const Services = () => {
  const services = [
    {
      title: "Facial & Anti-Aging",
      description:
        "Restore balance, not freeze expressions. We specialize in Botox, Fillers, Sculptra, and HIFU.",
      image:
        "https://nexus-clinic.com/wp-content/uploads/2025/07/Facial-Treatment-Malaysia.jpg",
      link: "/botox-malaysia/",
      icon: Sparkles,
      href: "#",
    },
    {
      title: "Medical Weight Loss",
      description:
        "Science-backed programs including Ozempic, Mounjaro, and CoolSculpting fat reduction.",
      image:
        "https://nexus-clinic.com/wp-content/uploads/2025/12/Popular-Weight-Treatments.jpg",
      link: "/weight-loss-treatments-kl/",
      icon: Scale,
      href: "weight-loss",
    },
    {
      title: "Hair Restoration",
      description:
        "Medical-grade PRP and mesotherapy for thinning hair and scalp rejuvenation.",
      image:
        "https://nexus-clinic.com/wp-content/uploads/2023/09/Hair-keratin-benefits.jpg",
      link: "/hair-transplant-malaysia/",
      icon: Scissors,
      href: "#",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-[#2A554E] font-semibold text-sm tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2A554E] mb-4">
            Our Specialized Treatments
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
            Medically guided solutions for Face, Body, and Hair.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <a href={service.href}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2A554E]/60 to-transparent" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 right-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <service.icon className="text-[#2A554E]" size={24} />
                  </motion.div>
                </a>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#2A554E] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#4A4A4A] mb-6">{service.description}</p>
                <motion.a
                  href={service.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[#2A554E] font-semibold group-hover:text-[#184341]"
                >
                  Learn More
                  <ChevronRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
