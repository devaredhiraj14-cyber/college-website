/* =========================================================
   STUDENT CORNER - PROFESSIONAL JAVASCRIPT
========================================================= */


/* ================= COURSE DATA ================= */

const courseData = {

    BCA: {
        title: "B.C.A. - Bachelor of Computer Applications",
        text: "Access BCA notices, study material, examination information, results and academic resources.",
        icon: "</>"
    },

    BSC: {
        title: "B.Sc. - Bachelor of Science",
        text: "Access B.Sc. academic information, practical schedules, examination notices and results.",
        icon: "⚗"
    },

    BBA: {
        title: "B.B.A. - Bachelor of Business Administration",
        text: "Access BBA announcements, assignments, presentations, results and academic resources.",
        icon: "↗"
    },

    ALL: {
        title: "All Academic Programs",
        text: "Explore student resources and academic information for BCA, B.Sc. and BBA programs.",
        icon: "▦"
    }

};


/* ================= COURSE SELECTION ================= */

function selectCourse(course) {

    document.querySelectorAll(".course-card").forEach(card => {
        card.classList.remove("selected");
    });

    const cards = document.querySelectorAll(".course-card");

    const index = {
        BCA: 0,
        BSC: 1,
        BBA: 2,
        ALL: 3
    };

    if (cards[index[course]]) {
        cards[index[course]].classList.add("selected");
    }

    const data = courseData[course];

    document.getElementById("courseResultTitle").textContent =
        data.title;

    document.getElementById("courseResultText").textContent =
        data.text;

    document.getElementById("courseResult").classList.add("show");

    document.getElementById("courseResult")
        .scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
}


/* ================= RESOURCE DATA ================= */

const resourceData = {

    study: {
        title: "Study Material",
        icon: "▤",
        description: "Access notes, study material and academic learning resources.",
        items: [
            ["Lecture Notes", "Subject-wise notes will be available here."],
            ["Question Banks", "Important questions and previous papers."],
            ["Reference Material", "Additional learning resources."]
        ]
    },

    downloads: {
        title: "Downloads",
        icon: "↓",
        description: "Download important college forms and academic documents.",
        items: [
            ["Admission Form", "Student admission related documents."],
            ["Scholarship Form", "Scholarship application documents."],
            ["Academic Calendar", "Academic year calendar."]
        ]
    },

    results: {
        title: "Examination Results",
        icon: "▥",
        description: "Check semester-wise examination results.",
        items: [
            ["BCA Results", "Semester-wise BCA examination results."],
            ["B.Sc. Results", "Semester-wise B.Sc. examination results."],
            ["BBA Results", "Semester-wise BBA examination results."]
        ]
    },

    timetable: {
        title: "Academic Timetable",
        icon: "▣",
        description: "View class and examination schedules.",
        items: [
            ["Class Timetable", "Regular lecture timetable."],
            ["Examination Timetable", "Semester examination schedule."],
            ["Practical Timetable", "Practical examination schedule."]
        ]
    }

};


/* ================= OPEN RESOURCE ================= */

