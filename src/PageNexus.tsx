import BeforeAfter from "./Components/Nexus/BeforeAfter";
import Doctors from "./Components/Nexus/Doctors";
import FAQ from "./Components/Nexus/FAQ";
import Footer from "./Components/Nexus/Footer";
import GLP from "./Components/Nexus/Glp";
import Header from "./Components/Nexus/Header";
import Hero from "./Components/Nexus/Hero";
import Journey from "./Components/Nexus/Journey";
import Stats from "./Components/Nexus/Stats";

const PageNexus = () => {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <Stats />
      <GLP />
      <Journey />
      <Doctors />
      <BeforeAfter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PageNexus;
