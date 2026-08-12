import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      className={`max-w-3xl mb-14 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {label && (
        <span className="inline-flex items-center gap-3 mb-5">
          <span className="h-px w-8 bg-accent" />
          <span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">
            {label}
          </span>
        </span>
      )}
      <h2 className={`font-display font-light leading-[1.1] mb-5 ${light ? 'text-white' : 'text-text-primary'}`}
          style={{ fontSize: 'var(--font-size-h2)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl font-body font-light leading-relaxed mt-5 ${light ? 'text-white/60' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
