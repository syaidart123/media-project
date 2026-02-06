import About from "./Components/HomePageNexus/About";
import Contact from "./Components/HomePageNexus/Contact";
import FAQ from "./Components/HomePageNexus/FAQ";
import Hero from "./Components/HomePageNexus/Hero";
import Navbar from "./Components/HomePageNexus/Navbar";
import Services from "./Components/HomePageNexus/Service";
import Stats from "./Components/HomePageNexus/Stats";
import Testimonial from "./Components/HomePageNexus/Testimonial";
import TreatmentFeature from "./Components/HomePageNexus/TreatmentFeature";
import FloatingWhatsApp from "./Components/HomePageNexus/WA";
import Footer from "./Components/Nexus/Footer";

export default function HomePageNexus() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />

        <TreatmentFeature
          title="Regenerative Rejuvenation and Skin Repair"
          description="Natural rejuvenation focuses on repairing tissue quality, not just adding volume or freezing movement. At Nexus Clinic, our doctors offer regenerative treatments that activate the body's own repair mechanisms to support healthier skin, hair, and scalp over time."
          features={[
            "PRP skin rejuvenation using your own growth factors",
            "Doctor-assessed stem cell–based and cell-derived therapies",
            "PRP for hair loss and scalp health",
            "Medical-grade regenerative injectables where clinically HomePageNexusropriate",
          ]}
          image="https://www.nexus-clinic.com/wp-content/uploads/2025/10/skin-care-clinic-in-Malaysia.jpg"
          imagePosition="right"
          bgColor="white"
        />

        <TreatmentFeature
          title="Skin, Acne and Pigmentation"
          description="Asian skin needs precise device selection to reduce the risk of post-inflammatory hyperpigmentation (PIH). Our doctors recommend the safest option for your skin type and concern."
          features={[
            "Pico laser for pigmentation and texture",
            "Acne and acne scar treatments (resurfacing and repair)",
            "Melasma and uneven tone programmes",
            "Medical chemical peels and skin renewal plans",
          ]}
          image="https://www.nexus-clinic.com/wp-content/uploads/2025/10/Acne-skincare-routine.jpg"
          imagePosition="left"
          bgColor="cream"
        />

        <TreatmentFeature
          title="Hair Restoration and Scalp Health"
          description="Hair thinning is often progressive and medical, not just cosmetic. We evaluate hormonal, genetic, and scalp factors to guide treatment."
          features={[
            "PRP for hair loss",
            "Hair mesotherapy and scalp rejuvenation",
            "Medical guidance for ongoing hair maintenance",
          ]}
          image="https://www.nexus-clinic.com/wp-content/uploads/2023/09/Hair-keratin-treatments.jpg"
          imagePosition="right"
          bgColor="white"
        />

        <TreatmentFeature
          title="Doctor Supervised Weight Loss and Body Contouring"
          description="If diet and exercise have not worked, there may be underlying metabolic or hormonal factors. Our programmes are medically assessed, blood-test guided, and doctor monitored."
          features={[
            "Ozempic (Semaglutide) weight loss programme",
            "Mounjaro (Tirzepatide) weight loss programme",
            "HCG medical programmes (doctor assessment required)",
            "CoolSculpting fat reduction for targeted areas",
          ]}
          image="https://www.nexus-clinic.com/wp-content/uploads/2025/12/Popular-Weight-Treatments.jpg"
          imagePosition="left"
          bgColor="cream"
        />

        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
