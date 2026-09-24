"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Users,
  Layers,
  Rocket,
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
  CheckCircle,
  FileText,
  UserCheck,
  Zap,
  BarChart,
  MessageSquare,
  Database,
  Cpu,
  Box,
  Code,
  Activity,
  Settings,
  Cloud,
  Globe,
  Star,
  ChevronRight,
  Target,
  Briefcase,
  Clock,
  X,
} from "lucide-react";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
    {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />}
    <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold tracking-wide">
      {text}
    </span>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      {Icon && (
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#1e40af] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-black mb-2 text-[#1e40af]">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
        {label}
      </div>
    </div>
  </div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  hovered,
  onHover,
}) => (
  <div
    onMouseEnter={onHover}
    className={`group relative bg-white border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
      hovered
        ? "border-[#1e40af] shadow-2xl -translate-y-2"
        : "border-gray-200 shadow-md hover:shadow-xl"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
        <div
          className={`p-3 sm:p-4 rounded-xl transition-all duration-300 ${
            hovered ? "scale-110" : ""
          }`}
          style={
            hovered
              ? { backgroundColor: "#1e40af" }
              : { backgroundColor: "#eff6ff" }
          }
        >
          <Icon
            className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
              hovered ? "text-white" : "text-[#1e40af]"
            }`}
          />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
              hovered ? "text-[#1e40af]" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {features && (
        <div className="space-y-2 sm:space-y-3 pt-4 border-t-2 border-gray-100">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-3 text-gray-700"
            >
              <CheckCircle
                className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 ${
                  hovered ? "text-[#1e40af]" : "text-[#3b82f6]"
                }`}
              />
              <span className="text-sm sm:text-base font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const AIAgentCard = ({ icon: Icon, title, description }) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-[#1e40af]">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1e40af] group-hover:text-white transition-colors duration-300" />
      </div>
      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#1e40af] transition-colors">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const TechStackCard = ({ name, icon: Icon }) => (
  <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 cursor-pointer hover:border-[#1e40af] hover:shadow-xl hover:-translate-y-2">
    <div className="relative z-10">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1e40af] rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-[#1e40af] transition-colors">
        {name}
      </div>
    </div>
  </div>
);

const ClientLogo = ({ name, country, flag }) => (
  <div className="group bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-[#3b82f6] hover:shadow-lg transition-all duration-300 h-28 sm:h-32 hover:-translate-y-1">
    <div className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-300">
      {flag}
    </div>
    <div className="text-center">
      
      <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{country}</div>
    </div>
  </div>
);

const TestimonialCard = ({
  author,
  role,
  company,
  country,
  rating,
  impact,
}) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-[#3b82f6] transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200">
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-[#1e40af]" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm sm:text-base text-gray-900">
            {company}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">{country}</div>
        </div>
      </div>

      <div className="flex gap-1 mb-4 sm:mb-5">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-4 sm:p-5 mb-4 sm:mb-5 border border-blue-100">
        <div className="text-xl sm:text-2xl font-black text-[#1e40af] mb-1">
          {impact.metric}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 font-semibold">
          {impact.label}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t-2 border-gray-100">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e40af]" />
        </div>
        <div>
          <div className="font-bold text-sm sm:text-base text-gray-900">
            {author}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description, icon: Icon }) => (
  <div className="relative group">
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1e40af] rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-black flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-6 h-6 text-[#f97316]" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              {title}
            </h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function NexCoreLanding() {
  const [hoveredCard, setHoveredCard] = useState(0);
  const [isCapabilityPaused, setIsCapabilityPaused] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  // Auto-cycle loop for Comprehensive AI Capabilities 4 cards (0 -> 1 -> 2 -> 3 -> 0)
  useEffect(() => {
    if (isCapabilityPaused) return;

    const interval = setInterval(() => {
      setHoveredCard((prev) => ((prev ?? 0) + 1) % 4);
    }, 3500);

    return () => clearInterval(interval);
  }, [isCapabilityPaused]);

  const globalClients = [
    { name: "Al Khaleej Technologies", country: "Qatar", flag: "🇶🇦" },
    { name: "Riyadh Digital Group", country: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Gulf Innovation Partners", country: "UAE", flag: "🇦🇪" },
    // { name: "Northern Tech Solutions", country: "Canada", flag: "🇨🇦" },
    { name: "Muscat Systems Ltd", country: "Oman", flag: "🇴🇲" },
    { name: "Bay Financial Services", country: "Kuwait", flag: "🇰🇼" },
  ];

 
const testimonials = [
  // AI Solutions
  {
    author: "Sarah Mitchell",
    role: "CTO",
    company: "FinTech Global",
    country: "New York, USA",
    rating: 5,
    impact: { metric: "75%", label: "Processing Time Reduced" },
    service: "AI Solutions"
  },
  {
    author: "Dr. James Wong",
    role: "Head of AI",
    company: "MediHealth Plus",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "3 Weeks", label: "Production-Ready Delivery" },
    service: "AI Development"
  },
  
  // Web Development
  {
    author: "Mohammed Al-Rashid",
    role: "CEO",
    company: "Gulf E-Commerce Hub",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "10x", label: "Revenue Growth" },
    service: "Web Development"
  },
  {
    author: "Jennifer Thompson",
    role: "Marketing Director",
    company: "Pacific Solutions",
    country: "Sydney, Australia",
    rating: 5,
    impact: { metric: "350%", label: "Traffic Increase" },
    service: "Web Design"
  },
  
  // App Development
  {
    author: "David Chen",
    role: "Product Manager",
    company: "Northern Mobile Apps",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "500K+", label: "App Downloads" },
    service: "Mobile App Development"
  },
  {
    author: "Fatima Al-Hassan",
    role: "Tech Lead",
    company: "Riyadh Digital Hub",
    country: "Riyadh, Saudi Arabia",
    rating: 5,
    impact: { metric: "4.8★", label: "App Store Rating" },
    service: "iOS & Android Apps"
  },
  
  // Odoo ERP
  {
    author: "Fatima Al-Zaabi",
    role: "IT Director",
    company: "Qatar Retail Group",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "85%", label: "Cost Savings" },
    service: "Odoo ERP Implementation"
  },
  {
    author: "Ahmed Al-Mansouri",
    role: "Operations Head",
    company: "Muscat Manufacturing",
    country: "Muscat, Oman",
    rating: 5,
    impact: { metric: "70%", label: "Process Efficiency" },
    service: "Odoo Customization"
  },
  
  // Cloud Services
  {
    author: "Emma Richardson",
    role: "VP of Operations",
    company: "RetailTech Pro",
    country: "Sydney, Australia",
    rating: 5,
    impact: { metric: "99.9%", label: "Platform Uptime" },
    service: "Cloud Infrastructure"
  },
  {
    author: "Khalid bin Saleh",
    role: "CIO",
    company: "Kuwait Banking Corp",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "45%", label: "Infrastructure Cost Cut" },
    service: "Cloud Migration"
  },
  
  // E-commerce
  {
    author: "Sophia Martinez",
    role: "E-commerce Head",
    company: "Global Retail Platform",
    country: "Miami, USA",
    rating: 5,
    impact: { metric: "$5M+", label: "Annual Revenue" },
    service: "E-commerce Platform"
  },
  {
    author: "Nasser Al-Kuwari",
    role: "Business Owner",
    company: "Doha Online Store",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "250%", label: "Sales Growth" },
    service: "Online Store Development"
  },
  
  // Digital Marketing
  {
    author: "Nasser Al-Sabah",
    role: "Marketing Head",
    company: "Kuwait Digital Media",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "320%", label: "Lead Generation" },
    service: "Digital Marketing"
  },
  {
    author: "Rachel Green",
    role: "CMO",
    company: "Toronto Marketing Agency",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "180%", label: "ROI Increase" },
    service: "SEO & Social Media"
  },
  
  // Business Automation
  {
    author: "Aisha Mohammed",
    role: "Operations Manager",
    company: "Muscat Trading Co",
    country: "Muscat, Oman",
    rating: 5,
    impact: { metric: "60%", label: "Process Efficiency" },
    service: "Business Automation"
  },
  {
    author: "Michael Brown",
    role: "CFO",
    company: "Pacific Finance Group",
    country: "Vancouver, Canada",
    rating: 5,
    impact: { metric: "90%", label: "Manual Work Reduced" },
    service: "Workflow Automation"
  },
  
  // MVP Development
  {
    author: "Lisa Anderson",
    role: "Founder",
    company: "Vancouver Startups",
    country: "Vancouver, Canada",
    rating: 5,
    impact: { metric: "6 Weeks", label: "MVP Launch Time" },
    service: "MVP Development"
  },
  {
    author: "Omar Al-Fahad",
    role: "Startup CEO",
    company: "Gulf Innovation Labs",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "$500K", label: "Funding Raised" },
    service: "Startup MVP"
  },
  
  // Custom Software
  {
    author: "Khalid bin Abdullah",
    role: "Finance Director",
    company: "Gulf Financial Services",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "95%", label: "Accuracy Improved" },
    service: "Custom Software"
  },
  {
    author: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    company: "Northern Healthcare",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "80%", label: "Admin Time Saved" },
    service: "Healthcare Software"
  },
  
  // SaaS Development
  {
    author: "Abdullah Al-Rashid",
    role: "Product Owner",
    company: "Riyadh SaaS Solutions",
    country: "Riyadh, Saudi Arabia",
    rating: 5,
    impact: { metric: "1000+", label: "Active Subscribers" },
    service: "SaaS Platform"
  },
  {
    author: "James Wilson",
    role: "Tech Founder",
    company: "CloudBase Systems",
    country: "San Francisco, USA",
    rating: 5,
    impact: { metric: "99.95%", label: "Service Uptime" },
    service: "SaaS Development"
  },
  
  // DevOps & Infrastructure
  {
    author: "Mohammed bin Hassan",
    role: "Infrastructure Lead",
    company: "Qatar Tech Corporation",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "70%", label: "Deployment Speed" },
    service: "DevOps Services"
  },
  {
    author: "Robert Martinez",
    role: "DevOps Manager",
    company: "Pacific Cloud Services",
    country: "Seattle, USA",
    rating: 5,
    impact: { metric: "50%", label: "Infrastructure Cost Cut" },
    service: "CI/CD Pipeline"
  },
  
  // UI/UX Design
  {
    author: "Noura Al-Sulaiti",
    role: "Design Director",
    company: "Kuwait Creative Agency",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "85%", label: "User Satisfaction" },
    service: "UI/UX Design"
  },
  {
    author: "Emily Parker",
    role: "Product Designer",
    company: "Toronto Design Studio",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "200%", label: "User Engagement" },
    service: "UX Research"
  }
];


  const aiSolutions = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI-powered automation to modernize and scale operations.",
      features: ["Smart Workflows", "Predictive Insights", "Efficiency Boost"],
    },
    {
      icon: Sparkles,
      title: "Machine Learning Models",
      description: "High-performing ML models with real-world accuracy.",
      features: [
        "Custom Training",
        "Real-Time Analytics",
        "Adaptive Intelligence",
      ],
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description: "Turn raw data into powerful business insights.",
      features: ["Trend Forecasting", "BI Dashboards", "Data Mining"],
    },
    {
      icon: Shield,
      title: "Secure AI Infrastructure",
      description: "Enterprise-grade and fully compliant AI systems.",
      features: ["Encryption", "Governance", "Compliance"],
    },
  ];

  const agentDepartments = [
    {
      name: "Finance",
      themeColor: "text-[#2563eb]",
      cardBg: "bg-[#f0f7ff]",
      borderColor: "border-[#dbeafe] hover:border-blue-300",
      iconBoxBg: "bg-[#dbeafe] text-[#2563eb]",
      innerIconBg: "bg-blue-50 text-[#2563eb]",
      barColor: "bg-[#2563eb]",
      icon: Database,
      description: "Automate finance workflows and unlock efficiency with AI agents.",
      agentCount: "2 AI Agents",
      agents: [
        {
          icon: FileText,
          title: "Invoice Processing AI",
          description: "Automate finance workflows with precision.",
        },
        {
          icon: Database,
          title: "Data Processing AI",
          description: "Extract & analyze data instantly.",
        },
      ],
    },
    {
      name: "People",
      themeColor: "text-[#9333ea]",
      cardBg: "bg-[#faf5ff]",
      borderColor: "border-[#f3e8ff] hover:border-purple-300",
      iconBoxBg: "bg-[#f3e8ff] text-[#9333ea]",
      innerIconBg: "bg-purple-50 text-[#9333ea]",
      barColor: "bg-[#9333ea]",
      icon: Users,
      description: "Streamline HR operations and build stronger teams with AI.",
      agentCount: "2 AI Agents",
      agents: [
        {
          icon: UserCheck,
          title: "HR Onboarding AI",
          description: "Auto-onboard employees flawlessly.",
        },
        {
          icon: Users,
          title: "Recruitment AI Assistant",
          description: "Screen candidates 3x faster.",
        },
      ],
    },
    {
      name: "Operations",
      themeColor: "text-[#16a34a]",
      cardBg: "bg-[#f0fdf4]",
      borderColor: "border-[#dcfce7] hover:border-green-300",
      iconBoxBg: "bg-[#dcfce7] text-[#16a34a]",
      innerIconBg: "bg-green-50 text-[#16a34a]",
      barColor: "bg-[#16a34a]",
      icon: Settings,
      description: "Automate, monitor, and ensure compliance with intelligent agents.",
      agentCount: "3 AI Agents",
      agents: [
        {
          icon: Zap,
          title: "Workflow Automation AI",
          description: "Automate repetitive tasks effortlessly.",
        },
        {
          icon: BarChart,
          title: "Monitoring Agents",
          description: "Real-time system & performance insights.",
        },
        {
          icon: Shield,
          title: "Compliance AI Agent",
          description: "Monitor compliance automatically.",
        },
      ],
    },
    {
      name: "Growth",
      themeColor: "text-[#ea580c]",
      cardBg: "bg-[#fff7ed]",
      borderColor: "border-[#ffedd5] hover:border-orange-300",
      iconBoxBg: "bg-[#ffedd5] text-[#ea580c]",
      innerIconBg: "bg-orange-50 text-[#ea580c]",
      barColor: "bg-[#ea580c]",
      icon: TrendingUp,
      description: "Drive engagement, conversions and revenue with AI agents.",
      agentCount: "2 AI Agents",
      agents: [
        {
          icon: MessageSquare,
          title: "Marketing Automation AI",
          description: "Automate campaigns end-to-end.",
        },
        {
          icon: TrendingUp,
          title: "Sales Assistant AI",
          description: "Boost sales conversions with AI.",
        },
      ],
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Understand your needs and define AI solution scope",
      icon: MessageSquare,
    },
    {
      number: 2,
      title: "Design",
      description: "Create custom AI architecture and workflow design",
      icon: Target,
    },
    {
      number: 3,
      title: "Development",
      description: "Build and train AI models with your data",
      icon: Code,
    },
    {
      number: 4,
      title: "Deployment",
      description: "Launch AI agents in production environment",
      icon: Rocket,
    },
  ];

  const techTabs = ["AI Frameworks", "Development Tools", "Cloud & Deployment"];

  const techStackData = {
    "AI Frameworks": [
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Activity },
      { name: "Hugging Face", icon: Sparkles },
    ],
    "Development Tools": [
      { name: "Python", icon: Code },
      { name: "Jupyter", icon: FileText },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: BarChart },
    ],
    "Cloud & Deployment": [
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Settings },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
    ],
  };

  const stats = [
    { icon: Award, value: "98.5%", label: "AI Accuracy" },
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Globe, value: "6", label: "Countries Served" },
    { icon: Rocket, value: "7 Days", label: "AI Agent Delivery" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "AI agents deployed in just 7 days",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98.5% accuracy across all implementations",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated AI specialists",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Central AI Brain Hero Section - Fit to Screen */}
      <section className="relative bg-white min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-14 sm:pt-16 lg:pt-16 pb-4 sm:pb-6 overflow-hidden">
        {/* Soft atmospheric ambient glow - subtle blue and purple */}
        <div className="absolute top-8 left-1/4 w-[450px] h-[450px] bg-blue-100/35 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-12 right-8 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-16 left-8 w-[350px] h-[350px] bg-cyan-50/35 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle tech background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.12) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(30, 64, 175, 0.12) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-between">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center my-auto py-2 sm:py-4">
            
            {/* LEFT SIDE CONTENT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              {/* Category Name */}
              <div className="text-xs sm:text-sm font-extrabold text-[#1e40af] tracking-widest uppercase">
                AI-POWERED ENTERPRISE SOLUTIONS
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-black text-gray-900 mt-4 sm:mt-5 tracking-tight leading-[1.1]">
                Intelligence <br className="hidden sm:inline" />
                That Drives <br />
                <span className="bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                  Business Excellence
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 leading-relaxed max-w-lg">
                Delivering future-ready AI systems that automate operations and
                boost performance across 5 countries worldwide.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-5 sm:mt-6 w-full sm:w-auto">
                <Link
                  href="/contactus"
                  className="w-full sm:w-auto group bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold shadow-md shadow-blue-700/20 hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/casestudy"
                  className="w-full sm:w-auto bg-white border-2 border-[#1e40af] hover:bg-blue-50/70 text-[#1e40af] px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold hover:-translate-y-0.5 shadow-sm transition-all duration-200 flex items-center justify-center text-sm sm:text-base"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: CENTRAL AI BRAIN WITH 4 CAPABILITIES */}
            <div className="relative w-full flex flex-col items-center justify-center">
              
              {/* Central AI Brain Visual Container with Floating Capabilities */}
              <div className="relative w-full max-w-[560px] aspect-[560/420] flex items-center justify-center">
                
                {/* SVG Connecting Lines and Orbital Energy Rings */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 560 420"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="lineGradCyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                    <linearGradient id="lineGradOrangeBlue" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="lineGradBlueCyan" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="lineGradIndigoViolet" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Concentric high-tech orbital rings */}
                  <circle cx="280" cy="210" r="145" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
                  <circle cx="280" cy="210" r="195" stroke="#e9d5ff" strokeWidth="1.5" strokeDasharray="3 9" opacity="0.35" />
                  <circle cx="280" cy="210" r="240" stroke="#93c5fd" strokeWidth="1" opacity="0.2" />

                  {/* Tiny orbit energy particles */}
                  <circle cx="135" cy="210" r="3" fill="#38bdf8" filter="url(#glow)" />
                  <circle cx="425" cy="210" r="3" fill="#c084fc" filter="url(#glow)" />
                  <circle cx="280" cy="25" r="2.5" fill="#60a5fa" filter="url(#glow)" />

                  {/* Connection Line 1: Top-Left Card -> Brain */}
                  <path
                    d="M 160 75 C 200 75, 205 135, 235 160"
                    stroke="url(#lineGradCyanPurple)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 160 75 C 200 75, 205 135, 235 160"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="160" cy="75" r="3.5" fill="#38bdf8" />
                  <circle cx="160" cy="75" r="7" fill="#38bdf8" opacity="0.3" />
                  <circle cx="235" cy="160" r="3.5" fill="#818cf8" />
                  <circle cx="235" cy="160" r="8" fill="#818cf8" opacity="0.35" />

                  {/* Connection Line 2: Top-Right Card -> Brain */}
                  <path
                    d="M 400 75 C 360 75, 355 135, 325 160"
                    stroke="url(#lineGradOrangeBlue)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 400 75 C 360 75, 355 135, 325 160"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="75" r="3.5" fill="#f97316" />
                  <circle cx="400" cy="75" r="7" fill="#f97316" opacity="0.3" />
                  <circle cx="325" cy="160" r="3.5" fill="#3b82f6" />
                  <circle cx="325" cy="160" r="8" fill="#3b82f6" opacity="0.35" />

                  {/* Connection Line 3: Bottom-Left Card -> Brain */}
                  <path
                    d="M 160 345 C 200 345, 205 275, 230 250"
                    stroke="url(#lineGradBlueCyan)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 160 345 C 200 345, 205 275, 230 250"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="160" cy="345" r="3.5" fill="#2563eb" />
                  <circle cx="160" cy="345" r="7" fill="#2563eb" opacity="0.3" />
                  <circle cx="230" cy="250" r="3.5" fill="#06b6d4" />
                  <circle cx="230" cy="250" r="8" fill="#06b6d4" opacity="0.35" />

                  {/* Connection Line 4: Bottom-Right Card -> Brain */}
                  <path
                    d="M 400 345 C 360 345, 355 275, 330 250"
                    stroke="url(#lineGradIndigoViolet)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M 400 345 C 360 345, 355 275, 330 250"
                    stroke="#ffffff"
                    strokeWidth="1"
                    opacity="0.8"
                    strokeLinecap="round"
                  />
                  <circle cx="400" cy="345" r="3.5" fill="#6366f1" />
                  <circle cx="400" cy="345" r="7" fill="#6366f1" opacity="0.3" />
                  <circle cx="330" cy="250" r="3.5" fill="#a855f7" />
                  <circle cx="330" cy="250" r="8" fill="#a855f7" opacity="0.35" />
                </svg>

                {/* Central AI Brain Image & Core Ambient Glow */}
                <div className="relative z-15 flex items-center justify-center">
                  <div className="absolute w-56 h-56 sm:w-68 sm:h-68 bg-gradient-to-tr from-cyan-400/20 via-blue-500/25 to-purple-500/20 rounded-full blur-2xl pointer-events-none" />
                  <Image
                    src="/images/ai_brain_neural_core.jpg"
                    alt="Central AI Neural Brain"
                    width={360}
                    height={360}
                    priority
                    className="relative z-10 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[330px] xl:h-[330px] object-contain drop-shadow-[0_15px_35px_rgba(59,130,246,0.2)] select-none pointer-events-none mix-blend-multiply transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Desktop Floating Capability Cards */}
                <div className="hidden lg:block">
                  {/* Card 1: AI Intelligence (Top Left) */}
                  <div className="absolute top-1 left-0 xl:-left-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(30,64,175,0.12)] border border-blue-100/90 flex items-center gap-2.5 hover:scale-105 hover:shadow-[0_14px_30px_-5px_rgba(99,102,241,0.22)] transition-all duration-300 z-20 group">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100/80 transition-colors">
                      <Brain className="w-5 h-5 text-[#1e40af]" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        AI Intelligence
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        Smart Automation
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Fast Deployment (Top Right) */}
                  <div className="absolute top-1 right-0 xl:-right-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(249,115,22,0.12)] border border-orange-100/90 flex items-center gap-2.5 hover:scale-105 hover:shadow-[0_14px_30px_-5px_rgba(249,115,22,0.22)] transition-all duration-300 z-20 group">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100/80 transition-colors">
                      <Rocket className="w-5 h-5 text-[#f97316]" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        Fast Deployment
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        7 Days Delivery
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Enterprise Security (Bottom Left) */}
                  <div className="absolute bottom-2 left-0 xl:-left-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.12)] border border-blue-100/90 flex items-center gap-2.5 hover:scale-105 hover:shadow-[0_14px_30px_-5px_rgba(59,130,246,0.22)] transition-all duration-300 z-20 group">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100/80 transition-colors">
                      <Shield className="w-5 h-5 text-[#2563eb]" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        Enterprise Security
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        Bank-Grade Protection
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Growth Analytics (Bottom Right) */}
                  <div className="absolute bottom-2 right-0 xl:-right-2 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.12)] border border-indigo-100/90 flex items-center gap-2.5 hover:scale-105 hover:shadow-[0_14px_30px_-5px_rgba(99,102,241,0.22)] transition-all duration-300 z-20 group">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100/80 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100/80 transition-colors">
                      <TrendingUp className="w-5 h-5 text-[#4f46e5]" />
                    </div>
                    <div className="text-left pr-1">
                      <div className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight leading-none">
                        Growth Analytics
                      </div>
                      <div className="text-[11px] text-gray-500 font-medium mt-1 leading-none">
                        Real-time Insights
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile / Tablet Capability Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 lg:hidden w-full max-w-md">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-[#1e40af]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">AI Intelligence</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">Smart Automation</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-orange-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 h-4 text-[#f97316]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">Fast Deployment</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">7 Days Delivery</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-blue-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">Enterprise Security</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">Bank-Grade Protection</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-indigo-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#4f46e5]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 leading-none">Growth Analytics</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-none">Real-time Insights</div>
                  </div>
                </div>
              </div>

            </div>

          </div>



        </div>
      </section>


      {/* Client Success Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-4 shadow-sm">
              <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
              <span className="text-xs sm:text-sm font-bold text-yellow-700">
                CLIENT SUCCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1f2937] mb-3">
              Proven Results from Global Partners
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Real impact delivered to businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-[#1e3a8a] rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6 flex-wrap">
                <div>
                  <div className="text-3xl sm:text-4xl font-black">4.9/5</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Average Rating
                  </div>
                </div>
                <div className="border-l border-white/30 hidden sm:block"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black">35+</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Trusted Partners
                  </div>
                </div>
                <div className="border-l border-white/30 hidden sm:block"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black">98%</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg opacity-95 max-w-2xl mx-auto">
                Join the world's leading enterprises who've transformed their
                operations with our AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AI Capabilities Section - 3D Layered Pyramid Reference Redesign */}
      <section className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] py-18 sm:py-22 lg:py-28 overflow-hidden border-t border-gray-100">
        {/* Extremely subtle ambient lighting and glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-100/25 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 3-Column Grid: Left Content (30%), Center 3D Pyramid (40%), Right Detail Panels (30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* 1. TOP / LEFT CONTENT (Approx 30%) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left pr-0 lg:pr-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
                <span className="text-xs font-bold text-[#1e3a8a] tracking-wider uppercase">
                  COMPREHENSIVE CAPABILITIES
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] tracking-tight leading-[1.1] mb-4">
                Comprehensive <br />
                <span className="text-[#2563eb]">AI Capabilities</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mb-7">
                Enterprise-ready AI built for performance and reliability.
              </p>

              {/* 3 Supporting Points with Clean Line Icons */}
              <div className="space-y-4 sm:space-y-5 mb-8 w-full max-w-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-sm">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Smarter Operations</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Automate and streamline workflows</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-sm">
                    <BarChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Higher Efficiency</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Turn data into actionable insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 text-[#2563eb] shadow-sm">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">Trusted & Secure</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Built with enterprise-grade security</p>
                  </div>
                </div>
              </div>

              {/* Existing CTA */}
              <Link
                href="/contactus"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-white bg-[#1e40af] hover:bg-[#1e3a8a] shadow-lg shadow-blue-700/20 hover:shadow-xl hover:shadow-blue-700/30 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 2. CENTER: CONTENT CARD (Justify-Center, auto-loops through 4 cards) */}
            <div className="lg:col-span-4 flex items-center justify-center order-3 lg:order-2 w-full min-h-[300px]">
              {hoveredCard !== null && (() => {
                const popupData = [
                  {
                    number: "01",
                    title: "Intelligent Automation",
                    description: "AI-powered automation to modernize and scale operations.",
                    features: ["Smart Workflows", "Predictive Insights", "Efficiency Boost"],
                    numColor: "#2563eb",
                    checkColor: "#2563eb",
                  },
                  {
                    number: "02",
                    title: "Machine Learning Models",
                    description: "Tailored algorithms delivering accurate, real-time predictions.",
                    features: ["Custom Training", "Real-Time Analytics", "Adaptive Intelligence"],
                    numColor: "#8b5cf6",
                    checkColor: "#8b5cf6",
                  },
                  {
                    number: "03",
                    title: "Data Intelligence",
                    description: "Transform raw enterprise data into actionable strategic insights.",
                    features: ["Trend Forecasting", "BI Dashboards", "Data Mining"],
                    numColor: "#3b82f6",
                    checkColor: "#3b82f6",
                  },
                  {
                    number: "04",
                    title: "Secure AI Infrastructure",
                    description: "Enterprise-grade foundation with end-to-end data protection.",
                    features: ["Enterprise Encryption", "Governance & Control", "Compliance Standards"],
                    numColor: "#0f172a",
                    checkColor: "#334155",
                  },
                ];

                const pointerTops = ["32px", "82px", "140px", "195px"];
                const p = popupData[hoveredCard];

                return (
                  <div
                    key={hoveredCard}
                    onMouseEnter={() => setIsCapabilityPaused(true)}
                    onMouseLeave={() => setIsCapabilityPaused(false)}
                    className="relative w-full max-w-[340px] xl:max-w-[360px] rounded-3xl p-6 sm:p-7 bg-white border border-gray-100"
                    style={{
                      boxShadow: "0 20px 50px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                      animation: "popupFadeIn 0.25s ease-out both",
                    }}
                  >
                    {/* Speech bubble pointer arrow on the right pointing to pyramid on the right */}
                    <div
                      className="hidden lg:block absolute -right-[9px] w-4.5 h-4.5 bg-white border-t border-r border-gray-100 rotate-45 transition-all duration-300 ease-out z-10"
                      style={{ top: pointerTops[hoveredCard] }}
                    />

                    {/* Header row with Number, Divider, Title, and Indicator Pills */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-2xl sm:text-3xl font-black leading-none tracking-tight"
                          style={{ color: p.numColor }}
                        >
                          {p.number}
                        </span>
                        <div className="w-[1.5px] h-6 bg-gray-200" />
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                          {p.title}
                        </h3>
                      </div>
                      
                      {/* 4 Loop Indicator Pills */}
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-full border border-gray-100">
                        {[0, 1, 2, 3].map((idx) => (
                          <button
                            key={idx}
                            onClick={() => setHoveredCard(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              hoveredCard === idx
                                ? "w-4"
                                : "w-1.5 bg-gray-300 hover:bg-gray-400"
                            }`}
                            style={{
                              backgroundColor: hoveredCard === idx ? p.numColor : undefined,
                            }}
                            aria-label={`Go to card ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed mt-2 mb-4 font-normal">
                      {p.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100 mb-4" />

                    {/* Feature Bullet List */}
                    <ul className="space-y-3">
                      {p.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-xs sm:text-[13px] text-gray-700 font-semibold">
                          <CheckCircle
                            className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0"
                            style={{ color: p.checkColor }}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>

            {/* 3. RIGHT: 3D LAYERED PYRAMID (On the right) */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end order-2 lg:order-3 w-full">
              <div className="relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[430px] xl:max-w-[460px] aspect-square flex items-center justify-center">

                {/* Base Ambient Glow under Pyramid */}
                <div className="absolute inset-x-6 bottom-4 h-28 bg-gradient-to-t from-blue-500/15 via-purple-500/10 to-transparent blur-2xl rounded-full pointer-events-none" />

                {/* 3D Photorealistic Pyramid */}
                <Image
                  src="/images/ai_capabilities_pyramid.png"
                  alt="3D Layered AI Capabilities Pyramid"
                  width={520}
                  height={520}
                  priority
                  className="relative z-10 w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(30,58,138,0.15)]"
                />

                {/* ── INTERACTIVE HOTSPOT OVERLAYS ── */}
                <div
                  className="absolute inset-0 z-20"
                  onMouseEnter={() => setIsCapabilityPaused(true)}
                  onMouseLeave={() => setIsCapabilityPaused(false)}
                >

                  {/* Layer 1: Intelligent Automation (Top Cyan Cap) */}
                  <div
                    onMouseEnter={() => setHoveredCard(0)}
                    onClick={() => setHoveredCard(0)}
                    className={`absolute top-[7%] left-[27%] w-[46%] h-[24%] rounded-t-xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                      hoveredCard === 0 ? "scale-[1.04] -translate-y-1" : ""
                    }`}
                    style={{
                      filter: hoveredCard === 0
                        ? "brightness(1.18) drop-shadow(0 -3px 12px rgba(56,189,248,0.55))"
                        : "brightness(1)",
                    }}
                  >
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-0.5" style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.6))" }} />
                    <span className="text-[10px] sm:text-xs font-black text-white text-center leading-tight px-1" style={{ textShadow: "0 1px 5px rgba(0,0,0,0.65)" }}>
                      Intelligent Automation
                    </span>
                  </div>

                  {/* Layer 2: Machine Learning Models (Second Purple Slab) */}
                  <div
                    onMouseEnter={() => setHoveredCard(1)}
                    onClick={() => setHoveredCard(1)}
                    className={`absolute top-[29%] left-[19%] w-[62%] h-[23%] cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                      hoveredCard === 1 ? "scale-[1.04] -translate-y-1" : ""
                    }`}
                    style={{
                      filter: hoveredCard === 1
                        ? "brightness(1.18) drop-shadow(0 -3px 12px rgba(168,85,247,0.55))"
                        : "brightness(1)",
                    }}
                  >
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-0.5" style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.6))" }} />
                    <span className="text-[10px] sm:text-xs font-black text-white text-center leading-tight px-1" style={{ textShadow: "0 1px 5px rgba(0,0,0,0.65)" }}>
                      Machine Learning Models
                    </span>
                  </div>

                  {/* Layer 3: Data Intelligence (Third Royal Blue Slab) */}
                  <div
                    onMouseEnter={() => setHoveredCard(2)}
                    onClick={() => setHoveredCard(2)}
                    className={`absolute top-[51%] left-[11%] w-[78%] h-[23%] cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                      hoveredCard === 2 ? "scale-[1.04] -translate-y-1" : ""
                    }`}
                    style={{
                      filter: hoveredCard === 2
                        ? "brightness(1.18) drop-shadow(0 -3px 12px rgba(59,130,246,0.55))"
                        : "brightness(1)",
                    }}
                  >
                    <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-0.5" style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.6))" }} />
                    <span className="text-[10px] sm:text-xs font-black text-white text-center leading-tight px-1" style={{ textShadow: "0 1px 5px rgba(0,0,0,0.65)" }}>
                      Data Intelligence
                    </span>
                  </div>

                  {/* Layer 4: Secure AI Infrastructure (Bottom Slate Navy Slab) */}
                  <div
                    onMouseEnter={() => setHoveredCard(3)}
                    onClick={() => setHoveredCard(3)}
                    className={`absolute top-[73%] left-[3%] w-[94%] h-[25%] rounded-b-xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                      hoveredCard === 3 ? "scale-[1.04] -translate-y-1" : ""
                    }`}
                    style={{
                      filter: hoveredCard === 3
                        ? "brightness(1.15) drop-shadow(0 -3px 12px rgba(15,23,42,0.5))"
                        : "brightness(1)",
                    }}
                  >
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white mb-0.5" style={{ filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.6))" }} />
                    <span className="text-[10px] sm:text-xs font-black text-white text-center leading-tight px-1" style={{ textShadow: "0 1px 5px rgba(0,0,0,0.65)" }}>
                      Secure AI Infrastructure
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Popup animation keyframe */}
          <style>{`
            @keyframes popupFadeIn {
              from { opacity: 0; transform: translateY(6px) scale(0.97); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

        </div>
      </section>

      {/* Process Section - 3D Stepped Staircase Podium */}
      <section className="bg-[#050f28] min-h-screen py-10 sm:py-14 relative overflow-hidden flex flex-col justify-center">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_35%,rgba(20,55,135,0.4),transparent_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 rounded-full bg-[#091b42]/90 border border-blue-500/40 text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(30,64,175,0.3)]">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#f97316] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#f97316]" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-blue-100 uppercase">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2.5 tracking-tight">
              From Concept to <span className="text-[#38bdf8]">Deployment</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300/80 mt-1.5 font-medium max-w-xl mx-auto">
              Streamlined AI implementation in 4 simple steps
            </p>
          </div>

          {/* 3D Stepped Staircase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 items-end pt-5 pb-1">
            {[
              {
                number: 1,
                title: "Consultation",
                description: "Understand your needs and define AI solution scope",
                icon: MessageSquare,
                badgeGradient: "from-[#38bdf8] via-[#2563eb] to-[#1d4ed8]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(56,189,248,0.9),0_0_35px_rgba(37,99,235,0.5)]",
                badgeBorder: "border-sky-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[20px]",
              },
              {
                number: 2,
                title: "Design",
                description: "Create custom AI architecture and workflow design",
                icon: Target,
                badgeGradient: "from-[#c084fc] via-[#9333ea] to-[#6b21a8]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(192,132,252,0.9),0_0_35px_rgba(147,51,234,0.5)]",
                badgeBorder: "border-purple-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[48px]",
              },
              {
                number: 3,
                title: "Development",
                description: "Build and train AI models with your data",
                icon: Code,
                badgeGradient: "from-[#60a5fa] via-[#0284c7] to-[#0369a1]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(96,165,250,0.9),0_0_35px_rgba(2,132,199,0.5)]",
                badgeBorder: "border-cyan-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[76px]",
              },
              {
                number: 4,
                title: "Deployment",
                description: "Launch AI agents in production environment",
                icon: Rocket,
                badgeGradient: "from-[#fbbf24] via-[#f97316] to-[#c2410c]",
                badgeGlow:
                  "shadow-[0_0_20px_rgba(251,191,36,0.9),0_0_35px_rgba(249,115,22,0.5)]",
                badgeBorder: "border-amber-300/60",
                pedestalHeight: "h-6 sm:h-8 lg:h-[104px]",
              },
            ].map((step, idx) => {
              const Icon = step.icon;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-stretch group cursor-pointer"
                >
                  {/* Card Section */}
                  <div className="relative pt-4">
                    {/* Floating Glowing Number Badge (overlapping top edge) */}
                    <div
                      className={`absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${step.badgeGradient} ${step.badgeGlow} border ${step.badgeBorder} flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {step.number}
                    </div>

                    {/* 3D Top Shelf with glowing blue edge */}
                    <div className="absolute top-1 inset-x-2 h-6 rounded-t-xl bg-gradient-to-b from-[#143575] to-[#091b40] border-t-2 border-[#38bdf8] shadow-[0_-2px_12px_rgba(56,189,248,0.6)] z-0 pointer-events-none" />

                    {/* Main Dark Navy Card Slab */}
                    <div className="relative z-10 rounded-2xl bg-gradient-to-b from-[#091838] via-[#05112a] to-[#040c20] border border-blue-500/40 p-4 pt-6 pb-5 text-center shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/80 group-hover:shadow-[0_15px_40px_rgba(14,165,233,0.25)] h-[180px] flex flex-col justify-center">
                      {/* Orange Icon */}
                      <div className="mb-2 flex justify-center">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#f97316] stroke-[2.2] transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-[11px] sm:text-xs text-slate-300/85 leading-relaxed max-w-[190px] mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* 3D Pedestal Step beneath each card */}
                  <div className="relative w-full z-0 mt-[-2px]">
                    {/* Cyan Illuminated Rim */}
                    <div className="h-1.5 w-full bg-[#0d2a6a] border-t-2 border-[#00d2ff] shadow-[0_0_12px_rgba(0,210,255,0.7)]" />
                    {/* Front 3D Face */}
                    <div
                      className={`w-full bg-gradient-to-b from-[#08204e] via-[#051536] to-[#030d22] border-x border-b border-blue-900/50 shadow-inner ${step.pedestalHeight}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

      {/* AI Agents Section - 4-Column Department Redesign */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Subtle background ambient accent */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle decorative dot pattern in bottom right corner */}
        <div className="absolute -bottom-4 right-8 opacity-25 pointer-events-none hidden lg:grid grid-cols-6 gap-2.5">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <HeroBadge icon={Cpu} text="HUMAN-LIKE AI AGENTS" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-[#1f2937] tracking-tight">
            Build Your AI Agent in{" "}
            <span className="text-[#2563eb]">7 Days</span>
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mt-4 mb-12 sm:mb-14 max-w-2xl mx-auto">
            Deploy intelligent automation agents that work 24/7 to transform
            your operations
          </p>

          {/* 4-Column Department Layout (Desktop: 4 cols, Tablet: 2 cols, Mobile: 1 col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            {agentDepartments.map((dept, dIdx) => {
              const DeptIcon = dept.icon;
              return (
                <div
                  key={dIdx}
                  className={`group relative ${dept.cardBg} border ${dept.borderColor} rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    {/* Department Header */}
                    <div className="flex items-start gap-3.5 mb-5 sm:mb-6">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ${dept.iconBoxBg}`}>
                        <DeptIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${dept.themeColor} leading-tight`}>
                          {dept.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-gray-600 mt-1 leading-relaxed">
                          {dept.description}
                        </p>
                      </div>
                    </div>

                    {/* Agent Items - Clean White Inner Cards */}
                    <div className="space-y-3">
                      {dept.agents.map((agent, aIdx) => {
                        const AgentIcon = agent.icon;
                        return (
                          <div
                            key={aIdx}
                            className="group/agent bg-white border border-gray-100 hover:border-gray-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-sm transition-all duration-200 cursor-pointer"
                          >
                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${dept.innerIconBg}`}>
                              <AgentIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="flex-1 min-w-0 pr-1">
                              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug group-hover/agent:text-slate-950">
                                {agent.title}
                              </h4>
                              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug line-clamp-2">
                                {agent.description}
                              </p>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover/agent:text-gray-700 group-hover/agent:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Line & Agent Count */}
                  <div className="mt-6 pt-3 flex items-center gap-2.5">
                    <span className={`w-7 h-1 rounded-full ${dept.barColor}`} />
                    <span className="text-xs font-semibold text-gray-500 tracking-wide">
                      {dept.agentCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered CTA */}
          <div className="text-center mt-12 sm:mt-16 flex flex-col items-center">
            <Link
              href="/contactus"
              className="group bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all inline-flex items-center gap-2.5 sm:gap-3"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get a Free Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 font-medium text-center mt-4">
              No commitment &nbsp;•&nbsp; See it in action &nbsp;•&nbsp; Built for your business
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <HeroBadge icon={Layers} text="INDUSTRY-LEADING TECHNOLOGY" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4">
            <span className="text-[#1e40af]">Cutting-Edge Tech Stack</span>
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto">
            Powered by the most advanced AI frameworks and tools in the industry
          </p>
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
            {techTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-[#1e40af] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {techStackData[techTabs[activeTab]].map((tech, i) => (
              <TechStackCard key={i} name={tech.name} icon={tech.icon} />
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              Explore Our Technology
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="relative bg-[#1e3a8a] p-10 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl text-center text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-300/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8 sm:mb-10">
              Partner with Nexcore Alliance LLP to accelerate innovation and
              unlock AI-powered growth.
            </p>
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
