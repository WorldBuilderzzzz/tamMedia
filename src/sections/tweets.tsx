"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import TitleGlass from "@/components/titleGlass";

export default function Tweets () {

    const tweets: {id: string, title: string, firstBadge?: string, secondBadge?: string, instagram_id: string, image: string, description: string,}[] = [
        {id: "1", title: "خانم تام‌مدیانژاد", instagram_id: "tamMediaNezhad", image: "Profile",  description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "2", title: "خانم تام‌مدیا کلاب", instagram_id: "tamMediaClub", image: "Profile", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "3", title: "خانم تام‌مدیانژاد", instagram_id: "tamMediaNezhad", firstBadge: 'کمپین یلدا', secondBadge: '+ 3 میلیون', image: "Profile", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "4", title: "خانم تام‌مدیا کلاب", instagram_id: "tamMediaClub", image: "Profile", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
    ]
    
    return(
        <div className="h-dvh py-10 flex flex-col gap-40 font-yekan-bakh">
            <div className="px-60">
                <TitleGlass title="نتیجه همکاری با" />
            </div>
            <div className="w-full flex">
                <Swiper
                    className="flex-1"
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={2.6}
                    spaceBetween={0}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {tweets.map((tweet) => (
                        <SwiperSlide key={tweet.id}>
                            <div className="bg-white/20 mr-6 pr-8 pl-15 py-4 h-full rounded-[40px] space-y-4 border backdrop-blur-[20px] border-[#7C7C7C] leading-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <img className='w-13 h-13 object-cover' src={`/images/${tweet.image}.png`} alt={tweet.title}/>
                                        <div className="text-lg font-bold">{tweet.title}</div>
                                    </div>
                                    <div dir='ltr' className='text-[#7C7C7C] font-vazir-matn text-sm'>@{tweet.instagram_id}</div>
                                </div>
                                <div className="font-light">{tweet.description}</div>
                                <div className="flex gap-2">
                                    {tweet.firstBadge && <div className="border border-[#D13926] bg-[#D1392680] rounded-full text-xs px-5 py-2">{tweet.firstBadge}</div>}
                                    {tweet.secondBadge && <div className="border border-[#0205B6] bg-[#0205B680] rounded-full text-xs px-5 py-2">{tweet.secondBadge}</div>}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}