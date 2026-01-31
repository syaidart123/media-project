import About from "./Components/DrSoma/About";
import Benefits from "./Components/DrSoma/Benefeits";
import Comparison from "./Components/DrSoma/Comparison";
import CoreProblems from "./Components/DrSoma/CoreProblem";
import CTA from "./Components/DrSoma/CTA";
import FAQ from "./Components/DrSoma/FAQ";
import Footer from "./Components/DrSoma/Footer";
import Hero from "./Components/DrSoma/Hero";
import Navbar from "./Components/DrSoma/Navbar";
import ProcedureTypes from "./Components/DrSoma/ProcedureTypes";
import Process from "./Components/DrSoma/Process";
import Timeline from "./Components/DrSoma/Timeline";
import TrustBar from "./Components/DrSoma/TrustBar";
import WhyChanges from "./Components/DrSoma/WhyChanges";

const PageSoma = () => {
  return (
    <div className="bg-[#FAFAFA] text-gray-900 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <CoreProblems />
      <WhyChanges />
      <Process />
      <ProcedureTypes />
      <Comparison />
      <Timeline />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default PageSoma;
