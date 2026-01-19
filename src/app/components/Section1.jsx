import React from "react";
import { Icons } from "../../icons";
import { CheckCircle } from "lucide-react"; // Using Lucide for generic check icons if needed, but we have specific ones in design
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Chart = () => {
  // Coordinates converted to percentages for responsive scaling
  // Width: 1152, Height: 455

  const PositionedElement = ({ left, top, children, className }) => (
    <div
      className={`absolute ${className}`}
      style={{ left: `${(left / 1152) * 100}%`, top: `${(top / 455) * 100}%` }}
    >
      {children}
    </div>
  );

  const LooperGroup = () => (
    <div className="w-[30px] h-[30px] relative -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-[-30%]">
        <svg viewBox="0 0 49 49" fill="none" className="w-full h-full">
          <circle cx="24.5" cy="24.5" r="15.2" fill="#DCFCE7" opacity="0.5" />
          <circle cx="24.5" cy="24.5" r="10.1" fill="#00C950" />
        </svg>
      </div>
    </div>
  );

  const LabelPill = ({ text, active, color }) => (
    <div
      className={`
        px-4 py-2 md:px-6 md:py-3 rounded-full border text-xs md:text-sm whitespace-nowrap
        ${
          active
            ? `bg-[${color || "#7bf1a8"}] border-[#a1a1a1] text-[#0a0a0a]`
            : "bg-[#fafafa] border-[#d4d4d4] text-[#737373]"
        }
      `}
    >
      {text}
    </div>
  );

  return (
    <div className="relative w-full aspect-[1152/455] max-w-[1152px] mx-auto select-none">
      <img
        src="/public/section-graph.png"
        alt="Agentix Dashboard"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

const MobileTimeline = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm mx-auto h-fit">
      <div className="flex items-center gap-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
        FROM
      </div>

      <div className="bg-[#e5e5e5] rounded-full px-6 py-4 flex items-center justify-center font-medium text-gray-900 shadow-sm">
        Legacy Ops
      </div>

      <div className="flex justify-center text-gray-900">
        <Icons.ArrowDownLong className="w-6 h-6 rotate-90 md:rotate-0" />{" "}
        {/* Rotate 90 for down? No, original is down-ish */}
        {/* Actually use the simple arrow from the list */}
        <div className="w-[1px] h-8 bg-gray-300 my-1 relative">
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="bg-[#7bf1a8] rounded-full px-6 py-4 flex items-center justify-center font-medium text-gray-900 shadow-sm border border-[#a1a1a1]">
        Sovereign Deployment
      </div>

      <div className="flex flex-col gap-4 items-center pt-2">
        <div className="text-gray-500 text-base">Activated Knowledge</div>
        <div className="text-gray-500 text-base">HITL-Verified Scale</div>
        <div className="text-gray-500 text-base">AI-Native</div>
      </div>
    </div>
  );
};

const ControlBar = () => {
  return (
    <div className="hidden md:flex bg-[#fafafa] rounded-[24px] px-6 py-2 items-center justify-between w-full max-w-[1152px] mx-auto gap-4">
      <div className="font-inter font-semibold text-gray-500 uppercase text-sm shrink-0">
        FROM
      </div>
      <div className="bg-[#e5e5e5] px-6 py-3 rounded-full font-inter font-medium text-gray-900 text-sm whitespace-nowrap">
        Legacy Ops
      </div>
      <div className="w-6 h-4 text-black shrink-0">
        <Icons.ArrowDownLong className="w-full h-full -rotate-90 md:rotate-0" />
      </div>
      <div className="bg-[#7bf1a8] px-6 py-3 rounded-full font-inter font-medium text-gray-900 text-sm whitespace-nowrap">
        Sovereign Deployment
      </div>
      <div className="text-gray-500 text-sm font-inter">
        Activated Knowledge
      </div>
      <div className="text-gray-500 text-sm font-inter">
        HITL-Verified Scale
      </div>
      <div className="text-gray-500 text-sm font-inter">AI-Native</div>
    </div>
  );
};

const Card = ({
  title,
  bg,
  items,
  icon: IconComponent,
  iconBg,
  borderColor,
}) => (
  <div
    className={`${bg} rounded-[24px] p-6 md:p-8 flex flex-col justify-between min-h-[140px] md:h-full w-full`}
  >
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 h-full">
      <div className="font-inter font-light text-lg md:text-xl text-black max-w-sm leading-tight">
        {title}
      </div>
      <div
        className={`border ${borderColor} rounded-[10px] px-4 py-2 flex items-start gap-3 w-full md:w-auto max-w-md`}
        style={{ backgroundColor: iconBg }}
      >
        <div className="shrink-0 mt-0.5 h-full">
          <IconComponent className="w-4 h-4 text-[#007a55]" />
        </div>
        <span className="text-[#007a55] text-xs md:text-sm font-medium font-['Space_Grotesk',sans-serif]">
          {items}
        </span>
      </div>
    </div>
  </div>
);

export function Section1() {
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
    <section className="bg-white px-4 py-12 md:px-12 md:py-24 overflow-hidden">
      <div className="max-w-[1152px] mx-auto flex flex-col items-center gap-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="effectup text-4xl md:text-5xl lg:text-6xl font-normal text-[#0a0a0a] leading-tight">
            We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e40879] via-[#bf2eb9] to-[#9c19f4]">
              Transform Organizations
            </span>{" "}
            Into AI-Native Market Leaders, from a legacy cost-center to a
            profit-engine.
          </h2>
          <p className="effectup font-inter font-extralight text-base md:text-lg text-[#1d293d] max-w-2xl mx-auto leading-relaxed">
            Our AI is precise. If uncertainty{" "}
            <span className="text-[#262626]">arises</span>, our experts step in,
            ensuring accuracy before your customer interaction.
          </p>
        </div>

        {/* Chart Section */}
        <div className="w-full flex flex-col-reverse">
          {/* Mobile View */}
          <div className="md:hidden">
            <MobileTimeline />
          </div>

          {/* Desktop View */}
          <div className=" w-full">
            <Chart />
          </div>
        </div>

        {/* Control Bar (Desktop Only) */}
        <ControlBar />

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <Card
            bg="bg-[#e5e5e5]"
            title="Manual workflows tied to linear headcount growth."
            icon={Icons.CheckCircle}
            iconBg="#ecfdf5"
            borderColor="border-[#d0fae5]"
            items="High operational drag and capped profit margins. Sovereign Deployment"
          />
          <Card
            bg="bg-[#7bf1a8]"
            title="Private, domain-specific SLMs deployed within your infrastructure."
            icon={Icons.CheckCircle}
            iconBg="#ecfdf5"
            borderColor="border-[#d0fae5]"
            items="Lower OpEx and elimination of data-leakage risks"
          />
        </div>
      </div>
    </section>
  );
}
