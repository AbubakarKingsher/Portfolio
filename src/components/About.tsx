import MaskedDiv from "./ui/masked-div";
import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppContext";
import RedTextAnimation from "./ui/RedTextAnimation";
import FadeIn from "./ui/FadeIn";
import NumberAnimation from "./ui/NumberAnimation";
import HeadingAnimationProps from "./ui/HeadingAnimation";

function About() {

  const { aboutRef } = useContext(AppContext);

  return (
    <div ref={aboutRef} className="text-black w-full gap-15 mb-10 px-5 md:px-10">
      <div className="flex items-start justify-between flex-col">
        <HeadingAnimationProps>About <br /> Me</HeadingAnimationProps>
        <div className="flex md:items-end items-start gap-16 w-full md:flex-row flex-col">
          <MaskedDiv maskType="type-1">
            <img src="my-pic.webp" alt="My Profile Picture" />
          </MaskedDiv>
          <div>
            <h2
              className="font-medium md:text-base text-sm">
              I don't just write code —
              <RedTextAnimation>I craft experiences.</RedTextAnimation>
              <br />
              Clean visuals and smooth interactions are at the heart of
              everything I build.
            </h2>
            <div className="relative mt-7 flex md:flex-row flex-col md:items-end justify-between items-start gap-7 md:gap-2">
              <div
                className="md:text-base text-xs md:mt-0 tracking-wider leading-relaxed">
                <FadeIn delay={0.4}>I build responsive, user - focused websites <br />
                  using tools like React, Tailwind CSS, and GSAP. <br />
                  I love turning complex ideas into clean, <br />
                  smooth, and interactive web experiences. <br />
                  Always learning, always improving - <br />
                  frontend is more than code, it's craft.
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        <h1
          style={{ fontFamily: "Saira, sans-serif" }}
          className="stroke-text text-transparent font-bold mt-5 stroke-black opacity-40 text-[22vw] leading-fit md:text-[10vw]"
        >
          <NumberAnimation direction="left">02</NumberAnimation>
        </h1>
      </div>
    </div>
  );
}

export default About;
