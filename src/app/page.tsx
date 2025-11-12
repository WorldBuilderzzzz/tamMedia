"use client";
import Header from "@/sections/header";
import Contact from "@/sections/contact";
import Tweets from "@/sections/tweets";
import { motion } from "framer-motion";

const radiusShape = '60% 40% 0% 100% / 52% 100% 0% 48%'

export default function Home() {
  return (
    <div className="h-dvh w-dvw relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-black/10">
          <img
            src="/images/noise.png"
            alt="background"
            className="absolute top-0 left-0 w-full h-full opacity-50"
          />
          <motion.div
            className="absolute -top-10 -left-10 w-[300px] h-[300px] scale-200 bg-[#DF3D28]"
            style={{
              borderRadius: radiusShape,
              rotate: '207',
              top: '-300px',
              left: '-40px',
            }}
            initial={{ scale: 0, opacity: 0 }}
              animate={{
              scale: 1,
              rotate: '207deg',
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0.34, 1.56, 0.64, 1],
              // delay: 0.2
            }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-10 -right-10 w-[300px] h-[300px] scale-200 bg-[#0205AD]"
            style={{
              borderRadius: radiusShape,
              rotate: '14deg',
              bottom: '-300px',
              right: '16px',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: '14deg',
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              ease: [0.34, 1.56, 0.64, 1],
              // delay: 0.4
            }}
          ></motion.div>
        <div dir="ltr" className="overflow-y-auto scroll-smooth h-full absolute top-0 left-0 w-full snap-y snap-mandatory">
            <div dir="rtl">
              <div id="header" className="snap-start">
                <Header />
              </div>
              <div id="tweets" className="snap-start">
                <Tweets />
              </div>
              <div id="contact" className="snap-start">
                <Contact />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
