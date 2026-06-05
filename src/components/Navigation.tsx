import React, { useState } from "react";
import { Leaf, Menu, X, Globe, Moon, Sun, ArrowRight, MessageCircle } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  selectedLang: string;
  onLangChange: (lang: string) => void;
}

export default function Navigation({
  currentPage,
  onPageChange,
  isDarkMode,
  onToggleDarkMode,
  selectedLang,
  onLangChange,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "technology", label: "Technology" },
    { id: "community", label: "Farmers Community" },
    { id: "blog", label: "Insights" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी (Hindi)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "ka", name: "ಕನ್ನಡ (Kannada)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "mr", name: "मराठी (Marathi)" },
  ];

  const currentLangLabel = languages.find((l) => l.code === selectedLang)?.name || "English";

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`sticky top-0 z-40 transition-all border-b md:py-1 ${
      isDarkMode 
        ? "bg-[#0f172a]/50 border-slate-800/50 text-[#f8fafc] backdrop-blur-xl" 
        : "bg-white/50 border-slate-200/50 text-slate-800 backdrop-blur-xl shadow-sm"
    }`} id="main-navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo & Tagline */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none group" 
            onClick={() => handleNavClick("home")}
            id="brand-logo-container"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Leaf className="w-5.5 h-0.5 text-white stroke-[2.5]" style={{ height: "24px", width: "24px" }} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-sans font-black tracking-tight text-lg md:text-xl">
                  Tech Farming <span className="text-emerald-500">Expert</span>
                </span>
              </div>
              <span className="text-[9px] text-emerald-600 block tracking-wider uppercase font-semibold mt-0.5">
                IGO Group of Companies
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" id="desktop-nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  currentPage === item.id
                    ? "text-emerald-500 bg-emerald-500/10 font-bold"
                    : isDarkMode 
                      ? "text-slate-300 hover:text-white hover:bg-slate-900" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Settings & Controls */}
          <div className="hidden md:flex items-center gap-3" id="navigation-controls">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border cursor-pointer transition-all ${
                  isDarkMode 
                    ? "border-slate-800 hover:bg-slate-900 bg-slate-950 text-slate-300"
                    : "border-slate-200 hover:bg-slate-50 bg-white text-slate-700"
                }`}
              >
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>{currentLangLabel.split(" ")[0]}</span>
              </button>

              {isLangDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-xl border shadow-xl z-50 overflow-hidden ${
                  isDarkMode 
                    ? "bg-slate-900 border-slate-800 text-slate-200" 
                    : "bg-white border-slate-100 text-slate-700"
                }`}>
                  <div className="px-3 py-2 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-800/20">
                    Choose Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLangChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs transition-colors cursor-pointer ${
                        selectedLang === lang.code
                          ? "bg-emerald-500/10 text-emerald-400 font-bold"
                          : isDarkMode
                            ? "hover:bg-slate-800"
                            : "hover:bg-slate-50"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                isDarkMode 
                  ? "border-slate-800 bg-slate-950 hover:bg-slate-900 text-amber-400" 
                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
              }`}
              title="Toggle theme mode"
              aria-label="Toggle theme mode"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Premium CTA Button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="px-4 py-2 font-bold text-xs btn-primary-sleek rounded-lg transition-transform hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
            >
              Register Farm <ArrowRight className="w-3.5 h-3.5" />
            </button>
            
          </div>

          {/* Mobile Actions: Hamburguer and Mode toggle */}
          <div className="flex lg:hidden items-center gap-2">
            
            {/* Quick Lang Select for Mobile */}
            <button
              onClick={() => {
                const nextLangs = ["en", "hi", "mr", "ta"];
                const nextIdx = (nextLangs.indexOf(selectedLang) + 1) % nextLangs.length;
                onLangChange(nextLangs[nextIdx]);
              }}
              className={`p-2 rounded-lg border text-xs font-semibold uppercase ${
                isDarkMode ? "border-slate-800 bg-slate-950 text-emerald-400" : "border-slate-200 bg-white text-emerald-600"
              }`}
            >
              {selectedLang}
            </button>

            <button
              onClick={onToggleDarkMode}
              className={`p-2 rounded-lg border ${
                isDarkMode ? "border-slate-800 text-amber-300 bg-slate-950" : "border-slate-200 text-slate-600 bg-white"
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDarkMode ? "border-slate-800 text-white" : "border-slate-200 text-slate-800"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t px-4 py-4 space-y-3 shadow-xl backdrop-blur-xl ${
          isDarkMode ? "bg-slate-950/60 border-slate-900/60" : "bg-white/60 border-slate-200/50"
        }`} id="mobile-navigation-panel">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  currentPage === item.id
                    ? "text-emerald-500 bg-emerald-500/10"
                    : isDarkMode ? "text-slate-300 hover:bg-slate-900" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/20 space-y-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-2.5 font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-center flex items-center justify-center gap-1.5"
            >
              Contact Support Office <ArrowRight className="w-3.5 h-3.5" />
            </button>
            
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-xs border border-emerald-500/40 rounded-lg text-emerald-500 text-center flex items-center justify-center gap-1.5 font-bold hover:bg-emerald-500/5 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500/15" />
              WhatsApp Instant Assist
            </a>
          </div>

          <div className="text-[10px] text-center text-slate-500 font-semibold uppercase tracking-wider pt-2 border-t border-slate-800/10">
            IGO Group • Chairman Dr. John Yesudhas
          </div>
        </div>
      )}
    </header>
  );
}
