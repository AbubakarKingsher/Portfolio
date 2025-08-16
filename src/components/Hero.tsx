import Navbar from "./Navbar";
import "../App.css";
import { motion } from 'framer-motion'
import { TextScroll } from "./ui/text-scroll";
import Loading from "./Loading";
import AnimatedText from "./ui/AnimationText";
import ParagraphAnimation from "./ui/ParagraphAnimation";
type heroPage = {
    progress: number;
    loaderRef: React.RefObject<HTMLDivElement>;
    isLoaderDone: boolean
};

function Hero({ progress, loaderRef, isLoaderDone }: heroPage) {
    return (
        <div className="relative h-full w-full">
            <Loading progress={progress} loaderRef={loaderRef} />
            <div className="w-full relative overflow-hidden">
                <Navbar isLoaderDone={isLoaderDone} />
                <div className='md:px-15 px-5'>
                    <div className='flex md:items-center justify-between w-full flex-col md:flex-row'>
                        <div className="w-fit relative flex items-center justify-between">
                            <h1
                                style={{ fontFamily: "Saira, sans-serif" }}
                                className="relative md:text-left w-fit uppercase text-[15vw] md:text-[10vw] leading-[13vw] md:leading-[8vw] font-black"
                            >
                                <AnimatedText start={isLoaderDone}>Frontend<br />Engineer</AnimatedText>
                                {isLoaderDone && <motion.img
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1.5 }}
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
                            {isLoaderDone && <motion.h1
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: .5 }}
                                transition={{ delay: 1.5, duration: 1.5 }}
                                viewport={{ once: true, amount: 0.5 }}
                                style={{ fontFamily: "Saira, sans-serif" }}
                                className="stroke-text ml-auto text-transparent font-bold opacity-40 text-[22vw] md:text-[10vw]"
                            >
                                01
                            </motion.h1>}
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
                        <p className="md:text-base text-xs md:mt-0 tracking-wider md:leading-6 leading-5">
                            {isLoaderDone && <ParagraphAnimation
                                lines={[
                                    "I craft smooth, creative interfaces",
                                    "with bold visuals and pixel-perfect logic.",
                                    "Design meets functionality -",
                                    "and it all starts with a scroll."
                                ]}
                                delay={0.5}
                            />}
                        </p>
                    </div>
                </div>
                <TextScroll text="Code  Craft ✦" />
            </div>
        </div>
    );
}

export default Hero;
