# Applied Water Research Lab — Content Editing Guide

All website text, people profiles, news items, and contact details
are controlled by a **single file**: `content.js`

Open `content.js` in any text editor to make changes.
No HTML or CSS knowledge is required.

---

## File Structure Overview

```
├── index.html          ← Home page
├── people.html         ← Staff directory
├── alumni.html         ← Previous members
├── research.html       ← Research areas + gallery
├── news.html           ← Full news archive
├── contact.html        ← Contact information
├── style.css           ← Visual design (GCCC-style theme)
├── content.js          ← ✅ EDIT THIS FILE for all content changes
├── layout.js           ← Shared header/footer (rarely needs editing)
├── main.js             ← Renders content.js into each page
└── EDIT_CONTENT_GUIDE.md  ← This guide
```

---

## 1. Update Site Title / Institution

```js
var SITE_META = {
  title:       "Applied Water Research Lab",
  institution: "Bureau of Economic Geology · ...",
};
```

---

## 2. Navigation

Edit the `NAV` array to change menu links:

```js
var NAV = [
  { label: "Home", href: "index.html", page: "home" },
  // ...
];
```

---

## 3. Home Page

```js
var HOME = {
  subtitle: "Research, Technology, and Analytics for Water Resource Sustainability",
  mission_bullets: [
    "First bullet...",
    "Second bullet...",
    "Third bullet...",
  ],
  featured_image: "images/gallery/STRAWS.jpg",
  featured_caption: "Caption for the featured image.",
  news_archive_link: { label: "Click here to view all news.", href: "news.html" },
};
```

---

## 4. Feature Tiles (Homepage Quick Links)

```js
var FEATURE_TILES = [
  { label: "Water Resource Sustainability", href: "research.html#area-01", color: "maroon" },
  { label: "STRAWS Dashboard", href: "https://...", external: true, color: "teal" },
];
```

Colors: `"maroon"`, `"orange"`, `"teal"`, or `"purple"`.

---

## 5. Sidebar Promos (Homepage)

```js
var SIDEBAR_PROMOS = [
  {
    title: "Click here for the STRAWS Dashboard...",
    href: "https://txwater.beg.utexas.edu/straws/",
    image: "images/gallery/STRAWS.jpg",
  },
];
```

---

## 6. Update About Section

Edit the `paragraphs` array — each string is one paragraph (HTML allowed):

```js
var ABOUT = {
  paragraphs: [
    `First paragraph text here...`,
    `Second paragraph text here...`,
  ],
};
```

---

## 7. Update Research Focus Areas

```js
var RESEARCH_AREAS = [
  {
    number: "01",
    title:  "Water Resource Sustainability",
    desc:   "Description text here...",
  },
];
```

---

## 8. Add / Edit / Remove Team Members

```js
var PEOPLE = [
  {
    name:  "Bridget Scanlon",
    role:  "Research Professor",
    email: "bridget.scanlon@beg.utexas.edu",
    bio:   "Bio text here...",
    tags:  ["Tag1", "Tag2"],
    photo: "images/BrS.jpg",
    links: [
      { label: "BEG Profile", url: "https://...", icon: "🏛️" },
    ],
  },
];
```

---

## 9. Add / Edit News & Publications

```js
var NEWS = [
  {
    date:    "June 2026",           // optional — shown in GCCC-style news list
    type:    "Publication",
    journal: "Nature Scientific Reports",
    title:   "Paper title here",
    authors: "Author1, Author2",
    desc:    "Optional extra description...",
    link:    "https://doi.org/...",
  },
];
```

---

## 10. Update Contact Details

```js
var CONTACT = {
  institution: "Bureau of Economic Geology<br/>...",
  pi_email:    "bridget.scanlon@beg.utexas.edu",
  podcast:     "The Water Resources Podcast — ...",
  link:        "https://wrp.beg.utexas.edu/",
  location:    "Austin, Texas, USA",
};
```

---

## 11. Home Gallery (Research Page)

```js
var GALLERY = [
  {
    src:     "images/gallery/my_photo.jpg",
    caption: "Short title",
    desc:    "Longer description.",
    link:    "https://...",
  },
];
```

---

## Quick Checklist

| Task | File | What to edit |
|------|------|--------------|
| Change a person's bio | content.js | `PEOPLE[n].bio` |
| Add a new team member | content.js | Add object to `PEOPLE` |
| Add a publication | content.js | Add object to `NEWS` |
| Change home subtitle | content.js | `HOME.subtitle` |
| Change feature tile | content.js | `FEATURE_TILES` |
| Change sidebar promo | content.js | `SIDEBAR_PROMOS` |
| Change contact email | content.js | `CONTACT.pi_email` |
| Change nav link | content.js | `NAV` |

---

## Changing Colors (Advanced)

Open `style.css` and edit the `:root` block at the top:

```css
:root {
  --logo-red: #cc0000;
  --nav-link: #337ab7;
  --accent: #bf5700;
  --tile-maroon: #8b0000;
  --tile-orange: #e67e22;
  --tile-teal: #008080;
  --tile-purple: #8e44ad;
}
```
