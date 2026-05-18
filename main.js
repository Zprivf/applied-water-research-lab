/* ============================================================
   UT Hydro Analytics — Main JS
   Reads from content.js and renders all dynamic sections
   ============================================================ */

// ── NAVBAR SCROLL ──────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ── MOBILE NAV TOGGLE ─────────────────────────────────────
document.getElementById("navToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () =>
    document.querySelector(".nav-links").classList.remove("open")
  )
);

// ── PARTICLE CANVAS ───────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx    = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  const COUNT = 60;
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a:  Math.random() * 0.3 + 0.08,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(191,87,0,${p.a})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(191,87,0,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── HERO PROPORTIONAL SCALE ───────────────────────────────
function setHeroScale() {
  const DESIGN_W = 1200;   // px the hero is designed at
  const vw       = window.innerWidth;
  const scale    = vw >= DESIGN_W ? 1 : vw / DESIGN_W;
  document.documentElement.style.setProperty("--hero-scale", scale.toFixed(4));

  // Compensate height: scaled hero is shorter, pull content up
  const hero = document.getElementById("home");
  if (hero) {
    const naturalH = hero.scrollHeight;
    hero.style.marginBottom = scale < 1
      ? `${(scale - 1) * naturalH}px`
      : "0px";
  }
}

// ── HERO CAROUSEL (sketch illustrations) ──────────────────
var HERO_SKETCHES = [
  { src: "images/sketches/grace_satellite.png",   label: "Earth System Modelling"           },
  { src: "images/sketches/deep_learning.png",     label: "Geospatial Machine Learning & AI" },
  { src: "images/sketches/groundwater_model.png", label: "Groundwater Modelling"            },
  { src: "images/sketches/freshwater_tap.png",    label: "Water Availibility Modeling "              },
  { src: "images/sketches/texas_boundary.png",    label: "Extreme Events Analysis"             },
  { src: "images/sketches/river_delta.png",       label: "River Delta Discharge"            },
];

function renderHeroCarousel() {
  const track    = document.getElementById("hcTrack");
  const carousel = document.getElementById("heroCarousel");
  if (!track || !carousel) return;

  const S     = HERO_SKETCHES;
  let current = 0;
  let paused  = false;

  track.innerHTML = [...S, ...S, ...S].map((item) => `
    <div class="hc-item">
      <div class="hc-label">${item.label}</div>
      <div class="hc-screen">
        <div class="hc-bezel">
          <img src="${item.src}" alt="${item.label}" loading="lazy"/>
        </div>
        <div class="hc-stand"></div>
        <div class="hc-base"></div>
      </div>
    </div>`).join("");

  const allItems = track.querySelectorAll(".hc-item");

  function getStep() {
    // Read actual rendered item width + gap from DOM so it works at any zoom
    const first = allItems[0];
    if (!first) return 284;
    const style = getComputedStyle(track);
    const gap   = parseFloat(style.gap) || 24;
    return first.offsetWidth + gap;
  }

  function goTo(idx, animate) {
    const norm    = ((idx % S.length) + S.length) % S.length;
    const realIdx = S.length + norm;
    const step    = getStep();
    const itemW   = allItems[0] ? allItems[0].offsetWidth : 260;
    const offset  = realIdx * step - (carousel.offsetWidth / 2) + (itemW / 2);

    track.style.transition = animate
      ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
      : "none";
    track.style.transform = `translateX(${-offset}px)`;
    allItems.forEach((el, i) => el.classList.toggle("hc-active", i === realIdx));
    current = norm;
  }

  // Wait one frame so CSS has applied fluid widths before measuring
  requestAnimationFrame(() => goTo(0, false));

  setInterval(() => { if (!paused) goTo(current + 1, true); }, 2500);

  carousel.addEventListener("mouseenter", () => { paused = true;  });
  carousel.addEventListener("mouseleave", () => { paused = false; });
  track.addEventListener("click", () => { window.location.hash = "#research"; });

  // Recalculate on resize or zoom
  window.addEventListener("resize", () => goTo(current, false));
}

// ── RENDER GALLERY ────────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid || typeof GALLERY === "undefined" || !GALLERY.length) return;

  grid.innerHTML = GALLERY.map(item => {
    const href    = (item.link && item.link !== "#") ? item.link : null;
    const tag     = href ? "a" : "div";
    const attrs   = href ? `href="${href}" target="_blank" rel="noopener noreferrer"` : "";
    return `
    <${tag} class="gallery-card" ${attrs}>
      <div class="gallery-media">
        <img src="${item.src}" alt="${item.caption}"
             loading="lazy"
             onerror="this.parentElement.classList.add('gallery-placeholder')" />
        ${item.type === 'gif' ? '<span class="gallery-badge">GIF</span>' : ''}
        ${href ? '<span class="gallery-link-icon">↗</span>' : ''}
      </div>
      <div class="gallery-info">
        <div class="gallery-caption">${item.caption}</div>
        <p class="gallery-desc">${item.desc}</p>
      </div>
    </${tag}>`;
  }).join("");
}

