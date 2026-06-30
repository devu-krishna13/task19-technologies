import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Parse value to find numeric part
  const numericValue = parseInt(value, 10) || 0

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = numericValue
    if (start === end) return

    const totalMiliseconds = duration * 1000
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10)
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime))
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, numericValue, duration])

  return (
    <div ref={ref} className="text-center p-6 bg-secondary border border-transparent hover:border-border transition-all duration-500">
      <motion.div 
        className="font-display text-4xl sm:text-5xl font-extrabold text-text-primary mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {count}
        {suffix}
      </motion.div>
      <p className="text-xs font-display font-semibold tracking-widest text-text-muted uppercase">
        {label}
      </p>
    </div>
  )
}
