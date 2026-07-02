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
  title: "Applied Water Research Lab",
  institution: "Bureau of Economic Geology · Jackson School of Geosciences · UT Austin",
  favicon: "",   // path to favicon if desired
};

// ─────────────────────────────────────────────────────────────
// 1b. NAVIGATION (multi-page)
// ─────────────────────────────────────────────────────────────
var NAV = [
  {
    label: "Home",
    href: "index.html",
    page: "home",
    subsections: [
      { label: "About", href: "index.html#about" },
      { label: "Core Themes", href: "index.html#themes" },
      { label: "Opportunities", href: "index.html#opportunity" },
      { label: "Collaborators & Funding", href: "index.html#collaborators" }
    ]
  },
  {
    label: "People",
    href: "people.html",
    page: "people",
    subsections: [
      { label: "Current", href: "people.html#current" },
      { label: "Previous", href: "people.html#previous" }
    ]
  },
  {
    label: "Research",
    href: "research.html",
    page: "research",
    subsections: [
      { label: "Current Projects", href: "research.html#current-projects" },
      { label: "Previous Projects", href: "research.html#previous-projects" }
    ]
  },
  {
    label: "Datasets",
    href: "database.html",
    page: "database",
    subsections: [
      { label: "Dashboards", href: "database.html#our-data" },
	  { label: "Datasets", href: "database.html#our-data" },
      { label: "Softwares", href: "database.html#useful-links" }
    ]
  },
  { label: "Publications", href: "publications.html", page: "publications" },
  { label: "Podcast", href: "https://wrp.beg.utexas.edu/", external: true },
  { label: "News", href: "news.html", page: "news" },
  { label: "Contact", href: "contact.html", page: "contact" },
  { label: "Bureau", href: "https://www.beg.utexas.edu/", external: true },
];

// ─────────────────────────────────────────────────────────────
// 1c. HOME PAGE
// ─────────────────────────────────────────────────────────────
var HOME = {
  subtitle: "Applied Water Research Lab",
  mission_bullets: [
    "Helping provide solutions to critical water resource problems in Texas and globally.",
    "Distributing actionable data to local, state, and federal agencies, private entities, and communities.",
    "Providing a stable platform for consistent funding and innovative research.",
    "Educating the next generation of students and stakeholders through high-impact mentoring.",
  ],
  featured_image: "images/gallery/STRAWS.jpg",
  featured_caption: "STRAWS Dashboard — monitoring Texas water storage using GRACE satellite observations.",
  news_archive_link: { label: "Click here to view all news and publications.", href: "news.html" },
};

// ─────────────────────────────────────────────────────────────
// 1d. FEATURE TILES (homepage quick links)
// ─────────────────────────────────────────────────────────────
var FEATURE_TILES = [
  { label: "Water Resources", href: "research.html#area-01", color: "maroon" },
  { label: "Water Energy Nexus", href: "research.html#area-04", color: "orange" },
  { label: "Policy Support", href: "research.html#area-03", color: "teal" },
  { label: "Hazards", href: "research.html#area-02", color: "purple" },
];

// ─────────────────────────────────────────────────────────────
// 1e. SIDEBAR PROMOS (homepage)
// ─────────────────────────────────────────────────────────────
var SIDEBAR_PROMOS = [
  {
    title: "Click here for the STRAWS Dashboard — Terrestrial Water Storage Anomaly (TWSA) Data for Texas",
    href: "https://txwater.beg.utexas.edu/straws/",
    image: "images/gallery/STRAWS.jpg",
  },
  {
    title: "For the Water Resources Podcast — expert interviews on water resource challenges, please click here.",
    href: "https://wrp.beg.utexas.edu/",
    image: "images/gallery/WRP.jpg",
  },
];

// ─────────────────────────────────────────────────────────────
// 2. HERO
// ─────────────────────────────────────────────────────────────
var HERO = {
  eyebrow: "Bureau of Economic Geology · Jackson School of Geosciences · UT Austin",
  title_line1: "APPLIED WATER RESEARCH LAB",
  title_line2: "",
  description: "Solving the world's most pressing water challenges through remote sensing, earth system modeling, machine learning, and data analytics.",
  cta_primary: { label: "Explore Research", href: "#research" },
  cta_outline: { label: "Meet the Team", href: "#people" },
  stats: [
    { number: "7+", label: "Researchers" },
    { number: "Sample of", label: "Featured Publications " },
    { number: "∞", label: "Impact" },
  ],
};

