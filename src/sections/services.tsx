import TitleGlass from "@/components/titleGlass";
import { motion } from "framer-motion";
export default function Services() {
    return(
        <motion.div
            className="h-dvh py-10 px-6 md:px-80 grid grid-rows-[auto_1fr_auto] gap-5 md:gap-18 relative"
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
                <TitleGlass title="خدمات ما" />
            </motion.div>
        </motion.div>
    )
}