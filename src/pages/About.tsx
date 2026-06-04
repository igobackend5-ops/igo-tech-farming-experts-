import React from "react";
import { 
  ShieldCheck, Leaf, Globe, Target, Eye, Handshake, Award, Flag,
  Building, MapPin, Users, TrendingUp
} from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const milestones = [
    { year: "2018", title: "IGO Group Agritech Lab founded", desc: "Dr. John Yesudhas establishes the core laboratory to focus on rhizosphere soil moisture tension calibrations in Maharashtra silt clay." },
    { year: "2020", title: "Phase 1 NB-IoT Node roll-out", desc: "Deploys 5,000 wireless cellular probes across Western Ghats cooperatives in partnership with SBI Kisan guidelines." },
    { year: "2022", title: "Sentinel-2 Spectral Integration", desc: "Incorporates high-resolution satellite remote sensing to serve automated leaf-level NDVI nitrogen diagnostics." },
    { year: "2024", title: "FPO Procurement Program Launch", desc: "Successfully links cooperative groups directly with FMCG buyers, securing over ₹340 Crore cumulative farmer economic lift." },
    { year: "2026", title: "2.4 Lakh Farmers Onboarded", desc: "Tech Farming Expert expands active operations across 18 Indian states, powering 6.2 Lakh Acres." }
  ];

  return (
    <div className={`space-y-20 pb-20 font-sans ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`} id="about-page-wrap">
      
      {/* 1. HEADER */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <span className="text-emerald-500 font-extrabold text-xs uppercase tracking-widest block">
          Corporate Identity
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
          Tech Farming Expert
        </h1>
        <p className="text-xs uppercase text-emerald-600 block font-bold tracking-widest mt-1">
          A parent brand subsidiary of the IGO Group of Companies
        </p>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We combine cutting-edge rhizosphere electronics, remote satellite indices, and cooperative market linkage platforms to optimize smallholder yields and enterprise food resilience.
        </p>
      </section>

      {/* 2. CHAIRMEN PROFILE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-2xl border ${
          isDarkMode ? "bg-slate-900 border-slate-850" : "bg-white border-slate-200 shadow-lg"
        }`}>
          
          <div className="grid lg:grid-cols-12 gap-10 items-center text-left">
            
            {/* Visual/Text box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative">
                {/* Simulated portrait silhouette in theme colours */}
                <div className="w-full h-80 bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl flex flex-col items-center justify-center border border-emerald-500/20 text-white relative overflow-hidden p-6 text-center">
                  <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
                  <Award className="w-16 h-16 text-amber-400 stroke-[1.5] mb-4" />
                  <h3 className="font-sans font-black text-xl">Dr. John Yesudhas</h3>
                  <p className="text-xs text-emerald-300 font-sans tracking-wide mt-1">Founder & Chairman, IGO Group of Companies</p>
                </div>
              </div>
            </div>

            {/* Biography & Statements */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs text-emerald-500 uppercase tracking-widest font-extrabold block">Executive Leadership Spotlight</span>
              <h2 className="text-2xl sm:text-3xl font-black">Chairman's Agronomic Vision</h2>
              
              <p className="text-xs leading-relaxed text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                Under the strategic, value-driven direction of <strong>Dr. John Yesudhas</strong>, the IGO Group has systematically expanded from basic engineering frameworks into premium, internet-of-things custom technology fields. Dr. Yesudhas holds deep passion for restoring profitability to the Indian agricultural smallholder. 
              </p>

              <p className="text-xs leading-relaxed text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                "We realize that technology is worthless if it remains in high-tech research labs. True craftsmanship means creating highly durable, field-proof sensors that any smallholder cooperative can install, paired with instant WhatsApp advisory streams. We have eliminated broker overheads and returned pride and maximum financial value back to our farming nodes."
              </p>

              <div className="pt-2 flex flex-wrap gap-6 items-center text-[10px] text-slate-500 uppercase font-black tracking-wider">
                <span className="inline-flex gap-1.5 items-center">
                  <Building className="w-4 h-4 text-emerald-500" /> IGO Group Of Companies
                </span>
                <span className="inline-flex gap-1.5 items-center">
                  <MapPin className="w-4 h-4 text-emerald-500" /> Mumbai, Maharashtra HQ
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES TRIAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 text-left">
          
          <div className={`p-6 rounded-xl border ${
            isDarkMode ? "bg-slate-900/40 border-slate-850" : "bg-white border-slate-200/80"
          }`}>
            <Target className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="font-bold text-base text-white mb-2" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>Our Mission</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              To systematically elevate the cumulative bottom-line revenue of smallholder crop producers across India by placing highly durable edge electronics and direct contract procurement networks on field.
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDarkMode ? "bg-slate-900/40 border-slate-850" : "bg-white border-slate-200/80"
          }`}>
            <Eye className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-bold text-base text-white mb-2" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>Our Vision</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Structuring a resilient rural blockchain and satellite-monitoring standard where harvest yields are fully predictable, water stress is mitigated, and extreme monsoon fluctuations pose zero existential risk for FPOs.
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDarkMode ? "bg-slate-900/40 border-slate-850" : "bg-white border-slate-200/80"
          }`}>
            <Handshake className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="font-bold text-base text-white mb-2" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>Our Values</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unrivalled craftsmanship, radical direct-to-farm transparent pricing, total protection of user land metrics, and deep patriotic alignment with National agricultural growth programs.
            </p>
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE TIMELINE COMPANY JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Our Computational Corporate Journey</h2>
          <p className="text-xs text-slate-400">Milestones towards national agritech security under IGO Group.</p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto text-left relative before:absolute before:inset-y-0 before:left-3 sm:before:left-1/2 before:w-0.5 before:bg-slate-800 pointer-events-none">
          {milestones.map((mil, idx) => (
            <div 
              key={idx}
              className={`flex flex-col sm:flex-row relative items-start ${
                idx % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              
              {/* Timeline bubble */}
              <div className="absolute left-3 sm:left-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 -translate-x-1.5 sm:-translate-x-2 z-10" />

              {/* Contents block */}
              <div className={`w-full sm:w-1/2 pl-10 sm:pl-0 ${
                idx % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
              }`}>
                <div className={`p-5 rounded-xl border ${
                  isDarkMode ? "bg-slate-900/60 border-slate-850" : "bg-white border-slate-200 shadow-2xs"
                }`}>
                  <span className="text-xs font-black text-emerald-500 tracking-wider block mb-1">{mil.year}</span>
                  <h4 className="font-bold text-sm text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>{mil.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1.5">{mil.desc}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
