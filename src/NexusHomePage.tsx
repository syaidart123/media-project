import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Navigation } from "./Components/NexusEn/Navigation";
import { HeroSection } from "./Components/NexusEn/Hero";
import { ServicesSection } from "./Components/NexusEn/Services";
import { ProductSection } from "./Components/NexusEn/Product";
import { TestimonialsSection } from "./Components/NexusEn/Testimonial";
import { ContactSection } from "./Components/NexusEn/Contact";
import { Footer } from "./Components/NexusEn/Footer";

const colors = {
  cream: "#F3EFEE",
  wine: "#8C4F58",
  brown: "#4B3A33",
  taupe: "#AC9990",
  rose: "#AB8068",
  light: "#FAF8F7",
  glass: "rgba(255, 255, 255, 0.7)",
};

export default function NexusClinicEn() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      <Navigation colors={colors} />
      <HeroSection />
      <ServicesSection colors={colors} />
      <ProductSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      <motion.a
        href="https://wa.me/60167025699"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="text-white" size={24} />
      </motion.a>
    </div>
  );
}
