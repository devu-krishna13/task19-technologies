import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map((item, index) => {
        const isOpen = activeIndex === index
        return (
          <div
            key={index}
            className="bg-white transition-all duration-300"
            style={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between text-left focus:outline-none"
              style={{ padding: '24px' }}
            >
              <span className="font-display font-bold transition-colors duration-300 pr-4" style={{ fontSize: '17px', color: '#111827' }}>
                {item.question}
              </span>
              <span className="flex flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300" style={{ width: '36px', height: '36px', backgroundColor: '#f3f4f6' }}>
                {isOpen ? (
                  <X className="w-4 h-4" style={{ color: '#000' }} />
                ) : (
                  <Plus className="w-4 h-4" style={{ color: '#000' }} />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="leading-relaxed" style={{ padding: '0 24px 24px 24px', color: '#4b5563', fontSize: '15px' }}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
