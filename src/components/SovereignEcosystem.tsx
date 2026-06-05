import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, Cpu, Radio, Layers, Zap, Wheat, 
  Droplets, TrendingUp, Truck, Warehouse, Users, Leaf, Coffee, 
  ShoppingBag, Sparkles, ShieldCheck, Globe, Heart, Coins, 
  FileText, Check, Grid, ArrowRight, Activity, Eye, Compass, Smile
} from "lucide-react";

// ----------------------------------------------------
// HIGH-FIDELITY VECTOR IDENTITY BRAND LOGOS MATCHING SCREENSHOT EXACTLY
// ----------------------------------------------------

const IgoAgriMartLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 160 110" className="w-full h-full" fill="none">
      {/* Leaf Checkmark Logo */}
      <path d="M72 26 C64 38 48 38 41 46" stroke="#84cc16" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M54 36 L62 44 L81 23" stroke="#16a34a" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Shopping cart */}
      <path d="M28 46h11l9 22h32l8 -18h-53" stroke="#16a34a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="74.5" r="4.8" fill="#16a34a" />
      <circle cx="78" cy="74.5" r="4.8" fill="#16a34a" />
      {/* Brand Text labels */}
      <text x="80" y="93" textAnchor="middle" className="font-sans font-black text-[10px] tracking-widest fill-emerald-600 dark:fill-emerald-400">IGO AGRIMART</text>
      <text x="80" y="100" textAnchor="middle" className="font-sans font-bold text-[5.5px] fill-slate-400">Agri: products/projects/services</text>
    </svg>
  </div>
);

const IgoNurseryLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 120 120" className="w-24 h-24" fill="none">
      {/* Dynamic green split container shape */}
      <path d="M60 25 C31 25 25 55 25 75 C25 95 45 95 60 95 C75 95 95 95 95 75 C95 55 89 25 60 25 Z" stroke="#16a34a" strokeWidth="4.5" />
      <path d="M60 25 Q91 35 91 75 Q91 85 81 90" stroke="#84cc16" strokeWidth="4.5" />
      {/* Plant leaf cap */}
      <path d="M60 12 C72 15 88 28 84 40 C72 38 64 24 60 12 Z" fill="#84cc16" />
      {/* Brand Text labels */}
      <text x="60" y="64" textAnchor="middle" className="font-sans font-black text-sm tracking-wider fill-slate-800 dark:fill-slate-100">IGO</text>
      <text x="60" y="77" textAnchor="middle" className="font-sans font-extrabold text-[8.5px] tracking-widest fill-emerald-500">NURSERY</text>
    </svg>
  </div>
);

const PalmCafeLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <div className="flex items-center justify-center gap-1">
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">P</span>
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">a</span>
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">l</span>
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">m</span>

      {/* Palm tree red/brown in center */}
      <div className="w-14 h-16 relative flex items-center justify-center translate-y-[-4px]">
        <svg viewBox="0 0 60 80" className="w-full h-full" fill="none">
          {/* Trunk */}
          <path d="M30 75 Q31 52 28 35 Q30 35 32 35 Q35 52 32 75 Z" fill="#78350f" />
          {/* Leaves color mapped */}
          <path d="M28 35 Q8 32 10 18 Q20 30 28 35 Z" fill="#b91c1c" />
          <path d="M28 35 Q18 10 30 5 Q32 20 28 35 Z" fill="#b91c1c" />
          <path d="M28 35 Q48 10 42 5 Q36 20 28 35 Z" fill="#b91c1c" />
          <path d="M28 35 Q52 32 46 18 Q36 30 28 35 Z" fill="#b91c1c" />
          {/* Secondary leaf layers */}
          <path d="M28 35 Q5 40 14 45 Q22 40 28 35 Z" fill="#991b1b" />
          <path d="M28 35 Q55 40 44 45 Q36 40 28 35 Z" fill="#991b1b" />
        </svg>
      </div>

      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">c</span>
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">a</span>
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">f</span>
      <span className="text-[#10432E] dark:text-[#a3e635] text-4xl font-serif font-black tracking-tighter">e</span>
    </div>
    <div className="text-[7.5px] font-sans font-black tracking-[0.22em] text-[#475569] dark:text-slate-400 mt-2 uppercase select-none whitespace-nowrap">
      THE HEALTHY FOOD JOINT
    </div>
  </div>
);

const IgoExportsImportsLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 140 100" className="w-full h-20" fill="none">
      {/* Combined Yellow J & Green Y */}
      {/* Green Y */}
      <path d="M72 45 L72 75" stroke="#16a34a" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M72 45 C78 30 96 12 100 12 M72 45 C66 30 48 12 44 12" stroke="#16a34a" strokeWidth="6.5" strokeLinecap="round" />
      
      {/* Yellow J crossing */}
      <path d="M58 12 L78 12" stroke="#eab308" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M68 12 L68 56 C68 66 54 70 46 62" stroke="#eab308" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      
      <text x="70" y="92" textAnchor="middle" className="font-sans font-bold text-[6.5px] tracking-[0.25em] fill-slate-500">TECH FARMING EXPERT</text>
    </svg>
  </div>
);

const IgoOrganicsLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 100 80" className="w-18 h-18" fill="none">
      <path d="M50 15 C30 15 20 38 42 58 C46 62 54 62 58 58 C80 38 70 15 50 15 Z" fill="rgba(22,163,74,0.08)" stroke="#16a34a" strokeWidth="3.5" />
      <path d="M50 15 L50 60" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="3 3" />
      <path d="M55 24 C62 25 66 30 64 36" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
      <text x="50" y="74" textAnchor="middle" className="font-sans font-black text-[8px] tracking-[0.16em] fill-emerald-600">IGO ORGANICS</text>
    </svg>
  </div>
);

const IgoDroneWorksLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 100 80" className="w-18 h-18" fill="none">
      <circle cx="50" cy="40" r="12" stroke="#16a34a" strokeWidth="3" />
      <circle cx="50" cy="40" r="4" fill="#16a34a" />
      <path d="M38 28 L20 10 M62 28 L80 10 M38 52 L20 70 M62 52 L80 70" stroke="#10432E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="10" r="5" stroke="#84cc16" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="80" cy="10" r="5" stroke="#84cc16" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="20" cy="70" r="5" stroke="#84cc16" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="80" cy="70" r="5" stroke="#84cc16" strokeWidth="2" strokeDasharray="2 2" />
      <text x="50" y="76" textAnchor="middle" className="font-sans font-black text-[7.5px] tracking-widest fill-slate-700">IGO DRONEWORKS</text>
    </svg>
  </div>
);

const IgoGreenDairyLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 100 80" className="w-18 h-18" fill="none">
      <circle cx="50" cy="38" r="28" stroke="#16a34a" strokeWidth="3" />
      <path d="M30 38 Q50 20 70 38" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 50 Q50 35 65 50" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
      <text x="50" y="74" textAnchor="middle" className="font-sans font-black text-[7.5px] tracking-widest fill-slate-700">IGO GREEN DAIRY</text>
    </svg>
  </div>
);

const IgoCargoLogo = () => (
  <div className="flex flex-col items-center justify-center w-full h-full select-none p-4">
    <svg viewBox="0 0 100 80" className="w-18 h-18" fill="none">
      <path d="M15 25 H60 L75 40 V60 H15 Z" fill="rgba(16,185,129,0.04)" stroke="#16a34a" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="30" cy="62" r="7" stroke="#10432E" strokeWidth="2.5" />
      <circle cx="58" cy="62" r="7" stroke="#10432E" strokeWidth="2.5" />
      <path d="M22 25 V45 H55 V25 Z" stroke="#84cc16" strokeWidth="2" />
      <text x="50" y="75" textAnchor="middle" className="font-sans font-black text-[7.5px] tracking-widest fill-slate-700">IGO CARGO</text>
    </svg>
  </div>
);