// ── LIGHTBOX ──────────────────────────────────────────────
function openLightbox(index) {
  if (typeof GALLERY === "undefined") return;
  const item = GALLERY[index];
  const lb = document.getElementById("lightbox");
  document.getElementById("lb-img").src = item.src;
  document.getElementById("lb-img").alt = item.caption;
  document.getElementById("lb-caption").textContent = item.caption;
  document.getElementById("lb-desc").textContent = item.desc;
  lb.dataset.current = index;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function lbNav(dir) {
  const lb = document.getElementById("lightbox");
  let i = (parseInt(lb.dataset.current) + dir + GALLERY.length) % GALLERY.length;
  openLightbox(i);
}

// ── RENDER RESEARCH ───────────────────────────────────────
function renderResearch() {
  const grid = document.getElementById("researchGrid");
  if (!grid || typeof RESEARCH_AREAS === "undefined") return;
  grid.innerHTML = RESEARCH_AREAS.map(r => `
    <a class="research-card" href="#news">
      <div class="rc-number">${r.number}</div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <span class="rc-link">View Publications →</span>
    </a>
  `).join("");
}

// ── RENDER ABOUT PILLARS ──────────────────────────────────
function renderAbout() {
  const textEl    = document.getElementById("aboutText");
  const pillarsEl = document.getElementById("aboutPillars");
  if (typeof ABOUT === "undefined") return;
  if (textEl) {
    textEl.innerHTML = ABOUT.paragraphs.map(p => `<p>${p}</p>`).join("");
  }
  if (pillarsEl) {
    pillarsEl.innerHTML = ABOUT.pillars.map(p => `
      <div class="pillar">
        <div class="pillar-icon">${p.icon}</div>
        <span>${p.label}</span>
      </div>
    `).join("");
  }
}

// ── RENDER CONTACT ────────────────────────────────────────
function renderContact() {
  const el = document.getElementById("contactInfo");
  if (!el || typeof CONTACT === "undefined") return;
  el.innerHTML = `
    <div class="contact-item">
      <span class="ci-label">Institution</span>
      <span class="ci-value">${CONTACT.institution}</span>
    </div>
    <div class="contact-item">
      <span class="ci-label">PI Contact</span>
      <span class="ci-value"><a class="person-email" href="mailto:${CONTACT.pi_email}">${CONTACT.pi_email}</a></span>
    </div>
    <div class="contact-item">
      <span class="ci-label">Podcast</span>
      <span class="ci-value">
        <a class="person-email" href="${CONTACT.link}" target="_blank" rel="noopener">${CONTACT.podcast}</a>
      </span>
    </div>
  `;
  const mapEl = document.getElementById("mapLocation");
  if (mapEl) mapEl.textContent = CONTACT.location;
}

// ── RENDER ALUMNI ─────────────────────────────────────────
function renderAlumni() {
  const grid = document.getElementById("alumniGrid");
  if (!grid || typeof ALUMNI === "undefined") return;

  grid.innerHTML = ALUMNI.map(a => `
    <div class="alumni-card">
      <div class="alumni-avatar">${a.name.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase()}</div>
      <div class="alumni-info">
        <div class="alumni-name">${a.name}</div>
        <div class="alumni-role">${a.role}</div>
        <div class="alumni-period">📅 ${a.period}</div>
        ${a.current ? `<div class="alumni-current">→ ${a.current}</div>` : ""}
        ${(a.links && a.links.length) ? `
          <div class="person-links" style="margin-top:0.5rem">
            ${a.links.map(l => `
              <a class="person-link-btn" href="${l.url}" target="_blank" rel="noopener" title="${l.label}">
                <span class="plb-icon">${l.icon}</span>
                <span class="plb-label">${l.label}</span>
              </a>`).join("")}
          </div>` : ""}
      </div>
    </div>
  `).join("");
}

// ── RENDER PEOPLE ─────────────────────────────────────────
function getInitials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function renderPeople() {
  const grid = document.getElementById("peopleGrid");
  if (!grid || typeof PEOPLE === "undefined") return;

  grid.innerHTML = PEOPLE.map(p => {
    const linksHtml = (p.links && p.links.length)
      ? `<div class="person-links">
          ${p.links.map(l =>
            `<a class="person-link-btn" href="${l.url}" target="_blank" rel="noopener" title="${l.label}">
              <span class="plb-icon">${l.icon}</span>
              <span class="plb-label">${l.label}</span>
            </a>`).join("")}
        </div>`
      : "";
    return `
    <div class="person-card">
      <div class="person-header">
        <div class="person-avatar">
          ${p.photo ? `<img src="${p.photo}" alt="${p.name}"/>` : getInitials(p.name)}
        </div>
        <div class="person-info">
          <div class="person-name">${p.name}</div>
          <div class="person-role">${p.role}</div>
        </div>
      </div>
      <p class="person-bio">${p.bio}</p>
      <a class="person-email" href="mailto:${p.email}">${p.email}</a>
      ${linksHtml}
      <div class="person-tags">
        ${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}
      </div>
    </div>`;
  }).join("");
}

// ── RENDER NEWS ───────────────────────────────────────────
function badgeClass(type) {
  const map = {
    Publication: "badge-publication",
    Conference:  "badge-conference",
    Media:       "badge-media",
    Website:     "badge-website",
  };
  return map[type] || "badge-publication";
}

function renderNews() {
  const list = document.getElementById("newsList");
  if (!list || typeof NEWS === "undefined") return;

  list.innerHTML = NEWS.map(n => `
    <div class="news-item">
      <span class="news-badge ${badgeClass(n.type)}">${n.type}</span>
      <div>
        <div class="news-journal">${n.journal}</div>
        <div class="news-title">${n.title}</div>
        <div class="news-authors">${n.authors}</div>
        ${n.desc ? `<div class="news-desc">${n.desc}</div>` : ""}
        ${n.link && n.link !== "#" ? `<a class="news-link" href="${n.link}" target="_blank">Read more →</a>` : ""}
      </div>
    </div>
  `).join("");
}

// ── INTERSECTION OBSERVER (fade-in) ───────────────────────
function initFadeIn() {
  const style = document.createElement("style");
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fade-in.visible { opacity: 1; transform: none; }
  `;
  document.head.appendChild(style);

  const targets = document.querySelectorAll(
    ".person-card, .research-card, .news-item, .pillar, .stat-card, .about-text p"
  );
  targets.forEach((el, i) => {
    el.classList.add("fade-in");
    el.style.transitionDelay = `${(i % 6) * 0.07}s`;
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });

  targets.forEach(el => obs.observe(el));
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Inject hero decorations
  if (typeof injectSketches === "function") injectSketches();

  setHeroScale();
  window.addEventListener("resize", setHeroScale);

  renderAbout();
  renderResearch();
  renderHeroCarousel();
  renderGallery();
  renderPeople();
  renderAlumni();
  renderNews();
  renderContact();
  initFadeIn();

  // Lightbox keyboard & backdrop close
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowRight") lbNav(1);
    if (e.key === "ArrowLeft")  lbNav(-1);
  });
  document.getElementById("lightbox")
    .addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
});
