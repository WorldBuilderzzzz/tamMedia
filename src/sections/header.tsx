"use client";
const Header = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return(
        <div className="grid grid-rows-[1fr_auto] md:py-5 py-5 px-10 h-dvh">
            <div className="flex flex-col md:gap-10 gap-5 items-center justify-center">
                <img src="/images/logo.svg" alt="logo" className="px-4 md:px-0 w-[400px] md:w-[550px]" />
                <img src="/images/tamMedia.svg" alt="tamMedia" className="px-4 md:px-0 w-[250px] md:w-[350px] scale-150" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center md:justify-around gap-40 font-yekan-bakh md:text-xl text-[16px] bg-[#002FFF05] backdrop-blur-[20px] px-18 py-7 rounded-full">
                    <button onClick={() => scrollTo('tweets')} className="focus:outline-none cursor-pointer">خدمات ما</button>
                    <button onClick={() => scrollTo('tweets')} className="focus:outline-none cursor-pointer">نتیجه ها</button>
                    <button onClick={() => scrollTo('contact')} className="focus:outline-none cursor-pointer">ارتباط با ما</button>
                </div>
                <div onClick={() => scrollTo('tweets')} className="rotate-270 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer">{'>'}</div>
            </div>
        </div>
    )
}
export default Header;