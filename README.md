# Jones Malaravan A — Personal Engineering Portfolio 🚀

A modern, high-performance personal portfolio website engineered for **Jones Malaravan A**, a second-year Mechanical Engineering student passionate about robotics, embedded systems, and artificial intelligence.

![Jones Malaravan A Portfolio](assets/images/profile.jpg)

---

## ⚡ Tech Stack & Architecture

This repository offers a **dual-mode architecture**:
1. **Production Static Portfolio (Root: `index.html`, `style.css`, `script.js`, `assets/`)**:
   - Zero-dependency, ultra-fast, and 100% ready for instant free deployment on **GitHub Pages**, **Netlify**, or **Vercel**.
   - Futuristic dark cyberpunk theme with an interactive **Light/Dark mode switcher** (accented with electric cyan `#00f0ff`).
   - Smooth-scrolling, mobile navigation drawer, interactive project detail modals, accessible resume viewer, typing hero effect, and copy-to-clipboard utilities.
   - Dual-mode contact form: communicates asynchronously with the **Django REST API** if online, or seamlessly launches the client mail client via pre-filled `mailto:` if hosted statically.

2. **Backend: Django REST API (`backend/`)**:
   - Built with **Django 5.2** & **django-cors-headers**.
   - SQLite database storing contact messages, projects, skills, education, and achievements.
   - Automated data seeding management command (`python manage.py seed_data`).
   - Django Admin dashboard (`/admin/`) with credentials pre-configured for message tracking.

3. **Frontend React: Vite + React 18 + Tailwind CSS (`frontend-react/`)**:
   - Component-driven modular React architecture (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Education`, `Achievements`, `Contact`, `Footer`, `ProjectModal`).
   - Tailwind styling with custom neon glow utilities and automatic fallback to embedded data if the Django backend is offline.

---

## 📁 Project Directory Structure

```text
jones/
├── index.html                     # Main responsive portfolio HTML5 file
├── style.css                      # Futuristic dark/light theme CSS & animations
├── script.js                      # Vanilla JS (typing tagline, theme toggle, modals, API/mailto)
├── README.md                      # Comprehensive deployment & editing guide
├── assets/
│   ├── favicon.svg                # Robotic tech hexagon favicon
│   ├── resume.pdf                 # Downloadable PDF resume
│   └── images/
│       ├── profile.jpg            # Professional portrait photo (suit & tie)
│       ├── resume-preview.jpg     # High-res resume document preview
│       └── projects/
│           ├── smart-ev-cart.svg        # EV Mobility System schematic illustration
│           ├── vr-campus-tour.svg       # 360° VR Campus Tour illustration
│           └── smart-agriculture.svg    # AgriTech IoT telemetry illustration
├── backend/                       # Django REST API Backend
│   ├── manage.py
│   ├── create_admin.py            # Superuser creation script
│   ├── db.sqlite3                 # Migrated & seeded database
│   ├── portfolio_backend/         # Django project settings & URL routing
│   └── api/                       # API application (models, views, admin, seed_data)
└── frontend-react/                # React 18 + Vite + Tailwind CSS version
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── index.html
    ├── public/assets/             # Static assets mirrored for React
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── components/            # Reusable React components
        └── data/portfolioData.js  # Static fallback data matching Django API
```

---

## 🚀 Quick Start Guide

### 1. View the Website Locally Right Now
You can view the portfolio in any browser immediately:
- Simply double-click `index.html` to open it in Chrome, Edge, or Firefox.
- Or use Python's built-in web server:
  ```powershell
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your web browser.

---

### 2. Run the Django Backend API

1. Navigate to the `backend` folder:
   ```powershell
   cd backend
   ```
2. Run database migrations (already pre-migrated, but safe to run):
   ```powershell
   python manage.py migrate
   ```
3. Populate/re-seed portfolio data:
   ```powershell
   python manage.py seed_data
   ```
4. Start the Django development server:
   ```powershell
   python manage.py runserver
   ```
5. Access:
   - **API Data**: `http://127.0.0.1:8000/api/portfolio-data/`
   - **API Contact Endpoint**: `http://127.0.0.1:8000/api/contact/`
   - **Admin Portal**: `http://127.0.0.1:8000/admin/`
     - **Username**: `admin`
     - **Password**: `adminpassword123` *(change this inside production)*

---

### 3. Run the React + Vite Frontend (When Node.js is installed)

1. Navigate to the `frontend-react` folder:
   ```powershell
   cd frontend-react
   ```
2. Install npm dependencies:
   ```powershell
   npm install
   ```
3. Start the Vite development server:
   ```powershell
   npm run dev
   ```
4. Open the displayed local URL (typically `http://localhost:5173`).

---

## 🌐 How to Deploy for FREE on GitHub Pages

GitHub Pages hosts static websites directly from your repository for free.

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com) with your account (`jones3103`).
2. Click **New Repository**.
3. Name the repository:
   - Option A (User site): `jones3103.github.io`
   - Option B (Project site): `portfolio`

### Step 2: Push Your Code to GitHub
Open PowerShell in `c:\Users\USER-3\Desktop\jones`:
```powershell
git init
git add .
git commit -m "Initial commit: Jones Malaravan A engineering portfolio"
git branch -M main
git remote add origin https://github.com/jones3103/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (gear icon) > **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Wait 1–2 minutes. Your portfolio will be live at:
   `https://jones3103.github.io/` (or `https://jones3103.github.io/portfolio/`).

---

## ☁️ How to Deploy on Netlify (Alternative 1-Click Method)

1. Sign up for a free account at [Netlify](https://www.netlify.com/).
2. Drag and drop the `jones` folder into the Netlify dashboard under **Sites** > **Deploy manually**.
3. Your site goes live instantly with a free SSL certificate!
4. You can also link your GitHub repository so Netlify auto-deploys on every git push.

---

## ✏️ How to Edit Content & Replace Images

### 1. Replace Profile Photo
- Save your new portrait photo as a `.jpg` file.
- Overwrite `assets/images/profile.jpg`.
- Recommended dimensions: 800×1000px (4:5 aspect ratio).

### 2. Replace Resume
- Save your updated resume as `resume.pdf`.
- Overwrite `assets/resume.pdf`.
- If you'd like a visual preview in the "Quick View Resume" modal, replace `assets/images/resume-preview.jpg`.

### 3. Replace Project Images & GitHub Links
- **Project Images**:
  - Replace the SVGs in `assets/images/projects/` with your own `.png`, `.jpg`, or `.svg` screenshots or CAD renders.
- **GitHub Links**:
  - Open `script.js` and edit the `projectsData` object around line 150:
    ```javascript
    github: 'https://github.com/jones3103/your-actual-repo-name'
    ```
  - Open `index.html` and update the `href` attribute on the GitHub buttons in the `#projects` section.

### 4. Edit Text & Information
- Open `index.html`:
  - Search for any heading or paragraph (e.g., college name, contact details, skill tags) and edit the text directly. All sections are labeled with clear comments (`<!-- HERO SECTION -->`, `<!-- ABOUT SECTION -->`, etc.).

---

## 🛡️ Accessibility & Performance Highlights
- Meets WCAG AA contrast standards in both dark and light modes.
- Keyboard accessible modal dialogs with focus management and ESC key handling.
- Screen-reader friendly skip link (`#main-content`).
- SEO tags, Open Graph meta tags, and high-DPI custom vector icons.
- Respects `prefers-reduced-motion` for users who prefer minimal animation.

---

&copy; 2026 **Jones Malaravan A**. Indra Ganesan College of Engineering.

