import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

interface AppRoutesProps {
  onPageChange: (page: string) => void;
  isDarkMode: boolean;
  selectedLang: string;
}

export function AppRoutes({ onPageChange, isDarkMode, selectedLang }: AppRoutesProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home onPageChange={onPageChange} isDarkMode={isDarkMode} selectedLang={selectedLang} />}
      />
      <Route
        path="/services"
        element={<Services onPageChange={onPageChange} isDarkMode={isDarkMode} />}
      />
      <Route path="/technology" element={<Technology isDarkMode={isDarkMode} />} />
      <Route
        path="/community"
        element={<Community isDarkMode={isDarkMode} onPageChange={onPageChange} />}
      />
      <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
      <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
      <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
