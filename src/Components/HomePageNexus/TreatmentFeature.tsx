import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../lib/animations";
import { CheckCircle, ChevronRight } from "lucide-react";

const TreatmentFeature = ({
  title,
  description,
  features,
  image,
  imagePosition = "right",
  bgColor = "white",
}: {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
}) => {
  return (
    <section
      className={`py-20 lg:py-32 ${bgColor === "cream" ? "bg-[#EFE9DB]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imagePosition === "left" ? fadeInRight : fadeInLeft}
            className={imagePosition === "left" ? "lg:order-2" : ""}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2A554E] mb-6">
              {title}
            </h2>
            <p className="text-[#4A4A4A] mb-8 text-lg leading-relaxed">
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-[#2A554E] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-[#4A4A4A]">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#2A554E] text-white px-8 py-4 rounded-full font-semibold mt-8 hover:bg-[#184341] transition-colors"
            >
              Check Suitability
              <ChevronRight size={18} />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imagePosition === "left" ? fadeInLeft : fadeInRight}
            className={imagePosition === "left" ? "lg:order-1" : ""}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={image} alt={title} className="w-full h-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentFeature;
