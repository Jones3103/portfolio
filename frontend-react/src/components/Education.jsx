import React from 'react';

export default function Education({ education }) {
  return (
    <section id="education" className="py-20 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider block mb-2">
            // 04. ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Education &amp; Academic Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 sm:pl-10 space-y-10 before:content-[''] before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-transparent">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Node */}
              <div className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-5 h-5 rounded-full bg-[#070b13] border-2 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.6)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-cyan-400 font-semibold">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                <h4 className="text-sm font-medium text-blue-400 mb-3">{item.institution}</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

