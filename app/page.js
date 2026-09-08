'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Moon, Sun, Download, Code2, BarChart3, BrainCircuit, Sparkles, Menu, X, ChevronDown } from 'lucide-react';

const studyTopics = [
  { name: 'Python', slug: 'python', icon: Code2, tag: 'Programming', summary: 'The language I use to turn ideas into useful data tools.' },
  { name: 'Machine Learning', slug: 'machine-learning', icon: BrainCircuit, tag: 'Intelligence', summary: 'Models, experiments, and practical prediction workflows.' },
  { name: 'Power BI', slug: 'power-bi', icon: BarChart3, tag: 'Analytics', summary: 'Interactive dashboards that make decisions easier to see.' },
  { name: 'SQL', slug: 'sql', icon: Code2, tag: 'Data', summary: 'The foundation for exploring, shaping, and trusting data.' },
  { name: 'Excel', slug: 'excel', icon: BarChart3, tag: 'Productivity', summary: 'A practical space for fast analysis, formulas, and clean models.' },
  { name: 'Statistics', slug: 'statistics', icon: BrainCircuit, tag: 'Foundations', summary: 'The thinking behind confident conclusions from imperfect data.' },
];

const showcase = [
  { title: 'Modern UI', text: 'Clean futuristic interface design.', detail: 'I build visual systems with clear hierarchy, expressive type, and enough motion to make the interface feel alive.', number: '01', icon: Sparkles },
  { title: 'Responsive', text: 'Fast layouts for every device.', detail: 'Every layout is shaped to stay useful on a phone, tablet, or wide screen without losing its personality.', number: '02', icon: BarChart3 },
  { title: 'Animations', text: 'Smooth interactions and transitions.', detail: 'Motion is used as feedback: it guides attention, explains state, and gives important moments a little more presence.', number: '03', icon: BrainCircuit },
  { title: 'Data Stories', text: 'Insights people can understand.', detail: 'I turn dense numbers into a visual narrative with the right context, contrast, and next step.', number: '04', icon: BarChart3 },
  { title: 'Accessible', text: 'Interfaces made for more people.', detail: 'Clear states, keyboard-friendly controls, and readable structure make the experience easier to use.', number: '05', icon: Sparkles },
  { title: 'Useful Detail', text: 'Small decisions with purpose.', detail: 'The best polish is quiet: helpful labels, considered spacing, and feedback exactly when it is needed.', number: '06', icon: Code2 },
];

const projects = [
  { title: 'Portfolio', text: 'Creative responsive portfolio website.', description: 'A personal portfolio shaped around data, motion, and an editorial visual language.', stack: 'Next.js • Framer Motion • CSS', href: '#home', accent: '01' },
  { title: 'Movie Recommender', text: 'AI-powered movie recommendation system.', description: 'A recommendation experience that turns a few preferences into a thoughtful list of films to explore.', stack: 'Python • Machine Learning • Streamlit', href: 'https://github.com/Raja786000', accent: '02' },
  { title: 'Weather App', text: 'Live weather forecasting application.', description: 'A focused weather dashboard with live conditions, useful summaries, and a calm visual rhythm.', stack: 'JavaScript • API • Responsive UI', href: 'https://github.com/Raja786000', accent: '03' },
  { title: 'Sales Dashboard', text: 'Interactive business performance dashboard.', description: 'A decision-focused dashboard that surfaces sales trends, key metrics, and opportunities at a glance.', stack: 'Power BI • DAX • Data Modeling', href: 'https://github.com/Raja786000', accent: '04' },
  { title: 'Customer Churn Predictor', text: 'Machine learning model for retention insights.', description: 'A predictive workflow that identifies churn signals and turns model output into practical retention ideas.', stack: 'Python • Pandas • Scikit-learn', href: 'https://github.com/Raja786000', accent: '05' },
  { title: 'Data Explorer', text: 'SQL-powered analytics workspace.', description: 'A focused exploration tool for querying structured data, comparing segments, and finding useful patterns.', stack: 'SQL • PostgreSQL • Analytics', href: 'https://github.com/Raja786000', accent: '06' },
];

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionTitle({ number, children }) {
  return <div className="section-title"><span>{number}</span><h2>{children}</h2><i /></div>;
}

