"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Search, 
  X, 
  Bot, 
  Mic, 
  Layers, 
  AppWindow, 
  Cpu, 
  Boxes, 
  Building2, 
  Trophy, 
  Users, 
  FileText, 
  Mail,
  ArrowRight
} from "lucide-react";

const searchableItems = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    desc: "Agentic AI, LLM systems, RAG architecture & intelligent automation",
    category: "Services",
    path: "/aisolutions",
    icon: Bot,
  },
  {
    id: "voice-agent",
    title: "AI Voice Agent",
    desc: "Conversational voice intelligence, inbound/outbound telephony agents",
    category: "Services",
    path: "/voiceagent",
    icon: Mic,
  },
  {
    id: "odoo-erp",
    title: "Odoo ERP Solutions",
    desc: "Official Odoo implementation, customization, migration & offshore support",
    category: "Services",
    path: "/servicesweoffer",
    icon: Layers,
  },
  {
    id: "enterprise-apps",
    title: "Enterprise Apps Suite",
    desc: "16+ integrated business software suites for CRM, inventory, HR & finance",
    category: "Services",
    path: "/apps",
    icon: AppWindow,
  },
  {
    id: "it-services",
    title: "IT Services & Web Development",
    desc: "Full-stack software engineering, modern cloud web apps & mobile solutions",
    category: "Services",
    path: "/services",
    icon: Cpu,
  },
  {
    id: "our-products",
    title: "Our Products",
    desc: "Proprietary software built for ourselves, then productised for global scale",
    category: "Products",
    path: "/#products",
    icon: Boxes,
  },
  {
    id: "case-studies",
    title: "Case Studies (What We Think)",
    desc: "Real-world transformation case studies, ROI metrics and client outcomes",
    category: "Insights",
    path: "/casestudy",
    icon: FileText,
  },
  {
    id: "about-us",
    title: "About Nexcore Alliance",
    desc: "Since 2011, providing enterprise IT solutions, mission, values & leadership",
    category: "Company",
    path: "/aboutus",
    icon: Building2,
  },
  {
    id: "awards",
    title: "Awards & Recognition",
    desc: "14+ national and international honours across technology and innovation",
    category: "Company",
    path: "/#awards",
    icon: Trophy,
  },
  {
    id: "clients",
    title: "Client Stories & Testimonials",
    desc: "Trusted by 500+ global brands and enterprises worldwide",
    category: "Company",
    path: "/#clients",
    icon: Users,
  },
  {
    id: "contact-us",
    title: "Contact Us",
    desc: "Get in touch with our engineers, discuss project scope or request consultation",
    category: "Contact",
    path: "/contactus",
    icon: Mail,
  },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  // Reset & focus on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Global ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = query.trim()
    ? searchableItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
    : searchableItems;

  const handleSelect = (item) => {
    onClose();
    if (item.path.startsWith("/#")) {
      const id = item.path.replace("/#", "");
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      router.push(item.path);
    } else {
      router.push(item.path);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Dialog Box */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search services, products, case studies, or topics..."
            className="w-full text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-slate-500 bg-slate-100 rounded-md hover:bg-slate-200 hover:text-slate-700 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-50">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1">Try searching for &lsquo;AI&rsquo;, &lsquo;Odoo&rsquo;, &lsquo;Apps&rsquo;, or &lsquo;Case Studies&rsquo;</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-blue-50/80 text-blue-900"
                      : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{item.title}</span>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 my-auto transition-transform ${
                    isSelected ? "text-blue-600 translate-x-1" : "text-transparent"
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono">↓</kbd></span>
          <span>Select with <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono">↵</kbd></span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
