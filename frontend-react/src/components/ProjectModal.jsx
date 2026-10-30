import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mt-1.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-white/5">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-1.5">System Overview</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{project.fullDesc}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2">Architecture &amp; Features</h4>
            <ul className="space-y-1.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-cyan-400">▹</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950 text-cyan-300 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-950/60 flex items-center justify-end gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold hover:bg-cyan-300"
          >
            View on GitHub
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

