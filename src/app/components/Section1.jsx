import React, { useState, useEffect } from "react";
import { Icons } from "../../icons";
import { CheckCircle } from "lucide-react"; // Using Lucide for generic check icons if needed, but we have specific ones in design
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import chart from "/section-graph.png";

// Vertical Timeline Component for Chart overlay
const VerticalTimeline = ({ currentState, setCurrentState, isPaused, setIsPaused }) => {
  const getButtonStyle = (itemIndex) => {
    const styles = {
      green: "bg-[#7bf1a8] text-green-950 scale-125",//border border-[#a1a1a1]
      gray: "bg-[#e5e5e5] text-neutral-400",
      transparent: "bg-neutral-50 text-neutral-300",
    };

    const buttonStateMap = [
      { greenState: null, grayState: 0 },
      { greenState: 0, grayState: 1 },
      { greenState: 1, grayState: 2 },
      { greenState: 2, grayState: 3 },
      { greenState: 3, grayState: null },
    ];

    const buttonConfig = buttonStateMap[itemIndex];
    if (!buttonConfig) return styles.transparent;

    if (currentState === buttonConfig.greenState) {
      return styles.green;
    }
    if (currentState === buttonConfig.grayState) {
      return styles.gray;
    }
    return styles.transparent;
  };

  const handleButtonClick = (itemIndex) => {
    let targetState = 0;
    if (itemIndex === 0) {
      targetState = 0;
    } else if (itemIndex === 1) {
      targetState = 0;
    } else if (itemIndex === 2) {
      targetState = 1;
    } else if (itemIndex === 3) {
      targetState = 2;
    } else if (itemIndex === 4) {
      targetState = 3;
    }

    if (setCurrentState) {
      setCurrentState(targetState);
    }
    if (setIsPaused) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };

  const timelineItems = [
    "Legacy Ops",
    "Sovereign Deployment",
    "Activated Knowledge",
    "HITL-Verified Scale",
    "AI-Native",
  ];

  // Check if button is in active (green) state
  const isButtonActive = (itemIndex) => {
    const buttonStateMap = [
      { greenState: null, grayState: 0 },
      { greenState: 0, grayState: 1 },
      { greenState: 1, grayState: 2 },
      { greenState: 2, grayState: 3 },
      { greenState: 3, grayState: null },
    ];
    const buttonConfig = buttonStateMap[itemIndex];
    return buttonConfig && currentState === buttonConfig.greenState;
  };

  // Position along the curve in ladder pattern (bottom-left to top-right)
  const buttonPositions = [
    { bottom: "10%", left: "10%" },      // Legacy Ops - bottom-left
    { bottom: "25%", left: "30%" },     // Sovereign Deployment
    { bottom: "40%", left: "50%" },     // Activated Knowledge
    { bottom: "55%", left: "70%" },     // HITL-Verified Scale
    { bottom: "70%", left: "90%" },     // AI-Native - top-right
  ];

  // Calculate circle positions for SVG path
  // Circles are positioned 2rem (32px) above buttons
  // Using percentage-based coordinates where viewBox is 0 0 100 100
  const getCirclePosition = (index) => {
    const left = parseFloat(buttonPositions[index].left);
    const bottom = parseFloat(buttonPositions[index].bottom);
    // Circle is approximately 2rem above button (roughly 3-4% of container height)
    const circleY = 93 - bottom - 3.5; // Convert bottom to y, adjust for circle offset
    return { x: left, y: circleY };
  };

  // Create smooth curve path connecting all circles
  const createPath = () => {
    const points = buttonPositions.map((_, index) => getCirclePosition(index));

    if (points.length < 2) return "";

    // Start with first point
    let path = `M ${points[0].x} ${points[0].y}`;

    // Use smooth quadratic bezier curves
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      // Control point positioned to create smooth upward curve
      const cpX = prev.x + (curr.x - prev.x) * 0.5;
      const cpY = prev.y - (prev.y - curr.y) * 0.9; // Slight upward bias for curve
      path += ` Q ${cpX} ${cpY} ${curr.x} ${curr.y}`;
    }

    return path;
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden  ">
      {/* SVG Line connecting all circles */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ overflow: "visible", zIndex: 0 }}
      >
        <path
          d={createPath()}
          fill="none"
          stroke="#7bf1a8"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500"
          opacity="0.8"
        />
      </svg>

      {timelineItems.map((item, index) => {
        const isActive = isButtonActive(index);
        return (
          <div
            key={item}
            className="absolute pointer-events-none"
            style={{
              bottom: buttonPositions[index].bottom,
              left: buttonPositions[index].left,
              transform: "translateX(-50%)",
            }}
          >
            {/* Pulsing Circle */}
            <div
              className={`absolute -top-8 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full transition-all duration-500 items-center justify-center flex ${isActive
                ? "bg-[#c4f3d6] animate-pulse scale-150"
                : "bg-[#e5e5e5]"
                }`}
            >
              <div className={`w-3 h-3  rounded-full ${isActive
                ? "bg-green-500 animate-pulse"
                : "bg-[#e5e5e5]"
                }`} />

              <div className="w-[1px] h-[1500px] bg-neutral-200 absolute -z-100 left-1/2 -translate-x-1/2" />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => handleButtonClick(index)}
              className={`${getButtonStyle(index)} rounded-full px-6 py-2.5 flex items-center justify-center font-medium transition-all duration-500 cursor-pointer hover:opacity-80 whitespace-nowrap text-base pointer-events-auto shadow-sm relative  z-100`}
            >
              {item}


            </button>
          </div>
        );
      })}
    </div>
  );
};

