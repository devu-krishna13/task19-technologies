import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ExternalLink, ShoppingBag, BarChart3, Layers, Zap, CheckCircle } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

const apps = [
  {
    id: 'profit-saver',
    name: 'Profit Saver: 7-Tier Loyalty',
    tagline: 'Customer Loyalty & Rewards',
    icon: BarChart3,
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 'page-booster',
    name: 'Page Booster – Product Blocks',
    tagline: 'Upsells & Product Features',
    icon: Layers,
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 'marginmate',
    name: 'MarginMate Custom Pricing',
    tagline: 'Custom Pricing Engine',
    icon: Zap,
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
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
  },
  {
    id: 'variant-image',
    name: 'Task19 Variant Image Manager',
    tagline: 'Product Variant Images',
    icon: ShoppingBag,
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
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
  },
]

export default function ShopifyApps() {
  return (
    <>
      <Helmet>
        <title>Shopify Apps by Task19 Technologies — App Store</title>
        <meta name="description" content="Shopify apps built by Task19 Technologies: Profit Saver Loyalty, Page Booster, MarginMate Custom Pricing, and Variant Image Manager. Install from the Shopify App Store." />
        <link rel="canonical" href="https://task19.com/shopify-apps-list/" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="section relative overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 1) 80%)', paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-md" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '6px 16px' }}>
                <span className="font-medium text-white" style={{ fontSize: '14px' }}>Shopify App Store</span>
              </div>
            </div>
            
            <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
              Apps We've Built for the<br />
              <span className="text-white/60 font-light">Shopify Ecosystem</span>
            </h1>
            
            <p className="font-light leading-relaxed max-w-2xl mb-10" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.8)' }}>
              Proprietary Shopify apps designed and developed by Task19 Technologies — trusted by hundreds of merchants worldwide to grow revenue, improve loyalty, and automate operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                4.8+ avg. rating across all apps
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium">
                350+ active merchants
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Apps Detail Sections ── */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          {apps.map((app, i) => {
            const Icon = app.icon
            const isEven = i % 2 === 0
            
            return (
              <div key={app.id} className="mb-24 lg:mb-32 last:mb-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? '' : 'lg:order-2'}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-widest uppercase bg-black text-white rounded-full">
                        {app.badge}
                      </span>
                      <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold text-gray-900">{app.rating}</span>
                        <span className="text-xs text-gray-500 font-medium">({app.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <span className="inline-block font-bold text-[12px] tracking-widest uppercase text-gray-500 mb-3">
                      {app.tagline}
                    </span>
                    <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: '32px' }}>
                      {app.name}
                    </h2>
                    <p className="text-gray-500 leading-relaxed font-light text-[18px] mb-8">
                      {app.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {app.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                          <span className="text-[14px] text-gray-600 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={app.shopifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white font-medium text-[15px] rounded-full hover:bg-gray-800 transition-all duration-300"
                      >
                        Install App <ExternalLink className="w-4 h-4" />
                      </a>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-900 font-medium text-[15px] rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>

                  {/* Premium Image Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative ${isEven ? '' : 'lg:order-1'}`}
                  >
                    <div className="relative bg-gray-100 border border-gray-100 overflow-hidden group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500" style={{ borderRadius: '24px' }}>
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Frosted Glass Icon Badge */}
                      <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Apps Grid Overview ── */}
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
            {apps.map((app, i) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.id}
                  className="bg-white border border-gray-100 p-8 flex flex-col hover:shadow-lg transition-all duration-300"
                  style={{ borderRadius: '24px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
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
      </section>

      {/* ── Custom App Promo ── */}
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
      </section>

      <CTASection
        title="Ready to Supercharge Your Shopify Store?"
        subtitle="Install one of our apps or get in touch to discuss a custom development solution."
        primaryText="Get a Free Consultation"
        secondaryText="Browse Services"
        secondaryTo="/services/shopify"
      />
    </>
  )
}
