"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

// Import local data
import { approachSteps, teamExpertise, metrics } from "./ApproachSecData";

// Lazy load the Modal component
const ApproachDetailModal = dynamic(() => import("./ApproachDetailModal"), {
  ssr: false,
});

const ApproachSec = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Top row: cards 0, 1, 2 (01, 02, 03)
  // Bottom row: cards 3, 4 (04, 05)
  const topSteps = approachSteps.slice(0, 3);
  const bottomSteps = approachSteps.slice(3, 5);

  const cardConfigs = [
    { rotate: -2.5 }, // 01
    { rotate: 0 },    // 02
    { rotate: 2.5 },   // 03
    { rotate: -2 },    // 04
    { rotate: 2 },     // 05
  ];

  const handleCardClick = (step) => {
    setSelectedStep(step);
  };

  /**
   * Pure transform calculation for 3-top / 2-bottom layout with hover physics
   */
  const getCardStyle = (index, rowIndex, rowHoveredIndex) => {
    const config = cardConfigs[index] || { rotate: 0 };

    // Default state
    if (hoveredIndex === null) {
      return {
        transform: `rotate(${config.rotate}deg)`,
        zIndex: 10 + index,
        opacity: 1,
        filter: "brightness(1)",
        boxShadow: "0 14px 35px rgba(0, 0, 0, 0.55)",
      };
    }

    // Active hovered card
    if (index === hoveredIndex) {
      return {
        transform: `translateY(-14px) scale(1.04) rotate(0deg) translateZ(30px)`,
        zIndex: 60,
        opacity: 1,
        filter: "brightness(1.05)",
        boxShadow: "0 25px 55px rgba(0, 0, 0, 0.85)",
      };
    }

    // Same row displacement
    if (rowHoveredIndex !== null) {
      if (rowIndex < rowHoveredIndex) {
        return {
          transform: `translateX(-24px) rotate(${config.rotate}deg) scale(0.98)`,
          zIndex: 10 + index,
          opacity: 0.9,
          filter: "brightness(0.9)",
          boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
        };
      }
      if (rowIndex > rowHoveredIndex) {
        return {
          transform: `translateX(24px) rotate(${config.rotate}deg) scale(0.98)`,
          zIndex: 10 + index,
          opacity: 0.9,
          filter: "brightness(0.9)",
          boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
        };
      }
    }

    // Other row cards
    return {
      transform: `rotate(${config.rotate}deg) scale(0.98)`,
      zIndex: 10 + index,
      opacity: 0.9,
      filter: "brightness(0.9)",
      boxShadow: "0 8px 22px rgba(0, 0, 0, 0.4)",
    };
  };

  return (
    <section className="w-full bg-[#08153a] bg-gradient-to-b from-[#050d24] via-[#08153a] to-[#050d24] py-10 sm:py-14 md:py-16 relative overflow-hidden select-none border-t border-blue-900/40 text-white">
      {/* Background ambient lighting glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-16 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 shadow-xs">
            <div className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse" />
            <span className="text-xs text-cyan-300 font-bold uppercase tracking-widest">
              Our Process Workflow
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Our Approach –{" "}
            <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto font-normal">
            A structured, iterative lifecycle engineered to turn complex business requirements into high-impact digital solutions.
          </p>
        </div>

        {/* ─── 3 UP / 2 BELOW STRUCTURE (EXACT UNIFORM SIZE FOR ALL 5 CARDS) ─── */}
        <div
          className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-4 mb-10 sm:mb-14"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Top Row: 3 Cards (01, 02, 03) */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-5 lg:gap-6 w-full max-w-6xl">
            {topSteps.map((step, idx) => {
              const globalIndex = idx;
              const rowHoveredIdx = hoveredIndex !== null && hoveredIndex <= 2 ? hoveredIndex : null;
              const cardStyle = getCardStyle(globalIndex, idx, rowHoveredIdx);

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onClick={() => handleCardClick(step)}
                  className="relative cursor-pointer will-change-transform flex-shrink-0"
                  style={{
                    ...cardStyle,
                    transition:
                      "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Exact Uniform Size for all 5 cards */}
                  <div className="relative w-[285px] sm:w-[315px] lg:w-[345px] xl:w-[365px] aspect-[1024/720] rounded-[18px] lg:rounded-[22px] overflow-hidden bg-[#060e24] shadow-xl border border-white/10">
                    <Image
                      src={step.imgSrc}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1200px) 345px, 365px"
                      className="object-cover object-center pointer-events-none"
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Cards (04, 05) centered below with the exact same size */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 sm:gap-5 lg:gap-6 w-full max-w-4xl">
            {bottomSteps.map((step, idx) => {
              const globalIndex = idx + 3;
              const rowHoveredIdx = hoveredIndex !== null && hoveredIndex >= 3 ? hoveredIndex - 3 : null;
              const cardStyle = getCardStyle(globalIndex, idx, rowHoveredIdx);

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onClick={() => handleCardClick(step)}
                  className="relative cursor-pointer will-change-transform flex-shrink-0"
                  style={{
                    ...cardStyle,
                    transition:
                      "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Exact Uniform Size for all 5 cards */}
                  <div className="relative w-[285px] sm:w-[315px] lg:w-[345px] xl:w-[365px] aspect-[1024/720] rounded-[18px] lg:rounded-[22px] overflow-hidden bg-[#060e24] shadow-xl border border-white/10">
                    <Image
                      src={step.imgSrc}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1200px) 345px, 365px"
                      className="object-cover object-center pointer-events-none"
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── BOTTOM CTA CONTROLS (PROJECTS + CONTACT US) ─── */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16">
          <Link
            href="/casestudy"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 shadow-md hover:shadow-xl text-white text-xs sm:text-sm font-bold tracking-wide transition-all hover:scale-105 active:scale-95"
          >
            Explore Projects
          </Link>

          <span className="text-slate-400 font-bold text-sm">
            <FaPlus className="w-3 h-3" />
          </span>

          <Link
            href="/contactus"
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Track Record Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border border-white/10 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 text-white">
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-widest">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Summary */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamExpertise.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">{item.title}</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lazy-loaded Step Detail Modal */}
      {selectedStep && (
        <ApproachDetailModal
          step={selectedStep}
          onClose={() => setSelectedStep(null)}
        />
      )}
    </section>
  );
};

export default ApproachSec;