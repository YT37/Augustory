// ============================================================
// Central content for the site. Edit copy here in one place.
// ============================================================

export const audiences = [
  {
    slug: "corporates",
    label: "For Corporates",
    short: "Corporates",
    tagline: "Build strategic ventures and invest in innovation.",
    hero: "Turn corporate strategy into new revenue engines.",
    intro:
      "Spin up new ventures outside the constraints of your core business. We help corporate teams identify whitespace, validate fast and launch independent companies with skin in the game.",
    points: [
      {
        title: "Strategic venture building",
        body: "Co-create ventures aligned to your long-term strategy, run by dedicated founding teams rather than internal committees.",
      },
      {
        title: "De-risked innovation",
        body: "Validate demand before heavy capital commitment using staged investment and clear go / no-go gates.",
      },
      {
        title: "Access to a builder network",
        body: "Tap a global bench of entrepreneurs, operators and technical talent ready to execute from day one.",
      },
      {
        title: "Equity upside",
        body: "Hold meaningful ownership in the ventures you back, with structured paths to integration or spin-out.",
      },
    ],
  },
  {
    slug: "universities",
    label: "For Universities",
    short: "Universities",
    tagline: "Create global networks and validate innovations.",
    hero: "Take research from the lab to the market.",
    intro:
      "Give students and faculty real entrepreneurial experience while turning research into validated, investable ventures. We bridge academia and the venture economy.",
    points: [
      {
        title: "Commercialise research",
        body: "Translate IP and breakthroughs into ventures with commercial validation and a clear route to funding.",
      },
      {
        title: "Real-world learning",
        body: "Students build alongside experienced operators, gaining experience no classroom can replicate.",
      },
      {
        title: "Global academic network",
        body: "Connect with partner universities and corporates across continents to share talent and ideas.",
      },
      {
        title: "Validation pipeline",
        body: "Run structured discovery and market testing so promising ideas don't die on the shelf.",
      },
    ],
  },
  {
    slug: "entrepreneurs",
    label: "For Entrepreneurs",
    short: "Entrepreneurs",
    tagline: "Scale your idea with resources and mentorship.",
    hero: "Go from idea to Series A, faster.",
    intro:
      "Build your venture with capital, mentorship and a global network behind you. As an Entrepreneur in Residence you get the resources to move at studio speed.",
    points: [
      {
        title: "Founder resources",
        body: "Capital, infrastructure and shared services so you can focus on building, not back-office work.",
      },
      {
        title: "Hands-on mentorship",
        body: "Work with operators who've scaled companies and can shorten your learning curve dramatically.",
      },
      {
        title: "Warm investor access",
        body: "Plug into a network of institutional and angel investors actively backing studio ventures.",
      },
      {
        title: "Studio speed",
        body: "Proven playbooks take you from concept to market validation in weeks, not months.",
      },
    ],
  },
  {
    slug: "investors",
    label: "For Investors",
    short: "Investors",
    tagline: "De-risk and diversify your investment portfolio.",
    hero: "A new asset class for venture building.",
    intro:
      "Allocate to a diversified, professionally managed portfolio of ventures. The studio model de-risks early-stage investing with structure, support and shared infrastructure.",
    points: [
      {
        title: "Structured de-risking",
        body: "Staged capital and rigorous validation reduce early-stage failure rates across the portfolio.",
      },
      {
        title: "Portfolio diversification",
        body: "Allocate 10–15% of your portfolio across multiple ventures rather than concentrated single bets.",
      },
      {
        title: "Professional backing",
        body: "Every venture is supported by experienced operators, shared services and a global network.",
      },
      {
        title: "Aligned returns",
        body: "Co-invest alongside founders and the studio, with everyone incentivised toward the same outcome.",
      },
    ],
  },
  {
    slug: "professionals",
    label: "For Professionals",
    short: "Professionals",
    tagline: "Access ventures and work part-time to scale.",
    hero: "Lend your expertise to ventures that matter.",
    intro:
      "Join ventures part-time or fractionally, contribute where your expertise creates leverage, and share in the upside of what you help build.",
    points: [
      {
        title: "Fractional roles",
        body: "Contribute your skills to one or more ventures without leaving your current path.",
      },
      {
        title: "Meaningful equity",
        body: "Earn ownership in the ventures you help scale, not just an hourly rate.",
      },
      {
        title: "Curated matching",
        body: "We match your expertise to ventures where it moves the needle most.",
      },
      {
        title: "A builder community",
        body: "Join a worldwide community of operators, founders and specialists building together.",
      },
    ],
  },
];