// ─────────────────────────────────────────────────────────────
// 3. ABOUT
// ─────────────────────────────────────────────────────────────
var ABOUT = {
  paragraphs: [
    `<strong>Goals</strong>: Innovate new technologies and applied research to deliver solutions to water resource problems in Texas and globally.`,
    `<strong>Impacts</strong>: Delivering data and dashboards, fusing information into usable formats, and providing timely, actionable information to stakeholders. We solve complex problems, provide context for analysis, and mentor the next generation of water scientists.`,
    `<strong>Objectives</strong>: Help provide solutions to critical problems. Distribute data to stakeholders including local, federal, and private agencies, and communities. Provide a stable platform for consistent funding and education.`
  ],
  themes: [
    {
      id: "water-resources",
      title: "Water Resources Management",
      icon: "💧",
      color: "maroon",
      desc: "Our experts address water quantity and quality with an emphasis on groundwater-surface water linkages. As the State Geological Survey, we lead the mapping of natural and managed aquifer recharge (MAR) throughout Texas and the US to address climate extremes.",
      bullets: ["Increasing supplies (brackish groundwater)", "Reducing demands (conservation)", "Storing water (Managed Aquifer Recharge)"]
    },
	
    {
      id: "new-water",
      title: "New Water Supplies",
      icon: "🌊",
      color: "teal",
      desc: "Water resources management generally involves balancing water supplies with demands at a variety of spatiotemporal scales. Increasing water demands, particularly in Texas, underscores the need to develop new water supplies. The proposed Texas Water Fund will apply 50% of the funding to new water supplies in the state. Examples of relevant projects include:",
      bullets: ["Projected municipal water demand", "Brackish groundwater mapping", "Beneficial use of produced water"]
    },
    {
      id: "energy-nexus",
      title: "Water Energy Nexus",
      icon: "⚡",
      color: "purple",
      desc: "Research builds on the Bureau's strengths in both water and energy, focusing on produced water value in the Permian Basin and infrastructure vulnerability.",
      bullets: ["Permian Basin produced water", "Unconventional oil/gas development", "Drought vulnerability of electricity"]
    },
    {
      id: "hazards",
      title: "Hazards",
      icon: "🌪️",
      color: "orange",
      desc: "Numerical modeling of storm surge and compound flooding to protect infrastructure and communities from extreme climate events along the Gulf Coast.",
      bullets: ["Flooding", "Drought","Storm surge modeling","Compound flooding analysis","Infrastructure resilience"]
    }
  ],
  pillars: [
    { icon: "🛰️", label: "Remote Sensing" },
    { icon: "🌊", label: "Coastal Flooding" },
    { icon: "🤖", label: "Machine Learning" },
    { icon: "💧", label: "Water Scarcity" },
    { icon: "🌍", label: "Earth Modeling" },
    { icon: "📡", label: "GRACE Satellite" },
  ],
};

// ─────────────────────────────────────────────────────────────
// 4. RESEARCH AREAS
// ─────────────────────────────────────────────────────────────
var RESEARCH_AREAS = [
  {
    number: "01",
    title: "Water Resource Sustainability",
    desc: "Assessing impacts of climate and human activity on major aquifers and river basins globally using GRACE satellite data, altimetry, and groundwater level monitoring.",
  },
  {
    number: "02",
    title: "Coastal & Oceanic Processes",
    desc: "Numerical modeling of storm surge, compound flooding, and human-environment interactions including desalination impacts on coastal systems.",
  },
  {
    number: "03",
    title: "Geodesy & Sea Level Rise",
    desc: "Probabilistic modeling of sea level rise, climatology, and geodetic measurements to understand long-term changes in Earth's water systems.",
  },
  {
    number: "04",
    title: "Groundwater & Drinking Water",
    desc: "Innovative solutions for water scarcity, drinking water quality, managed aquifer recharge, and evaluation of groundwater recharge processes.",
  },
  {
    number: "05",
    title: "Hydro-Economic Policy",
    desc: "Relating groundwater management in Texas to hydro-economic impacts of pumping — bridging hydrology, policy, and economics for sustainable water governance.",
  },
  {
    number: "06",
    title: "Isotope & Hydrogeochemistry",
    desc: "Surface-groundwater interactions, groundwater vulnerability and sustainability, reservoir management, and isotope hydrology field studies.",
  },
];

