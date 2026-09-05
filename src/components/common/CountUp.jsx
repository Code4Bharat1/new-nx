"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const CountUp = ({ value, className = "" }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const span = spanRef.current;
    if (!span) return;

    const match = String(value).match(/^(\d+)(.*)$/);
    if (!match) {
      span.textContent = value;
      return;
    }

    const targetVal = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const obj = { current: 0 };

    const ctx = gsap.context(() => {
      const anim = gsap.to(obj, {
        current: targetVal,
        duration: 1.6,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          if (span) {
            span.textContent = `${Math.floor(obj.current)}${suffix}`;
          }
        },
        onComplete: () => {
          if (span) {
            span.textContent = `${targetVal}${suffix}`;
          }
        },
      });

      ScrollTrigger.create({
        trigger: span.closest("section") || span,
        start: "top 85%",
        onEnter: () => {
          obj.current = 0;
          if (span) span.textContent = `0${suffix}`;
          anim.restart();
        },
        onEnterBack: () => {
          obj.current = 0;
          if (span) span.textContent = `0${suffix}`;
          anim.restart();
        },
      });
    }, span);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`.trim()}>
      {value}
    </span>
  );
};

export default CountUp;