export const howItWorks = [
  {
    title: "Rapid Prototyping",
    metric: "3–6 months",
    body: "Take ideas from concept to market validation in weeks, not months. Proven processes accelerate every development cycle.",
  },
  {
    title: "De-Risked Capital",
    metric: "10–15%",
    body: "Investors allocate a measured share of their portfolio to venture building, backed by professional support and structured gates.",
  },
  {
    title: "Global Network",
    metric: "200+ Partners",
    body: "Access a worldwide community of founders, mentors, corporate partners and institutional investors.",
  },
];

export const stats = [
  { value: "45+", label: "Successful Ventures" },
  { value: "$250M", label: "Capital Deployed" },
  { value: "15+", label: "Partner Universities" },
  { value: "8x", label: "Average ROI Multiple" },
];

export const testimonials = [
  {
    quote:
      "Augustory helped us identify and incubate three ventures that are now generating significant revenue. The process is efficient and the network is invaluable.",
    name: "Sarah Chen",
    role: "VP Corporate Innovation, Fortune 500 Tech",
  },
  {
    quote:
      "Our students gained real-world entrepreneurial experience while generating research validation. It's a perfect complement to academic learning.",
    name: "Prof. Michael Rodriguez",
    role: "Dean of Innovation, Research University",
  },
  {
    quote:
      "Being an Entrepreneur in Residence accelerated my journey from idea to Series A in 18 months. The mentorship and resources are unmatched.",
    name: "James Park",
    role: "Founder & CEO, EdTech Venture (Series A)",
  },
];

