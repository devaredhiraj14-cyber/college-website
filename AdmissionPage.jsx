import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


/* =====================================================
   COURSE DATA
===================================================== */

const courseData = {
  bca: {
    title: 'Bachelor of Computer Applications',
    short: 'BCA',
    subtitle: 'Build Your Future in Computer Applications & Technology',
    image: 'https://ssacscjalgaon.ac.in/public/images/courses/bsc.jpg',
    duration: '3 Years',
    description:
      'BCA is an undergraduate programme focused on computer applications, programming, software development and modern technologies.',
    points: [
      'Programming and Computer Applications',
      'Software Development',
      'Database Management',
      'Web Technologies',
      'Practical and Technical Learning'
    ]
  },

  bba: {
    title: 'Bachelor of Business Administration',
    short: 'BBA',
    subtitle: 'Develop Your Skills in Business & Management',
    image: 'https://ssacscjalgaon.ac.in/public/images/courses/bcom.jpg',
    duration: '3 Years',
    description:
      'BBA provides students with knowledge of business, management, communication and professional skills.',
    points: [
      'Business Management',
      'Marketing and Finance',
      'Human Resource Management',
      'Communication Skills',
      'Professional Development'
    ]
  },

  'bsc-computer-science': {
    title: 'B.Sc. Computer Science',
    short: 'B.Sc. Computer Science',
    subtitle: 'Build Strong Foundations in Computer Science',
    image: 'https://ssacscjalgaon.ac.in/public/images/courses/bsc.jpg',
    duration: '3 Years',
    description:
      'B.Sc. Computer Science focuses on programming, computer science concepts, software development and modern technology.',
    points: [
      'Programming Concepts',
      'Computer Science Fundamentals',
      'Software Development',
      'Database Systems',
      'Practical Computer Applications'
    ]
  },

  'bsc-data-science': {
    title: 'B.Sc. Data Science',
    short: 'B.Sc. Data Science',
    subtitle: 'Explore Data, Technology & Modern Computing',
    image: 'https://ssacscjalgaon.ac.in/public/images/courses/bsc.jpg',
    duration: '3 Years',
    description:
      'B.Sc. Data Science introduces students to data analysis, statistics, computing and modern data-driven technologies.',
    points: [
      'Data Analysis',
      'Statistics',
      'Programming',
      'Data Visualization',
      'Modern Data Technologies'
    ]
  }
}


/* =====================================================
   FACULTY DATA
===================================================== */

const facultyData = {
  bca: {
    title: 'BCA Faculty',
    course: 'Bachelor of Computer Applications',
    members: [
      {
        name: 'Dr. Anjali Patil',
        designation: 'Assistant Professor & BCA Coordinator',
        qualification: 'MCA, Ph.D.'
      },
      {
        name: 'Prof. Rahul Deshmukh',
        designation: 'Assistant Professor',
        qualification: 'M.Sc. Computer Science'
      },
      {
        name: 'Prof. Sneha Joshi',
        designation: 'Assistant Professor',
        qualification: 'MCA'
      }
    ]
  },

  bba: {
    title: 'BBA Faculty',
    course: 'Bachelor of Business Administration',
    members: [
      {
        name: 'Dr. Priya Kulkarni',
        designation: 'Assistant Professor & BBA Coordinator',
        qualification: 'MBA, Ph.D.'
      },
      {
        name: 'Prof. Amit Patil',
        designation: 'Assistant Professor',
        qualification: 'MBA'
      },
      {
        name: 'Prof. Riya Shah',
        designation: 'Assistant Professor',
        qualification: 'M.Com, MBA'
      }
    ]
  },

  'bsc-computer-science': {
    title: 'B.Sc. Computer Science Faculty',
    course: 'B.Sc. Computer Science',
    members: [
      {
        name: 'Dr. Meena Sharma',
        designation: 'Assistant Professor & CS Coordinator',
        qualification: 'M.Sc. Computer Science, Ph.D.'
      },
      {
        name: 'Prof. Kunal More',
        designation: 'Assistant Professor',
        qualification: 'M.Sc. Computer Science'
      },
      {
        name: 'Prof. Pooja Patil',
        designation: 'Assistant Professor',
        qualification: 'MCA'
      }
    ]
  },

  'bsc-data-science': {
    title: 'B.Sc. Data Science Faculty',
    course: 'B.Sc. Data Science',
    members: [
      {
        name: 'Dr. Neha Desai',
        designation: 'Assistant Professor & DS Coordinator',
        qualification: 'M.Sc. Data Science, Ph.D.'
      },
      {
        name: 'Prof. Akshay Jadhav',
        designation: 'Assistant Professor',
        qualification: 'M.Sc. Data Science'
      },
      {
        name: 'Prof. Kavita More',
        designation: 'Assistant Professor',
        qualification: 'M.Sc. Statistics'
      }
    ]
  }
}


