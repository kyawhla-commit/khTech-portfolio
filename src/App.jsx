import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Project } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Certificate } from "./components/sections/Certificate";
import { Testimonials } from "./components/sections/Testimonials";
import { Footer } from "./components/sections/footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {""}
      <div
        className={`min-h-screen transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`}
      >
        
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Experience/>
        <Project/>
        <Certificate/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
