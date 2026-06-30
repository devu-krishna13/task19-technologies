import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import FAQAccordion from '../components/ui/FAQAccordion'
import { jobListings } from '../constants/data'
import Button from '../components/ui/Button'

const perks = [
  { icon: '🌍', title: 'Work With Global Clients', desc: 'Work on projects that reach users across 15+ countries.' },
  { icon: '🚀', title: 'Rapid Career Growth', desc: 'A flat structure where your impact is visible and rewarded.' },
  { icon: '🎯', title: 'Ownership Culture', desc: 'We hire for ownership. Your ideas shape the products we build.' },
  { icon: '💡', title: 'Learning Budget', desc: 'Annual learning stipend for courses, conferences, and certifications.' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your dependents.' },
  { icon: '⏰', title: 'Flexible Hours', desc: 'Results-oriented culture with flexible working arrangements.' },
]

const careerFaqs = [
  { question: 'What is the typical interview process?', answer: 'Our process has 3 stages: (1) Initial HR screening call (30 mins), (2) Technical interview with a senior team member (60 mins), (3) Final culture-fit conversation with leadership. For senior roles, there may be a brief technical assignment.' },
  { question: 'Do you offer remote work?', answer: 'Most roles are hybrid — 3 days in our Ernakulam office and 2 days remote. Fully remote arrangements are considered for senior candidates with exceptional qualifications.' },
  { question: 'How quickly do you make hiring decisions?', answer: 'We respect candidates\' time. Our goal is to complete the entire interview process and make a decision within 10 business days of your first interview.' },
]

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null)

  return (
    <>
      <Helmet>
        <title>Careers at Task19 Technologies — Join Our Team</title>
        <meta name="description" content="Join Task19 Technologies and build your career in e-commerce, web development, mobile apps, AI, and digital transformation. Current openings in Ernakulam, Kerala." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-dot-pattern">
        <div className="container">
          <motion.div className="max-w-4xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Join Our Team</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Build Your Career at the <br />
              <span className="text-gradient">Intersection of Tech & Commerce</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              We're a team of builders, thinkers, and problem-solvers who believe great work comes from great people. If you're exceptional at what you do and want to work on projects that actually matter — we want to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Life at Task19"
            title="Why People Love Working Here"
            subtitle="We invest in our people the same way we invest in our clients — wholeheartedly, with a long-term perspective."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                className="p-8 border border-border bg-secondary hover:border-accent/20 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl block mb-4">{perk.icon}</span>
                <h3 className="font-display font-semibold text-text-primary mb-2">{perk.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            label="Open Positions"
            title="Current Opportunities"
            subtitle="We're looking for exceptional people to join our growing team."
          />
          <div className="space-y-4">
            {jobListings.map((job, i) => (
              <motion.div
                key={job.id}
                className={`border border-border bg-surface overflow-hidden transition-all duration-300
                  ${activeJob === job.id ? 'border-accent/30 shadow-md' : 'hover:border-accent/20 hover:shadow-sm'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  className="w-full flex items-center justify-between p-8 text-left"
                  onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold text-text-primary mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{job.type}</span>
                      <span className="font-display font-semibold text-accent">{job.experience}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-text-muted transition-transform duration-300 flex-shrink-0 ml-4 ${activeJob === job.id ? 'rotate-90' : ''}`} />
                </button>

                {activeJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-8 border-t border-border"
                  >
                    <p className="text-text-secondary leading-relaxed mt-6 mb-6">{job.description}</p>
                    <h4 className="font-display font-semibold text-text-primary mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-8">
                      {job.requirements.map((req, j) => (
                        <li key={j} className="flex gap-3 text-sm text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                    <Button to={`/careers/${job.slug}`} variant="primary" size="md" arrow>
                      Apply for This Role
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-dashed border-border text-center">
            <p className="font-display font-semibold text-text-primary mb-2">Don't see a role that fits?</p>
            <p className="text-text-secondary text-sm mb-4">We're always interested in exceptional talent. Send us your portfolio and tell us how you'd like to contribute.</p>
            <Button to="/contact" variant="outline" size="md" arrow>Send Us Your Profile</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading label="Hiring FAQ" title="Questions About Joining Us" align="left" className="mb-0" />
              <p className="text-text-secondary mt-4">We believe in a transparent and respectful hiring process. Here's what to expect.</p>
            </div>
            <FAQAccordion items={careerFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Do the Best Work of Your Career?"
        subtitle="Join a team that challenges you, supports you, and celebrates your growth."
        primaryText="View Open Roles"
        primaryTo="/careers"
        secondaryText="About Our Culture"
        secondaryTo="/about"
      />
    </>
  )
}
