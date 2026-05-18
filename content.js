/**
 * ============================================================
 *  CONTENT CONFIGURATION FILE — UT Hydro Analytics Website
 * ============================================================
 *  Edit this file to update any text, people, or news on the
 *  website WITHOUT touching HTML or CSS.
 *
 *  SECTIONS:
 *    1. SITE_META       — site title, tagline, institution
 *    2. HERO            — hero section text & stats
 *    3. ABOUT           — about section paragraphs & pillars
 *    4. RESEARCH_AREAS  — research focus cards
 *    5. PEOPLE          — team member profiles
 *    6. NEWS            — publications and news items
 *    7. CONTACT         — contact details
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// 1. SITE META
// ─────────────────────────────────────────────────────────────
var SITE_META = {
  title:       "Applied Water Research Lab",
  institution: "Bureau of Economic Geology · Jackson School of Geosciences · UT Austin",
  favicon:     "",   // path to favicon if desired
};

// ─────────────────────────────────────────────────────────────
// 2. HERO
// ─────────────────────────────────────────────────────────────
var HERO = {
  eyebrow:     "Bureau of Economic Geology · Jackson School of Geosciences · UT Austin",
  title_line1: "APPLIED WATER RESEARCH LAB",
  title_line2: "",
  description: "Solving the world's most pressing water challenges through remote sensing, earth system modeling, machine learning, and data analytics.",
  cta_primary:  { label: "Explore Research", href: "#research" },
  cta_outline:  { label: "Meet the Team",    href: "#people"   },
  stats: [
    { number: "7+", label: "Researchers"          },
    { number: "Sample of",  label: "Featured Publications " },
    { number: "∞",  label: "Impact"               },
  ],
};

// ─────────────────────────────────────────────────────────────
// 3. ABOUT
// ─────────────────────────────────────────────────────────────
var ABOUT = {
  paragraphs: [
    `We reside in the <strong>Bureau of Economic Geology</strong>, the state geologic survey
     and a unit of the University of Texas at Austin. Our team of experts specializes in
     conducting research to address the most pressing water-related issues — dedicated to
     solving water problems in Texas, the US, and beyond.`,

    `Our team has extensive experience in <strong>data analytics</strong>,
     <strong>earth system modeling</strong>, <strong>machine learning</strong>, and
     <strong>remote sensing</strong>. We specialize in addressing water scarcity, drinking
     water quality, sea level rise, coastal flooding, groundwater accessibility, and climate
     adaptation strategies.`,

    `Our mission is to collaborate with sister state agencies, federal agencies, and NGOs
     to explore innovative approaches to water research.`,
  ],
  pillars: [
    { icon: "🛰️", label: "Remote Sensing"   },
    { icon: "🌊", label: "Coastal Flooding"  },
    { icon: "🤖", label: "Machine Learning"  },
    { icon: "💧", label: "Water Scarcity"    },
    { icon: "🌍", label: "Earth Modeling"    },
    { icon: "📡", label: "GRACE Satellite"   },
  ],
};

// ─────────────────────────────────────────────────────────────
// 4. RESEARCH AREAS
// ─────────────────────────────────────────────────────────────
var RESEARCH_AREAS = [
  {
    number: "01",
    title:  "Water Resource Sustainability",
    desc:   "Assessing impacts of climate and human activity on major aquifers and river basins globally using GRACE satellite data, altimetry, and groundwater level monitoring.",
  },
  {
    number: "02",
    title:  "Coastal & Oceanic Processes",
    desc:   "Numerical modeling of storm surge, compound flooding, and human-environment interactions including desalination impacts on coastal systems.",
  },
  {
    number: "03",
    title:  "Geodesy & Sea Level Rise",
    desc:   "Probabilistic modeling of sea level rise, climatology, and geodetic measurements to understand long-term changes in Earth's water systems.",
  },
  {
    number: "04",
    title:  "Groundwater & Drinking Water",
    desc:   "Innovative solutions for water scarcity, drinking water quality, managed aquifer recharge, and evaluation of groundwater recharge processes.",
  },
  {
    number: "05",
    title:  "Hydro-Economic Policy",
    desc:   "Relating groundwater management in Texas to hydro-economic impacts of pumping — bridging hydrology, policy, and economics for sustainable water governance.",
  },
  {
    number: "06",
    title:  "Isotope & Hydrogeochemistry",
    desc:   "Surface-groundwater interactions, groundwater vulnerability and sustainability, reservoir management, and isotope hydrology field studies.",
  },
];

// ─────────────────────────────────────────────────────────────
// 5. PEOPLE
//    Fields: name, role, email, bio, tags[]
//    To add a photo: add  photo: "images/yourphoto.jpg"
// ─────────────────────────────────────────────────────────────
var PEOPLE = [
  {
    name:  "Bridget Scanlon",
    role:  "Principal Investigator · Research Professor",
    email: "bridget.scanlon@beg.utexas.edu",
    bio:   "This program addresses sustainability of water resources using remote sensing, global and regional models, and ground-based monitoring data. Much of the research focuses on impacts of climate extremes including floods and droughts, land use, and water use on water resources. Approaches include GRACE satellite data, altimetry, global and regional models, and groundwater level monitoring.",
    tags:  ["GRACE", "Groundwater", "Climate Extremes", "Remote Sensing"],
    photo: "images/BrS.jpg",
    links: [
      { label: "BEG Profile",    url: "https://www.beg.utexas.edu/people/bridget-scanlon",                                    icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Bridget+Scanlon+hydrology+GRACE+UT+Austin",       icon: "🎓" },
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Bridget-Scanlon",                                  icon: "🔬" },
    ],
  },
  {
    name:  "Wonhyun Lee",
    role:  "Research Assistant Professor",
    email: "wonhyun.lee@beg.utexas.edu",
    bio:   "Research interests include numerical modeling of coastal and oceanic processes, storm surge, compound flooding, human use and environmental impact (e.g., desalination).",
    tags:  ["Coastal Modeling", "Storm Surge", "Compound Flooding", "Desalination"],
    photo: "images/Wlee.jpg",
    links: [
      { label: "BEG Profile",    url: "https://www.beg.utexas.edu/people/wonhyun-lee",                                        icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Wonhyun+Lee+storm+surge+coastal+flooding",        icon: "🎓" },
      { label: "ORCID",          url: "https://orcid.org/0000-0003-1987-6304",                                                 icon: "🔗" },
    ],
  },
  {
    name:  "Ashraf Rateb",
    role:  "Research Assistant Professor",
    email: "ashraf.rateb@beg.utexas.edu",
    bio:   "Areas of research interest include geodesy, climatology, sea level rise, and probabilistic modeling.",
    tags:  ["Geodesy", "Sea Level Rise", "Climatology", "Probabilistic Modeling"],
    photo: "images/ARateb.jpg",
    links: [
      { label: "BEG Profile",    url: "https://www.beg.utexas.edu/people/ashraf-rateb",                                       icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Ashraf+Rateb+GRACE+geodesy+hydrology",            icon: "🎓" },
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Ashraf-Rateb",                                    icon: "🔬" },
      { label: "Website",   url: "https://ashrafrateb.com/",                                    icon: "🔬" },
    ],
  },
   {
    name:  "Justin Thompson",
    role:  "Research Assistant Professor",
    email: "justin.thompson@beg.utexas.edu",
    bio:   "Interests include water resource management and planning; a nexus of hydrology, policy, and economics, focused on relating groundwater management in Texas to hydro-economic impacts of pumping.",
    tags:  ["Water Policy", "Hydro-Economics", "Groundwater Management", "Texas Water"],
    photo: "images/JThompson.jpg",
    links: [
      { label: "BEG Profile",    url: "https://www.beg.utexas.edu/people/justin-thompson",                                    icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Justin+Thompson+groundwater+economics+Texas",     icon: "🎓" },
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Justin_Thompson3",                                 icon: "🔬" },
    ],
  },
  {
    name:  "Fitsume T. Wolkeba",
    role:  "Post Doctoral Researcher",
    email: "fitsume.wolkeba@beg.utexas.edu",
    bio:   "Research interests include large scale hydrological modelling, remote sensing, machine learning, water security.",
    tags:  ["GRACE", "Hybrid Modeling", "Water Security"],
    photo: "images/FWolkeba.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Fitsume+Wolkeba+hydrological+modelling+water+security", icon: "🎓" },
      { label: "ORCID",          url: "https://orcid.org/0000-0001-7859-3879",                                                       icon: "🔗" },
    ],
  },
  {
    name:  "Yiming Zhang",
    role:  "Post Doctoral Researcher",
    email: "yiming.zhang@beg.utexas.edu",
    bio:   "Remote sensing applications in hydrology using Google Earth Engine and Planet imagery.",
    tags:  ["Google Earth Engine", "Planet", "Remote Sensing"],
    photo: "images/yZhang.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Yiming+Zhang+remote+sensing+hydrology+earth+engine", icon: "🎓" },
    ],
  },
 
];

// ─────────────────────────────────────────────────────────────
// 5b. HOME GALLERY
//   Each item: { src, type, caption, desc }
//   type: "image" | "gif"
//   src:  path to file e.g. "images/fieldwork.jpg"
//         or a full URL e.g. "https://..."
//   To add more items just copy a block and paste below.
// ─────────────────────────────────────────────────────────────
var GALLERY = [
  {
    src:     "images/gallery/WRP.jpg",
    type:    "jpg",
    caption: "The Water Resources Podcast",
    desc:    "Expert interviews on water resource challenges related to climate, hosted by Dr. Bridget Scanlon. A BEG/UT Austin production in partnership with the National Academy of Engineering.",
    link:    "https://wrp.beg.utexas.edu/",
  },
  {
    src:     "images/gallery/STRAWS.jpg",
    type:    "jpg",
    caption: "STRAWS Dashboard",
    desc:    "Interactive dashboard monitoring Texas water storage using GRACE satellite observations, tracking Total Water Storage changes for major aquifers and river basins.",
    link:    "https://txwater.beg.utexas.edu/straws/",
  },
  {
    src:     "images/gallery/Colorado.webp",
    type:    "image",
    caption: "Drought Studies",
    desc:    "Temporal variations in snow, river discharge, and drought intensity in the Colorado River Basin with implications for future water management.",
    link:    "http://doi.org/10.1038/s43247-025-02149-9",
  },
  {
    src:     "images/gallery/Rat_AGU_adv.jpg",
    type:    "image",
    caption: "GRACE Total Water Storage Studies",
    desc:    "Dynamics and couplings of terrestrial water storage extremes from GRACE and GRACE-FO missions during 2002-2024.",
    link:    "http://doi.org/10.1029/2025AV001684",
  },
  {
    src:     "images/gallery/globalWS.jpg",
    type:    "jpg",
    caption: "Global Water Availability",
    desc:    "Grid-to-grid comparison of blue water scarcity using GHM (Wolkeba et al., 2024) and remote sensing-based water stress indicators (2002-2023).",
    link:    "https://www.sciencedirect.com/science/article/pii/S002216942600377X#f0010",
  },
  {
    src:     "images/gallery/Wlee.jpg",
    type:    "image",
    caption: "Coastal and Flood Studies",
    desc:    "Probabilistic storm surge and flood-inundation modeling of the Texas Gulf Coast using ensemble wind fields and the SFINCS model.",
    link:    "https://www.sciencedirect.com/science/article/pii/S0378383925000262?via%3Dihub#fig3",
  },
  {
    src:     "images/gallery/Rateb_erl.jpg",
    type:    "image",
    caption: "Extreme Events Studies",
    desc:    "Global co-occurrence of warm temperature extremes and terrestrial water storage deficits using an event-coincidence framework with GRACE/GRACE-FO data.",
    link:    "https://iopscience.iop.org/article/10.1088/1748-9326/adf2be",
  },
];

// ─────────────────────────────────────────────────────────────
// 5c. ALUMNI
//   Fields: name, role, period, current, links[]
// ─────────────────────────────────────────────────────────────
var ALUMNI = [
  {
    name:    "John Malito",
    role:    "Research Scientist Associate",
    period:  "2019 – 2023",
    current: "Senior Hydrologist, USGS",
    links:   [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=John+Malito+oceanographic+modeling+reservoir", icon: "🎓" },
    ],
  },
  {
    name:    "Bob Reedy",
    role:    "Research Scientist Associate",
    period:  "2010 – 2022",
    current: "Water Resources Consultant",
    links:   [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Bob+Reedy+groundwater+drinking+water+Texas+BEG", icon: "🎓" },
    ],
  },
  {
    name:    "Tewodros Alemayehu Tesfamichael",
    role:    "Visiting Scholar",
    period:  "2021 – 2023",
    current: "Researcher, Addis Ababa University",
    links:   [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Tewodros+Tesfamichael+isotope+hydrology+groundwater", icon: "🎓" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// 6. NEWS & PUBLICATIONS
// ─────────────────────────────────────────────────────────────
var NEWS = [


   {
    type:    "News Exposure",
    journal: "Assistant Professor Dr.Wonhyun talks about AI in flooding to the Hill",
    title:   "Google rolls out AI tool to predict flash floods up to 24 hours ahead",
    authors: "Lee, Wonhyun",
    link:    "https://thehill.com/video/google-rolls-out-ai-tool-to-predict-flash-floods-up-to-24-hours-ahead/11739303/",   // replace with DOI or URL
  },
  {
    type:    "Publication",
    journal: "Earth's Future",
    title:   "Freshwater availability in the Mississippi River Basin and adjacent Texas aquifers under human and climate pressures",
    authors: "Rateb, A., Scanlon, B. R., Pokhrel, Y., Shrestha, A., Jia, M., and Peng, B.,",
    link:    "http://doi.org/10.1038/s43247-025-02149-9",
  },
   {
    type:    "Website",
    journal: "State of Texas Rivers and Aquifers Water Storage (STRAWS)",
    title:   "Terrestrial Water Storage Anomaly (TWSA) Data for Texas",
    authors: "Ashraf Rateb, Fitsume Wolkeba, Bridget R. Scanlon, Aaron, & Brent",
    link:    "https://txwater.beg.utexas.edu/straws/",   // replace with DOI or URL
  },

  {
    type:    "Publication",
    journal: "Communications Earth & Environment",
    title:   "Multidecadal drought impacts on the Lower Colorado Basin with implications for future management",
    authors: "Scanlon, B. R., Pool, D. R., Rateb, A., Conway, B., Sorensen, K., Udall, B., and Reedy, R. C.",
    link:    "http://doi.org/10.1038/s43247-025-02149-9",
  },
  {
    type:    "Conference",
    journal: "American Geophysical Union (AGU) — Louisiana, USA",
    title:   "Hydro Analytics Group at AGU",
    authors: "UT Hydro Analytics Team",
    desc:    "The water resources group presented research on GRACE, coastal hurricane and remotsensing application for colonia mapping.",
    link:    "#",
  },
  {
    type:    "Publication",
    journal: "AGU Advances",
    title:   "Dynamics and couplings of terrestrial water storage extremes from GRACE and GRACE-FO missions during 2002–2024",
    authors: "Rateb, A., Scanlon, B. R., Pokhrel, Y., and Sun, A",
    link:    "http://doi.org/10.1029/2025AV001684",
  },
  {
    type:    "Media",
    journal: "The Water Resources Podcast",
    title:   "Expert interviews on water resource challenges related to climate",
    authors: "Hosted by Dr. Bridget Scanlon",
    link:    "https://wrp.beg.utexas.edu/",
  },
];

// ─────────────────────────────────────────────────────────────
// 7. CONTACT
// ─────────────────────────────────────────────────────────────
var CONTACT = {
  institution: "Bureau of Economic Geology<br/>Jackson School of Geosciences<br/>University of Texas at Austin",
  pi_email:    "bridget.scanlon@beg.utexas.edu",
  podcast:     "The Water Resources Podcast — hosted by Dr. Bridget Scanlon https://wrp.beg.utexas.edu/",
  link:    "https://wrp.beg.utexas.edu/",
  location:    "Austin, Texas, USA",
};

