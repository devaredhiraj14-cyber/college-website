/* SSBT's Arts, Commerce & Science College — Shared Interactive Script */
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
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

    // Close when clicking outside
    document.addEventListener("click", (event) => {
      if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
        if (navLinks.classList.contains("is-open")) {
          navLinks.classList.remove("is-open");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open navigation");
          menuButton.innerHTML = '<i class="bi bi-list"></i>';
        }
      }
    });
  }

  // Header Search Handler
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
        window.alert(`Searching for "${query}"... Browse our Departments, Admissions, Placements or Contact sections for detailed information.`);
      }
    });
  }

  // Dynamic Year in Footer
  const yearElements = document.querySelectorAll("#currentYear, .footer-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });

  // Tab Switching Utility
  const tabContainers = document.querySelectorAll(".tabs-wrapper, [data-tabs]");
  tabContainers.forEach((wrapper) => {
    const tabButtons = wrapper.querySelectorAll(".tab-btn");
    const tabPanels = wrapper.querySelectorAll(".tab-panel");

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab-target") || btn.getAttribute("href")?.replace("#", "");
        if (!targetId) return;

        tabButtons.forEach((b) => b.classList.remove("active"));
        tabPanels.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        const activePanel = wrapper.querySelector(`#${targetId}`);
        if (activePanel) {
          activePanel.classList.add("active");
        }
      });
    });
  });

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        // Optional: close other items in the same container
        const parent = item.parentElement;
        if (parent && parent.classList.contains("faq-accordion-single")) {
          parent.querySelectorAll(".faq-item").forEach((fi) => fi.classList.remove("open"));
        }
        item.classList.toggle("open", !isOpen);
      });
    }
  });

  // Contact & Admission Form Submissions
  const forms = [
    { formId: "contactForm", statusId: "formStatus", successMsg: "Thank you for reaching out! Your enquiry has been received and our admissions team will respond shortly." },
    { formId: "admissionEnquiryForm", statusId: "admissionFormStatus", successMsg: "Your Admission Enquiry for 2026-27 has been submitted successfully! We will contact you at your provided phone and email." },
    { formId: "quickEnquiryForm", statusId: "quickStatus", successMsg: "Thank you! Your information has been registered." }
  ];

  forms.forEach(({ formId, statusId, successMsg }) => {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    if (form && status) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        status.innerHTML = `<strong><i class="bi bi-check-circle-fill"></i> Submission Successful:</strong> ${successMsg}`;
        status.classList.add("visible");
        form.reset();
        setTimeout(() => {
          status.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      });
      form.addEventListener("input", () => status.classList.remove("visible"));
    }
  });
});

// Global tab switcher helper function (used in some inline onclick handlers)
window.switchTab = function(event, tabId) {
  if (event) event.preventDefault();
  const parent = event?.currentTarget?.closest('.tabs-wrapper') || document;
  const buttons = parent.querySelectorAll('.tab-btn, .sidebar-menu li');
  const panels = parent.querySelectorAll('.tab-panel, .content-panel');

  buttons.forEach((b) => b.classList.remove('active', 'active-tab'));
  panels.forEach((p) => p.classList.remove('active'));

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active', 'active-tab');
  }
  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
  }
};
