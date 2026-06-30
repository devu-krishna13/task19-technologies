import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import TeamCard from '../components/ui/TeamCard'
import Timeline from '../components/ui/Timeline'
import StatCounter from '../components/ui/StatCounter'
import CTASection from '../components/ui/CTASection'
import { teamMembers, aboutTimeline, stats } from '../constants/data'
import { CheckCircle } from 'lucide-react'

const values = [
  { title: 'Client-First Obsession', desc: 'Every decision we make — from architecture to design — begins and ends with the question: how does this serve our client\'s success?' },
  { title: 'Technical Excellence', desc: 'We hold ourselves to the highest engineering standards. Quality is not a feature; it\'s a baseline expectation on every project.' },
  { title: 'Radical Transparency', desc: 'You always know where your project stands. No surprises, no hidden costs, and no corporate speak — just honest, direct communication.' },
  { title: 'Continuous Learning', desc: 'The technology landscape evolves rapidly. Our team invests continuously in upskilling so your solutions are always built on current best practices.' },
  { title: 'Collaborative Spirit', desc: 'We work with you, not just for you. The best outcomes emerge from genuine partnership, shared context, and mutual respect.' },
  { title: 'Measurable Impact', desc: 'We track and celebrate outcomes, not just outputs. Code that doesn\'t move the needle for your business is code we\'re not proud of.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Task19 Technologies — Our Story, Mission & Team</title>
        <meta name="description" content="Learn about Task19 Technologies — a premier digital transformation company based in Kerala, India, delivering world-class web, mobile, and cloud solutions since 2016." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-dot-pattern">
        <div className="container">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">About Us</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Eight Years of Building Digital <br />
              <span className="text-gradient">Futures That Matter</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
              We started as a small team with a big belief: that exceptional technology, delivered by people who genuinely care, can transform any business. Eight years and 200+ projects later, that belief has never been stronger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCounter key={i} {...stat} />
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
                alt="Task19 Technologies office and team"
                className="w-full object-cover shadow-xl"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">Our Purpose</span>
              <h2 className="font-display font-bold text-text-primary mb-6" style={{ fontSize: 'var(--font-size-h3)' }}>
                More Than Code. We Build Competitive Advantages.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Task19 Technologies was founded on a simple observation: most businesses struggling to scale digitally weren't limited by ideas — they were limited by technical execution. We exist to bridge that gap.
              </p>
              <div className="space-y-6 mb-8">
                <div className="pl-6 border-l-2 border-accent">
                  <h3 className="font-display font-semibold text-text-primary mb-2">Our Mission</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    To empower ambitious businesses with technology solutions that are not just functional, but genuinely transformative — delivered by a team that measures success in your outcomes, not our outputs.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-accent-cyan">
                  <h3 className="font-display font-semibold text-text-primary mb-2">Our Vision</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    To be the most trusted digital transformation partner for growth-stage businesses in South Asia and the Middle East — recognized not for our size, but for the quality and impact of our work.
                  </p>
                </div>
              </div>
              <Button to="/contact" variant="primary" size="md" arrow>Work With Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="Our values are not wall decorations. They are the principles that guide every conversation, every decision, and every line of code we write."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="p-8 bg-surface border border-border hover:border-accent/20 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <CheckCircle className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display font-semibold text-text-primary mb-3">{v.title}</h3>
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
            subtitle="The story of how a small team with a clear purpose grew into a trusted digital transformation partner for brands across three continents."
          />
          <Timeline items={aboutTimeline} />
        </div>
      </section>

      {/* Team */}
      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            label="Leadership"
            title="The People Behind the Work"
            subtitle="A diverse team of technologists, designers, and strategists united by a shared commitment to excellence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <TeamCard key={i} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Write Your Digital Success Story?"
        subtitle="Join the 50+ businesses that trust Task19 Technologies as their long-term digital transformation partner."
        primaryText="Start a Conversation"
        primaryTo="/contact"
        secondaryText="See Our Work"
        secondaryTo="/portfolio"
      />
    </>
  )
}
