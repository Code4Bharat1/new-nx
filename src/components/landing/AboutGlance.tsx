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
  Rocket,
  Map,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import CountUp from "../common/CountUp";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  chipBg: string;
  hoverBg: string;
  hoverBorder: string;
  color: string;
  dotColor: string;
}

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  Icon: LucideIcon;
  chipBg: string;
  hoverBg: string;
  hoverBorder: string;
  color: string;
  ringBorder: string;
}

const FEATURES: FeatureItem[] = [
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

const STATS: StatItem[] = [
  {
    id: "1",
    label: "Projects delivered",
    value: 329,
    suffix: "+",
    Icon: Rocket,
    chipBg: "#E6F1FB",
    hoverBg: "#EDF5FD",
    hoverBorder: "#BCE0FD",
    color: "#378ADD",
    ringBorder: "border-[#378ADD]/40",
  },
  {
    id: "2",
    label: "Countries served",
    value: 6,
    suffix: "+",
    Icon: Map,
    chipBg: "#E1F5EE",
    hoverBg: "#EBF8F3",
    hoverBorder: "#B5ECD8",
    color: "#1D9E75",
    ringBorder: "border-[#1D9E75]/40",
  },
  {
    id: "3",
    label: "Success rate",
    value: 94,
    suffix: "%",
    Icon: TrendingUp,
    chipBg: "#FAEEDA",
    hoverBg: "#FCF5E8",
    hoverBorder: "#F6DCB0",
    color: "#BA7517",
    ringBorder: "border-[#BA7517]/40",
  },
];

export const AboutGlance: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const row1Features = FEATURES.slice(0, 4);
  const row2Features = FEATURES.slice(4, 7);

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 relative overflow-hidden flex items-center justify-center">
      {/* Subtle Background Rings & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[850px] h-[850px] rounded-full border border-slate-200/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="w-[1200px] h-[1200px] rounded-full border border-slate-200/35 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-100/25 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-9 sm:gap-11">
        {/* HEADER SECTION */}
        <div className="w-full flex flex-col items-center text-center gap-3.5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#FCEBDD] text-[#D85A30] text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase shadow-xs">
            ABOUT US
          </div>

          {/* Main Title */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#0B1D33] tracking-tight leading-tight">
            NEXCORE ALLIANCE LLP
          </h2>

          {/* Subtitle Description */}
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-slate-500 max-w-[580px] leading-relaxed">
            A leading IT solutions provider, specializing in cutting-edge technology and business
            excellence for clients worldwide.
          </p>
        </div>

        {/* 7 FEATURE CARDS (4 in Row 1, 3 centered in Row 2) */}
        <div className="w-full flex flex-col items-center gap-4 lg:gap-5">
          {/* Row 1: 4 Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                  className="group relative rounded-2xl p-6 sm:p-7 border shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_35px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden cursor-pointer"
                >
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-xs ${
                      isHovered ? "bg-white shadow-md" : ""
                    }`}
                    style={{ backgroundColor: isHovered ? "#FFFFFF" : item.chipBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0B1D33] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3.5px] transition-all duration-300"
                    style={{
                      backgroundColor: item.color,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Row 2: 3 Cards */}
          <div className="w-full sm:w-full lg:w-[78%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
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
                  className={`group relative rounded-2xl p-6 sm:p-7 border shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_35px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden cursor-pointer ${
                    idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-xs ${
                      isHovered ? "bg-white shadow-md" : ""
                    }`}
                    style={{ backgroundColor: isHovered ? "#FFFFFF" : item.chipBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0B1D33] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3.5px] transition-all duration-300"
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

        {/* 3 EQUAL STAT CARDS */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {STATS.map((item) => {
            const Icon = item.Icon;
            const isHovered = hoveredStat === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredStat(item.id)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  backgroundColor: isHovered ? item.hoverBg : "#FFFFFF",
                  borderColor: isHovered ? item.hoverBorder : "#F1F5F9",
                }}
                className="group relative rounded-2xl p-6 sm:p-7 border shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_35px_-8px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300 flex items-center gap-5 overflow-hidden cursor-pointer"
              >
                <div className="relative flex items-center justify-center shrink-0">
                  <div
                    className={`w-15 h-15 sm:w-16 sm:h-16 rounded-full border-2 ${item.ringBorder} flex items-center justify-center transition-transform duration-300 group-hover:rotate-45`}
                  >
                    <div
                      className="w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-xs transition-colors duration-300"
                      style={{ backgroundColor: isHovered ? "#FFFFFF" : item.chipBg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <div className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#0B1D33] tracking-tight leading-none">
                    <CountUp value={item.value} />
                    <span style={{ color: item.color }} className="font-extrabold ml-0.5">
                      {item.suffix}
                    </span>
                  </div>
                  <p className="text-[12.5px] sm:text-[13.5px] font-medium text-slate-500 mt-1.5">
                    {item.label}
                  </p>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[3.5px] transition-all duration-300"
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
    </section>
  );
};

export default AboutGlance;
