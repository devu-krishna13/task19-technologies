import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import { portfolioItems } from '../constants/data'



export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  // Extract unique categories (industries) from the portfolio items
  const categories = useMemo(() => {
    const allCategories = portfolioItems.map(item => item.industry || item.category).filter(Boolean)
    return ['All', ...new Set(allCategories)]
  }, [])

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems
    return portfolioItems.filter(item => (item.industry || item.category) === activeFilter)
  }, [activeFilter])

  return (
    <>
      <Helmet>
        <title>Recent Portfolio — Task19 Technologies</title>
        <meta name="description" content="Explore our recent portfolio of Shopify and e-commerce projects built for brands across fashion, retail, food, and marketplace industries." />
        <link rel="canonical" href="https://task19.com/portfolio" />
      </Helmet>

      {/* ── Page Hero ── */}
      <PageHero
        badgeText="Our Portfolio"
        title={<>Digital Experiences<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">That Drive Growth.</span></>}
        description="Explore our recent portfolio of Shopify and e-commerce projects built for brands across fashion, retail, food, and marketplace industries."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-emerald-300/20"
      />

      {/* ── Filter Bar ── */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className="whitespace-nowrap transition-all duration-300 hover:text-black"
                style={{
                  padding: '8px 24px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: `1px solid ${activeFilter === category ? '#000000' : '#e5e7eb'}`,
                  backgroundColor: activeFilter === category ? '#000000' : '#ffffff',
                  color: activeFilter === category ? '#ffffff' : '#6b7280',
                  boxShadow: activeFilter === category ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Portfolio Items ── */}
      <section className="section bg-white" style={{ paddingTop: '64px', paddingBottom: '128px' }}>
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <Link
                    to={`/portfolio/${item.slug}`}
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
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