/* =====================================================
   ADMISSION INFORMATION
===================================================== */

const infoData = {
  documents: {
    title: 'Documents Required',
    icon: 'fa-solid fa-file-lines',
    text: 'Keep the following documents ready for the admission process.',
    points: [
      'Aadhaar Card / Identity Proof',
      'Previous Examination Marksheet',
      'Passing Certificate',
      'Passport Size Photographs',
      'Transfer Certificate',
      'Migration Certificate, if applicable'
    ]
  },

  fees: {
    title: 'Fees Structure',
    icon: 'fa-solid fa-indian-rupee-sign',
    text: 'Programme-wise fees and applicable charges can be checked with the college admission office.',
    points: [
      'Programme-wise fee structure',
      'Applicable university charges',
      'Examination fees',
      'Other applicable charges'
    ]
  },

  scholarships: {
    title: 'Scholarships',
    icon: 'fa-solid fa-award',
    text: 'Eligible students can apply for applicable scholarships and government schemes.',
    points: [
      'Government scholarship schemes',
      'Category-based schemes',
      'Eligibility requirements',
      'Required scholarship documents'
    ]
  },

  faqs: {
    title: 'Frequently Asked Questions',
    icon: 'fa-solid fa-circle-question',
    text: 'Find answers to common admission-related questions.',
    points: [
      'What courses are available?',
      'What documents are required?',
      'What is the course duration?',
      'How can I enquire about admission?'
    ]
  },

  enquiry: {
    title: 'Admission Enquiry',
    icon: 'fa-solid fa-paper-plane',
    text: 'Contact SSBT Arts, Commerce & Science College for admission-related information.',
    points: [
      'Phone: 0257-2258391 / 93 / 94',
      'Email: ssacscjalgaon@gmail.com',
      'Location: Bambhori, Jalgaon (MS)',
      'Programmes: BCA, BBA, B.Sc. CS, B.Sc. DS'
    ]
  },

  prospectus: {
    title: 'College Prospectus 2026-27',
    icon: 'fa-solid fa-book',
    text: 'Explore information about the college, programmes, facilities and admissions.',
    points: [
      'Academic programmes',
      'Admission information',
      'College facilities',
      'Student development'
    ]
  }
}


/* =====================================================
   FULL SIDEBAR
===================================================== */

function AdmissionSidebar() {
  return (
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
  )
}


