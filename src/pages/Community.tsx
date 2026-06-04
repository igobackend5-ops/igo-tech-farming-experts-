import React, { useState } from "react";
import { 
  Users, Award, HelpCircle, ShieldCheck, ArrowRight, Check,
  Languages, GraduationCap, PhoneCall, Sparkles, MessageSquare
} from "lucide-react";

interface CommunityProps {
  isDarkMode: boolean;
  onPageChange: (page: string) => void;
}

export default function Community({ isDarkMode, onPageChange }: CommunityProps) {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [mockAdvisoryLang, setMockAdvisoryLang] = useState<"en" | "hi" | "ta">("en");

  const successStories = [
    {
      farmerName: "Sardar Gurbaksh Singh",
      location: "Khanna, Punjab",
      crop: "Paddy & Wheat",
      impact: "+22% Yield Output",
      revenueGain: "₹1.4 Lakh / Year extra profit",
      story: "Before using IGO's Tech Farming Expert, we fertilized blindly based on our traditional schedules. After placing three wireless soil probes in our high-acreage wheat zones, we realized our Nitrogen was bleeding into groundwater. Correcting NPK balance saved fertilizer costs while elevating our wheat grain quality under APMC rules."
    },
    {
      farmerName: "Smt. Shrirang Shinde",
      location: "Baramati, Maharashtra",
      crop: "Sugarcane",
      impact: "35% Water Consumption Saved",
      revenueGain: "₹2.1 Lakh cumulative saving",
      story: "Monsoons are increasingly unpredictable here in Deccans. The soil sensor-automated drip solenoid system handles irrigation autonomously. We no longer stay up all night monitoring sub-drip line pressure. IGO's WhatsApp advisory alerts tell us exactly when to irrigate."
    },
    {
      farmerName: "Mr. Anand Gowda",
      location: "Kolar, Karnataka",
      crop: "Tomato & Maize",
      impact: "Rust Blight Eliminated",
      revenueGain: "Protected 4.5 tonnes harvest",
      story: "Last winter, the AI pest advisory pushed a high-alert warning concerning early blight risk based on local humidity levels. We immediately isolation-treated the tomato crops. Most neighbors lost half their harvest, but ours was fully preserved and sold directly to FMCG procurement hubs."
    }
  ];

  // Micro translations for language preview
  const advisoryPreviews = {
    en: {
      title: "Crop Advisory: Wheat (Rabi)",
      content: "ALERT: Near-surface soil moisture (VMC) is currently at 28%. We recommend triggering drip irrigation valves for 15 minutes today before noon to maintain NPK nitrate absorption.",
      action: "Status: Standby"
    },
    hi: {
      title: "फसल परामर्श: गेहूं (रबी)",
      content: "अलर्ट: सतह के पास उप-मृदा नमी (VMC) वर्तमान में 28% पर है। एनपीके नाइट्रेट अवशोषण को बनाए रखने के लिए आज दोपहर से पहले 15 मिनट के लिए ड्रिप सिंचाई शुरू करने की सलाह दी जाती है।",
      action: "स्थिति: स्टैंडबाय"
    },
    ta: {
      title: "பயிர் ஆலோசனை: கோதுமை (ரபி)",
      content: "ஹெச்சரிக்கை: மண்ணின் ஈரப்பதம் (VMC) தற்போது 28% ஆக உள்ளது. நைட்ரேட் உறிஞ்சுதலை பராமரிக்க இன்று நண்பகலுக்கு முன் 15 நிமிடங்களுக்கு சொட்டு நீர் பாசனத்தை இயக்க பரிந்துரைக்கிறோம்.",
      action: "நிலை: காத்திருப்பு"
    }
  };

  return (
    <div className={`space-y-20 pb-20 font-sans ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`} id="community-page-wrap">
      
      {/* 1. HEADER */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <span className="text-emerald-500 font-extrabold text-xs uppercase tracking-widest block">
          Farmer Co-Ops & FPOs Spectrum
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
          Powering Collective Smallholder Prosperity Across India
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Through unified FPO programs, regional translation advisory servers, and hands-on agricultural training centers, we build resilient rural assets.
        </p>
      </section>

      {/* 2. SUCCESS STORIES CAROUSEL WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-2xl border ${
          isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-lg"
        }`}>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            
            {/* Story Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="p-2 bg-emerald-600/10 text-emerald-400 rounded-lg">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500">
                  Verified Farmer Transformation Story
                </span>
              </div>

              <h2 className="text-2xl font-black text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>
                Meet {successStories[activeStoryIdx].farmerName}
              </h2>
              <p className="text-xs text-slate-400 font-sans tracking-wide">
                Location: <strong>{successStories[activeStoryIdx].location}</strong> • Crop: <strong>{successStories[activeStoryIdx].crop}</strong>
              </p>

              <p className="text-xs italic leading-relaxed text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                "{successStories[activeStoryIdx].story}"
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div className="text-[9px] text-slate-500 uppercase">Crop Outgrowth Lift</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">{successStories[activeStoryIdx].impact}</div>
                </div>
                <div className="px-4 py-2 bg-slate-950/60 border border-slate-800 rounded-xl">
                  <div className="text-[9px] text-slate-500 uppercase">Quantified Revenue Boost</div>
                  <div className="text-sm font-bold text-white mt-1">{successStories[activeStoryIdx].revenueGain}</div>
                </div>
              </div>

              {/* Swappers index points */}
              <div className="flex gap-2 pt-4">
                {successStories.map((_, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setActiveStoryIdx(sIdx)}
                    className={`w-10 h-1.5 rounded transition-all cursor-pointer ${
                      activeStoryIdx === sIdx ? "bg-emerald-500" : "bg-slate-800 hover:bg-slate-700"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* Right block: FPO program overview */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-2xl">
              <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">FPO Multi-Acreage Cooperative benefits</span>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300"><strong>Volume Hardware Reductions:</strong> Save up to 30% per IoT sensor node across group configurations.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300"><strong>Guaranteed Contract Procurement:</strong> Access long-term direct procurement contract bidding under IGO FMCG rules.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300"><strong>Joint Liability Credit:</strong> Cooperative joint liability structures secure lower interest rates with banking partners.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onPageChange("contact")}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase rounded-lg text-center cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Onboard Your Local FPO <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SIMULATOR CARD: ADVISORY MULTI-LINGUAL PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-emerald-500 text-xs font-extrabold uppercase tracking-wider block">Multilingual Advisory Systems</span>
            <h2 className="text-2xl sm:text-3xl font-black">Localized Dialect Push Engine</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our regional advisory servers automatically translate agronomist reports into localized dialects (Hindi, Tamil, Kannada, Marathi). Choose your preferred dialect to preview the exact system outputs sent via SMS.
            </p>

            {/* Language selectors toggle */}
            <div className="flex gap-2.5 pt-2">
              <button 
                onClick={() => setMockAdvisoryLang("en")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                  mockAdvisoryLang === "en" ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                English Advisory
              </button>
              <button 
                onClick={() => setMockAdvisoryLang("hi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                  mockAdvisoryLang === "hi" ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                हिन्दी (Hindi)
              </button>
              <button 
                onClick={() => setMockAdvisoryLang("ta")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                  mockAdvisoryLang === "ta" ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                தமிழ் (Tamil)
              </button>
            </div>
          </div>

          {/* Render of Simulated Phone Warning */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 max-w-sm mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 border-b border-slate-850 flex items-center justify-center">
                <div className="w-16 h-3 bg-slate-950 rounded-b-md" />
              </div>

              <div className="pt-4 text-xs font-mono">
                <div className="flex justify-between items-center text-[9px] text-slate-600 mb-3 border-b border-slate-900 pb-1.5">
                  <span>SENDER: IGO_AGRI_BOT</span>
                  <span>9:41 AM</span>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-xl space-y-2 border border-slate-800/55 animate-fadeIn">
                  <div className="text-emerald-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{advisoryPreviews[mockAdvisoryLang].title}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {advisoryPreviews[mockAdvisoryLang].content}
                  </p>
                  <div className="text-[10px] text-slate-500 font-sans font-bold flex justify-between pr-1">
                    <span>{advisoryPreviews[mockAdvisoryLang].action}</span>
                    <strong className="text-emerald-500 uppercase">NABARD Verified</strong>
                  </div>
                </div>

                <div className="mt-4 pt-3 text-[10px] text-slate-400 text-center font-sans">
                  Pushed directly over verified WhatsApp API.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. TRAINING PROGRAMS & REGIONAL HELP SESSIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">On-field Training & Rural Centers</h2>
          <p className="text-xs text-slate-400 max-w-xl">
            We operate five dynamic regional agriculture hubs, giving smallholder cooperatives direct technical setup support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Soil Chemistry Masterclass",
              host: "Baramati Training Hub",
              detail: "Hands-on instruction on parsing NPK soil sensor reports and mastering localized organic manuring schedules.",
              metrics: "Weekly on Wednesday",
              action: "Register Free"
            },
            {
              title: "NDVI Satellite Workshop",
              host: "Khanna APMC Center",
              detail: "Instructing co-op delegates on checking sentinel leaf chlorophyll indices and isolating pest circles early.",
              metrics: "Bi-weekly, Friday",
              action: "Register Free"
            },
            {
              title: "Direct APMC Trade Training",
              host: "Kolar Mandi Office",
              detail: "Guiding FPO bookkeepers on registering contracts, bypassing local broker commissions, and settling digital credits.",
              metrics: "Daily Sessions",
              action: "Access Portal"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-xl border text-left flex flex-col justify-between ${
                isDarkMode 
                  ? "bg-slate-905 bg-slate-900/50 border-slate-850" 
                  : "bg-white border-slate-200/85"
              }`}
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase">{item.host}</span>
                <h3 className="font-bold text-base text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/10 mt-4 flex justify-between items-center text-xs">
                <span className="text-slate-500">{item.metrics}</span>
                <button 
                  onClick={() => onPageChange("contact")}
                  className="text-emerald-500 font-bold hover:underline cursor-pointer"
                >
                  {item.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
