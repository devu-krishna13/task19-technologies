import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-0 md:pl-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Dot */}
            <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 items-center justify-center bg-accent text-white font-display font-bold text-sm">
              {item.year || String(index + 1).padStart(2, '0')}
            </div>
            <div className="bg-secondary border border-border p-6 hover:border-accent/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block font-display text-xs font-semibold tracking-widest uppercase text-accent md:hidden">
                  {item.year}
                </span>
                <h3 className="font-display text-xl font-semibold text-text-primary">{item.title}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
