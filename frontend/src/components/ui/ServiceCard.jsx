import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, description, to, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        to={to}
        className="group relative flex flex-col p-8 h-full bg-surface border border-border rounded-none
                   hover:border-accent/30 transition-all duration-500"
      >
        <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-none
                        bg-secondary text-text-primary transition-all duration-500
                        group-hover:bg-accent group-hover:text-white group-hover:scale-105">
          {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
        </div>
        <h3 className="font-display text-xl font-medium mb-3 text-text-primary
                       group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold text-accent
                        opacity-0 translate-x-[-8px] group-hover:opacity-100
                        group-hover:translate-x-0 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Link>
    </motion.div>
  )
}