const brandsList = [
  { id: "brand-1", name: "Farm Automation", category: "Technology", shortDesc: "Smart automation systems for modern farming operations.", logoComponent: <img src="/images/2.jpg" alt="Farm Automation logo" className="h-full w-full object-contain" /> },
  { id: "brand-2", name: "IGO Agri Estates", category: "Real Estate", shortDesc: "Integrated agri-estate and land development initiatives.", logoComponent: <img src="/images/3.jpg" alt="IGO Agri Estates logo" className="h-full w-full object-contain" /> },
  { id: "brand-3", name: "IGO Cosmetics", category: "Consumer", shortDesc: "Natural and wellness-driven cosmetic products.", logoComponent: <img src="/images/3.jpg" alt="IGO Cosmetics logo" className="h-full w-full object-contain" /> },
  { id: "brand-4", name: "Billionism Monk", category: "Brand", shortDesc: "A modern brand identity under the IGO ecosystem.", logoComponent: <img src="/images/5.jpg" alt="Billionism Monk logo" className="h-full w-full object-contain" /> },
  { id: "brand-5", name: "IGO Agrimart", category: "Retail", shortDesc: "Farm retail and input marketplace for rural and urban demand.", logoComponent: <img src="/images/6.jpg" alt="IGO Agrimart logo" className="h-full w-full object-contain" /> },
  { id: "brand-6", name: "Valluvam", category: "Food", shortDesc: "Regional food brand focused on freshness and local values.", logoComponent: <img src="/images/7.jpg" alt="Valluvam logo" className="h-full w-full object-contain" /> },
  { id: "brand-7", name: "IGO Agri Techfarms", category: "AgriTech", shortDesc: "Technology-led farm operations and agri innovation platform.", logoComponent: <img src="/images/8.jpg" alt="IGO Agri Techfarms logo" className="h-full w-full object-contain" /> },
  { id: "brand-8", name: "Tech Farming Expert", category: "Consulting", shortDesc: "Precision agronomy advisory and farm intelligence services.", logoComponent: <img src="/images/9.jpg" alt="Tech Farming Expert logo" className="h-full w-full object-contain" /> },
  { id: "brand-9", name: "Protein Cuts", category: "Nutrition", shortDesc: "Protein-rich food products and health-focused nutrition.", logoComponent: <img src="/images/10.jpg" alt="Protein Cuts logo" className="h-full w-full object-contain" /> },
  { id: "brand-10", name: "IGO Exports & Imports", category: "Trade", shortDesc: "International trade and supply chain for agri products.", logoComponent: <img src="/images/11.jpg" alt="IGO Exports & Imports logo" className="h-full w-full object-contain" /> },
  { id: "brand-11", name: "Palmcafe", category: "Food & Beverage", shortDesc: "Healthy food joint and farm-to-table dining experience.", logoComponent: <img src="/images/12.jpg" alt="Palmcafe logo" className="h-full w-full object-contain" /> },
  { id: "brand-12", name: "IGO Academy", category: "Education", shortDesc: "Training and capacity-building platform for farming communities.", logoComponent: <img src="/images/13.jpg" alt="IGO Academy logo" className="h-full w-full object-contain" /> },
  { id: "brand-13", name: "IGO Nursery", category: "Horticulture", shortDesc: "Nursery propagation and green plant solutions.", logoComponent: <img src="/images/14.jpg" alt="IGO Nursery logo" className="h-full w-full object-contain" /> },
  { id: "brand-14", name: "IGO Mart", category: "Marketplace", shortDesc: "Integrated retail and service marketplace for rural needs.", logoComponent: <img src="/images/15.jpg" alt="IGO Mart logo" className="h-full w-full object-contain" /> },
  { id: "brand-15", name: "Farm Loans & Subsidy", category: "Finance", shortDesc: "Financial support and subsidy guidance for farmers.", logoComponent: <img src="/images/16.jpg" alt="Farm Loans & Subsidy logo" className="h-full w-full object-contain" /> },
  { id: "brand-16", name: "IGO Financial Services", category: "Finance", shortDesc: "Digital finance and agri financing solutions.", logoComponent: <img src="/images/17.jpg" alt="IGO Financial Services logo" className="h-full w-full object-contain" /> },
  { id: "brand-17", name: "IGO Franchise", category: "Business", shortDesc: "Franchise model for scalable agri and retail expansion.", logoComponent: <img src="/images/18.jpg" alt="IGO Franchise logo" className="h-full w-full object-contain" /> },
  { id: "brand-18", name: "Farm Factories", category: "Production", shortDesc: "Production units aligned with farm-based manufacturing.", logoComponent: <img src="/images/19.jpg" alt="Farm Factories logo" className="h-full w-full object-contain" /> },
  { id: "brand-19", name: "Farmers Factory", category: "Production", shortDesc: "Community-led production and processing brand.", logoComponent: <img src="/images/20.jpg" alt="Farmers Factory logo" className="h-full w-full object-contain" /> },
  { id: "brand-20", name: "IGO Crop Care", category: "Agronomy", shortDesc: "Crop protection and plant health solutions.", logoComponent: <img src="/images/21.jpg" alt="IGO Crop Care logo" className="h-full w-full object-contain" /> },
  { id: "brand-21", name: "IGO Pharma", category: "Healthcare", shortDesc: "Agri-health and pharma-linked wellness products.", logoComponent: <img src="/images/22.jpg" alt="IGO Pharma logo" className="h-full w-full object-contain" /> },
  { id: "brand-22", name: "IGO Techfarming Scientist", category: "Research", shortDesc: "Research-led scientific approach to modern farming.", logoComponent: <img src="/images/23.jpg" alt="IGO Techfarming Scientist logo" className="h-full w-full object-contain" /> },
  { id: "brand-23", name: "Farmgate Mandi", category: "Marketplace", shortDesc: "Direct market linkages and mandi-focused trading solutions.", logoComponent: <img src="/images/24.jpg" alt="Farmgate Mandi logo" className="h-full w-full object-contain" /> },
  { id: "brand-24", name: "IGO Wealth Management", category: "Finance", shortDesc: "Wealth and financial planning services for agri stakeholders.", logoComponent: <img src="/images/25.jpg" alt="IGO Wealth Management logo" className="h-full w-full object-contain" /> }
];

// Types for the Verticals list
interface Vertical {
  id: number;
  name: string;
  category: "Engineering" | "Production" | "Trade" | "Consumer Lifestyle";
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<any>;
  metric: string;
  impact: string;
}

interface SovereignEcosystemProps {
  isDarkMode: boolean;
  onPageChange: (page: string) => void;
}

