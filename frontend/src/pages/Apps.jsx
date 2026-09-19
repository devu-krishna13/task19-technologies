import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Star, ExternalLink, ShoppingBag, BarChart3, Layers, Zap, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import PageHero from '../components/ui/PageHero'
const appsHeroSlides = [
  {
    label: 'Profit Saver & Page Booster',
    title: <><span className="whitespace-nowrap">Drive Loyalty &</span><br /><em className="font-serif-italic not-italic text-white">Boost Conversions.</em></>,
    bgDesktop: '/shopify-apps-hero-1.jpg',
    bgMobile: '/shopify-apps-hero-1.jpg',
  },
  {
    label: 'MarginMate & Variant Image Manager',
    title: <><span className="whitespace-nowrap">Advanced Custom Pricing &</span><br /><em className="font-serif-italic not-italic text-white">Variant Galleries.</em></>,
    bgDesktop: '/shopify-apps-hero-2.jpg',
    bgMobile: '/shopify-apps-hero-2.jpg',
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
    shopifyUrl: '/shopify-apps/profit-saver',
    isInternal: true,
    badge: 'Top Rated',
    image: '/profitsaverdashboard.jpeg',
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
    shopifyUrl: '/shopify-apps/page-booster',
    isInternal: true,
    badge: 'Best Seller',
    image: '/pageboosternew.jpeg',
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
    shopifyUrl: '/shopify-apps/marginmate',
    isInternal: true,
    badge: 'B2B Essential',
    image: '/marginmatecutompricing.jpeg',
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
    shopifyUrl: '/shopify-apps/variant-image',
    isInternal: true,
    badge: 'Conversion Booster',
    image: '/variantimagemanager.jpeg',
  },
]

export default function ShopifyApps() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Shopify Apps by Task19 Technologies — App Store</title>
        <meta name="description" content="Shopify apps built by Task19 Technologies: Profit Saver Loyalty, Page Booster, MarginMate Custom Pricing, and Variant Image Manager." />
        <link rel="canonical" href="https://task19.com/shopify-apps" />
      </Helmet>

      {/* ── Page Hero ── */}
      <PageHero
        badgeText="Our Apps"
        title={<>Shopify <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Apps.</span></>}
        description="Powerful, conversion-focused Shopify apps designed to scale your store and increase revenue."
        orbColor1="bg-emerald-300/20"
        orbColor2="bg-teal-300/20"
      />

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
                onClick={() => app.isInternal ? navigate(app.shopifyUrl) : window.open(app.shopifyUrl, '_blank')}
                className="group relative bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
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
                    <div 
                      className="inline-flex items-center font-bold text-[14px] transition-colors hover:opacity-80 uppercase tracking-wide" 
                      style={{color: app.color}}
                    >
                      {app.isInternal ? 'View Details' : 'Install App'} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
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
