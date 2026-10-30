import React from 'react';

export default function Projects({ projects, onOpenProject }) {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider block mb-2">
            // 03. FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Engineering Projects &amp; Prototypes
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Real-world applications connecting mechanical design, embedded sensors, and software systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all flex flex-col group"
            >
              {/* Media image */}
              <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400">
                  {proj.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {proj.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenProject(proj)}
                    className="flex-1 py-2 px-3 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold hover:bg-cyan-300 transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3 rounded-lg bg-slate-950 border border-white/10 text-slate-300 text-xs font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-1.5"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

