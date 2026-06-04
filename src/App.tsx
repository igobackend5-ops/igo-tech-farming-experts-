import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AIChatSupport from "./components/AIChatSupport";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [selectedLang, setSelectedLang] = useState<string>("en");

  // Sync stateful body class lists for correct ambient styling offsets
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.backgroundColor = "#0f172a"; // Match the Sleek Interface dark background
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.backgroundColor = "#f8fafc"; // Match the light background
    }
  }, [isDarkMode]);

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home 
            onPageChange={handlePageChange} 
            isDarkMode={isDarkMode} 
            selectedLang={selectedLang} 
          />
        );
      case "services":
        return (
          <Services 
            onPageChange={handlePageChange} 
            isDarkMode={isDarkMode} 
          />
        );
      case "technology":
        return <Technology isDarkMode={isDarkMode} />;
      case "community":
        return (
          <Community 
            isDarkMode={isDarkMode} 
            onPageChange={handlePageChange} 
          />
        );
      case "blog":
        return <Blog isDarkMode={isDarkMode} />;
      case "about":
        return <About isDarkMode={isDarkMode} />;
      case "contact":
        return <Contact isDarkMode={isDarkMode} />;
      default:
        return (
          <Home 
            onPageChange={handlePageChange} 
            isDarkMode={isDarkMode} 
            selectedLang={selectedLang} 
          />
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? "bg-[#0f172a] text-[#f8fafc]" : "bg-[#f8fafc] text-slate-900"
    }`} id="applet-core-shell">
      
      {/* Sleek Theme background glows */}
      {isDarkMode && <div className="bg-glow top-[-10%] right-[-15%] pointer-events-none select-none" />}
      {isDarkMode && <div className="bg-glow bottom-[-10%] left-[-15%] pointer-events-none select-none" />}
      
      {/* Mega Navigation Header */}
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        selectedLang={selectedLang}
        onLangChange={setSelectedLang}
      />

      {/* Main Agronomic Central Hub */}
      <main className="flex-grow relative z-10" id="core-content-portal">
        {renderActivePage()}
      </main>

      {/* Floating AI Support Widget - Always tracking across views */}
      <AIChatSupport />

      {/* Premium Corporate Footer */}
      <Footer 
        onPageChange={handlePageChange}
        isDarkMode={isDarkMode}
      />

    </div>
  );
}
