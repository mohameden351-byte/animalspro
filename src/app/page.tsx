"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ShoppingBag, X } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { lang, t, formatPrice } = useAppContext();
  const [showNotification, setShowNotification] = useState(false);

  // Simulated Live Sales Notification
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 15000); // Show every 15 seconds for demonstration
    return () => clearInterval(interval);
  }, []);

  const currText = t;

  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col gap-6 text-center lg:text-start z-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-primary/30 text-primary text-sm font-semibold mb-2 self-center lg:self-start w-fit">
            {currText.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            {currText.hero.title1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {currText.hero.title2}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {currText.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <motion.a
              href="#assets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
            >
              {currText.hero.btn1}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={lang === 'ar' ? 'rotate-180' : ''}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@mohameden351"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-slate-800 dark:text-white px-8 py-4 rounded-full font-bold text-lg border border-black/10 dark:border-white/20 text-center"
            >
              {currText.hero.btn2}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative z-10 w-full max-w-lg mx-auto"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden glass-card border border-white/10 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-2xl pointer-events-none" />
            <Image
              src="/hero_goat.png"
              alt="Cyberpunk Goat"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Digital Assets Grid */}
      <section id="assets" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{currText.products.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {currText.products.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden group border border-white/10 dark:hover:border-primary/50 hover:border-primary/50"
            >
              <div className="relative h-64 overflow-hidden p-2">
                <Image src="/tech_cat.png" alt="Tech Cat Art" fill className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold border border-white/10`}>
                  {currText.products.topSeller}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{lang === 'ar' ? 'قطة البودكاست الرائعة - 4K/HD' : 'Cool Podcast Cat - 4K/HD'}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{lang === 'ar' ? 'فن رقمي عالي الدقة ومفصل بشكل فائق، مثالي لعشاق التكنولوجيا وصناع المحتوى. يتضمن الملفات الأصلية.' : 'High-resolution, ultra-detailed digital art perfect for tech enthusiasts and creators. Includes raw files.'}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold text-primary">{formatPrice(2)}</span>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://mohameden.gumroad.com/l/podcastcat?_gl=1*hf5wmk*_ga*OTI1OTkxMTc2LjE3Nzg1NDEwNTA.*_ga_6LJN6D94N6*czE3Nzg3MDI0MTQkbzIkZzEkdDE3Nzg3MDI1MjQkajYwJGwwJGgwen.gumroad.cohttps://mohameden.gumroad.com/l/podcastcat?_gl=1*1qgkh17*_ga*OTI1OTkxMTc2LjE3Nzg1NDEwNTA.*_ga_6LJN6D94N6*czE3Nzg3MDI0MTQkbzIkZzEkdDE3Nzg3MDI0NjYkajgkbDAkaDA.m/l/CoolPodcastCat?_gl=1*483omm*_ga*OTI1OTkxMTc2LjE3Nzg1NDEwNTA.*_ga_6LJN6D94N6*czE3Nzg1NDEwNTAkbzEkZzEkdDE3Nzg1NDMzMTIkajU0JGwwJGgw"
                    className="bg-black/10 dark:bg-white/10 hover:bg-primary dark:hover:bg-primary hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
                  >
                    {currText.products.buyNow}
                    <ShoppingBag size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden group border border-white/10 dark:hover:border-accent/50 hover:border-accent/50"
            >
              <div className="relative h-64 overflow-hidden p-2">
                <Image src="/goat_footage.jpg" alt="Goat Footage Asset" fill className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{lang === 'ar' ? 'أصل لقطات الماعز المطلق' : 'ULTIMATE GOAT FOOTAGE ASSET'}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{lang === 'ar' ? 'مقاطع 4K أصلية - مثالية للأفلام الوثائقية والميمز. تنزيل فوري عبر جومرود.' : 'RAW 4K CLIPS - PERFECT FOR DOCS & MEMES. Instant download on Gumroad.'}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold text-accent">{formatPrice(10)}</span>
                  <motion.a
                    href="https://mohameden.gumroad.com/l/GoatsandSheep?_gl=1*zxrryc*_ga*Nzk4MjM2OTgxLjE3Nzg3ODg4Mzc.*_ga_6LJN6D94N6*czE3Nzg3ODg4MzckbzEkZzEkdDE3Nzg3ODkwNjgkajQyJGwwJGgw"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black/10 dark:bg-white/10 hover:bg-accent dark:hover:bg-accent hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2"
                  >
                    {currText.products.buyNow}
                    <ShoppingBag size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden group border border-white/10 dark:hover:border-secondary/50 hover:border-secondary/50"
            >
              <div className="relative h-64 bg-slate-200 dark:bg-slate-800 p-2 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
                <Image src="/cat_goat.png" alt="Cat and Goat" fill className="object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute top-4 ${lang === 'ar' ? 'left-4' : 'right-4'} bg-black/60 text-white backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold border border-white/10 z-10`}>
                  {currText.products.bundleDeals}
                </div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2">{lang === 'ar' ? 'فن القطط والأصدقاء' : 'Cute Kitty & Friends Art'}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{lang === 'ar' ? 'عمل فني رقمي ثلاثي الأبعاد حصري لقطة لطيفة وماعز. مثالي لمحبي الحيوانات الأليفة.' : 'Exclusive, adorable 3D digital artwork featuring a cute kitty and a goat. Perfect for animal lovers.'}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-extrabold text-secondary whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%]">{currText.products.specialPrice}</span>
                  <motion.a
                    href="https://www.teepublic.com/user/cute-kitty-store"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black/10 dark:bg-white/10 hover:bg-secondary dark:hover:bg-secondary hover:text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2 flex-shrink-0"
                  >
                    {currText.products.buyNow}
                    <ShoppingBag size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative z-10 bg-black/5 dark:bg-black/40 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{currText.proof.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                {currText.proof.desc}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="glass px-6 py-4 rounded-2xl flex flex-col">
                  <span className="text-4xl font-black text-slate-800 dark:text-white">10M+</span>
                  <span className="text-sm text-primary font-medium tracking-wider uppercase mt-1">{currText.proof.views}</span>
                </div>
                <div className="glass px-6 py-4 rounded-2xl flex flex-col">
                  <span className="text-4xl font-black text-slate-800 dark:text-white">50K+</span>
                  <span className="text-sm text-accent font-medium tracking-wider uppercase mt-1">{currText.proof.downloads}</span>
                </div>
                <div className="glass px-6 py-4 rounded-2xl flex flex-col">
                  <span className="text-4xl font-black text-slate-800 dark:text-white">4.9/5</span>
                  <span className="text-sm text-secondary font-medium tracking-wider uppercase mt-1">{currText.proof.rating}</span>
                </div>
              </div>
            </div>

            {/* Mock TikTok Embeds */}
            <div className="flex-1 w-full max-w-md mx-auto grid grid-cols-2 gap-4">
              <a href="https://www.tiktok.com/@mohameden351/video/7561076699094404363?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="block aspect-[9/16] bg-slate-200 dark:bg-slate-900 rounded-2xl border border-black/5 dark:border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <Image src="/hero_goat.png" alt="TikTok" fill className="object-cover opacity-60" />
                <div className="absolute bottom-4 left-4 z-20 text-white text-left">
                  <p className="font-bold text-sm">@mohameden351</p>
                  <p className="text-xs text-white/80">Viral Goat Edit 🐐🔥</p>
                </div>
              </a>
              <a href="https://www.tiktok.com/@mohameden351/video/7574035399409011979?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="block aspect-[9/16] bg-slate-200 dark:bg-slate-900 rounded-2xl border border-black/5 dark:border-white/10 relative overflow-hidden group translate-y-8">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <Image src="/tech_cat.png" alt="TikTok" fill className="object-cover opacity-60" />
                <div className="absolute bottom-4 left-4 z-20 text-white text-left">
                  <p className="font-bold text-sm">@mohameden351</p>
                  <p className="text-xs text-white/80">Tech Cat Process 💻</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-12 text-center border-t border-l border-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{currText.newsletter.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
            {currText.newsletter.desc}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={currText.newsletter.placeholder}
              className="flex-1 bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 outline-none focus:border-primary/50 transition-colors dark:text-white placeholder:text-slate-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-slate-800 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] whitespace-nowrap"
            >
              {currText.newsletter.subscribe}
            </motion.button>
          </form>
          <p className="text-xs text-slate-500 mt-4">{currText.newsletter.spam}</p>
        </div>
      </section>



      {/* Floating Action Button (FAB) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center`}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Live Sales Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: lang === 'ar' ? 20 : -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-6 ${lang === 'ar' ? 'right-6' : 'left-6'} z-50 glass-card p-4 rounded-2xl flex items-center gap-4 border border-primary/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]`}
          >
            <div className="bg-primary/20 p-2 rounded-full">
              <ShoppingBag className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                {lang === 'ar' ? 'شخص ما من السعودية' : 'Someone from USA'}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {lang === 'ar' ? 'اشترى للتو أصول الماعز' : 'Just purchased Goat Assets'}
              </p>
            </div>
            <button onClick={() => setShowNotification(false)} className="ml-2 text-slate-500 hover:text-slate-800 dark:hover:text-white">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
