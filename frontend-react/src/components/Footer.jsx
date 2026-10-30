import React from 'react';

export default function Footer({ profile }) {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#070b13]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <a href="#home" className="font-mono font-bold text-lg text-white">
            <span className="text-cyan-400">&lt;</span>JM<span className="text-cyan-400">/&gt;</span>
          </a>
          <p className="text-xs text-slate-400 mt-1">
            Connecting hardware, embedded sensors, and intelligent algorithms.
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-300 font-semibold">&copy; 2026 {profile.name}</p>
          <p className="text-[10px] text-slate-500">{profile.college} &bull; Mechanical Engineering</p>
        </div>

        <div>
          <a
            href="#home"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 inline-flex items-center justify-center transition-all"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

