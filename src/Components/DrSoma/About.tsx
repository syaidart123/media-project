import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-brand font-semibold mb-4"
          >
            ABOUT THE PROCEDURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            What is a Tummy Tuck?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            A tummy tuck (abdominoplasty) is a surgical procedure that restores
            a flatter, firmer abdominal profile by removing excess skin and fat
            while tightening weakened muscles.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-3xl max-h-112.5"
          >
            <img
              src="https://drsomaplasticsurgery.com/images/dr_soma_pic.png"
              className="w-full h-full object-cover min-h-100 group-hover:scale-105 transition-transform duration-700"
              alt="Surgery"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Performed by Dr. Soma
              </h3>
              <p className="text-white/80 leading-relaxed">
                A certified plastic surgeon with experience in body contouring
                surgery. The approach focuses on safety, anatomical precision,
                and natural-looking results.
              </p>
            </div>
          </motion.div>

          {/* Small Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-3xl p-8 flex flex-col justify-between min-h-50"
          >
            <div className="w-14 h-14 bg-orange-brand rounded-2xl flex items-center justify-center">
              <i className="fas fa-cut text-white text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Not Weight Loss Surgery
              </h4>
              <p className="text-white/60 text-sm">
                It's a contour-restoring procedure for those already near stable
                weight.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-orange-brand rounded-3xl p-8 flex flex-col justify-between min-h-50"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <i className="fas fa-check-double text-white text-xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Long-Lasting Results
              </h4>
              <p className="text-white/80 text-sm">
                Results are maintained with stable weight and healthy lifestyle.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
