import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BG from "./components/BG";
import FloatingCubes from "./components/FloatingCubes";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactFooter from "./components/ContactFooter";
import ProjectPage from "./pages/ProjectPage"; // the new template page

export default function App() {
  return (
    <Router>
      <div id="cube-root">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <BG />
        <FloatingCubes />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel featuredIds={['fight-on-hight','hight-praeteritum','portfolio-website']} />
                <About />
                <Projects />
              </>
            }
          />

          {/* dynamic project pages */}
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <ContactFooter />
      </div>
    </Router>
  );
}
