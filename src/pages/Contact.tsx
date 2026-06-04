import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Send, MessageCircle, Info, CheckCircle, HelpCircle,
  ChevronDown, Search
} from "lucide-react";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    farmSize: "10",
    cropType: "Rice",
    servicesRequired: "IoT Field Sensors"
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ search list
  const [faqSearch, setFaqSearch] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // first open by default

  const faqs = [
    {
      q: "How does the cellular soil sensor operate without local Wi-Fi?",
      a: "Every physical Tech Farming Expert hardware node is equipped with an integrated industrial-grade NB-IoT eSIM card. It automatically latches onto regional national bands with extreme low-power consumption, uploading rhizosphere telemetry without needing local router setups."
    },
    {
      q: "Will my soil data or acreage metrics remain private?",
      a: "Yes, fully private. Soil fertility indexes, moisture values, and plot GPS coordinates are guarded securely under the IGO Group Trust Charter. Your metrics are never shared with third-party commercial commodity traders without explicit cooperative sign-off."
    },
    {
      q: "Can I receive crop advisories if my localized dialect isn't listed?",
      a: "Our core advisory engine currently translates files into 11 regional directories: Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati, Punjabi, Malayalam, Odiya, and English. More dialects are consistently added every season."
    },
    {
      q: "How quickly are corporate APMC market linkages settled?",
      a: "Direct contract trade settlements are fully audited and cleared within 6 hours of verified APMC depot intake. Direct bank transfers bypass commission middlemen completely."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className={`space-y-20 pb-20 font-sans ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`} id="contact-page-wrap">
      
      {/* 1. HEADER */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <span className="text-emerald-500 font-extrabold text-xs uppercase tracking-widest block">
          Get in Touch with our Advisors
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
          Begin Onboarding Your Farm Today
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Whether you are a single land smallholder, an FPO cooperative president, or an enterprise food processor, our agronomy teams are ready to deploy your hardware.
        </p>
      </section>

      {/* 2. FORM & INFO SPLIT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left contact card form */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border text-left ${
            isDarkMode ? "bg-slate-900 border-slate-850" : "bg-white border-slate-200 shadow-xl"
          }`}>
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>Farm Onboarding Initiated!</h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Namaste {formData.name}. Our regional officer corresponding to {formData.state} ({formData.district} district) will call you within 12 hours to verify sensor node coordinates and coordinate the hardware setup.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        state: "",
                        district: "",
                        farmSize: "10",
                        cropType: "Rice",
                        servicesRequired: "IoT Field Sensors"
                      });
                    }}
                    className="px-4 py-2 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs rounded-lg font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h2 className="text-lg font-extrabold text-white mb-2" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>Farm Ingress Enrollment Sheet</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold block">Full Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Rajendra Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold block">Mobile number</label>
                    <input 
                      type="tel"
                      required
                      placeholder="e.g. +91 99999 99999"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-semibold block">Email Address (Optional)</label>
                  <input 
                    type="email"
                    placeholder="e.g. advisor@farm.co.in"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold block">State (India)</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-semibold block">District</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Pune"
                      value={formData.district}
                      onChange={(e) => setFormData({...formData, district: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs text-slate-300 font-semibold block">Farm size (Acres)</label>
                    <input 
                      type="number"
                      required
                      min="1"
                      value={formData.farmSize}
                      onChange={(e) => setFormData({...formData, farmSize: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs text-slate-300 font-semibold block">Primary Crop Type</label>
                    <select
                      value={formData.cropType}
                      onChange={(e) => setFormData({...formData, cropType: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    >
                      <option value="Rice">Rice (Kharif)</option>
                      <option value="Wheat">Wheat (Rabi)</option>
                      <option value="Cotton">Cotton</option>
                      <option value="Sugarcane">Sugarcane</option>
                      <option value="Maize">Maize</option>
                      <option value="Tomato">Tomato</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 sm:col-span-1">
                    <label className="text-xs text-slate-300 font-semibold block">Primary Service Required</label>
                    <select
                      value={formData.servicesRequired}
                      onChange={(e) => setFormData({...formData, servicesRequired: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 text-xs px-3 py-2.5 rounded-lg outline-none focus:border-emerald-500"
                    >
                      <option value="IoT Field Sensors">IoT Field Sensors</option>
                      <option value="AI Crop Advisory">AI Crop Advisory</option>
                      <option value="Market Linkage">Market Linkage</option>
                      <option value="Automation Valves">Automation Valves</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors text-white text-xs font-bold uppercase rounded-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" /> File Ingress Specification
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right contact support list panel & WhatsApp trigger */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 self-stretch">
            
            {/* Quick dial box */}
            <div className={`p-6 rounded-2xl border text-left flex-1 space-y-4 ${
              isDarkMode ? "bg-slate-900 border-slate-850" : "bg-white border-slate-200"
            }`}>
              <span className="text-[10px] text-emerald-500 uppercase font-extrabold tracking-widest block">Direct Assistance Bureau</span>
              <h3 className="font-extrabold text-base text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>Contact Headquarters Office</h3>
              
              <div className="space-y-3.5 text-xs">
                
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                    <strong>Bandra Kurla Complex Branch:</strong><br />
                    Level 12, Agritech Center, Bandra Kurla Complex (BKC), Mumbai, MH - 400051
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-300 font-mono" style={{ color: !isDarkMode ? "#334155" : "" }}>+91 (22) 4800-9200</span>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-emerald-400 font-mono">advisor@techfarmingexpert.co.in</span>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-850">
                <a 
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase rounded-lg text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-500/10" />
                  Direct WhatsApp Advisory chat
                </a>
              </div>
            </div>

            {/* Simulated Live Support status */}
            <div className={`p-4 rounded-xl border text-xs text-left text-slate-300 leading-normal flex gap-3 ${
              isDarkMode ? "bg-slate-900/40 border-slate-850" : "bg-slate-100 border-slate-200"
            }`}>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1 flex-shrink-0" />
              <div>
                <strong>Support Status: Live</strong><br />
                All 5 regional telemetry nodes are online. Average queuing response duration is currently <strong className="text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>7 minutes</strong>.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. ACCORDION SEARCHABLE FAQS COMPONENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="faq-accordions-frame">
        <div className="text-center space-y-2">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider block">Clear Answers</span>
          <h2 className="text-3xl font-black">Frequently Asked Ingress Queries</h2>
          
          <div className="relative max-w-md mx-auto pt-4 flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-slate-500" />
            <input 
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Filter FAQs (e.g. soil, eSIM, NPK)..."
              className="w-full bg-slate-950 border border-slate-850 text-slate-300 focus:border-emerald-600 outline-none rounded-xl pl-9 pr-4 py-2 text-xs"
            />
          </div>
        </div>

        {/* Dynamic Accordion items output */}
        <div className="space-y-3 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  expandedFaq === fIdx ? "bg-slate-900/60 border-emerald-500/30" : "bg-slate-900/20 border-slate-850 hover:bg-slate-900/45"
                }`}
                onClick={() => setExpandedFaq(expandedFaq === fIdx ? null : fIdx)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>{faq.q}</h4>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${expandedFaq === fIdx ? "-rotate-180 text-emerald-400" : ""}`} />
                </div>

                {expandedFaq === fIdx && (
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5 border-t border-slate-800/10 pt-2 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-xs text-slate-500 italic">No matching queries located. Try typing simpler terms like 'eSIM' or 'FPO'.</div>
          )}
        </div>
      </section>

    </div>
  );
}
