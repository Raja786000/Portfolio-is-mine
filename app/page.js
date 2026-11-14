"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Moon,
  Sun,
  Download,
  Code2,
  BarChart3,
  BrainCircuit,
  Sparkles,
  Film,
  Menu,
  X,
  ChevronDown,
  Database,
  Activity,
} from "lucide-react";

const studyTopics = [
  {
    name: "Python",
    slug: "python",
    icon: Code2,
    tag: "Programming",
    summary: "The language I use to turn ideas into useful data tools.",
  },
  {
    name: "Machine Learning",
    slug: "machine-learning",
    icon: BrainCircuit,
    tag: "Intelligence",
    summary: "Models, experiments, and practical prediction workflows.",
  },
  {
    name: "Power BI",
    slug: "power-bi",
    icon: BarChart3,
    tag: "Analytics",
    summary: "Interactive dashboards that make decisions easier to see.",
  },
  {
    name: "SQL",
    slug: "sql",
    icon: Code2,
    tag: "Data",
    summary: "The foundation for exploring, shaping, and trusting data.",
  },
  {
    name: "Excel",
    slug: "excel",
    icon: BarChart3,
    tag: "Productivity",
    summary: "A practical space for fast analysis, formulas, and clean models.",
  },
  {
    name: "Statistics",
    slug: "statistics",
    icon: BrainCircuit,
    tag: "Foundations",
    summary: "The thinking behind confident conclusions from imperfect data.",
  },
];

const movieProject = {
  title: "Movie Recommender System",
  text: "Content-based movie recommendation system built with Python and Streamlit.",
  description:
    "An interactive content-based movie recommendation system built with Python and Streamlit.",
  stack: "Python • Pandas • Streamlit • TMDB API • Machine Learning",
  tags: ["Python", "Pandas", "Streamlit", "TMDB API", "Machine Learning"],
  accent: "01",
  slug: "movie-recommender",
  github: "https://github.com/Raja786000/movie_recommendation",
  liveDemo: "https://movierecommendation-dya5muadz9ne9yjcymj5rr.streamlit.app/",
  projectType: "Machine Learning / Data Science",
  application: "Interactive web application",
  recommendation: "Content-based",
  overview:
    "Choose a movie to see up to ten similar titles, with posters from TMDB.",
  problem:
    "With a large movie collection, choosing what to watch can take time. The app offers similar-movie suggestions based on a title the viewer already likes.",
  solution:
    "A Streamlit interface connects a movie selection to precomputed similarity data, then displays the closest recommendations with poster information from TMDB.",
  howItWorks: [
    "Select a movie in the Streamlit interface.",
    "Find it in the prepared dataset and retrieve its similarity scores.",
    "Sort the scores and select the top ten recommendations.",
    "Use movie IDs to request poster details from TMDB.",
    "Display the recommended titles and available posters.",
  ],
  features: [
    "Movie selection",
    "Content-based recommendations",
    "Top ten recommendations",
    "TMDB poster integration",
    "Streamlit interface",
    "Cached recommendation-data loading",
    "Graceful handling of missing posters",
    "Environment variable / Streamlit Secrets support",
  ],
  technologies: [
    "Python",
    "Pandas",
    "Streamlit",
    "TMDB API",
    "Requests",
    "Pickle",
    "Gzip",
    "python-dotenv",
    "Jupyter Notebook",
  ],
  process: [
    {
      title: "Data Preparation",
      text: "Prepared the movie data and recommendation inputs in the notebook workflow.",
    },
    {
      title: "Recommendation Logic",
      text: "Used a content-based approach with similarity scores for the selected movie.",
    },
    {
      title: "Similarity Data",
      text: "Saved movie data and the compressed similarity matrix for the app to load.",
    },
    {
      title: "Streamlit Interface",
      text: "Built a movie selector and a results view for the recommendations.",
    },
    {
      title: "TMDB Integration",
      text: "Requested poster information using the recommended movies’ IDs.",
    },
    {
      title: "API Key Configuration",
      text: "Read the TMDB key from environment variables or Streamlit Secrets.",
    },
    {
      title: "Deployment",
      text: "Deployed the application with Streamlit Community Cloud.",
    },
  ],
  learned:
    "This project gave me practice with recommendation-system concepts, Pandas data handling, precomputed similarity data, an interactive data application, REST API integration, secret configuration, and deploying a Python app with Streamlit.",
};

