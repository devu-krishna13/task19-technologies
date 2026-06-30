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
        <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
          {label}
        </span>
      )}
      <h2 className={`font-display font-bold leading-[1.1] mb-4 ${light ? 'text-white' : 'text-text-primary'}`}
          style={{ fontSize: 'var(--font-size-h2)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl md:text-2xl font-body font-light leading-relaxed mt-6 ${light ? 'text-white/70' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
