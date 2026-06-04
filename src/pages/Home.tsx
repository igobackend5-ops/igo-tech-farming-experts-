import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, ShieldCheck, TrendingUp, Users, Cpu, Map, Zap, 
  ChevronRight, Radio, Sparkles, CheckCircle2, Play, RefreshCw, BarChart2,
  Droplets, Thermometer, Wheat, MessageSquare
} from "lucide-react";
import SmartCalculators from "../components/Calculator";
import SovereignEcosystem from "../components/SovereignEcosystem";

interface HomeProps {
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  selectedLang: string;
}

export default function Home({ onPageChange, isDarkMode, selectedLang }: HomeProps) {
  const [activeSoilLevel, setActiveSoilLevel] = useState<number>(38);
  const [activeCropScore, setActiveCropScore] = useState<number>(94);
  const [tickerIndex, setTickerIndex] = useState<number>(0);
  const [activeNdviCell, setActiveNdviCell] = useState<number | null>(4); // default highlighted satellite cell
  const [isDemoPlaying, setIsDemoPlaying] = useState<boolean>(false);

  // Regional language strings for localized welcoming
  const localGreetings: Record<string, string> = {
    en: "Where Precision Technology Meets the Indian Farmland",
    hi: "सटीक तकनीक और भारतीय कृषि का नया संगम",
    ta: "துல்லிய தொழில்நுட்பமும் இந்திய விவசாயமும் அரவணைக்கும் இடம்",
    ka: "ನಿಖರ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಭಾರತೀಯ ಕೃಷಿ ಸಂಗಮ",
    te: "సాంకేతిక పరిజ్ఞానంతో కూడిన భారతీయ వ్యవసాయం",
    mr: "कृषी तंत्रज्ञान आणि भारतीय शेतकरी यांचा सुरेख संगम"
  };

  const tickerItems = [
    { label: "MUMBAI APMC: Wheat (High Vigor) - ₹2,680 / q ▲ (+1.2%)", color: "text-emerald-400" },
    { label: "PUNE APMC: Tomato (Premium) - ₹3,100 / q ▲ (+3.4%)", color: "text-emerald-400" },
    { label: "KOLAR NODES: Potato (Grade A) - ₹1,850 / q ▼ (-0.5%)", color: "text-rose-400" },
    { label: "KHANNA mandi: Paddy (Basmati) - ₹4,450 / q ▲ (+2.1%)", color: "text-emerald-400" },
    { label: "GUJARAT COTTON Hub: Kapas - ₹7,250 / q ▲ (+0.8%)", color: "text-emerald-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  return (
    <div className={`space-y-24 pb-20 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`} id="home-view-container">
      
      {/* 1. TOP DYNAMIC PROCUREMENT TICKER */}
      <div className={`py-2.5 px-4 font-mono text-[11px] font-bold border-b transition-colors ${
        isDarkMode ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase text-slate-500 font-sans font-bold">LIVE PROCUREMENT COMMODITY APMC REGISTER:</span>
          </div>
          <div className="overflow-hidden min-h-[16px] flex-1 text-center sm:text-right">
            <AnimatePresence mode="wait">
              <motion.span
                key={tickerIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`inline-block ${tickerItems[tickerIndex].color}`}
              >
                {tickerItems[tickerIndex].label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-4" id="premium-hero-element">
        {/* Ambient color blobs behind hero */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Texts */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className={`inline-flex items-center gap-2 p-1.5 pr-3 rounded-full border text-[11px] font-extrabold uppercase tracking-wider ${
              isDarkMode ? "bg-slate-900 border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-700 shadow-sm"
            }`}>
              <span className="bg-emerald-600 text-white rounded-full px-2 py-0.5 font-sans font-black">
                NEW
              </span>
              <span className="font-sans font-semibold">
                {localGreetings[selectedLang] || localGreetings.en}
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Farm <span className="text-emerald-500">Smarter.</span><br />
              Grow <span className="text-emerald-600">Stronger.</span><br />
              Earn <span className="text-cyan-500">More.</span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Bridging precision digital technology with timetested Indian farming wisdom. Power your acreage using AI agronomy crop diagnostics, IoT moisture telemetry, satellite remote sensing maps, and smart direct-market APMC linkages under IGO Group.
            </p>

            {/* CTA Controls */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onPageChange("services")}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-transform hover:scale-[1.02] shadow-xl shadow-emerald-950/20 cursor-pointer flex items-center gap-2"
              >
                Explore Platform <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setIsDemoPlaying(!isDemoPlaying)}
                className={`px-6 py-3 border rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  isDarkMode 
                    ? "border-slate-800 bg-slate-900 hover:bg-slate-800 text-white" 
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm"
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isDemoPlaying ? "animate-pulse text-emerald-400" : ""}`} />
                {isDemoPlaying ? "Demo Active" : "Watch Demo"}
              </button>
            </div>

            {/* Small trust signal */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/20 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>
                IGO Group Trust Shield • 100% Secure Soil and yield-predictability telemetry.
              </span>
            </div>

          </div>

          {/* Right Hero Interactive Mockup Dashboard */}
          <div className="lg:col-span-6" id="dashboard-mockup-wrapper">
            <div className="p-5 sleek-card">
              
              {/* Mockup Header tab */}
              <div className="flex items-center justify-between border-b/10 border-slate-700/20 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="text-[10px] font-mono opacity-60 uppercase pl-3 border-l border-slate-700/20">
                    Live Telemetry Center
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-bold py-0.5 px-2 rounded">
                  <Radio className="w-3 h-3 animate-ping" /> Link Active
                </div>
              </div>

              {/* Crop Health score widget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                
                {/* Crop Health Score Block */}
                <div className="p-4 sleek-widget">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Average Crop Vigor Index</span>
                    <Wheat className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5 font-sans">
                    <span className="text-3xl font-black">{activeCropScore}%</span>
                    <span className="text-[10px] text-emerald-400 font-bold">SAT-NDVI</span>
                  </div>
                  
                  {/* Micro sliders representing active crop changes */}
                  <div className="mt-3 flex gap-1">
                    {[84, 89, 93, activeCropScore, 91].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col justify-end h-8 bg-slate-800/20 rounded">
                        <div 
                          className="w-full bg-emerald-500 rounded-t transition-all" 
                          style={{ height: `${val - 60}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soil Moisture Widget */}
                <div className="p-4 sleek-widget">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Soil Moisture VMC</span>
                    <Droplets className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5 font-sans">
                    <span className="text-3xl font-black">{activeSoilLevel}%</span>
                    <span className="text-[10px] text-sky-400 font-bold">IoT Node 4</span>
                  </div>

                  <div className="mt-4 space-y-1.5 font-sans">
                    <div className="text-[10px] flex justify-between text-slate-400">
                      <span>Drip sprinkler trigger status:</span>
                      <strong className="text-emerald-500 font-bold">Auto Standby</strong>
                    </div>
                    {/* Interactive Soil Slider Demo */}
                    <input 
                      type="range"
                      min="15"
                      max="75"
                      value={activeSoilLevel}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setActiveSoilLevel(val);
                        // shift crop score organically to show interactive connection
                        setActiveCropScore(Math.min(99, Math.max(76, 94 + (val - 38) / 3)));
                      }}
                      className="w-full h-1 rounded cursor-pointer"
                    />
                    <div className="text-[9px] uppercase tracking-wide text-slate-500 text-center font-bold">
                      Slide to test sprinkler trigger link
                    </div>
                  </div>
                </div>

              </div>

              {/* Big Dashboard Visual Plot */}
              <div className="p-4 sleek-widget text-xs text-left space-y-3 font-sans">
                <div className="flex justify-between items-center">
                  <span className="font-bold flex items-center gap-1.5 text-slate-300">
                    <BarChart2 className="w-3.5 h-3.5 text-emerald-400" /> Regional Fertigation Tracker (N-P-K Value)
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">ACREAGE #14B</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Nitrogen (N) - Soil retention</span>
                      <strong className="text-emerald-400">142 kg/ha (Optimal)</strong>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: "82%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>Phosphorus (P) - Root defense</span>
                      <strong className="text-emerald-400">62 kg/ha (Moderate)</strong>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full rounded-full" style={{ width: "58%" }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. ENTERPRISE COUNTER STATS SECTION */}
      <section className={`py-12 border-y transition-colors ${
        isDarkMode ? "bg-slate-900/40 border-slate-900" : "bg-slate-100 border-slate-200"
      }`} id="enterprise-counters-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 tracking-tight">
                240,000+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Farmers Onboarded
              </div>
              <p className="text-[10px] text-slate-400">Across co-ops and local FPOs</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>
                18 States
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                National Footprint
              </div>
              <p className="text-[10px] text-slate-400">Climatic zones in India</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-500 tracking-tight">
                ₹340+ Crore
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Farmer Cumulative Revenue Lift
              </div>
              <p className="text-[10px] text-slate-400">Post IoT & direct Direct market link</p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight">
                6.2 Lakh
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Acres Under Intelligence
              </div>
              <p className="text-[10px] text-slate-400">Monitored via Satellite daily</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TRUST LOGO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="trust-logos-block">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">
          Incubated & Powered in Compliance with Trust Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-85">
          {["NABARD Compliant", "ICAR Certified Partnership", "Startup India Registered", "FPO Network Endorsed", "SBI Kisan Link Compatibility", "Agricultural Universities Board"].map((item, index) => (
            <div 
              key={index} 
              className={`px-4 py-2 text-xs font-serif italic border rounded-lg uppercase tracking-wider font-extrabold select-none ${
                isDarkMode 
                  ? "border-slate-800 bg-slate-900/30 text-slate-400" 
                  : "border-slate-200 bg-white text-slate-500 shadow-xs"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="services-preview-panel">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-emerald-500 text-xs font-extrabold uppercase tracking-widest">
            Corporate Program Highlights
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Comprehensive Agronomic SaaS Services
          </h2>
          <p className="text-xs text-slate-400 leading-normal">
            Every product in the Tech Farming Expert spectrum is engineered around smallholder accessibility and enterprise-grade forecasting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "IoT Field Sensors",
              desc: "Deploy rugged real-time soil probes measuring Nitrogen, Phosphorus, Potassium (N-P-K), soil acidity, and active deep root hydration.",
              color: "text-emerald-500",
              slug: "services"
            },
            {
              title: "AI Crop Advisory",
              desc: "Receive actionable multi-lingual alerts directly to mobile concerning disease protection, pest diagnostics, and weather thresholds.",
              color: "text-emerald-500",
              slug: "services"
            },
            {
              title: "Market Linkage",
              desc: "Bypass middlemen broker commissions. Directly secure dynamic price schedules from verified urban APMC procurement houses.",
              color: "text-cyan-500",
              slug: "services"
            },
            {
              title: "Farm Automation",
              desc: "Automate irrigation solenoids or localized drip values based on real-time climate sensors and vapor pressure deficits.",
              color: "text-emerald-500",
              slug: "services"
            },
            {
              title: "Agri Finance",
              desc: "Gain rapid, lower-interest digital crop credit backing and soil-index validated risk mitigation scores for financial partners.",
              color: "text-emerald-500",
              slug: "services"
            },
            {
              title: "Supply Chain Technology",
              desc: "Safeguard high-value harvests with real-time refrigerated cold-room tracking and RFID tracking for export compliance.",
              color: "text-cyan-500",
              slug: "services"
            }
          ].map((service, idx) => (
            <div 
              key={idx}
              onClick={() => onPageChange(service.slug)}
              className={`p-6 rounded-xl border group hover:border-emerald-500/50 transition-all cursor-pointer ${
                isDarkMode 
                  ? "bg-slate-900/50 border-slate-800" 
                  : "bg-white border-slate-200/80 shadow-xs"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-emerald-500 font-extrabold text-xs">0{idx + 1}</span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS SECTION (TIMELINE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="how-it-works-timeline">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Onboarding Your Farm in 4 Simple Steps</h2>
          <p className="text-xs text-slate-400">Streamlined transition from traditional uncertainty to digital precision.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-center relative">
          {[
            { step: "Step 1", title: "Register Profile", desc: "Define your digital boundaries, acreage metrics, current soil conditions, and crop patterns." },
            { step: "Step 2", title: "Install Soil Probes", desc: "Deploy IGO certified cellular soil sensors, auto-pairing with regional micro-weather networks." },
            { step: "Step 3", title: "Monitor AI Feeds", desc: "Receive immediate crop warnings, water alerts, and precision nitrogen recommendations on your phone." },
            { step: "Step 4", title: "Procure and Earn", desc: "Directly schedule harvests and dispatch them with certified procurement buyers for 20%+ higher profit margin." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3 relative">
              <div className="mx-auto w-12 h-12 rounded-full bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
                0{idx + 1}
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">{item.step}</span>
              <h3 className="font-bold text-sm text-white" style={{ color: !isDarkMode ? "#1e293b" : "white" }}>
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE COHESIVE SATELLITE NDVI HEATMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="interactive-satellite-panel">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* NDVI Satellite simulation explainers */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">
              SATELLITE REMOTE SENSING
            </span>
            <h2 className="text-3xl font-extrabold leading-tight">
              Satellite-Derived Leaf Pigmentation Analytics (NDVI)
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our integration computes high-resolution spectral indices from Sentinel-2 assets. By calculating chlorophyll reflection, we predict water stress, leaf canopy nitrogen levels, and potential infestations up to 8 days before structural damage occurs.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-3 items-start bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10 text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200" style={{ color: !isDarkMode ? "#1e293b" : "white" }}>
                    Dynamic Chlorophyll Absorption
                  </h4>
                  <p className="text-[11px] text-slate-400">Healthy leaves absorb red light and reflect near-infrared radiation.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start bg-cyan-500/5 p-3 rounded-xl border border-cyan-500/10 text-xs">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200" style={{ color: !isDarkMode ? "#1e293b" : "white" }}>
                    Early Pest Isolation
                  </h4>
                  <p className="text-[11px] text-slate-400">Pest clusters damp chlorophyll reflections, flagging visual stress pixels.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Satellite Interactive Field Heatmap Canvas Grid */}
          <div className="lg:col-span-7">
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-lg"
            }`}>
              <div className="flex justify-between items-center mb-4 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Cpu className="w-4 h-4 text-emerald-400" /> Plot Sentinel NDVI Map Simulator
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  Coordinates: <span className="text-emerald-400">18.52° N, 73.85° E</span>
                </div>
              </div>

              {/* Heatmap Grid blocks represent farm plots */}
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 1, label: "Plot A1 (Wheat)", index: "0.82", color: "bg-emerald-600 border-emerald-500", text: "Optimal Canopy" },
                  { id: 2, label: "Plot A2 (Wheat)", index: "0.78", color: "bg-emerald-700 border-emerald-600", text: "Good Growth" },
                  { id: 3, label: "Plot B1 (Cotton)", index: "0.45", color: "bg-amber-600 border-amber-500", text: "Moisture Stressed" },
                  { id: 4, label: "Plot B2 (Cotton)", index: "0.81", color: "bg-emerald-600 border-emerald-500", text: "Optimal Canopy" },
                  { id: 5, label: "Plot C1 (Legumes)", index: "0.32", color: "bg-red-700 border-red-600", text: "Severe Pest Infection ALERT" },
                  { id: 6, label: "Plot C2 (Fallow)", index: "0.15", color: "bg-slate-800 border-slate-700", text: "Low Chlorophyll Index" },
                ].map((plot, idx) => (
                  <button 
                    key={plot.id}
                    onClick={() => setActiveNdviCell(idx)}
                    className={`p-4 rounded-xl text-left border cursor-pointer hover:scale-[1.02] transition-all ${
                      activeNdviCell === idx 
                        ? "ring-2 ring-emerald-400 ring-offset-4 ring-offset-slate-900" 
                        : ""
                    } ${plot.color}`}
                  >
                    <div className="text-white text-xs font-black leading-none">{plot.label}</div>
                    <div className="text-[10px] text-white/80 font-mono mt-1">NDVI Index: {plot.index}</div>
                  </button>
                ))}
              </div>

              {/* Detail view of active index choice */}
              <div className={`mt-4 p-4 rounded-xl text-xs text-left ${
                isDarkMode ? "bg-slate-950 border border-slate-800" : "bg-slate-50 border border-slate-200"
              }`}>
                {activeNdviCell !== null ? (
                  <div className="space-y-1.5 animate-fadeIn">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-300">Selected Plot telemetry:</span>
                      <span className="text-emerald-400 font-bold uppercase hover:underline">
                        {[
                          "Plot A1 - Pure Canopy", "Plot A2 - Regular Canopy", 
                          "Plot B1 - Water Deficit", "Plot B2 - Pure Canopy", 
                          "Plot C1 - INFESTATION DETECTED", "Plot C2 - Fallow Stage"
                        ][activeNdviCell]}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Recommendations: {[
                        "Maintain current irrigation levels. Canopy is reflective and performing healthy cell respiration.",
                        "Irrigate tomorrow morning. Nitrogen levels look safe at 115 ppm.",
                        "CRITICAL: Immediate 15-minute drip irrigation cycles required to elevate VMC ratio above 28%.",
                        "Optimal vegetative status. Nitrogen and Potassium levels match target baselines.",
                        "WARNING: Satellite detects localized pigmentation drop. Inspect lower branches immediately for caterpillar larvae.",
                        "Fallow soil showing standard organic decomposition. Safe for tillage patterns."
                      ][activeNdviCell]}
                    </p>
                  </div>
                ) : (
                  <p className="text-[10px] text-slate-500 italic text-center">Click any plot grid square above to view visual agronomist alerts.</p>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. EMBEDDING THE SMART CALCULATORS DIRECTLY ON THE HOMEPAGE TO DRIVE OUTSTANDING VALUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="embedded-calculators-section">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Interactive Agronomic Tools</span>
          <h2 className="text-3xl font-black tracking-tight text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>
            Test Your Land Potential Instantly
          </h2>
          <p className="text-xs text-slate-400">
            Slide, toggle, and configure your parameters below to model real revenue curves and nitrogen levels.
          </p>
        </div>
        
        {/* Render our calculator component built earlier */}
        <SmartCalculators />
      </section>

      {/* 9. PREMIUM FARMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="home-testimonials">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">On-field Harvest Transformations</h2>
          <p className="text-xs text-slate-400 mt-2">Read direct verified audits from FPO presidents and land co-ops.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              quote: "Our Farmer Producer Organisation (FPO) in Satara integrated Tech Farming Expert across 250 sugarcane farms. By deploying cellular soil moisture telemetry, we saved 35% on daily diesel/irrigation costs while elevating average sucrose levels. The direct procurement link boosted our APMC earnings by 24%.",
              author: "Mr. Rajendra Deshmukh",
              role: "FPO President, Satara Sugarcane Guild",
              acres: "450 Acres Managed"
            },
            {
              quote: "As a wheat smallholder in Khanna, I had yield fluctuations every season due to weather patterns and insect outbreaks. The IGO satellite advisor warned me of wheat rust 9 days before it became visible. We managed immediate crop isolation, preserving our entire 40-quintal harvest. Absolute blessing of a technology.",
              author: "Sardar Gurbaksh Singh",
              role: "Grain Producer, Punjab APMC Node",
              acres: "28 Acres"
            }
          ].map((story, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-xl border relative shadow-sm ${
                isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <p className="text-xs italic leading-relaxed text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                "{story.quote}"
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/10 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-xs hover:underline cursor-pointer text-white" style={{ color: !isDarkMode ? "#0F172A" : "" }}>
                    {story.author}
                  </h4>
                  <p className="text-[10px] text-slate-500">{story.role}</p>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {story.acres}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. PREMIUM CALL TO ACTION BLOCK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-cta-banner">
        <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <span className="text-xs text-amber-400 font-extrabold uppercase tracking-widest block">
            National Agritech Program Registration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Transform Your Indian Field Yield?
          </h2>
          <p className="text-xs text-emerald-100 max-w-xl mx-auto leading-normal">
            Join 2.4 Lakh+ farmers already benefiting from cellular soil telemetry, early weather notifications, and verified high-paying corporate APMC procurement. Let's grow!
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onPageChange("contact")}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-emerald-900 font-sans font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              Contact Support Office
            </button>
            <button
              onClick={() => onPageChange("technology")}
              className="px-6 py-3 bg-emerald-800/50 hover:bg-emerald-850 text-white font-sans font-bold text-xs tracking-wider uppercase border border-emerald-500/30 rounded-xl transition-all cursor-pointer"
            >
              Verify Soil Hardware
            </button>
          </div>
        </div>
      </section>

      {/* 11. THE SOVEREIGN ECOSYSTEM - 26 VERTICALS */}
      <SovereignEcosystem isDarkMode={isDarkMode} onPageChange={onPageChange} />

    </div>
  );
}
