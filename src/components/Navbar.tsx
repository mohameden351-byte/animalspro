"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon, Globe, DollarSign } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { isDark, setIsDark, lang, setLang, currency, setCurrency, t } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "glass border-white/10 py-3 shadow-lg bg-black/10 backdrop-blur-md"
          : "bg-transparent border-transparent py-5"
      } px-6 flex justify-between items-center`}
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Mohameden 351
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-primary transition-colors">{t.nav.home}</Link>
        <Link href="/digital-assets" className="hover:text-primary transition-colors">{t.nav.assets}</Link>
        <Link href="/pod-assets" className="hover:text-primary transition-colors">{t.nav.pod}</Link>
        <Link href="/tiktok-guides" className="hover:text-primary transition-colors">{t.nav.guides}</Link>
        <Link href="/creator" className="hover:text-primary transition-colors">{t.nav.creator}</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Controls */}
        <div className="hidden md:flex items-center gap-3 bg-black/10 dark:bg-white/5 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 backdrop-blur-md">
          <button
            onClick={() => setIsDark(!isDark)}
            className="hover:text-primary transition-colors p-1"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <div className="w-px h-4 bg-slate-400/30"></div>
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hover:text-primary transition-colors p-1 flex items-center gap-1 font-bold text-xs"
          >
            <Globe size={18} />
            {lang.toUpperCase()}
          </button>
          <div className="w-px h-4 bg-slate-400/30"></div>
          <button
            onClick={() => setCurrency(currency === "USD" ? "Local" : "USD")}
            className="hover:text-primary transition-colors p-1 flex items-center gap-1 font-bold text-xs"
          >
            <DollarSign size={18} />
            {currency}
          </button>
        </div>

        <motion.a
          href="https://www.teepublic.com/user/cute-kitty-store/t-shirts"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-semibold shadow-[0_0_15px_rgba(34,197,94,0.4)] block text-center"
        >
          {t.nav.shop}
        </motion.a>
      </div>
    </motion.nav>
  );
}
