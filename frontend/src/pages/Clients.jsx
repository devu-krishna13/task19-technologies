import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../constants/data'

export default function Clients() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Helmet>
        <title>Our Clients — Task19 Technologies</title>
      </Helmet>
      
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[70svh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Clients Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, rgba(5, 15, 35, 0.95) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-20 md:pt-0">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8"
            >
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Trusted By Leaders</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Our <em className="font-serif-italic not-italic text-white/40">Clients.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section (Portfolio Grid) */}
      <section className="py-12 md:py-16 container max-w-5xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">Partnering with Visionaries</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are proud to have partnered with a diverse range of companies, from ambitious startups to established global enterprises. Explore our featured work below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <a
                href={item.externalLink || `/portfolio/${item.slug}`}
                target={item.externalLink ? '_blank' : '_self'}
                rel={item.externalLink ? 'noopener noreferrer' : undefined}
                className="absolute inset-0 z-20"
                aria-label={item.title}
              />

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                
                {/* Row 1: Badge & Link Icon */}
                <div className="flex items-center justify-between mb-3 relative z-30 pointer-events-none">
                  <div className="flex gap-2">
                    {item.industry && (
                      <span className="px-2.5 py-1 bg-blue-50 text-[#013Ad6] text-[10px] font-bold uppercase tracking-wider rounded-md">
                        {item.industry}
                      </span>
                    )}
                  </div>
                  
                  {/* Premium Circle Icon Link */}
                  <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#013Ad6] group-hover:border-[#013Ad6] group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </div>
                </div>

                {/* Row 2: Brand Name */}
                <h3 className="text-lg font-display font-bold text-[#10152F] mb-2 group-hover:text-[#013Ad6] transition-colors">
                  {item.title}
                </h3>
                
                {/* Row 3: Description */}
                <p className="text-gray-500 text-xs leading-relaxed flex-grow line-clamp-2">
                  {item.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
