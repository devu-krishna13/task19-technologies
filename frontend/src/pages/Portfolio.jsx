import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../constants/data'
import CTASection from '../components/ui/CTASection'

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Recent Portfolio — Task19 Technologies</title>
        <meta name="description" content="Explore our recent portfolio of Shopify and e-commerce projects built for brands across fashion, retail, food, and marketplace industries." />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="pt-40 pb-20 bg-white border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="font-display text-[10px] font-semibold tracking-[0.25em] uppercase text-accent">Our Work</span>
            </span>
            <h1 className="font-display font-light text-text-primary leading-[1.1] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              Recent Portfolio
            </h1>
            <p className="text-text-secondary text-xl font-light leading-relaxed max-w-2xl">
              Trusted by brands across the globe. Here's a showcase of our recent Shopify and e-commerce projects — each built with precision, purpose, and a focus on results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── All Portfolio Items ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group cursor-pointer"
              >
                <a
                  href={item.externalLink || `/portfolio/${item.slug}`}
                  target={item.externalLink ? '_blank' : '_self'}
                  rel={item.externalLink ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {/* Image */}
                  <div
                    className="w-full bg-[#f7f7f5] overflow-hidden relative"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                    />
                    {/* Hover overlay with external link icon */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white w-12 h-12 flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Title bar */}
                  <div className="pt-5 pb-3 flex items-center justify-between gap-4">
                    <h2 className="font-display text-base font-semibold text-text-primary uppercase tracking-wide group-hover:text-accent transition-colors">
                      {item.title}
                    </h2>
                    <span className="text-xs text-text-muted font-display uppercase tracking-wider shrink-0 border border-border px-2 py-1">
                      {item.industry}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Store?"
        subtitle="Whether you need a Shopify build, migration, or custom app — our team delivers results."
        primaryText="Start Your Project"
        primaryTo="/contact"
        eyebrow="Let's Work Together"
      />
    </>
  )
}
