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
      <section className="pt-32 pb-0 md:pt-40 md:pb-0 section-dark relative overflow-hidden min-h-[400px] md:min-h-[auto] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-surface-dark" />
        <div className="container relative z-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors duration-300 font-display text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <motion.div className="max-w-4xl pb-16 md:pb-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block font-display text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 md:mb-4">{item.category}</span>
            <h1 className="font-display font-bold text-white mb-3 md:mb-4 leading-[1.15] md:leading-[1.1]" style={{ fontSize: 'clamp(2.25rem, 8vw, 4rem)' }}>{item.title}</h1>
            <p className="text-base md:text-xl text-white/60 leading-relaxed">{item.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-secondary">
        <div className="container">
          <img src={item.image} alt={item.title} className="w-full max-h-[600px] object-cover shadow-2xl -mt-8 rounded-lg" />
        </div>
      </section>

      {/* Content */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {item.aboutProject && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-4">About the Project</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{item.aboutProject}</p>
                </motion.div>
              )}
              {item.challenge && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-4">The Challenge</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{item.challenge}</p>
                </motion.div>
              )}
              {item.solution && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-text-primary mb-4">Our Solution</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{item.solution}</p>
                </motion.div>
              )}
            </div>
            
            <div className="space-y-8">
              <div className="p-8 bg-secondary border border-border rounded-lg shadow-sm">
                <h3 className="font-display font-bold text-text-primary mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div><p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-1">Client</p><p className="font-display font-medium text-text-primary">{item.client}</p></div>
                  <div><p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-1">Industry</p><p className="font-display font-medium text-text-primary">{item.industry}</p></div>
                  <div><p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-1">Category</p><p className="font-display font-medium text-text-primary">{item.category}</p></div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies?.map(tech => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-display font-medium bg-surface border border-border text-text-primary rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {item.externalLink && (
                <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white font-display font-medium hover:bg-primary-hover transition-colors rounded">
                  View Live Website <ExternalLink className="w-4 h-4" />
                </a>
              )}
              
              <Button to="/contact" variant="outline" size="md" className="w-full justify-center">
                Start a Similar Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      {item.screenshots && item.screenshots.length > 0 && (
        <section className="section bg-secondary border-t border-border">
          <div className="container">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">Project Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.screenshots.map((screen, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-xl shadow-lg border border-border group bg-surface flex items-center justify-center">
                    <img src={screen.url} alt={screen.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-text-primary text-center">{screen.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title="Inspired by This Project?" subtitle="Let's discuss how we can create similar results for your business." />
    </>
  )
}
