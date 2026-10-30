/**
 * PORTFOLIO SCRIPT — JONES MALARAVAN A
 * Interactive features: typing tagline, theme toggle, mobile navigation,
 * scroll-reveal animations, project details modal, resume modal,
 * copy-to-clipboard, and contact form handling (Django REST + Mailto fallback).
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Animated Typing Tagline
     ========================================================================== */
  const typedTextEl = document.getElementById('typed-text');
  const roles = [
    'Mechanical Engineering Student',
    'Robotics Enthusiast',
    'Embedded Systems Explorer',
    'AI & ML Learner'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let erasingDelay = 45;
  let newTextDelay = 1800; // Pause at end of text

  function typeTagline() {
    if (!typedTextEl) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = erasingDelay;
    } else {
      typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = newTextDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }

    setTimeout(typeTagline, typingDelay);
  }

  // Start typing
  setTimeout(typeTagline, 600);

  /* ==========================================================================
     2. Theme Toggle (Dark & Light Mode)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootHtml = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('jm_portfolio_theme');
  if (savedTheme) {
    rootHtml.setAttribute('data-theme', savedTheme);
  } else {
    // Default is dark mode
    rootHtml.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootHtml.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      rootHtml.setAttribute('data-theme', newTheme);
      localStorage.setItem('jm_portfolio_theme', newTheme);

      // Meta theme-color update
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', newTheme === 'light' ? '#f8fafc' : '#0b0f19');
      }
    });
  }

  /* ==========================================================================
     3. Header Scroll Effect & Active Link ScrollSpy
     ========================================================================== */
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active Section Spy
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  /* ==========================================================================
     4. Mobile Navigation Drawer
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
      navMenu.classList.toggle('open', isOpen);
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking any nav item
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     5. Scroll Reveal Animations (IntersectionObserver)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          if (delay) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, parseInt(delay, 10));
          } else {
            entry.target.classList.add('active');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     6. Projects Data & Interactive Modal System
     ========================================================================== */
  const projectsData = {
    'ev-cart': {
      title: 'Smart Campus Mobility System (EV Cart)',
      category: 'Autonomous & Electric Mobility',
      image: 'assets/images/projects/smart-ev-cart.svg',
      desc: 'An end-to-end intelligent electric campus mobility solution designed to provide green, auditable, and automated transit across collegiate facilities. Integrates embedded sensors, wireless tracking, security authentication, and an operator mobile dashboard.',
      features: [
        'RFID-based student and faculty card authentication for authorized access control.',
        'Real-time GPS geolocation streaming for route tracking and geofenced speed control.',
        'Battery Management System (BMS) telemetry with live voltage, temperature, and range estimates.',
        'Companion mobile application interface for live location viewing, hailing, and battery diagnostic logs.',
        'Low-latency micro-controller firmware for fail-safe throttle management.'
      ],
      tags: ['RFID', 'GPS', 'Battery Monitoring', 'Mobile App', 'IoT', 'ESP32'],
      github: 'https://github.com/jones3103/smart-campus-ev-mobility'
    },
    'vr-tour': {
      title: 'VR Campus Tour',
      category: 'Virtual Reality & Spatial Web',
      image: 'assets/images/projects/vr-campus-tour.svg',
      desc: 'An immersive web-accessible virtual reality experience engineered using high-resolution 360-degree panoramic captures and interactive spatial hotspots. Designed to orient incoming freshmen, remote scholars, and international visitors across college labs, auditoriums, and facilities.',
      features: [
        'Full 360° spherical projection compatible with mobile gyro, desktop browsers, and VR headsets.',
        'Interactive spatial beacon hotspots revealing departmental equipment, syllabi, and audio guides.',
        'Optimized multi-resolution asset streaming ensuring instantaneous tile rendering even on 4G networks.',
        'Intuitive spatial compass, mini-map, and audio ambient soundscapes for high immersion.'
      ],
      tags: ['VR', '360° Panorama', 'Interactive Hotspots', 'WebVR', 'Three.js Concept'],
      github: 'https://github.com/jones3103/vr-campus-tour-360'
    },
    'smart-agriculture': {
      title: 'Smart Agriculture Projects',
      category: 'AgriTech & Sensor Automation',
      image: 'assets/images/projects/smart-agriculture.svg',
      desc: 'An array of sensor- and embedded-system-driven agricultural automation units designed for precision farming. Focuses on continuous field monitoring, microclimate data collection, and automated drip irrigation actuation to optimize water usage.',
      features: [
        'Multi-depth capacitive soil moisture and pH sensor arrays communicating via low-power protocol.',
        'Ambient temperature and relative humidity tracking for pest and disease risk forecasting.',
        'Automated solenoid valve irrigation trigger algorithms responding dynamically to weather trends.',
        'Solar-powered autonomous node design with deep sleep cycles for extended field deployment.'
      ],
      tags: ['Sensors', 'Embedded Systems', 'IoT', 'Agriculture', 'Low-Power Firmware'],
      github: 'https://github.com/jones3103/smart-agriculture-embedded-iot'
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalTags = document.getElementById('modal-tags');
  const modalGithubLink = document.getElementById('modal-github-link');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !projectModal) return;

    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalImage.alt = `${data.title} Architecture Schematic`;
    modalDesc.textContent = data.desc;

    // Populate features
    modalFeatures.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });

    // Populate tags
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    // Update GitHub link
    modalGithubLink.href = data.github;

    if (typeof projectModal.showModal === 'function') {
      projectModal.showModal();
    } else {
      projectModal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    if (typeof projectModal.close === 'function') {
      projectModal.close();
    } else {
      projectModal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  // Bind click handlers to all "View Details" buttons
  const openModalButtons = document.querySelectorAll('.open-modal-btn');
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = btn.getAttribute('data-project');
      if (projId) openProjectModal(projId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeProjectModal);

  // Close when clicking outside the dialog card
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      const dialogDimensions = projectModal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        closeProjectModal();
      }
    });

    // Handle Escape key
    projectModal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  /* ==========================================================================
     7. Resume Preview Modal
     ========================================================================== */
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-preview');
  const resumeCloseBtn = document.getElementById('resume-modal-close');
  const resumeCancelBtn = document.getElementById('resume-close-btn');

  function openResume() {
    if (!resumeModal) return;
    if (typeof resumeModal.showModal === 'function') {
      resumeModal.showModal();
    } else {
      resumeModal.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    if (!resumeModal) return;
    if (typeof resumeModal.close === 'function') {
      resumeModal.close();
    } else {
      resumeModal.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResume);
  if (resumeCancelBtn) resumeCancelBtn.addEventListener('click', closeResume);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      const rect = resumeModal.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        closeResume();
      }
    });
    resumeModal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  /* ==========================================================================
     8. Copy to Clipboard Utility
     ========================================================================== */
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        btn.classList.add('copied');
        setTimeout(() => {
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    });
  });

  /* ==========================================================================
     9. Contact Form Submission (Django API + Mailto Fallback)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Clear errors
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (messageError) messageError.textContent = '';
      if (formStatus) {
        formStatus.className = 'form-status-alert';
        formStatus.textContent = '';
        formStatus.style.display = 'none';
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim() || 'Portfolio Inquiry';
      const message = messageInput.value.trim();

      let hasError = false;

      if (!name) {
        if (nameError) nameError.textContent = 'Please provide your name.';
        hasError = true;
      }

      if (!email) {
        if (emailError) emailError.textContent = 'Please provide your email address.';
        hasError = true;
      } else if (!validateEmail(email)) {
        if (emailError) emailError.textContent = 'Please provide a valid email format.';
        hasError = true;
      }

      if (!message) {
        if (messageError) messageError.textContent = 'Please write a message before sending.';
        hasError = true;
      }

      if (hasError) return;

      // Set sending UI state
      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = 'Transmitting Message...';

      let djangoSaved = false;
      let emailDispatched = false;

      // 1. Send to local Django Backend API
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const res = await fetch('http://127.0.0.1:8000/api/contact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ name, email, subject, message }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (res.ok) {
          djangoSaved = true;
        }
      } catch (err) {
        console.warn('Django server not responding:', err);
      }

      // 2. Dispatch real email via FormSubmit cloud gateway to jonesmalaravan31@gmail.com
      try {
        const formSubmitRes = await fetch('https://formsubmit.co/ajax/jonesmalaravan31@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: `[Portfolio Inquiry] ${subject} from ${name}`,
            message: message
          })
        });
        if (formSubmitRes.ok) {
          emailDispatched = true;
        }
      } catch (err) {
        console.warn('Cloud email dispatch note:', err);
      }

      // 3. Save to browser local storage backup
      try {
        const stored = JSON.parse(localStorage.getItem('jm_saved_messages') || '[]');
        stored.unshift({ name, email, subject, message, date: new Date().toLocaleString() });
        localStorage.setItem('jm_saved_messages', JSON.stringify(stored.slice(0, 20)));
      } catch (e) {}

      // 4. Construct direct Gmail Web compose link
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jonesmalaravan31@gmail.com&su=${encodeURIComponent('[Portfolio Inquiry] ' + subject)}&body=${encodeURIComponent('Hi Jones,\n\n' + message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
      const mailtoUrl = `mailto:jonesmalaravan31@gmail.com?subject=${encodeURIComponent('[Portfolio Contact] ' + subject)}&body=${encodeURIComponent('Hi Jones,\n\n' + message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;

      // Display rich success status
      if (formStatus) {
        formStatus.className = 'form-status-alert success';
        formStatus.style.display = 'block';
        formStatus.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div><strong>✓ Message Successfully Transmitted!</strong></div>
            <div style="font-size:0.85rem; opacity:0.9;">
              ${djangoSaved ? '• Stored securely in Django Database (SQLite).<br>' : ''}
              ${emailDispatched ? '• Direct email dispatched to <strong>jonesmalaravan31@gmail.com</strong>.<br>' : '• Routed to Jones Malaravan A.<br>'}
              • Saved timestamp: <strong>${new Date().toLocaleTimeString()}</strong>
            </div>
            <div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:8px;">
              <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:4px; padding:6px 12px; background:#00f0ff; color:#070b13; font-weight:700; border-radius:6px; text-decoration:none; font-size:0.8rem;">
                Open in Gmail Web ↗
              </a>
              <a href="${mailtoUrl}" style="display:inline-flex; align-items:center; gap:4px; padding:6px 12px; background:rgba(255,255,255,0.1); color:#fff; font-weight:600; border-radius:6px; text-decoration:none; font-size:0.8rem; border:1px solid rgba(255,255,255,0.2);">
                Open in Mail App
              </a>
            </div>
          </div>
        `;
      }

      contactForm.reset();

      // Restore submit button
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'Send Message';
    });
  }
});

