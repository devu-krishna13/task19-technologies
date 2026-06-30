import { motion } from 'framer-motion'
import Button from './Button'

export default function CTASection({
  label = 'Get Started',
  title = 'Ready to Build Something Extraordinary?',
  subtitle = 'Partner with Task19 Technologies and transform your digital vision into a high-performance reality.',
  primaryText = 'Start Your Project',
  primaryTo = '/contact',
  secondaryText = 'View Our Work',
  secondaryTo = '/portfolio',
  dark = true,
}) {
  return (
    <section className={`section ${dark ? 'section-dark bg-dot-pattern' : 'bg-accent'}`}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
            {label}
          </span>
          <h2 className={`font-display font-bold leading-tight mb-6 ${dark ? 'text-white' : 'text-white'}`}
              style={{ fontSize: 'var(--font-size-h2)' }}>
            {title}
          </h2>
          <p className="text-lg mb-10 leading-relaxed text-white/70">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to={primaryTo} variant="primary" size="lg" arrow>
              {primaryText}
            </Button>
            <Button to={secondaryTo} variant="outline-white" size="lg" arrow>
              {secondaryText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
