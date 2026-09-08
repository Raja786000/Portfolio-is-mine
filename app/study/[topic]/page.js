import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BarChart3, BrainCircuit, Code2 } from 'lucide-react';

const topics = {
  python: { name: 'Python', icon: Code2, label: 'Programming', intro: 'A flexible language for turning messy questions into repeatable data workflows.', points: ['Data cleaning and exploration with pandas', 'Automation scripts that remove repetitive work', 'Small experiments that grow into useful tools'] },
  'machine-learning': { name: 'Machine Learning', icon: BrainCircuit, label: 'Intelligence', intro: 'A practical study of patterns, features, evaluation, and models that support better decisions.', points: ['Preparing trustworthy datasets and features', 'Comparing models with meaningful metrics', 'Explaining results instead of hiding behind accuracy'] },
  'power-bi': { name: 'Power BI', icon: BarChart3, label: 'Analytics', intro: 'A visual language for giving teams a clear view of what their data is saying.', points: ['Building dashboards around real questions', 'Shaping data with Power Query', 'Designing reports that invite action'] },
  sql: { name: 'SQL', icon: Code2, label: 'Data', intro: 'The precise foundation for asking good questions of structured data.', points: ['Joining tables without losing meaning', 'Aggregating signals into useful summaries', 'Writing queries that stay readable and reliable'] },
  excel: { name: 'Excel', icon: BarChart3, label: 'Productivity', intro: 'A practical space for fast analysis, formulas, and clean models.', points: ['Building reliable formulas and models', 'Cleaning and organizing raw data', 'Turning quick analysis into clear reports'] },
  statistics: { name: 'Statistics', icon: BrainCircuit, label: 'Foundations', intro: 'The thinking behind confident conclusions from imperfect data.', points: ['Understanding distributions and variation', 'Choosing useful measures and tests', 'Communicating uncertainty with clarity'] },
};

export default async function StudyTopic({ params }) {
  const topic = topics[params.topic] || topics.python;
  const Icon = topic.icon;
  return <main className="topic-page"><Link className="back-link" href="/#study"><ArrowLeft /> Back to Study Hub</Link><div className="topic-kicker"><Icon /> {topic.label}</div><h1>{topic.name}</h1><p className="topic-intro">{topic.intro}</p><div className="topic-grid">{topic.points.map((point, index) => <article key={point}><span>0{index + 1}</span><h2>{point}</h2><p>Learning this through hands-on projects, notes, and small experiments that make the concept stick.</p></article>)}</div><Link className="primary-btn" href="/#contact">Talk about this topic <ArrowUpRight /></Link></main>;
}