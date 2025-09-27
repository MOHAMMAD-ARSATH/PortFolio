import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home, { ScrollToSection, ScrollToTop } from "./pages/Home";
import Experiences from "./pages/Experiences";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import AllSkills from "./pages/AllSkills";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/allskills" element={<AllSkills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;