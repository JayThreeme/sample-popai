import React, { useState } from "react";
import { Icons } from "@/icons";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

import navimage1 from "/n1.png";
import navimage2 from "/n2.png";
import navimage3 from "/n3.png";
import navimage4 from "/n4.png";
import navimage5 from "/n5.png";
import navimage6 from "/n6.png";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const dropdownItems = {
    Products: {
      columnImages: [navimage1, navimage2, navimage3],
      column1: {
        title: "WORKPLACE SYSTEMS",
        items: [
          {
            label: "AgentiX",
            description: "Centralized enterprise AI agent management system",
            href: "#",
          },
          {
            label: "Opera",
            description:
              "Intelligent mission-critical frontline operations system",
            href: "#",
          },
          {
            label: "PopApps",
            description:
              "Automated back-office business process management tools.",
            href: "#",
          },
        ],
      },
      column2: {
        title: "AI Agents & SLMs",
        items: [
          {
            label: "Sales Agent",
            description: "Automated full-cycle sales management",
            href: "#",
          },
          {
            label: "Marketing Agent",
            description: "Awareness and lead generation",
            href: "#",
          },
          {
            label: "Recruitment Agent",
            description: "High-volume talent acquisition",
            href: "#",
          },
          {
            label: "Telemarketing Agent",
            description: "Automated scheduling and intake",
            href: "#",
          },
          {
            label: "Customer Support",
            description: "Omnichannel intelligent support",
            href: "#",
          },
          {
            label: "Knowledge Manger ",
            description: "Institutional data activation experts",
            href: "#",
          },
          {
            label: "Procurement",
            description: "Strategic sourcing and optimization",
            href: "#",
          },
          { label: "All Agents", description: "", href: "#" },
        ],
      },
      column3: {
        title: "Human-In-The-Loop",
        items: [
          {
            label: "Human-In-The-Loop",
            description: "Real-time oversight and optimization",
            href: "#",
          },
          {
            label: "Annotation",
            description: "Precise data labeling services",
            href: "#",
          },
          {
            label: "Validate Data",
            description: "Expert verification of outputs",
            href: "#",
          },
        ],
      },
    },
    Solutions: {
      columnImages: [navimage3, navimage4, navimage5],
      layout: "twoColumn",
      mobileItems: [
        { label: "Security & Data Integrity", href: "#" },
        { label: "Deployment", href: "#" },
        { label: "Customization & Fine-Tuning", href: "#" },
      ],
      sidebar: {
        title: "INDUSTRIES",
        items: [
          { label: "BPOs", href: "#" },
          { label: "Commercial Aviation", href: "#" },
          { label: "Staffing and RPO", href: "#" },
          { label: "Financial Services", href: "#" },
          { label: "Public Sector", href: "#" },
        ],
      },
      column1: {
        title: "Security & Data Integrity",
        subtitle: "",
        href: "#",
        image: navimage3,
      },
      column2: {
        title: "Deployment",
        subtitle: "",
        href: "#",
        image: navimage4,
      },
      column3: {
        title: "Customization & Fine-Tuning",
        subtitle: "",
        href: "#",
        image: navimage6,
      },
    },
    Company: {
      columnImages: [navimage6, navimage2, navimage4],
      layout: "singleColumn",
      items: [
        { label: "About Us", href: "#" },
        { label: "Team", href: "#" },
        { label: "Career", href: "#" },
        { label: "Events", href: "#" },
      ],
    },
    Resources: {
      columnImages: [navimage2, navimage4, navimage4],
      layout: "singleColumn",
      items: [
        { label: "Blog", href: "#" },
        { label: "Individual Article Page", href: "#" },
        { label: "Brochures", href: "#" },
        { label: "Case Studies", href: "#" },
      ],
    },
  };

  const NavItem = ({ text }) => (
    <div className="relative group">
      <button
        onClick={() => toggleDropdown(text)}
        className="flex items-center gap-1 cursor-pointer group"
      >
        <span className="font-inter text-[16px] text-[#171717] group-hover:text-pink-600 transition-colors">
          {text}
        </span>
        <div
          className={`w-4 h-4 text-[#171717] group-hover:text-pink-600 transition-all ${activeDropdown === text ? "rotate-180" : ""}`}
        >
          <Icons.ChevronDown className="w-full h-full" />
        </div>
      </button>

      {/* Desktop Dropdown */}
      {activeDropdown === text && (
        <div>
          {dropdownItems[text].layout === "twoColumn" ? (
            <div className="hidden md:grid absolute top-full left-0 mt-2 w-[900px] grid-cols-4 gap-6 bg-white border border-gray-200 rounded-lg p-6 shadow-xl z-50">
              {/* Sidebar */}
              <div className="col-span-1 border-r border-gray-200 pr-6">
                <div className="text-xs font-semibold text-gray-400 mb-4">
                  {dropdownItems[text].sidebar.title}
                </div>
                <div className="flex flex-col gap-3 justify-start items-start">
                  {dropdownItems[text].sidebar.items.map((item, idx) => (
                    <a
                      key={`sidebar-${idx}`}
                      href={item.href}
                      className="text-sm text-[#171717] hover:text-pink-600 transition-colors font-inter"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Cards Grid */}
              <div className="col-span-3 grid grid-cols-3 gap-4 justify-center items-center">
                {[
                  {
                    title: dropdownItems[text].column1.title,
                    href: dropdownItems[text].column1.href,
                    image: dropdownItems[text].column1.image,
                  },
                  {
                    title: dropdownItems[text].column2.title,
                    href: dropdownItems[text].column2.href,
                    image: dropdownItems[text].column2.image,
                  },
                  {
                    title: dropdownItems[text].column3.title,
                    href: dropdownItems[text].column3.href,
                    image: dropdownItems[text].column3.image,
                  },
                ].map((card, idx) => (
                  <a
                    key={`card-${idx}`}
                    href={card.href}
                    className="relative h-40 rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-end justify-start p-4 pr-2  bg-[linear-gradient(180deg,rgba(10,10,10,0)_46.63%,#0A0A0A_100%)]">
                      <span className="text-white font-normal  text-sm">
                        {card.title} <span className="ml-1">›</span>
                      </span>
                      {/* <div className="absolute inset-0 z-35 bg-[linear-gradient(180deg,rgba(10,10,10,0)_46.63%,#0A0A0A_100%)] pointer-events-none"></div> */}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : dropdownItems[text].layout === "singleColumn" ? (
            <div className="hidden md:grid absolute top-full left-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-lg p-6 shadow-xl z-50">
              <div className="text-xs font-semibold text-gray-400 mb-6">
                {text.toUpperCase()}
              </div>
              <div className="flex flex-col gap-4">
                {dropdownItems[text].items.map((item, idx) => (
                  <a
                    key={`link-${idx}`}
                    href={item.href}
                    className="text-[#171717] hover:text-pink-600 transition-colors font-inter text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="hidden md:grid absolute top-full left-0 mt-2 w-[800px] grid-cols-[1fr_2fr_1fr] gap-4 bg-white border border-gray-200 rounded-lg p-6 shadow-xl z-50">
              {/* Column 1 */}
              <div className="relative">
                <div className="w-full h-32 bg-gray-200 rounded-md overflow-hidden mb-4">
                  <img
                    src={dropdownItems[text].columnImages[0]}
                    alt="Column 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {dropdownItems[text].column1.title && (
                  <div className="font-semibold text-neutral-400 text-xs mb-3">
                    {dropdownItems[text].column1.title}
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {dropdownItems[text].column1.items.map((item, idx) => (
                    <a
                      key={`link-${idx}`}
                      href={item.href}
                      className=" rounded-lg text-[#171717] hover:text-pink-600  transition-colors font-inter text-sm"
                    >
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500">
                          {item.description}
                        </div>
                      )}
                    </a>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 rounded-lg text-blue-800 hover:text-blue-500 transition-colors font-inter text-sm whitespace-nowrap"
                  >
                    <span>Read More</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8438 8.70312L14.2031 8.35938C14.2448 8.31771 14.276 8.27083 14.2969 8.21875C14.3177 8.16667 14.3333 8.10938 14.3438 8.04688C14.3438 8.02604 14.3438 8.00521 14.3438 7.98438C14.3438 7.96354 14.3438 7.94271 14.3438 7.92188C14.3333 7.86979 14.3151 7.82031 14.2891 7.77344C14.263 7.72656 14.2344 7.68229 14.2031 7.64062L8.875 2.32812C8.78125 2.22396 8.66406 2.17188 8.52344 2.17188C8.38281 2.17188 8.26562 2.22396 8.17188 2.32812L7.8125 2.67188C7.71875 2.77604 7.67188 2.89583 7.67188 3.03125C7.67188 3.16667 7.71875 3.28646 7.8125 3.39062L11.6562 7.23438H8.71875C8.63542 7.23438 8.55729 7.25521 8.48438 7.29688C8.41146 7.33854 8.34896 7.39062 8.29688 7.45312L7.96875 7.95312C7.85417 8.11979 7.84375 8.29167 7.9375 8.46875C8.03125 8.64583 8.17708 8.73438 8.375 8.73438H11.7031L7.8125 12.6094C7.71875 12.7135 7.67188 12.8333 7.67188 12.9688C7.67188 13.1042 7.71875 13.224 7.8125 13.3281L8.17188 13.6719C8.26562 13.776 8.38281 13.8281 8.52344 13.8281C8.66406 13.8281 8.78125 13.776 8.875 13.6719L13.8438 8.70312ZM1.95312 8.73438C1.80729 8.73438 1.6875 8.6849 1.59375 8.58594C1.5 8.48698 1.45312 8.36979 1.45312 8.23438V7.73438C1.45312 7.59896 1.5 7.48177 1.59375 7.38281C1.6875 7.28385 1.80729 7.23438 1.95312 7.23438H6.54688C6.74479 7.23438 6.89062 7.32292 6.98438 7.5C7.07812 7.67708 7.06771 7.84896 6.95312 8.01562L6.625 8.51562C6.57292 8.57812 6.51042 8.63021 6.4375 8.67188C6.36458 8.71354 6.28646 8.73438 6.20312 8.73438H1.95312Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div className="relative">
                <div className="w-full h-32 bg-gray-200 rounded-md overflow-hidden mb-4">
                  <img
                    src={dropdownItems[text].columnImages[1]}
                    alt="Column 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {dropdownItems[text].column2.title && (
                  <div className="font-semibold text-neutral-400 text-xs mb-3">
                    {dropdownItems[text].column2.title}
                  </div>
                )}
                <div className="grid grid-cols-2 grid-rows-1 gap-4">
                  {dropdownItems[text].column2.items.map((item, idx) => (
                    <a
                      key={`link-${idx + 10}`}
                      href={item.href}
                      className=" rounded-lg text-[#171717] hover:text-pink-600  transition-colors font-inter text-sm"
                    >
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500">
                          {item.description}
                        </div>
                      )}
                    </a>
                  ))}
                  <div className="absolute bottom-0 right-0">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 rounded-lg text-blue-800 hover:text-blue-500 transition-colors font-inter text-sm whitespace-nowrap"
                    >
                      <span>Read More</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8438 8.70312L14.2031 8.35938C14.2448 8.31771 14.276 8.27083 14.2969 8.21875C14.3177 8.16667 14.3333 8.10938 14.3438 8.04688C14.3438 8.02604 14.3438 8.00521 14.3438 7.98438C14.3438 7.96354 14.3438 7.94271 14.3438 7.92188C14.3333 7.86979 14.3151 7.82031 14.2891 7.77344C14.263 7.72656 14.2344 7.68229 14.2031 7.64062L8.875 2.32812C8.78125 2.22396 8.66406 2.17188 8.52344 2.17188C8.38281 2.17188 8.26562 2.22396 8.17188 2.32812L7.8125 2.67188C7.71875 2.77604 7.67188 2.89583 7.67188 3.03125C7.67188 3.16667 7.71875 3.28646 7.8125 3.39062L11.6562 7.23438H8.71875C8.63542 7.23438 8.55729 7.25521 8.48438 7.29688C8.41146 7.33854 8.34896 7.39062 8.29688 7.45312L7.96875 7.95312C7.85417 8.11979 7.84375 8.29167 7.9375 8.46875C8.03125 8.64583 8.17708 8.73438 8.375 8.73438H11.7031L7.8125 12.6094C7.71875 12.7135 7.67188 12.8333 7.67188 12.9688C7.67188 13.1042 7.71875 13.224 7.8125 13.3281L8.17188 13.6719C8.26562 13.776 8.38281 13.8281 8.52344 13.8281C8.66406 13.8281 8.78125 13.776 8.875 13.6719L13.8438 8.70312ZM1.95312 8.73438C1.80729 8.73438 1.6875 8.6849 1.59375 8.58594C1.5 8.48698 1.45312 8.36979 1.45312 8.23438V7.73438C1.45312 7.59896 1.5 7.48177 1.59375 7.38281C1.6875 7.28385 1.80729 7.23438 1.95312 7.23438H6.54688C6.74479 7.23438 6.89062 7.32292 6.98438 7.5C7.07812 7.67708 7.06771 7.84896 6.95312 8.01562L6.625 8.51562C6.57292 8.57812 6.51042 8.63021 6.4375 8.67188C6.36458 8.71354 6.28646 8.73438 6.20312 8.73438H1.95312Z" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>

              {/* Column 3 */}
              <div className="relative">
                <div className="w-full h-32 bg-gray-200 rounded-md overflow-hidden mb-4">
                  <img
                    src={dropdownItems[text].columnImages[2]}
                    alt="Column 3"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {dropdownItems[text].column3.title && (
                  <div className="font-semibold text-neutral-400 text-xs mb-3">
                    {dropdownItems[text].column3.title}
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {dropdownItems[text].column3.items.map((item, idx) => (
                    <a
                      key={`link-${idx + 20}`}
                      href={item.href}
                      className=" rounded-lg text-[#171717] hover:text-pink-600 transition-colors font-inter text-sm"
                    >
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500">
                          {item.description}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0 ">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 rounded-lg text-blue-800 hover:text-blue-500 transition-colors font-inter text-sm whitespace-nowrap"
                  >
                    <span>Read More</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8438 8.70312L14.2031 8.35938C14.2448 8.31771 14.276 8.27083 14.2969 8.21875C14.3177 8.16667 14.3333 8.10938 14.3438 8.04688C14.3438 8.02604 14.3438 8.00521 14.3438 7.98438C14.3438 7.96354 14.3438 7.94271 14.3438 7.92188C14.3333 7.86979 14.3151 7.82031 14.2891 7.77344C14.263 7.72656 14.2344 7.68229 14.2031 7.64062L8.875 2.32812C8.78125 2.22396 8.66406 2.17188 8.52344 2.17188C8.38281 2.17188 8.26562 2.22396 8.17188 2.32812L7.8125 2.67188C7.71875 2.77604 7.67188 2.89583 7.67188 3.03125C7.67188 3.16667 7.71875 3.28646 7.8125 3.39062L11.6562 7.23438H8.71875C8.63542 7.23438 8.55729 7.25521 8.48438 7.29688C8.41146 7.33854 8.34896 7.39062 8.29688 7.45312L7.96875 7.95312C7.85417 8.11979 7.84375 8.29167 7.9375 8.46875C8.03125 8.64583 8.17708 8.73438 8.375 8.73438H11.7031L7.8125 12.6094C7.71875 12.7135 7.67188 12.8333 7.67188 12.9688C7.67188 13.1042 7.71875 13.224 7.8125 13.3281L8.17188 13.6719C8.26562 13.776 8.38281 13.8281 8.52344 13.8281C8.66406 13.8281 8.78125 13.776 8.875 13.6719L13.8438 8.70312ZM1.95312 8.73438C1.80729 8.73438 1.6875 8.6849 1.59375 8.58594C1.5 8.48698 1.45312 8.36979 1.45312 8.23438V7.73438C1.45312 7.59896 1.5 7.48177 1.59375 7.38281C1.6875 7.28385 1.80729 7.23438 1.95312 7.23438H6.54688C6.74479 7.23438 6.89062 7.32292 6.98438 7.5C7.07812 7.67708 7.06771 7.84896 6.95312 8.01562L6.625 8.51562C6.57292 8.57812 6.51042 8.63021 6.4375 8.67188C6.36458 8.71354 6.28646 8.73438 6.20312 8.73438H1.95312Z" fill="currentColor" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-[10.35px] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end gap-[2px] shrink-0 cursor-pointer">
            <div className="w-[45px] h-[24px]">
              <svg
                width="73"
                height="24"
                viewBox="0 0 73 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 19.1665V0H9.5553C10.915 0 12.0419 0.251455 12.936 0.754366C13.83 1.25728 14.5006 1.95576 14.9476 2.84983C15.4133 3.72526 15.6461 4.76834 15.6461 5.97905C15.6461 7.18976 15.404 8.26077 14.9197 9.19208C14.4354 10.1048 13.7276 10.8126 12.7963 11.3155C11.8836 11.8184 10.766 12.0698 9.44354 12.0698H3.12922V19.1665H0ZM3.12922 9.38766H9.30384C10.291 9.38766 11.064 9.08964 11.6228 8.4936C12.2002 7.89755 12.4889 7.06868 12.4889 6.00699C12.4889 5.29919 12.3679 4.70314 12.1257 4.21886C11.8836 3.71595 11.5297 3.33411 11.064 3.07334C10.5984 2.81257 10.0116 2.68219 9.30384 2.68219H3.12922V9.38766Z"
                  fill="url(#paint0_linear_8036_5652)"
                />
                <path
                  d="M0 19.1665V0H9.5553C10.915 0 12.0419 0.251455 12.936 0.754366C13.83 1.25728 14.5006 1.95576 14.9476 2.84983C15.4133 3.72526 15.6461 4.76834 15.6461 5.97905C15.6461 7.18976 15.404 8.26077 14.9197 9.19208C14.4354 10.1048 13.7276 10.8126 12.7963 11.3155C11.8836 11.8184 10.766 12.0698 9.44354 12.0698H3.12922V19.1665H0ZM3.12922 9.38766H9.30384C10.291 9.38766 11.064 9.08964 11.6228 8.4936C12.2002 7.89755 12.4889 7.06868 12.4889 6.00699C12.4889 5.29919 12.3679 4.70314 12.1257 4.21886C11.8836 3.71595 11.5297 3.33411 11.064 3.07334C10.5984 2.81257 10.0116 2.68219 9.30384 2.68219H3.12922V9.38766Z"
                  fill="#E60076"
                />
                <path
                  d="M23.1123 19.5017C21.5849 19.5017 20.2904 19.2317 19.2287 18.6915C18.1856 18.1327 17.394 17.2852 16.8538 16.149C16.3323 15.0128 16.0715 13.5693 16.0715 11.8184C16.0715 10.0489 16.3323 8.60536 16.8538 7.48778C17.394 6.35157 18.1856 5.51339 19.2287 4.97323C20.2904 4.41444 21.5849 4.13504 23.1123 4.13504C24.6769 4.13504 25.9807 4.41444 27.0238 4.97323C28.0669 5.51339 28.8492 6.35157 29.3707 7.48778C29.9109 8.60536 30.181 10.0489 30.181 11.8184C30.181 13.5693 29.9109 15.0128 29.3707 16.149C28.8492 17.2852 28.0669 18.1327 27.0238 18.6915C25.9807 19.2317 24.6769 19.5017 23.1123 19.5017ZM23.1123 17.099C24.0436 17.099 24.8073 16.922 25.4033 16.5681C25.9993 16.1956 26.4371 15.6368 26.7165 14.8917C27.0145 14.1467 27.1635 13.2061 27.1635 12.0698V11.5669C27.1635 10.4307 27.0145 9.49011 26.7165 8.74505C26.4371 8 25.9993 7.45052 25.4033 7.09662C24.8073 6.7241 24.0436 6.53783 23.1123 6.53783C22.1996 6.53783 21.4452 6.7241 20.8492 7.09662C20.2531 7.45052 19.8061 8 19.5081 8.74505C19.2287 9.49011 19.089 10.4307 19.089 11.5669V12.0698C19.089 13.2061 19.2287 14.1467 19.5081 14.8917C19.8061 15.6368 20.2531 16.1956 20.8492 16.5681C21.4452 16.922 22.1996 17.099 23.1123 17.099Z"
                  fill="url(#paint1_linear_8036_5652)"
                />
                <path
                  d="M23.1123 19.5017C21.5849 19.5017 20.2904 19.2317 19.2287 18.6915C18.1856 18.1327 17.394 17.2852 16.8538 16.149C16.3323 15.0128 16.0715 13.5693 16.0715 11.8184C16.0715 10.0489 16.3323 8.60536 16.8538 7.48778C17.394 6.35157 18.1856 5.51339 19.2287 4.97323C20.2904 4.41444 21.5849 4.13504 23.1123 4.13504C24.6769 4.13504 25.9807 4.41444 27.0238 4.97323C28.0669 5.51339 28.8492 6.35157 29.3707 7.48778C29.9109 8.60536 30.181 10.0489 30.181 11.8184C30.181 13.5693 29.9109 15.0128 29.3707 16.149C28.8492 17.2852 28.0669 18.1327 27.0238 18.6915C25.9807 19.2317 24.6769 19.5017 23.1123 19.5017ZM23.1123 17.099C24.0436 17.099 24.8073 16.922 25.4033 16.5681C25.9993 16.1956 26.4371 15.6368 26.7165 14.8917C27.0145 14.1467 27.1635 13.2061 27.1635 12.0698V11.5669C27.1635 10.4307 27.0145 9.49011 26.7165 8.74505C26.4371 8 25.9993 7.45052 25.4033 7.09662C24.8073 6.7241 24.0436 6.53783 23.1123 6.53783C22.1996 6.53783 21.4452 6.7241 20.8492 7.09662C20.2531 7.45052 19.8061 8 19.5081 8.74505C19.2287 9.49011 19.089 10.4307 19.089 11.5669V12.0698C19.089 13.2061 19.2287 14.1467 19.5081 14.8917C19.8061 15.6368 20.2531 16.1956 20.8492 16.5681C21.4452 16.922 22.1996 17.099 23.1123 17.099Z"
                  fill="#E60076"
                />
                <path
                  d="M32.0252 24V4.47031H34.4L34.6515 6.48196H34.8471C35.35 5.69965 35.9926 5.11292 36.7749 4.72177C37.5572 4.33062 38.4326 4.13504 39.4012 4.13504C40.6119 4.13504 41.6457 4.40512 42.5025 4.94529C43.3779 5.48545 44.0485 6.32363 44.5141 7.45984C44.9798 8.59604 45.2126 10.0675 45.2126 11.8743C45.2126 13.6251 44.9705 15.0687 44.4862 16.2049C44.0205 17.3225 43.3593 18.1513 42.5025 18.6915C41.6457 19.2317 40.6585 19.5017 39.5409 19.5017C38.889 19.5017 38.2836 19.4272 37.7248 19.2782C37.166 19.1292 36.6631 18.8964 36.2161 18.5797C35.7877 18.2631 35.4152 17.8626 35.0985 17.3783H34.9309V24H32.0252ZM38.5351 16.9872C39.4105 16.9872 40.1183 16.8196 40.6585 16.4843C41.1986 16.1304 41.5898 15.5902 41.8319 14.8638C42.0927 14.1374 42.2231 13.2154 42.2231 12.0978V11.5949C42.2231 10.4214 42.0927 9.47148 41.8319 8.74505C41.5712 8.01863 41.1707 7.48778 40.6305 7.1525C40.109 6.81723 39.4291 6.64959 38.591 6.64959C37.7341 6.64959 37.0357 6.84517 36.4955 7.23632C35.9553 7.60885 35.5549 8.16764 35.2941 8.91269C35.0519 9.65774 34.9309 10.5611 34.9309 11.6228V12.014C34.9309 12.8894 35.0147 13.6438 35.1823 14.2771C35.35 14.9104 35.5921 15.4319 35.9088 15.8417C36.2254 16.2328 36.6072 16.5215 37.0543 16.7078C37.5013 16.8941 37.9949 16.9872 38.5351 16.9872Z"
                  fill="url(#paint2_linear_8036_5652)"
                />
                <path
                  d="M32.0252 24V4.47031H34.4L34.6515 6.48196H34.8471C35.35 5.69965 35.9926 5.11292 36.7749 4.72177C37.5572 4.33062 38.4326 4.13504 39.4012 4.13504C40.6119 4.13504 41.6457 4.40512 42.5025 4.94529C43.3779 5.48545 44.0485 6.32363 44.5141 7.45984C44.9798 8.59604 45.2126 10.0675 45.2126 11.8743C45.2126 13.6251 44.9705 15.0687 44.4862 16.2049C44.0205 17.3225 43.3593 18.1513 42.5025 18.6915C41.6457 19.2317 40.6585 19.5017 39.5409 19.5017C38.889 19.5017 38.2836 19.4272 37.7248 19.2782C37.166 19.1292 36.6631 18.8964 36.2161 18.5797C35.7877 18.2631 35.4152 17.8626 35.0985 17.3783H34.9309V24H32.0252ZM38.5351 16.9872C39.4105 16.9872 40.1183 16.8196 40.6585 16.4843C41.1986 16.1304 41.5898 15.5902 41.8319 14.8638C42.0927 14.1374 42.2231 13.2154 42.2231 12.0978V11.5949C42.2231 10.4214 42.0927 9.47148 41.8319 8.74505C41.5712 8.01863 41.1707 7.48778 40.6305 7.1525C40.109 6.81723 39.4291 6.64959 38.591 6.64959C37.7341 6.64959 37.0357 6.84517 36.4955 7.23632C35.9553 7.60885 35.5549 8.16764 35.2941 8.91269C35.0519 9.65774 34.9309 10.5611 34.9309 11.6228V12.014C34.9309 12.8894 35.0147 13.6438 35.1823 14.2771C35.35 14.9104 35.5921 15.4319 35.9088 15.8417C36.2254 16.2328 36.6072 16.5215 37.0543 16.7078C37.5013 16.8941 37.9949 16.9872 38.5351 16.9872Z"
                  fill="#E60076"
                />
                <path
                  d="M55.4372 0.268661C55.7324 0.185996 56.0865 0.103331 56.2243 0.0826649C56.362 0.0516656 56.667 0.0206662 56.9129 0.0206662C57.1589 0.0103331 57.6409 0.0516656 57.9951 0.113664C58.3493 0.175663 58.8313 0.309993 59.0773 0.423658C59.3232 0.537322 59.6872 0.805983 59.8938 1.01265C60.1004 1.21931 60.3759 1.60163 60.5038 1.85996C60.6218 2.11829 61.6155 4.78423 62.7075 7.8015C63.7896 10.8084 65.167 14.6007 65.7572 16.223C66.3377 17.8453 66.8099 19.1989 66.7902 19.2403C66.7706 19.2919 66.0032 19.3229 65.0784 19.3229C63.5831 19.3229 63.3961 19.3023 63.3174 19.1369C63.2682 19.0439 62.0287 15.5927 60.553 11.4698C58.3689 5.35255 57.8278 3.92658 57.5917 3.68892C57.4343 3.53392 57.1982 3.40993 57.0605 3.40993C56.9227 3.40993 56.7162 3.46159 56.5981 3.51326C56.4702 3.57526 56.3128 3.73025 56.2341 3.85425C56.1554 3.97825 55.6045 5.40422 54.9945 7.02652C54.3846 8.64881 53.1253 12.0174 52.1907 14.518C51.2561 17.0186 50.4395 19.1266 50.3805 19.1989C50.3018 19.3023 49.8591 19.3333 48.6293 19.3229C47.7144 19.3229 46.9766 19.2919 46.9766 19.2403C46.9766 19.1998 47.1554 18.7045 47.3658 18.122L47.3799 18.0829C47.6062 17.4836 48.3342 15.5307 49.013 13.743C49.682 11.9554 50.9609 8.55582 51.8464 6.19987C52.7613 3.78192 53.5877 1.7153 53.7648 1.4673C53.9222 1.22964 54.2468 0.888648 54.4731 0.723318C54.7092 0.547655 55.1421 0.340993 55.4372 0.268661Z"
                  fill="#0A0A0A"
                />
                <path
                  d="M69.0628 19.2713L69.0333 9.63046L69.0136 0H72.1618V19.3229L69.0628 19.2713Z"
                  fill="#0A0A0A"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_8036_5652"
                    x1="19.2605"
                    y1="25.0338"
                    x2="32.5205"
                    y2="23.9854"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1B1B1B" />
                    <stop offset="1" stop-color="#787878" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_8036_5652"
                    x1="19.2605"
                    y1="25.0338"
                    x2="32.5205"
                    y2="23.9854"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1B1B1B" />
                    <stop offset="1" stop-color="#787878" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_8036_5652"
                    x1="19.2605"
                    y1="25.0338"
                    x2="32.5205"
                    y2="23.9854"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1B1B1B" />
                    <stop offset="1" stop-color="#787878" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[29px]">
            <NavItem text="Products" />
            <NavItem text="Solutions" />
            <NavItem text="Company" />
            <NavItem text="Resources" />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#0a0a0a] text-white px-8 py-4 rounded-[50px] font-inter text-[16px] hover:bg-neutral-700 transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6">
          <div className="flex flex-col gap-4">
            {["Products", "Solutions", "Company", "Resources"].map((item) => (
              <div key={item}>
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex items-center gap-2 w-full py-2 font-inter text-[16px] text-[#171717] hover:text-pink-600 transition-colors"
                >
                  {item}
                  <div
                    className={`w-4 h-4 transition-all ${activeDropdown === item ? "rotate-180" : ""}`}
                  >
                    <Icons.ChevronDown className="w-full h-full" />
                  </div>
                </button>
                {activeDropdown === item && (
                  <div className="mt-3 ml-4 pb-4 flex flex-col gap-2">
                    {/* SINGLE COLUMN (Company, Resources) */}
                    {dropdownItems[item].layout === "singleColumn" &&
                      dropdownItems[item].items?.map((subitem, idx) => (
                        <a
                          key={idx}
                          href={subitem.href}
                          className="px-3 py-2 text-sm text-[#171717] hover:text-pink-600"
                        >
                          {subitem.label}
                        </a>
                      ))}

                    {/* TWO COLUMN (Solutions) */}
                    {dropdownItems[item].mobileItems &&
                      dropdownItems[item].mobileItems.map((subitem, idx) => (
                        <a
                          key={idx}
                          href={subitem.href}
                          className="px-3 py-2 text-sm text-[#171717] hover:text-pink-600"
                        >
                          {subitem.label}
                        </a>
                      ))}

                    {/* THREE COLUMN (Products) */}
                    {!dropdownItems[item].layout &&
                      [1, 2, 3].map((col) =>
                        dropdownItems[item][`column${col}`]?.items?.map(
                          (subitem, idx) => (
                            <a
                              key={`${col}-${idx}`}
                              href={subitem.href}
                              className="px-3 py-2 text-sm text-[#171717] hover:text-pink-600"
                            >
                              {subitem.label}
                            </a>
                          ),
                        ),
                      )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <button className="w-full bg-[#0a0a0a] text-white px-8 py-4 rounded-[50px] font-inter text-[16px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
