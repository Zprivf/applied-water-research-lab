/* Applied Water Research Lab — page-aware rendering */

function getInitials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function newsSummary(n) {
  const parts = [];
  if (n.journal) parts.push(n.journal);
  if (n.title) parts.push(`"${n.title}"`);
  if (n.authors) parts.push(`(${n.authors})`);
  if (n.desc) parts.push(n.desc);
  return parts.join(" — ");
}

function renderNewsEntry(n, i) {
  const dates = [
    "June 2026", "May 2026", "April 2026", "March 2026", "February 2026",
    "January 2026", "December 2025", "November 2025", "October 2025", "September 2025",
  ];
  const date = n.date || dates[i] || "";
  const summary = newsSummary(n);
  const linkHtml = n.link && n.link.trim() !== "#"
    ? ` <a class="news-link" href="${n.link.trim()}" target="_blank" rel="noopener">…click to read</a>`
    : "";
  return `
    <div class="news-entry">
      <span class="news-date">${date}:</span> ${summary}${linkHtml}
    </div>`;
}

function renderHome() {
  const mainEl = document.getElementById("homeMain");
  const sidebarEl = document.getElementById("homeSidebar");
  if (!mainEl || typeof HOME === "undefined" || typeof ABOUT === "undefined") return;

  const staffLink = `<a href="people.html">staff page</a>`;

  let homeHtml = `
    <section id="about" class="home-section-wrapper">
      <h4 class="home-subtitle">${HOME.subtitle}</h4>
      ${ABOUT.paragraphs.map(p => `<div class="about-paragraph">${p}</div>`).join("")}
      <p>The AWRL is a multidisciplinary group that includes experts in hydrology, geodesy, coastal modeling, machine learning, and water policy. For more information about the researchers, post-docs, and students who comprise the lab, please see our ${staffLink}.</p>
    </section>

    <section id="themes" class="home-section-wrapper" style="margin-top: 3rem;">
      <h2 class="section-title">Core Research Themes</h2>
      <div class="themes-grid">
        ${ABOUT.themes.map(t => `
          <article class="theme-card ${t.color || ''}" id="${t.id}">
            <div class="theme-icon">${t.icon}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
            <details class="theme-details">
              <summary>See more</summary>
              <ul class="theme-bullets">
                ${t.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            </details>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="home-featured-block">
      <figure class="featured-image">
        <img src="${HOME.featured_image}" alt="${HOME.featured_caption || ""}" loading="lazy"/>
        ${HOME.featured_caption ? `<figcaption style="font-size:0.85rem;padding:0.5rem;color:#444">${HOME.featured_caption}</figcaption>` : ""}
      </figure>
    </section>
  `;

  // Render footer sections (Opportunities, Collaborators, Funding Agencies)
  const hasOpp = typeof OPPORTUNITIES !== "undefined" && OPPORTUNITIES.length > 0;
  const hasCollab = typeof COLLABORATORS !== "undefined" && COLLABORATORS.length > 0;

  if (hasOpp || hasCollab) {
    homeHtml += `<div class="home-footer-grid">`;

    if (hasOpp) {
      homeHtml += `
        <section id="opportunity">
          <h2 class="section-title">Opportunities</h2>
          ${OPPORTUNITIES.map(op => `
            <article class="opportunity-card">
              <h3>${op.title}</h3>
              <p>${op.desc}</p>
              <details class="opportunity-details">
                <summary>See more</summary>
                <div class="opportunity-contact"><strong>Contact:</strong> ${op.contact}</div>
              </details>
            </article>
          `).join("")}
        </section>`;
    }

    if (hasCollab) {
      const uniqueAgencies = [...new Set(COLLABORATORS.map(c => c.agency).filter(Boolean))];
      homeHtml += `
        <section id="collaborators">
          <h2 class="section-title">Collaborators</h2>
          ${COLLABORATORS.map(c => `
            <article class="opportunity-card">
              <h3><a href="${c.url}" target="_blank" rel="noopener">${c.name}</a></h3>
            </article>
          `).join("")}
        </section>
        <section id="funding-agencies-section">
          <h2 class="section-title">Funding Agencies</h2>
          ${uniqueAgencies.map(agency => `
            <article class="opportunity-card">
              <h3>${agency}</h3>
            </article>
          `).join("")}
        </section>`;
    }
    homeHtml += `
      <p class="collaborators-description">
        We work with sister state agencies, federal agencies, and nongovernmental organizations to solve complex water challenges.
      </p>
    </div>`;
  }

  mainEl.innerHTML = homeHtml;

  if (sidebarEl && typeof SIDEBAR_PROMOS !== "undefined") {
    sidebarEl.innerHTML = SIDEBAR_PROMOS.map(p => `
    <div class="sidebar-promo">
      <a href="${p.href}" target="_blank" rel="noopener">${p.title}</a>
        ${p.image ? `<img src="${p.image}" alt="" loading="lazy"/>` : ""}
      </div>
    `).join("");
  }
}

function renderInlineSearch() {
  const el = document.getElementById("inlineSearch");
  if (!el) return;

  el.innerHTML = `
    <div style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem;">
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.8rem; color: #333;">Search Our Research & Database</h2>
        <p style="color: #666;">Looking for something specific? Search our entire lab repository here.</p>
      </div>
      <div class="inline-search-container" style="width: 100%; position: relative;">
        <input type="text" id="inlineSearchInput" placeholder="Enter keywords to search researchers, projects, or publications..." 
               style="width: 100%; padding: 1.5rem 2rem; font-size: 1.25rem; border: 2px solid var(--accent, #2F80ED); border-radius: 50px; outline: none; box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: border-color 0.2s;">
        <div id="inlineSearchResults" style="margin-top: 1.5rem; background: #fff; border-radius: 8px;"></div>
      </div>
    </div>
    `;

  const input = document.getElementById("inlineSearchInput");
  const results = document.getElementById("inlineSearchResults");

  if (input && results) {
    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      if (query.length < 2) { results.innerHTML = ""; return; }
      if (typeof performSearch === "function") performSearch(query, results);
    });
  }
}

function renderFeatureTiles() {
  const el = document.getElementById("featureTiles");
  if (!el || typeof FEATURE_TILES === "undefined") return;

  el.innerHTML = `<div class="feature-tiles-grid">${FEATURE_TILES.map(t => {
    const attrs = t.external
      ? `href="${t.href}" target="_blank" rel="noopener noreferrer"`
      : `href="${t.href}"`;
    return `<a class="feature-tile ${t.color || "maroon"}" ${attrs}>${t.label}</a>`;
  }).join("")
    }</div>`;
}

function renderRecentNews(limit) {
  const el = document.getElementById("recentNews");
  if (!el || typeof NEWS === "undefined") return;

  const items = NEWS.slice(0, limit || 10);
  el.innerHTML = `
    <div class="news-box">
      ${items.map((n, i) => renderNewsEntry(n, i)).join("")}
    </div>
    ${HOME && HOME.news_archive_link ? `
      <p class="news-more"><a href="${HOME.news_archive_link.href}">${HOME.news_archive_link.label}</a></p>
    ` : ""}`
}

function renderPeople() {
  const el = document.getElementById("peopleList");
  if (!el || typeof PEOPLE === "undefined") return;

  el.innerHTML = `<div class="staff-list">${PEOPLE.map(p => {
    const photo = p.photo
      ? `<img class="staff-photo" src="${p.photo}" alt="${p.name}" loading="lazy"/>`
      : `<div class="staff-photo-placeholder">${getInitials(p.name)}</div>`;
    const links = (p.links && p.links.length)
      ? `<div class="staff-links">${p.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
      ).join("")}</div>`
      : "";
    const tags = (p.tags && p.tags.length)
      ? `<div class="staff-tags">${p.tags.map(t => `<span class="staff-tag">${t}</span>`).join("")}</div>`
      : "";
    return `
      <article class="staff-member">
        ${photo}
        <div class="staff-details">
          <div class="staff-name">${p.name}</div>
          <div class="staff-role">${p.role}</div>
          <div class="staff-email"><a href="mailto:${p.email}">${p.email}</a></div>
          ${p.bio ? `<p class="staff-bio">${p.bio}</p>` : ""}
          ${links}
          ${tags}
        </div>
      </article>`;
  }).join("")
    }</div>`;
}

function renderAlumni() {
  const el = document.getElementById("alumniList");
  if (!el || typeof ALUMNI === "undefined") return;

  el.innerHTML = `
    <table class="alumni-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Period</th>
          <th>Current Position</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody>
        ${ALUMNI.map(a => `
          <tr>
            <td data-label="Name">${a.name}</td>
            <td data-label="Role">${a.role}</td>
            <td data-label="Period">${a.period}</td>
            <td data-label="Current">${a.current || "—"}</td>
            <td data-label="Links">${(a.links && a.links.length)
      ? a.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join(", ")
      : "—"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>`;
}

function renderProjects() {
  const curEl = document.getElementById("currentProjectsList");
  const prevEl = document.getElementById("previousProjectsList");
  if (typeof RESEARCH_PROJECTS === "undefined") return;

  if (curEl && RESEARCH_PROJECTS.current) {
    curEl.innerHTML = `<div class="projects-grid">${RESEARCH_PROJECTS.current.map(p => {
      const tags = (p.tags && p.tags.length)
        ? `<div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>`
        : "";
      const link = (p.link && p.link !== "#")
        ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Learn more &rarr;</a>`
        : "";
      return `
        <article class="project-card">
          <div class="project-card-header">
            <h3>${p.title}</h3>
          </div>
          <div class="project-card-body">
            <p>${p.desc}</p>
            ${tags}
            ${link}
          </div>
        </article>`;
    }).join("")
      }</div>`;
  }

  if (prevEl && RESEARCH_PROJECTS.previous) {
    prevEl.innerHTML = `<div class="projects-grid">${RESEARCH_PROJECTS.previous.map(p => {
      const tags = (p.tags && p.tags.length)
        ? `<div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>`
        : "";
      const link = (p.link && p.link !== "#")
        ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">Read paper &rarr;</a>`
        : "";
      return `
        <article class="project-card previous-project-card">
          <div class="project-card-header">
            <h3>${p.title}</h3>
          </div>
          <div class="project-card-body">
            <p>${p.desc}</p>
            ${tags}
            ${link}
          </div>
        </article>`;
    }).join("")
      }</div>`;
  }
}

function renderResearch() {
  const el = document.getElementById("researchList");
  if (!el || typeof RESEARCH_AREAS === "undefined") return;

  el.innerHTML = `<div class="research-list">${RESEARCH_AREAS.map(r => `
    <article class="research-item" id="area-${r.number}">
      <h3><span class="research-number">${r.number}.</span>${r.title}</h3>
      <p>${r.desc}</p>
    </article>
  `).join("")
    }</div>`;
}

function renderGallery() {
  const el = document.getElementById("galleryGrid");
  if (!el || typeof GALLERY === "undefined" || !GALLERY.length) return;

  el.innerHTML = `<div class="gallery-grid">${GALLERY.map(item => {
    const href = (item.link && item.link !== "#") ? item.link : item.src;
    const external = item.link && item.link !== "#";
    return `
      <a class="gallery-item" href="${href}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <img src="${item.src}" alt="${item.caption}" loading="lazy"/>
        <div class="gallery-caption">${item.caption}</div>
        <p class="gallery-desc">${item.desc}</p>
      </a>`;
  }).join("")
    }</div>`;
}

function renderPublications() {
  const el = document.getElementById("publicationsList");
  const filterPanel = document.getElementById("pubFilterPanel");
  if (!el || typeof NEWS === "undefined") return;

  // Filter NEWS array to only include Publications
  const publications = NEWS.filter(item => {
    const type = (item.type || "").toLowerCase();
    return type.includes("pub") || type === "publication";
  });

  // Render search filter input
  if (filterPanel) {
    filterPanel.innerHTML = `
    <div class="pub-search-wrapper" style="margin-bottom: 2rem; max-width: 500px;">
      <input type="text" id="pubSearchInput" placeholder="Filter publications by title, author, or journal..." style="width:100%; padding:0.6rem 0.8rem; border:1px solid var(--border); border-radius:4px; font-size:0.95rem;" />
      </div>
    `;

    const pubInput = document.getElementById("pubSearchInput");
    if (pubInput) {
      pubInput.addEventListener("input", () => {
        const filterText = pubInput.value.toLowerCase();
        const filtered = publications.filter(p => {
          return (p.title && p.title.toLowerCase().includes(filterText)) ||
            (p.authors && p.authors.toLowerCase().includes(filterText)) ||
            (p.journal && p.journal.toLowerCase().includes(filterText));
        });
        renderPubEntries(filtered, el);
      });
    }
  }

  renderPubEntries(publications, el);
}

function renderPubEntries(list, container) {
  if (!list || list.length === 0) {
    container.innerHTML = `<div class="no-publications" style="padding:2rem; text-align:center; color:var(--text-muted)">No matching publications found.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="publications-list" style="display:flex; flex-direction:column; gap:1.5rem;">
      ${list.map(p => {
    const linkHtml = p.link && p.link.trim() !== "#"
      ? ` <a class="pub-link" href="${p.link.trim()}" target="_blank" rel="noopener" style="color:var(--accent); font-weight:600; text-decoration:none; margin-left:0.5rem;">[DOI/Link]</a>`
      : "";
    return `
          <article class="pub-item" style="padding-bottom:1.5rem; border-bottom:1px solid var(--border)">
            <h3 class="pub-title" style="font-size:1.15rem; margin-bottom:0.35rem; font-weight:700; color:var(--text)">${p.title}</h3>
            <div class="pub-authors" style="font-size:0.92rem; color:var(--text-muted); margin-bottom:0.25rem;">${p.authors}</div>
            <div class="pub-meta" style="font-size:0.88rem; color:#666">
              <span class="pub-journal" style="font-style:italic; font-weight:600">${p.journal}</span>
              ${p.type ? ` &middot; <span class="pub-type" style="background:#f2f2f2; padding:1px 6px; border-radius:3px; font-size:0.75rem">${p.type}</span>` : ""}
              ${linkHtml}
            </div>
            ${p.desc ? `<p class="pub-desc" style="font-size:0.9rem; margin-top:0.5rem; color:var(--text-muted)">${p.desc}</p>` : ""}
          </article>
        `;
  }).join("")
    }
    </div>
    `;
}

function renderDatabase() {
  const el = document.getElementById("databaseList");
  if (!el || typeof DATABASES === "undefined") return;

  const ourData = DATABASES.filter(db => db.title.toLowerCase().includes("straws") || db.type.toLowerCase().includes("dashboard"));
  const usefulLinks = DATABASES.filter(db => !ourData.includes(db));

  const renderDbCard = (db) => {
    const tags = (db.tags && db.tags.length)
      ? `<div class="db-tags" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin:0.75rem 0;">${db.tags.map(t => `<span class="db-tag" style="font-size:0.72rem; padding:0.15rem 0.45rem; background:#f0f0f0; border:1px solid var(--border); border-radius:3px;">${t}</span>`).join("")}</div>`
      : "";
    return `
    <article class="db-card" style="border: 1px solid var(--border); border-radius: 6px; padding: 1.5rem; background: #fff; margin-bottom: 1.5rem;">
        <div>
          <span class="db-badge" style="display:inline-block; font-size:0.7rem; font-weight:700; text-transform:uppercase; padding:0.15rem 0.45rem; background:var(--accent); color:#fff; border-radius:3px; margin-bottom:0.75rem;">${db.type}</span>
          <h3 class="db-title" style="font-size: 1.2rem; margin-bottom: 0.5rem; font-weight:700; color:var(--text)">${db.title}</h3>
          <p class="db-desc" style="font-size: 0.92rem; line-height: 1.5; color: var(--text-muted);">${db.desc}</p>
          ${tags}
        </div>
        <a href="${db.link}" target="_blank" rel="noopener noreferrer" class="db-link-btn" style="display:inline-block; margin-top:1rem; color:var(--nav-link); text-decoration:none; font-weight:700; font-size:0.9rem;">Access Database &rarr;</a>
      </article>
    `;
  };

  el.innerHTML = `
    <div class="db-section" id="our-data">
      <h2 class="section-title">Our Data</h2>
      <div class="database-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
        ${ourData.map(renderDbCard).join("")}
      </div>
    </div>
    <div class="db-section" id="useful-links" style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border);">
      <h2 class="section-title">Useful Data Links</h2>
      <div class="database-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
        ${usefulLinks.map(renderDbCard).join("")}
      </div>
    </div>
  `;
}

