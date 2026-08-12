import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ShoppingCart, Palette, Package, Code2 } from 'lucide-react'
import SectionHeading from '../../components/ui/SectionHeading'
import CTASection from '../../components/ui/CTASection'
import FAQAccordion from '../../components/ui/FAQAccordion'

const shopifyServices = [
  {
    id: 'D2C Store Setup',
    icon: ShoppingCart,
    color: '#013ad6',
    tagline: '01 — Store Setup',
    title: 'D2C Shopify Store Development',
    desc: 'End-to-end Shopify store creation for direct-to-consumer brands. From theme selection to custom Liquid development, payment integrations, and full store launch strategy.',
    features: [
      'Custom Shopify theme development (Liquid, Section Blocks)',
      'Product catalog setup with collections and tags',
      'Payment gateway integration (Stripe, Razorpay, PayPal)',
      'WhatsApp, email marketing, and CRM integrations',
      'Analytics & conversion tracking setup (GA4, Pixel)',
      'International market & multi-currency configuration',
    ],
    link: '/contact',
    results: ['140% avg. conversion lift', '4–8 week delivery', '30-day post-launch support'],
  },
  {
    id: 'CRO',
    icon: Palette,
    color: '#7c3aed',
    tagline: '02 — CRO & Optimization',
    title: 'Shopify Customization & CRO',
    desc: 'Transform an underperforming store into a revenue machine. We audit, redesign, and optimize your Shopify storefront for maximum conversions, mobile performance, and user experience.',
    features: [
      'Full CRO audit and conversion bottleneck analysis',
      'Homepage, collection & product page redesign',
      'Mobile-first speed optimization (Core Web Vitals)',
      'A/B testing strategy and implementation',
      'Checkout flow redesign and abandoned cart recovery',
      'Upsell, cross-sell, and bundle configuration',
    ],
    link: '/contact',
    results: ['35% avg. cart abandonment reduction', 'Sub-2s load times', '220% organic traffic growth'],
  },
  {
    id: 'WooCommerce',
    icon: Package,
    color: '#06b6d4',
    tagline: '03 — WooCommerce',
    title: 'WooCommerce Development & Migration',
    desc: 'Build powerful WooCommerce stores from scratch, or migrate from Magento, Shopify, or other platforms with zero data loss and zero downtime.',
    features: [
      'Custom WooCommerce theme and plugin development',
      'Magento, OpenCart, Shopify to WooCommerce migration',
      'Complex subscription and delivery scheduling systems',
      'B2B pricing, wholesale, and bulk order management',
      'Custom checkout workflows and payment gateways',
      'WooCommerce performance tuning and scaling',
    ],
    link: '/contact',
    results: ['500+ active subscribers delivered', '0 downtime migrations', '4.9/5 avg. client rating'],
  },
  {
    id: 'ShopifyApps',
    icon: Code2,
    color: '#10b981',
    tagline: '04 — Custom Apps',
    title: 'Custom Shopify App Development',
    desc: 'When the Shopify App Store doesn\'t have what you need, we build it. From private business automation apps to public apps for the Shopify marketplace.',
    features: [
      'Private Shopify apps for backend automation',
      'Public Shopify App Store app development',
      'Shopify Plus and B2B app customizations',
      'Integration with ERP, CRM, and fulfilment systems',
      'Webhook-based event automation and Metafield management',
      'Shopify Polaris UI component development',
    ],
    link: '/contact',
    results: ['4 public apps on App Store', '200+ merchants served', 'React + Node.js stack'],
  },
]

