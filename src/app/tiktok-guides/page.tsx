"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

export default function TikTokGuides() {
  const { t, formatPrice } = useAppContext();
  const tr = t.guides;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto w-full flex flex-col gap-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          {tr.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          {tr.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-2">
            <BookOpen size={32} />
          </div>
          <h3 className="text-2xl font-bold">{tr.g1Title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{tr.g1Desc}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold">{formatPrice(19)}</span>
            <button className="bg-white/10 hover:bg-primary px-4 py-2 rounded-lg font-semibold transition-colors">
              {tr.g1Btn}
            </button>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
          <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-2">
            <BookOpen size={32} />
          </div>
          <h3 className="text-2xl font-bold">{tr.g2Title}</h3>
          <p className="text-slate-600 dark:text-slate-400">{tr.g2Desc}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold">{formatPrice(29)}</span>
            <button className="bg-white/10 hover:bg-accent px-4 py-2 rounded-lg font-semibold transition-colors">
              {tr.g2Btn}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
