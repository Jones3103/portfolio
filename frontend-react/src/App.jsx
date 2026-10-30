import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [data, setData] = useState(portfolioData);
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState('dark');

  // Attempt to fetch dynamic data from Django REST backend
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/portfolio-data/')
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'success') {
          // If backend returns populated data, merge it smoothly
          if (json.projects && json.projects.length > 0) {
            setData((prev) => ({
              ...prev,
              projects: json.projects.map((p) => ({
                id: p.slug,
                title: p.title,
                category: p.category,
                image: p.image_url,
                shortDesc: p.short_desc,
                fullDesc: p.full_desc,
                features: p.features || [],
                tags: p.tech_tags || [],
                github: p.github_url
              }))
            }));
          }
        }
      })
      .catch(() => {
        // Runs fine with default static portfolioData
      });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col relative selection:bg-cyan-400 selection:text-black">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid-overlay pointer-events-none opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero profile={data.profile} />
          <About profile={data.profile} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} onOpenProject={setActiveProject} />
          <Education education={data.education} />
          <Achievements achievements={data.achievements} />
          <Contact profile={data.profile} />
        </main>
        <Footer profile={data.profile} />
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

