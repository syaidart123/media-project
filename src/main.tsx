import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageNexus from "./PageNexus.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageSoma from "./PageSoma.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSoma />} />
        <Route path="/nexus" element={<PageNexus />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
