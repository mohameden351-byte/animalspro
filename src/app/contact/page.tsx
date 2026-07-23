"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

export default function ContactPage() {
  const { t } = useAppContext();
  const tr = t.contact;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto w-full flex flex-col gap-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          {tr.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {tr.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info Panel */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-6 h-fit">
          <h2 className="text-2xl font-bold">{tr.getInTouch}</h2>

          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
            <Mail className="text-primary flex-shrink-0" />
            <span>{tr.email}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
            <MessageCircle className="text-accent flex-shrink-0" />
            <span>{tr.tiktok}</span>
          </div>

          <hr className="border-black/5 dark:border-white/10 my-2" />

          <h3 className="text-lg font-semibold mt-2">{tr.bizTitle}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{tr.bizDesc}</p>
        </div>

        {/* Contact Form */}
        <form className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">{tr.nameLabel}</label>
            <input
              type="text"
              id="name"
              placeholder={tr.namePlaceholder}
              className="w-full bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">{tr.emailLabel}</label>
            <input
              type="email"
              id="email"
              placeholder={tr.emailPlaceholder}
              className="w-full bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="subject">{tr.subjectLabel}</label>
            <input
              type="text"
              id="subject"
              placeholder={tr.subjectPlaceholder}
              className="w-full bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">{tr.messageLabel}</label>
            <textarea
              id="message"
              rows={5}
              placeholder={tr.messagePlaceholder}
              className="w-full bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-2 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
          >
            {tr.send}
          </motion.button>
        </form>
      </div>
    </main>
  );
}
