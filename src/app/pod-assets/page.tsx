"use client";

import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";

export default function PodAssets() {
  const { t, formatPrice } = useAppContext();
  const tr = t.podAssets;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col gap-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          {tr.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
          {tr.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* POD 1 */}
        <motion.div whileHover={{ y: -8 }} className="glass-card rounded-3xl overflow-hidden border border-white/10 p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-white/10">
            <span className="text-slate-500 font-bold text-center px-4">{tr.p1Placeholder}</span>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">{tr.p1Title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{tr.p1Desc}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-extrabold text-primary">{formatPrice(12)}</span>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2">
                {tr.buy}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* POD 2 */}
        <motion.div whileHover={{ y: -8 }} className="glass-card rounded-3xl overflow-hidden border border-white/10 p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center border border-white/10">
            <span className="text-slate-500 font-bold text-center px-4">{tr.p2Placeholder}</span>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold">{tr.p2Title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{tr.p2Desc}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-extrabold text-primary">{formatPrice(8)}</span>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2">
                {tr.buy}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