// ─────────────────────────────────────────────────────────────
// 5. PEOPLE
//    Fields: name, role, email, bio, tags[]
//    To add a photo: add  photo: "images/yourphoto.jpg"
// ─────────────────────────────────────────────────────────────
var PEOPLE = [
  {
    name: "Bridget Scanlon",
    role: "Principal Investigator · Research Professor",
    email: "bridget.scanlon@beg.utexas.edu",
    bio: "This program addresses sustainability of water resources using remote sensing, global and regional models, and ground-based monitoring data. Much of the research focuses on impacts of climate extremes including floods and droughts, land use, and water use on water resources. Approaches include GRACE satellite data, altimetry, global and regional models, and groundwater level monitoring.",
    tags: ["GRACE", "Groundwater", "Climate Extremes", "Remote Sensing"],
    photo: "images/BrS.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/bridget-scanlon", icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Bridget+Scanlon+hydrology+GRACE+UT+Austin", icon: "🎓" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Bridget-Scanlon", icon: "🔬" },
    ],
  },
     {
    name: "Michael H. Young",
    role: "Research Professor",
    email: "michael.young@beg.utexas.edu",
    bio: "Michael Young has over 35 years of professional experience, from academic research to Federal (regulatory) to private industry, in the general areas of environmental geosciences, hydrology, and soil sciences/physics. He has significant field, laboratory and numerical modeling experience that, taken together, provides a more comprehensive assessment of the processes affecting our environment. From 2010-2020, he was the associate director for environmental research at BEG, coordinating research across the Environment Division. Previously, he worked at the Desert Research Institute (DRI), Nevada, where he served as Acting Executive Director of the Division of Hydrologic Sciences and as Research Professor. He also has broad experience in teaching, student advising, and mentorship. His personal research directions are in vadose zone hydrology, soil science and ecohydrology. Michael has published extensively in the fields of water resources and soil science and is a former Editor for Vadose Zone Journal, a leading publication in unsaturated zone processes. Michael also sits on the Graduate Studies Committee in the Jackson School of Geosciences at UT Austin. He was recently elected as Fellow of the Geological Society of America and Soil Science Society of America..",
    tags: ["Water/energy nexus", "Soil/water/plant interactions and solute transport in arid vadose zones", "Groundwater recharge", "Connections between water resources, landscape development, and human interactions"],
    photo: "images/Michael Young.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/michael-young", icon: "🏛️" },
      { label: "ResearchID", url: "http://www.researcherid.com/rid/J-8009-2012", icon: "🔬" },
    ],
  },
  {
    name: "Wonhyun Lee",
    role: "Research Assistant Professor",
    email: "wonhyun.lee@beg.utexas.edu",
    bio: "Research interests include numerical modeling of coastal and oceanic processes, storm surge, compound flooding, human use and environmental impact (e.g., desalination).",
    tags: ["Coastal Modeling", "Storm Surge", "Compound Flooding", "Desalination"],
    photo: "images/Wlee.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/wonhyun-lee", icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Wonhyun+Lee+storm+surge+coastal+flooding", icon: "🎓" },
      { label: "ORCID", url: "https://orcid.org/0000-0003-1987-6304", icon: "🔗" },
    ],
  },
  {
    name: "Ashraf Rateb",
    role: "Research Assistant Professor",
    email: "ashraf.rateb@beg.utexas.edu",
    bio: "Studies water: when it moves, where it gathers, and the dynamics that govern it. His tools are satellites, ground sensors, models, and probability.",
    tags: ["HydroGeodesy", "Groundwater dynamics", "Hydroclimate extremes", "Terrestrial water storage", "Probabilistic inference"],
    photo: "images/ARateb.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/ashraf-rateb", icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Ashraf+Rateb+GRACE+geodesy+hydrology", icon: "🎓" },
      { label: "github", url: "https://github.com/arateb", icon: "🔬" },
      { label: "Website", url: "https://ashrafrateb.com/", icon: "🔬" },
    ],
  },
  {
    name: "Justin Thompson",
    role: "Research Assistant Professor",
    email: "justin.thompson@beg.utexas.edu",
    bio: "Interests include water resource management and planning; a nexus of hydrology, policy, and economics, focused on relating groundwater management in Texas to hydro-economic impacts of pumping.",
    tags: ["Water Policy", "Hydro-Economics", "Groundwater Management", "Texas Water"],
    photo: "images/JThompson.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/justin-thompson", icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Justin+Thompson+groundwater+economics+Texas", icon: "🎓" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Justin_Thompson3", icon: "🔬" },
    ],
  },
  
   {
    name: "Hassan Dashtian",
    role: "Research Assistant Professor",
    email: "hassan.dashtian@beg.utexas.edu",
    bio: "Soil.",
    tags: ["Soil Mositure", "Data Analytics"],
    photo: "images/Hassan_Dashtian.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/hassan-dashtian", icon: "🏛️" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=Ik5Xt6wAAAAJ&hl=en", icon: "🎓" },
      
    ],
  },
  
       {
    name: "Brian Hunt",
    role: "Research Scientist Associate V",
    email: "brian.hunt@beg.utexas.edu",
    bio: "Brian’s interests include geologic mapping and hydrogeology in central and west Texas. Brian makes detailed geologic maps and map databases for the Bureau since he joined the BEG in 2020. In addition, he has greater than 20 years of experience working on groundwater availability, sustainability, and aquifer management issues in central Texas. Those issues require the integration of a variety of methods and data such as geologic/structure mapping, stratigraphy, geochemistry, water levels, dye tracing, geophysics, flow measurements, aquifer testing, and analytical/numerical modeling.Brian is passionate about geology and hydrogeology and enjoys teaching students, leading field trips, and is a past president of the Austin Geological Society. He has over 100 published articles, maps, reports, and abstracts..",
    tags: ["Geologic and structure mapping", "Aquifer characterization, groundwater availability, and sustainability"],
    photo: "images/Hunt_portrait_2022_200x250.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/brian-hunt", icon: "🏛️" },
     
    ],
  },
  
         {
    name: "Jeffrey G. Paine",
    role: "Research Professor",
    email: "jeff.paine@beg.utexas.edu",
    bio: "Jeff coordinates the Bureau's Near Surface Observatory and conducts coastal, geologic hazards, and near-surface geophysics projects at the Bureau. His principal research interest, geophysical applications in the shallow subsurface, combines an academic background in geophysics and extensive professional experience in coastal and near-surface strata. He specializes in applying borehole, surface, and airborne electromagnetic induction methods and seismic reflection and refraction methods to help solve geological, hydrological, environmental, and engineering problems.Jeff has served as principal investigator in more than 60 studies funded by State, Federal, and regional agencies and has published more than 180 articles, reports, and abstracts. He is a Fellow of the Geological Society of America, a past recipient of the Gold Award from the Environmental and Engineering Geophysical Society (EEGS) and a former president of EEGS and AAPG's Division of Environmental Geosciences..",
    tags: ["Near-surface geophysics ", "Quaternary geology and geomorphology ","Coastal geology",
	"Computer applications in the geological sciences"],
    photo: "images/Jeff Paine.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/jeff-paine", icon: "🏛️" },
     
    ],
  },
  
           {
    name: "Jean-Philippe Nicot",
    role: "Research Professor",
    email: "jp.nicot@beg.utexas.edu",
    bio: "Numerical modeling of multiphase flow and contaminant transport in both the unsaturated and saturated zones.",
    tags: ["Numerical modeling of multiphase flow and contaminant transport in both the unsaturated and saturated zones", "Geochemical modeling and reactive transport ","Water resources management",
	"Risk assessment and risk analysis"],
    photo: "images/Jean-Philippe Nicot.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/jean-philippe-nicot", icon: "🏛️" },
     
    ],
  },
  
  
           {
    name: "Jon Paul Pierre",
    role: "Lead, Texas Soil Observation Network",
    email: "jonpaul.pierre@beg.utexas.edu",
    bio: "Lead, Texas Soil Observation Network.",
    tags: ["Advancing soil moisture monitoring and mesonet systems to improve natural resource management, conservation planning, and climate modeling capabilities  ",
	"Mapping, quantifying, and forecasting land use associated with anthropogenic systems","Altered land reclamation and ecosystem restoration",
	"Groundwater and surface water characterization and interaction"],
    photo: "images/Jon Paul Pierre.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/jonpaul-pierre", icon: "🏛️" },
     
    ],
  },
  
  
  
  {
    name: "Fitsume T. Wolkeba",
    role: "Post Doctoral Researcher",
    email: "fitsume.wolkeba@beg.utexas.edu",
    bio: "Leveraging big data and machine learning to advance large-scale hydrological and water availability modeling. Expert in bridging environmental remote sensing, data assimilation (integration), and numerical modeling to integrate satellite observations into advanced physical models and capture complex water cycle dynamics",
    tags: ["GRACE", "Hybrid Modeling", "Water Security"],
    photo: "images/FWolkeba.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Fitsume+Wolkeba+hydrological+modelling+water+security", icon: "🎓" },
      { label: "ORCID", url: "https://orcid.org/0000-0001-7859-3879", icon: "🔗" },
    ],
  },
  {
    name: "Yiming Zhang",
    role: "Post Doctoral Researcher",
    email: "yiming.zhang@beg.utexas.edu",
    bio: "Research interests include remote sensing and machine learning for water-related hazards, environmental change, infrastructure vulnerability, and community resilience.",
    tags: ["Google Earth Engine", "Planet", "Remote Sensing"],
    photo: "images/yZhang.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Yiming+Zhang+remote+sensing+hydrology+earth+engine", icon: "🎓" },
    ],
  },
  {
    name: "Eminue, Mary",
    role: "Research Engineering/ Scientist Associate II",
    email: "mary.eminue@beg.utexas.edu",
    bio: "My work involves analyzing water data to derive actionable insights and support decision-making on current water issues. I am interested in understanding water availability, hydro-climatologic extremes such as floods and droughts, and contributing to informed solutions for addressing climate and environmental impacts on water resources and natural systems.",
    tags: ["WAMS", "Hydrology", "GIS"],
    photo: "images/Eminue-Mary_200x250.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/mary-eminue", icon: "🎓" },
    ],
  },
  {
    name: "Fleck, Preston",
    role: "RSA III",
    email: "preston.fleck@beg.utexas.edu",
    bio: "",
    tags: ["WAMS", "Groundwater", "policy"],
    photo: "images/preston_fleck200x250.jpg",
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/preston-fleck", icon: "🎓" },
    ],
  },
  {
    name: "Ulatowski, Maria",
    role: "Postdoctoral Fellow",
    email: "maria.ulatowski@beg.utexas.edu",
    bio: "",
    tags: ["Groundwater", "Hydrology", "GIS"],


  },
  {
    name: "Samadi, Aylar",
    role: "Research Engineering/ Scientist Associate III",
    email: "aylar.samadi@beg.utexas.edu",
    bio: "",
    tags: ["Drought", "ML", "flood"],
    links: [
      { label: "BEG Profile", url: "https://www.beg.utexas.edu/people/aylar-samadi", icon: "🎓" },
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
    src: "images/gallery/WRP.jpg",
    type: "jpg",
    caption: "The Water Resources Podcast",
    desc: "Expert interviews on water resource challenges related to climate, hosted by Dr. Bridget Scanlon. A BEG/UT Austin production in partnership with the National Academy of Engineering.",
    link: "https://wrp.beg.utexas.edu/",
  },
  {
    src: "images/gallery/STRAWS.jpg",
    type: "jpg",
    caption: "STRAWS Dashboard",
    desc: "Interactive dashboard monitoring Texas water storage using GRACE satellite observations, tracking Total Water Storage changes for major aquifers and river basins.",
    link: "https://txwater.beg.utexas.edu/straws/",
  },
  {
    src: "images/gallery/Colorado.webp",
    type: "image",
    caption: "Drought Studies",
    desc: "Temporal variations in snow, river discharge, and drought intensity in the Colorado River Basin with implications for future water management.",
    link: "http://doi.org/10.1038/s43247-025-02149-9",
  },
  {
    src: "images/gallery/Rat_AGU_adv.jpg",
    type: "image",
    caption: "GRACE Total Water Storage Studies",
    desc: "Dynamics and couplings of terrestrial water storage extremes from GRACE and GRACE-FO missions during 2002-2024.",
    link: "http://doi.org/10.1029/2025AV001684",
  },
  {
    src: "images/gallery/globalWS.jpg",
    type: "jpg",
    caption: "Global Water Availability",
    desc: "Grid-to-grid comparison of blue water scarcity using GHM (Wolkeba et al., 2024) and remote sensing-based water stress indicators (2002-2023).",
    link: "https://www.sciencedirect.com/science/article/pii/S002216942600377X#f0010",
  },
  {
    src: "images/gallery/Wlee.jpg",
    type: "image",
    caption: "Coastal and Flood Studies",
    desc: "Probabilistic storm surge and flood-inundation modeling of the Texas Gulf Coast using ensemble wind fields and the SFINCS model.",
    link: "https://www.sciencedirect.com/science/article/pii/S0378383925000262?via%3Dihub#fig3",
  },
  {
    src: "images/gallery/Rateb_erl.jpg",
    type: "image",
    caption: "Extreme Events Studies",
    desc: "Global co-occurrence of warm temperature extremes and terrestrial water storage deficits using an event-coincidence framework with GRACE/GRACE-FO data.",
    link: "https://iopscience.iop.org/article/10.1088/1748-9326/adf2be",
  },
];

