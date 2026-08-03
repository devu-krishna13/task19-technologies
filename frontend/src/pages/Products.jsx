import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const productsData = [
  {
    id: 'batchwise',
    title: 'Batchwise',
    category: 'Virtual Academy',
    description: 'Launch your virtual academy in seconds. Easily manage courses, batches, online tests, and live schedules.',
    link: 'https://gobatchwise.com/',
    image: 'https://s0.wp.com/mshots/v1/https://gobatchwise.com/?w=1200',
    color: 'from-[#013Ad6] to-blue-400',
  },
  {
    id: 'goslot',
    title: 'GoSlot Store',
    category: 'Grocery SaaS',
    description: 'The platform behind grocery stores that sell online. Build, price, promote, and run highly optimized stores.',
    link: 'https://goslot.store/',
    image: 'https://s0.wp.com/mshots/v1/https://goslot.store/?w=1200',
    color: 'from-emerald-600 to-emerald-400',
  },
  {
    id: 'vespr',
    title: 'Vespr',
    category: 'Luxury Perfume',
    description: 'A magnificent digital storefront designed specifically for the high-end fragrance industry.',
    link: 'https://vespr.store/',
    image: 'https://s0.wp.com/mshots/v1/https://vespr.store/?w=1200',
    color: 'from-[#d4af37] to-yellow-300',
  }
]

export default function Products() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen overflow-hidden selection:bg-[#4859F4] selection:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Helmet>
        <title>Our Products — Task19 Technologies</title>
        <meta name="description" content="Explore our premium digital products: Batchwise, GoSlot Store, and Vespr." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[100svh] md:h-screen md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="Products Background"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, rgba(5, 15, 35, 0.95) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-20 md:pt-0">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 mb-6 md:mb-8"
            >
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] md:text-xs font-bold">!</div>
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Our Digital Ecosystem</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 5rem)' }}>
                Products That <br /><em className="font-serif-italic not-italic text-white/40">Redefine Industries.</em>
              </h1>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ── 3-Column Grid ── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#4859F4]/30 hover:shadow-2xl hover:shadow-[#4859F4]/5 transition-all duration-300 shadow-xl"
            >
              {/* Product Image (Live Screenshot API) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 z-10" />
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col flex-grow p-8 relative z-20 -mt-8">
                <span className={`inline-block w-fit px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white rounded-full bg-gradient-to-r ${product.color} mb-6 shadow-lg`}>
                  {product.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-[#10152F] mb-4">
                  {product.title}
                </h3>
                
                <p className="text-[#475569] text-sm leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                
                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold transition-opacity mt-auto text-sm uppercase tracking-wide hover:opacity-80"
                  style={{ color: '#013Ad6' }}
                >
                  Visit Website
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" style={{ color: '#013Ad6' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
