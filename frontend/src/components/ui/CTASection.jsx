import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection({
  title = "Let's Build Something Great Together",
  subtitle = "Share your vision and we'll deliver a solution engineered to grow your business.",
  primaryText = 'Get a Free Audit',
  primaryTo = '/contact',
  secondaryText = '',
  secondaryTo = '/portfolio',
  eyebrow = 'Start Your Project',
}) {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-light text-text-primary leading-[1.1] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
              {title}
            </h2>
            <p className="text-text-secondary text-lg font-light leading-relaxed mb-12 max-w-md">{subtitle}</p>
            <div className="flex gap-4">
              <Link to={primaryTo} className="btn-base border border-border text-text-primary hover:bg-black hover:text-white transition-colors duration-300 min-w-[200px] justify-center text-xs">
                {primaryText} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="relative flex justify-end pr-8 pb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-[85%] aspect-[3/4] relative bg-surface">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80" alt={title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              
              {/* Circular Text */}
              <div className="absolute -bottom-16 -right-16 w-44 h-44 animate-[spin_12s_linear_infinite] z-20 pointer-events-none">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text fontSize="10.5" className="font-display tracking-[0.25em] uppercase" fill="#666">
                    <textPath href="#circlePath">
                      {eyebrow} • {eyebrow} • 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
