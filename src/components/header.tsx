const Header = () => {
    return(
        <div className="h-dvh w-dvw relative overflow-hidden">
            <div className="bg-red-600/70 rounded-[500px] rotate-[-25deg] opacity-80 w-60 h-60 absolute -top-10 -right-10"></div>
            <div className="bg-blue-800/70 w-60 h-60 rounded-[500px] absolute -bottom-10 -left-10 rotate-[-25deg] opacity-80 "></div>
            <div className="bg-white/10 backdrop-blur-3xl w-full h-full !z-40 relative"></div>
        </div>
    )
}
export default Header;