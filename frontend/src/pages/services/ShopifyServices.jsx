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
                <span className="font-medium text-white" style={{ fontSize: '14px' }}>Shopify Services</span>
              </div>
            </div>
            
            <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
              Shopify Expertise That<br />
              <span className="text-white/60 font-light">Drives Revenue</span>
            </h1>
            
            <p className="font-light leading-relaxed max-w-2xl mb-10" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.8)' }}>
              From D2C store launches to complex app development — our Shopify specialists deliver e-commerce solutions that convert browsers into buyers and buyers into loyal customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold text-[15px] rounded-full hover:bg-gray-100 transition-all duration-300">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium text-[15px] rounded-full hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          {shopifyServices.map((service, i) => {
            const Icon = service.icon
            const isEven = i % 2 === 0
            
            return (
              <div key={service.id} className="mb-24 lg:mb-32 last:mb-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? '' : 'lg:order-2'}
                  >
                    <span className="inline-block font-bold text-[12px] tracking-widest uppercase text-gray-500 mb-4">
                      {service.tagline}
                    </span>
                    <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: '32px' }}>
                      {service.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed font-light text-[18px] mb-8">
                      {service.desc}
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      {service.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                          <span className="text-[15px] text-gray-600 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white font-medium text-[15px] rounded-full hover:bg-gray-800 transition-all duration-300"
                    >
                      Discuss Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>

                  {/* Premium Card Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? '' : 'lg:order-1'}
                  >
                    <div className="relative bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col" style={{ borderRadius: '24px', padding: '48px' }}>
                      <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8">
                        <Icon className="w-7 h-7 text-gray-900" />
                      </div>
                      
                      <h3 className="font-display font-bold text-gray-900 text-2xl mb-8">Proven Results</h3>
                      
                      <div className="space-y-0">
                        {service.results.map((r, j) => (
                          <div key={j} className="flex items-center gap-4 py-5 border-b border-gray-100 last:border-b-0">
                            <div className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                            <span className="font-medium text-gray-700 text-[16px]">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-t border-gray-100" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-6">
                <div className="inline-block bg-white border border-gray-200" style={{ borderRadius: '9999px', padding: '6px 16px' }}>
                  <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Questions & Answers</span>
                </div>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                Shopify Service FAQs
              </h2>
              <p className="text-gray-500 font-light text-[18px] mb-8 max-w-md">
                Have more questions about our Shopify development services? Let's talk.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium text-[15px] rounded-full hover:bg-gray-800 transition-all duration-300">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white border border-gray-100 p-8 shadow-sm" style={{ borderRadius: '24px' }}>
              <FAQAccordion items={faqs} />
            </div>
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
