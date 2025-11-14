"use client";
import { motion, Variants } from "framer-motion";

interface TitleGlassProps {
    title: string;
}
export default function TitleGlass({ title } : TitleGlassProps) {
    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return(
        <div className="w-full flex items-center justify-center gap-5 text-3xl md:text-[70px] font-yekan-bakh py-4 md:py-1 rounded-3xl md:rounded-[40px] bg-[#002FFF05]/10 border border-white/30 text-black backdrop-blur-[20px] font-bold">
            <motion.span
                style={{filter: "drop-shadow(0 0 30px rgba(0, 0, 0, 0.7))"}}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
            >
                {title}
            </motion.span>
            <motion.span
                className="text-[#0205B6]"
                style={{filter: "drop-shadow(0 0 30px rgba(2, 5, 182, 0.5))"}}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                transition={{ duration: 0.3 }}
            >
                تـــــام
            </motion.span>
            <motion.span
                className="text-[#DF3D28]"
                style={{filter: "drop-shadow(0 0 30px rgba(223, 61, 40, 0.5))"}}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                transition={{ duration: 0.3 }}
            >
                مدیــا
            </motion.span>
        </div>
    )
}