import { motion } from "framer-motion";

type Navbar = {
    isLoaderDone: boolean
};

function Navbar({ isLoaderDone }: Navbar) {
    return (
        <>{isLoaderDone && <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative h-[90px] md:px-10 px-5 flex items-center w-full justify-between gap-5 md:mb-15 mb-7">
            <div>
                <img className="w-20" src="logo.svg" />
            </div>

            <h3
                style={{ fontFamily: "Saira, sans-serif" }}
                className="cursor-pointer text-sm"
            >MENU</h3>

        </motion.div>}
        </>
    );
}

export default Navbar;
