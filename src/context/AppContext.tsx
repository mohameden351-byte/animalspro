"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../locales/translations";

type Lang = "en" | "ar";
type Currency = "USD" | "Local";

interface AppContextType {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  lang: Lang;
  setLang: (val: Lang) => void;
  currency: Currency;
  setCurrency: (val: Currency) => void;
  t: typeof translations.en;
  formatPrice: (usdPrice: number) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLangState] = useState<Lang>("en");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [mounted, setMounted] = useState(false);

  // Read persisted preferences on first mount (client-side only)
  useEffect(() => {
    const savedLang = (localStorage.getItem("lang") as Lang) || "en";
    const savedDark = localStorage.getItem("isDark");
    if (savedLang) setLangState(savedLang);
    if (savedDark !== null) setIsDark(savedDark === "true");
    setMounted(true);
  }, []);

  // Persist dark mode
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("isDark", String(isDark));
  }, [isDark, mounted]);

  // Persist language and set direction
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const setLang = (val: Lang) => {
    setLangState(val);
  };

  const t = lang === "ar" ? translations.ar : translations.en;

  const formatPrice = (usdPrice: number) => {
    if (currency === "USD") return `$${usdPrice}`;
    return `~${usdPrice * 10} MAD`;
  };

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, currency, setCurrency, t, formatPrice }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
