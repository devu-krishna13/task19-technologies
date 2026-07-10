import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { portfolioItems } from '../constants/data'

// Portfolio Hero Slides styled exactly like Homepage Hero Slides
const portfolioHeroSlides = [
  {
    label: 'Case Study: Paintemic',
    title: <>E-Commerce Re-Imagined.<br /><em className="font-serif-italic not-italic text-white/40">Paintemic.</em></>,
    bg: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'Case Study: DSNY Online',
    title: <>Seamless Fashion Experience.<br /><em className="font-serif-italic not-italic text-white/40">DSNY Online.</em></>,
    bg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'Case Study: Riza UAE',
    title: <>High-Performance Commerce.<br /><em className="font-serif-italic not-italic text-white/40">Riza UAE.</em></>,
    bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
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
      <section className="relative overflow-hidden bg-primary hero-section-wrapper h-screen min-h-[600px]">
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
                <img
                  src={slide.bg}
                  alt={slide.label}
                  className="w-full h-full object-cover object-center"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 0.9) 80%)'
                }}></div>
              </div>

              {/* Content — Centered absolutely */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center">
                <div className="container relative flex flex-col items-center text-center px-4 mx-auto">

                  {/* Top Badge (slide.label) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">!</div>
                    <span className="text-white/90 text-sm font-medium">{slide.label}</span>
                  </motion.div>

                  {/* Main Headline (slide.title) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto"
                  >
                    <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
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
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                  style={{ borderRadius: '24px' }}
                >
                  <a
                    href={item.externalLink || `/portfolio/${item.slug}`}
                    target={item.externalLink ? '_blank' : '_self'}
                    rel={item.externalLink ? 'noopener noreferrer' : undefined}
                    className="absolute inset-0 z-10"
                    aria-label={item.title}
                  />

                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '9999px' }}>
                      <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest">{item.industry || item.category}</span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow relative z-0" style={{ padding: '32px' }}>
                    <h6 className="font-display font-bold text-gray-900 leading-tight tracking-tight group-hover:text-black transition-colors mb-3" style={{ fontSize: '22px' }}>
                      {item.title}
                    </h6>
                    <p className="text-gray-500 font-light leading-relaxed line-clamp-3 mb-6" style={{ fontSize: '15px' }}>
                      {item.shortDesc}
                    </p>
                    <div className="mt-auto flex items-center text-gray-500 hover:text-black font-medium transition-colors" style={{ fontSize: '14px' }}>
                      View Website
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
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