export default function SovereignEcosystem({ isDarkMode, onPageChange }: SovereignEcosystemProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fully compiled 26 official Verticals of IGO Group matching the screenshot context
  const verticals: Vertical[] = [
    // Group A: Engineering & Agri-tech
    {
      id: 1,
      name: "IGO Rhizome",
      category: "Engineering",
      shortDesc: "Real-time rootzone IoT hydration & NPK nutrient sensors.",
      longDesc: "Provides subterranean active-matrix sensing of soil electrical conductivity, volumetric water content (VWC), and macronutrient concentrations using custom 4-pin austenitic stainless steel prongs, connecting to low-power cellular nodes.",
      icon: Cpu,
      metric: "18.4M Direct Soil Reports/Day",
      impact: "38% Water Savings in Rice Paddies"
    },
    {
      id: 2,
      name: "IGO Astra",
      category: "Engineering",
      shortDesc: "Sentinel-2 and Landsat multispectral reflectance telemetry.",
      longDesc: "Leverages cloud-free composite imagery from European Space Agency satellites, executing automated NDVI, NDRE, and EVI calculations to spot early blight, severe chlorosis, and moisture stress at 10-meter cell boundaries.",
      icon: Eye,
      metric: "4.2M Hectares Under Watch",
      impact: "Guarantees 12-Day Early Blight Warnings"
    },
    {
      id: 3,
      name: "IGO DroneWorks",
      category: "Engineering",
      shortDesc: "Autonomous heavy-payload crop protection rotary-wing fleets.",
      longDesc: "Our fleet of indigenously manufactured hexacopter drones delivers ultra-low volume precision micro-spraying of organic pesticides and bio-stimulants, with collision-avoidance radar and centimeter-precise RTK GPS.",
      icon: Activity,
      metric: "12,400 Sprayed Hectares/Month",
      impact: "92% Reduction in Chemical Over-Dosing"
    },
    {
      id: 4,
      name: "IGO RoboFarm",
      category: "Engineering",
      shortDesc: "Electric high-clearance smart tractor retrofits.",
      longDesc: "Converts existing mechanical implements into autonomous LiDAR-equipped field robots. Performs automated sub-centimeter mechanical weeding, seed spacing, and soil scarification, fully powered by agricultural solar rigs.",
      icon: Radio,
      metric: "2,150 Autonomous Units",
      impact: "Eliminates Manual Weed Costs Entirely"
    },
    {
      id: 5,
      name: "IGO HydroFlow",
      category: "Engineering",
      shortDesc: "Sub-surface solenoid automated drip irrigation manifolds.",
      longDesc: "Integrates flow monitoring and soil water tension models to feed water directly to crop roots. Adjusts irrigation intervals in real-time according to immediate regional evapotranspiration and wind-speed calculations.",
      icon: Droplets,
      metric: "450K Smart Valves Deployed",
      impact: "Consistently Saves 42B Liters of Water"
    },
    {
      id: 6,
      name: "IGO NeuroAg",
      category: "Engineering",
      shortDesc: "Deep Neural Networks for crop-growth projections.",
      longDesc: "Our server-side predictive engines compile soil, weather, satellite index history, and APMC pricing to run millions of agricultural simulations, projecting optimal harvest dates and expected yields with 94.6% accuracy.",
      icon: Layers,
      metric: "94.6% Harvest Projection Accuracy",
      impact: "Enhances Spot Sale Margins by 22%"
    },
    {
      id: 7,
      name: "IGO MandiOS",
      category: "Engineering",
      shortDesc: "Unified wholesale marketplace ERP and pricing hubs.",
      longDesc: "A complete operating system for APMC commission agents, aggregators, and processors. Facilitates digital scale logging, automated statutory tax processing, and instant electronic pay-outs for farmers.",
      icon: DashboardIcon, // falling back safely
      metric: "₹1,420 Cr Annual APMC Volume",
      impact: "Removes Traditional 3% Broker Fees"
    },

    // Group B: Production & Organic Farming
    {
      id: 8,
      name: "IGO AgroForestry",
      category: "Production",
      shortDesc: "High-value timber intercropping and multi-tier canopies.",
      longDesc: "Pioneers the cultivation of high-yield Malabar Neem and sandalwood trees alongside ginger, turmeric, and organic pulses, creating robust shade-tolerant multi-tier agroforestry fields for microclimate stability.",
      icon: Wheat,
      metric: "12,500 Integrated Forest Farms",
      impact: "3.5x Multi-Decadal Passive Net Worth"
    },
    {
      id: 9,
      name: "IGO BioNutrients",
      category: "Production",
      shortDesc: "Mycorrhizal soil inoculants and neem botanical extracts.",
      longDesc: "Manufactures premium industrial-grade microbial liquids and organic compost formulations. Activates natural soil phosphorus uptake, repairs rhizosphere root microflora, and naturally repels lepidoptera pests.",
      icon: Leaf,
      metric: "120K Metric Tons Produced/Year",
      impact: "Restores Degraded Alkaline Acreage"
    },
    {
      id: 10,
      name: "IGO SeedBank",
      category: "Production",
      shortDesc: "Climate-resilient heirloom short-duration seed breeding.",
      longDesc: "Maintains over 400 native varieties of flood-tolerant paddy, drought-resistant millets, and rust-resistant wheat. Developed in conjunction with premier national research instutites for enhanced climate robustness.",
      icon: Compass,
      metric: "1,800 Local Seed Storage Depots",
      impact: "Survives 14-Day Full Submergence"
    },
    {
      id: 11,
      name: "IGO Cultivate",
      category: "Production",
      shortDesc: "Automated climate-controlled greenhouse operations.",
      longDesc: "Provides modular walk-in clean greenhouses styled with micro-fogger cooling systems, LED crop lights, and closed-loop recirculating hydroponic stacks. Specially tuned for premium seed propagation and export salad greens.",
      icon: Zap,
      metric: "2,200 High-Tech Greenhouses",
      impact: "12x Yield Increase Per Square Meter"
    },
    {
      id: 12,
      name: "IGO GreenDairy",
      category: "Production",
      shortDesc: "Traceable biodynamic organic dairy cooperatives.",
      longDesc: "Operates clean cooperative grazing pastures. Supports ethical dairy extraction equipped with real-time biometric ear tags monitoring cattle lactation health, milk composition, and core body temperatures.",
      icon: Smile,
      metric: "420K Liters Daily Processed",
      impact: "100% Zero-Antibiotic Grade-A Milk"
    },
    {
      id: 13,
      name: "IGO Floriculture",
      category: "Production",
      shortDesc: "Premium greenhouse flower exports for global auctions.",
      longDesc: "An advanced agro-division producing export-grade roses, carnations, and gerberas, grown using precise temperature controls and immediately transferred to liquid-nitrogen shelf-life extensions.",
      icon: Sparkles,
      metric: "140M Stems Mocked & Marketed",
      impact: "India's #1 Premium Floral Exporter"
    },

    // Group C: Trade & National Logistics
    {
      id: 14,
      name: "IGO Cargo",
      category: "Trade",
      shortDesc: "Cold chain reefer fleet with real-time multi-sensor telemetry.",
      longDesc: "Our nationwide cold chain transport fleet carries vacuum-isolated refrigerated bays equipped with IoT ambient monitors. Transmits temperature, humidity, and door-cycle logs continuously via satellite cellular transponders.",
      icon: Truck,
      metric: "620 High-Capacity Refrigerated Reefers",
      impact: "Reduces Fresh Crop Spoilage to Under 1.5%"
    },
    {
      id: 15,
      name: "IGO APMC Warehousing",
      category: "Trade",
      shortDesc: "Solar-powered smart dry silos and hermetic cocoons.",
      longDesc: "State-of-the-art rural dry storage warehouses. Monitors grain temperature and relative moisture levels automatically, sealing organic reserves protectively inside clean nitrogen-purged atmosphere packaging.",
      icon: Warehouse,
      metric: "1.4M Tons Aggregated Dry Capacity",
      impact: "Maintains Perfect Grain Quality for 3 Years"
    },
    {
      id: 16,
      name: "IGO GlobalTrade",
      category: "Trade",
      shortDesc: "Export trade supply lines matching global phytosanitary standards.",
      longDesc: "Bypasses domestic wholesale chains to deliver premium crop consignments to buyers across Southeast Asia, the Middle East, and Europe, handling all international customs filings and quality clearances.",
      icon: Globe,
      metric: "32 Export Destination Countries",
      impact: "Premium Pricing Boosts Farm Payouts by 40%"
    },
    {
      id: 17,
      name: "IGO AgriSecur",
      category: "Trade",
      shortDesc: "Satellite-triggered micro-insurance and crop credits.",
      longDesc: "Uses satellite NDVI reflectance metrics to verify crop loss instantly. Automatically issues fast insurance payouts during severe monsoon failure or flash flooding without needing physical assessor visits.",
      icon: ShieldCheck,
      metric: "₹380 Cr Active Sum Insured",
      impact: "Claims Settled Under 72 Hours"
    },
    {
      id: 18,
      name: "IGO MandiTrade",
      category: "Trade",
      shortDesc: "Automated digital trade clearing, grading, and bidding.",
      longDesc: "Enables corporate off-takers to securely bid on regional crops based on digital quality assays (moisture, grain length, impurities). Guarantees transparent escrow settlement back to farmer accounts.",
      icon: Users,
      metric: "18 APMC Markets Interlinked",
      impact: "Guarantees Payments Within 12 Hours"
    },
    {
      id: 19,
      name: "IGO SupplyChain",
      category: "Trade",
      shortDesc: "Distributed blockchain grain-origin traceability protocol.",
      longDesc: "Generates secure QR-based origins for harvested foods, tracking individual sacks from specific farm coordinates, soil treatment histories, cold chain logs, and milling APMCs directly to plates.",
      icon: FileText,
      metric: "12.8M Traceable Retail Sacks",
      impact: "100% Verified Non-GMO Provenance"
    },

    // Group D: Consumer Lifestyle & Organic Foods
    {
      id: 20,
      name: "IGO Organics",
      category: "Consumer Lifestyle",
      shortDesc: "Clean organic pulses, ancient grains, and cold-pressed oils.",
      longDesc: "Direct-to-consumer premium organic staples. Grown using biological fertilizers other than synthetic chemicals, certified globally under bio-organic non-toxic testing laboratories.",
      icon: Leaf,
      metric: "1.2 Lakh Monthly Loyal Subscribers",
      impact: "Zero Synthetic Chemical Preservatives"
    },
    {
      id: 21,
      name: "IGO Brew",
      category: "Consumer Lifestyle",
      shortDesc: "Single-origin Nilgiri teas, coffees, and herbal wellness drinks.",
      longDesc: "Artisanal direct-trade leaf teas and Arabica beans shade-grown alongside silver oak bark. Sorted carefully by hand, micro-roasted dynamically, and packaged immediately inside nitrogen-flushed packages.",
      icon: Coffee,
      metric: "42 Single-Origin Estates Harvested",
      impact: "Fair-Trade Payouts 60% Above Market Rates"
    },
    {
      id: 22,
      name: "IGO VitalFoods",
      category: "Consumer Lifestyle",
      shortDesc: "High-protein ancient grain millets and plant meat bases.",
      longDesc: "Propagates finger millet (ragi), sorghum (jowar), and high-fiber macro-grains into clean consumer foods, natural cereal bars, and meatless culinary bases supporting cardiovascular health.",
      icon: Sparkles,
      metric: "1,200 Major Supermarket Outlets",
      impact: "Low Glycemic Index Certified Diabetic Safe"
    },
    {
      id: 23,
      name: "IGO EarthWear",
      category: "Consumer Lifestyle",
      shortDesc: "Slow-fashion organic cotton and industrial hemp textiles.",
      longDesc: "Supports handloom weaver clusters using unbleached organic cotton and hemp crops. Naturally dyed using pomegranate peels and indigos, consuming 80% less water than conventional cloth.",
      icon: ShoppingBag,
      metric: "180K Meters of Bio-Fiber Produced",
      impact: "100% Compostable Ethical Apparel"
    },
    {
      id: 24,
      name: "IGO Botanicals",
      category: "Consumer Lifestyle",
      shortDesc: "Certified Ayurvedic therapeutic extracts and essential oils.",
      longDesc: "Formulates pure steam-distilled essential oils and wellness supplements (Ashwagandha, Moringa, Turmeric capsules) sourced from tribal agro-cooperatives under certified pharmacopoeia directives.",
      icon: Heart,
      metric: "88 Organic Phytosome Oils",
      impact: "Boosts Income of Forest-Dwelling Tribes"
    },
    {
      id: 25,
      name: "IGO EcoPack",
      category: "Consumer Lifestyle",
      shortDesc: "Biodegradable agricultural bagasse and sugarcane pulp packaging.",
      longDesc: "Pioneers the transformation of visual crop residue, straw, and bagasse into heavy-duty compostable plates, boxes, and straws, successfully redirecting crop stubble and preventing field burning.",
      icon: PackageIcon, // falling back safely
      metric: "850 Metric Tons of Stubble Recovered",
      impact: "Prevents Toxic PM2.5 Rural Smog"
    },
    {
      id: 26,
      name: "IGO Nutrition",
      category: "Consumer Lifestyle",
      shortDesc: "Cold-pressed prebiotic wellness leaf juices and wellness tonics.",
      longDesc: "Delivers enzyme-rich cold-pressed green drinks, sea buckthorn concentrates, and prebiotic ginger elixirs made fresh with high-vigor wheatgrass and certified organic orchards.",
      icon: Coins,
      metric: "2.4M Bottles Retailed Nationally",
      impact: "100% Freshly Squeezed, Organic Fruit"
    }
  ];

  function DashboardIcon(props: any) {
    return <Layers {...props} />;
  }

  function PackageIcon(props: any) {
    return <Warehouse {...props} />;
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % verticals.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + verticals.length) % verticals.length);
  };

  // Filter based on selected category (when expanded)
  const filteredVerticals = selectedCategory === "All"
    ? verticals
    : verticals.filter(v => v.category === selectedCategory);

  const activeVertical = verticals[activeIdx];

  const categories = ["All", "Engineering", "Production", "Trade", "Consumer Lifestyle"];

  return (
    <section 
      className={`relative w-screen overflow-hidden border-t transition-all duration-300 ${
        isDarkMode 
          ? "bg-[#090d16] border-slate-800/80 text-[#f8fafc]" 
          : "bg-[#FCFBF7] border-slate-200/80 text-[#0f172a]"
      }`} 
      id="sovereign-ecosystem-display-root"
      style={{ marginLeft: "calc(50% - 50vw)", width: "100vw" }}
    >
      
      {/* 1. HIGH FIDELITY BRAND GRAPHICS BACKGROUND WATERMARKS MATCHING SCREENSHOT */}
      <div className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden transition-opacity ${
        isDarkMode ? "opacity-[0.2]" : "opacity-[0.3]"
      }`}>
        <div className="relative w-full max-w-5xl flex items-center justify-center h-full pt-16">
          
          {/* India Map Graphic (Golden Fill) */}
          <div className="absolute left-[20%] sm:left-[30%] top-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] opacity-80 mix-blend-multiply dark:mix-blend-screen">
            <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef3c7" />
                  <stop offset="50%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
              <path 
                d="M45,15 Q49,12 50,15 T52,19 T56,22 T55,26 T53,30 T51,33 T54,34 T57,36 T58,40 T54,43 T53,48 T50,51 T48,56 T49,60 T48,64 T42,65 T38,62 T37,58 T38,53 T36,50 T39,45 T41,40 T38,36 T37,30 T39,26 T42,20 Z" 
                fill="url(#indiaGrad)" 
                className="opacity-90"
              />
              <path 
                d="M50,51 T55,54 T59,57 T62,60 T64,64 T65,68 T63,72 T59,75 T54,78 T51,82 T50,86 T48,89 T46,92 T45,95 L44,97 L43,95 T42,91 T41,86 T42,80 T40,75 T42,70 T44,65 T45,61 Z" 
                fill="url(#indiaGrad)" 
                className="opacity-70"
              />
            </svg>
          </div>

          {/* Large Typography Watermark */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-multiply dark:mix-blend-screen -mt-20">
            <div className="text-[120px] sm:text-[180px] leading-[0.8] font-black text-slate-300/50 dark:text-slate-700/50 tracking-tighter uppercase font-sans">
              IGO
            </div>
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-[12px] font-black tracking-[0.4em] text-slate-400 uppercase whitespace-nowrap z-20">
                INDIA GREEN ORGANICS
              </div>
              <div className="text-[70px] sm:text-[110px] leading-[0.8] font-black text-slate-300/50 dark:text-slate-700/50 tracking-tighter uppercase font-sans">
                GROUP
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase whitespace-nowrap z-20">
                India's Leading Farming Conglomerate
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 text-center">
        
        {/* 2. SUB-LABEL WITH SIDE RULES */}
        <div className="flex items-center justify-center gap-4 text-[10px] sm:text-[11px] tracking-[0.25em] font-bold text-amber-600/90 dark:text-amber-500 uppercase font-mono">
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-amber-600/60 to-transparent" />
          The Sovereign Ecosystem
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-amber-600/60 to-transparent" />
        </div>

        {/* 3. HERO MAIN SECTION HEADING */}
        <div className="space-y-4 max-w-4xl mx-auto relative z-10 py-2">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight ${
            isDarkMode ? "text-[#f8fafc]" : "text-[#0f172a]"
          }`}>
            The <span className="font-serif italic font-normal text-[#DAB247]">26 Verticals</span> of IGO.
          </h2>
          <p className={`text-sm sm:text-base font-sans font-medium leading-relaxed max-w-2xl mx-auto ${
            isDarkMode ? "text-slate-300" : "text-slate-500"
          }`}>
            A sovereign agricultural ecosystem covering Engineering, Production, Trade, and Consumer Lifestyle.
          </p>
        </div>

        {/* 5. INTERACTIVE CAROUSEL CONTROLS */}
        <div className="flex items-center justify-center gap-6 pb-4 pt-4" id="sovereign-carousel-controls">
          <button 
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
              }
            }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isDarkMode 
                ? "border-slate-700 bg-slate-900/40 text-slate-400 hover:text-amber-500 hover:border-amber-500/40" 
                : "border-slate-200 bg-white text-slate-500 hover:text-[#B48C35] hover:border-amber-500/40 shadow-sm hover:shadow"
            }`}
            title="Scroll Left"
            id="verticals-carousel-prev"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="uppercase font-sans tracking-[0.25em] font-extrabold text-[10px] sm:text-[11px] text-slate-500 hover:text-[#9A7420] dark:text-slate-400 dark:hover:text-[#DAB247] transition-all cursor-pointer select-none group flex flex-col items-center gap-1"
            id="verticals-explore-btn"
          >
            <span className="border-b border-dashed border-slate-300 group-hover:border-b-solid transition-all pb-0.5">
              {isExpanded ? "COLLAPSE DIRECTORY" : "EXPLORE ALL 26 VERTICALS"}
            </span>
          </button>

          <button 
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
              }
            }}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isDarkMode 
                ? "border-slate-700 bg-slate-900/40 text-slate-400 hover:text-amber-500 hover:border-amber-500/40" 
                : "border-slate-200 bg-white text-slate-500 hover:text-[#B48C35] hover:border-amber-500/40 shadow-sm hover:shadow"
            }`}
            title="Scroll Right"
            id="verticals-carousel-next"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>



        {/* 4. ACTIVE PORTFOLIO BRAND SCROLLER / CAROUSEL PREVIEW MATCHING SCREENSHOT */}
        <div className="brand-marquee-root relative py-8 overflow-hidden ticker-wrapper" id="brand-marquee-root">
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .ticker-wrapper {
              width: 100vw;
              max-width: none;
              position: relative;
              left: 50%;
              transform: translateX(-50%);
              margin-left: 0;
              margin-right: 0;
              overflow: hidden;
            }
            .track {
              display: flex;
              width: max-content;
              min-width: max-content;
              will-change: transform;
              animation: marquee 40s linear infinite;
              gap: 1.5rem;
              padding: 0.5rem 2rem 1rem;
            }
            .ticker-wrapper:hover .track {
              animation-play-state: paused;
            }
            .brand-marquee-card {
              flex-shrink: 0;
              min-width: 180px;
              width: 280px;
            }
            @media (prefers-reduced-motion: reduce) {
              .track {
                animation: none;
              }
            }
          `}</style>

          <div className="brand-marquee-shell">
            <div
              ref={scrollContainerRef}
              className="track select-none"
              aria-label="IGO group showcase carousel"
            >
              {[...brandsList, ...brandsList].map((brand, idx) => (
                <div 
                  key={`${brand.id}-${idx}`}
                  onClick={() => {
                    // Clicking on any brand can open up its associated vertical stats directly!
                    const matchedVertIndex = verticals.findIndex(v => v.name.toLowerCase().includes(brand.name.split(" ")[1]?.toLowerCase() || ""));
                    if (matchedVertIndex !== -1) {
                      setActiveIdx(matchedVertIndex);
                    }
                  }}
                  className={`brand-marquee-card rounded-[2rem] p-6 transition-all duration-300 relative cursor-pointer flex flex-col justify-center items-center h-[280px] text-center ${
                    isDarkMode 
                      ? "bg-slate-800/50 border border-slate-700/80 hover:border-amber-500/30 hover:scale-105" 
                      : "bg-[#F8F9FA] border border-slate-100 hover:border-slate-200 hover:shadow-md hover:scale-105"
                  } ${brand.name === "PALM CAFE" ? "ring-2 ring-[#B48C35]/55 border-[#B48C35]/65" : ""}`}
                >
                  {/* Upper logo box */}
                  <div className={`w-[140px] h-[140px] rounded-full flex items-center justify-center mb-8 relative overflow-hidden transition-colors shadow-sm border ${
                    isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
                  }`}>
                    {brand.logoComponent}
                  </div>

                  {/* Classification tag */}
                  <div className="text-[11px] sm:text-[12px] tracking-[0.25em] font-sans font-bold text-slate-400 dark:text-slate-500 uppercase block">
                    {brand.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. EXPANDED MATRIX GRID - SHOWS CLASSIFIED VERTICALS BENTO */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-visible w-full pt-6 text-left"
              id="verticals-expanded-catalog-panel"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-slate-800/10 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-emerald-600 text-white shadow-sm"
                        : isDarkMode
                          ? "bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800/60"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-305"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredVerticals.map((vert, vIdx) => (
                  <motion.div
                    key={vert.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: vIdx * 0.02 }}
                    onClick={() => {
                      // Scroll up back cleanly to the main carousel screen for details!
                      setActiveIdx(verticals.findIndex(v => v.id === vert.id));
                      const el = document.getElementById("sovereign-ecosystem-display-root");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`p-5 rounded-2xl border transition-all hover:scale-[1.01] flex flex-col justify-between group cursor-pointer ${
                      activeVertical.id === vert.id
                        ? "border-amber-500 bg-amber-500/5 ring-1 ring-amber-500/20"
                        : isDarkMode
                          ? "bg-slate-900/30 hover:bg-slate-900/60 border-slate-800/80 hover:border-slate-700/80"
                          : "bg-white hover:bg-slate-50 border-slate-200/80 hover:border-slate-350 shadow-xs"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold tracking-wider text-amber-500 uppercase">
                          {vert.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          #{String(vert.id).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                          {React.createElement(vert.icon, {
                            className: "w-4.5 h-4.5 text-emerald-500"
                          })}
                        </div>
                        <h4 className="font-extrabold text-sm text-slate-100 group-hover:text-amber-500 transition-colors" style={{ color: !isDarkMode ? "#0F172A" : "" }}>
                          {vert.name}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        {vert.shortDesc}
                      </p>
                    </div>

                    <div className="border-t border-slate-800/10 pt-3 mt-4 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Preview Entity</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
