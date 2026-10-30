import React, { useState } from 'react';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedKey, setCopiedKey] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    let djangoSaved = false;
    let emailDispatched = false;

    // 1. Try local Django API
    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) djangoSaved = true;
    } catch (err) {}

    // 2. Try FormSubmit email delivery
    try {
      const fsRes = await fetch('https://formsubmit.co/ajax/jonesmalaravan31@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || 'Inquiry'} from ${formData.name}`,
          message: formData.message
        })
      });
      if (fsRes.ok) emailDispatched = true;
    } catch (err) {}

    setStatus({
      type: 'success',
      message: `✓ Message transmitted! ${djangoSaved ? 'Saved in database. ' : ''}${emailDispatched ? 'Dispatched to jonesmalaravan31@gmail.com.' : ''}`
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-cyan-400 text-sm font-semibold tracking-wider block mb-2">
            // 06. GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Let's Connect &amp; Collaborate
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info cards */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-900/80 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Information</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Feel free to reach out directly via email, phone, or connect with me on LinkedIn and GitHub.
            </p>

            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-slate-200 hover:text-cyan-400 transition-colors">
                    {profile.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] text-cyan-400 hover:border-cyan-400"
                >
                  {copiedKey === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Phone</span>
                  <a href={`tel:${profile.phone}`} className="text-slate-200 hover:text-cyan-400 transition-colors">
                    +91 {profile.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(profile.phone, 'phone')}
                  className="px-2 py-1 rounded bg-slate-900 border border-white/10 text-[10px] text-cyan-400 hover:border-cyan-400"
                >
                  {copiedKey === 'phone' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5">
                <span className="text-[10px] text-slate-500 uppercase block">LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-400 truncate block">
                  jones-malaravan-a-387161448
                </a>
              </div>

              {/* GitHub */}
              <div className="p-3 rounded-xl bg-slate-950 border border-white/5">
                <span className="text-[10px] text-slate-500 uppercase block">GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-400 truncate block">
                  github.com/jones3103
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900/80 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Robotics Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we collaborate on engineering projects?"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-50"
              >
                {submitting ? 'Transmitting...' : 'Send Message'}
              </button>

              {status.message && (
                <div className={`p-3 rounded-xl text-xs font-semibold ${
                  status.type === 'success' 
                    ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-red-950/40 text-red-400 border border-red-500/30'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

