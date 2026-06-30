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
      <Link to={to || '#'} className="group block relative overflow-hidden bg-primary-light">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop'}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4
                        group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block text-xs font-display font-semibold tracking-[0.15em]
                           uppercase text-accent mb-2 opacity-0 group-hover:opacity-100
                           transition-opacity duration-500 delay-100">
            {category}
          </span>
          <div className="flex items-end justify-between">
            <h3 className="font-display text-lg font-semibold text-white opacity-0
                           group-hover:opacity-100 transition-opacity duration-500 delay-150">
              {title}
            </h3>
            <div className="w-10 h-10 flex items-center justify-center bg-accent text-white
                            opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100
                            transition-all duration-500 delay-200">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
