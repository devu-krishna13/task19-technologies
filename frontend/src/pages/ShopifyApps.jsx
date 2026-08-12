import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, ExternalLink, ShoppingBag, BarChart3, Layers, Zap, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'

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
        <meta name="description" content="Shopify apps built by Task19 Technologies: Profit Saver Loyalty, Page Booster, MarginMate Custom Pricing, and Variant Image Manager. Install from the Shopify App Store." />
        <link rel="canonical" href="https://task19.com/shopify-apps-list/" />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-accent" />
              <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Shopify App Store</span>
            </span>
            <h1 className="font-display font-light text-white mb-7 leading-[1.05]" style={{ fontSize: 'var(--font-size-h1)' }}>
              Apps We've Built for the{' '}
              <em className="font-serif-italic text-white/50">Shopify Ecosystem</em>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light mb-10">
              Proprietary Shopify apps designed and developed by Task19 Technologies — trusted by hundreds of merchants worldwide to grow revenue, improve loyalty, and automate operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-display">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                4.8+ avg. rating across all apps
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-display">
                350+ active merchants
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Detail Sections */}
      {apps.map((app, i) => {
        const Icon = app.icon
        const isEven = i % 2 === 0
        return (
          <section key={app.id} className={`section ${isEven ? 'bg-surface' : 'bg-secondary'}`}>
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={isEven ? '' : 'lg:order-2'}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="inline-block px-3 py-1 text-xs font-display font-medium tracking-wider uppercase text-white"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.badge}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-display font-medium text-text-primary">{app.rating}</span>
                      <span className="text-xs text-text-muted">({app.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="font-display text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: app.color }}>
                    {app.tagline}
                  </p>
                  <h2 className="font-display font-light text-text-primary mb-5 leading-snug" style={{ fontSize: 'var(--font-size-h3)' }}>
                    {app.name}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-7 font-light text-lg">
                    {app.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {app.features.map((f, j) => (
                      <div key={j} className="flex gap-2.5 items-start">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: app.color }} />
                        <span className="text-sm text-text-secondary">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={app.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-display font-semibold text-sm transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: app.color }}
                    >
                      Install App <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-display font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={isEven ? '' : 'lg:order-1'}
                >
                  <div className="relative">
                    <div className="border border-border overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 w-16 h-16 flex items-center justify-center"
                      style={{ backgroundColor: app.color }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Apps Grid Overview */}
      <section className="section bg-primary">
        <div className="container">
          <SectionHeading
            label="All Apps"
            title="Our Complete App Portfolio"
            subtitle="Every app is built with Shopify's official APIs and designed to integrate seamlessly with any Shopify theme."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-dark">
            {apps.map((app, i) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.id}
                  className="border-r border-border-dark last:border-r-0 p-8 hover:bg-white/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-5" style={{ backgroundColor: `${app.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: app.color }} />
                  </div>
                  <p className="text-xs font-display font-medium tracking-[0.2em] uppercase mb-2" style={{ color: app.color }}>
                    {app.tagline}
                  </p>
                  <h3 className="font-display text-base font-medium text-white mb-2 leading-snug">{app.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-white/50 font-medium">{app.rating}</span>
                    </div>
                    <a
                      href={app.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition-colors duration-200"
                    >
                      Install <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Custom App Development Promo */}
      <section className="section bg-surface">
        <div className="container">
          <div className="border border-border p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">Custom Development</span>
                </span>
                <h2 className="font-display font-light text-text-primary mb-5 leading-snug" style={{ fontSize: 'var(--font-size-h3)' }}>
                  Need a Custom Shopify App?
                </h2>
                <p className="text-text-secondary leading-relaxed font-light text-lg mb-6">
                  When the App Store doesn't have what you need, we build it. Our team has extensive experience building private and public Shopify apps — from simple automation tools to complex marketplace integrations.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-all duration-300">
                    Discuss Your App <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  'Private apps for backend business automation',
                  'Public Shopify App Store submissions',
                  'Custom integrations with ERPs, CRMs, and fulfilment',
                  'B2B and Shopify Plus-specific features',
                  'Full UI development using Shopify Polaris',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
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
