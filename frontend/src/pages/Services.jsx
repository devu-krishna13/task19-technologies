import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import CTASection from '../components/ui/CTASection'
import { servicesForCards } from '../constants/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — Task19 Technologies</title>
        <meta name="description" content="Explore Task19 Technologies' complete range of digital services: web development, mobile apps, UI/UX design, cloud solutions, AI development, DevOps, and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-grid-pattern">
        <div className="container">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Services</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Everything You Need to <span className="text-gradient">Build & Scale</span> Digitally
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              From ideation to deployment — and beyond — we offer a comprehensive suite of digital services designed to take your business to the next level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="Our Complete Service Portfolio"
            subtitle="Each service is delivered by a dedicated team of specialists with deep domain expertise."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {servicesForCards.map((service, i) => (
              <div key={service.id} className="border-r border-b border-border">
                <ServiceCard {...service} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Let's have a free 30-minute discovery call. We'll understand your goals and recommend the right approach."
        primaryText="Book Free Discovery Call"
        secondaryText="Browse Case Studies"
        secondaryTo="/portfolio"
      />
    </>
  )
}
