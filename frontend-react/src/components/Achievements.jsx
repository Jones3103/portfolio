import React from 'react';

export default function Achievements({ achievements }) {
  return (
    <section id="achievements" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider block mb-2">
            // 05. HONORS &amp; BADGES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Certifications &amp; Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-4">
                  {ach.pill}
                </span>

                <h3 className="text-lg font-bold text-white mb-1">{ach.title}</h3>
                <h4 className="text-xs font-semibold text-cyan-400 mb-3">{ach.subtitle}</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{ach.desc}</p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified Recognition</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

