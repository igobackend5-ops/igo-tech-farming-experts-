import React, { useState } from "react";
import { 
  Search, Calendar, Clock, User, ArrowRight, Sparkles, CheckCircle, Mail,
  BookOpen, Filter
} from "lucide-react";

interface BlogProps {
  isDarkMode: boolean;
}

export default function Blog({ isDarkMode }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = [
    "All", "Precision Farming", "AI in Agriculture", "Smart Irrigation", 
    "Market Intelligence", "Agri Finance", "Organic Farming", "Drones & Automation", "Export & Trade"
  ];

  const blogPosts = [
    {
      id: "pest-ai",
      title: "How CNN Models Diagnose Sugarcane Rust Lesions Early",
      category: "AI in Agriculture",
      excerpt: "By processing high-contrast cell chlorophyll reflections via standard smartphones, crop research teams isolate pest anomalies up to 9 days earlier.",
      date: "May 28, 2026",
      author: "Dr. John Yesudhas",
      role: "Chairman & Agronomic Lead",
      readTime: "6 min read",
      tags: ["Artificial Intelligence", "Pest Control"],
      featured: true
    },
    {
      id: "sar-satellite",
      title: "Optimized Nitrogen Fertigation via Sentinel-2 Spectral Indices",
      category: "Precision Farming",
      excerpt: "How remote sensing leaf-pigmentation values allow co-operatives to adjust soil nitrogen levels systematically, preventing local nitrate washouts.",
      date: "May 22, 2026",
      author: "Dr. Ramesh Nair",
      role: "Chief Research Scientist",
      readTime: "4 min read",
      tags: ["NDVI Maps", "Soil Chemistry"],
      featured: false
    },
    {
      id: "drip-mc",
      title: "Evapotranspiration-Guided Variable Drip Solenoid Calibration",
      category: "Smart Irrigation",
      excerpt: "A guide on linking cellular soil moisture sensors directly to standard pressure-controlled solenoids to drop electricity overheads by 30%.",
      date: "May 15, 2026",
      author: "Er. Amit Patil",
      role: "Lead Automation Engineer",
      readTime: "5 min read",
      tags: ["Drip Irrigation", "Automation"],
      featured: false
    },
    {
      id: "credit",
      title: "Index-Based Agro-Credit Scoring: Rethinking Risk Models",
      category: "Agri Finance",
      excerpt: "Leveraging historical visual soil moisture ratios and continuous NPK indices to secure lower interest risk loans for FPOs.",
      date: "May 09, 2026",
      author: "Smt. Priya Sundaram",
      role: "Director of Agrifinance Linkage",
      readTime: "7 min read",
      tags: ["Microcredit", "NABARD Support"],
      featured: false
    },
    {
      id: "traceability",
      title: "Export Compliance: RFID Temperature reefers for Grapes Network",
      category: "Export & Trade",
      excerpt: "Enabling complete digital temperature history logs to satisfy strict fruit residue norms in Middle East & EU hubs.",
      date: "May 02, 2026",
      author: "CEO Office Research Team",
      role: "Supply Chain Analyst",
      readTime: "5 min read",
      tags: ["Logistics", "Cold Storage"],
      featured: false
    },
    {
      id: "drones",
      title: "Calibrating Low-Altitude Sprayer Drones for Orchard Droplet Deposition",
      category: "Drones & Automation",
      excerpt: "Understanding optimal drone velocity and turbine pressure variables to guarantee 98% droplet contact on citrus foliage surfaces.",
      date: "Apr 25, 2026",
      author: "Col. Rajesh Verma",
      role: "Director of Drone Operations",
      readTime: "4 min read",
      tags: ["Orchard Care", "Drones"],
      featured: false
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };

  // Filter logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  return (
    <div className={`space-y-20 pb-20 font-sans ${isDarkMode ? "text-slate-100" : "text-slate-800"}`} id="blog-page-wrap">
      
      {/* 1. HEADER */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
        <span className="text-emerald-500 font-extrabold text-xs uppercase tracking-widest block">
          Agronomy Intel & Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
          Tech Farming Research Bureau
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The official analytical knowledge hub of IGO Group. Deep-tech breakdowns concerning soil biochemistry, satellite vegetation indexes, and direct APMC market updates.
        </p>
      </section>

      {/* 2. SEARCH & CATEGORIES SELECTOR ACTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-slate-800/20">
          
          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto max-w-2xl pb-2 md:pb-0" id="category-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === cat 
                    ? "bg-emerald-600 text-white font-bold text-xs" 
                    : isDarkMode 
                      ? "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white" 
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-80 flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-slate-500" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research, authors, crops..."
              className="w-full bg-slate-950 border border-slate-800 text-slate-300 focus:border-emerald-600 outline-none rounded-xl pl-9 pr-4 py-2 text-xs"
            />
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC RESULTS LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className={`p-6 rounded-2xl border text-left flex flex-col justify-between hover:border-emerald-500/40 transition-all backdrop-blur-md ${
                  isDarkMode ? "bg-slate-900/40 border-slate-800/60" : "bg-white/40 border-slate-200/50 shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Category & timing */}
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-emerald-500 font-extrabold uppercase tracking-wider">{post.category}</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base md:text-lg text-white font-sans leading-snug hover:text-emerald-400 transition-colors" style={{ color: !isDarkMode ? "#0F172A" : "" }}>
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map(t => (
                      <span key={t} className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Author Card line */}
                <div className="border-t border-slate-850 pt-4 mt-6 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-[10px]">
                      {post.author.split(" ").slice(-1)[0][0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-[11px]" style={{ color: !isDarkMode ? "#1e293b" : "" }}>{post.author}</h4>
                      <p className="text-[9px] text-slate-500 font-medium">{post.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono font-medium">{post.date}</span>
                </div>

              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-950/20 rounded-2xl border border-slate-900 border-dashed">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-400">No matching research articles located.</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Adjust your keyword query filters above or select another category tab.</p>
          </div>
        )}
      </section>

      {/* 4. PREMIUM NEWSLETTER SIGNUP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-950 to-slate-900 border border-teal-500/20 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <span className="text-[10px] text-teal-400 font-black uppercase tracking-wider block">Official Publication Feed</span>
            <h2 className="text-2xl font-black text-white">Join Our Fortnightly Agronomic Research circular</h2>
            <p className="text-xs text-slate-300 leading-normal max-w-md">
              Receive advanced Sentinel-2 calibration charts, direct crop pricing trends, and new FPO program updates immediately on issue. Zero spam.
            </p>
          </div>

          <div className="w-full md:w-auto" id="newsletter-form-container">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs bg-teal-500/10 border border-teal-500/20 rounded-xl px-5 py-3 animate-fadeIn">
                <CheckCircle className="w-4 h-4" />
                <span>Namaste! Your email address has been white-listed. Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input 
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your professional email address..."
                  required
                  className="bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-teal-500 w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-teal-600 hover:bg-teal-500 transition-colors text-white text-xs font-bold uppercase rounded-xl cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" /> Subscribe Bulletin
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
