import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex gap-5 p-6 bg-surface border border-border hover:border-accent/20 hover:shadow-md transition-all duration-400"
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-400">
        {Icon && <Icon className="w-5 h-5" strokeWidth={1.5} />}
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
