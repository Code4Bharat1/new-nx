"use client";
import React, { useState } from "react";
import {
  Globe,
  Lightbulb,
  Code2,
  Users,
  ShieldCheck,
  UserPlus,
  SlidersHorizontal,
} from "lucide-react";

const FEATURES = [
  {
    id: "1",
    title: "Global services",
    description: "Delivering reliable IT solutions across the globe.",
    Icon: Globe,
    chipBg: "#E6F1FB",
    hoverBg: "#EDF5FD",
    hoverBorder: "#BCE0FD",
    color: "#378ADD",
    dotColor: "#38BDF8",
  },
  {
    id: "2",
    title: "Innovation-led",
    description: "Driving innovation to build smarter digital solutions.",
    Icon: Lightbulb,
    chipBg: "#FAEEDA",
    hoverBg: "#FCF5E8",
    hoverBorder: "#F6DCB0",
    color: "#BA7517",
    dotColor: "#F59E0B",
  },
  {
    id: "3",
    title: "Digital transformation",
    description: "Empowering businesses through digital transformation.",
    Icon: Code2,
    chipBg: "#E1F5EE",
    hoverBg: "#EBF8F3",
    hoverBorder: "#B5ECD8",
    color: "#1D9E75",
    dotColor: "#10B981",
  },
  {
    id: "4",
    title: "Client-centric",
    description: "Focused on client success and long-term partnerships.",
    Icon: Users,
    chipBg: "#EEEDFE",
    hoverBg: "#F3F2FE",
    hoverBorder: "#CEC9FC",
    color: "#534AB7",
    dotColor: "#8B5CF6",
  },
  {
    id: "5",
    title: "Trusted partner",
    description: "A dependable partner you can count on, always.",
    Icon: ShieldCheck,
    chipBg: "#EEEDFE",
    hoverBg: "#F1F0FD",
    hoverBorder: "#C8C3F8",
    color: "#3C3489",
    dotColor: "#6366F1",
  },
  {
    id: "6",
    title: "Talented, dedicated team",
    description: "Skilled professionals committed to your success.",
    Icon: UserPlus,
    chipBg: "#FBEAF0",
    hoverBg: "#FDF0F4",
    hoverBorder: "#F8C0D4",
    color: "#D4537E",
    dotColor: "#EC4899",
  },
  {
    id: "7",
    title: "Customized for growth, efficiency",
    description: "Tailored solutions that drive growth and efficiency.",
    Icon: SlidersHorizontal,
    chipBg: "#FAEEDA",
    hoverBg: "#FEF4ED",
    hoverBorder: "#FBC8AF",
    color: "#D85A30",
    dotColor: "#F97316",
  },
];

const AboutusInfo = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const row1Features = FEATURES.slice(0, 4);
  const row2Features = FEATURES.slice(4, 7);

  return (
    <section className="w-full min-h-screen bg-[#F8FAFC] pt-3 sm:pt-4 lg:pt-5 pb-6 sm:pb-8 lg:pb-10 relative overflow-hidden flex flex-col justify-center items-center select-none">
      {/* Subtle Background Rings & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Outer subtle concentric circles */}
        <div className="w-[850px] h-[850px] rounded-full border border-slate-200/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="w-[1200px] h-[1200px] rounded-full border border-slate-200/35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
        {/* Soft Radial Gradients */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-100/25 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-4 sm:gap-5 lg:gap-5">
        {/* HEADER SECTION */}
        <div className="w-full flex flex-col items-center text-center gap-1.5 sm:gap-2">
          {/* Main Title */}
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-black text-[#0B1D33] tracking-tight leading-tight">
            NEXCORE{" "}
            <span className="bg-gradient-to-r from-[#ff6600] to-[#f59e0b] bg-clip-text text-transparent">
              ALLIANCE LLP
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-slate-500 max-w-[640px] leading-relaxed">
            A leading IT solutions provider, specializing in cutting-edge technology and business
            excellence for clients worldwide.
          </p>
        </div>

        {/* 7 FEATURE CARDS (4 in Row 1, 3 centered in Row 2) */}
        <div className="w-full flex flex-col items-center gap-3.5 sm:gap-4 lg:gap-4.5">
          {/* Row 1: 4 Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5">
            {row1Features.map((item) => {
              const Icon = item.Icon;
              const isHovered = hoveredFeature === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredFeature(item.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    backgroundColor: isHovered ? item.hoverBg : "#FFFFFF",
                    borderColor: isHovered ? item.hoverBorder : "#F1F5F9",
                  }}
                  className="group relative rounded-2xl p-4 sm:p-5 lg:p-5 border shadow-[0_4px_16px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_30px_-6px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center overflow-hidden cursor-pointer"
                >
                  {/* Icon Chip */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:scale-110 shadow-xs ${
                      isHovered ? "bg-white shadow-md" : ""
                    }`}
                    style={{ backgroundColor: isHovered ? "#FFFFFF" : item.chipBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#0B1D33] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11.5px] sm:text-[12px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Accent Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                    style={{
                      backgroundColor: item.color,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Row 2: 3 Cards (Centered on Desktop) */}
          <div className="w-full sm:w-full lg:w-[76%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
            {row2Features.map((item, idx) => {
              const Icon = item.Icon;
              const isHovered = hoveredFeature === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredFeature(item.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    backgroundColor: isHovered ? item.hoverBg : "#FFFFFF",
                    borderColor: isHovered ? item.hoverBorder : "#F1F5F9",
                  }}
                  className={`group relative rounded-2xl p-4 sm:p-5 lg:p-5 border shadow-[0_4px_16px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_30px_-6px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center overflow-hidden cursor-pointer ${
                    idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Icon Chip */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:scale-110 shadow-xs ${
                      isHovered ? "bg-white shadow-md" : ""
                    }`}
                    style={{ backgroundColor: isHovered ? "#FFFFFF" : item.chipBg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#0B1D33] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11.5px] sm:text-[12px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Accent Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                    style={{
                      backgroundColor: item.color,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusInfo;
