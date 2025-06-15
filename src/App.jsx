import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";  
import ParticlesBackground from "./components/ParticlesBackground";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WebFooter from "./components/WebFooter";

const App = () =>{
    return(
        <div className="relative min-h-screen overflow-hidden">
            <ParticlesBackground />
            <div className="relative z-10">    
                <Navbar />
                <Home />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
                <WebFooter />
            </div>
        </div>
    )
}

export default App