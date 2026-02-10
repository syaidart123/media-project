import { motion } from "framer-motion";

const colors = {
  cream: "#F3EFEE",
  wine: "#8C4F58",
  brown: "#4B3A33",
  taupe: "#AC9990",
  rose: "#AB8068",
  light: "#FAF8F7",
  glass: "rgba(255, 255, 255, 0.7)",
};

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.light }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span
              className="text-2xl mb-6 block"
              style={{ fontFamily: "Georgia, serif", color: colors.brown }}
            >
              NEXUS<span style={{ color: colors.wine }}>CLINIC</span>
            </span>
            <p className="max-w-md mb-6" style={{ color: colors.taupe }}>
              Advanced aesthetic and medical weight loss clinic in Kuala Lumpur.
              Where science meets artistry for your natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: colors.brown }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Treatments", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="inline-block"
                      style={{ color: colors.taupe }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6" style={{ color: colors.brown }}>
              Contact
            </h4>
            <ul className="space-y-3" style={{ color: colors.taupe }}>
              <li>Wisma UOA II, KL</li>
              <li>016-702 5699</li>
              <li>info@nexusclinic.com</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: colors.taupe + "30" }}
        >
          <p className="text-sm" style={{ color: colors.taupe }}>
            © 2026 Nexus Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm"
                style={{ color: colors.taupe }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
