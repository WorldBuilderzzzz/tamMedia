"use client";
import Header from "@/sections/header";
import Contact from "@/sections/contact";
import Tweets from "@/sections/tweets";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const radiusShape = '60% 40% 0% 100% / 52% 100% 0% 48%'

export default function Home() {
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="h-dvh w-dvw relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-black/10">
          <img
            src="/images/noise.png"
            alt="background"
            className="absolute top-0 left-0 w-full h-full opacity-50"
          />
          <motion.div
            className="absolute w-[148px] h-[100px] md:w-[300px] md:h-[300px] scale-200 bg-[#DF3D28]"
            style={{
              borderRadius: radiusShape,
              ...(isMdOrLarger ? {
                rotate: '207deg',
                top: '-300px',
                left: '-40px',
              } : {
                rotate: '174deg',
                top: '-70px',
                left: '-29px',
              })
            }}
            initial={{ scale: 0, opacity: 0, y: '-100px', x: '-100px' }}
            animate={{
              scale: 1,
              rotate: isMdOrLarger ? '207deg' : '174deg',
              opacity: 1,
              y: '0',
              x: '0'
            }}
            transition={{
              duration: 1.5,
              ease: [0.34, 1.56, 0.64, 1],
              // delay: 0.2
            }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-[120px] -right-[70px] w-[180px] h-[180px] md:w-[300px] md:h-[300px] scale-200 bg-[#0205AD]"
            style={{
              borderRadius: radiusShape,
              ...(isMdOrLarger ? {
                rotate: '14deg',
                bottom: '-240px',
                right: '26px',
              } : {
                rotate: '14deg',
                bottom: '-160px',
                right: '-70px',
              })
            }}
            initial={{ scale: 0, opacity: 0, y: '100px', x: '100px' }}
            animate={{
              scale: 1,
              rotate: '14deg',
              opacity: 1,
              y: '0',
              x: '0'
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
