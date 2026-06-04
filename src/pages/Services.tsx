import React, { useState } from "react";
import { 
  Cpu, Leaf, ShoppingCart, Activity, ShieldAlert, Globe, 
  ArrowRight, Check, Droplets, Landmark, Truck, ShieldCheck, HeartPulse
} from "lucide-react";

interface ServicesProps {
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
}

export default function Services({ onPageChange, isDarkMode }: ServicesProps) {
  const [estimateAcres, setEstimateAcres] = useState<number>(15);
  const [selectedServiceTier, setSelectedServiceTier] = useState<string>("IoT Soil Sensors + AI Advisory");

  const services = [
    {
      id: "iot-sensors",
      title: "IoT Field Sensors",
      tagline: "High-precision telemetry from the rhizosphere",
      icon: Cpu,
      color: "text-emerald-500",
      bgLight: "bg-emerald-500/10",
      description: "Our rugged, weatherproof cellular soil sensors operate at depths of up to 1 meter in the root zone. They continuously transmit real-time measurements of nitrogen (N), phosphorus (P), potassium (K), soil moisture, temperature, and electrical conductivity.",
      features: [
        "Rhizosphere N-P-K chemical telemetry",
        "Deep root soil moisture content tracking",
        "Cellular SIM auto-link (No local wifi needed)",
        "Solar-assisted 5-year battery hardware"
      ],
      benefits: [
        "Reduce water consumption by up to 35%",
        "Prevent Nitrogen leaching and toxic levels",
        "Accurate localized heat wave monitoring"
      ],
      pricing: { Standard: "₹4,500 per hardware node", FPOVolume: "₹3,100 per node (15+ nodes)" }
    },
    {
      id: "ai-advisory",
      title: "AI Crop Advisory",
      tagline: "Multilingual agronomic intelligence",
      icon: Leaf,
      color: "text-emerald-500",
      bgLight: "bg-emerald-500/10",
      description: "A continuous, localized decision system translating soil telemetry, satellite NDVI imagery, and weather inputs into actionable advice. Alerts are pushed in 11 vernacular languages directly via WhatsApp, SMS, or Voice alerts.",
      features: [
        "Targeted pest & rust forecast algorithms",
        "Micro-climatic sprinkler trigger suggestions",
        "Customizable fertilizing calendars",
        "Visual leaf infection image diagnostics"
      ],
      benefits: [
        "92% accuracy in rust/rot prediction",
        "Optimum harvesting day warnings",
        "Direct voice search & queries support"
      ],
      pricing: { Standard: "₹180 / acre / month", FPOVolume: "₹90 / acre (FPO cooperative)" }
    },
    {
      id: "market-linkage",
      title: "Market Linkage Platform",
      tagline: "Direct-to-corporate transparent APMC trading",
      icon: ShoppingCart,
      color: "text-cyan-500",
      bgLight: "bg-cyan-500/10",
      description: "We bypass intermediary broker commissions. Farmers directly offer their anticipated yields to multi-national FMCG buyers, corporate retail stores, and export agencies on a fair, contractually settled basis.",
      features: [
        "Instant payment settlement (within 6 hours)",
        "Automated logistic dispatch scheduling",
        "Fair APMC weighting verification",
        "Quality certification compliance assistance"
      ],
      benefits: [
        "Typically yields 18% to 26% higher price tag",
        "Zero broker commissions",
        "Eliminates on-field waste and transit spoils"
      ],
      pricing: { Standard: "1.5% transaction settlement fee", FPOVolume: "0.8% transaction fee for FPOs" }
    },
    {
      id: "farm-automation",
      title: "Farm Automation",
      tagline: "Drip schedules controlled by live weather data",
      icon: Activity,
      color: "text-emerald-500",
      bgLight: "bg-emerald-500/10",
      description: "Our industrial smart-solenoid actuators clamp directly to standard sub-main drip lines. Irrigation triggers completely autonomously on cellular sensor demand, preventing root dehydration and nutrient washouts.",
      features: [
        "Wireless solenoid valve automation controllers",
        "Evapotranspiration-aware run schedules",
        "Fertigation tank injection rate controls",
        "Manual override switches via mobile tap"
      ],
      benefits: [
        "Cuts agricultural electricity costs by 30%",
        "Prevents weed growth from excess moisture",
        "Reduces direct on-field monitoring labor"
      ],
      pricing: { Standard: "₹12,000 per automation valve", FPOVolume: "Custom corporate FPO bid" }
    },
    {
      id: "agri-finance",
      title: "Agri Finance",
      tagline: "Credit backing calibrated from soil data",
      icon: Landmark,
      color: "text-emerald-500",
      bgLight: "bg-emerald-500/10",
      description: "We compile verified soil moisture history, N-P-K nutrient values, and NDVI satellite crop vigors to secure fair credit risk scoring. This lets allied banks offer lower interest rates on equipment and seeds.",
      features: [
        "Simplified application (No massive files)",
        "Approved credit rating shared with SBI Kisan",
        "Index-based weather damage protection",
        "Specialized FPO development loans"
      ],
      benefits: [
        "Lower annual interest rates (Starting from 4.2% pa)",
        "Payout within 48 hours for top tier ratings",
        "Zero hidden field-surveyor costs"
      ],
      pricing: { Standard: "Bank-financed interest brackets", FPOVolume: "Joint-liability group benefits" }
    },
    {
      id: "supply-chain",
      title: "Supply Chain & Export Support",
      tagline: "Ensuring cold-chain integrity from farm to shipping",
      icon: Truck,
      color: "text-cyan-500",
      bgLight: "bg-cyan-500/10",
      description: "Protect fragile horticultural crops (such as grapes, tomatoes, onions) with active temperature trackers. We certify agricultural produce for trade with leading agencies in the Middle East, Europe, and East Asia.",
      features: [
        "Active temperature/humidity reefer telemetry",
        "Traceability code generation (QR-based)",
        "Export pesticide residue certification",
        "Direct air/sea shipping freight clearance"
      ],
      benefits: [
        "Reduces transport spoilage down to under 2%",
        "Drives premium pricing internationally",
        "Guarantees source-region tracking logs"
      ],
      pricing: { Standard: "Custom quote per export container", FPOVolume: "Prefixed tonnage rates" }
    }
  ];

  // Custom estimate math for Interactive Pricing
  const sensorNodes = Math.max(1, Math.ceil(estimateAcres / 5)); // 1 sensor node per 5 acres recommended
  const advisoryCostPerMonth = Math.round(estimateAcres * 120);
  const typicalSensorCostOneTime = sensorNodes * 4500;

  return (
    <div className="space-y-20 pb-20 font-sans" id="services-page-wrap">
      
      {/* 1. HEADER HERO */}
      <section className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <span className="text-emerald-500 font-extrabold text-xs uppercase tracking-widest block">
          Precision Agriculture SaaS Spectrum
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
          Scale Your Harvesting Output with Certified Agritech Solutions
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From wireless soil sensors and real-time disease advisories to directly contractible APMC market linkage, Tech Farming Expert powers professional agricultural yield stability.
        </p>
      </section>

      {/* 2. SERVICES PORTFOLIO DETAILED GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <div 
                key={svc.id}
                className="grid lg:grid-cols-12 gap-8 items-center p-8 sleek-card transition-all"
                id={`detailed-service-card-${svc.id}`}
              >
                
                {/* Left block containing icon, tagline and texts */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${isDarkMode ? "bg-emerald-950 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest font-bold">SERVICE MODULE 0{idx + 1}</span>
                      <h2 className="text-xl sm:text-2xl font-black text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>
                        {svc.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-xs italic text-emerald-500 font-semibold">{svc.tagline}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{svc.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {/* Features list */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-extrabold text-slate-500 tracking-wider block">Features & Architecture</span>
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-2 items-center text-xs text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits list */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-extrabold text-slate-500 tracking-wider block">Quantified Farm Impact</span>
                      {svc.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex gap-2 items-center text-xs text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>
                          <HeartPulse className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right block containing official pricing card */}
                <div className="lg:col-span-5 sleek-widget p-6 self-stretch flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Official Procurement Pricing</span>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center py-2 border-b border-slate-900">
                        <span className="text-slate-400">Retail / Standard Tier:</span>
                        <span className="text-white font-extrabold">{svc.pricing.Standard}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-900">
                        <span className="text-slate-400">Cooperative FPO Bulk:</span>
                        <span className="text-emerald-400 font-extrabold">{svc.pricing.FPOVolume}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      onClick={() => onPageChange("contact")}
                      className="w-full py-2.5 font-bold text-xs btn-primary-sleek rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Instant Setup Assistance <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-[9px] text-slate-500 text-center block mt-2">
                      *All pricing is NABARD tax-exempt & supports joint liability cooperative benefits.
                    </span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE CORNER: ON-THE-FLY SERVICE QUOTE BUILDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="interactive-service-quote-builder">
        <div className="p-8 sleek-card">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-extrabold block">Interactive SaaS Configurator</span>
            <h2 className="text-2xl sm:text-3xl font-black">Configure Your Instant Hardware & Advisory Estimate</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Input your farm size and required core setup. See our recommended cellular node deployment count and predictive monthly service budget immediately below.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4 text-left">
              {/* Land Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Your Agricultural Land Size:</span>
                  <span className="text-emerald-400 font-black">{estimateAcres} Acres</span>
                </div>
                <input 
                  type="range"
                  min="2"
                  max="500"
                  value={estimateAcres}
                  onChange={(e) => setEstimateAcres(parseInt(e.target.value) || 2)}
                  className="w-full bg-slate-800 accent-emerald-500 h-1.5 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">
                  *Generally, 1 physical IoT node per 5 acres maintains perfect resolution.
                </span>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs text-slate-300 font-semibold block">Select Active Technology Bundle</label>
                <select
                  value={selectedServiceTier}
                  onChange={(e) => setSelectedServiceTier(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-200 px-3 py-2 rounded-lg outline-none focus:border-emerald-500"
                >
                  <option value="IoT Soil Sensors + AI Advisory">IoT Soil Sensors + AI Advisory Bundle (Most Popular)</option>
                  <option value="AI Advisory Only">AI WhatsApp Advisory Only (Sentinel map based)</option>
                  <option value="Full Automation Valve Link">Full Automation Valves + IoT Sensors</option>
                </select>
              </div>
            </div>

            {/* Estimated Quote results card */}
            <div className="mt-8 p-5 sleek-widget grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">IoT Sensors Deploying</div>
                <div className="text-xl font-black text-white mt-1">{sensorNodes} Nodes</div>
                <div className="text-[10px] text-slate-400 font-medium">Cellular Connected</div>
              </div>
              
              <div className="border-t sm:border-t-0 sm:border-x border-slate-850 px-4">
                <div className="text-[10px] text-slate-500 uppercase font-bold">Soil Hardware One-time</div>
                <div className="text-xl font-black text-amber-500 mt-1">₹{typicalSensorCostOneTime.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400 font-medium">*Tax Exempted</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Monthly Advisory Fee</div>
                <div className="text-xl font-black text-emerald-400 mt-1">₹{advisoryCostPerMonth.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400 font-medium font-mono">₹120 / acre / mo</div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onPageChange("contact")}
                className="px-6 py-3 btn-primary-sleek rounded-xl font-sans font-bold text-xs uppercase tracking-wide cursor-pointer"
              >
                Proceed with Official Agronomist Booking
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
