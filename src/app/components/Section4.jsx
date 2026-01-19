import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import background1 from "../../assets/card-background.jpg";

import salesimg from "../../assets/sales.png";
import marketingimg from "../../assets/marketing.png";
import recruitmentimg from "../../assets/recruitment.png";
import telemarketingimg from "../../assets/telemarketing.png";
import customerimg from "../../assets/customer.png";
import knowledgeimg from "../../assets/knowledge.png";
import procurementimg from "../../assets/procurement.png";
const LearnMoreArrowIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder images for different chat UIs
const chatUIImages = {
  sales:
    "Sales Agent Chat Interface showing automated conversation flow with lead qualification and follow-up scheduling",
  marketing:
    "Marketing Agent Chat Interface displaying campaign analytics and audience targeting",
  support:
    "Support Agent Chat Interface with ticket management and customer inquiry handling",
  analytics:
    "Analytics Agent Chat Interface showing data visualization and reporting dashboards",
  automation:
    "Automation Agent Chat Interface demonstrating workflow optimization and task scheduling",
};

const features = [
  {
    id: "sales",
    title: "Sales Agent",
    description: "Automated full-cycle sales management",
    image: salesimg,
  },
  {
    id: "marketing",
    title: "Marketing Agent",
    description: "Awareness and lead generation",
    image: marketingimg,
  },
  {
    id: "recruitment",
    title: "Recruitment Agent",
    description: "High-volume talent acquisition",
    image: recruitmentimg,
  },
  {
    id: "telemarketing",
    title: "Telemarketing Agent",
    description: "Automated scheduling and intake",
    image: telemarketingimg,
  },
  {
    id: "customer",
    title: "Customer Support",
    description: "Omnichannel intelligent support",
    image: customerimg,
  },
  {
    id: "knowledge",
    title: "Knowledge Manager",
    description: "Omnichannel intelligent support",
    image: knowledgeimg,
  },
  {
    id: "procurement",
    title: "Procurement",
    description: "Strategic sourcing and optimization",
    image: procurementimg,
  },
];

export function Section4() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const featureElements = featuresRef.current;

    if (!section || !imageContainer || featureElements.length === 0) return;

    // Create scroll trigger for each feature item
    featureElements.forEach((feature, index) => {
      ScrollTrigger.create({
        trigger: feature,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveFeature(index),
        onEnterBack: () => setActiveFeature(index),
      });
    });

    // Pin the image container
    ScrollTrigger.create({
      trigger: section,
      start: "top top-=30%",
      end: () => `+=${section.offsetHeight - window.innerHeight + 100} `,
      pin: imageContainer,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    // Create a context for this component
    const ctx = gsap.context(() => {
      // Select all effectup elements
      const elements = gsap.utils.toArray(".effectup");
      const effectright = gsap.utils.toArray(".effectright");

      elements.forEach((element) => {
        gsap.set(element, { y: 40, opacity: 0 });
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 45%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
        });
      });

      effectright.forEach((element) => {
        gsap.set(element, { x: 60, opacity: 0 });
        gsap.to(element, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "right 150%",
            end: "right 50%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup
  });

  return (
    <section ref={sectionRef} className="bg-white px-4 py-12 md:px-12 md:py-24">
      {/* Header */}
      <div className="max-w-[1152px] mx-auto px-4 md:px-0 flex flex-col gap-12">
        <div className="text-left h-fit w-full mx-auto space-y-6 flex flex-col items-start justify-start">
          <h2 className="effectup text-4xl md:text-5xl lg:text-6xl font-normal text-[#0a0a0a] leading-tight">
            AI Agents Built to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e40879] via-[#bf2eb9] to-[#9c19f4]">
              Deliver Real Results
            </span>
          </h2>
          <p className="effectup font-inter font-extralight text-base md:text-lg text-[#1d293d]   leading-relaxed">
            Our AI is precise. If uncertainty arises, our experts step in,
            ensuring accuracy before your customer interaction.
          </p>
        </div>

        {/* Content Split */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-0 md:gap-12">
          {/* Left: Image Composition (Sticky) */}
          <div
            ref={imageContainerRef}
            className="w-full lg:flex-[1_0_0] lg:sticky lg:top-[100px]"
          >
            <div className="w-full h-full relative rounded-[24px] overflow-hidden ">
              <div className="relative w-full max-w-[623px] h-auto  flex items-center justify-center text-center transition-opacity duration-500">
                <img
                  src={`${features[activeFeature].image}`}
                  alt=""
                  className="w-full h-full hidden md:hidden lg:block object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="w-full lg:w-[40%] flex flex-col gap-16 py-[32px]">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (featuresRef.current[index] = el)}
                className="min-h-[400px] flex items-center"
              >
                <FeatureItem
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                  isActive={activeFeature === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ title, description, isActive = false, image }) => {
  return (
    <div
      className={`flex flex-col items-start gap-[16px] w-full transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
      }`}
    >
      <div className="relative w-full h-auto flex lg:hidden items-center justify-center text-center transition-opacity duration-500">
        <img src={image} alt="" className="w-full h-full  object-contain" />
      </div>
      <h4 className=" text-4xl  leading-[1.2] text-[#171717]">{title}</h4>
      <p className=" text-base leading-[1.7] text-[#404040]">{description}</p>

      <div className="mt-[24px] flex items-center gap-[8px] cursor-pointer group">
        <span className="font-sans font-semibold text-base leading-[20px] tracking-[0.35px] uppercase text-[#18181b]">
          Learn more
        </span>
        <div className="w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-1">
          <LearnMoreArrowIcon className="text-[#18181b]" />
        </div>
      </div>
    </div>
  );
};
