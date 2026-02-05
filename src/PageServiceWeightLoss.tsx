import WhoWeHelp from "./Components/services/WhoWeHelp";
import BeforeAfterGallery from "./Components/services/BeforeAfterGallery";
import WeightProblems from "./Components/services/WeightProblems";
import Programs from "./Components/services/Programs";
import TrustSection from "./Components/services/TrustSection";
import ServicesFAQ from "./Components/services/ServicesFAQ";
import Reviews from "./Components/services/Reviews";
import Footer from "./Components/Nexus/Footer";
import TreatmentsList from "./Components/services/TretmentsList";
import ServicesHero from "./Components/services/ServiceHero";
import ServicesNavbar from "./Components/services/ServiceNavbar";

const PageServiceWeightLoss = () => {
  return (
    <div className="font-inter">
      <ServicesNavbar />
      <ServicesHero />
      <WhoWeHelp />
      <TreatmentsList />
      <BeforeAfterGallery />
      <WeightProblems />
      <Programs />
      <TrustSection />
      <ServicesFAQ />
      <Reviews />
      <Footer />
    </div>
  );
};

export default PageServiceWeightLoss;
