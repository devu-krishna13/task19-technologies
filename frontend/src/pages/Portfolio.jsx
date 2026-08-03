import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { portfolioItems } from '../constants/data'

const portfolioHeroSlides = [
  {
    label: 'Our Portfolio',
    title: <>Crafting Digital Experiences<br /><em className="font-serif-italic not-italic text-white/40">That Drive Growth.</em></>,
    bgDesktop: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
    bgMobile: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&crop=center&w=800&h=1200&q=90',
  },
  {
    label: 'E-Commerce Excellence',
    title: <>High-Performance Stores<br /><em className="font-serif-italic not-italic text-white/40">Built to Scale.</em></>,
    bgDesktop: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
    bgMobile: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=800&h=1200&q=90',
  },
  {
    label: 'Digital Transformation',
    title: <>Empowering Brands with<br /><em className="font-serif-italic not-italic text-white/40">Modern Technology.</em></>,
    bgDesktop: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
    bgMobile: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&crop=center&w=800&h=1200&q=90',
  },
]

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

      {/* ── Page Hero (Rotating Swiper Banner exactly like Home Hero) ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[100svh] md:h-screen md:min-h-[700px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.hero-pagination' }}
          loop
          className="hero-swiper absolute inset-0 w-full h-full"
        >
          {portfolioHeroSlides.map((slide, i) => (
            <SwiperSlide key={i} className="relative w-full h-full flex items-center justify-center">
              {/* Background image with cinematic gradient */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <picture>
                  <source media="(max-width: 768px)" srcSet={slide.bgMobile} />
                  <img
                    src={slide.bgDesktop}
                    alt={slide.label}
                    className="w-full h-full object-cover object-center"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </picture>
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 0.9) 80%)'
                }}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center pt-20 md:pt-0">
                <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 mb-6 md:mb-8"
                  >
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] md:text-xs font-bold">!</div>
                    <span className="text-white/90 text-[12px] md:text-sm font-medium">{slide.label}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto w-full"
                  >
                    <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 5rem)' }}>
                      {slide.title}
                    </h1>
                  </motion.div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-8 left-0 right-0 z-20 pointer-events-none">
          <div className="container flex justify-center">
            <div className="hero-pagination flex gap-2 pointer-events-auto" />
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-5">
          <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
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
