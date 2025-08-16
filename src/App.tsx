import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Loading from "./components/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function App() {
  const loaderRef = useRef<HTMLDivElement>(null!);
  const [progress, setProgress] = useState(0);
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  gsap.registerPlugin(useGSAP);

  // ---- PRELOAD IMAGES ----
  useEffect(() => {
    const images = [
      "/hero.svg",
      "/logo.png",
      "/about.svg",
      "/skills.png",
      "/project1.png",
      "/footer.svg",
      // yahan apni sari images aur svgs ka path add karo
    ];

    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        setProgress(Math.round((loaded / images.length) * 100));
      };
      img.onerror = () => {
        // agar image load na ho to bhi progress bar aage chale
        loaded++;
        setProgress(Math.round((loaded / images.length) * 100));
      };
    });
  }, []);

  // ---- Animate loader hatna ----
  useGSAP(() => {
    if (progress === 100) {
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => setIsLoaderDone(true),
      });
    }
  }, [progress]);

  // ---- Jab tak loader active hai tab tak scroll band ----
  useEffect(() => {
    if (progress < 100) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [progress]);

  return (
    <div className="bg-[#F1F0EE] h-full w-full">
      {/* Loader */}
      {!isLoaderDone && <Loading progress={progress} loaderRef={loaderRef} />}

      {/* Website content */}
      <Hero progress={progress} loaderRef={loaderRef} isLoaderDone={isLoaderDone} />
      <MenuBar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
