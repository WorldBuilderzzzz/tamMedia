
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
        // {id: "1", title: "خانم تام‌مدیانژاد", instagram_id: "tamMediaNezhad", image: "Profile",  description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        // {id: "2", title: "خانم تام‌مدیا کلاب", instagram_id: "tamMediaClub", image: "Profile", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "1", title: "سوگند نتاج", instagram_id: "SOGAND_NATAJ_", badges:[{title:'+8m', link:'https://www.instagram.com/reel/DN0MqaL2Jjz/?igsh=MWtuNjRmcDJza2VvZw=='},{title:'+3.5m', link:'https://www.instagram.com/reel/DN-1cYfjRMR/?igsh=bHN0M282ejl0MTh6'},{title:'+1.7m', link:'https://www.instagram.com/reel/DPBK1vRDSMA/?igsh=MWIzMW8wc3dzMnM4Nw=='}], image: "sogand", description: "بچه‌های خیلی خلاقی‌ هستن؛ خوشحالم که دارم باهاشون همکاری میکنمگاهی اوقات بوده که من هیچ سناریویی نداشتم، بهشون فقط ایده می‌دادم و نتیجه‌های خیلی خوبی برام درست میکردن."},
        {id: "2", title: "سوگند نتاج", instagram_id: "SOGAND_NATAJ_", image: "sogand", description: "بچه‌های خیلی خلاقی‌ هستن؛ خوشحالم که دارم باهاشون همکاری میکنمگاهی اوقات بوده که من هیچ سناریویی نداشتم، بهشون فقط ایده می‌دادم و نتیجه‌های خیلی خوبی برام درست میکردن."},
        {id: "3", title: "سوگند نتاج", instagram_id: "SOGAND_NATAJ_", image: "sogand", description: "بچه‌های خیلی خلاقی‌ هستن؛ خوشحالم که دارم باهاشون همکاری میکنمگاهی اوقات بوده که من هیچ سناریویی نداشتم، بهشون فقط ایده می‌دادم و نتیجه‌های خیلی خوبی برام درست میکردن."},
        {id: "4", title: "سوگند نتاج", instagram_id: "SOGAND_NATAJ_", image: "sogand", description: "بچه‌های خیلی خلاقی‌ هستن؛ خوشحالم که دارم باهاشون همکاری میکنمگاهی اوقات بوده که من هیچ سناریویی نداشتم، بهشون فقط ایده می‌دادم و نتیجه‌های خیلی خوبی برام درست میکردن."},
        // {id: "4", title: "خانم تام‌مدیا کلاب", instagram_id: "tamMediaClub", image: "Profile", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
    ]

    return(
        <motion.div
            className="h-dvh py-10 flex flex-col gap-23 font-yekan-bakh"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0 }}
        >
            <motion.div
                className="px-60"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
            >
                <TitleGlass title="نتیجه همکاری با" />
            </motion.div>
            <motion.div
                className="w-full flex"
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
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {tweets.map((tweet, index) => (
                        <SwiperSlide key={tweet.id}>
                            <motion.div
                                className="bg-white/20 mr-6 pr-8 pl-15 py-4 h-full rounded-[40px] space-y-4 border backdrop-blur-[20px] border-[#7C7C7C] leading-8"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <motion.img
                                            className='w-13 h-13 object-cover rounded-full'
                                            src={tweet.image === 'Profile' ? `/images/${tweet.image}.png` : `/images/${tweet.image}.JPG`}
                                            alt={tweet.title}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="text-lg font-bold">{tweet.title}</div>
                                    </div>
                                    <a href={`https://www.instagram.com/${tweet.instagram_id}`} target='_blank' dir='ltr' className='text-[#7C7C7C] hover:text-black transition-colors font-vazir-matn text-sm'>@{tweet.instagram_id}</a>
                                </div>
                                <div className="font-light">{tweet.description}</div>
                                <div className="flex gap-2">
                                    {tweet.badges && tweet.badges.map((badge, index) => (
                                        <a href={badge.link} target='_blank' dir='ltr' className="border border-[#D13926] even:border-[#0205B6] bg-[#D1392680] even:bg-[#0205B680] rounded-full text-xs px-5 py-2 hover:scale-110 shadow hover:shadow-lg transition-all duration-300">
                                            {badge.title}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
            <motion.div
                onClick={() => scrollTo('contact')}
                className="w-10 h-10 mt-auto mx-auto rotate-270 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer"
            >
                {'>'}
            </motion.div>
        </motion.div>
    )
}