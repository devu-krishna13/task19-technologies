import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import BlogCard from '../components/ui/BlogCard'
import CTASection from '../components/ui/CTASection'
import { blogPosts } from '../constants/data'

const categories = ['All', 'Strategy & Growth', 'Technical Expertise', 'Migration & Scalability']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Blog & Insights — Task19 Technologies</title>
        <meta name="description" content="Expert insights on e-commerce development, Shopify optimization, digital transformation, and technology trends from the Task19 Technologies team." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-dot-pattern">
        <div className="container">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Insights</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Ideas Worth <span className="text-gradient">Building On</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Practical insights on e-commerce strategy, technical architecture, and digital growth — written by practitioners who build these solutions every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-surface">
        <div className="container">
          {blogPosts[0] && activeCategory === 'All' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 border border-border mb-12 bg-secondary">
              <div className="overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full min-h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-display font-medium tracking-[0.2em] uppercase text-accent mb-4">
                  Featured Insight
                </span>
                <h2 className="font-display font-light text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h3)' }}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span className="w-1 h-1 bg-text-muted rounded-full" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <div>
                  <Link
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-display font-semibold hover:bg-primary-light transition-all duration-300"
                  >
                    Read Featured Article
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
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

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} {...post} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-muted">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Editorial Requests"
        title="Want Us to Write About a Topic?"
        subtitle="Have a question about e-commerce tech, digital strategy, or Shopify development? We'd love to write about it."
        primaryText="Suggest a Topic"
        primaryTo="/contact"
        secondaryText="Our Services"
        secondaryTo="/services"
      />
    </>
  )
}
