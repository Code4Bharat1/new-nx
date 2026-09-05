"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPenNib,
  FaCog,
  FaCloud,
  FaWifi,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { allServices } from "./ServiceData";

// Category Icons mapping
const categoryIcons = {
  code: FaCode,
  pen: FaPenNib,
  gear: FaCog,
  cloud: FaCloud,
  iot: FaWifi,
  erp: FaChartBar,
};

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const totalCards = allServices.length;

  // Scroll to a specific card & elevate it on click
  const scrollToCard = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / totalCards;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  }, [totalCards]);

  const nextCard = useCallback(() => {
    const nextIdx = activeIndex === null ? 0 : (activeIndex + 1) % totalCards;
    scrollToCard(nextIdx);
  }, [activeIndex, scrollToCard, totalCards]);

  const prevCard = useCallback(() => {
    const prevIdx = activeIndex === null ? totalCards - 1 : (activeIndex - 1 + totalCards) % totalCards;
    scrollToCard(prevIdx);
  }, [activeIndex, scrollToCard, totalCards]);

  // Handle scroll events to update activeIndex on mobile/tablet if needed
  const handleScroll = () => {
    if (scrollContainerRef.current && activeIndex !== null) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / totalCards;
      const currentIdx = Math.round(container.scrollLeft / cardWidth);
      if (currentIdx !== activeIndex && currentIdx >= 0 && currentIdx < totalCards) {
        setActiveIndex(currentIdx);
      }
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-white py-14 sm:py-20 overflow-hidden select-none"
    >
      {/* Background Soft Ambient Spotlights on White */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-slate-100/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Tech Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(15, 23, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* ========================================================
            SECTION HEADER (Above Category Pills & Cards)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4"
          >
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#ff6600] to-[#f59e0b] bg-clip-text text-transparent">
              IT Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering businesses with cutting-edge technology and innovative solutions tailored to your unique needs.
          </motion.p>
        </div>

        {/* ========================================================
            TOP CATEGORY PILLS (Click to focus / pop-up that card)
           ======================================================== */}
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center gap-2 sm:gap-2.5 lg:gap-3 xl:gap-3.5 flex-wrap lg:flex-nowrap mb-8 sm:mb-12 px-2">
          {allServices.map((service, idx) => {
            const IconComponent = categoryIcons[service.iconType] || FaCode;
            const isPillActive = idx === activeIndex;

            return (
              <button
                key={service.id}
                onClick={() => scrollToCard(idx)}
                className={`group flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 lg:px-3.5 xl:px-4.5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] lg:text-[13px] xl:text-[14px] font-semibold tracking-wide transition-all duration-300 border cursor-pointer shrink-0 ${
                  isPillActive
                    ? "bg-[#1c0e05] border-[#ff6600] text-[#ff7714] shadow-[0_0_20px_rgba(255,102,0,0.45)] scale-105"
                    : "bg-[#0a152e]/90 border-slate-700/60 text-slate-300 hover:text-[#ff8824] hover:border-[#ff6600] hover:bg-[#1a0f07] hover:shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:scale-[1.02]"
                }`}
              >
                <div
                  className={`w-4.5 h-4.5 lg:w-5 lg:h-5 rounded-full flex items-center justify-center transition-colors ${
                    isPillActive
                      ? "text-[#ff6600]"
                      : "text-slate-400 group-hover:text-[#ff6600]"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                </div>
                <span className="font-mono text-xs font-medium opacity-75">{service.number}</span>
                <span className="whitespace-nowrap font-medium">{service.displayTitle || service.title}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            6-CARD SHOWCASE STAGE
            - Responsive 6-column grid on desktop (lg & xl): 100% visible, no cutoffs
            - Smooth swipeable carousel on mobile & tablet
           ======================================================== */}
        <div className="relative w-full max-w-[1520px] mx-auto px-1 sm:px-2">
          {/* Left Arrow Button (visible on mobile / tablet or whenever scrolling is possible) */}
          <button
            onClick={prevCard}
            aria-label="Previous Service"
            className="lg:hidden absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#081226]/90 border border-slate-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-[#0d1d3d] hover:text-cyan-300 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <FaChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextCard}
            aria-label="Next Service"
            className="lg:hidden absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#081226]/90 border border-slate-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-[#0d1d3d] hover:text-cyan-300 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <FaChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Cards Container: 6-column grid on desktop, horizontal scroll on mobile */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-6 items-center justify-start lg:justify-items-stretch gap-3 sm:gap-4 lg:gap-3 xl:gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pt-6 pb-6 px-1 w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {allServices.map((service, idx) => {
              const isCardActive = idx === activeIndex;

              return (
                <div
                  key={service.id}
                  onClick={() => scrollToCard(idx)}
                  className={`group relative flex-shrink-0 w-[240px] sm:w-[260px] lg:w-full aspect-[2/3] max-w-full rounded-[24px] sm:rounded-[28px] lg:rounded-[26px] xl:rounded-[30px] overflow-hidden cursor-pointer transition-all duration-300 ${
                    isCardActive
                      ? "-translate-y-4 scale-[1.03] z-30 shadow-[0_25px_50px_rgba(0,0,0,0.35)] ring-2 ring-blue-500/80"
                      : "translate-y-0 z-10 shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:scale-[1.015] opacity-95 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={`${service.cardImage || service.image}?v=new`}
                    alt={service.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 260px"
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    priority={idx < 4}
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PAGINATION DOTS INDICATOR (Bottom Center - on mobile/tablet)
           ======================================================== */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-5 sm:mt-7">
          {allServices.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToCard(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === activeIndex
                  ? "w-6 h-2 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}