const iplProject = {
  title: "IPL Analytics Dashboard",
  text: "Explore IPL team, player, match, batting, and bowling trends across seasons.",
  description:
    "An interactive Power BI dashboard designed to analyze Indian Premier League data across multiple seasons. It provides insights into team performance, player statistics, match results, batting and bowling trends, and season-wise comparisons through interactive visualizations.",
  stack: "Microsoft Power BI • DAX • Power Query • Excel • Data Analytics • Data Visualization",
  tags: [
    "Microsoft Power BI",
    "DAX",
    "Power Query",
    "Excel",
    "Data Analytics",
    "Data Visualization",
  ],
  accent: "02",
  slug: "ipl-analytics",
  github: "https://github.com/Raja786000/PowerBi_IPL_DashBoard",
  liveDemo:
    "https://app.powerbi.com/view?r=eyJrIjoiY2JjMTExY2QtYTk4MS00NGVjLThiZGUtODVjNTAxNDk5NWE5IiwidCI6IjA2ODkxNTc3LTNkYmMtNGJhMi1hYjBiLTVkM2UzZTg5ZTVlYyJ9",
  features: [
    "IPL overview and season statistics",
    "Team-wise performance analysis",
    "Player profile and statistics",
    "Match and venue analysis",
    "Batting and bowling insights",
    "Interactive filtering and visualizations",
    "Season-wise performance comparisons",
  ],
  technologies: [
    "Microsoft Power BI",
    "DAX",
    "Power Query",
    "Excel",
    "Data Analytics",
    "Data Visualization",
  ],
};

const sqlProject = {
  title: "SQL Data Analytics Project",
  text: "A comprehensive SQL analytics project covering data exploration, business metric analysis, trend analysis, customer segmentation, and reporting using advanced SQL techniques.",
  description:
    "An end-to-end SQL Data Analytics project focused on exploring structured datasets, understanding business metrics, identifying patterns, and generating meaningful insights through Exploratory Data Analysis and Advanced Data Analytics.",
  tags: [
    "SQL",
    "CSV",
    "Data Analytics",
    "Exploratory Data Analysis",
    "CTEs",
    "Window Functions",
    "Subqueries",
    "Data Reporting",
  ],
  accent: "03",
  slug: "sql-data-analytics",
  github: "https://github.com/Raja786000/DataAnalyticsSql-Project",
  projectType: "Data Analytics / SQL",
  application: "SQL-Based Analytical Project",
  analysis: "EDA & Advanced Analytics",
  technology: "SQL & Relational Databases",
  overview:
    "This project focuses on using SQL to explore structured datasets and extract meaningful information from data. The analysis moves from database exploration into ranking, trend analysis, cumulative calculations, performance comparisons, segmentation, and reporting to support data-driven business decisions.",
  problem:
    "Raw datasets can hold large amounts of information without making useful business insights obvious. Systematic exploration is needed to understand structures, dimensions, measures, trends, comparisons, category contributions, and reporting needs.",
  problemPoints: [
    "Understand database structures and relationships.",
    "Identify important dimensions and measures.",
    "Discover patterns and trends over time.",
    "Compare business performance.",
    "Identify top-performing and underperforming categories.",
    "Understand category contributions to overall metrics.",
    "Convert raw data into useful reports.",
  ],
  solution:
    "I organized the analysis into Exploratory Data Analysis and Advanced Data Analytics. I first explored the database structure, dimensions, dates, and measures, then applied SQL techniques to analyze trends, calculate cumulative metrics, compare performance, rank entities, segment data, and create reporting queries.",
  howItWorks: [
    ["Database Exploration", "Inspect the database, available tables, columns, and data structure."],
    ["Dimensions Exploration", "Explore categorical columns and identify distinct values."],
    ["Date Exploration", "Analyze date ranges and understand the time coverage of the dataset."],
    ["Measures Exploration", "Calculate key metrics using SUM, AVG, MIN, MAX, and COUNT."],
    ["Magnitude & Ranking", "Compare metrics across dimensions and identify Top-N and Bottom-N results."],
    ["Change-Over-Time Analysis", "Analyze how business metrics change across different time periods."],
    ["Cumulative Analysis", "Calculate running totals and cumulative metrics using SQL window functions."],
    ["Performance Analysis", "Compare current performance against averages, targets, or previous periods."],
    ["Part-to-Whole Analysis", "Calculate percentage contributions of individual categories to overall metrics."],
    ["Data Segmentation", "Group records into meaningful categories using conditional SQL logic."],
    ["Reporting", "Organize analytical results into structured reporting queries."],
  ],
  features: [
    "Database Exploration",
    "Dimension Analysis",
    "Date Analysis",
    "Measures Exploration",
    "Magnitude Analysis",
    "Top-N / Bottom-N Ranking",
    "Change-Over-Time Trends",
    "Cumulative Analysis",
    "Performance Analysis",
    "Part-to-Whole Analysis",
    "Data Segmentation",
    "SQL Reporting",
  ],
  technologies: ["SQL"],
  dataFormats: ["CSV"],
  sqlTechniques: [
    "SELECT and WHERE",
    "GROUP BY and HAVING",
    "Aggregate Functions",
    "DISTINCT",
    "CASE WHEN",
    "Subqueries",
    "Common Table Expressions (CTEs)",
    "Window Functions",
    "Ranking Functions",
    "Date Functions",
    "Running Totals",
    "Percentage Calculations",
  ],
  process: [
    { title: "Dataset Preparation", text: "Organizing the available CSV datasets for database import." },
    { title: "Database Setup", text: "Preparing the relational database and understanding the available tables and schema." },
    { title: "Exploratory Analysis", text: "Investigating dimensions, dates, measures, and database structure." },
    { title: "SQL Query Development", text: "Writing analytical queries to answer different business questions." },
    { title: "Advanced Analytics", text: "Applying CTEs, window functions, ranking, cumulative calculations, and conditional logic where appropriate." },
    { title: "Business Analysis", text: "Interpreting analytical results and identifying meaningful patterns." },
    { title: "Reporting", text: "Organizing the final analytical queries into a structured reporting workflow." },
  ],
  learned: [
    "Writing structured and reusable SQL queries.",
    "Understanding relational database structures.",
    "Exploring and analyzing real-world datasets.",
    "Using aggregate functions for business metrics.",
    "Applying CTEs and subqueries to organize complex queries.",
    "Using window functions for ranking and cumulative calculations.",
    "Performing time-based and performance analysis.",
    "Segmenting data using conditional SQL logic.",
    "Translating query results into meaningful analytical insights.",
    "Structuring an end-to-end data analytics workflow.",
  ],
};

