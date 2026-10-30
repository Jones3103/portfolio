import React from 'react';

export default function About({ profile }) {
  return (
    <section id="about" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider block mb-2">
            // 01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Connecting Mechanical Systems with Intelligent Software
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p className="text-lg text-white font-medium">
              I am a second-year <strong>Mechanical Engineering student</strong> at <strong>Indra Ganesan College of Engineering (2025–2029)</strong> with an intense passion for modern robotics, intelligent machines, and sensor-driven hardware.
            </p>
            <p>
              Bridging the boundary between physical mechanics and code, I am skilled in <strong>Python, C, and SQL</strong>, and focus on applying algorithms to tangible real-world engineering challenges.
            </p>
            <p>
              I have practical familiarity working with embedded computing platforms including <strong>NVIDIA Jetson Nano, ESP32 microcontrollers, PCA9685 multi-channel servo drivers</strong>, and <strong>IMU (Inertial Measurement Unit) sensor integration</strong> for telemetry and motion control.
            </p>
            <p>
              My areas of active exploration include autonomous robotics, Artificial Intelligence, Machine Learning, Web Development, and modern App Development to create cohesive full-stack intelligent systems.
            </p>

            <div className="pt-2 flex flex-col gap-2 font-mono text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Bridging mechanical design with computational intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Embedded prototyping with microcontrollers &amp; sensor arrays</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Modern full-stack web, app &amp; IoT integration</span>
              </div>
            </div>
          </div>

          {/* 3 Stat Cards Requirement */}
          <div className="lg:col-span-5 space-y-4">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all group"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-3xl font-extrabold font-heading text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    {stat.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Verified
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{stat.title}</h3>
                <p className="text-xs text-slate-400 leading-normal">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

