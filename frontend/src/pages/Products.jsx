import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

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

      {/* ── Page Hero ── */}
      <PageHero
        badgeText="Our Products"
        title={<>Digital Solutions<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">For Every Industry.</span></>}
        description="Explore our premium digital products and platforms built to empower businesses."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

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