const projects = [movieProject, iplProject, sqlProject];
const showcaseProjects = [
  {
    ...movieProject,
    previewType: "illustration",
    description:
      "Content-based movie recommendations built with Python and Streamlit.",
    tags: ["Python", "Pandas", "Streamlit", "TMDB API", "Machine Learning"],
  },
  {
    title: "Fake News Detector",
    slug: "fake-news-detector",
    description:
      "Classifies a news title or article as real or fake using TF-IDF and Logistic Regression.",
    tags: ["Python", "Flask", "Scikit-learn", "TF-IDF"],
    github: "https://github.com/Raja786000/Fake-News-Detector",
    image:
      "https://raw.githubusercontent.com/Raja786000/Fake-News-Detector/main/Result.PNG",
    imageAlt: "Fake News Detector result screen from the project repository",
    imageCaption: "Application result",
  },
  {
    title: "Construction Intelligence Hub",
    slug: "construction-intelligence-hub",
    description:
      "A construction-photo inspection app using prototype computer-vision checks for common defects.",
    tags: ["Python", "React", "FastAPI", "OpenCV"],
    github: "https://github.com/Raja786000/Ai-agent-quality-inspection",
    image:
      "https://raw.githubusercontent.com/Raja786000/Ai-agent-quality-inspection/main/sample_images/01_cracked_wall.jpg",
    imageAlt: "Cracked wall sample image included with the inspection project",
    imageCaption: "Sample inspection input",
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ number, children }) {
  return (
    <div className="section-title">
      <span>{number}</span>
      <h2>{children}</h2>
      <i />
    </div>
  );
}

