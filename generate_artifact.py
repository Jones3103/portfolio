import base64
import os

profile_img_path = r'C:\Users\USER-3\Desktop\jones\assets\images\profile.jpg'
with open(profile_img_path, 'rb') as f:
    photo_b64 = base64.b64encode(f.read()).decode('utf-8')

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    @keyframes pulse-cyan {{
      0%, 100% {{ box-shadow: 0 0 15px rgba(0, 240, 255, 0.4); }}
      50% {{ box-shadow: 0 0 25px rgba(0, 240, 255, 0.8); }}
    }}
    .glow-cyan {{ animation: pulse-cyan 3s infinite ease-in-out; }}
  </style>
</head>
<body class="bg-transparent text-[var(--foreground)] antialiased p-3 font-sans">
  <div class="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 shadow-2xl max-w-4xl mx-auto backdrop-blur-md">
    
    <!-- Top Header Bar -->
    <div class="flex flex-wrap items-center justify-between pb-4 border-b border-[var(--border)] gap-3">
      <div class="flex items-center gap-2">
        <span class="font-mono font-bold text-lg text-cyan-400">&lt;JM /&gt;</span>
        <span class="font-bold text-base text-[var(--foreground)]">Jones Malaravan A</span>
        <span class="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">Portfolio Live</span>
      </div>
      <div class="flex items-center gap-2">
        <a href="http://localhost:8080/" target="_blank" class="px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all">
          <span>Open Full Site (localhost:8080)</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>

    <!-- Navigation Pills -->
    <div class="flex flex-wrap gap-2 py-4 border-b border-[var(--border)] text-xs font-semibold" id="tab-nav">
      <button onclick="showTab('hero')" id="btn-hero" class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold">Hero</button>
      <button onclick="showTab('about')" id="btn-about" class="px-3 py-1 rounded-full hover:bg-[var(--content)] text-[var(--muted-foreground)]">About</button>
      <button onclick="showTab('skills')" id="btn-skills" class="px-3 py-1 rounded-full hover:bg-[var(--content)] text-[var(--muted-foreground)]">Skills</button>
      <button onclick="showTab('projects')" id="btn-projects" class="px-3 py-1 rounded-full hover:bg-[var(--content)] text-[var(--muted-foreground)]">Projects (3)</button>
      <button onclick="showTab('education')" id="btn-education" class="px-3 py-1 rounded-full hover:bg-[var(--content)] text-[var(--muted-foreground)]">Education</button>
      <button onclick="showTab('contact')" id="btn-contact" class="px-3 py-1 rounded-full hover:bg-[var(--content)] text-[var(--muted-foreground)]">Contact</button>
    </div>

    <!-- Tab 1: Hero -->
    <div id="tab-hero" class="pt-5 space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-8 space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Second-Year Mechanical Engineering</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
            Hi, I'm <span class="text-cyan-400">Jones Malaravan A</span>
          </h1>
          <p class="font-mono text-sm text-cyan-300 font-medium">
            Passionate &bull; Mechanical Engineering &bull; Robotics &bull; Embedded Systems &bull; AI
          </p>
          <p class="text-xs text-[var(--muted-foreground)] leading-relaxed">
            Building practical projects that connect hardware, software, and intelligent systems. Indra Ganesan College of Engineering (2025–2029).
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <a href="http://localhost:8080/#projects" target="_blank" class="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-all">
              View Projects
            </a>
            <a href="http://localhost:8080/assets/resume.pdf" download="Jones_Malaravan_Resume.pdf" class="px-4 py-2 rounded-lg bg-[var(--content)] border border-[var(--border)] text-[var(--foreground)] font-semibold text-xs hover:border-cyan-400 transition-all">
              Download Resume (PDF)
            </a>
          </div>
        </div>
        <div class="md:col-span-4 flex justify-center">
          <div class="relative w-36 h-44 rounded-xl overflow-hidden border-2 border-cyan-400 glow-cyan shadow-xl">
            <img src="data:image/jpeg;base64,{photo_b64}" alt="Jones Malaravan A" class="w-full h-full object-cover object-top">
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 2: About -->
    <div id="tab-about" class="hidden pt-5 space-y-4">
      <div class="p-4 rounded-xl bg-[var(--content)] border border-[var(--border)] text-xs text-[var(--muted-foreground)] leading-relaxed space-y-2">
        <p class="text-sm text-[var(--foreground)] font-semibold">Mechanical Engineering Undergrad @ Indra Ganesan CE (2025–2029)</p>
        <p>Skilled in Python, C, and SQL, applying computational algorithms to mechanical systems. Experienced with Jetson Nano, ESP32, PCA9685 servo drivers, and IMU sensor integration.</p>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)] text-center">
          <p class="text-xl font-extrabold text-cyan-400">3+</p>
          <p class="text-xs font-bold text-[var(--foreground)]">Projects</p>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)] text-center">
          <p class="text-xl font-extrabold text-blue-400">3</p>
          <p class="text-xs font-bold text-[var(--foreground)]">Languages</p>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)] text-center">
          <p class="text-xl font-extrabold text-emerald-400">2</p>
          <p class="text-xs font-bold text-[var(--foreground)]">Embedded Platforms</p>
        </div>
      </div>
    </div>

    <!-- Tab 3: Skills -->
    <div id="tab-skills" class="hidden pt-5 space-y-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <p class="font-bold text-cyan-400 mb-1.5">Programming Languages</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Python</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">C</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">SQL</span>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <p class="font-bold text-blue-400 mb-1.5">Embedded &amp; Robotics</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Jetson Nano</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">ESP32</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">PCA9685</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">IMU Sensors</span>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <p class="font-bold text-emerald-400 mb-1.5">AI Development Tools</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Google Antigravity</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Claude</span>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <p class="font-bold text-purple-400 mb-1.5">Areas of Interest</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Robotics</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Artificial Intelligence</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Machine Learning</span>
            <span class="px-2 py-0.5 rounded bg-[var(--card)] border border-[var(--border)]">Web &amp; App Dev</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 4: Projects -->
    <div id="tab-projects" class="hidden pt-5 space-y-3">
      <div class="space-y-3 text-xs">
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)] flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <span class="text-[10px] font-mono text-cyan-400 uppercase">IoT &bull; Mobility</span>
            <h4 class="text-sm font-bold text-[var(--foreground)]">Smart Campus Mobility System (EV Cart)</h4>
            <p class="text-[var(--muted-foreground)] mt-1">EV cart transportation integrating RFID access, GPS tracking, and battery monitoring with a mobile app.</p>
          </div>
          <a href="http://localhost:8080/#projects" target="_blank" class="self-start px-3 py-1.5 rounded bg-cyan-400/20 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-black transition-all">Details &rarr;</a>
        </div>

        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)] flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <span class="text-[10px] font-mono text-blue-400 uppercase">VR &bull; Immersive</span>
            <h4 class="text-sm font-bold text-[var(--foreground)]">VR Campus Tour</h4>
            <p class="text-[var(--muted-foreground)] mt-1">360-degree panoramic virtual campus walkthrough with interactive hotspots.</p>
          </div>
          <a href="http://localhost:8080/#projects" target="_blank" class="self-start px-3 py-1.5 rounded bg-blue-400/20 text-blue-400 font-bold hover:bg-blue-400 hover:text-black transition-all">Details &rarr;</a>
        </div>

        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)] flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <span class="text-[10px] font-mono text-emerald-400 uppercase">AgriTech &bull; Sensors</span>
            <h4 class="text-sm font-bold text-[var(--foreground)]">Smart Agriculture Projects</h4>
            <p class="text-[var(--muted-foreground)] mt-1">Multi-depth soil sensor and embedded monitoring for smart farming and drip automation.</p>
          </div>
          <a href="http://localhost:8080/#projects" target="_blank" class="self-start px-3 py-1.5 rounded bg-emerald-400/20 text-emerald-400 font-bold hover:bg-emerald-400 hover:text-black transition-all">Details &rarr;</a>
        </div>
      </div>
    </div>

    <!-- Tab 5: Education -->
    <div id="tab-education" class="hidden pt-5 space-y-3 text-xs">
      <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
        <span class="text-[10px] font-mono text-cyan-400">2025 – 2029 (Ongoing)</span>
        <h4 class="text-sm font-bold text-[var(--foreground)]">B.E. – Mechanical Engineering</h4>
        <p class="text-blue-400 font-semibold">Indra Ganesan College of Engineering</p>
      </div>
      <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
        <span class="text-[10px] font-mono text-slate-400">2023 – 2025</span>
        <h4 class="text-sm font-bold text-[var(--foreground)]">Higher Secondary (Computer Science Group) &bull; 70%</h4>
        <p class="text-slate-400">Sacred Heart Higher Secondary School</p>
      </div>
    </div>

    <!-- Tab 6: Contact -->
    <div id="tab-contact" class="hidden pt-5 space-y-3 text-xs">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <span class="text-[10px] text-[var(--muted-foreground)] uppercase block">Email</span>
          <a href="mailto:jonesmalaravan31@gmail.com" class="text-cyan-400 font-semibold">jonesmalaravan31@gmail.com</a>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <span class="text-[10px] text-[var(--muted-foreground)] uppercase block">Phone</span>
          <a href="tel:8015910534" class="text-[var(--foreground)] font-semibold">+91 8015910534</a>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <span class="text-[10px] text-[var(--muted-foreground)] uppercase block">LinkedIn</span>
          <a href="https://www.linkedin.com/in/jones-malaravan-a-387161448" target="_blank" class="text-blue-400 font-semibold">jones-malaravan-a-387161448</a>
        </div>
        <div class="p-3 rounded-xl bg-[var(--content)] border border-[var(--border)]">
          <span class="text-[10px] text-[var(--muted-foreground)] uppercase block">GitHub</span>
          <a href="https://github.com/jones3103" target="_blank" class="text-emerald-400 font-semibold">github.com/jones3103</a>
        </div>
      </div>
    </div>

    <!-- Direct Server Link Footer -->
    <div class="mt-5 pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between text-xs text-[var(--muted-foreground)]">
      <span>Local Server: <strong class="text-emerald-400">http://localhost:8080/</strong></span>
      <span>&copy; 2026 Jones Malaravan A</span>
    </div>

  </div>

  <script>
    function showTab(tabName) {{
      const tabs = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      tabs.forEach(t => {{
        const el = document.getElementById('tab-' + t);
        const btn = document.getElementById('btn-' + t);
        if (t === tabName) {{
          el.classList.remove('hidden');
          btn.className = 'px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold';
        }} else {{
          el.classList.add('hidden');
          btn.className = 'px-3 py-1 rounded-full hover:bg-[var(--content)] text-[var(--muted-foreground)]';
        }}
      }});
    }}
  </script>
</body>
</html>"""

out_file = r'C:\Users\USER-3\.gemini\antigravity\brain\d1a71bbd-69f8-4b11-869b-7c3c3033d6d7\portfolio-preview.html'
with open(out_file, 'w', encoding='utf-8') as f:
    f.write(html)
print('Successfully generated artifact at', out_file)

