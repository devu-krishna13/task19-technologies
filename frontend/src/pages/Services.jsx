import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight } from 'lucide-react'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'

const servicesHeroSlides = [
  {
    label: 'Shopify Store Development',
    title: <>Shopify Expertise That<br /><em className="font-serif-italic not-italic text-white/40">Drives Revenue.</em></>,
    bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'CRO & Customization',
    title: <>Maximize E-commerce Conversions<br /><em className="font-serif-italic not-italic text-white/40">Through Audit & Design.</em></>,
    bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'Custom App Development',
    title: <>Shopify Apps & Integrations<br /><em className="font-serif-italic not-italic text-white/40">Without Boundaries.</em></>,
    bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
]

const featureImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
];

const shopifyServices = [
  {
    id: 'D2C Store Setup',
    tagline: 'PHASE 01 — FOUNDATION',
    shortName: 'FOUNDATION',
    color: '#b45309', // Warm amber/brown
    title: 'Shopify D2C Developer Setup & Strategy',
    desc: 'We architect and build high-performing Shopify stores from the ground up for direct-to-consumer brands, structuring every decision around conversion and growth from day one.',
    featuresGrid: [
      {
        title: 'Platform Architecture Consulting',
        desc: 'Guidance on choosing the right plan — Standard, Advanced, or Shopify Plus — for where your brand is headed.'
      },
      {
        title: 'Developer Environment Setup',
        desc: 'Secure development, staging, and live environments configured for a clean, dependable release process.'
      },
      {
        title: 'Core Store Configuration',
        desc: 'Shipping profiles, payment gateways, tax rules, multi-currency, and localisation — set up right, once.'
      },
      {
        title: 'Code Structure & Theme Strategy',
        desc: 'Scalable Liquid, sound version control, and theme practices your future team can actually build on.'
      }
    ]
  },
  {
    id: 'CRO',
    tagline: 'PHASE 02 — OPTIMIZATION',
    shortName: 'OPTIMIZE',
    color: '#7c3aed', // Purple
    title: 'Shopify Customization & CRO Strategy',
    desc: 'Transform an underperforming store into a conversion engine. We audit, redesign, and optimize your storefront to lift average order value and scale conversion metrics.',
    featuresGrid: [
      {
        title: 'Performance & Speed Audits',
        desc: 'Analyzing Core Web Vitals, server response times, and script loads to eliminate friction points.'
      },
      {
        title: 'A/B Testing Implementation',
        desc: 'Launching layout experiments on collection and detail pages to identify high-converting designs.'
      },
      {
        title: 'Frictionless Mobile UX',
        desc: 'Streamlining navigation headers, slide-out carts, and filter setups optimized for mobile buyers.'
      },
      {
        title: 'Strategic AOV Uplift Tools',
        desc: 'Configuring custom bundle checkouts, cart recommendations, and threshold progress bars.'
      }
    ]
  },
  {
    id: 'WooCommerce',
    tagline: 'PHASE 03 — MIGRATION',
    shortName: 'MIGRATE',
    color: '#06b6d4', // Cyan
    title: 'WooCommerce Development & Transition',
    desc: 'Build secure, scalable WooCommerce environments, or migrate existing platforms with complete data preservation and zero catalog downtime.',
    featuresGrid: [
      {
        title: 'Zero-Loss Database Export',
        desc: 'Preserving orders, customer details, products, and historic coupons with validated mapping models.'
      },
      {
        title: 'Plugin & Theme Customization',
        desc: 'Writing clean custom plugins and custom themes to support subscription and membership portals.'
      },
      {
        title: 'B2B & Wholesale Engine',
        desc: 'Setting up custom tier pricing, bulk order lists, customer registration checks, and tax exemptions.'
      },
      {
        title: 'ERP & Inventory Sync',
        desc: 'Automating inventory updates and order syncs with external systems using WooCommerce APIs.'
      }
    ]
  },
  {
    id: 'ShopifyApps',
    tagline: 'PHASE 04 — INTEGRATION',
    shortName: 'INTEGRATE',
    color: '#10b981', // Green
    title: 'Custom Shopify App Development',
    desc: 'Create custom apps when standard integrations fall short. From private automations to public SaaS apps listed on the Shopify App Store.',
    featuresGrid: [
      {
        title: 'Private Store Automations',
        desc: 'Automating internal workflows, third-party stock syncing, and advanced metadata operations.'
      },
      {
        title: 'Shopify App Store Launch',
        desc: 'Designing and building public apps using React, Node.js, and official Shopify Polaris guidelines.'
      },
      {
        title: 'Plus Checkout Customization',
        desc: 'Implementing custom checkout validators, functions, and delivery rules for Shopify Plus stores.'
      },
      {
        title: 'Secure API Connections',
        desc: 'Connecting storefronts to HubSpot, Salesforce, custom CRM, and logistics solutions via secure APIs.'
      }
    ]
  }
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

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Shopify & E-Commerce Development Services — Task19 Technologies</title>
        <meta name="description" content="Expert Shopify development services including D2C store setup, CRO & customization, WooCommerce migration, and custom Shopify app development. Delivered by Task19 Technologies." />
        <link rel="canonical" href="https://task19.com/services" />
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
          {servicesHeroSlides.map((slide, i) => (
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

              {/* Content — Centered absolutely */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center">
                <div className="container relative flex flex-col items-center text-center px-4 mx-auto">

                  {/* Top Badge (slide.label) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">!</div>
                    <span className="text-white/90 text-sm font-medium">{slide.label}</span>
                  </motion.div>

                  {/* Main Headline (slide.title) */}
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

      {/* ── Services Content List (Styled like Homepage Full-Stack Section) ── */}
      <div className="bg-surface py-12 lg:py-16 flex flex-col gap-1 lg:gap-2">
        {shopifyServices.map((service, index) => {
          return (
            <section key={service.id} className="section bg-surface pt-0 pb-0">
              <div className="container max-w-6xl mx-auto px-4">

                {/* Header (Pill) */}
                <div className="mb-6">
                  <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px' }}>
                    <span className="font-medium text-gray-800" style={{ fontSize: '14px', color: service.color }}>{service.tagline}</span>
                  </div>
                </div>

                {/* Title and Description Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center" style={{ marginBottom: '64px' }}>
                  <div>
                    <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: '42px', margin: 0 }}>
                      {service.title}
                    </h2>
                    <p className="font-light leading-relaxed max-w-xl text-gray-500" style={{ fontSize: '18px', margin: 0 }}>
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.featuresGrid.map((feature, j) => {
                    const imgIndex = (index * 4 + j) % featureImages.length;
                    return (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: j * 0.1 }}
                        className="group relative flex flex-col h-full bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                        style={{ borderRadius: '24px' }}
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative shrink-0">
                          <img
                            src={featureImages[imgIndex]}
                            alt={feature.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-col flex-grow relative z-0" style={{ padding: '24px' }}>
                          <h6 className="font-display font-bold text-gray-900 leading-tight tracking-tight group-hover:text-black transition-colors mb-3" style={{ fontSize: '18px' }}>
                            {feature.title}
                          </h6>
                          <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize: '14px' }}>
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

              </div>
            </section>
          )
        })}
      </div>

      {/* ── FAQ Section (Exactly Like Homepage FAQ) ── */}
      <section className="section bg-secondary" style={{ backgroundColor: '#f9fafb', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px' }}>
            <div>
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Common questions</span>
              </div>
              <h2 className="font-display font-bold leading-tight text-black tracking-tight" style={{ fontSize: '42px', marginBottom: '24px' }}>
                Frequently<br />asked questions
              </h2>
              <p className="text-gray-500 font-light max-w-md" style={{ fontSize: '16px', marginTop: '8px', marginBottom: '32px' }}>
                Can't find what you're looking for? Reach out directly — we typically respond within 2 business hours.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-80" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#000', borderRadius: '14px', padding: '12px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div style={{ paddingTop: '8px' }}><FAQAccordion items={faqs} /></div>
          </div>
        </div>
      </section>

      {/* ── CTA / Ready To Build Section (Exactly Like Homepage CTA) ── */}
      {/* <CTASection
        title="Ready to Build Your Shopify Success Story?"
        subtitle="Join 50+ brands that trust Task19 Technologies to power their e-commerce growth."
        primaryText="Get Free Store Audit"
        primaryTo="/contact"
        eyebrow="Start Your Project"
      /> */}
    </>
  )
}
