import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index
        return (
          <div
            key={index}
            className="border-b border-border transition-colors duration-300 hover:border-accent/40"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
            >
              <span className="font-display text-lg font-medium text-text-primary transition-colors duration-300 hover:text-accent">
                {item.question}
              </span>
              <span className="ml-4 flex h-8 w-8 items-center justify-center bg-secondary text-text-primary transition-transform duration-300">
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
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
                  <div className="pb-6 text-text-secondary leading-relaxed">
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
