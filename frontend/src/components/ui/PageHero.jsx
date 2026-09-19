import React from 'react'
import { motion } from 'framer-motion'

/**
 * PageHero Component
 * Standardized light-mode dotted hero section for all pages.
 * 
 * @param {string} badgeText - Small text appearing in the pill at the top (e.g. "E-Commerce Experts")
 * @param {ReactNode|string} title - Main H1 heading
 * @param {string} description - Subtitle/description text
 * @param {string} orbColor1 - Tailwind color class for the left glowing orb (e.g., 'bg-purple-300/20')
 * @param {string} orbColor2 - Tailwind color class for the right glowing orb (e.g., 'bg-emerald-300/20')
 */
export default function PageHero({ 
  badgeText, 
  title, 
  description, 
  orbColor1 = 'bg-blue-300/20', 
  orbColor2 = 'bg-emerald-300/20',
  children
}) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32 pb-16">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
      
      <div className="container relative z-10 px-4 sm:px-6 mx-auto text-center">
        {badgeText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm shadow-sm"
          >
            <span className="text-sm font-medium text-gray-700">{badgeText}</span>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-gray-900 leading-tight tracking-tight mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Render CTA buttons or other elements here */}
          {children && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {children}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Gradient Orbs for modern aesthetic */}
      <div className={`absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[100px] pointer-events-none ${orbColor1}`}></div>
      <div className={`absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[100px] pointer-events-none ${orbColor2}`}></div>
    </section>
  )
}
