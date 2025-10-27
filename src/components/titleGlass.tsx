interface TitleGlassProps {
    title: string;
}
export default function TitleGlass({ title } : TitleGlassProps) {
    return(
        <div className="w-full flex items-center justify-center gap-5 text-[70px] font-yekan-bakh py-1 rounded-[40px] bg-[#002FFF05]/10 border border-white/30 text-black backdrop-blur-[20px] font-bold">
            <span style={{filter: "drop-shadow(0 0 30px rgba(0, 0, 0, 0.7))"}}>{title}</span>
            <span className="text-[#0205B6]" style={{filter: "drop-shadow(0 0 30px rgba(2, 5, 182, 0.5))"}}>تـــــام</span>
            <span className="text-[#DF3D28]" style={{filter: "drop-shadow(0 0 30px rgba(223, 61, 40, 0.5))"}}>مدیــا</span>
        </div>
    )
}