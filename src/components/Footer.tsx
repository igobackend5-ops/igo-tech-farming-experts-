import React from "react";
import { Leaf, Award, MapPin, Mail, Phone, ExternalLink, ShieldCheck } from "lucide-react";

interface FooterProps {
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
}

export default function Footer({ onPageChange, isDarkMode }: FooterProps) {
  const years = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`border-t transition-all pt-16 pb-8 ${
      isDarkMode 
        ? "bg-[#0f172a]/95 border-slate-800 text-slate-300" 
        : "bg-slate-50 border-slate-200 text-slate-600"
    }`} id="corporate-footer-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid mapping links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 mb-12">
          
          {/* Logo & Parent Tribute column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center shadow">
                <Leaf className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <div>
                <span className={`font-sans font-black tracking-tight text-lg ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Tech Farming <span className="text-emerald-500">Expert</span>
                </span>
                <span className="text-[9px] block text-emerald-600 uppercase font-black tracking-widest leading-none mt-1">
                  IGO GROUP PRODUCT
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              We leverage advanced satellite diagnostic telemetry, AI-driven nutrient algorithms, and rugged custom IoT soil sensors to deliver world-class yield increases across 18 Indian states.
            </p>

            <div className="p-4 sleek-widget leading-relaxed space-y-1.5">
              <div className="text-[10px] tracking-wider uppercase font-extrabold text-emerald-500 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Founder & Chairman Address
              </div>
              <div className={`text-xs font-black ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                Dr. John Yesudhas
              </div>
              <p className="text-[10px] leading-relaxed italic">
                "Our guiding mission is to lift the economic yield of the Indian smallholder farmer. Through automated IoT sensors and fair market linkages, we aim to build a fully sustainable rural economic framework."
              </p>
              <span className="text-[9px] block text-slate-500 font-bold tracking-widest uppercase">
                Chairman, IGO Group of Companies
              </span>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="space-y-4">
            <h4 className={`text-xs uppercase tracking-wider font-extrabold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Platform Sitemap
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick("home")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                  Precision Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                  Agronomic Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("technology")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                  IoT & AI Stacks
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("community")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                  FPO & Farmers Node
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("blog")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer">
                  Agronomy Blog & Intel
                </button>
              </li>
            </ul>
          </div>

          {/* Tech stack categorization links */}
          <div className="space-y-4">
            <h4 className={`text-xs uppercase tracking-wider font-extrabold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              SaaS Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer text-slate-400">
                  IoT Field Sensors
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer text-slate-400">
                  AI Crop Advisory
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("technology")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer text-slate-400">
                  Satellite NDVI Monitoring
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer text-slate-400">
                  Cold Chain Logistics
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("services")} className="hover:text-emerald-500 transition-colors text-left cursor-pointer text-slate-400">
                  APMC Market Linkage
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Headquarters info */}
          <div className="space-y-4">
            <h4 className={`text-xs uppercase tracking-wider font-extrabold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Contact Bureau
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>IGO Group HQ:</strong><br />
                  Level 12, Agritech Center, Bandra Kurla Complex (BKC), Mumbai, MH - 400051
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-mono">+91 (22) 4800-9200</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-mono text-emerald-500">advisor@techfarmingexpert.co.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle trust badges row showing alignment with ICAR/NABARD */}
        <div className={`py-6 border-y flex flex-wrap gap-6 items-center justify-between text-xs font-semibold ${
          isDarkMode ? "border-slate-900 bg-slate-950/40" : "border-slate-200 bg-slate-100/40"
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Official APMC Digitized Supplier & ICAR Certified Research partner</span>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <span className="opacity-75 text-[10px]">NABARD COMPLIANT</span>
            <span className="opacity-75 text-[10px]">STARTUP INDIA INCUBATED</span>
            <span className="opacity-75 text-[10px]">FPO NETWORK RECOGNIZED</span>
          </div>
        </div>

        {/* Lower row copyrights */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-4">
          <div>
            &copy; {years} Tech Farming Expert. All rights reserved. Powering crop predictability across India.
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:underline">Privacy Charter</a>
            <a href="#terms" className="hover:underline">FPO Terms of Use</a>
            <a href="#safeguards" className="hover:underline">Soil Data Protection</a>
          </div>
          <div className="text-right text-[9px]">
            Designed to match Apple & Tesla high-contrast SaaS excellence.
          </div>
        </div>

      </div>
    </footer>
  );
}
