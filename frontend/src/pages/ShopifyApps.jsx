import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight, Star, ExternalLink, ShoppingBag, BarChart3, Layers, Zap, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
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
    icon: BarChart3,
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=400&fit=crop',
  },
  {
    id: 'page-booster',
    name: 'Page Booster – Product Blocks',
    tagline: 'Upsells & Product Features',
    icon: Layers,
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=400&fit=crop',
  },
  {
    id: 'marginmate',
    name: 'MarginMate Custom Pricing',
    tagline: 'Custom Pricing Engine',
    icon: Zap,
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
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=640&h=400&fit=crop',
  },
  {
    id: 'variant-image',
    name: 'Task19 Variant Image Manager',
    tagline: 'Product Variant Images',
    icon: ShoppingBag,
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
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=640&h=400&fit=crop',
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

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="bg-white p-6 md:p-10" style={{ border: '1px solid #e5e7eb', borderRadius: '24px' }}>

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

                  {/* Visual Image */}
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

      {/* ── Apps Grid Overview ──
      <section className="bg-gray-50 border-t border-gray-100" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <div className="mb-6">
              <div className="inline-block bg-white border border-gray-200" style={{ borderRadius: '9999px', padding: '6px 16px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>All Apps</span>
              </div>
            </div>
            <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              Our Complete App Portfolio
            </h2>
            <p className="text-gray-500 font-light text-[18px] max-w-2xl">
              Every app is built with Shopify's official APIs and designed to integrate seamlessly with any Shopify theme.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.id}
                  className="bg-white border border-gray-100 p-8 flex flex-col hover:shadow-lg transition-all duration-300"
                  style={{ borderRadius: '24px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-gray-900" />
                  </div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                    {app.tagline}
                  </p>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-6 leading-snug">{app.name}</h3>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{app.rating}</span>
                    </div>
                    <a
                      href={app.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-500 hover:text-black flex items-center gap-1.5 transition-colors duration-200"
                    >
                      Install <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* ── Custom App Promo ──
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-100 p-10 md:p-16" style={{ borderRadius: '32px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6">
                  <div className="inline-block bg-white border border-gray-200" style={{ borderRadius: '9999px', padding: '6px 16px' }}>
                    <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Custom Development</span>
                  </div>
                </div>
                <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
                  Need a Custom Shopify App?
                </h2>
                <p className="text-gray-500 leading-relaxed font-light text-[18px] mb-8">
                  When the App Store doesn't have what you need, we build it. Our team has extensive experience building private and public Shopify apps — from simple automation tools to complex marketplace integrations.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white font-medium text-[15px] rounded-full hover:bg-gray-800 transition-all duration-300">
                    Discuss Your App <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 p-8 shadow-sm" style={{ borderRadius: '24px' }}>
                <div className="space-y-5">
                  {[
                    'Private apps for backend business automation',
                    'Public Shopify App Store submissions',
                    'Custom integrations with ERPs, CRMs, and fulfilment',
                    'B2B and Shopify Plus-specific features',
                    'Full UI development using Shopify Polaris',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-black" />
                      </div>
                      <span className="text-[15px] font-medium text-gray-700 pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* 
      <CTASection
        title="Ready to Scale Your Shopify Store?"
        subtitle="Install one of our apps or get in touch with our engineering team for custom e-commerce solutions."
        primaryText="Get in Touch"
        primaryTo="/contact"
      /> */}
    </>
  )
}
