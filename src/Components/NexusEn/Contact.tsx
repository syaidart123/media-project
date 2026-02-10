import { motion } from "framer-motion";
import { fadeInRight, fadeInUp, staggerContainer } from "../../lib/animations";
import { Clock, MapPin, Phone } from "lucide-react";
const colors = {
  cream: "#F3EFEE",
  wine: "#8C4F58",
  brown: "#4B3A33",
  taupe: "#AC9990",
  rose: "#AB8068",
};
export const ContactSection = () => {
  return (
    <section
      className="py-20 lg:py-32"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: `${colors.wine}15`,
                color: colors.wine,
              }}
            >
              Contact Us
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ color: colors.brown }}
            >
              Visit <span style={{ color: colors.wine }}>Nexus Clinic</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-10"
              style={{ color: colors.taupe }}
            >
              Located in the heart of Kuala Lumpur, our clinic is easily
              accessible with parking available nearby.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content:
                    "LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "016-702 5699 / 03-2163 5699",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: "Mon - Sat: 9:00 AM - 6:00 PM",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${colors.wine}15` }}
                  >
                    <item.icon
                      className="w-6 h-6"
                      style={{ color: colors.wine }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold mb-1"
                      style={{ color: colors.brown }}
                    >
                      {item.title}
                    </p>
                    <p style={{ color: colors.taupe }}>{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex space-x-4 mt-10">
              {["Facebook", "Instagram", "TikTok"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: colors.wine,
                    color: "white",
                  }}
                  className="px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{ backgroundColor: "white", color: colors.brown }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="bg-white rounded-3xl p-8 shadow-xl">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: colors.brown }}
              >
                Book Your Consultation
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.brown }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                    style={{ borderColor: colors.cream }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.brown }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                    style={{ borderColor: colors.cream }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.brown }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                    style={{ borderColor: colors.cream }}
                    placeholder="+60 12 345 6789"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.brown }}
                  >
                    Treatment Interest
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                    style={{ borderColor: colors.cream, color: colors.taupe }}
                  >
                    <option>Select a treatment</option>
                    <option>Facial & Anti-Aging</option>
                    <option>Weight Loss</option>
                    <option>Hair Restoration</option>
                    <option>Skin Care</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: colors.brown }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none"
                    style={{ borderColor: colors.cream }}
                    placeholder="Tell us about your concerns..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-white font-medium"
                  style={{ backgroundColor: colors.wine }}
                >
                  Submit Enquiry
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
