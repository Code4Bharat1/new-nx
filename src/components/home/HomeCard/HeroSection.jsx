"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const HeroSection = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    if (!heroContentRef.current) return;

    // Smooth dip down and glide up entrance animation on visit
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(
      heroContentRef.current,
      { y: -15, opacity: 0.95 },
      { y: 35, opacity: 1, duration: 0.6, ease: "power2.out" }
    ).to(
      heroContentRef.current,
      { y: 0, duration: 0.85, ease: "power3.out" }
    );
  }, []);

  return (
    <section 
      id="hero" 
      className="w-full min-h-screen min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-[#08153a]"
    >
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div ref={heroContentRef} className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 lg:gap-14 xl:gap-16 w-full">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="max-w-3xl xl:max-w-4xl flex-1 text-white">
            <h1 className="font-bold text-5xl md:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <span className="block md:whitespace-nowrap">We don&apos;t just build</span>
              <span className="block md:whitespace-nowrap">software. We build</span>
              <span className="block mt-1">
                <em className="not-italic text-[#ff6600] relative inline-block">
                  outcomes.
                  <span
                    className="absolute bottom-1 left-0 w-full h-[3px] bg-[#ff6600] rounded-full opacity-80"
                    aria-hidden="true"
                  />
                </em>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-[1.6] max-w-2xl mb-10">
              Not a development agency: a partner who diagnoses your operational workflows, finds where cost and time leak out, and builds the Web, App, AI, Odoo, or WhatsApp system that fixes it.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="#contact">
                <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/20 cursor-pointer">
                  Talk to Us
                </button>
              </Link>
              <Link href="#services">
                <button className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Nexcore Alliance Logo in Rectangle Card */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-end justify-center">
            <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,120,255,0.25)] border border-slate-100 flex items-center justify-center transition-all duration-500 hover:shadow-[0_25px_70px_-10px_rgba(255,102,0,0.25)] hover:scale-[1.02] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[460px]">
              {/* Soft outer glow halo */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-orange-500/15 to-blue-600/20 rounded-[2.3rem] blur-2xl opacity-80 pointer-events-none -z-10"
                aria-hidden="true"
              />

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-[2rem] select-none pointer-events-none"
              >
                <source src="/NEXCORE_ALLIANCE_logo_animation_202608241009_gwr_video_mvp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;