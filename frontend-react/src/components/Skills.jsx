import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider block mb-2">
            // 02. TECHNICAL SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Engineering Toolset &amp; Domain Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                    {cat.items.length} Tech
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-center justify-between hover:border-cyan-500/40 hover:translate-x-1 transition-all"
                  >
                    <span className="text-xs font-semibold text-white">{item.name}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{item.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

