import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection({
  title = "Let's Build Something Great Together",
  subtitle = "Share your vision and we'll deliver a solution engineered to grow your business.",
  primaryText = 'Get a Free Audit',
  primaryTo = '/contact',
  secondaryText = '',
  secondaryTo = '/portfolio',
  eyebrow = 'Start Your Project',
}) {
  return (
    <section className="section-dark py-24 border-t border-white/10">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent" />
            <span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">{eyebrow}</span>
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="font-display font-light text-white mb-6 leading-snug" style={{ fontSize: 'var(--font-size-h2)' }}>
            {title}
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-display font-semibold text-sm hover:bg-accent-hover transition-all duration-300"
            >
              {primaryText} <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText ? (
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center gap-2 text-sm font-display font-medium text-white/70 hover:text-white transition-all duration-300"
              >
                {secondaryText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
