import React from "react";
import { useForm } from "react-hook-form";
import { Icons } from "../../icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TestimonialCard = () => (
  <div className="bg-[#262626] rounded-2xl p-8 relative border border-white/10 shadow-xl overflow-hidden mt-8 md:mt-0">
    <div className="flex flex-col gap-6 relative z-10">
      <span className="font-inter text-[#ffb300] text-4xl leading-none">"</span>
      <p className="font-inter italic text-lg text-gray-200 leading-relaxed">
        We reduced our manual QA costs by 70% while increasing accuracy to
        99.95%. The human-in-the-loop guarantee allowed us to deploy AI in
        regulated markets where we couldn't before.
      </p>

      <div className="flex items-center gap-4 mt-2">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600 shrink-0">
          <img
            src=""
            alt="Marcus Chen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-inter font-bold text-white text-base">
            Marcus Chen
          </span>
          <span className="font-inter text-sm text-gray-400">
            CTO, FinServe Global
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-[#171717] text-base">
            Full Name
          </label>
          <input
            {...register("fullName", { required: true })}
            placeholder="Name"
            className="w-full px-3 py-3 rounded-lg border border-[#d4d4d4] text-[#404040] text-sm font-inter font-light focus:outline-none focus:ring-2 focus:ring-[#e40879]/20 focus:border-[#e40879]"
          />
          {errors.fullName && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
        </div>

        {/* Phone & Email Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label className="font-inter text-[#171717] text-base">
              Phone number
            </label>
            <input
              {...register("phone")}
              placeholder="Enter 10 digit number"
              className="w-full px-3 py-3 rounded-lg border border-[#d4d4d4] text-[#404040] text-sm font-inter font-light focus:outline-none focus:ring-2 focus:ring-[#e40879]/20 focus:border-[#e40879]"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="font-inter text-[#171717] text-base">Email</label>
            <input
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="Enter your email"
              type="email"
              className="w-full px-3 py-3 rounded-lg border border-[#d4d4d4] text-[#404040] text-sm font-inter font-light focus:outline-none focus:ring-2 focus:ring-[#e40879]/20 focus:border-[#e40879]"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">Valid email required</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-[#171717] text-base">
            How can we help you?
          </label>
          <textarea
            {...register("message")}
            placeholder="Write here..."
            rows={4}
            className="w-full px-3 py-3 rounded-lg border border-[#d4d4d4] text-[#404040] text-sm font-inter font-light focus:outline-none focus:ring-2 focus:ring-[#e40879]/20 focus:border-[#e40879] resize-none"
          />
        </div>

        {/* Date Picker (Visual Mockup) */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-[#171717] text-base">
            Select a date and time for your Meeting :
          </label>
          <div className="w-full px-4 py-3 rounded-lg border border-[#d4d4d4] flex items-center gap-3 cursor-pointer hover:border-gray-400 transition-colors">
            <div className="w-4 h-4 text-gray-500">
              <Icons.CalendarIcon className="w-full h-full" />
            </div>
            <span className="text-[#404040] text-sm font-inter font-light">
              Pick date and time
            </span>
          </div>
        </div>

        {/* ReCAPTCHA Mockup */}
        <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded-sm p-3 w-fit flex items-center gap-3 shadow-inner">
          <div className="w-6 h-6 border-2 border-[#c1c1c1] rounded-sm bg-white" />
          <span className="text-[#282828] text-sm font-inter font-normal">
            I'm not a robot
          </span>
          <div className="flex flex-col items-center ml-4">
            <img src="" alt="ReCAPTCHA" className="w-8 h-auto opacity-70" />
            <span className="text-[8px] text-[#555555] mt-1">reCAPTCHA</span>
            <div className="text-[8px] text-[#555555] flex gap-1">
              <span>Privacy</span>
              <span>-</span>
              <span>Terms</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#0a0a0a] text-[#fafafa] rounded-full py-4 text-base font-inter font-normal hover:bg-black/90 transition-all active:scale-[0.99]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export function Section6() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="max-w-[1152px] mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
        {/* Left Content */}
        <div className=" flex-1 w-full flex flex-col justify-between h-full gap-12 lg:sticky lg:top-24">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl text-[#0a0a0a] leading-[1.1]">
              Lets scale your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e40879] via-[#bf2eb9] to-[#9c19f4]">
                intelligence.
              </span>
            </h2>
            <p className=" font-inter font-light text-[#262626] text-lg leading-relaxed max-w-md">
              Join forward-thinking enterprises that trust Pop! AI for their
              most critical workflows.
            </p>
          </div>

          <TestimonialCard />
        </div>

        {/* Right Content - Form */}
        <div className="effectright flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
