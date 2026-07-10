import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight, Star, ExternalLink, CheckCircle } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

const appsHeroSlides = [
  {
    label: 'Shopify App Store',
    title: <>Apps We've Built for the<br /><em className="font-serif-italic not-italic text-white/40">Shopify Ecosystem.</em></>,
    bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'Merchant Solutions',
    title: <>Automate Operations &<br /><em className="font-serif-italic not-italic text-white/40">Grow Revenue Faster.</em></>,
    bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  }
]

const apps = [
  {
    id: 'profit-saver',
    name: 'Profit Saver: 7-Tier Loyalty',
    tagline: 'Customer Loyalty & Rewards',
    color: '#013ad6',
    rating: '4.9',
    reviews: '120+',
    desc: 'Drive repeat purchases and increase customer lifetime value with a powerful 7-tier loyalty points system. Reward customers automatically based on spend, and give them real reasons to come back.',
    features: [
      '7 fully customizable loyalty tiers',
      'Points for purchases, reviews, and referrals',
      'Automatic point application at checkout',
      'Merchant dashboard with analytics',
      'Email notifications for milestones',
      'Seamless Shopify theme integration',
    ],
    shopifyUrl: 'https://apps.shopify.com/',
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'page-booster',
    name: 'Page Booster – Product Blocks',
    tagline: 'Upsells & Product Features',
    color: '#7c3aed',
    rating: '4.8',
    reviews: '80+',
    desc: 'Add high-converting product bundles, custom discount codes, and AI-generated product feature highlights directly to your product pages — without touching code.',
    features: [
      'Product bundle builder for upsells',
      'AI-generated feature descriptions',
      'Custom discount code blocks',
      'Drag-and-drop product page editor',
      'Mobile-responsive block layouts',
      'Analytics on block performance',
    ],
    shopifyUrl: 'https://apps.shopify.com/',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'marginmate',
    name: 'MarginMate Custom Pricing',
    tagline: 'Custom Pricing Engine',
    color: '#06b6d4',
    rating: '4.7',
    reviews: '45+',
    desc: 'Set custom pricing rules, volume discounts, and B2B/wholesale pricing tiers for different customer groups — without complex manual overrides or custom code.',
    features: [
      'B2B and wholesale price rules',
      'Volume discount tier management',
      'Customer tag-based pricing',
      'Manual price override capabilities',
      'Price lock for specific collections',
      'Admin dashboard and reporting',
    ],
    shopifyUrl: 'https://apps.shopify.com/',
    badge: 'B2B Essential',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80',
  },
  {
    id: 'variant-image',
    name: 'Task19 Variant Image Manager',
    tagline: 'Product Variant Images',
    color: '#10b981',
    rating: '4.9',
    reviews: '95+',
    desc: 'Display unique, specific images for different product variants — showing the exact product the customer is choosing. Reduce confusion, increase confidence, and boost add-to-cart rates.',
    features: [
      'Per-variant image assignment',
      'Bulk image upload and management',
      'Automatic variant detection',
      'Supports all Shopify themes',
      'No code or theme editing required',
      'Mobile-optimized gallery display',
    ],
    shopifyUrl: 'https://apps.shopify.com/',
    badge: 'Conversion Booster',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
]

export default function ShopifyApps() {
  return (
    <>
      <Helmet>
        <title>Shopify Apps by Task19 Technologies — App Store</title>
        <meta name="description" content="Shopify apps built by Task19 Technologies: Profit Saver Loyalty, Page Booster, MarginMate Custom Pricing, and Variant Image Manager." />
        <link rel="canonical" href="https://task19.com/shopify-apps" />
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
          {appsHeroSlides.map((slide, i) => (
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

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center">
                <div className="container relative flex flex-col items-center text-center px-4 mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">!</div>
                    <span className="text-white/90 text-sm font-medium">{slide.label}</span>
                  </motion.div>

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

      {/* ── Apps Detail Sections ── */}
      <div className="bg-surface py-12 lg:py-20 flex flex-col gap-12 lg:gap-16">
        {apps.map((app, i) => {
          const isEven = i % 2 === 0
          return (
            <section key={app.id} className="section bg-surface pt-0 pb-0">
              <div className="container max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

                  {/* Text Content in Border Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="bg-white p-6 md:p-10" style={{ border: '1px solid #e5e7eb', borderRadius: '24px' }}>

                      {/* Pill style badges (Strategy our work style) */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px' }}>
                          <span className="font-medium" style={{ fontSize: '13px', color: app.color }}>{app.badge}</span>
                        </div>
                        <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px' }}>
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                            <span className="text-[13px] font-medium text-gray-800">{app.rating}</span>
                            <span className="text-[13px] text-gray-500">({app.reviews})</span>
                          </div>
                        </div>
                      </div>

                      <p className="font-display text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: app.color }}>
                        {app.tagline}
                      </p>
                      <h2 className="font-display font-bold text-gray-900 mb-5 leading-tight" style={{ fontSize: '32px' }}>
                        {app.name}
                      </h2>
                      <p className="text-gray-500 leading-relaxed mb-8 font-light" style={{ fontSize: '16px' }}>
                        {app.desc}
                      </p>

                      {/* Features List styled beautifully */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                        {app.features.map((f, j) => (
                          <div key={j} className="flex gap-3 items-start">
                            <div className="flex-shrink-0 mt-0.5 rounded-full p-1" style={{ backgroundColor: `${app.color}15` }}>
                              <CheckCircle className="w-4 h-4" style={{ color: app.color }} />
                            </div>
                            <span className="text-sm text-gray-600 font-light leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={app.shopifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-80"
                          style={{ backgroundColor: app.color, color: '#fff', borderRadius: '14px', padding: '12px 24px' }}
                        >
                          <span>Install App</span> <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Visual Image with rounded corners only */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="overflow-hidden shadow-sm" style={{ borderRadius: '24px', border: '1px solid #e5e7eb' }}>
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ── CTA / Ready To Build Section ── */}
      {/* <CTASection
        title="Need a Custom Shopify App?"
        subtitle="When the App Store doesn't have what you need, we build it. Our team builds private and public Shopify apps using Polaris."
        primaryText="Discuss Your App"
        primaryTo="/contact"
        eyebrow="Custom Development"
      /> */}
    </>
  )
}
