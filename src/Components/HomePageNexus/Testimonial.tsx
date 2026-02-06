import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../../lib/animations";
import { Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sean Ng",
      text: "Words cannot express how grateful I am to Nexus Clinic for the incredible transformation they helped me achieve. The staff's attention to detail and expertise in aesthetic treatments are unmatched.",
    },
    {
      name: "Jackie",
      text: "I've visited several aesthetic clinics in the past, but Nexus Clinic truly stands out. The state-of-the-art facility and modern equipment reflect their commitment to excellence.",
    },
    {
      name: "Emily Yan",
      text: "Choosing Nexus Clinic was one of the best decisions I've made for my skin. The knowledgeable staff guided me through the treatment options and created a customized plan.",
    },
    {
      name: "Michelle Kwan",
      text: "I can't say enough good things about Nexus Clinic. From the moment I walked in, I felt welcomed and at ease. The team of experts listened to my concerns.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2A554E] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-[#4A4A4A] text-lg">
            Real experiences from real patients
          </p>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="bg-[#2A554E] rounded-3xl p-8 lg:p-12 mb-16 text-center"
        >
          <p className="text-white/90 text-xl lg:text-2xl italic mb-6 max-w-3xl mx-auto">
            "Nexus Clinic didn't push treatments. They explained what I didn't
            need, which made me trust them even more."
          </p>
          <p className="text-[#EFE9DB] font-semibold">— Sean Ng</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#FAFAFA] rounded-2xl p-6 border border-[#EFE9DB]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#2A554E] fill-[#2A554E]"
                  />
                ))}
              </div>
              <p className="text-[#4A4A4A] text-sm mb-4 line-clamp-4">
                {testimonial.text}
              </p>
              <p className="text-[#2A554E] font-semibold text-sm">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
