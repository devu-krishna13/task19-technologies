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

import profitSaverImg from 'C:/Users/GOPIKRISHNAN/.gemini/antigravity/brain/6c9f05c3-e11a-4ab3-9422-091b1c8761c2/profit_saver_app_1785745430744.png';
import pageBoosterImg from 'C:/Users/GOPIKRISHNAN/.gemini/antigravity/brain/6c9f05c3-e11a-4ab3-9422-091b1c8761c2/page_booster_app_1785745440728.png';
import marginMateImg from 'C:/Users/GOPIKRISHNAN/.gemini/antigravity/brain/6c9f05c3-e11a-4ab3-9422-091b1c8761c2/marginmate_app_1785745451429.png';
import variantImageImg from 'C:/Users/GOPIKRISHNAN/.gemini/antigravity/brain/6c9f05c3-e11a-4ab3-9422-091b1c8761c2/variant_image_app_1785745463136.png';

const appsHeroSlides = [
  {
    label: 'Shopify App Store',
    title: <>Apps We've Built for the<br /><em className="font-serif-italic not-italic text-white/40">Shopify Ecosystem.</em></>,
    bgDesktop: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
    bgMobile: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=800&h=1200&q=90',
  },
  {
    label: 'Merchant Solutions',
    title: <>Automate Operations &<br /><em className="font-serif-italic not-italic text-white/40">Grow Revenue Faster.</em></>,
    bgDesktop: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
    bgMobile: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=800&h=1200&q=90',
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
    shopifyUrl: 'https://task19.com/shopify-apps/profit-saver/',
    badge: 'Top Rated',
    image: profitSaverImg,
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
    shopifyUrl: 'https://task19.com/shopify-apps/page-booster/',
    badge: 'Best Seller',
    image: pageBoosterImg,
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
    shopifyUrl: 'https://task19.com/shopify-apps/marginmate-custom-pricing/',
    badge: 'B2B Essential',
    image: marginMateImg,
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
    shopifyUrl: 'https://task19.com/shopify-apps/variant-image-manager/',
    badge: 'Conversion Booster',
    image: variantImageImg,
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
          {appsHeroSlides.map((slide, i) => (
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

      {/* ── Apps Grid Section (Stacked Cards) ── */}
      <div className="bg-surface py-16 lg:py-32">
        <div className="container max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {apps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  <img 
                    src={app.image} 
                    alt={app.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  {/* Badges overlaid on image */}
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-[12px] font-bold rounded-full shadow-sm" style={{color: app.color}}>{app.badge}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 bg-white">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-[14px] font-bold text-gray-900">{app.rating}</span>
                    <span className="text-[14px] text-gray-500 font-medium">({app.reviews})</span>
                  </div>

                  <p className="font-display text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{color: app.color}}>
                    {app.tagline}
                  </p>
                  
                  <h3 className="font-display font-bold text-gray-900 text-[26px] leading-[1.3] mb-4">
                    {app.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-[1.7] mb-8 text-[15px] font-light">
                    {app.desc}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 gap-y-3 mb-10 flex-grow">
                    {app.features.map((f, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${app.color}15` }}>
                          <CheckCircle className="w-3 h-3" style={{ color: app.color }} />
                        </div>
                        <span className="text-[14px] text-gray-700 font-medium leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-gray-100 mt-auto">
                    <a 
                      href={app.shopifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center font-bold text-[14px] transition-colors hover:opacity-80 uppercase tracking-wide" 
                      style={{color: app.color}}
                    >
                      Install App <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
