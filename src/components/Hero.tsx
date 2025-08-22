import Navbar from "./Navbar";
import "../App.css";
import { motion } from 'framer-motion'
import { TextScroll } from "./ui/text-scroll";
import AnimatedText from "./ui/AnimationText";
import ParagraphAnimation from "./ui/ParagraphAnimation";
import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppContext";
import NumberAnimation from "./ui/NumberAnimation";

function Hero() {

    const { isLoaderDone, setmenuBarHandler } = useContext(AppContext);

    return (
        <>
            <Navbar setmenuBarHandler={setmenuBarHandler} />
            <div className='md:px-15 px-5'>
                <div className='flex md:items-center justify-between w-full flex-col md:flex-row'>
                    <div className="w-fit relative flex items-center justify-between">
                        <h1
                            style={{ fontFamily: "Saira, sans-serif" }}
                            className="relative md:text-left w-fit uppercase text-[15vw] md:text-[10vw] leading-[13vw] md:leading-[8vw] font-black"
                        >
                            <AnimatedText start={isLoaderDone}>Frontend<br />Engineer</AnimatedText>
                            {isLoaderDone && <motion.img
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                className='md:w-[20vw] md:opacity-100 opacity-90 w-[35vw] absolute md:-right-20 -right-10 top-[47%] -translate-y-1/2' src="Abubakar.svg" alt='My Name' />}
                        </h1>
                    </div>
                    <div className='flex items-center justify-between md:mt-0 mt-5'>
                        <motion.img
                            src="down-arrow.svg"
                            className="block md:hidden w-30"
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {isLoaderDone && <h1
                            style={{ fontFamily: "Saira, sans-serif" }}
                            className="stroke-text ml-auto text-transparent font-bold opacity-40 text-[22vw] md:text-[10vw]"
                        >
                            <NumberAnimation direction="right">01</NumberAnimation>
                        </h1>}
                    </div>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-10 md:mt-20 mt-7'>
                    <a
                        href="https://wa.me/923378428820?text=Hi%2C%20I'm%20interested%20in%20your%20services!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="py-2 hover:scale-105 px-8 md:text-sm transform transition duration-200 ease-in-out  text-xs bg-black rounded-sm text-white cursor-pointer">Let's Talk</button>
                    </a>
                    <div className="md:text-base text-xs md:mt-0 tracking-wider md:leading-6 leading-5">
                        {isLoaderDone && <ParagraphAnimation
                            lines={[
                                "I craft smooth, creative interfaces",
                                "with bold visuals and pixel-perfect logic.",
                                "Design meets functionality -",
                                "and it all starts with a scroll."
                            ]}
                            delay={0.5}
                        />}
                    </div>
                </div>
            </div>
            <TextScroll text="Code  Craft ✦" />
        </>
    );
}

export default Hero;