function MoviePreview({ compact = false }) {
  return (
    <div
      className={`movie-preview${compact ? " movie-preview-compact" : ""}`}
      role="img"
      aria-label="Illustrative preview of a movie recommendation interface"
    >
      <div className="movie-preview-bar">
        <span>RECOMMENDER WORKSPACE</span>
        <span>STREAMLIT APP</span>
      </div>
      <div className="movie-preview-selection">
        <div>
          <small>SELECT A MOVIE</small>
          <strong>Choose from the movie collection</strong>
          <span className="movie-preview-select">
            Search or choose a title <ChevronDown />
          </span>
        </div>
        <span className="movie-preview-mark">
          <Sparkles />
        </span>
      </div>
      <div className="movie-preview-results">
        <div className="movie-preview-label">
          <span>SIMILAR MOVIES</span>
          <span>TOP RECOMMENDATIONS</span>
        </div>
        <div className="movie-preview-posters">
          {["01", "02", "03", "04", "05"].map((number, index) => (
            <div
              className={`movie-preview-poster poster-tone-${index + 1}`}
              key={number}
            >
              <span>{number}</span>
              <i />
              <small>RECOMMENDED</small>
            </div>
          ))}
        </div>
      </div>
      <span className="movie-preview-caption">
        ILLUSTRATIVE INTERFACE PREVIEW
      </span>
    </div>
  );
}

function IplPreview() {
  return (
    <div
      className="ipl-preview"
      role="img"
      aria-label="Illustrative IPL analytics dashboard thumbnail with season KPIs and a team performance chart"
    >
      <div className="ipl-preview-topline">
        <span>INDIAN PREMIER LEAGUE</span>
        <span>POWER BI ANALYTICS</span>
      </div>
      <div className="ipl-preview-heading">
        <strong>SEASON INSIGHTS</strong>
        <span>ALL SEASONS <i /></span>
      </div>
      <div className="ipl-preview-content">
        <div className="ipl-preview-chart" aria-hidden="true">
          <div className="ipl-chart-grid"><i /><i /><i /><i /></div>
          <div className="ipl-chart-bars">
            {[42, 68, 51, 82, 59, 96, 73].map((height, index) => (
              <i key={index} style={{ "--bar-height": `${height}%` }} />
            ))}
          </div>
          <span>TEAM PERFORMANCE</span>
        </div>
        <div className="ipl-preview-kpis">
          <div><small>MATCHES</small><strong>ALL</strong></div>
          <div><small>SEASONS</small><strong>IPL</strong></div>
          <div className="ipl-kpi-highlight"><small>INSIGHTS</small><BarChart3 /></div>
        </div>
      </div>
      <div className="ipl-preview-footer"><span>TEAMS</span><span>PLAYERS</span><span>VENUES</span></div>
    </div>
  );
}

