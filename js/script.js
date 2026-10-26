/* Shared interactions: responsive navigation, footer year, contact form validation */
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuButton.innerHTML = isOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.innerHTML = '<i class="bi bi-list"></i>';
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.innerHTML = '<i class="bi bi-list"></i>';
      }
    });
  }


  const searchForm = document.getElementById("siteSearch");
  const searchInput = document.getElementById("searchInput");
  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      if (!query) { searchInput.focus(); return; }
      const sections = [...document.querySelectorAll("main section[id]")];
      const target = sections.find((section) => {
        const text = (section.innerText || "").toLowerCase();
        return text.includes(query) || (section.id || "").toLowerCase().includes(query);
      });
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } else {
        const notices = document.getElementById("notices");
        if (notices) notices.scrollIntoView({ behavior: "smooth", block: "start" });
        window.alert("No matching section found on this page. Please try: courses, faculty, notices, calendar, gallery or contact.");
      }
    });
  }

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent =
        "Your form passed browser validation. This demo is not connected to an email server, so your message has NOT been sent. Connect a backend or approved form service before publishing.";
      status.classList.add("visible");
    });
    form.addEventListener("input", () => status.classList.remove("visible"));
  }
});
