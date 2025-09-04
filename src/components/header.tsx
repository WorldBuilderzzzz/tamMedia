const Header = () => {
    return(
        <div className="h-dvh w-dvw relative overflow-hidden">
            <div className="bg-[#DF3D28B2]/70 rounded-[100px] rotate-[-25deg] w-[400px] h-[400px] absolute -top-14 -right-22"></div>
            <div className="bg-blue-800/50 w-[400px] h-[400px] rounded-[100px] absolute -bottom-14 -left-22 rotate-[-25deg] "></div>
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[90px] inset-0 bg-black/10">
                <img src="/images/Frame 28.png" alt="background" className="absolute top-0 left-0 w-full h-full opacity-80 brightness-125" />
                <div className="absolute top-0 left-0 w-full h-full grid grid-rows-[1fr_auto] md:py-10 py-5 px-10">
                    <div className="flex items-center justify-center">
                        <img src="./images/Logo.svg" alt="logo" className="px-4 md:px-0" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-20">
                        <div className="flex items-center md:justify-around justify-between w-full font-yekan-bakh md:text-3xl text-2xl opacity-80">
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