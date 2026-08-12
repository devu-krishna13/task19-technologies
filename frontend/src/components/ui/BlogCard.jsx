import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'

export default function BlogCard({ title, excerpt, category, date, readTime, image, slug, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link to={`/blog/${slug}`} className="group block h-full border border-border hover:border-accent/30 transition-colors duration-300 bg-surface">
        <div className="overflow-hidden relative">
          <img
            src={image || 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=360&fit=crop'}
            alt={title}
            loading="lazy"
            className="w-full aspect-[5/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/50 to-transparent opacity-70" />
        </div>
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-xs font-display font-medium tracking-[0.15em] uppercase text-accent">
              {category}
            </span>
            <span className="text-xs text-text-muted">{date}</span>
          </div>
          <h3 className="font-display text-xl font-medium mb-3 text-text-primary leading-snug
                         group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3 flex-1">
            {excerpt}
          </p>
          <div className="flex items-center justify-between gap-3 pt-5 border-t border-border">
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <Clock className="w-3 h-3" />
              {readTime || '5 min read'}
            </span>
            <div className="flex items-center gap-2 text-sm font-display font-semibold text-accent group-hover:gap-3 transition-all duration-300">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