export default function Home() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.localStorage.getItem('raja-theme') !== 'light';
  });
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  const [active, setActive] = useState('home');
  const [typedText, setTypedText] = useState('builds with data.');
  const [selectedProject, setSelectedProject] = useState(null);
  const orbX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const orbY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const saved = window.localStorage.getItem('raja-theme');
    if (saved) setDark(saved === 'dark');
    const sections = ['home', 'about', 'study', 'showcase', 'projects', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] });
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const phrases = ['builds with data.', 'learns with purpose.', 'ships useful ideas.'];
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

  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; window.localStorage.setItem('raja-theme', dark ? 'dark' : 'light'); }, [dark]);

  const nav = ['home','about','study','showcase','projects','contact'];
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  const moveOrb = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    orbX.set((event.clientX - bounds.left - bounds.width / 2) * 0.16);
    orbY.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
  };

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="noise" />

      <aside className="sidebar">
        <div>
          <a className="brand" href="#home" onClick={() => go('home')}><span>RB</span><div><strong>Raja Babu</strong><small>Data • ML • AI</small></div></a>
          <div className="status"><span /> Available for opportunities</div>
        </div>
        <nav>{nav.map((id, i) => <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}><span>0{i+1}</span>{id === 'study' ? 'Study Hub' : id}</button>)}</nav>
        <div className="socials">
          <a href="https://github.com/Raja786000" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/raja-babu-34a871222/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          
        </div>
      </aside>

      <header className="mobile-header">
        <a className="brand" href="#home"><span>RB</span><div><strong>Raja Babu</strong><small>Data • ML • AI</small></div></a>
        <div className="mobile-actions"><button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun /> : <Moon />}</button><button className="icon-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X /> : <Menu />}</button></div>
      </header>
      <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>{nav.map(id => <button key={id} onClick={() => go(id)}>{id === 'study' ? 'Study Hub' : id}<ArrowUpRight /></button>)}</motion.div>}</AnimatePresence>

      <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">{dark ? <Sun /> : <Moon />}<span>{dark ? 'Light' : 'Dark'}</span></button>

      <div className="content">
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <Reveal><p className="eyebrow"><span /> B.Tech CSE • Data & AI</p></Reveal>
            <Reveal delay={0.08}><h1>Raja <em>Babu</em><br /><span>{typedText}<b className="typing-cursor">|</b></span></h1></Reveal>
            <Reveal delay={0.16}><p className="hero-text">Exploring the world of Data Analytics, Machine Learning, and AI through real-world projects. Passionate about turning complex data into actionable insights and continuously learning new technologies.</p></Reveal>
            <Reveal delay={0.22}><div className="hero-actions"><a className="primary-btn" href="#projects">Explore projects <ArrowUpRight /></a><a className="secondary-btn" href="/assets/RajaResumeDS.pdf" target="_blank">Resume <Download /></a></div></Reveal>
          </div>
          <motion.div className="hero-orb" style={{ x: orbX, y: orbY }} animate={{ rotate: [0,2,0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} onMouseMove={moveOrb}>
            <div className="orb-core"><span>RB</span></div><div className="orb-ring ring-a" /><div className="orb-ring ring-b" /><div className="orb-ring ring-c" />
          </motion.div>
          <motion.button className="scroll-cue" onClick={() => go('about')} animate={{ y:[0,8,0] }} transition={{duration:2,repeat:Infinity}}><span>Scroll to explore</span><ChevronDown /></motion.button>
        </section>

        <section id="about" className="section-pad">
          <Reveal><SectionTitle number="01">About</SectionTitle></Reveal>
          <Reveal delay={0.08}><div className="about-card"><div className="about-mark">RB<span>•</span></div><p>I'm a fourth-year B.Tech Computer Science and Engineering student with a strong interest in <b>Data Analytics, Data Science, and Artificial Intelligence.</b> I enjoy working with Python, SQL, Power BI, Excel, and Machine Learning to analyze data, build predictive models, and create meaningful insights. I'm continuously improving my technical skills through projects, internships, and hands-on learning while preparing for a career in the data industry.</p><div className="about-line" /></div></Reveal>
        </section>

        <section id="study" className="section-pad">
          <Reveal><SectionTitle number="02">Study Hub</SectionTitle></Reveal>
          <p className="section-intro">A growing shelf of the tools and ideas I keep studying through projects.</p>
          <div className="skills-grid">{studyTopics.map(({name,slug,icon:Icon,tag,summary},i)=><Reveal key={name} delay={i*.07}><Link href={`/study/${slug}`} className="skill-card"><div className="skill-icon"><Icon /></div><span>{tag}</span><h3>{name}</h3><p>{summary}</p><div className="card-arrow"><ArrowUpRight /></div></Link></Reveal>)}</div>
        </section>

        <section id="showcase" className="section-pad showcase-section">
          <Reveal><SectionTitle number="03">Showcase</SectionTitle></Reveal>
          <div className="showcase-track">{showcase.map(({title,text,detail,number,icon:Icon},i)=><Reveal key={title} delay={i*.1}><motion.article className="showcase-card" whileHover={{scale:1.02}}><div className="showcase-top"><span>{number}</span><Icon /></div><div><h3>{title}</h3><p>{text}</p><p className="showcase-detail">{detail}</p></div><div className="scanline" /></motion.article></Reveal>)}</div>
        </section>

        <section id="projects" className="section-pad">
          <Reveal><SectionTitle number="04">Projects</SectionTitle></Reveal>
          <div className="projects-list">{projects.map((project,i)=><Reveal key={project.title} delay={i*.09}><motion.button className="project-card" onClick={() => setSelectedProject(project)} whileHover={{x:8}}><div className="project-number">{project.accent}</div><div className="project-info"><span>Project</span><h3>{project.title}</h3><p>{project.text}</p></div><ArrowUpRight /><div className="project-glow" /></motion.button></Reveal>)}</div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <Reveal><SectionTitle number="05">Contact</SectionTitle></Reveal>
          <div className="contact-marquee"><Reveal delay={0.08}><div className="contact-card"><div><p className="eyebrow"><span /> Let’s build something useful</p><h2>Have an idea?<br /><em>Let’s talk.</em></h2><p className="contact-copy">Whether it’s a data project, a machine-learning idea, or a web experience, I’m always open to learning and building.</p><div className="contact-links"><a href="https://github.com/Raja786000" target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a><a href="https://www.linkedin.com/in/raja-babu-34a871222/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a></div></div><a className="mail-card" href="https://www.linkedin.com/in/raja-babu-34a871222/" target="_blank" rel="noreferrer"><Linkedin /><span>Connect on LinkedIn</span><ArrowUpRight /></a></div></Reveal></div>
          <footer><span>© {new Date().getFullYear()} Raja Babu</span><span>Built with curiosity & code.</span></footer>
        </section>
      </div>
      <AnimatePresence>{selectedProject && <motion.div className="project-modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelectedProject(null)}><motion.div className="project-modal" initial={{y:24,opacity:0}} animate={{y:0,opacity:1}} exit={{y:24,opacity:0}} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X /></button><span className="eyebrow">Project {selectedProject.accent}</span><h2>{selectedProject.title}</h2><p>{selectedProject.description}</p><small>{selectedProject.stack}</small><a className="primary-btn" href={selectedProject.href} target={selectedProject.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Open project <ArrowUpRight /></a></motion.div></motion.div>}</AnimatePresence>
    </main>
  );
}
