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
  { icon: 'fa-solid fa-globe', title: 'Work With Global Clients', desc: 'Work on projects that reach users across 15+ countries.' },
  { icon: 'fa-solid fa-rocket', title: 'Rapid Career Growth', desc: 'A flat structure where your impact is visible and rewarded.' },
  { icon: 'fa-solid fa-bullseye', title: 'Ownership Culture', desc: 'We hire for ownership. Your ideas shape the products we build.' },
  { icon: 'fa-solid fa-lightbulb', title: 'Learning Budget', desc: 'Annual learning stipend for courses, conferences, and certifications.' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your dependents.' },
  { icon: 'fa-solid fa-clock', title: 'Flexible Hours', desc: 'Results-oriented culture with flexible working arrangements.' },
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
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[70svh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Careers Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, rgba(5, 15, 35, 0.95) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-20 md:pt-0">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8"
            >
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Join Our Team</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Build Your Career <br />
                <em className="font-serif-italic not-italic text-white/40">With Us.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-[#f8f9fc] pt-12 pb-8 md:pt-16 md:pb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="inline-block bg-white mb-4 shadow-sm border border-gray-100 rounded-full px-4 py-1.5">
              <span className="font-medium text-[#013Ad6] text-[13px] tracking-wide uppercase">Life at Task19</span>
            </div>
            <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Why People Love Working Here
            </h2>
            <p className="text-gray-500 font-light text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
              We invest in our people the same way we invest in our clients — wholeheartedly, with a long-term perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                className="group relative bg-white p-5 rounded-[16px] overflow-hidden border border-gray-100 hover:border-[#013Ad6]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-1 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F7FF] text-[#013Ad6] group-hover:bg-[#013Ad6] group-hover:text-white transition-colors duration-400 flex items-center justify-center mb-4">
                  <i className={`${perk.icon} text-lg group-hover:scale-110 transition-transform duration-400`}></i>
                </div>
                <h5 className="font-display font-bold text-gray-900 mb-2 group-hover:text-[#013Ad6] transition-colors duration-300">
                  {perk.title}
                </h5>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                  {perk.desc}
                </p>
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
                    <Link to="/contact" className="inline-block bg-[#013Ad6] text-white font-bold text-[14px] px-8 py-3 rounded-full hover:bg-[#002bb5] transition-colors duration-300">
                      Apply for This Role
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 border border-dashed border-border text-center">
            <p className="font-display font-semibold text-text-primary mb-2">Don't see a role that fits?</p>
            <p className="text-text-secondary text-sm mb-4">We're always interested in exceptional talent. Send us your portfolio and tell us how you'd like to contribute.</p>
            <Link to="/contact" className="inline-block bg-[#013Ad6] text-white font-bold text-[14px] px-8 py-3 rounded-full hover:bg-[#002bb5] transition-colors duration-300 shadow-sm">
              Send Us Your Profile
            </Link>
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

    </>
  )
}
