import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageNexus from "./PageNexus.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSoma from "./PageSoma.tsx";
import PageServiceWeightLoss from "./PageServiceWeightLoss.tsx";
import HomePageNexus from "./HomePageNexus.tsx";
import { ClassyNexus } from "./ClassyNexus.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSoma />} />
        <Route path="/nexus" element={<PageNexus />} />
        <Route path="/nexus/weight-loss" element={<PageServiceWeightLoss />} />
        <Route path="/nexus/en" element={<HomePageNexus />} />
        <Route path="/nexus/face-treatments" element={<ClassyNexus />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
