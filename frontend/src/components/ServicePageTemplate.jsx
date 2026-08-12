import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'
import FAQAccordion from './ui/FAQAccordion'
import CTASection from './ui/CTASection'
import ServiceCard from './ui/ServiceCard'
import { servicesForCards } from '../constants/services'

export default function ServicePageTemplate({ service }) {
  const relatedServices = servicesForCards
    .filter(s => s.id !== service.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{service.title} — Task19 Technologies</title>
        <meta name="description" content={service.overview?.slice(0, 155)} />
        <link rel="canonical" href={`https://task19.com${service.to}`} />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-surface-dark" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[100px]"
          style={{ backgroundColor: `${service.color}15` }} />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-12" style={{ backgroundColor: service.color }} />
                <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: service.color }}>
                  Our Services
                </span>
              </span>
              <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
                {service.title}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-3xl mb-10">
                {service.overview}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg" arrow>Get a Free Quote</Button>
                <Button to="/portfolio" variant="outline-white" size="lg">View Case Studies</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <section className="section bg-surface">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <SectionHeading
                  label="What's Included"
                  title="Core Service Capabilities"
                  align="left"
                  className="mb-8"
                />
                <div className="space-y-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=480&fit=crop&sig=${service.id}`}
                  alt={`${service.title} at Task19 Technologies`}
                  className="w-full object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="section section-grey">
          <div className="container">
            <SectionHeading
              label="Why It Matters"
              title="Business Benefits"
              subtitle="The real-world advantages our clients experience after working with us on this service."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  className="p-8 bg-surface border border-border hover:border-accent/20 hover:shadow-lg group transition-all duration-300 rounded-[2px] hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/5 text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <span className="font-display font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="section bg-surface">
          <div className="container">
            <SectionHeading
              label="How We Do It"
              title="Our Engagement Process"
              subtitle="A structured, transparent methodology that keeps projects aligned, on time, and on budget."
            />
            <div className="space-y-px">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-8 p-8 border border-border hover:bg-secondary group transition-all duration-300 rounded-[2px] hover:shadow-md hover:-translate-y-1"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="font-display text-5xl font-extrabold text-border group-hover:text-accent/20 transition-colors duration-300 flex-shrink-0 w-16">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary">{step.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-accent transition-colors duration-300 flex-shrink-0 mt-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies + Industries */}
      <section className="section section-grey">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.technologies && (
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-surface border border-border text-sm font-display font-medium text-text-primary hover:border-accent/40 hover:text-accent transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {service.industries && service.industries.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-6">Industries We Serve</h3>
                <div className="space-y-2">
                  {service.industries.map((ind) => (
                    <div key={ind} className="flex items-center gap-3 py-2 border-b border-border">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-text-secondary">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Explore More"
            title="Related Services"
            subtitle="Complement your digital strategy with our other expert capabilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {relatedServices.map((s, i) => (
              <div key={s.id} className="border-r border-b border-border last:border-r-0">
                <ServiceCard {...s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section section-grey">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading
                  label="Questions & Answers"
                  title={`${service.title} FAQs`}
                  align="left"
                  className="mb-0"
                />
                <p className="text-text-secondary mt-4">
                  Have more questions? Reach out and we'll be happy to help.
                </p>
                <div className="mt-8">
                  <Button to="/contact" variant="primary" size="md" arrow>Ask a Question</Button>
                </div>
              </div>
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Get Started with ${service.title}?`}
        subtitle="Let's discuss your project requirements and create a tailored solution that delivers real business value."
      />
    </>
  )
}
