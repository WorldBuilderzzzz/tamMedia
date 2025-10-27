import Header from "@/sections/header";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <div className="h-dvh w-dvw relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-black/10">
          <img src="/images/noise.png" alt="background" className="absolute top-0 left-0 w-full h-full opacity-50" />
          <img src="/images/redEllipse.svg" alt="redEllipse" className="absolute -top-10 -left-10" />
          <img src="/images/blueEllipse.svg" alt="blueEllipse" className="absolute -bottom-10 -right-10" />
          <div dir="ltr" className="overflow-y-auto scroll-smooth h-full absolute top-0 left-0 w-full">
            <div dir="rtl">
              <Header />
              <Contact />
            </div>
          </div>
        </div>
    </div>
  );
}
