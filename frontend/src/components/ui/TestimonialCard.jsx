import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function TestimonialCard({ name, company, role, content, avatar, rating = 5, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface border border-border p-8 h-full flex flex-col hover:border-accent/30 hover:shadow-lg transition-all duration-500"
    >
      <Quote className="w-8 h-8 text-accent/30 mb-4" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-text-secondary leading-relaxed flex-1 mb-6 italic">"{content}"</p>
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <img
          src={avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&size=48`}
          alt={name}
          className="w-12 h-12 object-cover rounded-full"
          loading="lazy"
        />
        <div>
          <p className="font-display font-semibold text-text-primary text-sm">{name}</p>
          <p className="text-xs text-text-muted">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  )
}