const Chart = ({ currentState, setCurrentState, isPaused, setIsPaused }) => {
  return (
    <div className="relative w-full max-w-[1152px] min-h-[600px] mx-auto select-none">
      {/* <img
        src={chart}
        alt="Agentix Dashboard"
        className="w-full h-auto object-cover"
      /> */}
      <VerticalTimeline
        currentState={currentState}
        setCurrentState={setCurrentState}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
    </div>
  );
};

// Card content data for each state
const cardContentData = [
  // State 0: Legacy Ops (gray), Sovereign Deployment (green)
  {
    card1: {
      title: "Manual workflows tied to linear headcount growth.",
      items: "High operational drag and capped profit margins.",
    },
    card2: {
      title: "Private, domain-specific SLMs deployed within your infrastructure.",
      items: "Lower OpEx and elimination of data-leakage risks.",
    },
  },
  // State 1: Legacy Ops (no bg), Sovereign Deployment (gray), Activated Knowledge (green)
  {
    card1: {
      title: "Private, domain-specific SLMs deployed within your infrastructure.",
      items: "Lower OpEx and elimination of data-leakage risks.",
    },
    card2: {
      title: "Proprietary RAG connecting agents to your internal data silos.",
      items: "100% accuracy and exponential decision velocity.",
    },
  },
  // State 2: Sovereign Deployment (no bg), Activated Knowledge (gray), HITL-Verified Scale (green)
  {
    card1: {
      title: "Proprietary RAG connecting agents to your internal data silos.",
      items: "100% accuracy and exponential decision velocity.",
    },
    card2: {
      title: "2,500-person human QA layer for absolute integrity at scale.",
      items: "Revenue growth decoupled from headcount costs.",
    },
  },
  // State 3: Activated Knowledge (no bg), HITL-Verified Scale (gray), AI-Native (green)
  {
    card1: {
      title: "2,500-person human QA layer for absolute integrity at scale.",
      items: "Revenue growth decoupled from headcount costs.",
    },
    card2: {
      title: "Autonomous multi-agent orchestration across all departments.",
      items: "Industry-leading margins and 3.7x EBITDA growth. ",
    },
  },
];

