import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function App() {
  const loaderRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaderDone, setIsLoaderDone] = useState(false);
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  }, []);

  useGSAP(() => {
    if (progress === 100) {
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [progress]);

  useEffect(() => {
    if (progress >= 90 && !isLoaderDone) {
      setIsLoaderDone(true);
    }
  }, [progress, isLoaderDone]);

  useEffect(() => {
    const element = loaderRef.current;
    if (!element) return;
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    if (progress < 100) {
      element.addEventListener("wheel", preventScroll, { passive: false });
      element.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      element.removeEventListener("wheel", preventScroll);
      element.removeEventListener("touchmove", preventScroll);
    }
    return () => {
      element.removeEventListener("wheel", preventScroll);
      element.removeEventListener("touchmove", preventScroll);
    };
  }, [progress]);

  return (
    <div className="bg-[#F1F0EE] h-full w-full">
      {" "}
      <Hero
        progress={progress}
        loaderRef={loaderRef}
        isLoaderDone={isLoaderDone}
      />{" "}
      {/* <MenuBar /> */} <About /> <Skills /> <Project /> <Contact />{" "}
      <Footer />{" "}
    </div>
  );
}
export default App;
