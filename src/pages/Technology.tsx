import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Route, Cpu, Radio, Database, ShieldCheck, HelpCircle, 
  RefreshCw, Cloud, Server, Sparkles, Binary, CheckCircle
} from "lucide-react";

interface TechnologyProps {
  isDarkMode: boolean;
}

export default function Technology({ isDarkMode }: TechnologyProps) {
  const [activeStep, setActiveStep] = useState<string>("raw-sensors");
  const [simulationState, setSimulationState] = useState<"idle" | "pulling" | "parsing" | "pushed">("idle");
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);

  // Telemetry simulation pipeline triggers
  const triggerSimulation = () => {
    setSimulationState("pulling");
    setSimulatedLogs(["[0.0s] Bootstrapping telemetry handshake with cellular node #4B..."]);
    
    setTimeout(() => {
      setSimulationState("parsing");
      setSimulatedLogs((prev) => [
        ...prev,
        "[1.2s] Received raw sensor voltage: V1=1.42V, V2=0.88V",
        "[2.0s] Deciphered rhizospheric moisture: VMC = 39.4%",
        "[2.5s] Triggering nitrogen regression analyzer: N=132ppm, P=58ppm"
      ]);
    }, 1500);

    setTimeout(() => {
      setSimulationState("pushed");
      setSimulatedLogs((prev) => [
        ...prev,
        "[3.8s] Cross-matching regional Sentinel-2 spectral charts: NDVI=0.82",
        "[4.2s] Agronomist core generated: recommendation sent via WhatsApp Node."
      ]);
    }, 3500);
  };

  const resetSimulation = () => {
    setSimulationState("idle");
    setSimulatedLogs([]);
  };

  return (
    <div className="space-y-20 pb-20 font-sans" id="tech-page-wrap">
      
      {/* 1. HEADER */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <span className="text-emerald-500 font-extrabold text-xs uppercase tracking-widest block">
          Industrial-Grade Architecture
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
          The Tech Stacks Powering Indian Yield Predictability
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We leverage cellular rhizosphere edge computing, automated satellite spectral sweeps, and regression models in compliance with IGO Group engineering guidelines.
        </p>
      </section>

      {/* 2. DYNAMIC LIVE DATAFLOW SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 sleek-card">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left controller panel */}
            <div className="lg:col-span-5 text-left space-y-5">
              <span className="text-xs text-emerald-500 font-extrabold uppercase tracking-wide">Edge Telemetry Simulator</span>
              <h2 className="text-2xl font-black">Execute Rhizosphere Data Pipeline</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience real-time telemetry processing. Click the pipeline trigger to feed rhizosphere voltages and spectral sweeps into our agronomist regression models.
              </p>

              <div>
                {simulationState === "idle" && (
                  <button 
                    onClick={triggerSimulation}
                    className="px-5 py-2.5 btn-primary-sleek text-xs font-bold uppercase rounded-lg cursor-pointer flex items-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Pull Live Telemetry
                  </button>
                )}

                {(simulationState === "pulling" || simulationState === "parsing") && (
                  <div className="flex items-center gap-3 text-xs text-amber-500 font-bold">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing field voltages & satellite streams...</span>
                  </div>
                )}

                {simulationState === "pushed" && (
                  <div className="space-y-3">
                    <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" /> Recommendation compiled & pushed successfully!
                    </div>
                    <button 
                      onClick={resetSimulation}
                      className="px-4 py-2 btn-outline-sleek text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Reset Simulator
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right log monitors and nodes terminal display */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-xl p-5 border border-slate-850 shadow-inner font-mono text-left space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-slate-900 pb-2">
                  <span>TERMINAL: TELEMETRY_INGRESS_DAEMON</span>
                  <span className="text-emerald-500">SYS_ACTIVE</span>
                </div>

                {/* Simulated Log Output lines */}
                <div className="h-44 overflow-y-auto space-y-1.5 text-xs text-slate-300">
                  {simulatedLogs.length > 0 ? (
                    simulatedLogs.map((log, idx) => (
                      <div key={idx} className="leading-relaxed animate-fadeIn">
                        {log}
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-600 italic">No active streams. Click "Pull Live Telemetry" to bootstrap direct cellular-satellite telemetry.</div>
                  )}
                  {simulationState === "pulling" && (
                    <div className="text-amber-500 animate-pulse text-[11px]">Connecting to field probes via NB-IoT...</div>
                  )}
                  {simulationState === "parsing" && (
                    <div className="text-sky-400 animate-pulse text-[11px]">Compiling soil matrix factors (VMC/NPK/PPD)...</div>
                  )}
                </div>

                {/* Simple active indicators map */}
                <div className="flex gap-4 pt-3 border-t border-slate-900 text-[10px] text-slate-500 font-sans font-semibold">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${simulationState !== "idle" ? "bg-emerald-500" : "bg-slate-800"}`} />
                    <span>Probes Connected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${simulationState === "parsing" || simulationState === "pushed" ? "bg-emerald-500 animate-pulse" : "bg-slate-800"}`} />
                    <span>Sentinel Sweep Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${simulationState === "pushed" ? "bg-emerald-500" : "bg-slate-800"}`} />
                    <span>WhatsApp Node Active</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HARDWARE-SOFTWARE STACK BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Our Precision Technology Blocks</h2>
          <p className="text-xs text-slate-400 max-w-xl">
            We operate five distinct foundational stacks, delivering highly accurate recommendations directly to our smallholder clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Satellite Spectral Sweeps",
              description: "Sentinel-2 and Landsat multi-spectral arrays record infrared reflectance indices at 10m resolutive layouts. We translate surface pigmentation into yield predictions.",
              specs: "NDVI / NDRE, EVI vegetative indicators",
              status: "ACTIVE"
            },
            {
              title: "Soil Rhizosphere Sensors",
              description: "Custom NB-IoT node probes equipped with tinned stainless tines. Records direct moisture tension and active inorganic nitrogen/potassium presence.",
              specs: "Cellular low wattage edge modules",
              status: "ACTIVE"
            },
            {
              title: "Custom Machine Learning Models",
              description: "Localized agricultural models trained on past monsoon layouts, cropping histories, and soil parameters, predicting harvesting dates.",
              specs: "Deep neural networks & regression libraries",
              status: "BETA"
            },
            {
              title: "Computer Vision Pest Protection",
              description: "Allows farmers to capture leaf and blemish images using simple mobile cameras. Analyzes pixel lesions to crop-diagnose blight or rust.",
              specs: "CNN classification models",
              status: "ACTIVE"
            },
            {
              title: "Multilingual Translation Systems",
              description: "Automated engine translating agronomist advice into major regional directories (Tamil, Hindi, Marathi, Telugu) pushed through WhatsApp integrations.",
              specs: "NLU translation and synthesis systems",
              status: "ACTIVE"
            },
            {
              title: "Mandi APMC Pricing Engine",
              description: "Scrapes real-time APMC trade datasets to offer farmers immediate price discovery, reducing middleman brokerage dependency.",
              specs: "Durable database synchronization",
              status: "ACTIVE"
            }
          ].map((tech, idx) => (
            <div 
              key={idx}
              className="p-6 sleek-widget flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded font-bold tracking-wider inline-block">
                  {tech.status}
                </span>
                <h3 className="font-bold text-base text-white" style={{ color: !isDarkMode ? "#0F172A" : "white" }}>
                  {tech.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="border-t border-slate-800/10 pt-4 mt-4 flex justify-between items-center text-[10px]">
                <span className="text-slate-500">Core Engine:</span>
                <span className="font-mono font-bold text-slate-300" style={{ color: !isDarkMode ? "#334155" : "" }}>{tech.specs}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STRUCTURAL PLATFORM TOPO DIAGRAM (Apple/Tesla Vibe) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="structural-architecture-diagram">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">The Data Exchange Architecture</h2>
          <p className="text-xs text-slate-400">How raw readings transform into premium yield security.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center items-stretch font-mono">
          
          <div className="p-4 sleek-widget border border-dashed border-slate-700/30 flex flex-col justify-center items-center text-xs text-slate-200">
            <Radio className="w-8 h-8 text-emerald-400 mb-2 animate-pulse" />
            <span className="font-bold text-slate-100">EDGE NODES</span>
            <p className="text-[10px] text-slate-400 mt-2 font-sans">NB-IoT rhizosphere soil probes and Sentinel spectral sweeps.</p>
          </div>

          <div className="hidden md:flex items-center justify-center text-slate-600">
            ───────&gt;
          </div>

          <div className="p-4 sleek-widget border border-dashed border-slate-700/30 flex flex-col justify-center items-center text-xs text-slate-200">
            <Cloud className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="font-bold text-slate-100">IGO CLOUD HOST</span>
            <p className="text-[10px] text-slate-400 mt-2 font-sans">Compiling NPK index metrics, neural crop projections, and monsoonal datasets.</p>
          </div>

          <div className="p-4 sleek-widget border border-dashed border-slate-700/30 flex flex-col justify-center items-center text-xs text-slate-200">
            <Server className="w-8 h-8 text-emerald-500 mb-2" />
            <span className="font-bold text-slate-100">DELIVERY NODES</span>
            <p className="text-[10px] text-slate-400 mt-2 font-sans">Pushed via WhatsApp advisory queues and corporate APMC terminals.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