export const ventures = [
  {
    slug: "helios-grid",
    name: "Helios Grid",
    sector: "Climate · Energy",
    stage: "Series A",
    desc: "Distributed solar orchestration software that balances rooftop generation across neighborhood microgrids.",
    founded: "2023",
    hq: "Austin, TX",
    team: "24",
    about:
      "Helios Grid builds the software layer that lets neighborhood-scale solar behave like a single, dispatchable power plant. By orchestrating thousands of rooftop arrays and home batteries in real time, it smooths the duck curve, defers grid upgrades and pays homeowners for the flexibility they provide.",
    highlights: [
      "Orchestrates 40MW of distributed generation across 12 utility territories.",
      "Cuts peak-demand grid stress by up to 30% in pilot neighborhoods.",
      "Partnered with three regional utilities on virtual power plant programs.",
    ],
  },
  {
    slug: "cortex-labs",
    name: "Cortex Labs",
    sector: "Health · AI",
    stage: "Seed",
    desc: "Clinical decision support that turns unstructured patient records into actionable diagnostic signals.",
    founded: "2024",
    hq: "Boston, MA",
    team: "16",
    about:
      "Cortex Labs reads the 80% of clinical data that lives in free-text notes, scanned documents and lab narratives, and surfaces the signals clinicians would otherwise miss. It plugs into existing EHRs and flags risk earlier without adding to documentation burden.",
    highlights: [
      "Deployed across 4 hospital systems covering 1.2M patient records.",
      "Surfaces high-risk cases an average of 9 days earlier than baseline.",
      "HIPAA-compliant, with on-prem and private-cloud deployment options.",
    ],
  },
  {
    slug: "loop-logistics",
    name: "Loop Logistics",
    sector: "Supply Chain",
    stage: "Series A",
    desc: "Last-mile route optimization cutting delivery emissions and cost for mid-market retailers.",
    founded: "2022",
    hq: "Rotterdam, NL",
    team: "31",
    about:
      "Loop Logistics gives mid-market retailers the last-mile intelligence that was once exclusive to logistics giants. Its routing engine continuously rebalances fleets against traffic, demand and carbon targets, turning delivery from a cost center into a competitive edge.",
    highlights: [
      "Reduces last-mile cost per drop by 18% on average.",
      "Cut delivery emissions by 22% across active fleets.",
      "Processes 2M+ route optimizations per week.",
    ],
  },
  {
    slug: "verdant",
    name: "Verdant",
    sector: "AgTech",
    stage: "Seed",
    desc: "Soil-sensor network and forecasting that helps growers cut water use without losing yield.",
    founded: "2023",
    hq: "Fresno, CA",
    team: "14",
    about:
      "Verdant pairs low-cost soil sensors with hyperlocal forecasting so growers irrigate exactly when and where it matters. The result is meaningful water savings on farms that operate on razor-thin margins and increasingly unpredictable weather.",
    highlights: [
      "Reduces irrigation water use by up to 25% with no yield loss.",
      "Network of 9,000+ field sensors across three states.",
      "Forecasting accuracy within 6% of measured soil moisture.",
    ],
  },
  {
    slug: "mintwork",
    name: "Mintwork",
    sector: "Fintech",
    stage: "Pre-seed",
    desc: "Embedded treasury tools that give small businesses enterprise-grade cash management.",
    founded: "2025",
    hq: "Singapore",
    team: "9",
    about:
      "Mintwork brings the treasury tooling of large enterprises to small businesses through a single embedded layer. It automates cash positioning, sweeps idle balances into yield and forecasts runway, so founders spend less time in spreadsheets and more time building.",
    highlights: [
      "Automates cash management for 600+ small businesses.",
      "Surfaces an average of 1.4% additional yield on idle balances.",
      "Integrates with major banks and accounting platforms out of the box.",
    ],
  },
  {
    slug: "atlas-learning",
    name: "Atlas Learning",
    sector: "EdTech",
    stage: "Series A",
    desc: "Adaptive upskilling platform partnering with universities to validate workforce credentials.",
    founded: "2022",
    hq: "London, UK",
    team: "28",
    about:
      "Atlas Learning works with universities and employers to turn upskilling into verifiable, job-ready credentials. Its adaptive engine personalizes each learner's path while giving institutions the data to prove outcomes that actually move careers.",
    highlights: [
      "Partnered with 15+ universities to validate workforce credentials.",
      "Learners complete programs at 2.3x the industry benchmark rate.",
      "Credentials accepted by a network of 200+ hiring partners.",
    ],
  },
];

export const posts = [
  {
    title: "Why the venture studio model is winning",
    category: "Insights",
    date: "May 2026",
    read: "6 min read",
    excerpt:
      "Studios consistently outperform traditional incubators on survival and speed. Here is what the structure gets right.",
  },
  {
    title: "De-risking early-stage capital, explained",
    category: "Investors",
    date: "Apr 2026",
    read: "8 min read",
    excerpt:
      "How staged investment and shared infrastructure change the risk profile of building from zero.",
  },
  {
    title: "From research paper to revenue",
    category: "Universities",
    date: "Mar 2026",
    read: "5 min read",
    excerpt:
      "A practical playbook for turning academic IP into a venture the market actually wants.",
  },
  {
    title: "Building with corporates without the bureaucracy",
    category: "Corporates",
    date: "Feb 2026",
    read: "7 min read",
    excerpt:
      "The operating model that lets corporate ventures move at startup speed while staying aligned to strategy.",
  },
];

export const resourceLinks = [
  { label: "About", to: "/about" },
  { label: "Ventures", to: "/ventures" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
