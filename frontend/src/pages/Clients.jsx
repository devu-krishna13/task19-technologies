import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../constants/data'
import PageHero from '../components/ui/PageHero'
export default function Clients() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Helmet>
        <title>Our Clients — Task19 Technologies</title>
      </Helmet>
      
      {/* ── Hero Section ── */}
      <PageHero
        badgeText="Trusted By Leaders"
        title={<>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Clients.</span></>}
        description="We are proud to have partnered with a diverse range of companies, from ambitious startups to established global enterprises."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

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
