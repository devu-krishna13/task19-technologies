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
      <Link to={`/blog/${slug}`} className="group flex flex-col h-full bg-white rounded-[20px] overflow-hidden transition-all duration-500 border border-gray-100 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1">
        <div className="overflow-hidden relative w-full pt-[60%]">
          <img
            src={image || 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=360&fit=crop'}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-gray-900 shadow-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-4 text-xs font-medium text-gray-500">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime || '5 min read'}
            </span>
          </div>
          <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-[1.35] mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-8 line-clamp-3 flex-1">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 mt-auto text-[13px] font-bold uppercase tracking-wide text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            Read Article
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
