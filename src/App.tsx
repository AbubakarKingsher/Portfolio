import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
import { AppContext, AppProvider } from "./context/AppContext";

function App() {
  const loaderRef = useRef<any>(null);
  const menuBarRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);
  const [menuBarHandler, setmenuBarHandler] = useState(false)
  const { isLoaderDone, setIsLoaderDone } = useContext(AppContext);
  

  return (
    <div className="relative bg-[#F1F0EE] overflow-y-hidden h-full w-full">
      <MenuBar />
      <Loading />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
