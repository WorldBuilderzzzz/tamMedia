"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import TitleGlass from "@/components/titleGlass";

export default function Tweets () {

    const tweets: {id: string, title: string, description: string, instagram_id: string, image: string}[] = [
        {id: "1", title: "خانم تام‌مدیانژاد", "instagram_id": "tamMediaNezhad", image: "/images/tweet1.jpg",  description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "2", title: "خانم تام‌مدیا کلاب", "instagram_id": "tamMediaClub", image: "/images/tweet2.jpg", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "3", title: "خانم تام‌مدیانژاد", "instagram_id": "tamMediaNezhad", image: "/images/tweet3.jpg", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
        {id: "4", title: "خانم تام‌مدیا کلاب", "instagram_id": "tamMediaClub", image: "/images/tweet4.jpg", description: "همکاری با تام مدیا در پروژه تولید محتوا تجربه‌ای بسیار حرفه‌ای و رضایت‌بخش بود. تیم خلاق و متعهد تام مدیا با درک دقیق نیازهای ما، محتوایی باکیفیت و اثرگذار تولید کرد که کاملاً با اهداف پروژه هم‌راستا بود. مدیریت قوی، تحویل به‌موقع و توجه به جزئیات از ویژگی‌های برجسته این همکاری بود. بدون شک، تام مدیا انتخابی مطمئن برای پروژه‌های آینده ماست!"},
    ]
    
    return(
        <div className="h-dvh py-10 flex flex-col justify-between gap-18">
            <div className="px-60">
                <TitleGlass title="نتیجه همکاری با" />
            </div>
            <div className="w-full flex">
                <Swiper
                    className="flex-1"
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {tweets.map((tweet) => (
                        <SwiperSlide key={tweet.id}>
                            <div className="">
                                <div>
                                    <div>
                                        <img src={tweet.image} alt={tweet.title} className="w-full h-full object-cover" />
                                        <div>{tweet.title}</div>
                                    </div>
                                    <div>@{tweet.instagram_id}</div>
                                </div>
                                <div>{tweet.description}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}