/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function AdmissionPage({
  course,
  type,
  facultyCourse
}) {


  /* ===================================================
     FACULTY MAIN PAGE
  =================================================== */

  if (type === 'faculty') {
    return (
      <>
        <Header />

        <section className="placement-hero">
          <div className="placement-hero-content">
            <h2>Faculty</h2>
            <p>Meet Our Academic Faculty</p>
          </div>
        </section>

        <div className="placement-layout">

          <AdmissionSidebar />

          <main className="placement-content">

            <section className="placement-welcome">

              <span className="content-tag">
                ACADEMIC FACULTY
              </span>

              <h1>
                Our Faculty
              </h1>

              <p>
                Select a programme to view its faculty members.
              </p>

            </section>


            <div className="faculty-course-grid">

              <Link
                to="/faculty/bca"
                className="faculty-course-card"
              >
                <i className="fa-solid fa-laptop-code"></i>

                <h3>BCA Faculty</h3>

                <p>
                  Bachelor of Computer Applications
                </p>

                <span>
                  View Faculty
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>


              <Link
                to="/faculty/bba"
                className="faculty-course-card"
              >
                <i className="fa-solid fa-briefcase"></i>

                <h3>BBA Faculty</h3>

                <p>
                  Bachelor of Business Administration
                </p>

                <span>
                  View Faculty
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>


              <Link
                to="/faculty/bsc-computer-science"
                className="faculty-course-card"
              >
                <i className="fa-solid fa-computer"></i>

                <h3>
                  B.Sc. Computer Science
                </h3>

                <p>
                  Computer Science Faculty
                </p>

                <span>
                  View Faculty
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>


              <Link
                to="/faculty/bsc-data-science"
                className="faculty-course-card"
              >
                <i className="fa-solid fa-chart-line"></i>

                <h3>
                  B.Sc. Data Science
                </h3>

                <p>
                  Data Science Faculty
                </p>

                <span>
                  View Faculty
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>

            </div>

          </main>

        </div>

        <Footer />
      </>
    )
  }


  /* ===================================================
     COURSE FACULTY PAGE
  =================================================== */

  if (facultyCourse) {

    const selectedFaculty = facultyData[facultyCourse]

    if (!selectedFaculty) {
      return (
        <>
          <Header />

          <div className="placement-content">
            <h1>Faculty Not Found</h1>

            <Link to="/faculty">
              Back To Faculty
            </Link>
          </div>

          <Footer />
        </>
      )
    }


    return (
      <>
        <Header />

        <section className="placement-hero">

          <div className="placement-hero-content">

            <h2>
              {selectedFaculty.title}
            </h2>

            <p>
              {selectedFaculty.course}
            </p>

          </div>

        </section>


        <div className="placement-layout">

          <AdmissionSidebar />


          <main className="placement-content">

            <section className="placement-welcome">

              <span className="content-tag">
                ACADEMIC FACULTY
              </span>

              <h1>
                {selectedFaculty.title}
              </h1>

              <p>
                Faculty members of {selectedFaculty.course}.
              </p>

            </section>


            <div className="faculty-grid">

              {selectedFaculty.members.map(
                (member, index) => (

                  <div
                    className="faculty-card"
                    key={index}
                  >

                    <div className="faculty-avatar">
                      <i className="fa-solid fa-user-tie"></i>
                    </div>

                    <div className="faculty-card-content">

                      <h3>
                        {member.name}
                      </h3>

                      <p className="faculty-role">
                        {member.designation}
                      </p>

                      <p className="faculty-qualification">

                        <i className="fa-solid fa-graduation-cap"></i>

                        {member.qualification}

                      </p>

                    </div>

                  </div>

                )
              )}

            </div>


            <section className="course-cta">

              <h2>
                Admission Enquiry
              </h2>

              <p>
                Contact SSBT Arts, Commerce &amp; Science College
                for more information.
              </p>

              <Link
                to="/admission-enquiry"
                className="content-btn red"
              >
                <i className="fa-solid fa-phone"></i>
                Admission Enquiry
              </Link>

            </section>

          </main>

        </div>

        <Footer />
      </>
    )
  }


  /* ===================================================
     CAMPUS HIGHLIGHTS PAGE
  =================================================== */

  if (type === 'campus') {
    return (
      <>
        <Header />

        {/* HERO */}

        <section className="placement-hero">

          <div className="placement-hero-content">

            <h2>
              Campus Highlights
            </h2>

            <p>
              Explore the SSBT Campus
            </p>

          </div>

        </section>


        <div className="placement-layout">

          {/* FULL SIDEBAR */}

          <AdmissionSidebar />


          {/* CONTENT */}

          <main className="placement-content">

            <section className="placement-welcome">

              <span className="content-tag">
                CAMPUS HIGHLIGHTS
              </span>

              <h1>
                Explore Our Campus
              </h1>

              <p>
                SSBT Arts, Commerce &amp; Science College
                provides a supportive academic environment
                with learning facilities, practical exposure
                and opportunities for student development.
              </p>

            </section>


            {/* HIGHLIGHT GRID */}

            <section className="campus-highlight-page">

              <div className="campus-highlight-grid">


                {/* CARD 1 */}

                <div className="campus-highlight-card">

                  <div className="campus-highlight-image">

                    <img
                      src="https://ssacscjalgaon.ac.in/public/images/slider/home2/slide1.jpg"
                      alt="SSBT Campus"
                    />

                  </div>

                  <div className="campus-highlight-content">

                    <div className="campus-highlight-icon">
                      <i className="fa-solid fa-building-columns"></i>
                    </div>

                    <h3>
                      Spacious Campus
                    </h3>

                    <p>
                      A spacious and student-friendly campus
                      designed to support academic learning
                      and overall student development.
                    </p>

                  </div>

                </div>


                {/* CARD 2 */}

                <div className="campus-highlight-card">

                  <div className="campus-highlight-image">

                    <img
                      src="https://ssacscjalgaon.ac.in/public/images/courses/bsc.jpg"
                      alt="Practical Learning"
                    />

                  </div>

                  <div className="campus-highlight-content">

                    <div className="campus-highlight-icon">
                      <i className="fa-solid fa-flask"></i>
                    </div>

                    <h3>
                      Practical Learning
                    </h3>

                    <p>
                      Practical-oriented learning helps
                      students develop technical and
                      application-based knowledge.
                    </p>

                  </div>

                </div>


                {/* CARD 3 */}

                <div className="campus-highlight-card">

                  <div className="campus-highlight-image">

                    <img
                      src="https://ssacscjalgaon.ac.in/public/images/courses/bcom.jpg"
                      alt="Academic Environment"
                    />

                  </div>

                  <div className="campus-highlight-content">

                    <div className="campus-highlight-icon">
                      <i className="fa-solid fa-book-open"></i>
                    </div>

                    <h3>
                      Academic Environment
                    </h3>

                    <p>
                      A positive academic environment encourages
                      students to learn, explore and build
                      professional skills.
                    </p>

                  </div>

                </div>


                {/* CARD 4 */}

                <div className="campus-highlight-card">

                  <div className="campus-highlight-image">

                    <img
                      src="https://ssacscjalgaon.ac.in/public/images/courses/ba1.png"
                      alt="Arts Department"
                    />

                  </div>

                  <div className="campus-highlight-content">

                    <div className="campus-highlight-icon">
                      <i className="fa-solid fa-palette"></i>
                    </div>

                    <h3>
                      Arts &amp; Creative Learning
                    </h3>

                    <p>
                      Students get opportunities to develop
                      creativity, communication and broader
                      academic skills.
                    </p>

                  </div>

                </div>


                {/* CARD 5 */}

                <div className="campus-highlight-card">

                  <div className="campus-highlight-image">

                    <img
                      src="https://ssacscjalgaon.ac.in/public/images/slider/home2/slide1.jpg"
                      alt="Student Life"
                    />

                  </div>

                  <div className="campus-highlight-content">

                    <div className="campus-highlight-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>

                    <h3>
                      Student Life
                    </h3>

                    <p>
                      The campus provides opportunities for
                      academic, cultural and extracurricular
                      activities.
                    </p>

                  </div>

                </div>


                {/* CARD 6 */}

                <div className="campus-highlight-card">

                  <div className="campus-highlight-image">

                    <img
                      src="https://ssacscjalgaon.ac.in/public/images/slider/home2/slide1.jpg"
                      alt="Learning and Development"
                    />

                  </div>

                  <div className="campus-highlight-content">

                    <div className="campus-highlight-icon">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>

                    <h3>
                      Learning &amp; Development
                    </h3>

                    <p>
                      The college focuses on academic growth,
                      practical skills and overall student
                      development.
                    </p>

                  </div>

                </div>


              </div>


              {/* CTA */}

              <section className="campus-highlight-cta">

                <div>

                  <span>
                    SSBT ARTS, COMMERCE &amp; SCIENCE COLLEGE
                  </span>

                  <h2>
                    Learn. Explore. Grow.
                  </h2>

                  <p>
                    Discover an environment that supports
                    education, practical learning and
                    student development.
                  </p>

                </div>


                <Link
                  to="/admission-enquiry"
                  className="content-btn red"
                >

                  <i className="fa-solid fa-paper-plane"></i>

                  Admission Enquiry

                </Link>

              </section>

            </section>

          </main>

        </div>

        <Footer />
      </>
    )
  }


  /* ===================================================
     STUDENT ACTIVITIES PAGE
  =================================================== */

  if (type === 'activities') {
    return (
      <>
        <Header />

        <section className="placement-hero">

          <div className="placement-hero-content">

            <h2>
              Student Activities
            </h2>

            <p>
              Student Life &amp; Activities at SSBT
            </p>

          </div>

        </section>


        <div className="placement-layout">

          <AdmissionSidebar />


          <main className="placement-content">

            <section className="placement-welcome">

              <span className="content-tag">
                STUDENT ACTIVITIES
              </span>

              <h1>
                Student Life at SSBT
              </h1>

              <p>
                Students can participate in academic,
                cultural, sports and extracurricular
                activities during their college journey.
              </p>

            </section>


            <div className="faculty-course-grid">

              <div className="faculty-course-card">

                <i className="fa-solid fa-futbol"></i>

                <h3>
                  Sports Activities
                </h3>

                <p>
                  Participation in sports and physical
                  activities for overall development.
                </p>

              </div>


              <div className="faculty-course-card">

                <i className="fa-solid fa-masks-theater"></i>

                <h3>
                  Cultural Activities
                </h3>

                <p>
                  Cultural events and activities that
                  encourage creativity and participation.
                </p>

              </div>


              <div className="faculty-course-card">

                <i className="fa-solid fa-book-open"></i>

                <h3>
                  Academic Activities
                </h3>

                <p>
                  Academic events, seminars and learning
                  activities for students.
                </p>

              </div>


              <div className="faculty-course-card">

                <i className="fa-solid fa-people-group"></i>

                <h3>
                  Student Events
                </h3>

                <p>
                  Opportunities for students to interact,
                  collaborate and participate in events.
                </p>

              </div>

            </div>


            <section className="course-cta">

              <h2>
                Explore SSBT
              </h2>

              <p>
                Learn more about programmes and admission
                opportunities at SSBT.
              </p>

              <Link
                to="/admission-enquiry"
                className="content-btn red"
              >

                <i className="fa-solid fa-paper-plane"></i>

                Admission Enquiry

              </Link>

            </section>

          </main>

        </div>

        <Footer />
      </>
    )
  }


  /* ===================================================
     COURSE PAGE
  =================================================== */

  const data = courseData[course]

  if (data) {
    return (
      <>
        <Header />

        <section className="placement-hero">

          <div className="placement-hero-content">

            <h2>
              {data.short}
            </h2>

            <p>
              {data.subtitle}
            </p>

          </div>

        </section>


        <div className="placement-layout">

          <AdmissionSidebar />


          <main className="placement-content">

            <section className="course-detail-section">

              <div className="course-detail-image">

                <img
                  src={data.image}
                  alt={data.title}
                />

              </div>


              <div className="course-detail-content">

                <span>
                  ADMISSION 2026-27
                </span>

                <h2>
                  {data.title}
                </h2>

                <h3>
                  {data.subtitle}
                </h3>

                <p>
                  {data.description}
                </p>


                <div className="course-info-row">

                  <div>
                    <i className="fa-solid fa-clock"></i>
                    <span>Duration</span>
                    <strong>{data.duration}</strong>
                  </div>

                  <div>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>Programme</span>
                    <strong>Undergraduate</strong>
                  </div>

                  <div>
                    <i className="fa-solid fa-building-columns"></i>
                    <span>College</span>
                    <strong>SSBT A.C.S. College</strong>
                  </div>

                </div>


                <div className="content-buttons">

                  <Link
                    to="/admission-enquiry"
                    className="content-btn red"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                    Admission Enquiry
                  </Link>

                  <Link
                    to={`/faculty/${course}`}
                    className="content-btn yellow"
                  >
                    <i className="fa-solid fa-chalkboard-user"></i>
                    View Faculty
                  </Link>

                </div>

              </div>

            </section>


            <section className="info-page-card">

              <span className="content-tag">
                COURSE HIGHLIGHTS
              </span>

              <h2>
                About {data.short}
              </h2>

              <p>
                The programme is designed to provide students
                with academic knowledge, practical skills and
                professional development.
              </p>


              <div className="info-points">

                {data.points.map(
                  (point, index) => (

                    <div key={index}>

                      <i className="fa-solid fa-circle-check"></i>

                      {point}

                    </div>

                  )
                )}

              </div>


              <div className="content-buttons">

                <Link
                  to={`/faculty/${course}`}
                  className="content-btn red"
                >
                  <i className="fa-solid fa-chalkboard-user"></i>
                  View Faculty
                </Link>

                <Link
                  to="/admission-enquiry"
                  className="content-btn yellow"
                >
                  <i className="fa-solid fa-phone"></i>
                  Admission Enquiry
                </Link>

              </div>

            </section>

          </main>

        </div>

        <Footer />
      </>
    )
  }


  /* ===================================================
     ADMISSION INFORMATION PAGES
  =================================================== */

  const info = infoData[type]

  if (info) {
    return (
      <>
        <Header />

        <section className="placement-hero">

          <div className="placement-hero-content">

            <h2>
              {info.title}
            </h2>

            <p>
              Admissions Open For Academic Session 2026-27
            </p>

          </div>

        </section>


        <div className="placement-layout">

          <AdmissionSidebar />


          <main className="placement-content">

            <section className="info-page-card">

              <div className="info-page-icon">

                <i className={info.icon}></i>

              </div>


              <span className="content-tag">
                ADMISSION INFORMATION
              </span>


              <h1>
                {info.title}
              </h1>


              <p>
                {info.text}
              </p>


              <div className="info-points">

                {info.points.map(
                  (point, index) => (

                    <div key={index}>

                      <i className="fa-solid fa-circle-check"></i>

                      {point}

                    </div>

                  )
                )}

              </div>


              <div className="content-buttons">

                <Link
                  to="/admission-enquiry"
                  className="content-btn red"
                >
                  <i className="fa-solid fa-phone"></i>
                  Admission Enquiry
                </Link>

                <Link
                  to="/"
                  className="content-btn yellow"
                >
                  <i className="fa-solid fa-house"></i>
                  Back To Home
                </Link>

              </div>

            </section>

          </main>

        </div>

        <Footer />
      </>
    )
  }


  /* ===================================================
     FALLBACK
  =================================================== */

  return (
    <>
      <Header />

      <div
        style={{
          padding: '80px',
          textAlign: 'center'
        }}
      >

        <h1>
          Page Not Found
        </h1>

        <Link to="/">
          Back To Home
        </Link>

      </div>

      <Footer />
    </>
  )
}