let newsVisibleCount = 5;
function renderNews(showAll = false) {
  const el = document.getElementById("newsList");
  if (!el || typeof NEWS === "undefined") return;

  if (showAll) newsVisibleCount = NEWS.length;

  const itemsToRender = NEWS.slice(0, newsVisibleCount);
  const hasMore = NEWS.length > newsVisibleCount;

  el.innerHTML = `
    <div class="news-box">
      ${itemsToRender.map((n, i) => renderNewsEntry(n, i)).join("")}
      ${hasMore ? `
        <div style="text-align: center; margin-top: 2rem;">
          <button id="showMoreNewsBtn" style="padding: 0.75rem 2rem; background: var(--accent); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
            Show More (${NEWS.length - newsVisibleCount} remaining)
          </button>
        </div>
      ` : ""
    }
    </div>`;

  const btn = document.getElementById("showMoreNewsBtn");
  if (btn) {
    btn.addEventListener("click", () => renderNews(true));
  }
}

function renderContact() {
  const el = document.getElementById("contactInfo");
  if (!el || typeof CONTACT === "undefined") return;

  el.innerHTML = `
    <div class="contact-block">
      <p><strong>Institution</strong></p>
      <p>${CONTACT.institution}</p>
      <p><strong>Principal Investigator</strong><a href="mailto:${CONTACT.pi_email}">${CONTACT.pi_email}</a></p>
      <p><strong>Location</strong>${CONTACT.location}</p>
      <p><strong>Podcast</strong><a href="${CONTACT.link}" target="_blank" rel="noopener">${CONTACT.podcast}</a></p>
    </div>`;
}

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 400 ? "flex" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  switch (page) {
    case "home":
      renderHome();
      renderFeatureTiles();
      renderInlineSearch();
      renderRecentNews(10);
      initBackToTop();
      break;
    case "people":
      renderPeople();
      renderAlumni();
      break;
    case "research":
      renderProjects();
      renderGallery();
      break;
    case "publications":
      renderPublications();
      break;
    case "database":
      renderDatabase();
      break;
    case "news":
      renderNews();
      break;
    case "contact":
      renderContact();
      break;
  }
});
