import React from "react";
import svgPaths from "../../imports/svg-8kb4zklx3n";

export function Newsletter() {
  return (
    <div className="bg-[#0a0a0a] pt-16 pb-4 px-6 md:px-12 border-t border-[#1a1a1a]">
      <div className="max-w-[1152px] mx-auto">
        {/* Row layout */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-20">
          {/* Left: Copy */}
          <div className="flex flex-col gap-4 w-md md:w-full">
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight text-center md:text-left">
              Stay ahead of the AI curve.
            </h2>
            <p className="text-[#b5b5b5] text-base md:text-base font-extralight text-center md:text-left">
              Weekly insights, case studies, and experiments from PopAI —
              helping brands turn artificial intelligence into real growth.
            </p>
          </div>

          {/* Right: Form Card */}
          <div className="w-ful bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl p-8 md:p-10 flex flex-col gap-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <h3 className="text-xl md:text-2xl font-medium text-white">
              Join 3,000+ builders & marketers
            </h3>
            <p className="text-[#9a9a9a] text-sm md:text-base">
              No spam. One high-signal email per week.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-[#6a6a6a] focus:outline-none focus:border-white transition"
              />
              <button
                type="submit"
                className="bg-white text-black rounded-xl px-6 py-3 font-medium hover:bg-[#e5e5e5] transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <span className="text-xs text-[#6a6a6a]">
              By subscribing, you agree to receive emails from PopAI.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
