import React from "react";
import RepoStats from "./components/RepoStats";
import Navbar from "./components/Navbar";
import Linkbar from "./components/Linkbar";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import SideProjects from "./components/SideProjects";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/style.css";
import content from "./content.json";

function App() {
  const { about_me, academics, experience, projects } = content;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <RepoStats />
              <Linkbar />
              {about_me.section.enable_section && <About />}
              {experience.section.enable_section && <WorkExperience />}
              {projects.section.enable_section && <SideProjects />}
              {academics.section.enable_section && <Education />}
              <Footer />
            </div>
          }
        ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
