interface TitleGlassProps {
    src: string;
}
export default function TitleGlass({ src } : TitleGlassProps) {
    return(
        <div className="mx-auto w-fit px-19 py-10 rounded-[50px] bg-[#002FFF05]/10 border border-white/30 text-black backdrop-blur-[20px] text-[50px] font-bold scale-90">
            <img src="/images/media.svg" alt="titleGlass" className="inline-block mr-6" style={{
                filter: "drop-shadow(0 0 30px rgba(223, 61, 40, 0.5))",
            }} />
            <img src="/images/tam.svg" alt="titleGlass" className="inline-block mr-6" style={{
                filter: "drop-shadow(0 0 30px rgba(2, 5, 182, 0.5))",
            }} />
            <img src={src} alt="titleGlass" className="inline-block" style={{
                filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
            }} />
        </div>
    )
}