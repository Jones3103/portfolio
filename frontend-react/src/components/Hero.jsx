import React, { useState, useEffect } from 'react';

export default function Hero({ profile }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = profile?.roles || [
    'Mechanical Engineering Student',
    'Robotics Enthusiast',
    'Embedded Systems Explorer',
    'AI & ML Learner'
  ];

  useEffect(() => {
    const current = roles[currentRoleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(current.substring(0, typedText.length - 1));
        if (typedText.length <= 1) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(current.substring(0, typedText.length + 1));
        if (typedText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      }, 85);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="min-h-[calc(100vh-72px)] flex items-center py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Col */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Second-Year Mechanical Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500 drop-shadow-sm">
              {profile.name}
            </span>
          </h1>

          {/* Typing Tagline */}
          <div className="font-mono text-lg sm:text-xl font-semibold text-cyan-400 flex items-center justify-center lg:justify-start min-h-[2rem]">
            <span className="text-slate-400 mr-2">Passionate</span>
            <span>{typedText}</span>
            <span className="animate-pulse font-bold ml-0.5">|</span>
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {profile.tagline}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="/assets/resume.pdf"
              download="Jones_Malaravan_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-white font-semibold text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-semibold text-sm hover:text-cyan-400 hover:border-cyan-400 transition-all transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-xs font-mono text-slate-400">
            <span className="uppercase tracking-wider">Connect:</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all">
              GH
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all">
              IN
            </a>
            <a href={`mailto:${profile.email}`} className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all">
              @
            </a>
          </div>
        </div>

        {/* Right Col: Cyber Photo Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <div className="relative p-3 bg-slate-900/80 border border-cyan-500/30 rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.2)]">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Jones Malaravan A"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

