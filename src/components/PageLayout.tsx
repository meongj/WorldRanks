import {ReactNode} from "react";
import {HeroSection} from "./HeroSection";

interface Props {
  children: ReactNode;
}

export function PageLayout({children}: Props) {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="bg-[#1C1D1F]">
        <div className=" border border-[#282B30] bg-[#1C1D1F] p-6">
          <div className="relative -mt-12 mx-auto max-w-[1100px] px-4 pb-8">
            <div className="rounded-xl border border-[#282B30] bg-[#1C1D1F] p-6">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
