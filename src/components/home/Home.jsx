// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import Navbar from "../layouts/navbar/Navbar";
// import HeroSection from "./HomeCard/HeroSection";
// import ServiceSection from "../home/ServicesHome/ServiceSection";
// import Footer from "../layouts/footer/Footer";

// // ✅ Lazy load below-fold sections — reduces initial JS bundle by ~60%
// const ApproachSection = dynamic(() => import("../home/Approach/ApproachSection"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const AboutusInfo = dynamic(() => import("../Aboutus/AboutusInfo/AboutusInfo"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const ValuesSection = dynamic(() => import("../Aboutus/Values/ValuesSection"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const Clientsec = dynamic(() => import("../Clients/ClientsSec/ClientsSec"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const ApproachSec = dynamic(() => import("../Approach/ApproachSec/ApproachSec"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const ServicesSection = dynamic(() => import("../Services/ServiceSection/ServiceSec"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const Awards = dynamic(() => import("../Awards/Awards"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });

// const Home = () => {
//   return (
//     <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
//       <Navbar />
      
//       {/* Above-fold — loaded eagerly */}
//       <section id="home">
//         <HeroSection />
//       </section>

//       <section id="services">
//         <ServiceSection />
//       </section>

//       {/* Below-fold — lazy loaded on scroll */}
//       <section id="approach">
//         <ApproachSection />
//       </section>

//       <section id="about">
//         <AboutusInfo />
//       </section>

//       <section id="values">
//         <ValuesSection />
//       </section>

//       <section id="clients">
//         <Clientsec />
//       </section>

//       <section id="approach-detail">
//         <ApproachSec />
//       </section>

//       <section id="all-services">
//         <ServicesSection />
//       </section>

//       <section id="awards">
//         <Awards />
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./HomeCard/HeroSection";
import LazySection from "./LazySection";

const StatsStrip = dynamic(
  () => import("../Aboutus/StatsStrip/StatsStrip"),
  { ssr: false }
);

const AboutusInfo = dynamic(
  () => import("../Aboutus/AboutusInfo/AboutusInfo"),
  { ssr: false }
);

const ValuesSection = dynamic(
  () => import("../Aboutus/Values/ValuesSection"),
  { ssr: false }
);

const ProductsSection = dynamic(
  () => import("../Products/ProductsSection"),
  { ssr: false }
);

const Clientsec = dynamic(
  () => import("../Clients/ClientsSec/ClientsSec"),
  { ssr: false }
);

const ClientTestimonials = dynamic(
  () => import("../Clients/ClientTestimonials/ClientTestimonials"),
  { ssr: false }
);

const ApproachSec = dynamic(
  () => import("../Approach/ApproachSec/ApproachSec"),
  { ssr: false }
);

const Awards = dynamic(
  () => import("../Awards/Awards"),
  { ssr: false }
);

const ReachSection = dynamic(
  () => import("../Reach/ReachSection"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("../layouts/footer/Footer"),
  { ssr: false }
);

import ServiceSection from "../home/ServicesHome/ServiceSection";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      const heroElement = document.getElementById("home");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
      <Navbar />

      {/* Above-fold — loaded eagerly */}
      <section id="home">
        <HeroSection />
      </section>
      <ServiceSection />

      {/* Below-fold — JS chunks download only when scrolled into view */}
      <LazySection id="stats-strip" minHeight={200}>
        <StatsStrip />
      </LazySection>
      <LazySection id="about" minHeight={600}>
        <AboutusInfo />
      </LazySection>
      <LazySection id="values" minHeight={600}>
        <ValuesSection />
      </LazySection>

      {/* Software we built for ourselves, then productised */}
      <LazySection id="products" minHeight={600}>
        <ProductsSection />
      </LazySection>

      {/* Client Projects */}
      <LazySection id="clients" minHeight={600}>
        <Clientsec />
      </LazySection>

      {/* Client Testimonials (What Our Clients Say) */}
      <LazySection id="client-testimonials" minHeight={500}>
        <ClientTestimonials />
      </LazySection>

      <LazySection id="approach-detail" minHeight={500}>
        <ApproachSec />
      </LazySection>
      <LazySection id="awards" minHeight={400}>
        <Awards />
      </LazySection>

      {/* 3D Global Reach Section (Eight countries. Six offices. One operating standard.) */}
      <LazySection id="reach" minHeight={700}>
        <ReachSection />
      </LazySection>

      <LazySection id="footer" minHeight={300}>
        <Footer />
      </LazySection>
    </div>
  );
};

export default Home;