import TitleGlass from "@/components/titleGlass";
import { ArrowLeft, Plus } from 'lucide-react';
import { motion } from "framer-motion";
import { useState } from "react";

type serviceType = 'service' | 'guide' | 'consultation'

const serviceMap: Record<serviceType, string> = {
    "service": "خـــدمـــــــات",
    "guide": "آمـــــــوزش",
    "consultation": "مـــــشــــاوره"
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
                className="flex flex-col justify-between h-full"
            >
                <div className="px-6 md:px-80">
                    <TitleGlass title="خدمات ما" />
                </div>
                <div className="w-full h-full bg-[#193FE905] backdrop-blur-[20px] rounded-3xl p-5 font-yekan-bakh">
                    {service == null ? (
                        <div className="flex flex-col gap-4 justify-around items-center h-full">
                            <div className="flex gap-5 text-4xl w-full">
                                <div className="flex-1 text-left">
                                    <Plus className="mr-auto"/>
                                </div>
                                <span className="flex-1 text-right font-semibold cursor-pointer" onClick={() => setService('service')}>خـــدمـــــــات </span>
                            </div>
                            <div className="flex gap-5 text-4xl w-full">
                                <div className="flex-1 text-left">
                                    <Plus className="mr-auto text-[#0205B6]"/>
                                </div>
                                <span className="flex-1 text-right font-semibold cursor-pointer" onClick={() => setService('guide')}>آمـــــــوزش </span>
                            </div>
                            <div className="flex gap-5 text-4xl w-full">
                                <div className="flex-1 text-left">
                                    <Plus className="mr-auto text-[#DF3D28]"/>
                                </div>
                                <span className="flex-1 text-right font-semibold cursor-pointer" onClick={() => setService('consultation')}>مـــــشــــاوره </span>
                            </div>
                        </div>
                    ) : (
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="font-semibold text-[45px]">{serviceMap[service]}</div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[25px] cursor-pointer" onClick={() => setService(null)}> سرویس ها</span>
                                    <img src="/images/arrow.svg" alt="arrow icon" className="w-8" />
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    )}
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