const faqs = [
  {
    question: 'What Shopify plans do you support?',
    answer: 'We work with all Shopify plans — from Basic Shopify through to Shopify Plus. For enterprise brands, we specialize in Shopify Plus features like custom checkouts, B2B portals, and multi-store management.',
  },
  {
    question: 'Can you migrate our store from WooCommerce or Magento to Shopify?',
    answer: 'Yes. We have a proven migration process that preserves all product data, customer data, order history, and SEO rankings. We use validated data mapping and staging environments to ensure zero data loss and zero downtime during migration.',
  },
  {
    question: 'How long does a Shopify store build typically take?',
    answer: 'A standard D2C Shopify store build takes 4–8 weeks from discovery to launch. Complex stores with custom features, multi-language support, or third-party integrations may require 10–14 weeks.',
  },
  {
    question: 'Do you build custom Shopify themes from scratch?',
    answer: 'Yes. We develop fully custom Shopify themes using Liquid, Section Architecture, and JSON templates. We also customize premium themes like Dawn, Prestige, and Impulse when that is the more cost-effective approach.',
  },
  {
    question: 'What makes a custom Shopify app different from a public app?',
    answer: 'A private app is built specifically for your store\'s unique business logic and is not listed on the Shopify App Store. A public app is listed on the App Store and available to all merchants. We develop both, using Shopify\'s official App Bridge, REST, and GraphQL Admin APIs.',
  },
]

export default function ShopifyServices() {
  return (
    <>
      <Helmet>
        <title>Shopify Development Services — Task19 Technologies</title>
        <meta name="description" content="Expert Shopify development services including D2C store setup, CRO & customization, WooCommerce migration, and custom Shopify app development. Delivered by Task19 Technologies." />
        <link rel="canonical" href="https://task19.com/shopify-services/" />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-accent" />
              <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Shopify Services</span>
            </span>
            <h1 className="font-display font-light text-white mb-7 leading-[1.05]" style={{ fontSize: 'var(--font-size-h1)' }}>
              Shopify Expertise That<br />
              <em className="font-serif-italic text-white/50">Drives Revenue</em>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light mb-10">
              From D2C store launches to complex app development — our Shopify specialists deliver e-commerce solutions that convert browsers into buyers and buyers into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-display font-semibold text-sm hover:bg-accent-hover transition-all duration-300">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-display font-medium text-sm hover:border-white/50 transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      {shopifyServices.map((service, i) => {
        const Icon = service.icon
        const isEven = i % 2 === 0
        return (
          <section key={service.id} className={`section ${isEven ? 'bg-surface' : 'bg-secondary'}`}>
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={isEven ? '' : 'lg:order-2'}
                >
                  <span className="inline-block font-display text-xs font-medium tracking-[0.2em] uppercase mb-5" style={{ color: service.color }}>
                    {service.tagline}
                  </span>
                  <h2 className="font-display font-light text-text-primary mb-5 leading-snug" style={{ fontSize: 'var(--font-size-h3)' }}>
                    {service.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-8 font-light text-lg">
                    {service.desc}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                        <span className="text-sm text-text-secondary">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-display font-semibold text-sm transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: service.color }}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={isEven ? '' : 'lg:order-1'}
                >
                  <div className="border border-border p-8 bg-surface">
                    <div
                      className="w-16 h-16 flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.color}10` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                    <h3 className="font-display font-medium text-text-primary text-lg mb-6">Proven Results</h3>
                    <div className="space-y-4">
                      {service.results.map((r, j) => (
                        <div key={j} className="flex items-center gap-3 py-3 border-b border-border last:border-b-0">
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: service.color }} />
                          <span className="font-display font-medium text-text-primary text-sm">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* FAQ */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                label="Questions & Answers"
                title="Shopify Service FAQs"
                align="left"
                className="mb-0"
              />
              <p className="text-text-secondary mt-5 mb-8 font-light">
                Have more questions about our Shopify development services? Let's talk.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-all duration-300">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Shopify Success Story?"
        subtitle="Join 50+ brands that trust Task19 Technologies to power their e-commerce growth."
        primaryText="Get Free Store Audit"
        secondaryText="View Case Studies"
        secondaryTo="/portfolio"
      />
    </>
  )
}
