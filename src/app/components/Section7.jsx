import React, { useEffect, useRef, useState } from "react";
import { Icons } from "../../icons";

export function Section7() {
  const sectionRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // section scroll progress (0 → 1)
      const p = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1,
      );

      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax distances (tweak freely)
  const backOffset = 130 * (1 - progress); // slow
  const frontOffset = 150 * (1 - progress); // faster
  const textOffset = -200 * (1 - progress); // medium

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] md:min-h-screen overflow-hidden bg-gradient-to-b from-[rgba(10,10,10,0)] from-[46.63%] to-[#0A0A0A] h-full w-full"
    >
      {/* BACK IMAGE */}
      <div className="absolute inset-0 pointer-events-none z-10 -top-32 ">
        <img
          src="/bg-back.png"
          alt="City skyline background"
          className="w-full h-full object-cover object-top will-change-transform"
          style={{
            transform: `translate3d(0, ${backOffset}px, 0) scale(${1 + 0.3 * progress})`,
          }}
        />
      </div>

      {/* FRONT IMAGE */}
      <div className="absolute inset-0 pointer-events-none z-30 ">
        <img
          src="/bg-front.png"
          alt="City skyline foreground"
          className="w-full h-full object-cover object-top will-change-transform"
          style={{
            transform: `translate3d(0, ${frontOffset}px, 0)`,
          }}
        />
      </div>

      {/* POPAI TEXT */}
      <div className="absolute top-0 inset-0 pointer-events-none z-20 flex items-center justify-center ">
        <h2
          className="
            text-white
            text-auto
            md:text-[340px]
            font-bold
            text-center
            w-full
            mix-blend-soft-light
            opacity-60
            blur-[0.5px]
            leading-none
            select-none
            will-change-transform
            -mt-100
           hidden md:block
          "
          style={{
            transform: `translate3d(0, ${textOffset}px, 0)`,
          }}
        >
          POPAI
        </h2>
      </div>

      <div className="absolute inset-0 z-35 bg-[linear-gradient(180deg,rgba(10,10,10,0)_46.63%,#0A0A0A_100%)] pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-40 flex flex-col items-center text-center px-6 max-w-[900px] mx-auto gap-8 md:gap-12 min-h-[600px] md:min-h-screen justify-end pb-40">
        <div className="flex flex-col gap-4 md:gap-6 items-center">
          <h2 className="font-medium text-4xl md:text-6xl text-[#fafafa] leading-tight">
            Ready to put AI to work?
          </h2>
          <p className="font-light text-[#e5e5e5] text-base md:text-lg max-w-[522px] leading-relaxed">
            Join enterprise teams who trust Pop! AI for mission-critical
            automation with human-verified accuracy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <button className="bg-[#fafafa] text-[#0a0a0a] rounded-full px-8 py-4 h-14 min-w-[200px] hover:bg-white/90 transition-colors">
            Request a Demo
          </button>

          <button className="text-[#fafafa] rounded-full px-8 py-4 h-14 min-w-[200px] flex items-center gap-2 group hover:text-white/80 transition-colors">
            View Case Studies
            <Icons.ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