// ─────────────────────────────────────────────────────────────
// 5c. ALUMNI
//   Fields: name, role, period, current, links[]
// ─────────────────────────────────────────────────────────────
var ALUMNI = [
  {
    name: "John Malito",
    role: "Research Scientist Associate",
    period: "2019 – 2023",
    current: "Senior Hydrologist, USGS",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=John+Malito+oceanographic+modeling+reservoir", icon: "🎓" },
    ],
  },
  {
    name: "Bob Reedy",
    role: "Research Scientist Associate",
    period: "2010 – 2022",
    current: "Water Resources Consultant",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Bob+Reedy+groundwater+drinking+water+Texas+BEG", icon: "🎓" },
    ],
  },
  {
    name: "Tewodros Alemayehu Tesfamichael",
    role: "Visiting Scholar",
    period: "2021 – 2023",
    current: "Researcher, Addis Ababa University",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/scholar?q=Tewodros+Tesfamichael+isotope+hydrology+groundwater", icon: "🎓" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// 6. NEWS & PUBLICATIONS
// ─────────────────────────────────────────────────────────────
var NEWS = [
  {
    type: "Publication",
    journal: "Earth’s Future",
    title: "Rapid Intensiﬁ cation and Relative Sea-Level Rise Amplify Compound Flooding from Hurricanes Harvey and Beryl",
    authors: "Lee, W., Sun, A.Y. and Scanlon, B.R.",
    link: "https://doi.org/10.1029/2025EF007678",   // replace with DOI or URL
  },
  {
    type: "Publication",
    journal: "Environmental Modelling & Software",
    title: "PyFlood: Rapid high-resolution coastal flood mapping with digital elevation model, land cover and water level data",
    authors: "Santos Cruz A, Lee J, Lee W.",
    link: "https://www.sciencedirect.com/science/article/pii/S136481522600157X",
  },
  {
    type: "Bureau of Economic Geology Publication",
    journal: "Field Notes | Bureau of Economic Geology",
    title: "The Team is featured in Field Notes | Bureau of Economic Geology",
    authors: "BEG",
    link: "https://www.beg.utexas.edu/publications/field-notes",   // replace with DOI or URL
  },
  {
    type: "News Exposure",
    journal: "Assistant Professor Dr.Wonhyun talks about AI in flooding to the Hill",
    title: "Google rolls out AI tool to predict flash floods up to 24 hours ahead",
    authors: "Lee, Wonhyun",
    link: "https://thehill.com/video/google-rolls-out-ai-tool-to-predict-flash-floods-up-to-24-hours-ahead/11739303/",   // replace with DOI or URL
  },
  {
    type: "Publication",
    journal: "Earth's Future",
    title: "Freshwater availability in the Mississippi River Basin and adjacent Texas aquifers under human and climate pressures",
    authors: "Rateb, A., Scanlon, B. R., Pokhrel, Y., Shrestha, A., Jia, M., and Peng, B.,",
    link: "http://doi.org/10.1038/s43247-025-02149-9",
  },
  {
    type: "Website",
    journal: "State of Texas Rivers and Aquifers Water Storage (STRAWS)",
    title: "Terrestrial Water Storage Anomaly (TWSA) Data for Texas",
    authors: "Ashraf Rateb, Fitsume Wolkeba, Bridget R. Scanlon, Aaron, & Brent",
    link: "https://txwater.beg.utexas.edu/straws/",   // replace with DOI or URL
  },

  {
    type: "Publication",
    journal: "Communications Earth & Environment",
    title: "Multidecadal drought impacts on the Lower Colorado Basin with implications for future management",
    authors: "Scanlon, B. R., Pool, D. R., Rateb, A., Conway, B., Sorensen, K., Udall, B., and Reedy, R. C.",
    link: "http://doi.org/10.1038/s43247-025-02149-9",
  },
  {
    type: "Conference",
    journal: "American Geophysical Union (AGU) — Louisiana, USA",
    title: "Hydro Analytics Group at AGU",
    authors: "UT Hydro Analytics Team",
    desc: "The water resources group presented research on GRACE, coastal hurricane and remotsensing application for colonia mapping.",
    link: "#",
  },
  {
    type: "Publication",
    journal: "AGU Advances",
    title: "Dynamics and couplings of terrestrial water storage extremes from GRACE and GRACE-FO missions during 2002–2024",
    authors: "Rateb, A., Scanlon, B. R., Pokhrel, Y., and Sun, A",
    link: "http://doi.org/10.1029/2025AV001684",
  },
  {
    type: "Media",
    journal: "The Water Resources Podcast",
    title: "Expert interviews on water resource challenges related to climate",
    authors: "Hosted by Dr. Bridget Scanlon",
    link: "https://wrp.beg.utexas.edu/",
  },
];

// ─────────────────────────────────────────────────────────────
// 7. CONTACT
// ─────────────────────────────────────────────────────────────
var CONTACT = {
  institution: "Bureau of Economic Geology<br/>Jackson School of Geosciences<br/>University of Texas at Austin",
  pi_email: "bridget.scanlon@beg.utexas.edu",
  podcast: "The Water Resources Podcast — hosted by Dr. Bridget Scanlon https://wrp.beg.utexas.edu/",
  link: "https://wrp.beg.utexas.edu/",
  location: "Austin, Texas, USA",
};

// ─────────────────────────────────────────────────────────────
// 8. OPPORTUNITIES (Home Page Subsections)
// ─────────────────────────────────────────────────────────────
var OPPORTUNITIES = [
  {
    title: "We will post opportunities here",
    desc: "We will post opportunities here.",
    contact: "We will post opportunities here."
  },
  {
    title: "We will post opportunities here",
    desc: "We will post opportunities here.",
    contact: "We will post opportunities here."
  },
  {
    title: "We will post opportunities here",
    desc: "We will post opportunities here.",
    contact: "We will post opportunities here."
  }
];

// ─────────────────────────────────────────────────────────────
// 8b. COLLABORATORS & SPONSORS
// ─────────────────────────────────────────────────────────────
var COLLABORATORS = [
  { name: "Bureau of Economic Geology", agency: "University of Texas at Austin", url: "https://www.beg.utexas.edu/" },
  { name: "Jackson School of Geosciences", agency: "University of Texas at Austin", url: "https://www.jsg.utexas.edu/" },
  { name: "Texas Water Development Board", agency: "State of Texas", url: "https://www.twdb.texas.gov/" },
  { name: "National Academy of Engineering", agency: "National Academies", url: "https://www.nae.edu/" }
];

// ─────────────────────────────────────────────────────────────
// 9. PROJECTS (Research Subsections: Current & Previous Projects)
// ─────────────────────────────────────────────────────────────
var RESEARCH_PROJECTS = {
  current: [
    {
      title: "Managed Aquifer Recharge (MAR) & Subsurface Storage",
      desc: "Assessing surplus water supplies and subsurface storage space for MAR throughout the US, with detailed analyses in California, Arizona, and Texas. Investigating flood water use and geochemical issues for sustainable recharge.",
      tags: ["MAR", "Groundwater", "Storage", "Hydrogeochemistry"],
      link: "#"
    },
    {
      title: "New Water Supplies & Municipal Demand",
      desc: "Projects include assessing projected water demand for Texas municipalities (TWDB project), characterizing brackish groundwater resources (Carrizo-Wilcox BRACS), and exploring the beneficial use of produced water.",
      tags: ["New Water", "Brackish", "TWDB", "Municipal"],
      link: "#"
    },
    {
      title: "Water-Energy Nexus: Permian Basin & Data Centers",
      desc: "Assessing the value of produced water in the Permian Basin and evaluating the water-energy requirements for unconventional oil and gas development and modern data centers.",
      tags: ["Energy", "Produced Water", "Oil & Gas", "Data Centers"],
      link: "#"
    },
    {
      title: "Drought Vulnerability of Electricity Generation",
      desc: "Evaluating how multi-decadal drought impacts the reliability of electricity generation in Texas, bridging hydrology and utility infrastructure resilience.",
      tags: ["Drought", "Electricity", "Infrastructure", "Texas"],
      link: "#"
    },
    {
      title: "STRAWS Dashboard (TWSA for Texas)",
      desc: "Monitoring Texas water storage using GRACE satellite observations to track terrestrial water storage anomalies for major aquifers and river basins.",
      tags: ["GRACE", "Remote Sensing", "Dashboard", "Texas"],
      link: "https://txwater.beg.utexas.edu/straws/"
    }
  ],
  previous: [
    {
      title: "Lower Colorado River Basin Drought Studies",
      desc: "An investigation into multidecadal drought impacts on the Colorado River Basin. This study evaluated snowpack variations, reservoir storage trends, and river discharge to improve long-term drought mitigation frameworks.",
      tags: ["Drought", "Colorado River", "Reservoir Management", "Historical Analysis"],
      link: "http://doi.org/10.1038/s43247-025-02149-9"
    },
    {
      title: "Terrestrial Water Storage Deficit and Co-occurring Extremes",
      desc: "Developed an event-coincidence analysis framework to map global co-occurrences of warm temperature anomalies and water storage deficits, analyzing key drivers of hydrologic stress from 2002 to 2024.",
      tags: ["GRACE", "Climate Extremes", "Event Coincidence", "Global Analysis"],
      link: "https://iopscience.iop.org/article/10.1088/1748-9326/adf2be"
    }
  ]
};

// ─────────────────────────────────────────────────────────────
// 10. DATABASES & TOOLS (Publications Subsections: Database)
// ─────────────────────────────────────────────────────────────
var DATABASES = [
  {
    title: "STRAWS Dashboard Data Portal",
    desc: "Access monthly terrestrial water storage anomaly (TWSA) time-series data for major Texas aquifers and river basins. Features CSV data download and interactive plotting tools.",
    type: "Interactive Data Dashboard",
    link: "https://txwater.beg.utexas.edu/straws/",
    tags: ["GRACE", "Texas Aquifers", "Data Download", "Visualizations"]
  },
  {
    title: "Water Resources Podcast Audio Archive",
    desc: "A fully cataloged repository of podcast episodes featuring interviews on groundwater, water policy, climate adaptation, and resource sustainability. Includes transcripts and resources.",
    type: "Media Archive",
    link: "https://wrp.beg.utexas.edu/",
    tags: ["Podcast", "Interviews", "Audio Archive"]
  },
  {
    title: "PyFlood: Coastal Inundation Mapping Library",
    desc: "An open-source Python tool for rapid, high-resolution coastal flood hazard mapping. Takes digital elevation models (DEMs), land cover classifications, and water level files as inputs to map inundation zones.",
    type: "GitHub Codebase / Modeling Tool",
    link: "https://www.sciencedirect.com/science/article/pii/S136481522600157X",
    tags: ["Python Library", "Open Source", "GIS", "Coastal Mapping"]
  }
];
