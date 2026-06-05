import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AIChatSupport from "../components/AIChatSupport";
import { AppRoutes } from "../router";

interface AppSettingsContextValue {
  isDarkMode: boolean;
  selectedLang: string;
  setSelectedLang: (value: string) => void;
}

const AppSettingsContext = createContext<AppSettingsContextValue | undefined>(undefined);

export function useAppSettings() {
  const context = useContext(AppSettingsContext);
  if (!context) {
    throw new Error("useAppSettings must be used inside AppProviders");
  }
  return context;
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDarkMode = true;
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.backgroundColor = "transparent";
    root.style.backgroundImage = "none";
    body.style.backgroundColor = "transparent";
    body.style.backgroundImage = "none";
  }, []);

  const currentPage = location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  const handlePageChange = (pageId: string) => {
    const nextPath = pageId === "home" ? "/" : `/${pageId}`;
    navigate(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const value = useMemo(
    () => ({ isDarkMode, selectedLang, setSelectedLang }),
    [selectedLang]
  );

  return (
    <AppSettingsContext.Provider value={value}>
      <div
        className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative overflow-visible bg-transparent ${
          isDarkMode ? "text-[#f8fafc]" : "text-slate-900"
        }`}
        id="applet-core-shell"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 h-full w-full object-cover pointer-events-none z-0"
          style={{ filter: 'brightness(0.85) saturate(1.15)' }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 z-0 bg-black/20" />
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
        {isDarkMode && (
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="bg-glow top-[-10%] right-[-15%] absolute" />
            <div className="bg-glow bottom-[-10%] left-[-15%] absolute" />
          </div>
        )}

        <Navigation
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isDarkMode={isDarkMode}
          selectedLang={selectedLang}
          onLangChange={setSelectedLang}
        />

        <main className="flex-grow relative z-10 w-full min-w-0 overflow-visible" id="core-content-portal">
          <AppRoutes onPageChange={handlePageChange} isDarkMode={isDarkMode} selectedLang={selectedLang} />
        </main>

        <AIChatSupport />

        <Footer onPageChange={handlePageChange} isDarkMode={isDarkMode} />
      </div>
    </AppSettingsContext.Provider>
  );
}

export default function AppProviders() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
