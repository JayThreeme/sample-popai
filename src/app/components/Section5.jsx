import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* -------------------- CARD -------------------- */
const Card = ({ image, title, description }) => (
  <div className="bg-[#f9fafb] rounded-[24px] overflow-hidden flex flex-col h-[480px] group transition-all hover:shadow-lg border border-transparent hover:border-gray-200">
    <div className="h-[240px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col justify-between flex-grow">
      <div className="space-y-3">
        <h3 className="font-satoshi text-2xl font-medium text-[#0a0a0a]">
          {title}
        </h3>
        <p className="font-inter font-light text-[#262626] text-base leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-4">
        <span className="font-inter text-[#262626] text-base">Read more</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </div>
);

/* -------------------- ARROWS -------------------- */
const CustomPrevArrow = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-full hover:bg-gray-100 ${
      disabled ? "opacity-30 cursor-not-allowed" : ""
    }`}
  >
    <ArrowLeft className="w-6 h-6" />
  </button>
);

const CustomNextArrow = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-full hover:bg-gray-100 ${
      disabled ? "opacity-30 cursor-not-allowed" : ""
    }`}
  >
    <ArrowRight className="w-6 h-6" />
  </button>
);

/* -------------------- SECTION -------------------- */
export function Section5() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  /* -------- responsive slide count -------- */
  useEffect(() => {
    const updateSlides = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const cards = [
    {
      image: "/s51.png",
      title: "Business Process Outsourcing",
      description:
        "Shift your business model from labor-intensive operations to high-margin agentic services.",
    },
    {
      image: "/s52.png",
      title: "Commercial Aviation",
      description:
        "Manage high-volume, high-stakes scheduling and passenger support with absolute zero-error tolerance.",
    },
    {
      image: "/s53.png",
      title: "Staffing & RPO",
      description:
        "Scale your delivery capabilities and placement volume without increasing administrative overhead.",
    },
    {
      image: "/s51.png",
      title: "Staffing & RPO",
      description:
        "Scale your delivery capabilities and placement volume without increasing administrative overhead.",
    },
  ];

  /* -------------------- GSAP -------------------- */
  useGSAP(() => {
    gsap.utils.toArray(".effectup").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    });
  });

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1152px] mx-auto px-4 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="effectup text-5xl md:text-6xl font-satoshi mb-6">
              Safe. Flexible.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e40879] via-[#bf2eb9] to-[#9c19f4]">
                Built for you.
              </span>
            </h2>
            <p className="effectup text-lg text-[#262626]">
              We deliver smart solutions designed to solve real needs.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            {/* Progress */}
            <div className="h-[2px] w-40 bg-gray-200 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-black transition-all"
                style={{
                  width: `${
                    ((currentSlide + 1) / (cards.length - slidesToShow + 1)) *
                    100
                  }%`,
                }}
              />
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <CustomPrevArrow
                onClick={() => sliderRef.current?.slickPrev()}
                disabled={currentSlide === 0}
              />
              <CustomNextArrow
                onClick={() => sliderRef.current?.slickNext()}
                disabled={currentSlide >= cards.length - slidesToShow}
              />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="effectup">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, i) => (
              <div key={i} className="px-3 pb-8">
                <Card {...card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
