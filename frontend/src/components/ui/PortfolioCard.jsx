import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function PortfolioCard({ title, category, image, to, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={to || '#'} className="group block relative overflow-hidden bg-secondary">
        <div className="aspect-square overflow-hidden border border-border">
          <img
            src={image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop'}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="pt-4 pb-2">
          <span className="inline-block text-xs font-display font-medium tracking-[0.15em]
                           uppercase text-accent mb-1.5">
            {category}
          </span>
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-light text-text-primary group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
