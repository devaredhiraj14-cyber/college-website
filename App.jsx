import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Programs from './components/Programs'
import Documents from './components/Documents'
import CampusHighlights from './components/CampusHighlights'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import AdmissionPage from './pages/AdmissionPage'

import './styles/global.css'
import './styles/admission.css'


/* =====================================================
   HOME PAGE
===================================================== */

function HomePage() {

  return (
    <>
      <Header />

      <Hero />


      <div className="placement-layout">


        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <aside className="placement-sidebar">


          {/* ADMISSIONS */}

          <div className="sidebar-title">

            <i className="fa-solid fa-graduation-cap"></i>

            Admissions

          </div>


          <Link to="/bca">

            <i className="fa-solid fa-angle-right"></i>

            BCA

          </Link>


          <Link to="/bba">

            <i className="fa-solid fa-angle-right"></i>

            BBA

          </Link>


          <Link to="/bsc-computer-science">

            <i className="fa-solid fa-angle-right"></i>

            B.Sc. Computer Science

          </Link>


          <Link to="/bsc-data-science">

            <i className="fa-solid fa-angle-right"></i>

            B.Sc. Data Science

          </Link>



          {/* ADMISSION INFORMATION */}

          <div className="sidebar-title sidebar-space">

            <i className="fa-solid fa-file-lines"></i>

            Admission Information

          </div>


          <Link to="/documents">

            <i className="fa-solid fa-angle-right"></i>

            Documents Required

          </Link>


          <Link to="/fees">

            <i className="fa-solid fa-angle-right"></i>

            Fees Structure

          </Link>


          <Link to="/scholarships">

            <i className="fa-solid fa-angle-right"></i>

            Scholarships

          </Link>


          <Link to="/faqs">

            <i className="fa-solid fa-angle-right"></i>

            FAQs

          </Link>


          <Link to="/admission-enquiry">

            <i className="fa-solid fa-angle-right"></i>

            Admission Enquiry

          </Link>


          <Link to="/prospectus">

            <i className="fa-solid fa-angle-right"></i>

            College Prospectus 2026-27

          </Link>



          {/* HIGHLIGHTS */}

          <div className="sidebar-title sidebar-space">

            <i className="fa-solid fa-star"></i>

            Highlights

          </div>


          <Link to="/faculty">

            <i className="fa-solid fa-chalkboard-user"></i>

            Faculty

          </Link>


          <Link to="/campus-highlights">

            <i className="fa-solid fa-building-columns"></i>

            Campus Highlights

          </Link>


          <Link to="/student-activities">

            <i className="fa-solid fa-people-group"></i>

            Student Activities

          </Link>


        </aside>



        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <main className="placement-content">


          {/* WELCOME */}

          <section className="placement-welcome">


            <span className="content-tag">

              ADMISSIONS 2026-27

            </span>


            <h1>

              Shape Your Future With SSBT

            </h1>


            <p>

              Begin your journey towards quality education,
              practical learning and a successful career at
              SSBT Arts, Commerce &amp; Science College.

            </p>


            <div className="content-buttons">


              <a
                href="#programs"
                className="content-btn red"
              >

                <i className="fa-solid fa-graduation-cap"></i>

                Explore Programmes

              </a>


              <Link
                to="/admission-enquiry"
                className="content-btn yellow"
              >

                <i className="fa-solid fa-phone"></i>

                Admission Enquiry

              </Link>


            </div>


          </section>



          {/* WHY CHOOSE US */}

          <WhyChooseUs />



          {/* PROGRAMMES */}

          <Programs />



          {/* DOCUMENTS */}

          <Documents />



          {/* CAMPUS */}

          <CampusHighlights />



          {/* CONTACT */}

          <ContactForm />


        </main>

      </div>


      <Footer />

    </>
  )
}



/* =====================================================
   MAIN APP
===================================================== */

export default function App() {

  return (

    <HashRouter>

      <Routes>


        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<HomePage />}
        />



        {/* =================================================
            COURSES
        ================================================= */}

        <Route
          path="/bca"
          element={
            <AdmissionPage course="bca" />
          }
        />


        <Route
          path="/bba"
          element={
            <AdmissionPage course="bba" />
          }
        />


        <Route
          path="/bsc-computer-science"
          element={
            <AdmissionPage
              course="bsc-computer-science"
            />
          }
        />


        <Route
          path="/bsc-data-science"
          element={
            <AdmissionPage
              course="bsc-data-science"
            />
          }
        />



        {/* =================================================
            ADMISSION INFORMATION
        ================================================= */}

        <Route
          path="/documents"
          element={
            <AdmissionPage
              type="documents"
            />
          }
        />


        <Route
          path="/fees"
          element={
            <AdmissionPage
              type="fees"
            />
          }
        />


        <Route
          path="/scholarships"
          element={
            <AdmissionPage
              type="scholarships"
            />
          }
        />


        <Route
          path="/faqs"
          element={
            <AdmissionPage
              type="faqs"
            />
          }
        />


        <Route
          path="/admission-enquiry"
          element={
            <AdmissionPage
              type="enquiry"
            />
          }
        />


        <Route
          path="/prospectus"
          element={
            <AdmissionPage
              type="prospectus"
            />
          }
        />



        {/* =================================================
            FACULTY
        ================================================= */}

        <Route
          path="/faculty"
          element={
            <AdmissionPage
              type="faculty"
            />
          }
        />


        <Route
          path="/faculty/bca"
          element={
            <AdmissionPage
              facultyCourse="bca"
            />
          }
        />


        <Route
          path="/faculty/bba"
          element={
            <AdmissionPage
              facultyCourse="bba"
            />
          }
        />


        <Route
          path="/faculty/bsc-computer-science"
          element={
            <AdmissionPage
              facultyCourse="bsc-computer-science"
            />
          }
        />


        <Route
          path="/faculty/bsc-data-science"
          element={
            <AdmissionPage
              facultyCourse="bsc-data-science"
            />
          }
        />



        {/* =================================================
            HIGHLIGHTS
        ================================================= */}

        <Route
          path="/campus-highlights"
          element={
            <AdmissionPage
              type="campus"
            />
          }
        />


        <Route
          path="/student-activities"
          element={
            <AdmissionPage
              type="activities"
            />
          }
        />



        {/* =================================================
            FALLBACK
        ================================================= */}

        <Route
          path="*"
          element={<HomePage />}
        />


      </Routes>

    </HashRouter>

  )
}
