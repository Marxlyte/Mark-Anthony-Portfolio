import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles, HelpCircle } from "lucide-react";
// @ts-ignore
import profilePic from "../assets/images/regenerated_image_1781734262918.png";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

const STATIC_COMMUNICATION_CHANNELS = {
  phone: "2347011117712",
  whatsappBase: "https://wa.me/2347011117712",
};

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "Hello! 👋 I am Mark-Anthony's Growth Assistant. How can we help you scale your business today?",
      time: "Just now",
    }
  ]);
  const [customText, setCustomText] = useState("");
  const [showNotification, setShowNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    { label: "🚀 Growth Consultation", text: "Hi Mark-Anthony, I'd like to request a 1-on-1 Growth Consultation to scale my business." },
    { label: "📊 Marketing Funnels Audit", text: "Hi Mark-Anthony, I would love a performance audit on our current digital marketing funnels." },
    { label: "🌐 Website & CMS Strategy", text: "Hi Mark-Anthony, I'm looking to optimize our website/CMS platform for better performance." },
    { label: "💼 Professional Synergy", text: "Hi Mark-Anthony, I'm interested in discussing a remote or contract-based growth project." }
  ];

  useEffect(() => {
    // If user opens the chat, dismiss the floating alert badge
    if (isOpen) {
      setShowNotification(false);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsgId = `user-${Date.now()}`;
    const newMsg: Message = {
      id: userMsgId,
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);

    // Simulate bot replying and redirecting
    setTimeout(() => {
      const botMsgId = `bot-${Date.now()}`;
      const botResponse: Message = {
        id: botMsgId,
        sender: "bot",
        text: "Outstanding choice! I am transferring you directly to Mark-Anthony's personal WhatsApp channel to complete your consultation...",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);

      // Open WhatsApp Link with the pre-filled custom text
      setTimeout(() => {
        const encodedText = encodeURIComponent(textToSend);
        window.open(`${STATIC_COMMUNICATION_CHANNELS.whatsappBase}?text=${encodedText}`, "_blank");
      }, 1000);
    }, 850);

    setCustomText("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* 1. Floating Action Bubble */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer bg-emerald-500 hover:bg-emerald-600`}
          aria-label="Contact Mark-Anthony on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-[spin_0.2s_linear_1]" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>

        {/* Pulsing Active indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 text-[9px] text-white font-bold items-center justify-center">
              1
            </span>
          </span>
        )}

        {/* Interactive Speech Notification popup */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              transition={{ delay: 2.5 }}
              onClick={() => setIsOpen(true)}
              className="absolute bottom-16 right-0 w-64 p-3.5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-xl rounded-2xl cursor-pointer hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-colors"
            >
              <div className="flex items-start gap-2.5">
                <img
                  src={profilePic}
                  alt="Uba Chinaza Mark-Anthony profile"
                  className="w-8 h-8 rounded-full object-cover border border-emerald-500"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                    Mark-Anthony
                  </span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    💬 "Need to generate hot leads? Ask me anything directly!"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. Interactive Chat Box Frame */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-3xl overflow-hidden"
          >
            {/* Header branding backdrop */}
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 pointer-events-none" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <img
                    src={profilePic}
                    alt="Uba Chinaza Mark-Anthony profile avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900 animate-pulse"></div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-xs leading-none tracking-tight">
                    Uba Chinaza Mark-Anthony
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-400 mt-1 font-semibold">
                    Growth Strategist (Online)
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors relative z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable message viewport */}
            <div className="h-[280px] overflow-y-auto px-4 py-4 space-y-4">
              
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                        isBot
                          ? "bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 text-slate-800 dark:text-slate-200 rounded-tl-none"
                          : "bg-emerald-600 text-white rounded-tr-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className={`block text-[8px] text-right mt-1.5 opacity-60 ${
                        isBot ? "text-slate-400" : "text-emerald-100"
                      }`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Interactive suggestion row */}
            <div className="px-4 py-2 border-t border-slate-200/50 dark:border-slate-850 bg-white/70 dark:bg-slate-900/40">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block text-left mb-1.5">
                Suggested Actions
              </span>
              <div className="flex flex-col gap-1.5">
                {quickOptions.map((opt, id) => (
                  <button
                    key={id}
                    onClick={() => handleSendMessage(opt.text)}
                    className="w-full text-left bg-slate-100/80 dark:bg-slate-800/60 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/20 dark:hover:text-emerald-400 border border-slate-200/40 dark:border-slate-800 px-3 py-1.5 rounded-xl text-[11px] font-medium text-slate-600 dark:text-slate-350 transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom message composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(customText);
              }}
              className="p-3 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2"
            >
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type custom growth message..."
                className="flex-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800 focus:border-emerald-500/50 px-4 py-2 text-xs rounded-xl focus:outline-none dark:text-white"
              />
              <button
                type="submit"
                disabled={!customText.trim()}
                className={`p-2 rounded-xl transition-all ${
                  customText.trim()
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer"
                    : "bg-slate-105 dark:bg-slate-800 text-slate-400"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Tiny footer caption */}
            <div className="py-2 bg-slate-100 dark:bg-slate-950/80 text-center text-[9px] text-slate-400 dark:text-slate-500 font-mono flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              <span>Direct connection encrypted via WhatsApp API</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
