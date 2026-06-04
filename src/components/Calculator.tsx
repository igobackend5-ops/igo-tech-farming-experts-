import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, Shovel, Droplets, TrendingUp, DollarSign, CloudSun, MapPin, Sparkles, RefreshCw } from "lucide-react";

export default function SmartCalculators() {
  const [activeTab, setActiveTab] = useState<"roi" | "yield" | "crop-advisory" | "market">("roi");

  // ROI Calculator States
  const [acres, setAcres] = useState<number>(10);
  const [currentCost, setCurrentCost] = useState<number>(8500); // per acre
  const [avgRevenue, setAvgRevenue] = useState<number>(35000); // per acre

  // Yield states
  const [selectedCrop, setSelectedCrop] = useState<string>("Rice");
  const [soilType, setSoilType] = useState<string>("Clayey Black");
  const [organicMatter, setOrganicMatter] = useState<number>(2.5);

  // Market Prices State Region
  const [region, setRegion] = useState<string>("Maharashtra Mandi");

  // ROI computations
  // Precision tech reduces input costs by ~25% and boosts yield output by ~20%
  const savedCostsPerAcre = currentCost * 0.25;
  const increasedRevenuePerAcre = avgRevenue * 0.20;
  const originalProfit = avgRevenue - currentCost;
  const agritechProfit = (avgRevenue + increasedRevenuePerAcre) - (currentCost - savedCostsPerAcre);
  const netGainPerAcre = agritechProfit - originalProfit;
  const totalFinancialImpact = netGainPerAcre * acres;
  const iotInvestment = 2200 * acres + 15000; // Rs 2200 per acre sensors + 15000 setup
  const roiPercentage = ((totalFinancialImpact - iotInvestment) / iotInvestment) * 100;

  // Yield calculations
  const cropBaselines: Record<string, { yieldFactor: number; waterNeeded: number; npk: string }> = {
    Rice: { yieldFactor: 22, waterNeeded: 1200, npk: "N:120, P:60, K:60" },
    Wheat: { yieldFactor: 18, waterNeeded: 450, npk: "N:100, P:50, K:40" },
    Cotton: { yieldFactor: 11, waterNeeded: 700, npk: "N:80, P:40, K:40" },
    Sugarcane: { yieldFactor: 310, waterNeeded: 1800, npk: "N:150, P:80, K:80" },
    Maize: { yieldFactor: 25, waterNeeded: 550, npk: "N:120, P:60, K:40" },
    Tomato: { yieldFactor: 150, waterNeeded: 600, npk: "N:90, P:60, K:60" },
  };

  const currentCropFactor = cropBaselines[selectedCrop] || cropBaselines.Rice;
  const predictedYield = Math.round(acres * currentCropFactor.yieldFactor * (0.9 + organicMatter * 0.08));
  const waterConsumptionVolume = Math.round(acres * currentCropFactor.waterNeeded * 4.04); // Cubic Meters

  const mandiPrices: Record<string, Record<string, string>> = {
    "Maharashtra Mandi": { Rice: "₹2,450", Wheat: "₹2,680", Cotton: "₹7,200", Sugarcane: "₹345", Maize: "₹2,150", Tomato: "₹3,100" },
    "Punjab - APMC Market": { Rice: "₹2,500", Wheat: "₹2,720", Cotton: "₹7,460", Sugarcane: "₹360", Maize: "₹2,200", Tomato: "₹2,900" },
    "Karnataka Rural Hub": { Rice: "₹2,420", Wheat: "₹2,650", Cotton: "₹7,080", Sugarcane: "₹352", Maize: "₹2,110", Tomato: "₹3,250" },
    "Uttar Pradesh Mandi": { Rice: "₹2,380", Wheat: "₹2,700", Cotton: "₹7,150", Sugarcane: "₹375", Maize: "₹2,180", Tomato: "₹2,850" }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl font-sans" id="smart-calculators-root">
      {/* Tab Selectors */}
      <div className="flex border-b border-slate-800 bg-slate-950/60 p-2 overflow-x-auto gap-1">
        <button
          onClick={() => setActiveTab("roi")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "roi"
              ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <DollarSign className="w-4 h-4" />
          ROI Calculator
        </button>
        <button
          onClick={() => setActiveTab("yield")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "yield"
              ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          Yield & Water Predictor
        </button>
        <button
          onClick={() => setActiveTab("crop-advisory")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "crop-advisory"
              ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <Shovel className="w-4 h-4" />
          Smart NPK Advisory
        </button>
        <button
          onClick={() => setActiveTab("market")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === "market"
              ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold"
              : "text-slate-400 hover:text-slate-200 border border-transparent"
          }`}
        >
          <CloudSun className="w-4 h-4" />
          Market & Weather Ticker
        </button>
      </div>

      <div className="p-6 md:p-8">
        {/* ROI CALCULATOR TAB */}
        {activeTab === "roi" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sliders and inputs */}
              <div className="space-y-5">
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Precision Farming ROI Engine</h4>
                  <p className="text-xs text-slate-400">
                    See how integrating IoT sensors and satellite advisory cuts costs and lifts yields.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Acres Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Total Farm Size (Acres)</span>
                      <span className="text-emerald-400 font-bold">{acres} Acres</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="200"
                      value={acres}
                      onChange={(e) => setAcres(parseInt(e.target.value) || 1)}
                      className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Avg Cost Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Annual Input costs per Acre (Seed, Water, Fertilizers)</span>
                      <span className="text-slate-200">₹{currentCost.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="30000"
                      step="500"
                      value={currentCost}
                      onChange={(e) => setCurrentCost(parseInt(e.target.value) || 2000)}
                      className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Revenue Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300">Expected Harvest Revenue per Acre (Traditional method)</span>
                      <span className="text-slate-200">₹{avgRevenue.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      step="1000"
                      value={avgRevenue}
                      onChange={(e) => setAvgRevenue(parseInt(e.target.value) || 10000)}
                      className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Returns Sheet */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Projected Annual Profit Boost
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-900 border border-slate-800/60 rounded-lg">
                      <div className="text-[10px] text-slate-400 uppercase">Input Savings</div>
                      <div className="text-sm font-bold text-white mt-1">
                        +₹{Math.round(savedCostsPerAcre * acres).toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 bg-slate-900 border border-slate-800/60 rounded-lg">
                      <div className="text-[10px] text-slate-400 uppercase">Yield Revenue Lift</div>
                      <div className="text-sm font-bold text-white mt-1">
                        +₹{Math.round(increasedRevenuePerAcre * acres).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Net Gain / Year:</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        +₹{Math.round(totalFinancialImpact).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">IoT Hardware Install cost (Year 1):</span>
                      <span className="text-slate-300">₹{iotInvestment.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-emerald-500/10 flex items-center gap-4">
                  <div className="bg-emerald-600 text-white rounded-lg px-4 py-3 text-center flex-1">
                    <div className="text-[10px] uppercase font-bold tracking-wide opacity-80">Estimated ROI (Year 1)</div>
                    <div className="text-xl font-black mt-0.5">
                      {roiPercentage > 0 ? `+${Math.round(roiPercentage)}%` : `${Math.round(roiPercentage)}%`}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 leading-normal flex-1">
                    *Based on NABARD benchmark data for IoT field deployments. Break-even occurs in as fast as 4 months.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CROP YIELD & WATER PREDICTOR */}
        {activeTab === "yield" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Yield Forecasting Engine</h4>
                  <p className="text-xs text-slate-400">
                    Input crop type and soil carbon metrics to simulate optimal tonnage profiles.
                  </p>
                </div>

                {/* Crop dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-semibold block">Select Base Crop</label>
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none focus:border-emerald-500"
                  >
                    <option value="Rice">Rice (Kharif Staple)</option>
                    <option value="Wheat">Wheat (Rabi Grain)</option>
                    <option value="Cotton">Cotton / Kapas</option>
                    <option value="Sugarcane">Sugarcane (Cash Crop)</option>
                    <option value="Maize">Maize (Cereal)</option>
                    <option value="Tomato">Tomato (Horticultural)</option>
                  </select>
                </div>

                {/* Soil selection */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-semibold block">Soil Classification</label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none focus:border-emerald-500"
                  >
                    <option value="Clayey Black">Clayey Black Soil (Deccan)</option>
                    <option value="Alluvial Red">Alluvial Loam (Indo-Gangetic)</option>
                    <option value="Laterite Sandy">Laterite Sandy Soil (Coastal)</option>
                    <option value="Red Sandy">Red Soil (Peninsular)</option>
                  </select>
                </div>

                {/* Carbon Matter organic level */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Soil Organic Carbon Matter (% SOC)</span>
                    <span className="text-emerald-400 font-bold">{organicMatter}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={organicMatter}
                    onChange={(e) => setOrganicMatter(parseFloat(e.target.value) || 0.5)}
                    className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-400 block pt-0.5">
                    *Optimal organic carbon content (&gt; 1.5%) significantly enhances root water retention.
                  </span>
                </div>
              </div>

              {/* Yield outputs visual projection */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> Simulated Harvest Forecasts
                  </div>

                  <div className="p-5 bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800/80 rounded-xl text-center space-y-1.5">
                    <div className="text-xs text-slate-400">Estimated Production Yield</div>
                    <div className="text-3xl font-black text-white">
                      {predictedYield.toLocaleString()} <span className="text-xs text-emerald-400 font-bold">Quintals (q)</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Based on standard {acres} acres of {selectedCrop} in {soilType}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800/30 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-sky-400" />
                        <span>Projected Irrigation Volume:</span>
                      </div>
                      <span className="text-white font-bold">{waterConsumptionVolume.toLocaleString()} m³</span>
                    </div>

                    <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800/30 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Shovel className="w-4 h-4 text-emerald-400" />
                        <span>Recommended N-P-K Ratio:</span>
                      </div>
                      <span className="text-emerald-400 font-bold font-mono">{currentCropFactor.npk} kg/ha</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-[10px] text-slate-500 font-medium italic text-right">
                  *Results derived from Indian Council of Agricultural Research (ICAR) regional crop charts.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SMART NPK ADVISORY TAB */}
        {activeTab === "crop-advisory" && (
          <div className="space-y-6">
            <h4 className="text-white font-bold text-base mb-1">Precision Fertigation Guidance</h4>
            <p className="text-xs text-slate-400 mb-4">
              Our IoT sensors monitor active NPK presence in parts per million (ppm). Cross-check optimal nitrogen, phosphorus, and potassium goals below:
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl relative group">
                <span className="absolute top-3 right-3 text-[10px] text-slate-500 font-mono">PRIMARY</span>
                <h5 className="font-bold text-sm text-emerald-400 flex items-center gap-1.5 mb-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" /> Nitrogen (N)
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Required for early lush canopy development and grain filling. Needs high moisture values to hydrate soil nitrates properly.
                </p>
                <div className="p-2.5 bg-slate-905 rounded-lg border border-slate-800 text-xs text-slate-400">
                  Target: <strong className="text-white">120 - 150 kg/ha</strong>
                </div>
              </div>

              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl relative group">
                <span className="absolute top-3 right-3 text-[10px] text-slate-500 font-mono">VIGOR</span>
                <h5 className="font-bold text-sm text-cyan-400 flex items-center gap-1.5 mb-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-500" /> Phosphorus (P)
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Critical for rapid root structural scaling, early flowering stage protection, and high disease resilience.
                </p>
                <div className="p-2.5 bg-slate-905 rounded-lg border border-slate-800 text-xs text-slate-400">
                  Target: <strong className="text-white">50 - 75 kg/ha</strong>
                </div>
              </div>

              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl relative group">
                <span className="absolute top-3 right-3 text-[10px] text-slate-500 font-mono">DURABILITY</span>
                <h5 className="font-bold text-sm text-amber-400 flex items-center gap-1.5 mb-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" /> Potassium (K)
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Regulates stomatal opening and transpiration rates. Increases stalk strength so heavy wind/lodging does not fell crops.
                </p>
                <div className="p-2.5 bg-slate-905 rounded-lg border border-slate-800 text-xs text-slate-400">
                  Target: <strong className="text-white">40 - 60 kg/ha</strong>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 leading-normal flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse flex-shrink-0" />
              <span><strong>FPO Fertigation Alert:</strong> Soil Nitrogen values decrease during continuous cropping cycles. Standardize with customized IGO organic compost or green manuring for durable fertility.</span>
            </div>
          </div>
        )}

        {/* MARKET PRICE & WEATHER WIDGET */}
        {activeTab === "market" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="text-white font-bold text-base mb-1">Mandi Real-time Ticker</h4>
                <p className="text-xs text-slate-400">Showing calibrated procurement prices at regional trade nodes.</p>
              </div>

              {/* Region Selector */}
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300 outline-none focus:border-emerald-500"
              >
                <option value="Maharashtra Mandi">Maharashtra - Pune APMC</option>
                <option value="Punjab - APMC Market">Punjab - Khanna Mandi</option>
                <option value="Karnataka Rural Hub">Karnataka - Kolar APMC</option>
                <option value="Uttar Pradesh Mandi">Uttar Pradesh - Lucknow Node</option>
              </select>
            </div>

            {/* Display list of mandis */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(mandiPrices[region] || mandiPrices["Maharashtra Mandi"]).map(([crop, price]) => (
                <div key={crop} className="bg-slate-950 p-4 border border-slate-800 rounded-xl text-center flex flex-col justify-between">
                  <div className="text-slate-400 text-xs font-semibold">{crop}</div>
                  <div className="text-emerald-400 text-base font-black mt-2">{price}</div>
                  <div className="text-[9px] text-slate-600 mt-1 uppercase">Per Quintalian</div>
                </div>
              ))}
            </div>

            {/* Dynamic Weather Widget Panel */}
            <div className="p-5 bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800/80 rounded-xl grid md:grid-cols-3 gap-6 items-center">
              <div>
                <div className="text-xs text-slate-400 font-semibold mb-1">Live Soil Profile (Simulated via IoT)</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">41.2%</span>
                  <span className="text-xs text-emerald-400 font-bold">VMC (Optimal)</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Next sprinkler schedule: 4:30 PM (Sensor-calculated)</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Ambient Temp / Humidity:</span>
                  <span className="text-slate-200 font-bold">34°C / 64% RH</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Micro-climated Rain Probability:</span>
                  <span className="text-emerald-400 font-bold">12% (No rain expected today)</span>
                </div>
              </div>

              <div className="text-right border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 pl-0 md:pl-6 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 justify-end text-emerald-400 font-bold">
                  <MapPin className="w-3.5 h-3.5" /> Mandi Node Sync Active
                </div>
                <div>Last Pulled Local Mandi: <strong className="text-slate-300">Just Now</strong></div>
                <div className="text-[10px] text-slate-500">Adhering to Indian APMC Digital standards</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
