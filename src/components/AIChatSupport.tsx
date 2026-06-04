import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Leaf, Sparkles, AlertCircle, Bot, CornerDownLeft } from "lucide-react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Namaste! I am your Tech Farming Expert AI assistant. How can I assist you with your crops, soil sensors, or market yields today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested pre-sets
  const suggestions = [
    "Recommend crops for low rainfall",
    "How does satellite NDVI analysis help?",
    "Best sensor moisture level for Tomato",
    "FPO benefits with IGO Group"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const handleSend = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMsg: Message = { role: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // send relevant past conversation history for contextual memory
        body: JSON.stringify({
          message: messageText,
          history: messages.slice(-10) // Limit to last 10 messages for token efficiency
        })
      });

      if (!response.ok) {
        throw new Error("Advisory service currently offline.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I encountered a transient network connection issue. However, as an offline agronomist benchmark: please ensure your farm is registered and that soil nitrogen remains above 120 ppm for grain development."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="ai-chat-support-container">
      {/* Floating launcher trigger */}
      <motion.button
        id="ai-chatbot-launch-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl cursor-pointer"
        aria-label="Toggle Agronomist AI"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 block w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-emerald-600 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="absolute bottom-16 right-0 w-[420px] max-w-[calc(100vw-2rem)] h-[580px] bg-slate-900/95 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-3xl flex flex-col overflow-hidden text-slate-100"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-950 to-emerald-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-800/50 border border-emerald-500/30">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
                    Live Agronomist AI
                    <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                      3.5 Flash
                    </span>
                  </h3>
                  <p className="text-[10px] text-emerald-300">IGO Expert Advisory Systems</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed border ${
                      msg.role === "user"
                        ? "bg-emerald-600 text-white border-emerald-500 rounded-br-none"
                        : "bg-slate-800/60 text-slate-200 border-slate-700/50 rounded-bl-none"
                    }`}
                  >
                    {/* Render message simply parsing markdown lists and bold entries */}
                    <div className="space-y-1">
                      {msg.text.split("\n").map((line, lIdx) => {
                        const isBullet = line.trim().startsWith("-") || line.trim().startsWith("*");
                        const cleanLine = isBullet ? line.replace(/^[\s-*]+/, "") : line;
                        
                        // Bold parsing
                        const boldRegex = /\*\*(.*?)\*\*/g;
                        const parts = [];
                        let tempLine = cleanLine;
                        let match;
                        let lastIndex = 0;

                        while ((match = boldRegex.exec(cleanLine)) !== null) {
                          parts.push(tempLine.substring(lastIndex, match.index));
                          parts.push(<strong key={match.index} className="text-white font-semibold">{match[1]}</strong>);
                          lastIndex = boldRegex.lastIndex;
                        }
                        parts.push(tempLine.substring(lastIndex));

                        if (isBullet) {
                          return (
                            <div key={lIdx} className="flex gap-2 pl-2">
                              <span className="text-emerald-400 mt-1">•</span>
                              <span>{parts.length > 0 ? parts : cleanLine}</span>
                            </div>
                          );
                        }

                        // Headers representation
                        if (line.trim().startsWith("###")) {
                          return (
                            <h4 key={lIdx} className="font-bold text-sm text-emerald-400 mt-2 mb-1">
                              {line.replace("###", "").trim()}
                            </h4>
                          );
                        }

                        return <p key={lIdx}>{parts.length > 0 ? parts : cleanLine}</p>;
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/60 border border-slate-700/50 rounded-xl rounded-bl-none px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                    <span>Analyzing crop telemetry & weather profiles...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-2 border-t border-slate-800/50 bg-slate-900/30">
                <p className="text-[10px] text-slate-400 font-medium mb-1.5 uppercase tracking-wide">
                  Suggest Agritech Topics:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(s)}
                      className="text-[10px] text-slate-300 bg-slate-800 hover:bg-emerald-950 hover:text-emerald-400 border border-slate-700/50 hover:border-emerald-500/30 rounded-lg px-2 py-1 text-left transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Ask agronomy AI (e.g. soil health, wheat rust)..."
                className="flex-1 bg-slate-900 border border-slate-800 focus:border-emerald-600 focus:outline-none rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white disabled:text-slate-500 rounded-xl transition-all cursor-pointer flex items-center justify-center"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            
            {/* Attribution */}
            <div className="p-2 text-center text-[9px] text-slate-500 border-t border-slate-900 bg-slate-950 flex items-center justify-center gap-1">
              <AlertCircle className="w-2.5 h-2.5 text-slate-600" />
              <span>Certified under Dr. John Yesudhas Agronomy Standards. Seek local field testing before high fertigation.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