function openResource(type) {

    const data = resourceData[type];

    if (!data) return;

    let cards = "";

    data.items.forEach(item => {

        cards += `
            <div class="detail-card">

                <div class="detail-card-icon">
                    ${data.icon}
                </div>

                <h3>${item[0]}</h3>

                <p>${item[1]}</p>

                <button onclick="openModal('${item[0]}')">
                    View Details
                </button>

            </div>
        `;

    });

    document.getElementById("dynamicContent").innerHTML = `

        <div class="dynamic-header">

            <div>
                <h2>${data.icon} ${data.title}</h2>
                <p>${data.description}</p>
            </div>

            <button class="close-resource"
                onclick="closeDynamic()">
                Close ×
            </button>

        </div>

        <div class="dynamic-body">

            <div class="detail-grid">
                ${cards}
            </div>

        </div>
    `;

    const section =
        document.getElementById("dynamicSection");

    section.classList.add("active");

    setTimeout(() => {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/* ================= CLOSE DYNAMIC ================= */

function closeDynamic() {

    document
        .getElementById("dynamicSection")
        .classList.remove("active");

}


/* ================= NOTICES ================= */

const notices = {

    "Semester Examination Notice": {
        title: "Semester Examination Notice",
        text: "Students are requested to check the examination schedule and prepare accordingly.",
        date: "16 August 2026"
    },

    "Assignment Submission Notice": {
        title: "Assignment Submission Notice",
        text: "Students should submit their pending assignments before the deadline.",
        date: "12 August 2026"
    },

    "Student Activity Registration": {
        title: "Student Activity Registration",
        text: "Registration is open for upcoming student activities and competitions.",
        date: "08 August 2026"
    },

    "Library Membership Renewal": {
        title: "Library Membership Renewal",
        text: "Students are requested to renew their library membership.",
        date: "02 August 2026"
    }

};


function viewNotice(title) {

    const notice = notices[title];

    if (!notice) return;

    openModal(
        notice.title,
        notice.text,
        notice.date
    );

}


/* ================= ALL NOTICES ================= */

function showAllNotices() {

    let html = `
        <div class="modal-extra-list">
    `;

    Object.values(notices).forEach(notice => {

        html += `
            <div class="modal-extra-item">

                <strong>${notice.title}</strong>

                <br>

                <small>
                    ${notice.date}
                </small>

            </div>
        `;

    });

    html += "</div>";

    document.getElementById("modalIcon").textContent = "!";

    document.getElementById("modalTitle").textContent =
        "All Latest Notices";

    document.getElementById("modalText").textContent =
        "Important announcements and updates for students.";

    document.getElementById("modalExtra").innerHTML =
        html;

    document
        .getElementById("modalOverlay")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ================= SERVICES ================= */

const services = {

    calendar: {
        title: "Academic Calendar",
        text: "View important academic dates, semester activities and examination schedules."
    },

    clubs: {
        title: "Student Clubs",
        text: "Join student clubs and participate in academic, cultural and technical activities."
    },

    scholarship: {
        title: "Scholarships",
        text: "Information about available scholarships, eligibility and application process."
    },

    activities: {
        title: "Student Activities",
        text: "Participate in college events, competitions, cultural programs and sports."
    },

    committees: {
        title: "Student Committees",
        text: "Explore different student committees and their responsibilities."
    },

    links: {
        title: "Important Links",
        text: "Access university, examination, scholarship and other important student websites."
    }

};


function openService(service) {

    const data = services[service];

    if (!data) return;

    openModal(
        data.title,
        data.text
    );

}


function showServices() {

    let html = `
        <div class="modal-extra-list">
    `;

    Object.values(services).forEach(service => {

        html += `
            <div class="modal-extra-item">
                <strong>${service.title}</strong>
                <br>
                <small>${service.text}</small>
            </div>
        `;

    });

    html += "</div>";

    document.getElementById("modalIcon").textContent = "◆";

    document.getElementById("modalTitle").textContent =
        "Student Support Services";

    document.getElementById("modalText").textContent =
        "Explore services available for students.";

    document.getElementById("modalExtra").innerHTML =
        html;

    document
        .getElementById("modalOverlay")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ================= GENERAL MODAL ================= */

function openModal(title, text, extra = "") {

    document.getElementById("modalIcon").textContent = "◆";

    document.getElementById("modalTitle").textContent =
        title;

    document.getElementById("modalText").textContent =
        text || "Information will be available soon.";

    document.getElementById("modalExtra").innerHTML =
        extra ?
        `<div class="modal-extra-item">${extra}</div>` :
        "";

    document
        .getElementById("modalOverlay")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    document
        .getElementById("modalOverlay")
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* ================= SEARCH ================= */

const searchableData = [

    "BCA Course",
    "B.Sc. Course",
    "BBA Course",
    "Study Material",
    "Downloads",
    "Examination Results",
    "Timetable",
    "Semester Examination Notice",
    "Assignment Submission Notice",
    "Student Activity Registration",
    "Library Membership Renewal",
    "Academic Calendar",
    "Student Clubs",
    "Scholarships",
    "Student Activities",
    "Student Committees",
    "Important Links"

];


function openSearch() {

    document
        .getElementById("searchOverlay")
        .classList.add("active");

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 150);
}


function closeSearch() {

    document
        .getElementById("searchOverlay")
        .classList.remove("active");

    document.body.style.overflow = "";
}


function performSearch() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const results =
        document.getElementById("searchResults");

    if (!input) {

        results.innerHTML = `
            <div class="search-hint">
                Type something to search.
            </div>
        `;

        return;
    }

    const matches =
        searchableData.filter(item =>
            item.toLowerCase().includes(input)
        );

    if (matches.length === 0) {

        results.innerHTML = `
            <div class="no-search-result">
                No results found for "<strong>${input}</strong>"
            </div>
        `;

        return;
    }

    results.innerHTML =
        matches.map(item => `

            <div class="search-result-item">

                <strong>${item}</strong>

                <small>
                    Student Corner Resource
                </small>

            </div>

        `).join("");

}


/* ================= BACK TO TOP ================= */

window.addEventListener("scroll", () => {

    const button =
        document.getElementById("backToTop");

    if (window.scrollY > 350) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }

});


function goTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();
        closeSearch();
        closeDynamic();

    }

});


/* ================= OUTSIDE MODAL CLICK ================= */

document
    .getElementById("modalOverlay")
    .addEventListener("click", event => {

        if (event.target.id === "modalOverlay") {
            closeModal();
        }

    });


document
    .getElementById("searchOverlay")
    .addEventListener("click", event => {

        if (event.target.id === "searchOverlay") {
            closeSearch();
        }

    });


/* ================= START ================= */

console.log(
    "Student Corner loaded successfully."
);