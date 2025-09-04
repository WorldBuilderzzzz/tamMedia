const Header = () => {
    return(
        <div className="h-dvh w-dvw relative overflow-hidden">
            <div className="bg-[#DF3D28B2]/70 rounded-[500px] rotate-[-25deg] w-[400px] h-[400px] absolute -top-14 -right-22 opacity-90"></div>
            <div className="bg-blue-800/50 w-[400px] h-[400px] rounded-[500px] absolute -bottom-14 -left-22 rotate-[-25deg] opacity-90 "></div>
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[90px] inset-0">
                <div className="bg-[url('/backgrounds/Frame 28.svg')] w-full h-full"></div>
            </div>
        </div>
    )
}
export default Header;