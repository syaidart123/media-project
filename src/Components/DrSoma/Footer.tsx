const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/dr_soma_logo.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-lg">Dr. Soma Plastic Surgery</p>
                <p className="text-white/60 text-sm">Expert Body Contouring</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Tummy tuck procedures performed with a focus on patient safety,
              anatomical precision, and natural outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Procedure", "Recovery", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-orange-brand transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/yourlink"
                className="flex items-center gap-3 text-white/60 hover:text-green-500 transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-white/60 hover:text-orange-brand transition-colors"
              >
                <i className="fas fa-envelope"></i>
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Dr. Soma Plastic Surgery. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm">MOH Regulated</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="text-white/40 text-sm">Licensed Facilities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
