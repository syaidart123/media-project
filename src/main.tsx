import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageNexus from "./PageNexus.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSoma from "./PageSoma.tsx";
import PageServiceWeightLoss from "./PageServiceWeightLoss.tsx";
import { ClassyNexus } from "./ClassyNexus.tsx";
import NexusClinicEn from "./NexusHomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSoma />} />
        <Route path="/nexus" element={<PageNexus />} />
        <Route path="/nexus/weight-loss" element={<PageServiceWeightLoss />} />
        <Route path="/nexus/face-treatments" element={<ClassyNexus />} />
        <Route path="/nexus/en" element={<NexusClinicEn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
