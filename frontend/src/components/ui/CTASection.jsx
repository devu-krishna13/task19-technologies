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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
          <motion.div
            className="max-w-4xl text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-primary" />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-primary">{eyebrow}</span>
            </span>
            <h2 className="font-display font-light text-primary leading-[1.1] mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              {title}
            </h2>
            <p className="text-primary/60 text-xl font-light leading-relaxed max-w-2xl">{subtitle}</p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-5 pb-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-primary text-white font-display font-medium text-sm hover:bg-accent hover:text-white transition-all duration-500 hover:shadow-glow group"
            >
              {primaryText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