const MobileTimeline = ({ currentState, setCurrentState, isPaused, setIsPaused }) => {

  const getButtonStyle = (itemIndex) => {
    // Style class constants
    const styles = {
      green: "bg-[#7bf1a8] text-gray-900 ",
      gray: "bg-neutral-200 text-gray-900",
      transparent: "bg-transparent text-neutral-300 ",
    };

    // Mapping: each itemIndex defines its greenState and grayState
    // State 0: Legacy Ops (gray), Sovereign Deployment (green)
    // State 1: Legacy Ops (no bg), Sovereign Deployment (gray), Activated Knowledge (green)
    // State 2: Sovereign Deployment (no bg), Activated Knowledge (gray), HITL-Verified Scale (green)
    // State 3: Activated Knowledge (no bg), HITL-Verified Scale (gray), AI-Native (green)
    const buttonStateMap = [
      { greenState: null, grayState: 0 },      // Legacy Ops (index 0)
      { greenState: 0, grayState: 1 },        // Sovereign Deployment (index 1)
      { greenState: 1, grayState: 2 },         // Activated Knowledge (index 2)
      { greenState: 2, grayState: 3 },         // HITL-Verified Scale (index 3)
      { greenState: 3, grayState: null },      // AI-Native (index 4)
    ];

    const buttonConfig = buttonStateMap[itemIndex];
    if (!buttonConfig) return styles.transparent;

    if (currentState === buttonConfig.greenState) {
      return styles.green;
    }
    if (currentState === buttonConfig.grayState) {
      return styles.gray;
    }
    return styles.transparent;
  };

  const handleButtonClick = (itemIndex) => {
    // Map item index to state where that item should be green
    // Legacy Ops (0) -> state 0 (but it's gray in state 0, so we'll use state 0)
    // Sovereign Deployment (1) -> state 0 (green)
    // Activated Knowledge (2) -> state 1 (green)
    // HITL-Verified Scale (3) -> state 2 (green)
    // AI-Native (4) -> state 3 (green)

    let targetState = 0;
    if (itemIndex === 0) {
      // Legacy Ops - set to state 0 where it's gray
      targetState = 0;
    } else if (itemIndex === 1) {
      // Sovereign Deployment - set to state 0 where it's green
      targetState = 0;
    } else if (itemIndex === 2) {
      // Activated Knowledge - set to state 1 where it's green
      targetState = 1;
    } else if (itemIndex === 3) {
      // HITL-Verified Scale - set to state 2 where it's green
      targetState = 2;
    } else if (itemIndex === 4) {
      // AI-Native - set to state 3 where it's green
      targetState = 3;
    }

    if (setCurrentState) {
      setCurrentState(targetState);
    }
    if (setIsPaused) {
      setIsPaused(true);
      // Resume auto-animation after 3 seconds
      setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };

  const timelineItems = [
    "Legacy Ops",
    "Sovereign Deployment",
    "Activated Knowledge",
    "HITL-Verified Scale",
    "AI-Native",
  ];

  // Determine arrow position based on current state
  // State 0: arrow between 0-1, State 1: arrow between 1-2, etc.
  const getArrowPosition = () => {
    return currentState + 1; // Arrow appears after the button at currentState index
  };

  const arrowPosition = getArrowPosition();

  return (
    <div className="w-full px-6 py-2  mx-auto flex flex-col md:flex-row justify-center items-center gap-4 border-neutral-200 border-[1px] rounded-2xl md:rounded-full">
      {/* FROM Label */}
      <div className="w-fit flex justify-center items-center gap-4 text-base font-medium text-neutral-500 uppercase tracking-wider">
        FROM
      </div>

      {/* Timeline Container - Row on desktop, Column on mobile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-2 w-full">
        {timelineItems.map((item, index) => (
          <React.Fragment key={item}>
            {/* Button */}
            <button
              type="button"
              onClick={() => handleButtonClick(index)}
              className={`${getButtonStyle(index)} rounded-full px-4 md:px-6 py-3 md:py-2.5 flex items-center justify-center font-regular  transition-all duration-500 cursor-pointer hover:opacity-80 whitespace-nowrap text-sm md:text-base w-full md:w-auto`}
            >
              {item}
            </button>

            {/* Arrow - Show between buttons based on state */}
            {index < timelineItems.length - 1 && (
              <div
                className={`flex justify-center items-center  transition-all duration-500 ${arrowPosition === index + 1
                  ? "opacity-100 scale-100 text-neutral-500 "
                  : "opacity-40 text-neutral-300"
                  }`}
              >
                {/* Vertical arrow for mobile */}
                <div className="md:hidden h-fit  relative">
                  <Icons.ArrowDownLong className="w-6 h-6 rotate-90" />
                </div>
                {/* Horizontal arrow for desktop */}
                <div className="hidden md:flex items-center justify-center h-full mt-2">
                  <Icons.ArrowDownLong className="w-6 h-6 " />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
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
    className={`${bg} rounded-[24px] p-6 md:p-8 flex flex-col justify-between min-h-[140px] md:h-full w-full transition-all duration-500`}
  >
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 h-full">
      <div className="font-inter font-light text-lg md:text-xl text-black max-w-sm leading-tight transition-all duration-500">
        {title}
      </div>
      <div
        className={`border ${borderColor} rounded-[10px] px-4 py-2 flex items-start gap-3 w-full md:w-auto max-w-md transition-all duration-500`}
        style={{ backgroundColor: iconBg }}
      >
        <div className="shrink-0 mt-0.5 h-full">
          <IconComponent className="w-4 h-4 text-[#007a55]" />
        </div>
        <span className="text-[#007a55] text-xs md:text-sm font-medium font-['Space_Grotesk',sans-serif] transition-all duration-500">
          {items}
        </span>
      </div>
    </div>
  </div>
);

export function Section1() {
  const [currentState, setCurrentState] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentState((prev) => {
        // Cycle through states 0-3, then reset to 0
        return (prev + 1) % 4;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get current card content based on state
  const currentCardContent = cardContentData[currentState];

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
        <div className="w-full flex flex-col-reverse mt-6">
          {/* Mobile Timeline - visible on mobile */}
          <div className="w-full bg-[#fafafa] rounded-lg md:rounded-full">
            <MobileTimeline
              currentState={currentState}
              setCurrentState={setCurrentState}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
            />
          </div>

          {/* Desktop View */}
          <div className="hidden md:block w-full h-fit">
            <Chart
              currentState={currentState}
              setCurrentState={setCurrentState}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <Card
            bg="bg-[#e5e5e5]"
            title={currentCardContent.card1.title}
            icon={Icons.CheckCircle}
            iconBg="#ecfdf5"
            borderColor="border-[#d0fae5]"
            items={currentCardContent.card1.items}
          />
          <Card
            bg="bg-[#7bf1a8]"
            title={currentCardContent.card2.title}
            icon={Icons.CheckCircle}
            iconBg="#ecfdf5"
            borderColor="border-[#d0fae5]"
            items={currentCardContent.card2.items}
          />
        </div>
      </div>
    </section>
  );
}
