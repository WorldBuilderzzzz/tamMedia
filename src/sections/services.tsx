import TitleGlass from "@/components/titleGlass";
import { ArrowLeft, Plus } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type serviceType = 'service' | 'guide' | 'consultation' | 'packages'

type PackageType = {
    name: string;
    features: string[];
    outputs: string[];
}

const serviceMap: Record<serviceType, string> = {
    "service": "خـــدمـــــــات",
    "guide": "آمـــــــوزش",
    "consultation": "مـــــشــــاوره",
    "packages": "پکیج‌ها"
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
    ],
    "packages": []
}

const packagesData: PackageType[] = [
    {
        name: "Basic package",
        features: [
            "گزارش آنالیز کامل پیج",
            "طراحی تقویم محتوایی و برنامه‌ریزی",
            "طراحی کاور ریلزها و پست‌ها",
            "کپشن‌نویسی تخصصی",
            "تدوین و ادیت عکس و فیلم‌ها",
            "۲ روز کامل تولید محتوا حضوری با تجهیزات حرفه‌ای"
        ],
        outputs: [
            "۵ ریلز",
            "۲ پست اسلایدی"
        ]
    },
    {
        name: "Classic package",
        features: [
            "آنالیز تخصصی پیج و کسب‌و‌کار شما",
            "طراحی تقویم محتوایی و برنامه‌ریزی",
            "سناریونویسی محتوا و استوری به سبک برند شما",
            "طراحی کاور و گرافیک اختصاصی ریلز‌ها و پست‌ها",
            "کپشن نویسی تخصصی",
            "طراحی استوری روزانه",
            "تدوین و ادیت عکس و فیلم‌ها",
            "۴ روز کامل تولید محتوا حضوری با تجهیزات حرفه‌ای"
        ],
        outputs: [
            "۸ ریلز",
            "۳ پست اسلایدی",
            "روزانه بین ۲ تا ۵ عدد استوری"
        ]
    },
    {
        name: "Premium package",
        features: [
            "آنالیز تخصصی پیج و کسب‌و‌کار شما",
            "اجرای اقدامات اصلاحی بایو، پروفایل و هایلایت‌ها",
            "تحلیل و بررسی رقبا",
            "طراحی تقویم محتوایی و برنامه‌ریزی",
            "مدیریت پیج طبق الگوریتم اینستاگرام",
            "مدیریت کامنت‌ها و دایرکت‌ها",
            "بالا بردن تعامل پیج",
            "سناریونویسی محتوا و استوری به سبک برند شما",
            "طراحی کاور و گرافیک اختصاصی ریلز‌ها و پست‌ها",
            "کپشن نویسی تخصصی و آپلود محتوا",
            "طراحی استوری روزانه",
            "تدوین و ادیت عکس و فیلم‌ها",
            "مشاوره و طراحی و اجرای فرآیند تولیدمحتوا با ترکیب حضوری و آنلاین به صورت ۴ روز حضوری با تجهیزات حرفه‌ای",
            "طراحی کمپین‌ها و پلن‌های مناسبتی",
            "طراحی بنر‌های گرافیکی",
            "تحلیل و گزارش‌دهی ماهانه عملکرد پیج"
        ],
        outputs: [
            "۱۲ ریلز",
            "۴ پست اسلایدی",
            "روزانه بین ۳ تا ۵ عدد استوری"
        ]
    }
]

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Services() {
    const [service, setService] = useState<serviceType | null>(null)
    const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

    
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
                className="flex flex-col justify-between h-full gap-5 overflow-y-hidden"
            >
                <div className="px-6 md:px-50">
                    <TitleGlass title="سرویس های" />
                </div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full bg-[#193FE905] backdrop-blur-[20px] rounded-[80px] md:rounded-3xl py-5 px-2 md:px-14 font-yekan-bakh">
                    <AnimatePresence mode="wait">
                        {service == null ? (
                            <motion.div 
                                key="services-list"
                                className="flex flex-col gap-4 justify-around items-center h-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="flex gap-1 hover:opacity-80 transition-opacity md:gap-5 text-4xl w-full justify-center md:justify-start">
                                    <div className="md:flex-1 text-left">
                                        <Plus onClick={() => setService('service')} className="mr-auto cursor-pointer"/>
                                    </div>
                                    <motion.span 
                                        layout="position"
                                        layoutId="service-title"
                                        onClick={() => setService('service')}
                                        className="md:flex-1 text-right font-semibold" 
                                    >
                                        <span className="cursor-pointer">
                                            خـــدمـــــــات
                                        </span>
                                    </motion.span>
                                </div>
                                <div className="flex gap-1 hover:opacity-80 transition-opacity md:gap-5 text-4xl w-full justify-center md:justify-start">
                                    <div className="md:flex-1 text-left">
                                        <Plus onClick={() => {
                                            setService('packages')
                                            setSelectedPackage(null)
                                        }} className="cursor-pointe mr-auto text-[#DF3D28]"/>
                                    </div>
                                    <motion.span 
                                        layout="position"
                                        layoutId="packages-title"
                                        onClick={() => {
                                            setService('packages')
                                            setSelectedPackage(null)
                                        }}
                                        className="md:flex-1 text-right font-semibold" 
                                    >
                                        <span className="cursor-pointer">
                                            پکیـــج‌ها
                                        </span>
                                    </motion.span>
                                </div>
                                <div className="flex gap-1 hover:opacity-80 transition-opacity md:gap-5 text-4xl w-full justify-center md:justify-start">
                                    <div className="md:flex-1 text-left">
                                        <Plus onClick={() => setService('consultation')} className="cursor-pointe mr-auto"/>
                                    </div>
                                    <motion.span 
                                        layout="position"
                                        layoutId="consultation-title"
                                        onClick={() => setService('consultation')}
                                        className="md:flex-1 text-right font-semibold" 
                                    >
                                        <span className="cursor-pointer">
                                            مـــــشــــاوره
                                        </span>
                                    </motion.span>
                                </div>
                                <div className="flex gap-1 hover:opacity-80 transition-opacity md:gap-5 text-4xl w-full justify-center md:justify-start">
                                    <div className="md:flex-1 text-left">
                                        <Plus onClick={() => setService('guide')} className="cursor-pointe mr-auto text-[#0205B6]"/>
                                    </div>
                                    <motion.span 
                                        layout="position"
                                        layoutId="guide-title"
                                        onClick={() => setService('guide')}
                                        className="md:flex-1 text-right font-semibold" 
                                    >
                                        <span className="cursor-pointer">
                                            آمـــــــوزش
                                        </span>
                                    </motion.span>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="service-detail"
                                className="flex flex-col h-full min-h-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="flex justify-between items-center flex-shrink-0">
                                    <motion.span 
                                        layout="position"
                                        layoutId={
                                            service === 'packages' && selectedPackage === null
                                                ? 'packages-title'
                                                : service !== 'packages'
                                                ? `${service}-title`
                                                : undefined
                                        }
                                        className={`font-semibold ${
                                            service === 'packages' && selectedPackage !== null 
                                                ? 'text-4xl text-right' 
                                                : 'text-[45px] mx-auto md:mx-0'
                                        }`}
                                    >
                                        {service === 'packages' && selectedPackage !== null 
                                            ? packagesData[selectedPackage].name 
                                            : serviceMap[service]}
                                    </motion.span>
                                    <div className="hidden md:flex items-center gap-4 hover:text-black/70 transition-colors cursor-pointer" onClick={() => {
                                        if (service === 'packages' && selectedPackage !== null) {
                                            setSelectedPackage(null)
                                        } else {
                                            setService(null)
                                            setSelectedPackage(null)
                                        }
                                    }}>
                                        <span className="text-[25px] cursor-pointer">
                                            {service === 'packages' && selectedPackage !== null ? 'پکیج‌ها' : 'سرویس ها'}
                                        </span>
                                        <img src="/images/arrow.svg" alt="arrow icon" className="w-8 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="flex-1 mt-10 overflow-y-auto min-h-0">
                                    {service === 'packages' ? (
                                        <AnimatePresence mode="wait">
                                            {selectedPackage === null ? (
                                                <motion.div 
                                                    key="packages-list"
                                                    className="flex flex-col gap-4 justify-around items-center h-full"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    {packagesData.map((pkg, pkgIndex) => (
                                                        <div 
                                                            key={pkgIndex} 
                                                            className="flex gap-1 hover:opacity-80 transition-opacity md:gap-5 text-4xl w-full justify-center md:justify-start cursor-pointer"
                                                            onClick={() => setSelectedPackage(pkgIndex)}
                                                        >
                                                            <div className="md:flex-1 text-left">
                                                                <Plus className="mr-auto text-[#DF3D28]"/>
                                                            </div>
                                                            <span className="md:flex-1 text-right font-semibold">
                                                                {pkg.name}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            ) : (
                                                <motion.div 
                                                    key={`package-detail-${selectedPackage}`}
                                                    className="flex gap-4 justify-between"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                <div className="flex flex-col gap-2">
                                                    {packagesData[selectedPackage].features.map((feature, featureIndex) => (
                                                        <div key={featureIndex} className="flex items-start gap-2 text-sm md:text-2xl opacity-75 font-medium leading-10">
                                                            <span className="w-2 h-2 bg-black rounded-full inline-block mt-2 flex-shrink-0"></span>
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4 flex flex-col gap-2 text-right items-start">
                                                    <div className="text-base md:text-2xl font-semibold opacity-90 mb-2 text-right">تعداد خروجی‌ها:</div>
                                                    <div className="flex flex-col gap-2">
                                                        {packagesData[selectedPackage].outputs.map((output, outputIndex) => (
                                                            <div key={outputIndex} className="flex items-center gap-2 text-sm md:text-2xl opacity-75 font-medium leading-10">
                                                                <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                                                                <span>{output}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                            )}
                                        </AnimatePresence>
                                    ) : service && (
                                        servicesItems[service].map((item, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm md:text-2xl opacity-75 font-medium leading-10">
                                                <span className="w-2 h-2 bg-black rounded-full inline-block"></span>
                                                <span>{item}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="flex md:hidden items-center justify-center gap-2 hover:text-black/70 transition-colors cursor-pointer flex-shrink-0" onClick={() => {
                                    if (service === 'packages' && selectedPackage !== null) {
                                        setSelectedPackage(null)
                                    } else {
                                        setService(null)
                                        setSelectedPackage(null)
                                    }
                                }}>
                                    <span className="cursor-pointer">
                                        {service === 'packages' && selectedPackage !== null ? 'پکیج‌ها' : 'سرویس ها'}
                                    </span>
                                    <img src="/images/arrow.svg" alt="arrow icon" className="w-4 cursor-pointer" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
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