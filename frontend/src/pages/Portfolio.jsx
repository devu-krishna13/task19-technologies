import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import PortfolioCard from '../components/ui/PortfolioCard'
import CTASection from '../components/ui/CTASection'
import { portfolioItems, portfolioCategories } from '../constants/data'
import { ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Portfolio — Task19 Technologies</title>
        <meta name="description" content="Explore Task19 Technologies' portfolio of high-performance e-commerce and web applications delivered for clients across 15+ countries." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="container relative z-10">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-accent" />
              <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Our Work</span>
            </span>
            <h1 className="font-display font-light text-white mb-7 leading-[1.05]" style={{ fontSize: 'var(--font-size-h1)' }}>
              Projects That{' '}
              <em className="font-serif-italic text-white/50">Delivered Results</em>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              A curated selection of our most impactful digital solutions — each one a story of challenges solved, goals exceeded, and businesses transformed.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 mt-12 max-w-4xl">
            {[
              ['Proof-first layout', 'Featured case studies appear before generic selling points.'],
              ['Commercial outcomes', 'Metrics stay tied to actual launch and growth context.'],
              ['Premium presentation', 'Cleaner cards, spacing, and category filtering across devices.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white/5 p-6">
                <p className="font-display text-sm text-white mb-2">{title}</p>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section bg-surface">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-0 mb-12 border border-border">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 font-display text-xs font-medium tracking-wider uppercase transition-all duration-300 border-r border-border last:border-r-0
                  ${activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text-secondary hover:bg-secondary hover:text-text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <PortfolioCard
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    to={`/portfolio/${item.slug}`}
                    index={i}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-muted font-display">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Launch the Next Story"
        title="Have a Project in Mind?"
        subtitle="Let's build something exceptional together. Share your vision and we'll show you how to make it a reality."
        primaryText="Start Your Project"
      />
    </>
  )
}
