import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import { portfolioItems } from '../constants/data'

export default function CaseStudy() {
  const { slug } = useParams()
  const item = portfolioItems.find(p => p.slug === slug) || portfolioItems[0]

  return (
    <>
      <Helmet>
        <title>{item.title} Case Study — Task19 Technologies</title>
        <meta name="description" content={item.shortDesc} />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-0 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-surface-dark" />
        <div className="container relative z-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors duration-300 font-display text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <motion.div className="max-w-4xl pb-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">{item.category}</span>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'var(--font-size-h1)' }}>{item.title}</h1>
            <p className="text-xl text-white/60 leading-relaxed">{item.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-secondary">
        <div className="container">
          <img src={item.image} alt={item.title} className="w-full max-h-[520px] object-cover shadow-2xl -mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-4">The Challenge</h2>
                <p className="text-text-secondary leading-relaxed">{item.challenge}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary mb-4">Our Solution</h2>
                <p className="text-text-secondary leading-relaxed">{item.solution}</p>
              </div>
              {item.results && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-6">Results Achieved</h2>
                  <div className="space-y-3">
                    {item.results.map((result, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-secondary border border-border">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-display font-semibold text-text-primary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-secondary border border-border">
                <h3 className="font-display font-bold text-text-primary mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div><p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-1">Client</p><p className="font-display font-medium text-text-primary">{item.client}</p></div>
                  <div><p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-1">Category</p><p className="font-display font-medium text-text-primary">{item.category}</p></div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies?.map(tech => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-display font-medium bg-surface border border-border text-text-primary">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Button to="/contact" variant="primary" size="md" arrow className="w-full justify-center">
                Start a Similar Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Inspired by This Project?" subtitle="Let's discuss how we can create similar results for your business." />
    </>
  )
}
