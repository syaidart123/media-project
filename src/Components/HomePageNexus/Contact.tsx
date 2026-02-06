import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../lib/animations";
import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <span className="text-[#2A554E] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#2A554E] mb-6">
              Visit Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-[#4A4A4A] text-lg mb-8">
              Ready to start your transformation journey? Book a consultation
              with our experienced doctors today.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#EFE9DB] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-[#2A554E]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#2A554E] mb-1">Address</p>
                  <p className="text-[#4A4A4A]">
                    LG 10, Lower Ground Floor, Wisma UOA II,
                    <br />
                    Jalan Pinang, 50450 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#EFE9DB] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-[#2A554E]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#2A554E] mb-1">Phone</p>
                  <p className="text-[#4A4A4A]">
                    016-702 5699 / 03-2163 5699
                    <br />
                    Main Line: +016-921 5699
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#EFE9DB] rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-[#2A554E]" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[#2A554E] mb-1">Hours</p>
                  <p className="text-[#4A4A4A]">
                    Monday – Saturday: 9:00am to 6:00pm
                    <br />
                    Sundays & Public Holidays: Closed
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://www.facebook.com/NexusClinic/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-[#2A554E] rounded-xl flex items-center justify-center text-white hover:bg-[#184341] transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nexusclinic/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-[#2A554E] rounded-xl flex items-center justify-center text-white hover:bg-[#184341] transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://wa.link/q64h1l"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-[#2A554E] rounded-xl flex items-center justify-center text-white hover:bg-[#184341] transition-colors"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Map / CTA Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="bg-[#2A554E] rounded-3xl p-8 lg:p-12 h-full flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Transform?
              </h3>
              <p className="text-white/80 mb-8">
                Book your consultation today and take the first step towards
                your aesthetic goals. Our team is here to guide you every step
                of the way.
              </p>

              <motion.a
                href="https://nexus-clinic.com/contact-us/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2A554E] px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Book Your Assessment
                <ChevronRight size={18} />
              </motion.a>

              <motion.a
                href="https://wa.link/q64h1l"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-4 hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
