import TitleGlass from "@/components/titleGlass";
export default function Contact() {
    return(
        <div className="h-dvh py-10 px-80 flex flex-col justify-betwee gap-18">
            <TitleGlass title="ارتباط با" />
            <div dir="rtl" className="flex-1 text-justify font-medium font-yekan-bakh text-[23px] text-black/80 leading-12">
            تام‌مدیا فقط یک آژانس بازاریابی و برندینــگ نیست؛ بلکه یک نیروی خــــــلــــاق است که بـــــرنـــدها را به‌عنوان موجــودیت‌هایی زنده و پویا می‌بیند. ما روح بـــــرنـــــــد شما را کشف کرده و آن را از طـــریق تصاویر بصـــــری جذاب، استراتـژی‌های هوشمندانه و کمپین‌های تأثیرگذار به زندگـــــی می‌آوریم. با الهام از داســـــتـــــان‌هـــــا و آرزوهــــای شما، مـــــا تجـــــربه‌هایی خـــلـــــق می‌کنیم که دیده می‌شوند، احساس می‌شوند و فراموش‌نشدنی هستند.
            </div>
            <div className="w-full flex items-center justify-between font-yekan-bakh md:text-xl text-[16px] border border-white/30 bg-[#002FFF05] backdrop-blur-[30px] px-18 py-7 rounded-full">
                <div>اینستاگرام</div>
                <div>تلگرام</div>
                <div>ایمیل</div>
                <div>تماس</div>
            </div>
        </div>
    )
}