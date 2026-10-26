# SSBT's Arts, Commerce & Science College, Bambhori, Jalgaon

> **Official Static Website Project**  
> Affiliated to Kavayitri Bahinabai Chaudhari North Maharashtra University (KBCNMU), Jalgaon  
> NAAC Accredited 'B' Grade | Managed by Shram Sadhana Bombay Trust (SSBT)

---

## 🌐 Live Website

The live website is hosted via GitHub Pages at:  
👉 **[https://devaredhiraj14-cyber.github.io/college-website/](https://devaredhiraj14-cyber.github.io/college-website/)**

---

## 📑 Connected Pages Overview

All pages are interlinked through a unified header, sticky navigation bar, and comprehensive footer:

| Page | File | Description |
|------|------|-------------|
| **Home** | [`index.html`](index.html) | Main college landing page featuring hero banner, trust overview, key statistics, academic stream highlights, campus life, notices, and direct admission actions. |
| **About Us** | [`about.html`](about.html) | History of Shram Sadhana Bombay Trust (founded 1983), Vision, Mission, Leadership messages, NAAC & KBCNMU affiliations, and campus facilities. |
| **Departments** | [`departments.html`](departments.html) | Academic departments directory with dynamic tabs for **BCA**, **BBA**, and **B.Sc. (Computer Science & Data Science)**, semester-wise syllabi, lab specifications, and faculty lists. |
| **Admissions** | [`admission.html`](admission.html) | Admissions 2026-27 portal with programme requirements, eligibility table, mandatory document checklist, MahaDBT scholarships, FAQ accordion, and interactive pre-registration form. |
| **Placements** | [`placement.html`](placement.html) | Training & Placement Cell featuring placement statistics (6.5 LPA highest package, 1000+ placed), recruiter showcase (TCS, Infosys, Wipro, Tech Mahindra), training modules, and coordinators. |
| **Student Corner** | [`student-corner.html`](student-corner.html) | Interactive student self-service portal with course filters (BCA, B.Sc, BBA, All), notices, exam form updates, syllabus downloads, timetable access, search overlay, and login modals. |
| **Contact Us** | [`contact.html`](contact.html) | Complete contact directory, official phone numbers, email addresses, office hours, travel guide, interactive enquiry form, and embedded Google Maps campus view. |

---

## 🛠️ Technology Stack

- **HTML5**: Semantic, accessible markup.
- **CSS3**: Custom responsive stylesheets (`css/style.css`, `assets/css/style.css`), CSS variables, grid, and flexbox.
- **JavaScript (Vanilla)**: Tab switching, mobile navigation drawer, interactive modals, form validation, and search filters (`js/script.js`, `assets/js/script.js`).
- **Icons & Fonts**: Google Fonts (*DM Sans*, *Playfair Display*), Bootstrap Icons, Font Awesome 6.
- **Hosting & CI/CD**: GitHub Pages deployed automatically via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 💻 Local Preview

To preview the website locally on your computer:
1. Double click [`index.html`](index.html) or open it in any modern browser (Chrome, Edge, Firefox).
2. Or run a simple local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 🚀 Deployment to GitHub Pages

The repository contains an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.  
Every push to the `main` branch automatically builds and publishes the latest website to GitHub Pages without any manual file moving or server management required.

---

&copy; 2026 SSBT's Arts, Commerce & Science College, Bambhori, Jalgaon. All rights reserved.
