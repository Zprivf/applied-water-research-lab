# UT Hydro Analytics Website — Content Editing Guide

All website text, people profiles, news items, and contact details
are controlled by a **single file**: `content.js`

Open `content.js` in any text editor to make changes.
No HTML or CSS knowledge is required.

---

## File Structure Overview

```
website/
├── index.html          ← Page structure (rarely needs editing)
├── style.css           ← Visual design (colors, fonts, layout)
├── content.js          ← ✅ EDIT THIS FILE for all content changes
├── main.js             ← Renders content.js into the page
└── EDIT_CONTENT_GUIDE.md  ← This guide
```

---

## 1. Update Site Title / Institution

```js
const SITE_META = {
  title:       "UT Hydro Analytics Research Group",   // ← change title
  institution: "Bureau of Economic Geology · ...",    // ← change institution line
};
```

---

## 2. Update Hero Section

```js
const HERO = {
  eyebrow:     "Bureau of Economic Geology · ...",   // small text above title
  title_line1: "HYDRO ANALYTICS",                    // large glitch title
  title_line2: "RESEARCH GROUP",                     // subtitle line
  description: "Solving the world's ...",            // paragraph below title
  stats: [
    { number: "7+", label: "Researchers" },          // ← edit numbers/labels
    { number: "3",  label: "Publications Featured" },
    { number: "∞",  label: "Impact" },
  ],
};
```

---

## 3. Update About Section

Edit the `paragraphs` array — each string is one paragraph:

```js
const ABOUT = {
  paragraphs: [
    `First paragraph text here...`,
    `Second paragraph text here...`,
    `Third paragraph text here...`,
  ],
  pillars: [
    { icon: "🛰️", label: "Remote Sensing" },   // ← change emoji and label
    { icon: "🌊", label: "Coastal Flooding" },
    // add or remove pillars as needed
  ],
};
```

---

## 4. Update Research Focus Areas

Each card has a number, title, and description:

```js
const RESEARCH_AREAS = [
  {
    number: "01",
    title:  "Water Resource Sustainability",
    desc:   "Description text here...",
  },
  // Add more objects to add more cards
  // Remove objects to remove cards
];
```

---

## 5. Add / Edit / Remove Team Members

Each person is an object in the `PEOPLE` array:

```js
const PEOPLE = [
  {
    name:  "Bridget Scanlon",
    role:  "Research Professor",
    email: "bridget.scanlon@beg.utexas.edu",
    bio:   "This program addresses sustainability of water resources using remote sensing, global and regional models, and ground-based monitoring data. Much of our research focuses on impacts of climate extremes including floods and droughts, land use, and water use on water resources. Approaches used include GRACE satellite data, altimetry, global and regional models, and groundwater level monitoring. Topics include assessing impacts of climate and humans on water resources in major aquifers and river basins globally. Field studies include evaluation of groundwater recharge, monitoring equal hydrologic n and processes affecting nutrients, particularly nitrate.",
    tags:  ["Tag1", "Tag2", "Tag3"],   // research keywords shown as chips
    photo: "iBrS.jpg",  // ← uncomment and add photo path
  },
  // ... more people
];
```

### To add a photo:
1. Place the image file in `website/images/` (create the folder if needed)
2. Add `photo: "images/filename.jpg"` to the person object
3. Recommended size: 200×200 px, square crop

### To remove a person:
Delete their entire `{ ... }` block from the array.

### To reorder people:
Cut and paste the `{ ... }` blocks into the desired order.

---

## 6. Add / Edit News & Publications

```js
const NEWS = [
  {
    type:    "Publication",          // "Publication" | "Conference" | "Media"
    journal: "Nature Scientific Reports",
    title:   "Paper title here",
    authors: "Author1, Author2, & Author3",
    desc:    "Optional extra description...",   // can be omitted
    link:    "https://doi.org/...",             // set to "#" to hide link
  },
  // ... more items
];
```

Badge colors are automatic:
- `"Publication"` → cyan badge
- `"Conference"`  → purple badge
- `"Media"`       → blue badge

---

## 7. Update Contact Details

```js
const CONTACT = {
  institution: "Bureau of Economic Geology<br/>...",  // <br/> = line break
  pi_email:    "bridget.scanlon@beg.utexas.edu",
  podcast:     "The Water Resources Podcast — hosted by Dr. Bridget Scanlon",
  location:    "Austin, Texas, USA",
};
```

---

## Changing Colors (Advanced)

Open `style.css` and edit the `:root` block at the top:

```css
:root {
  --accent:   #00d4ff;   /* main cyan highlight color */
  --accent2:  #0077ff;   /* blue accent */
  --accent3:  #7b2fff;   /* purple accent */
  --bg:       #020b18;   /* page background */
  --text:     #e0f0ff;   /* main text color */
}
```

---

## Quick Checklist for Common Updates

| Task                        | File        | What to edit              |
|-----------------------------|-------------|---------------------------|
| Change a person's bio       | content.js  | `PEOPLE[n].bio`           |
| Add a new team member       | content.js  | Add object to `PEOPLE`    |
| Add a publication           | content.js  | Add object to `NEWS`      |
| Change hero description     | content.js  | `HERO.description`        |
| Update stat numbers         | content.js  | `HERO.stats`              |
| Change contact email        | content.js  | `CONTACT.pi_email`        |
| Change accent color         | style.css   | `--accent` in `:root`     |
| Add a photo to a person     | content.js  | `photo: "images/x.jpg"`   |


---

## 8. Home Gallery (Images & GIFs)

Add or remove media items in the `GALLERY` array in `content.js`:

```js
var GALLERY = [
  {
    src:     "images/gallery/my_photo.jpg",  // path or full URL
    type:    "image",                         // "image" or "gif"
    caption: "Short title",
    desc:    "Longer description shown below the caption.",
  },
  {
    src:     "images/gallery/animation.gif",
    type:    "gif",                           // shows a GIF badge on the card
    caption: "My Animation",
    desc:    "Description of what the GIF shows.",
  },
];
```

- Drop files into `website/images/gallery/`
- Recommended size: 800×500 px
- Click any card to open the full lightbox viewer
- Use arrow keys or the ← → buttons to navigate in the lightbox
- Press Escape to close the lightbox

### To use an external image URL:
```js
src: "https://example.com/path/to/image.jpg",
```
