import { motion } from "framer-motion";
import MaskedDiv from "./ui/masked-div";
import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppContext";

function About() {

  const { aboutRef } = useContext(AppContext);

  return (
    <div ref={aboutRef} className="text-black w-full gap-15 mb-10 px-5 md:px-10">
      <div className="flex items-start justify-between flex-col">
        <div className="mb-12 h-fit overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ delay: .5, duration: .9 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Saira, sans-serif" }}
            className="md:text-[8vw] md:leading-[7vw] text-[15vw] leading-[14vw] font-medium"
          >
            ABOUT<br />ME
          </motion.h2>
        </div>

        <div className="flex md:items-end items-start gap-16 w-full md:flex-row flex-col">
          <MaskedDiv maskType="type-1">
            <img src="my-pic.webp" alt="My Profile Picture" />
          </MaskedDiv>
          <div>
            <h2 className="font-medium md:text-base text-sm">
              I don't just write code -
              <span className="text-[#AC0E0F]"> I craft experiences.</span>
              <br />
              Clean visuals and smooth interactions are at the heart of
              everything I build.
            </h2>

            <div className="relative mt-7 flex md:flex-row flex-col md:items-end justify-between items-start gap-7 md:gap-2">
              <p className="md:text-base text-xs md:mt-0 tracking-wider md:leading-6 leading-5">
                I build responsive, user - focused websites <br />
                using tools like React, Tailwind CSS, and GSAP. <br />
                I love turning complex ideas into clean, <br />
                smooth, and interactive web experiences. <br />
                Always learning, always improving - <br />
                frontend is more than code, it's craft.
              </p>
            </div>
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: .5, x: 0 }}
          transition={{ delay: .5, duration: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "Saira, sans-serif" }}
          className="stroke-text text-transparent font-bold mt-5 stroke-black opacity-40 text-[22vw] leading-fit md:text-[10vw]"
        >
          02
        </motion.h1>
      </div>
    </div>
  );
}

export default About;
