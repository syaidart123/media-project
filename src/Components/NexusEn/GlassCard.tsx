import { motion } from "framer-motion";

export const GlassCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
    className={`backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/50 ${className}`}
    style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
  >
    {children}
  </motion.div>
);
