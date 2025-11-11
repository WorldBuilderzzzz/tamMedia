"use client";
import { motion } from "framer-motion";

const Header = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            }
        }
    };

    const itemVariants = {
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

    const buttonVariants = {
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
            className="grid grid-rows-[1fr_auto] md:py-5 py-5 px-10 h-dvh"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col md:gap-10 gap-5 items-center justify-center">
                <motion.img
                    src="/images/logo.svg"
                    alt="logo"
                    className="px-4 md:px-0 w-[400px] md:w-[550px]"
                    variants={itemVariants}
                />
                <motion.img
                    src="/images/tamMedia.svg"
                    alt="tamMedia"
                    className="px-4 md:px-0 w-[250px] md:w-[350px] scale-150"
                    variants={itemVariants}
                />
            </div>
            <motion.div
                className="flex flex-col items-center justify-center gap-4"
                variants={itemVariants}
            >
                <div className="flex items-center md:justify-around gap-40 font-yekan-bakh md:text-xl text-[16px] bg-[#002FFF05] backdrop-blur-[20px] px-18 py-7 rounded-full">
                    <motion.button
                        onClick={() => scrollTo('tweets')}
                        className="focus:outline-none cursor-pointer"
                        variants={buttonVariants}
                        custom={0}
                        whileHover={{ scale: 1.1, color: "#0205AD" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        خدمات ما
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
                <motion.div
                    onClick={() => scrollTo('tweets')}
                    className="rotate-270 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 0.8,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        opacity: { delay: 1.6, duration: 0.5 },
                        y: {
                            delay: 2,
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {'>'}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default Header;