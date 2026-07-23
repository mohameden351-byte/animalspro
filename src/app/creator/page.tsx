"use client";

import Image from "next/image";
import { useAppContext } from "../../context/AppContext";

export default function CreatorPage() {
  const { t } = useAppContext();
  const tr = t.creator;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto w-full flex flex-col gap-12 items-center text-center">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <Image src="/hero_goat.png" alt="Mohameden 351" fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          {tr.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {tr.subtitle}
        </p>
      </div>

      <div className="glass-card p-8 rounded-3xl border border-white/10 text-start w-full flex flex-col gap-6 text-slate-700 dark:text-slate-300">
        <p>{tr.p1}</p>
        <p>{tr.p2}</p>
        <p>{tr.p3}</p>
      </div>
    </main>
  );
}
