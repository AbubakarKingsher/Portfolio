import MaskedDiv from "./ui/masked-div";
import ParagraphAnimation from "./ui/ParagraphAnimation";

function About() {
  return (
    <div className="text-black w-full gap-15 mb-10 px-5 md:px-10">
      <div className="flex items-start justify-between flex-col">
        <h2
          style={{ fontFamily: "Saira, sans-serif" }}
          className="md:text-[8vw] md:leading-[7vw] text-[15vw] leading-[14vw] mb-12 font-medium"
        >
          ABOUT
          <br />
          ME
        </h2>

        <div className="flex md:items-end items-start gap-16 w-full md:flex-row flex-col">
          <MaskedDiv maskType="type-1">
            <img src="my-pic.webp" alt="My Profile Picture" />
          </MaskedDiv>
          <div>
            <h2 className="font-medium md:text-base text-sm">
              I don't just write code -{" "}
              <span className="text-[#AC0E0F]">I craft experiences.</span>{" "}
              <br />
              Clean visuals and smooth interactions are at the heart of
              everything I build.
            </h2>

            <div className="relative mt-7 flex md:flex-row flex-col md:items-end justify-between items-start gap-7 md:gap-2">
              <p className="md:text-base text-xs md:mt-0 tracking-wider md:leading-6 leading-5">
                <ParagraphAnimation
                  lines={[
                    "I build responsive, user-focused websites",
                    "using tools like React, Tailwind CSS, and GSAP.",
                    "I love turning complex ideas into clean,",
                    "smooth, and interactive web experiences.",
                    "Always learning, always improving -.",
                    "frontend is more than code, it's craft."
                  ]}
                />
              </p>
            </div>
          </div>
        </div>
        <h1
          style={{ fontFamily: "Saira, sans-serif" }}
          className="stroke-text text-transparent font-bold mt-5 stroke-black opacity-40 text-[22vw] leading-fit md:text-[10vw]"
        >
          02
        </h1>
      </div>
    </div>
  );
}

export default About;
