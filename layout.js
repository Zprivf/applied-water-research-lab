/* Shared header, footer, and search functionality for all pages */

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el || typeof NAV === "undefined") return;

  const page = document.body.dataset.page || "";

  const navItems = NAV.map(item => {
    const isActive = item.page === page;
    if (item.subsections) {
      const subItems = item.subsections.map(sub => {
        return `<a href="${sub.href}" class="sub-nav-link">${sub.label}</a>`;
      }).join("");

      return `
        <div class="nav-dropdown">
          <a href="${item.href}" class="nav-link dropdown-toggle ${isActive ? "active" : ""}">${item.label} <span class="caret">&#9662;</span></a>
          <div class="dropdown-menu">
            ${subItems}
          </div>
        </div>`;
    } else {
      const attrs = item.external
        ? `href="${item.href}" target="_blank" rel="noopener noreferrer"`
        : `href="${item.href}"`;
      return `<a ${attrs} class="nav-link ${isActive ? "active" : ""}">${item.label}</a>`;
    }
  }).join("");

  el.innerHTML = `
    <header class="site-header">
      <div class="header-inner">
        <a href="index.html" class="site-logo">
          <div class="logo-acronym"><span style="color: #2F80ED;">AWRL</span></div>
          <div class="logo-fullname">
            Applied Water Research Lab <img src="https://1.bp.blogspot.com/-GZklvBYBZgU/VfxH531_RJI/AAAAAAAATxM/ba1bsKqN7GY/s1600/BEG%2BUTA%2Blogo.JPG" alt="Bureau of Economic Geology Logo" style="height: 40px; vertical-align: middle; margin-left: 5px;">
          </div>
        </a>
        <div class="header-actions">
          <button class="search-btn" id="searchLaunchBtn" aria-label="Open Search">
            <span class="search-icon-symbol">🔍</span> Search
          </button>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">&#9776;</button>
        </div>
        <nav class="site-nav" id="siteNav">
          ${navItems}
        </nav>
      </div>
    </header>`;

  // Setup Mobile Nav Toggle
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("open");
    });

    // Close mobile nav when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("open");
      }
    });
  }

  // Handle mobile touch/click for dropdown toggling
  const dropdowns = el.querySelectorAll(".nav-dropdown");
  dropdowns.forEach(dd => {
    const link = dd.querySelector(".dropdown-toggle");
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        // Toggle open class on the parent
        const isAlreadyOpen = dd.classList.contains("open-mobile");
        // Close other dropdowns
        dropdowns.forEach(other => other.classList.remove("open-mobile"));

        if (!isAlreadyOpen) {
          e.preventDefault(); // Stop navigation to allow opening submenu first
          dd.classList.add("open-mobile");
        }
      }
    });
  });

  // Fix: Prevent submenus from disappearing too quickly on desktop
  dropdowns.forEach(dd => {
    let timer;
    const menu = dd.querySelector(".dropdown-menu");
    if (!menu) return;

    dd.addEventListener("mouseenter", () => {
      clearTimeout(timer);
      menu.style.display = "block"; // Force menu to stay visible
    });

    dd.addEventListener("mouseleave", () => {
      timer = setTimeout(() => {
        if (window.innerWidth > 768) {
          menu.style.display = ""; // Revert to CSS handling after 500ms
        }
      }, 500);
    });
  });

  setupSearch();
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  el.innerHTML = `
    <footer class="site-footer">
      <p>
        &copy; Bureau of Economic Geology
        <span class="footer-sep">|</span>
        <a href="https://www.beg.utexas.edu/about/privacy-policy" target="_blank" rel="noopener">Web Privacy Policy</a>
        <span class="footer-sep">|</span>
        <a href="https://www.beg.utexas.edu/about/web-accessibility-policy" target="_blank" rel="noopener">Web Accessibility Policy</a>
      </p>
    </footer>`;
}

