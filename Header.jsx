import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {

  const [showAdmission, setShowAdmission] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const closeMenu = () => {
    setMobileMenu(false)
    setShowAdmission(false)
  }

  return (
    <>
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="top-bar">

        <div className="announcement">
          Latest Announcements: Admissions Open For Academic Session 2026-27
        </div>

        <div className="top-links">

          <a href="#contact">
            Students Corner
          </a>

          <a href="#contact">
            Alumni
          </a>

          <a href="#contact">
            Scholarships
          </a>

          <a href="#contact">
            FAQ
          </a>

        </div>

      </div>


      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header className="main-header">

        <div className="logo-area">

          <img
            src="https://ssacscjalgaon.ac.in/public/images/logo.png"
            alt="SSBT Logo"
          />

          <div className="logo-text">

            <h1>
              SHRAM SADHANA BOMBAY TRUST'S
              <br />
              ARTS, COMMERCE &amp; SCIENCE COLLEGE
            </h1>

            <p>
              Bambhori, Jalgaon (MS)
            </p>

          </div>

        </div>


        <div className="header-info">

          <div className="header-box">

            <span>
              CALL US TODAY!
            </span>

            <strong>
              0257-2258391 / 93 / 94
            </strong>

          </div>


          <div className="header-box">

            <span>
              ADDRESS!
            </span>

            <strong>
              Bambhori, Jalgaon (MS)
            </strong>

          </div>

        </div>

      </header>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">


        {/* MOBILE BUTTON */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >

          <i
            className={
              mobileMenu
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
          ></i>

        </button>


        {/* NAV LINKS */}

        <div
          className={`nav-links ${
            mobileMenu ? 'mobile-open' : ''
          }`}
        >


          {/* HOME */}

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>


          {/* ABOUT */}

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>


          {/* DEPARTMENTS */}

          <a
            href="#departments"
            onClick={closeMenu}
          >
            Departments
          </a>


          {/* =================================================
              ADMISSION MEGA MENU
          ================================================= */}

          <div className="admission-menu">


            <button
              className={`nav-link admission-button ${
                showAdmission
                  ? 'active-admission'
                  : ''
              }`}
              onClick={() =>
                setShowAdmission(!showAdmission)
              }
            >

              Admission

              <i className="fa-solid fa-chevron-down"></i>

            </button>


            {showAdmission && (

              <div className="admission-menu-wrapper">


                {/* =================================================
                    COLUMN 1 — ADMISSIONS
                ================================================= */}

                <div className="mega-column">

                  <h3>

                    <i className="fa-solid fa-graduation-cap"></i>

                    Admissions

                  </h3>


                  <Link
                    to="/bca"
                    onClick={closeMenu}
                  >
                    BCA
                  </Link>


                  <Link
                    to="/bba"
                    onClick={closeMenu}
                  >
                    BBA
                  </Link>


                  <Link
                    to="/bsc-computer-science"
                    onClick={closeMenu}
                  >
                    B.Sc. Computer Science
                  </Link>


                  <Link
                    to="/bsc-data-science"
                    onClick={closeMenu}
                  >
                    B.Sc. Data Science
                  </Link>

                </div>


                {/* =================================================
                    COLUMN 2 — ADMISSION INFORMATION
                ================================================= */}

                <div className="mega-column">

                  <h3>

                    <i className="fa-solid fa-file-lines"></i>

                    Admission Information

                  </h3>


                  <Link
                    to="/documents"
                    onClick={closeMenu}
                  >
                    Documents Required
                  </Link>


                  <Link
                    to="/fees"
                    onClick={closeMenu}
                  >
                    Fees Structure
                  </Link>


                  <Link
                    to="/scholarships"
                    onClick={closeMenu}
                  >
                    Scholarships
                  </Link>


                  <Link
                    to="/faqs"
                    onClick={closeMenu}
                  >
                    FAQs
                  </Link>


                  <Link
                    to="/admission-enquiry"
                    onClick={closeMenu}
                  >
                    Admission Enquiry
                  </Link>


                  <Link
                    to="/prospectus"
                    onClick={closeMenu}
                  >
                    College Prospectus 2026-27
                  </Link>

                </div>


                {/* =================================================
                    COLUMN 3 — HIGHLIGHTS
                ================================================= */}

                <div className="mega-column">

                  <h3>

                    <i className="fa-solid fa-star"></i>

                    Highlights

                  </h3>


                  {/* CAMPUS IMAGE */}

                  <img
                    className="highlight-image"
                    src="https://ssacscjalgaon.ac.in/public/images/slider/home2/slide1.jpg"
                    alt="SSBT College Campus"
                  />


                  <p className="highlight-text">

                    Explore the SSBT campus, academic
                    environment, student activities and
                    facilities.

                  </p>


                  {/* FACULTY */}

                  <Link
                    to="/faculty"
                    onClick={closeMenu}
                  >

                    <i className="fa-solid fa-chalkboard-user"></i>

                    Faculty

                  </Link>


                  {/* CAMPUS HIGHLIGHTS */}

                  <Link
                    to="/campus-highlights"
                    onClick={closeMenu}
                  >

                    <i className="fa-solid fa-building-columns"></i>

                    Campus Highlights

                  </Link>


                  {/* STUDENT ACTIVITIES */}

                  <Link
                    to="/student-activities"
                    onClick={closeMenu}
                  >

                    <i className="fa-solid fa-people-group"></i>

                    Student Activities

                  </Link>

                </div>

              </div>

            )}

          </div>


          {/* FACILITIES */}

          <a
            href="#campus"
            onClick={closeMenu}
          >
            Facilities
          </a>


          {/* LIFE @ SSBT */}

          <a
            href="#campus"
            onClick={closeMenu}
          >
            Life @ SSBT
          </a>


          {/* STUDENTS CORNER */}

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Students Corner
          </a>


          {/* PLACEMENTS */}

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Placements
          </a>


          {/* QUICK LINKS */}

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Quick Links
          </a>


          {/* CONTACT */}

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>


          {/* MOBILE APPLY */}

          <Link
            to="/admission-enquiry"
            className="mobile-apply-btn"
            onClick={closeMenu}
          >

            <i className="fa-solid fa-paper-plane"></i>

            Apply Now

          </Link>


        </div>


        {/* DESKTOP APPLY */}

        <Link
          to="/admission-enquiry"
          className="apply-btn desktop-apply-btn"
        >

          Apply Now

        </Link>

      </nav>

    </>
  )
}
