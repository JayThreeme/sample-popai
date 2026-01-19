import React from "react";
import { Icons } from "../../icons";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DocumentCard = ({ icon: Icon, title, isFirst }) => (
  <div className="relative group">
    <div
      className={`
      relative z-10 bg-[#262626] border border-[#404040] rounded-xl p-4 
      flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]
      ${isFirst ? "shadow-lg shadow-black/20" : ""}
    `}
    >
      <div className="w-10 h-12 shrink-0">
        <Icon className="w-full h-full" />
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C950]" />
          <span className="text-gray-200 font-inter text-sm font-medium">
            {title}
          </span>
        </div>

        {/* Skeleton Lines */}
        <div className="space-y-1.5">
          <div className="h-1.5 bg-[#404040] rounded-full w-full" />
          <div className="h-1.5 bg-[#404040] rounded-full w-3/4" />
        </div>
      </div>
    </div>
  </div>
);

export function HeroSection() {
  useGSAP(() => {
    // Create a context for this component
    const ctx = gsap.context(() => {
      // Select all effectup elements
      const elements = gsap.utils.toArray(".effectup");

      elements.forEach((element) => {
        gsap.set(element, { y: 40, opacity: 0 });

        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 45%",
            toggleActions: "play reverse play reverse",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup
  });

  return (
    <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-24 px-4 md:px-12 overflow-hidden">
      <div className="max-w-[1152px] mx-auto flex flex-col items-center gap-16 md:gap-24">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="effectup font-satoshi font-normal text-5xl md:text-7xl  tracking-tight text-[#0a0a0a] leading-[1.1]">
            Sovereign{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e40879] via-[#bf2eb9] to-[#9c19f4]">
              Intelligence.
            </span>
            <br />
            Engineered for P&L Impact
          </h1>

          <p className="effectup font-inter font-extralight text-lg md:text-xl text-[#262626] leading-relaxed max-w-3xl mx-auto">
            Deploy full-stack AI agents built on proprietary foundational models
            and scaled by human-in-the-loop integrity layer. Your data, your
            models, our results.
          </p>

          <div className="effectup flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-inter text-base hover:bg-neutral-700 transition-colors cursor-pointer w-full sm:w-auto">
              Request a Demo
            </button>
            <button className=" flex items-center justify-center gap-2 text-[#0a0a0a] px-8 py-4 rounded-full font-inter text-base hover:text-neutral-700 transition-colors cursor-pointer w-full sm:w-auto">
              More Information
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-6 w-full max-w-6xl">
          {/* Left Card: Document Processing */}
          <div className="bg-[#171717] rounded-[32px] p-8 md:p-12 flex flex-col justify-center min-h-[400px] md:h-[400px] relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <video
              src="/hero-video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* <div className="flex flex-col gap-4 relative z-10 max-w-md mx-auto w-full">
                <DocumentCard icon={Icons.HeroEmail} title="Customer email" isFirst={true} />
                <DocumentCard icon={Icons.HeroForm} title="Booking form" />
                <DocumentCard icon={Icons.HeroReceipt} title="Handwritten receipt" />
                <DocumentCard icon={Icons.HeroPDF} title="Scanned PDF" />
             </div> */}
          </div>

          {/* Right Card: Workforce Video */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[400px] md:h-[400px] group">
            <video
              src="/hero-video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white">
              <h3 className="font-inter text-lg md:text-3xl font-normal mb-2">
                Empower your workforce
              </h3>
              <p className="font-inter text-gray-300 font-extralight text-base md:text-lg">
                AI that works alongside your team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
