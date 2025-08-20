import { motion } from "framer-motion";
type NavPage = {
    setmenuBarHandler: React.Dispatch<React.SetStateAction<boolean>>
};

function Navbar({ setmenuBarHandler }: NavPage) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative h-[90px] md:px-10 px-5 flex items-center w-full justify-between gap-5 md:mb-15 mb-7"
        >
            <div>
                <img className="w-20" src="logo.svg" />
            </div>
            <button onClick={() => setmenuBarHandler(true)}
                style={{ fontFamily: "Saira, sans-serif" }}
                className="cursor-pointer text-sm"
            >
                MENU
            </button>
        </motion.div>
    );
}

export default Navbar;