// Client-side Search Engine Setup
function setupSearch() {
  // Create search modal element if it doesn't exist
  if (document.getElementById("searchModal")) return;

  const modalHtml = `
    <div id="searchModal" class="search-modal" aria-hidden="true">
      <div class="search-modal-backdrop" id="searchBackdrop"></div>
      <div class="search-modal-content">
        <div class="search-modal-header">
          <h2 class="search-modal-title">Search AWRL website</h2>
          <button id="searchCloseBtn" class="search-close-btn" aria-label="Close search">&times;</button>
        </div>
        <div class="search-modal-body">
          <div class="search-input-wrapper">
            <span class="search-input-icon">🔍</span>
            <input type="search" id="searchInput" placeholder="Type to search researchers, projects, publications..." autocomplete="off">
          </div>
          <div id="searchResults" class="search-results">
            <div class="search-results-placeholder">Type a query to search...</div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById("searchModal");
  const backdrop = document.getElementById("searchBackdrop");
  const launchBtn = document.getElementById("searchLaunchBtn");
  const closeBtn = document.getElementById("searchCloseBtn");
  const input = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("searchResults");

  if (!modal || !launchBtn || !closeBtn || !input || !resultsContainer) return;

  function openModal() {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("search-modal-open");
    setTimeout(() => input.focus(), 150);
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("search-modal-open");
    input.value = "";
    resultsContainer.innerHTML = '<div class="search-results-placeholder">Type a query to search...</div>';
  }

  launchBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Search input change handler
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsContainer.innerHTML = '<div class="search-results-placeholder">Type at least 2 characters to search...</div>';
      return;
    }

    performSearch(query, resultsContainer);
  });
}

function highlightText(text, query) {
  if (!text) return "";
  const index = text.toLowerCase().indexOf(query);
  if (index === -1) return text;

  // Highlight only the matching substring
  const original = text.substring(index, index + query.length);
  return text.split(new RegExp(query, 'i')).join(`<mark class="search-highlight">${original}</mark>`);
}

function performSearch(query, container) {
  const matches = {
    people: [],
    projects: [],
    publications: [],
    databases: []
  };

  // 1. Search People
  if (typeof PEOPLE !== "undefined") {
    PEOPLE.forEach(p => {
      const nameMatch = p.name && p.name.toLowerCase().includes(query);
      const roleMatch = p.role && p.role.toLowerCase().includes(query);
      const bioMatch = p.bio && p.bio.toLowerCase().includes(query);
      const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(query));

      if (nameMatch || roleMatch || bioMatch || tagMatch) {
        matches.people.push({
          name: p.name,
          role: p.role,
          bio: p.bio,
          href: `people.html#current`
        });
      }
    });
  }

  // 2. Search Projects
  if (typeof RESEARCH_PROJECTS !== "undefined") {
    // Current projects
    if (RESEARCH_PROJECTS.current) {
      RESEARCH_PROJECTS.current.forEach(p => {
        const titleMatch = p.title && p.title.toLowerCase().includes(query);
        const descMatch = p.desc && p.desc.toLowerCase().includes(query);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(query));

        if (titleMatch || descMatch || tagMatch) {
          matches.projects.push({
            title: p.title,
            desc: p.desc,
            type: "Current Project",
            href: `research.html#current-projects`
          });
        }
      });
    }
    // Previous projects
    if (RESEARCH_PROJECTS.previous) {
      RESEARCH_PROJECTS.previous.forEach(p => {
        const titleMatch = p.title && p.title.toLowerCase().includes(query);
        const descMatch = p.desc && p.desc.toLowerCase().includes(query);
        const tagMatch = p.tags && p.tags.some(t => t.toLowerCase().includes(query));

        if (titleMatch || descMatch || tagMatch) {
          matches.projects.push({
            title: p.title,
            desc: p.desc,
            type: "Previous Project",
            href: `research.html#previous-projects`
          });
        }
      });
    }
  }

  // 3. Search Publications & News
  if (typeof NEWS !== "undefined") {
    NEWS.forEach(n => {
      const titleMatch = n.title && n.title.toLowerCase().includes(query);
      const authorsMatch = n.authors && n.authors.toLowerCase().includes(query);
      const journalMatch = n.journal && n.journal.toLowerCase().includes(query);
      const descMatch = n.desc && n.desc.toLowerCase().includes(query);

      if (titleMatch || authorsMatch || journalMatch || descMatch) {
        const isPub = n.type && (n.type.toLowerCase().includes("pub") || n.type === "Publication");
        matches.publications.push({
          title: n.title,
          authors: n.authors,
          journal: n.journal,
          type: n.type || "News",
          href: isPub ? "publications.html" : "news.html"
        });
      }
    });
  }

  // 4. Search Databases & Tools
  if (typeof DATABASES !== "undefined") {
    DATABASES.forEach(db => {
      const titleMatch = db.title && db.title.toLowerCase().includes(query);
      const descMatch = db.desc && db.desc.toLowerCase().includes(query);
      const tagMatch = db.tags && db.tags.some(t => t.toLowerCase().includes(query));

      if (titleMatch || descMatch || tagMatch) {
        matches.databases.push({
          title: db.title,
          desc: db.desc,
          type: db.type,
          href: "database.html"
        });
      }
    });
  }

  // Calculate total results
  const total = matches.people.length + matches.projects.length + matches.publications.length + matches.databases.length;

  if (total === 0) {
    container.innerHTML = `<div class="search-no-results">No results found for "<strong>${query}</strong>"</div>`;
    return;
  }

  let html = `<div class="search-results-summary">Found ${total} match${total === 1 ? '' : 'es'} for "<strong>${query}</strong>":</div>`;

  // Render Category: People
  if (matches.people.length > 0) {
    html += `
      <div class="search-category">
        <h3 class="search-category-title">People (${matches.people.length})</h3>
        <div class="search-item-list">
          ${matches.people.map(p => `
            <a href="${p.href}" class="search-result-item">
              <div class="search-result-title">${highlightText(p.name, query)}</div>
              <div class="search-result-subtitle">${highlightText(p.role, query)}</div>
              ${p.bio ? `<div class="search-result-snippet">${highlightText(p.bio.slice(0, 140) + '...', query)}</div>` : ''}
            </a>
          `).join("")}
        </div>
      </div>`;
  }

  // Render Category: Projects
  if (matches.projects.length > 0) {
    html += `
      <div class="search-category">
        <h3 class="search-category-title">Projects (${matches.projects.length})</h3>
        <div class="search-item-list">
          ${matches.projects.map(p => `
            <a href="${p.href}" class="search-result-item">
              <div class="search-result-title">${highlightText(p.title, query)} <span class="search-result-badge">${p.type}</span></div>
              <div class="search-result-snippet">${highlightText(p.desc, query)}</div>
            </a>
          `).join("")}
        </div>
      </div>`;
  }

  // Render Category: Publications & News
  if (matches.publications.length > 0) {
    html += `
      <div class="search-category">
        <h3 class="search-category-title">Publications & News (${matches.publications.length})</h3>
        <div class="search-item-list">
          ${matches.publications.map(p => `
            <a href="${p.href}" class="search-result-item">
              <div class="search-result-title">${highlightText(p.title, query)} <span class="search-result-badge">${p.type}</span></div>
              <div class="search-result-subtitle">${highlightText(p.authors, query)} — <em>${highlightText(p.journal, query)}</em></div>
            </a>
          `).join("")}
        </div>
      </div>`;
  }

  // Render Category: Databases & Tools
  if (matches.databases.length > 0) {
    html += `
      <div class="search-category">
        <h3 class="search-category-title">Databases & Tools (${matches.databases.length})</h3>
        <div class="search-item-list">
          ${matches.databases.map(db => `
            <a href="${db.href}" class="search-result-item">
              <div class="search-result-title">${highlightText(db.title, query)} <span class="search-result-badge">${db.type}</span></div>
              <div class="search-result-snippet">${highlightText(db.desc, query)}</div>
            </a>
          `).join("")}
        </div>
      </div>`;
  }

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
