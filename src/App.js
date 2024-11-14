import './App.css';
import MainLayout from './layouts/MainLayout';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home"
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
    <div>
      <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </MainLayout>
    </div>
    </Router>
  );
}

export default App;
