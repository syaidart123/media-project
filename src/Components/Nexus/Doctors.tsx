import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "../../lib/animations";

const doctors = [
  {
    name: "Dr. Aris",
    specialty: "Expert in metabolic health and weight management.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dr. Preetha",
    specialty: "Focused on holistic health and long-term wellness.",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dr. Ashvinia",
    specialty: "Passionate about evidence-based weight solutions.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Dr. Charmaine",
    specialty: "Combines aesthetic expertise with medical weight loss.",
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=200&q=80",
  },
];

const Doctors = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#2A554E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-[#C5A47E] font-semibold mb-4 tracking-wider text-sm"
          >
            OUR TEAM
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6"
          >
            Meet Our Expert Doctors
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/80 max-w-2xl mx-auto text-base lg:text-lg"
          >
            Our experienced medical aesthetic doctors will guide you through
            your weight loss journey with personalized care.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 text-center border border-white/20 hover:bg-white/20 transition-all h-full">
                <motion.div
                  className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-full h-full rounded-full object-cover border-4 border-[#C5A47E]"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-white/50"
                    animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
                <h4 className="font-playfair text-xl lg:text-2xl font-bold text-white mb-2">
                  {doctor.name}
                </h4>
                <p className="text-white/70 text-sm lg:text-base">
                  {doctor.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
