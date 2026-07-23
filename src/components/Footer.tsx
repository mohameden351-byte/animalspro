"use client";

import Link from "next/link";
import { useAppContext } from "../context/AppContext";

export default function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-black/5 dark:bg-black/50 pt-16 pb-8 px-6 mt-auto relative z-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 inline-block">
            Mohameden 351
          </span>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm">
            {t.footer.desc}
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t.footer.links}</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><Link href="/digital-assets" className="hover:text-primary transition-colors">{t.nav.assets}</Link></li>
            <li><Link href="/pod-assets" className="hover:text-primary transition-colors">{t.nav.pod}</Link></li>
            <li><Link href="/tiktok-guides" className="hover:text-primary transition-colors">{t.nav.guides}</Link></li>
            <li><Link href="/creator" className="hover:text-primary transition-colors">{t.nav.creator}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">{t.footer.legal}</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><Link href="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
            <li><Link href="/licensing" className="hover:text-primary transition-colors">{t.footer.licensing}</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-500 text-sm border-t border-black/5 dark:border-white/5 pt-8">
        © {new Date().getFullYear()} Mohameden 351. {t.footer.rights}
      </div>
    </footer>
  );
}
