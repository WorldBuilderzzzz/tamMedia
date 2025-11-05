import Header from "@/sections/header";
import Contact from "@/sections/contact";
import Tweets from "@/sections/tweets";

const radiusShape = '60% 40% 0% 100% / 52% 100% 0% 48%'

export default function Home() {
  return (
    <div className="h-dvh w-dvw relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-black/10">
          <img src="/images/noise.png" alt="background" className="absolute top-0 left-0 w-full h-full opacity-50" />
          <div className="absolute -top-10 -left-10 w-[300px] h-[300px] scale-200 bg-[#DF3D28] rotate-[140deg]" style={{borderRadius: radiusShape,
                rotate: '207deg',
                top: '-250px',
                left: '-40px',
          }}></div>
          <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] scale-200 bg-[#0205AD]" style={{borderRadius: radiusShape,
                rotate: '14deg',
                bottom: '-217px',
                right: '16px',
          }}></div>
          <div dir="ltr" className="overflow-y-auto scroll-smooth h-full absolute top-0 left-0 w-full">
            <div dir="rtl">
              <Header />
              <Tweets />
              <Contact />
            </div>
          </div>
        </div>
    </div>
  );
}
