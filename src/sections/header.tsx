"use client";
import { motion, Variants } from "framer-motion";

const Header = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.2 + (i * 0.1),
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return(
        <motion.div
            className="grid grid-rows-[1fr_auto] md:py-5 py-5 px-3 h-dvh"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col gap-7 md:gap-10 items-center justify-center">
                <motion.img
                    src="/images/logo.svg"
                    alt="logo"
                    className="px-4 md:px-0 w-[300px] md:w-[550px] select-none"
                    variants={itemVariants}
                />
                <motion.img
                    src="/images/tamMedia.svg"
                    alt="tamMedia"
                    className="hidden md:block px-0 w-[350px] scale-150 select-none"
                    variants={itemVariants}
                />
                <motion.img
                    src="/images/tamMediaMobile.svg"
                    alt="tamMedia"
                    className="md:hidden px-0 w-[150px] scale-150 select-none"
                    variants={itemVariants}
                />
            </div>
            <motion.div
                className="flex flex-col items-center justify-center gap-4"
            >
                <div className="flex items-center justify-around w-full md:w-fit md:gap-40 font-yekan-bakh text-lg md:text-xl bg-[#002FFF05] backdrop-blur-[20px] px-5 py-5 md:px-18 md:py-7 mb-2 md:mb-0 rounded-full">
                    <motion.button
                        onClick={() => scrollTo('services')}
                        className="focus:outline-none cursor-pointer"
                        variants={buttonVariants}
                        custom={0}
                        whileHover={{ scale: 1.1, color: "#0205AD" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        سرویس‌ها
                    </motion.button>
                    <motion.button
                        onClick={() => scrollTo('tweets')}
                        className="focus:outline-none cursor-pointer"
                        variants={buttonVariants}
                        custom={1}
                        whileHover={{ scale: 1.1, color: "#DF3D28" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        نتیجه ها
                    </motion.button>
                    <motion.button
                        onClick={() => scrollTo('contact')}
                        className="focus:outline-none cursor-pointer"
                        variants={buttonVariants}
                        custom={2}
                        whileHover={{ scale: 1.1, color: "#0205AD" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ارتباط با ما
                    </motion.button>
                </div>
                <div
                    onClick={() => scrollTo('services')}
                    className="rotate-270 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer"
                >
                    {'>'}
                </div>
            </motion.div>
        </motion.div>
    )
}
export default Header;