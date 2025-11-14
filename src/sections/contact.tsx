"use client";
import { motion, Variants } from "framer-motion";
import TitleGlass from "@/components/titleGlass";

export default function Contact() {
    const contactItems = [
        { name: "اینستاگرام", hoverColor: "#0205AD" },
        { name: "تلگرام", hoverColor: "#DF3D28" },
        { name: "ایمیل", hoverColor: "#0205AD" },
        { name: "تماس", hoverColor: "#DF3D28" }
    ];

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
            className="h-dvh py-10 px-6 md:px-80 flex flex-col justify-betwee gap-10 md:gap-18"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
            >
                <TitleGlass title="ارتباط با" />
            </motion.div>
            <motion.div
                dir="rtl"
                className="flex-1 text-justify font-medium font-yekan-bakh text-lg md:text-[23px] text-black/80 leading-9 md:leading-12 px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                تام‌مدیا فقط یک آژانس بازاریابی و برندینــگ نیست؛ بلکه یک نیروی خــــــلــــاق است که بـــــرنـــدها را به‌عنوان موجــودیت‌هایی زنده و پویا می‌بیند. ما روح بـــــرنـــــــد شما را کشف کرده و آن را از طـــریق تصاویر بصـــــری جذاب، استراتـژی‌های هوشمندانه و کمپین‌های تأثیرگذار به زندگـــــی می‌آوریم. با الهام از داســـــتـــــان‌هـــــا و آرزوهــــای شما، مـــــا تجـــــربه‌هایی خـــلـــــق می‌کنیم که دیده می‌شوند، احساس می‌شوند و فراموش‌نشدنی هستند.
            </motion.div>
            <motion.div
                className="w-full flex items-center justify-between font-yekan-bakh text-base md:text-xl border border-white/30 bg-[#002FFF05] backdrop-blur-[30px] px-4 md:px-18 py-7 mb-7 md:mb-0 rounded-full"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
                {contactItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="cursor-pointer"
                        variants={buttonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index}
                        whileHover={{ scale: 1.1, color: item.hoverColor, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item.name}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}