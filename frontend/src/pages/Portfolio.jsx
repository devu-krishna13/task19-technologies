import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import PortfolioCard from '../components/ui/PortfolioCard'
import CTASection from '../components/ui/CTASection'
import { portfolioItems, portfolioCategories } from '../constants/data'

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
      <section className="pt-40 pb-24 section-dark bg-grid-pattern">
        <div className="container">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Our Work</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Projects That <span className="text-gradient">Delivered Results</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              A curated selection of our most impactful digital solutions — each one a story of challenges solved, goals exceeded, and businesses transformed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section bg-surface">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-display text-sm font-medium transition-all duration-300 border
                  ${activeCategory === cat
                    ? 'bg-accent text-white border-accent'
                    : 'bg-surface text-text-secondary border-border hover:border-accent/40 hover:text-text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
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
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        subtitle="Let's build something exceptional together. Share your vision and we'll show you how to make it a reality."
        primaryText="Start Your Project"
      />
    </>
  )
}
