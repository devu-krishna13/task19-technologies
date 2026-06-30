import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import { technologies, techCategories } from '../constants/data'

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Technologies We Use — Task19 Technologies</title>
        <meta name="description" content="Explore the modern technology stack Task19 Technologies uses to build high-performance web, mobile, cloud, and AI solutions." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-grid-pattern">
        <div className="container">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Tech Stack</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              The Technologies That <span className="text-gradient">Power Our Solutions</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              We work with the world's most powerful and proven technologies — deliberately selected for performance, longevity, and developer ecosystem strength.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="section bg-surface">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {techCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-display text-sm font-medium transition-all duration-300 border
                  ${activeCategory === cat
                    ? 'bg-accent text-white border-accent'
                    : 'bg-surface text-text-secondary border-border hover:border-accent/40'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group flex flex-col items-center p-6 border border-border bg-surface hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 cursor-default"
              >
                <span className="text-4xl mb-3 block">{tech.icon}</span>
                <span className="font-display text-sm font-semibold text-text-primary text-center group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="font-display text-xs text-text-muted mt-1">{tech.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category breakdown */}
      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            label="Our Approach"
            title="How We Choose Our Stack"
            subtitle="We make technology decisions based on what's best for your project — not what's trendy or what we're most comfortable with."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Performance First', desc: 'Every technology in our stack is evaluated for real-world performance under production load. We don\'t use technologies that look impressive in demos but fail in production.' },
              { title: 'Long-Term Viability', desc: 'We choose technologies with strong community backing, corporate support, and clear long-term roadmaps. Your investment should remain viable for years.' },
              { title: 'Right Tool, Right Job', desc: 'We don\'t have a one-size-fits-all stack. We match technology choices to the specific requirements of each project — and we\'re always honest about the trade-offs.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 bg-surface border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-accent/5 text-accent flex items-center justify-center font-display font-bold text-lg mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's Talk Tech" subtitle="Have questions about which technology stack is right for your project? Our architects are happy to consult." />
    </>
  )
}
