import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import TeamCard from '../components/ui/TeamCard'
import Timeline from '../components/ui/Timeline'
import CTASection from '../components/ui/CTASection'
import { teamMembers, aboutTimeline, stats } from '../constants/data'
import { ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  { title: 'Client-First Obsession', desc: 'Every decision — from architecture to design — begins and ends with your success.' },
  { title: 'Technical Excellence', desc: 'We hold ourselves to the highest engineering standards. Quality is a baseline, not a feature.' },
  { title: 'Radical Transparency', desc: 'You always know where your project stands. No surprises, no hidden costs, just honest communication.' },
  { title: 'Continuous Learning', desc: 'Technology evolves rapidly. Our team invests continuously in upskilling on the latest Shopify and web technologies.' },
  { title: 'Collaborative Spirit', desc: 'We work with you, not just for you. The best outcomes emerge from genuine partnership and shared context.' },
  { title: 'Measurable Impact', desc: 'We track outcomes, not just outputs. Code that doesn\'t move the needle for your business is code we\'re not proud of.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Task19 Technologies — Our Story, Mission & Team</title>
        <meta name="description" content="Learn about Task19 Technologies — a premier Shopify & e-commerce development company based in Kerala, India. 8+ years, 200+ projects, 15+ countries served." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-accent" />
              <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">About Us</span>
            </span>
            <h1 className="font-display font-light text-white mb-7 leading-[1.05]" style={{ fontSize: 'var(--font-size-h1)' }}>
              Eight Years of Building<br />
              <em className="font-serif-italic text-white/50">Digital Futures That Matter</em>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              We started as a small team with a big belief: exceptional technology, delivered by people who genuinely care, can transform any e-commerce business. Eight years and 200+ projects later, that belief has never been stronger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent" />
              <span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">At a glance</span>
            </span>
            <h2 className="font-display font-light text-text-primary" style={{ fontSize: 'var(--font-size-h3)' }}>
              Built on steady delivery, not inflated claims.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 lg:p-12 bg-surface text-center min-h-[180px] flex flex-col justify-center">
                <div className="font-display text-4xl lg:text-5xl font-light text-text-primary mb-3">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-xs font-display font-medium tracking-[0.2em] uppercase text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=640&h=480&fit=crop"
                alt="Task19 Technologies office"
                className="w-full object-cover border border-border"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">Our Purpose</span>
              </span>
              <h2 className="font-display font-light text-text-primary mb-5 leading-snug" style={{ fontSize: 'var(--font-size-h3)' }}>
                More Than Code. We Build{' '}
                <em className="font-serif-italic text-text-muted">Competitive Advantages.</em>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-7 font-light">
                Task19 Technologies was founded on a simple observation: most businesses struggling to scale digitally weren't limited by ideas — they were limited by technical execution. We bridge that gap.
              </p>
              <div className="space-y-6 mb-8">
                <div className="pl-6 border-l-2 border-accent">
                  <h3 className="font-display font-medium text-text-primary mb-2">Our Mission</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    To empower ambitious e-commerce brands with technology that's not just functional, but genuinely transformative — delivered by a team that measures success by your outcomes.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-border">
                  <h3 className="font-display font-medium text-text-primary mb-2">Our Vision</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    To be the most trusted Shopify & digital transformation partner for growth-stage brands in South Asia and the Middle East — recognized not for our size, but for the quality and impact of our work.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-all duration-300">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary">
        <div className="container">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="Our values guide every conversation, every decision, and every line of code we write."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="p-8 border-r border-b border-border hover:bg-surface transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  borderRightColor: (i + 1) % 3 === 0 ? 'transparent' : undefined,
                }}
              >
                <CheckCircle className="w-5 h-5 text-accent mb-4" />
                <h3 className="font-display font-medium text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Our Journey"
            title="From Kerala to the World"
            subtitle="The story of how a small team with a clear purpose grew into a trusted e-commerce partner for brands across three continents."
          />
          <Timeline items={aboutTimeline} />
        </div>
      </section>

      {/* Team */}
      <section className="section bg-secondary">
        <div className="container">
          <SectionHeading
            label="Leadership"
            title="The People Behind the Work"
            subtitle="A diverse team of e-commerce specialists, designers, and strategists united by a shared commitment to excellence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {teamMembers.map((member, i) => (
              <div key={i} className="border-r border-border last:border-r-0 h-full">
                <TeamCard {...member} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Meet the Team"
        title="Ready to Write Your Digital Success Story?"
        subtitle="Join the 50+ businesses that trust Task19 Technologies as their long-term e-commerce technology partner."
        primaryText="Start a Conversation"
        primaryTo="/contact"
        secondaryText="See Our Work"
        secondaryTo="/portfolio"
      />
    </>
  )
}
