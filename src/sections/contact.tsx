"use client";
import { motion } from "framer-motion";
import TitleGlass from "@/components/titleGlass";

export default function Contact() {
    const contactItems = [
        { name: "اینستاگرام", color: "#DF3D28" },
        { name: "تلگرام", color: "#0205AD" },
        { name: "ایمیل", color: "#DF3D28" },
        { name: "تماس", color: "#0205AD" }
    ];

    return(
        <motion.div
            className="h-dvh py-10 px-80 flex flex-col justify-betwee gap-18"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <TitleGlass title="ارتباط با" />
            </motion.div>
            <motion.div
                dir="rtl"
                className="flex-1 text-justify font-medium font-yekan-bakh text-[23px] text-black/80 leading-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                تام‌مدیا فقط یک آژانس بازاریابی و برندینــگ نیست؛ بلکه یک نیروی خــــــلــــاق است که بـــــرنـــدها را به‌عنوان موجــودیت‌هایی زنده و پویا می‌بیند. ما روح بـــــرنـــــــد شما را کشف کرده و آن را از طـــریق تصاویر بصـــــری جذاب، استراتـژی‌های هوشمندانه و کمپین‌های تأثیرگذار به زندگـــــی می‌آوریم. با الهام از داســـــتـــــان‌هـــــا و آرزوهــــای شما، مـــــا تجـــــربه‌هایی خـــلـــــق می‌کنیم که دیده می‌شوند، احساس می‌شوند و فراموش‌نشدنی هستند.
            </motion.div>
            <motion.div
                className="w-full flex items-center justify-between font-yekan-bakh md:text-xl text-[16px] border border-white/30 bg-[#002FFF05] backdrop-blur-[30px] px-18 py-7 rounded-full"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
                {contactItems.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5 + (index * 0.1),
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.15,
                            color: item.color,
                            textShadow: `0 0 20px ${item.color}40`
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {item.name}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}