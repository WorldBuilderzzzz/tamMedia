import TitleGlass from "@/components/titleGlass";
import { ArrowLeft, Plus } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type serviceType = 'service' | 'guide' | 'consultation'

const serviceMap: Record<serviceType, string> = {
    "service": "خـــدمـــــــات",
    "guide": "آمـــــــوزش",
    "consultation": "مـــــشــــاوره"
}

const servicesItems: Record<serviceType, string[]> = {
    "service": [
        "خدمات سوشال مدیا",
        "خدمات طراحی و پیاده‌سازی وب‌سایت",
        "خدمات فیلمبرداری و تدوین",
        "خدمات گرافیکی",
        "خدمات عکاسی",
        "پکیج‌های تولید محتوا اینستاگرام",
    ],
    "guide": [
        "برگزاری کلاس‌های آنلاین با طراحی اختصاصی برای شما",
    ],
    "consultation": [
        "مشاوره رشد در فضای آنلاین",
        "طراحی استراتژی محتوایی",
        "ایده‌پردازی کمپین‌های مناسبتی و تبلیغاتی",
        "تحلیل رقبا و بازار هدف در اینستاگرام",
        "مشاوره برندینگ شخصی",
        "طراحی تقویم محتوایی",
    ]
}

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Services() {
    const [service, setService] = useState<serviceType | null>(null)

    
    return(
        <motion.div
            className="h-dvh py-10 px-6 md:px-20 flex flex-col justify-between gap-10 relative"
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
                className="flex flex-col justify-between h-full gap-5"
            >
                <div className="px-6 md:px-80">
                    <TitleGlass title="خدمات ما" />
                </div>
                <div className="w-full h-full bg-[#193FE905] backdrop-blur-[20px] rounded-[80px] md:rounded-3xl py-5 px-2 md:px-14 font-yekan-bakh">
                    <AnimatePresence mode="wait">
                        {service == null ? (
                            <motion.div 
                                key="services-list"
                                className="flex flex-col gap-4 justify-around items-center h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="flex gap-1 md:gap-5 text-4xl w-full">
                                    <div className="flex-1 text-left">
                                        <Plus className="mr-auto"/>
                                    </div>
                                    <motion.span 
                                        layoutId="service-title"
                                        className="flex-1 hover:text-black/70 transition-colors text-right font-semibold cursor-pointer" 
                                        onClick={() => setService('service')}
                                    >
                                        خـــدمـــــــات
                                    </motion.span>
                                </div>
                                <div className="flex gap-1 md:gap-5 text-4xl w-full">
                                    <div className="flex-1 text-left">
                                        <Plus className="mr-auto text-[#0205B6]"/>
                                    </div>
                                    <motion.span 
                                        layoutId="guide-title"
                                        className="flex-1 hover:text-black/70 transition-colors text-right font-semibold cursor-pointer" 
                                        onClick={() => setService('guide')}
                                    >
                                        آمـــــــوزش
                                    </motion.span>
                                </div>
                                <div className="flex gap-1 md:gap-5 text-4xl w-full">
                                    <div className="flex-1 text-left">
                                        <Plus className="mr-auto text-[#DF3D28]"/>
                                    </div>
                                    <motion.span 
                                        layoutId="consultation-title"
                                        className="flex-1 hover:text-black/70 transition-colors text-right font-semibold cursor-pointer" 
                                        onClick={() => setService('consultation')}
                                    >
                                        مـــــشــــاوره
                                    </motion.span>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="service-detail"
                                className="flex flex-col h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="flex justify-between items-center">
                                    <motion.div 
                                        layoutId={`${service}-title`}
                                        className="font-semibold text-[45px] mx-auto md:mx-0"
                                    >
                                        {serviceMap[service]}
                                    </motion.div>
                                    <div className="hidden md:flex items-center gap-4 hover:text-black/70 transition-colors cursor-pointer" onClick={() => setService(null)}>
                                        <span className="text-[25px] cursor-pointer"> سرویس ها</span>
                                        <img src="/images/arrow.svg" alt="arrow icon" className="w-8 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="h-full mt-10">
                                    {servicesItems[service].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm md:text-2xl opacity-75 font-medium leading-10">
                                            <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex md:hidden items-center justify-center gap-2 hover:text-black/70 transition-colors cursor-pointer" onClick={() => setService(null)}>
                                        <span className="cursor-pointer"> سرویس ها</span>
                                        <img src="/images/arrow.svg" alt="arrow icon" className="w-4 cursor-pointer" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
            <div
                onClick={() => scrollTo('tweets')}
                className="w-10 h-10 -mb-7 mx-auto rotate-270 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer"
            >
                {'>'}
            </div>
        </motion.div>
    )
}