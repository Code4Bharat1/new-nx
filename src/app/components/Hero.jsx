"use client";

import React, { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted autoplay policy compliance across all modern browsers
    video.muted = true;
    video.defaultMuted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback catch if user gesture is required
      });
    }

    // Pause video when scrolled out of view to save CPU/GPU resources
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[550px] max-h-[920px] overflow-hidden bg-white flex items-center justify-center select-none">
      {/* Full-width and height fixed video without any cutting or cropping */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-fill pointer-events-none"
      >
        <source src="/Human_Machine_Hand_Touching.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
