import TitleGlass from "@/components/titleGlass";
import { Plus } from 'lucide-react';
import { motion } from "framer-motion";
export default function Services() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
                <div className="w-full h-full flex flex-col gap-4 justify-around items-center bg-[#193FE905] backdrop-blur-[20px] rounded-3xl p-5 font-yekan-bakh">
                    <div className="flex gap-5 text-4xl w-full">
                        <div className="flex-1 text-left">
                            <Plus className="mr-auto"/>
                        </div>
                        <span className="flex-1 text-right font-semibold">خـــدمـــــــات </span>
                    </div>
                    <div className="flex gap-5 text-4xl w-full">
                        <div className="flex-1 text-left">
                            <Plus className="mr-auto text-[#0205B6]"/>
                        </div>
                        <span className="flex-1 text-right font-semibold">آمـــــــوزش </span>
                    </div>
                    <div className="flex gap-5 text-4xl w-full">
                        <div className="flex-1 text-left">
                            <Plus className="mr-auto text-[#DF3D28]"/>
                        </div>
                        <span className="flex-1 text-right font-semibold">مـــــشــــاوره </span>
                    </div>
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