const Header = () => {
    return(
        <div className="h-dvh w-dvw relative overflow-hidden">
            <div className="bg-[#DF3D28B2]/70 rounded-[100px] rotate-[-25deg] w-[400px] h-[400px] absolute md:-top-14 md:-right-22 -right-60 -top-52"></div>
            <div className="bg-blue-800/50 w-[400px] h-[400px] rounded-[100px] absolute rotate-[-25deg] md:-bottom-14 md:-left-22 -bottom-60 -left-52 "></div>
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[90px] inset-0 bg-black/10">
                <img src="/images/noise.png" alt="background" className="absolute top-0 left-0 w-full h-full opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full grid grid-rows-[1fr_auto] md:py-5 py-5 px-10">
                    <div className="flex flex-col md:gap-10 gap-5 items-center justify-center">
                        <img src="/images/logo.svg" alt="logo" className="px-4 md:px-0 w-[400px] md:w-[550px]" />
                        <img src="/images/tamMedia.svg" alt="tamMedia" className="px-4 md:px-0 w-[250px] md:w-[350px]" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-15">
                        <div className="flex items-center md:justify-around justify-between w-full font-yekan-bakh md:text-2xl text-[16px] opacity-80">
                            <div>ارتباط با ما</div>
                            <div>پروژه‌ها</div>
                            <div>خدمات ما</div>
                        </div>
                        <div className="rotate-90 text-4xl font-bold text-black font-anonymous-pro opacity-80 cursor-pointer">{'>'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;