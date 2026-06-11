import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ValueProposition.css';

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const AnimatedStat = ({ end, suffix = '', label, icon }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-teal)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2.5 2.5L16 9"/>
      </svg>
    ),
    title: 'Cambodia-First',
    desc: 'Designed from the ground up for Cambodian farming conditions, budget constraints, and local infrastructure — not adapted from expensive foreign systems.',
    color: 'teal',
    number: '01'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-amber)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'AI-Powered Intelligence',
    desc: 'Real-time AI disease detection from fecal imaging, predictive climate control, and automated scheduling — all running locally on your farm server.',
    color: 'amber',
    number: '02'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-coral)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Fully Self-Hosted',
    desc: 'No cloud dependency. Your data stays on your farm. Access everything from your phone via local WiFi — works even without internet.',
    color: 'coral',
    number: '03'
  }
];

const ValueProposition = () => {
  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="value-prop">
      {/* Looped ambient line pattern */}
      <div className="vp-ambient" aria-hidden="true">
        <div className="vp-line vp-line-1" />
        <div className="vp-line vp-line-2" />
        <div className="vp-line vp-line-3" />
      </div>

      <div className="container">
        {/* Stats row — appear on scroll */}
        <motion.div
          className="stats-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatedStat
            end={5}
            suffix="+"
            label="Competition Awards"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-amber)" strokeWidth="1.75"><path d="M6 9H4.5a2.5 2.5 0 010-5H6m12 0h1.5a2.5 2.5 0 010 5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22m7-7.34V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0012 0V2z"/></svg>}
          />
          <AnimatedStat
            end={4}
            label="Smart Systems"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-teal)" strokeWidth="1.75"><path d="M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
          />
          <AnimatedStat
            end={100}
            suffix="%"
            label="Locally Hosted"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-coral)" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
          />
          <AnimatedStat
            end={24}
            suffix="/7"
            label="Real-time Monitoring"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-teal-light)" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
          />
        </motion.div>

        <div className="vp-divider" />

        {/* Section Header — appear on scroll */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as any } }
        >
          <span className="section-eyebrow">Why Tokkatot - តុក្កតត</span>
          <h2 className="section-title">
            Farming Smarter,<br />
            <span className="gradient-text">Not Just Harder</span>
          </h2>
          <p className="section-subtitle">
            Traditional chicken farming in Cambodia relies on manual labor, guesswork, and late disease detection.
            Tokkatot - តុក្កតត changes that with smart automation built for the realities of local farms.
          </p>
        </motion.div>

        {/* Pillars — staggered appear on scroll */}
        <motion.div
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`pillar-card pillar-${pillar.color}`}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as any } } }
            >
              <div className="pillar-number">{pillar.number}</div>
              <div className={`pillar-icon-wrap pillar-icon-${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-shine" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
