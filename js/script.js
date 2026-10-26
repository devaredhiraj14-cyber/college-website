/* ==========================================================================
   SSBT's Arts, Commerce & Science College, Bambhori, Jalgaon
   Official Multi-Page Interactive Engine (Fully Responsive)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. MOBILE & TABLET NAVIGATION DRAWER
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    const toggleMenu = (open) => {
      const isNowOpen = typeof open === "boolean" ? open : !navLinks.classList.contains("is-open");
      navLinks.classList.toggle("is-open", isNowOpen);
      menuButton.setAttribute("aria-expanded", String(isNowOpen));
      menuButton.setAttribute("aria-label", isNowOpen ? "Close navigation" : "Open navigation");
      menuButton.innerHTML = isNowOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';
    };

    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });

    // Close when tapping outside the menu
    document.addEventListener("click", (event) => {
      if (!navLinks.contains(event.target) && !menuButton.contains(event.target)) {
        if (navLinks.classList.contains("is-open")) {
          toggleMenu(false);
        }
      }
    });
  }

  // 2. DYNAMIC YEAR IN FOOTERS
  const yearElements = document.querySelectorAll("#currentYear, .footer-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });

  // 3. HEADER SEARCH HANDLER
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
        window.alert(`Searching for "${query}"... Browse our Academic Departments, Admissions, Placements or Events pages for full details.`);
      }
    });
  }

  // 4. ACADEMIC DEPARTMENTS TAB SWITCHER WITH HASH ROUTING
  const deptButtons = document.querySelectorAll(".dept-tab-btn");
  const deptPanels = document.querySelectorAll(".dept-panel");

  function activateDepartment(targetDept) {
    if (!targetDept) return;
    deptButtons.forEach(btn => {
      const match = btn.getAttribute("data-dept") === targetDept || btn.getAttribute("href") === `#${targetDept}`;
      btn.classList.toggle("active", match);
    });
    deptPanels.forEach(panel => {
      const match = panel.id === targetDept;
      panel.classList.toggle("active", match);
    });
  }

  if (deptButtons.length > 0) {
    deptButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const target = btn.getAttribute("data-dept") || btn.getAttribute("href")?.replace("#", "");
        if (target) {
          activateDepartment(target);
          if (history.pushState) {
            history.pushState(null, null, `#${target}`);
          }
        }
      });
    });

    // Check URL hash on page load (e.g., departments.html#bba)
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && document.getElementById(initialHash)) {
      activateDepartment(initialHash);
    }
  }

  // 5. SEMESTER SYLLABUS TABS (Inside Departments)
  const semButtons = document.querySelectorAll(".sem-pill-btn");
  if (semButtons.length > 0) {
    semButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".syllabus-container");
        if (!parent) return;
        const targetSem = btn.getAttribute("data-sem");

        parent.querySelectorAll(".sem-pill-btn").forEach(b => b.classList.remove("active"));
        parent.querySelectorAll(".sem-table-wrap").forEach(t => t.classList.remove("active"));

        btn.classList.add("active");
        const activeTable = parent.querySelector(`.sem-table-wrap[data-sem="${targetSem}"]`);
        if (activeTable) {
          activeTable.classList.add("active");
        }
      });
    });
  }

  // 6. CAMPUS EVENTS FILTER SYSTEM
  const eventFilterBtns = document.querySelectorAll(".event-filter-btn");
  const eventCards = document.querySelectorAll(".event-card[data-category]");

  if (eventFilterBtns.length > 0 && eventCards.length > 0) {
    eventFilterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        eventFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        eventCards.forEach(card => {
          const cat = card.getAttribute("data-category");
          if (filter === "all" || cat === filter) {
            card.style.display = "flex";
            card.style.animation = "panelFadeIn 0.3s ease forwards";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 7. MODALS SYSTEM (Event Registration & Admission / Enquiry)
  function setupModal(modalId, openSelector, onOpenCallback) {
    const modalOverlay = document.getElementById(modalId);
    if (!modalOverlay) return;

    const closeBtns = modalOverlay.querySelectorAll(".modal-close-btn, [data-modal-close]");

    const closeModal = () => {
      modalOverlay.classList.remove("is-active");
      document.body.style.overflow = "";
    };

    const openModal = () => {
      modalOverlay.classList.add("is-active");
      document.body.style.overflow = "hidden";
    };

    document.querySelectorAll(openSelector).forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (onOpenCallback) onOpenCallback(btn, modalOverlay);
        openModal();
      });
    });

    closeBtns.forEach(btn => btn.addEventListener("click", closeModal));

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("is-active")) {
        closeModal();
      }
    });
  }

  // Event Registration Modal Setup
  setupModal("eventModalOverlay", ".open-event-modal", (triggerBtn, modal) => {
    const eventName = triggerBtn.getAttribute("data-event-title") || "Selected Event";
    const titleInput = modal.querySelector("#modalEventName");
    const titleHeader = modal.querySelector("#eventModalTitle");
    if (titleInput) titleInput.value = eventName;
    if (titleHeader) titleHeader.textContent = `Register for: ${eventName}`;
  });

  // Department Enquiry Modal Setup
  setupModal("deptModalOverlay", ".open-dept-modal", (triggerBtn, modal) => {
    const deptName = triggerBtn.getAttribute("data-dept-name") || "Academic Programme";
    const deptSelect = modal.querySelector("#modalDeptSelect");
    const deptHeader = modal.querySelector("#deptModalTitle");
    if (deptSelect) deptSelect.value = deptName;
    if (deptHeader) deptHeader.textContent = `Admission Enquiry - ${deptName}`;
  });

  // 8. FORM SUBMISSIONS HANDLERS
  const formsConfig = [
    { formId: "contactForm", statusId: "formStatus", msg: "Thank you for reaching out! Your enquiry has been received and our admissions team will respond shortly." },
    { formId: "admissionEnquiryForm", statusId: "admissionFormStatus", msg: "Your Admission Enquiry for 2026-27 has been submitted successfully! Our counseling desk will contact you soon." },
    { formId: "eventRegisterForm", statusId: "eventFormStatus", msg: "Your event registration has been confirmed! A confirmation email and pass have been dispatched." },
    { formId: "deptEnquiryForm", statusId: "deptFormStatus", msg: "Thank you! Department syllabus brochure & eligibility details have been sent to your email." },
    { formId: "quickEnquiryForm", statusId: "quickStatus", msg: "Thank you! Your information has been registered." }
  ];

  formsConfig.forEach(({ formId, statusId, msg }) => {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    if (form && status) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        status.innerHTML = `<strong><i class="bi bi-check-circle-fill"></i> Submission Successful:</strong> ${msg}`;
        status.classList.add("visible");
        form.reset();
        setTimeout(() => {
          status.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      });
      form.addEventListener("input", () => status.classList.remove("visible"));
    }
  });

  // 9. FAQ ACCORDION TOGGLE
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        const parent = item.parentElement;
        if (parent && parent.classList.contains("faq-accordion-single")) {
          parent.querySelectorAll(".faq-item").forEach((fi) => fi.classList.remove("open"));
        }
        item.classList.toggle("open", !isOpen);
      });
    }
  });

  // 10. GENERAL TABS UTILITY
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
});

// Global tab switcher helper
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
