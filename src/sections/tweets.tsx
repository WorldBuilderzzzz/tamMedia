
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import TitleGlass from "@/components/titleGlass";

export default function Tweets () {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const tweets: {id: string, title: string, badges?: {title: string, link: string}[], instagram_id: string, image: string, description: string,}[] = [
        {
            id: "1",
            title: "سوگند نتاج",
            instagram_id: "SOGAND_NATAJ_",
            image: "sogand", 
            badges:[
                {title:'+8m',link:'https://www.instagram.com/reel/DN0MqaL2Jjz/?igsh=MWtuNjRmcDJza2VvZw=='},
                {title:'+3.5m', link:'https://www.instagram.com/reel/DN-1cYfjRMR/?igsh=bHN0M282ejl0MTh6'},
                {title:'+1.7m', link:'https://www.instagram.com/reel/DPBK1vRDSMA/?igsh=MWIzMW8wc3dzMnM4Nw=='}
            ], 
            description: "بچه‌های خیلی خلاقی‌ هستن؛ خوشحالم که دارم باهاشون همکاری میکنم گاهی اوقات بوده که من هیچ سناریویی نداشتم، بهشون فقط ایده می‌دادم و نتیجه‌های خیلی خوبی برام درست میکردن."
        },
        {
            id: "2", 
            title: "مهراوید کلینیک", 
            instagram_id: "Mehravidclinic",
            badges:[
                {title:'کمپین یلدا', link:'https://www.instagram.com/reel/DDpT4SMuZ1v/?igsh=OHVkd2RicXV0eThn'},
                {title:'کمپین سال نو', link:'https://www.instagram.com/reel/DHa4Yk1tJJZ/?igsh=eHZya3NtZngzOXI2'},
                {title:'پادکست دندانپرشکی', link:'https://www.instagram.com/reel/DQAKpXLDcXH/?igsh=YjBwdTJjb3hvdGtm'}
            ], 
            image: "mehravid", 
            description: "نزدیک به دو ساله با بچه‌های گروه مهراوید کلینیک پزشکی همکاری می‌کنیم؛ بچه‌های بسیار منظم، مرتب و مؤدبی هستن و بارز‌ترین شاخصه‌شون خلاقیت و ایده‌های نو هستش."
        },
        {
            id: "3",
            title: "سوگند نتاج",
            instagram_id: "SOGAND_NATAJ_",
            image: "sogand", 
            badges:[
                {title:'+8m',link:'https://www.instagram.com/reel/DN0MqaL2Jjz/?igsh=MWtuNjRmcDJza2VvZw=='},
                {title:'+3.5m', link:'https://www.instagram.com/reel/DN-1cYfjRMR/?igsh=bHN0M282ejl0MTh6'},
                {title:'+1.7m', link:'https://www.instagram.com/reel/DPBK1vRDSMA/?igsh=MWIzMW8wc3dzMnM4Nw=='}
            ], 
            description: "بچه‌های خیلی خلاقی‌ هستن؛ خوشحالم که دارم باهاشون همکاری میکنم گاهی اوقات بوده که من هیچ سناریویی نداشتم، بهشون فقط ایده می‌دادم و نتیجه‌های خیلی خوبی برام درست میکردن."
        },
        {
            id: "4", 
            title: "مهراوید کلینیک", 
            instagram_id: "Mehravidclinic",
            badges:[
                {title:'کمپین یلدا', link:'https://www.instagram.com/reel/DDpT4SMuZ1v/?igsh=OHVkd2RicXV0eThn'},
                {title:'کمپین سال نو', link:'https://www.instagram.com/reel/DHa4Yk1tJJZ/?igsh=eHZya3NtZngzOXI2'},
                {title:'پادکست دندانپرشکی', link:'https://www.instagram.com/reel/DQAKpXLDcXH/?igsh=YjBwdTJjb3hvdGtm'}
            ], 
            image: "mehravid", 
            description: "نزدیک به دو ساله با بچه‌های گروه مهراوید کلینیک پزشکی همکاری می‌کنیم؛ بچه‌های بسیار منظم، مرتب و مؤدبی هستن و بارز‌ترین شاخصه‌شون خلاقیت و ایده‌های نو هستش."
        },
    ]

    return(
        <motion.div
            className="h-dvh py-10 flex flex-col justify-between font-yekan-bakh"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0 }}
        >
            <motion.div
                className="md:px-60 px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
            >
                <TitleGlass title="نتیجه همکاری با" />
            </motion.div>
            {/* mobile tweets */}
            <motion.div
                className="w-full h-full overflow-y-hidden md:hidden"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: .8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <Swiper
                    className='h-full my-5'
                    direction="vertical"
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={0}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >   
                {tweets.map((tweet, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="bg-white/20 mx-6 pr-3 pl-3 py-4 flex flex-col gap-4 justify-between rounded-[30px] border backdrop-blur-[20px] border-[#7C7C7C] hover:bg-white/10 group cursor-pointer transition-all duration-300"
                                onClick={() => window.open(`https://www.instagram.com/${tweet.instagram_id}`, '_blank')}
                                role="link"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        window.open(`https://www.instagram.com/${tweet.instagram_id}`, '_blank');
                                    }
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <motion.img
                                            className='w-13 h-13 object-cover rounded-full group-hover:scale-110 transition-all duration-300'
                                            src={tweet.image === 'Profile' ? `/images/${tweet.image}.png` : `/images/${tweet.image}.JPG`}
                                            alt={tweet.title}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="text-base font-bold">{tweet.title}</div>
                                    </div>
                                    <div dir="ltr" className='text-[#7C7C7C] group-hover:text-black transition-colors font-vazir-matn text-xs'>@{tweet.instagram_id}</div>
                                </div>
                                <div className="font-light text-sm">{tweet.description}</div>
                                <div className="flex gap-2">
                                    {tweet.badges && tweet.badges.map((badge, index) => (
                                        <a
                                            key={index}
                                            href={badge.link}
                                            target='_blank'
                                            rel="noreferrer"
                                            dir='ltr'
                                            className="border border-[#D13926] even:border-[#0205B6] bg-[#D1392680] even:bg-[#0205B680] rounded-full text-xs px-5 py-2 hover:scale-110 shadow hover:shadow-lg transition-all duration-300"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            {badge.title}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
            {/* desktop tweets */}
            <motion.div
                className="w-full hidden md:flex"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <Swiper
                    className="flex-1"
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={2.6}
                    spaceBetween={0}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {tweets.map((tweet, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="bg-white/20 space-y-5 mr-6 pr-8 pl-15 py-4 h-full flex flex-col justify-between rounded-[40px] border backdrop-blur-[20px] border-[#7C7C7C] leading-8 hover:bg-white/10 group cursor-pointer transition-all duration-300"
                                onClick={() => window.open(`https://www.instagram.com/${tweet.instagram_id}`, '_blank')}
                                role="link"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        window.open(`https://www.instagram.com/${tweet.instagram_id}`, '_blank');
                                    }
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <motion.img
                                            className='w-13 h-13 object-cover rounded-full group-hover:scale-110 transition-all duration-300'
                                            src={tweet.image === 'Profile' ? `/images/${tweet.image}.png` : `/images/${tweet.image}.JPG`}
                                            alt={tweet.title}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="text-lg font-bold">{tweet.title}</div>
                                    </div>
                                    <div dir="ltr" className='text-[#7C7C7C] group-hover:text-black transition-colors font-vazir-matn text-sm'>@{tweet.instagram_id}</div>
                                </div>
                                <div className="font-light">{tweet.description}</div>
                                <div className="flex gap-2">
                                    {tweet.badges && tweet.badges.map((badge, index) => (
                                        <a
                                            key={index}
                                            href={badge.link}
                                            target='_blank'
                                            rel="noreferrer"
                                            dir='ltr'
                                            className="border border-[#D13926] even:border-[#0205B6] bg-[#D1392680] even:bg-[#0205B680] rounded-full text-xs px-5 py-2 hover:scale-110 shadow hover:shadow-lg transition-all duration-300"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            {badge.title}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
            <div
                onClick={() => scrollTo('contact')}
                className="w-10 h-10 -mb-7 mx-auto rotate-270 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer"
            >
                {'>'}
            </div>
        </motion.div>
    )
}