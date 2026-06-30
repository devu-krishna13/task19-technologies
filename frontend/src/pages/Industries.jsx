import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import { industries } from '../constants/data'

const industryDetails = [
  {
    name: 'E-commerce & Retail',
    icon: '🛍️',
    headline: 'Powering the Next Generation of D2C Commerce',
    desc: 'From Shopify store builds to complex headless commerce architectures, we help retail brands create shopping experiences that convert and retain customers at scale.',
    solutions: ['Custom Shopify Development', 'Headless Commerce Architecture', 'Conversion Rate Optimization', 'Multi-channel Commerce', 'Loyalty & Retention Programs'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    name: 'Healthcare & MedTech',
    icon: '⚕️',
    headline: 'HIPAA-Compliant Digital Health Solutions',
    desc: 'We build secure, compliant digital health platforms that improve patient outcomes, streamline clinical workflows, and enable data-driven care decisions.',
    solutions: ['Patient Portal Development', 'Telemedicine Platforms', 'EHR/EMR Integration', 'Health Data Analytics', 'HIPAA-Compliant Infrastructure'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    name: 'Finance & FinTech',
    icon: '💳',
    headline: 'Secure, Regulated Financial Technology',
    desc: 'From mobile banking apps to payment gateway integration, we deliver financial technology solutions with the security, reliability, and compliance that the sector demands.',
    solutions: ['Payment Gateway Integration', 'Digital Wallet Development', 'Financial Analytics Dashboards', 'KYC/AML Automation', 'Blockchain Solutions'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
  },
  {
    name: 'Education & EdTech',
    icon: '🎓',
    headline: 'Transforming Learning Through Technology',
    desc: 'We build engaging educational platforms that make learning accessible, personalized, and measurable — from K-12 tools to enterprise training ecosystems.',
    solutions: ['LMS Development', 'Virtual Classroom Platforms', 'Student Assessment Tools', 'E-learning Mobile Apps', 'Educational Analytics'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  },
]

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve — Task19 Technologies</title>
        <meta name="description" content="Task19 Technologies delivers specialized digital solutions across e-commerce, healthcare, finance, education, real estate, and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-grid-pattern">
        <div className="container">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Industries</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Deep Expertise Across <span className="text-gradient">Key Verticals</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              We don't just write code — we understand the unique challenges, regulations, and opportunities of every industry we serve. That domain knowledge is what sets our solutions apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview Grid */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Our Expertise"
            title="Industries We Transform"
            subtitle="Specialized solutions built on deep knowledge of sector-specific requirements, regulations, and user expectations."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                className="group p-8 border border-border hover:border-accent/30 hover:bg-secondary hover:shadow-md transition-all duration-300 cursor-default text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="text-4xl block mb-4">{industry.icon}</span>
                <h3 className="font-display font-semibold text-text-primary text-sm mb-2 group-hover:text-accent transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industryDetails.map((ind, i) => (
        <section key={i} className={`section ${i % 2 === 0 ? 'section-grey' : 'bg-surface'}`}>
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <motion.div
                className={i % 2 !== 0 ? 'lg:col-start-2' : ''}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-5xl block mb-6">{ind.icon}</span>
                <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
                  {ind.name}
                </span>
                <h2 className="font-display font-bold text-text-primary mb-4" style={{ fontSize: 'var(--font-size-h3)' }}>
                  {ind.headline}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">{ind.desc}</p>
                <div className="space-y-2">
                  {ind.solutions.map((sol, j) => (
                    <div key={j} className="flex items-center gap-3 py-2.5 border-b border-border">
                      <span className="w-2 h-2 bg-accent flex-shrink-0" />
                      <span className="text-sm font-display font-medium text-text-primary">{sol}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img src={ind.image} alt={ind.name} className="w-full object-cover shadow-xl" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Ready to Transform Your Industry?"
        subtitle="Whatever your sector, we bring the technical depth and strategic thinking to make your digital ambitions real."
      />
    </>
  )
}
