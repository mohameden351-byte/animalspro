"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function DigitalAssets() {
  const { t, formatPrice } = useAppContext();
  const tr = t.digitalAssets;
  const [activeFilter, setActiveFilter] = useState(tr.filters[0]);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col gap-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          {tr.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          {tr.subtitle}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tr.filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              activeFilter === filter
                ? "bg-primary border-primary text-white"
                : "glass border-black/10 dark:border-white/10 hover:border-primary/50 text-slate-700 dark:text-slate-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <motion.div whileHover={{ y: -8 }} className="glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-primary/50">
          <div className="relative h-64 overflow-hidden p-2">
            <Image src="/tech_cat.png" alt="Tech Cat Art" fill className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{tr.p1Title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{tr.p1Desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-extrabold text-primary">{formatPrice(2)}</span>
              <motion.a
                href="https://mohameden.gumroad.com/l/podcastcat"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/10 dark:bg-white/10 hover:bg-primary hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
              >
                {t.products.buyNow} <ShoppingBag size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div whileHover={{ y: -8 }} className="glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-accent/50">
          <div className="relative h-64 overflow-hidden p-2">
            <Image src="/goat_footage.jpg" alt="Goat Footage Asset" fill className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{tr.p2Title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{tr.p2Desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-extrabold text-accent">{formatPrice(10)}</span>
              <motion.a
                href="https://mohameden.gumroad.com/l/GoatsandSheep"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/10 dark:bg-white/10 hover:bg-accent hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
              >
                {t.products.buyNow} <ShoppingBag size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Product 3 */}
        <motion.div whileHover={{ y: -8 }} className="glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-secondary/50">
          <div className="relative h-64 overflow-hidden p-2">
            <div className="absolute inset-0 bg-slate-800 rounded-t-2xl flex items-center justify-center text-white/50 z-0">
              Placeholder Image
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{tr.p3Title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{tr.p3Desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-extrabold text-secondary">{formatPrice(5)}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/10 dark:bg-white/10 hover:bg-secondary hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
              >
                {t.products.buyNow} <ShoppingBag size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