function SqlPreview() {
  return (
    <div
      className="sql-preview"
      role="img"
      aria-label="Custom SQL analytics preview with a query editor, database tables, and trend chart"
    >
      <div className="sql-preview-topline">
        <span>DATA ANALYTICS</span>
        <span>QUERY WORKSPACE</span>
      </div>
      <div className="sql-preview-content">
        <div className="sql-preview-editor">
          <div className="sql-preview-editor-bar">
            <i /><i /><i /><span>analysis.sql</span>
          </div>
          <pre><b>SELECT</b> category,</pre>
          <pre>       <em>SUM</em>(metric) <b>AS</b> total</pre>
          <pre><b>FROM</b> dataset</pre>
          <pre><b>GROUP BY</b> category</pre>
          <pre><b>ORDER BY</b> total <em>DESC</em>;</pre>
        </div>
        <div className="sql-preview-visuals">
          <div className="sql-preview-database"><Database /><span>RELATIONAL<br />DATA</span></div>
          <div className="sql-preview-chart">
            <div className="sql-preview-chart-grid"><i /><i /><i /></div>
            <div className="sql-preview-bars">{[35, 57, 45, 80, 63, 94].map((height, index) => <i key={index} style={{ "--bar-height": `${height}%` }} />)}</div>
            <Activity />
          </div>
        </div>
      </div>
      <div className="sql-preview-footer"><span>EXPLORATION</span><span>AGGREGATION</span><span>INSIGHTS</span></div>
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("raja-theme") !== "light";
  });
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });
  const [active, setActive] = useState("home");
  const [typedText, setTypedText] = useState("builds with data.");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const orbX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const orbY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const touchQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsTouchDevice(touchQuery.matches);
    const saved = window.localStorage.getItem("raja-theme");
    if (saved) setDark(saved === "dark");
    const sections = [
      "home",
      "about",
      "study",
      "showcase",
      "projects",
      "contact",
    ];
    let observer;
    const observeSections = () => {
      observer?.disconnect();
      const marker = Math.round(window.innerHeight * 0.35);
      const topMargin = Math.round(window.innerHeight * 0.3);
      const bottomMargin = Math.round(window.innerHeight * 0.55);
      observer = new IntersectionObserver(
        () => {
          const currentSection = sections.find((id) => {
            const element = document.getElementById(id);
            if (!element) return false;
            const bounds = element.getBoundingClientRect();
            return bounds.top <= marker && bounds.bottom > marker;
          });
          if (currentSection) {
            setActive(currentSection);
          }
        },
        {
          rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
          threshold: 0,
        },
      );
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    };

    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches)
      return undefined;
    const phrases = [
      "builds with data.",
      "learns with purpose.",
      "ships useful ideas.",
    ];
    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = true;
    const timer = window.setInterval(() => {
      const phrase = phrases[phraseIndex];
      characterIndex += deleting ? -1 : 1;
      setTypedText(phrase.slice(0, characterIndex));
      if (characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      if (characterIndex === phrases[phraseIndex].length) deleting = true;
    }, 115);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("raja-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    const modal = document.querySelector(".project-modal");
    modal?.querySelector(".modal-close")?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
      if (event.key !== "Tab" || !modal) return;
      const focusable = [
        ...modal.querySelectorAll("a[href], button:not([disabled])"),
      ];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [selectedProject]);

  const nav = ["home", "about", "study", "showcase", "projects", "contact"];
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };
  const moveOrb = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    orbX.set((event.clientX - bounds.left - bounds.width / 2) * 0.16);
    orbY.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
  };

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise" />

      <aside className="sidebar">
        <div>
          <a className="brand" href="#home" onClick={() => go("home")}>
            <span>RB</span>
            <div>
              <strong>Raja Babu</strong>
              <small>Data • ML • AI</small>
            </div>
          </a>
          <div className="status">
            <span /> Available for opportunities
          </div>
        </div>
        <nav>
          {nav.map((id, i) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => go(id)}
            >
              <span>0{i + 1}</span>
              {id === "study" ? "Study Hub" : id}
            </button>
          ))}
        </nav>
        <div className="socials">
          <a
            href="https://github.com/Raja786000"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/raja-babu-34a871222/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </div>
      </aside>

      <header className="mobile-header">
        <a className="brand" href="#home">
          <span>RB</span>
          <div>
            <strong>Raja Babu</strong>
            <small>Data • ML • AI</small>
          </div>
        </a>
        <div className="mobile-actions">
          <button
            className="icon-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
          <button
            className="icon-btn"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {nav.map((id) => (
              <button key={id} onClick={() => go(id)}>
                {id === "study" ? "Study Hub" : id}
                <ArrowUpRight />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="theme-toggle"
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun /> : <Moon />}
        <span>{dark ? "Light" : "Dark"}</span>
      </button>

      <div className="content">
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">
                <span /> B.Tech CSE • Data & AI
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Raja <em>Babu</em>
                <br />
                <span>
                  {typedText}
                  <b className="typing-cursor">|</b>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-text">
                Exploring the world of Data Analytics, Machine Learning, and AI
                through real-world projects. Passionate about turning complex
                data into actionable insights and continuously learning new
                technologies.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="hero-actions">
                <a className="primary-btn" href="#projects">
                  Explore projects <ArrowUpRight />
                </a>
                <a
                  className="secondary-btn"
                  href="/assets/RajaResumeDS.pdf"
                  target="_blank"
                >
                  Resume <Download />
                </a>
              </div>
            </Reveal>
          </div>
          <motion.div
            className="hero-orb"
            style={{ x: orbX, y: orbY }}
            animate={isTouchDevice ? undefined : { rotate: [0, 2, 0] }}
            transition={
              isTouchDevice
                ? undefined
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
            onMouseMove={isTouchDevice ? undefined : moveOrb}
          >
            <div className="orb-core">
              <span>RB</span>
            </div>
            <div className="orb-ring ring-a" />
            <div className="orb-ring ring-b" />
            <div className="orb-ring ring-c" />
          </motion.div>
          <motion.button
            className="scroll-cue"
            onClick={() => go("about")}
            animate={isTouchDevice ? undefined : { y: [0, 8, 0] }}
            transition={
              isTouchDevice ? undefined : { duration: 2, repeat: Infinity }
            }
          >
            <span>Scroll to explore</span>
            <ChevronDown />
          </motion.button>
        </section>

        <section id="about" className="section-pad">
          <Reveal>
            <SectionTitle number="01">About</SectionTitle>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="about-card">
              <div className="about-mark">
                RB<span>•</span>
              </div>
              <p>
                I'm a fourth-year B.Tech Computer Science and Engineering
                student with a strong interest in{" "}
                <b>
                  Data Analytics, Data Science, and Artificial Intelligence.
                </b>{" "}
                I enjoy working with Python, SQL, Power BI, Excel, and Machine
                Learning to analyze data, build predictive models, and create
                meaningful insights. I'm continuously improving my technical
                skills through projects, internships, and hands-on learning
                while preparing for a career in the data industry.
              </p>
              <div className="about-line" />
            </div>
          </Reveal>
        </section>

        <section id="study" className="section-pad">
          <Reveal>
            <SectionTitle number="02">Study Hub</SectionTitle>
          </Reveal>
          <p className="section-intro">
            A growing shelf of the tools and ideas I keep studying through
            projects.
          </p>
          <div className="skills-grid">
            {studyTopics.map(({ name, slug, icon: Icon, tag, summary }, i) => (
              <Reveal key={name} delay={i * 0.07}>
                <Link href={`/study/${slug}`} className="skill-card">
                  <div className="skill-icon">
                    <Icon />
                  </div>
                  <span>{tag}</span>
                  <h3>{name}</h3>
                  <p>{summary}</p>
                  <div className="card-arrow">
                    <ArrowUpRight />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="showcase" className="section-pad showcase-section">
          <Reveal>
            <SectionTitle number="03">Showcase</SectionTitle>
          </Reveal>
          <p className="section-intro showcase-intro">
            A few selected projects I want to highlight.
          </p>
          <div className="showcase-project-grid">
            {showcaseProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article
                  className={`showcase-project-card ${index === 0 ? "showcase-project-featured" : "showcase-project-secondary"}`}
                >
                  <div className="showcase-card-image">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                        />
                        <span>{project.imageCaption}</span>
                      </>
                    ) : (
                      <div
                        className="showcase-movie-art"
                        role="img"
                        aria-label="Illustrative poster-style artwork for Movie Recommender System, not an application screenshot"
                      >
                        <div className="movie-art-orbit">
                          <Film />
                        </div>
                        <div className="movie-art-copy">
                          <span>CONTENT-BASED DISCOVERY</span>
                          <strong>
                            Find your
                            <br />
                            next film.
                          </strong>
                          <small>DATA · SIMILARITY · POSTERS</small>
                        </div>
                        <i />
                      </div>
                    )}
                  </div>
                  <div className="showcase-card-content">
                    <span className="story-index">
                      {index === 0
                        ? "FEATURED PROJECT"
                        : `SELECTED PROJECT / 0${index + 1}`}
                    </span>
                    <h3>{project.title}</h3>
                    <p className="showcase-card-summary">
                      {project.description}
                    </p>
                    <div className="tech-tags showcase-tags">
                      {project.tags.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    <div className="showcase-card-actions">
                      {project.liveDemo && (
                        <a
                          className="primary-btn"
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ArrowUpRight />
                        </a>
                      )}
                      <a
                        className={
                          project.liveDemo ? "secondary-btn" : "primary-btn"
                        }
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github /> View on GitHub <ArrowUpRight />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section-pad">
          <Reveal>
            <SectionTitle number="04">Projects</SectionTitle>
          </Reveal>
          <div className="projects-list">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.09}>
                <div className="project-card-wrap">
                  <motion.button
                    className="project-card"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -5 }}
                    aria-label={`Open details for ${project.title}`}
                  >
                    <div
                      className={`project-thumb${project.slug === "movie-recommender" ? " project-thumb-movie" : project.slug === "ipl-analytics" ? " project-thumb-ipl" : ""}`}>
                      {project.slug === "movie-recommender" ? (
                        <MoviePreview compact />
                      ) : project.slug === "ipl-analytics" ? (
                        <IplPreview />
                      ) : project.slug === "sql-data-analytics" ? (
                        <SqlPreview />
                      ) : (
                        <>
                          <span>PROJECT {project.accent}</span>
                          <i />
                        </>
                      )}
                    </div>
                    <div className="project-info">
                      <span>Project {project.accent}</span>
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>
                      <div className="project-tags">
                        {(project.tags || project.stack.split(" • ")).map(
                          (tag) => (
                            <span key={tag}>{tag}</span>
                          ),
                        )}
                      </div>
                    </div>
                    <ArrowUpRight className="project-open-icon" />
                  </motion.button>
                  {(project.liveDemo || project.github) && (
                    <div className="project-card-actions">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Live Demo <ArrowUpRight />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          GitHub <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <Reveal>
            <SectionTitle number="05">Contact</SectionTitle>
          </Reveal>
          <div className="contact-marquee">
            <Reveal delay={0.08}>
              <div className="contact-card">
                <div>
                  <p className="eyebrow">
                    <span /> Let’s build something useful
                  </p>
                  <h2>
                    Have an idea?
                    <br />
                    <em>Let’s talk.</em>
                  </h2>
                  <p className="contact-copy">
                    Whether it’s a data project, a machine-learning idea, or a
                    web experience, I’m always open to learning and building.
                  </p>
                  <div className="contact-links">
                    <a
                      href="https://github.com/Raja786000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github /> GitHub <ArrowUpRight />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/raja-babu-34a871222/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin /> LinkedIn <ArrowUpRight />
                    </a>
                  </div>
                </div>
                <a
                  className="mail-card"
                  href="https://www.linkedin.com/in/raja-babu-34a871222/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} Raja Babu</span>
            <span>Built with curiosity & code.</span>
          </footer>
        </section>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-description"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <X />
              </button>
              {selectedProject.slug === "ipl-analytics" ? (
                <>
                  <div className="modal-preview modal-ipl-preview">
                    <IplPreview />
                  </div>
                  <span className="story-index">PROJECT 02 / SPORTS ANALYTICS</span>
                  <h2 id="project-modal-title">{selectedProject.title}</h2>
                  <p id="project-modal-description" className="modal-summary">
                    {selectedProject.description}
                  </p>
                  <div className="modal-actions">
                    <a
                      className="primary-btn"
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Dashboard <ArrowUpRight />
                    </a>
                    <a
                      className="secondary-btn"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github /> View on GitHub <ArrowUpRight />
                    </a>
                  </div>
                  <section className="modal-section">
                    <h3>Dashboard Capabilities</h3>
                    <div className="tech-tags modal-tags">
                      {selectedProject.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  </section>
                  <section className="modal-section">
                    <h3>Technologies and Tools</h3>
                    <div className="tech-tags modal-tags">
                      {selectedProject.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </section>
                  <section className="modal-section">
                    <h3>Live Dashboard</h3>
                    <div className="ipl-dashboard-frame">
                      <iframe
                        src={selectedProject.liveDemo}
                        title="IPL Analytics Dashboard published Power BI report"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <a
                      className="primary-btn ipl-dashboard-fallback"
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Live Dashboard <ArrowUpRight />
                    </a>
                  </section>
                </>
              ) : selectedProject.slug === "movie-recommender" ? (
                <>
                  <div className="modal-preview">
                    <MoviePreview compact />
                  </div>
                  <span className="story-index">
                    PROJECT {selectedProject.accent} / CONTENT-BASED
                    RECOMMENDATION
                  </span>
                  <h2 id="project-modal-title">{selectedProject.title}</h2>
                  <p id="project-modal-description" className="modal-summary">
                    {selectedProject.description}
                  </p>
                  <div className="modal-actions">
                    <a
                      className="primary-btn"
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <ArrowUpRight />
                    </a>
                    <a
                      className="secondary-btn"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github /> View on GitHub <ArrowUpRight />
                    </a>
                  </div>
                  <div className="modal-meta">
                    <div>
                      <span>Project Type</span>
                      <strong>{selectedProject.projectType}</strong>
                    </div>
                    <div>
                      <span>Application</span>
                      <strong>{selectedProject.application}</strong>
                    </div>
                    <div>
                      <span>Recommendation</span>
                      <strong>{selectedProject.recommendation}</strong>
                    </div>
                    <div>
                      <span>Deployment</span>
                      <strong>Streamlit Community Cloud</strong>
                    </div>
                  </div>
                  <div className="modal-story-grid">
                    <section>
                      <h3>Overview</h3>
                      <p>{selectedProject.overview}</p>
                    </section>
                    <section>
                      <h3>Problem</h3>
                      <p>{selectedProject.problem}</p>
                    </section>
                    <section>
                      <h3>Solution</h3>
                      <p>{selectedProject.solution}</p>
                    </section>
                  </div>
                  <section className="modal-section">
                    <h3>How It Works</h3>
                    <ol className="modal-steps">
                      {selectedProject.howItWorks.map((step, index) => (
                        <li key={step}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </section>
                  <section className="modal-section">
                    <h3>Key Features</h3>
                    <div className="tech-tags modal-tags">
                      {selectedProject.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  </section>
                  <section className="modal-section">
                    <h3>Tech Stack</h3>
                    <div className="tech-tags modal-tags">
                      {selectedProject.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </section>
                  <section className="modal-section">
                    <h3>Development Process</h3>
                    <ol className="modal-process">
                      {selectedProject.process.map((step, index) => (
                        <li key={step.title}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{step.title}</strong>
                        </li>
                      ))}
                    </ol>
                  </section>
                  <section className="modal-section">
                    <h3>What I Learned</h3>
                    <p>{selectedProject.learned}</p>
                  </section>
                </>
              ) : selectedProject.slug === "sql-data-analytics" ? (
                <>
                  <div className="modal-preview modal-sql-preview">
                    <SqlPreview />
                  </div>
                  <span className="story-index">
                    PROJECT 03 / SQL DATA ANALYTICS
                  </span>
                  <h2 id="project-modal-title">{selectedProject.title}</h2>
                  <p id="project-modal-description" className="modal-summary">
                    An end-to-end SQL project that transforms raw structured
                    data into meaningful business insights through exploratory
                    analysis, advanced analytical queries, and reporting.
                  </p>
                  <div className="modal-actions">
                    <a
                      className="primary-btn"
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github /> View on GitHub <ArrowUpRight />
                    </a>
                  </div>
                  <div className="modal-meta">
                    <div><span>Project Type</span><strong>{selectedProject.projectType}</strong></div>
                    <div><span>Application</span><strong>{selectedProject.application}</strong></div>
                    <div><span>Analysis</span><strong>{selectedProject.analysis}</strong></div>
                    <div><span>Technology</span><strong>{selectedProject.technology}</strong></div>
                  </div>
                  <div className="modal-story-grid">
                    <section>
                      <h3>Overview</h3>
                      <p>{selectedProject.overview}</p>
                    </section>
                    <section>
                      <h3>Problem</h3>
                      <p>{selectedProject.problem}</p>
                      <ul className="sql-modal-problem-list">
                        {selectedProject.problemPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3>Solution</h3>
                      <p>{selectedProject.solution}</p>
                    </section>
                  </div>
                  <section className="modal-section">
                    <h3>How It Works</h3>
                    <ol className="modal-steps sql-modal-steps">
                      {selectedProject.howItWorks.map(([title, detail], index) => (
                        <li key={title}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <div><strong>{title}</strong><p>{detail}</p></div>
                        </li>
                      ))}
                    </ol>
                  </section>
                  <section className="modal-section">
                    <h3>Key Features</h3>
                    <div className="tech-tags modal-tags">
                      {selectedProject.features.map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  </section>
                  <section className="modal-section">
                    <h3>Tech Stack</h3>
                    <div className="sql-modal-tech-group">
                      <strong>Primary Technology</strong>
                      <div className="tech-tags modal-tags">
                        {selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                    </div>
                    <div className="sql-modal-tech-group">
                      <strong>Data Format</strong>
                      <div className="tech-tags modal-tags">
                        {selectedProject.dataFormats.map((format) => <span key={format}>{format}</span>)}
                      </div>
                    </div>
                    <div className="sql-modal-tech-group">
                      <strong>SQL Techniques</strong>
                      <div className="tech-tags modal-tags">
                        {selectedProject.sqlTechniques.map((technique) => <span key={technique}>{technique}</span>)}
                      </div>
                    </div>
                  </section>
                  <section className="modal-section">
                    <h3>Development Process</h3>
                    <ol className="modal-process sql-modal-process">
                      {selectedProject.process.map((step, index) => (
                        <li key={step.title}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <div><strong>{step.title}</strong><p>{step.text}</p></div>
                        </li>
                      ))}
                    </ol>
                  </section>
                  <section className="modal-section">
                    <h3>What I Learned</h3>
                    <ol className="approach-list sql-modal-learning">
                      {selectedProject.learned.map((item, index) => (
                        <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
                      ))}
                    </ol>
                  </section>
                </>
              ) : (
                <>
                  <span className="eyebrow">
                    Project {selectedProject.accent}
                  </span>
                  <h2 id="project-modal-title">{selectedProject.title}</h2>
                  <p id="project-modal-description" className="modal-summary">
                    {selectedProject.description}
                  </p>
                  <small>{selectedProject.stack}</small>
                  <a
                    className="primary-btn"
                    href={selectedProject.href}
                    target={
                      selectedProject.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                  >
                    Open project <ArrowUpRight />
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
