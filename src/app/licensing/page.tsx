"use client";

import { useAppContext } from "../../context/AppContext";

export default function LicensingInfo() {
  const { t } = useAppContext();
  const tr = t.licensing;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto w-full flex flex-col gap-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
        {tr.title}
      </h1>

      <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-6 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s1h}</h2>
          <p>{tr.s1p}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s2h}</h2>
          <p>{tr.s2p}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s3h}</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {tr.s3list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s4h}</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {tr.s4list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s5h}</h2>
          <p>{tr.s5p}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s6h}</h2>
          <p>{tr.s6p}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s7h}</h2>
          <p>{tr.s7p}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s8h}</h2>
          <p>{tr.s8p}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{tr.s9h}</h2>
          <p>{tr.s9p}</p>
        </section>
      </div>
    </main>
  );
}
