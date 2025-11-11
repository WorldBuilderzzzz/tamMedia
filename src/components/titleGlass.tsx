"use client";
import { motion } from "framer-motion";

interface TitleGlassProps {
    title: string;
}
export default function TitleGlass({ title } : TitleGlassProps) {
    const wordVariants = {
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
        <motion.div
            className="w-full flex items-center justify-center gap-5 text-[70px] font-yekan-bakh py-1 rounded-[40px] bg-[#002FFF05]/10 border border-white/30 text-black backdrop-blur-[20px] font-bold"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                borderColor: "rgba(2, 5, 182, 0.4)",
                boxShadow: "0 10px 50px rgba(2, 5, 182, 0.15)"
            }}
        >
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
                whileHover={{
                    scale: 1.1,
                    filter: "drop-shadow(0 0 40px rgba(2, 5, 182, 0.8))"
                }}
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
                whileHover={{
                    scale: 1.1,
                    filter: "drop-shadow(0 0 40px rgba(223, 61, 40, 0.8))"
                }}
                transition={{ duration: 0.3 }}
            >
                مدیــا
            </motion.span>
        </motion.div>
    )
}