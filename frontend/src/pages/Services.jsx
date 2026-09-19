import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import { 
  ArrowRight, 
  LayoutTemplate, Settings, Sliders, FileCode2,
  Zap, FlaskConical, Smartphone, TrendingUp,
  Database, Puzzle, Briefcase, RefreshCw,
  Bot, Rocket, CreditCard, Link as LinkIcon,
  Layout, ArrowRightLeft, ShieldCheck, Cpu,
  Code2, Server
} from 'lucide-react'
import FAQAccordion from '../components/ui/FAQAccordion'


const allServices = [
  {
    id: 'WordPress',
    tagline: 'PHASE 01 — CONTENT & COMMERCE',
    color: '#9333ea', // Purple
    bgClass: 'bg-white',
    title: 'Custom WordPress Development',
    desc: 'Design and develop fast, secure, and scalable WordPress websites perfectly tailored to your brand’s content and operational needs.',
    linkTo: '/services/wordpress-development',
    featuresList: [
      {
        title: 'Custom Theme Development',
        desc: 'Building bespoke WordPress themes from scratch.',
        icon: Layout
      },
      {
        title: 'Platform Migrations',
        desc: 'Transitioning existing sites without losing rankings.',
        icon: ArrowRightLeft
      },
      {
        title: 'Speed & Security',
        desc: 'Implementing caching strategies and robust security.',
        icon: ShieldCheck
      },
      {
        title: 'Headless Architecture',
        desc: 'Decoupling frontend for lightning-fast experiences.',
        icon: Cpu
      }
    ]
  },
  {
    id: 'Shopify',
    tagline: 'PHASE 02 — E-COMMERCE',
    color: '#10b981', // Emerald
    bgClass: 'bg-slate-50',
    title: 'Shopify Store Development',
    desc: 'We architect and build high-performing Shopify stores from the ground up for direct-to-consumer brands, structuring every decision around conversion and growth.',
    linkTo: '/services/shopify-development',
    featuresList: [
      {
        title: 'Platform Architecture',
        desc: 'Guidance on choosing the right plan for your brand.',
        icon: LayoutTemplate
      },
      {
        title: 'Conversion Optimization',
        desc: 'Transforming underperforming stores into conversion engines.',
        icon: TrendingUp
      },
      {
        title: 'App Integrations',
        desc: 'Secure private apps and seamless ERP connections.',
        icon: LinkIcon
      },
      {
        title: 'Theme Strategy',
        desc: 'Scalable Liquid and sound version control practices.',
        icon: FileCode2
      }
    ]
  },
  {
    id: 'CustomDev',
    tagline: 'PHASE 03 — ENGINEERING',
    color: '#3b82f6', // Blue
    bgClass: 'bg-white',
    title: 'Custom Software Development',
    desc: 'When off-the-shelf solutions aren\'t enough, we engineer bespoke software, web applications, and scalable SaaS platforms tailored precisely to your unique challenges.',
    linkTo: '/services/custom-development',
    featuresList: [
      {
        title: 'Custom Web Apps',
        desc: 'Highly scalable apps using React, Next.js, and Node.js.',
        icon: Code2
      },
      {
        title: 'SaaS Platforms',
        desc: 'Multi-tenant architecture and secure billing integrations.',
        icon: Server
      },
      {
        title: 'Mobile App Development',
        desc: 'Cross-platform native-like experiences with React Native.',
        icon: Smartphone
      },
      {
        title: 'API Integrations',
        desc: 'Robust RESTful and GraphQL APIs for disparate systems.',
        icon: Database
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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Our Services — Task19 Technologies</title>
        <meta name="description" content="Expert development services including Custom WordPress, Shopify E-Commerce, and bespoke Custom Software Development. Delivered by Task19 Technologies." />
        <link rel="canonical" href="https://task19.com/services" />
      </Helmet>

      <PageHero 
        badgeText="Premium Digital Agency"
        title={<>Our Expert<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services.</span></>}
        description="We build high-performance e-commerce stores, tailor-made applications, and digital experiences that drive revenue."
        orbColor1="bg-blue-400/20"
        orbColor2="bg-purple-400/20"
      />

      {/* ── Services Content List (Heading & Description + 4 Cards Grid) ── */}
      <div className="flex flex-col">
        {allServices.map((service, index) => {
          return (
            <section key={service.id} className={`py-12 md:py-16 relative overflow-hidden ${service.bgClass}`}>
              <div className="container max-w-7xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
                  <div className="inline-block bg-white border border-gray-100 rounded-full px-4 py-1.5 shadow-sm mb-6">
                    <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: service.color }}>{service.tagline}</span>
                  </div>
                  
                  <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-3xl md:text-5xl mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="font-light leading-relaxed text-gray-600 text-lg md:text-xl mb-8">
                    {service.desc}
                  </p>
                  
                  <Link 
                    to={service.linkTo} 
                    className="inline-flex items-center justify-center font-medium transition-all hover:scale-105 hover:shadow-xl px-8 py-3.5 rounded-full text-white"
                    style={{ backgroundColor: '#0f172a' }} // Dark button for contrast
                  >
                    Explore Phase <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* 4 Cards Grid (grid-cols-2 on mobile, md:grid-cols-4 on desktop) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                  {service.featuresList.map((feature, j) => {
                    return (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: j * 0.1 }}
                        className="group relative bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                      >
                        {/* Glow on hover */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
                          style={{
                            background: `linear-gradient(135deg, ${service.color}10 0%, transparent 100%)`
                          }}
                        ></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                          <div 
                            className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:scale-110 transition-all duration-300 shadow-sm"
                          >
                            {feature.icon && <feature.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: service.color }} />}
                          </div>
                          
                          <h5 
                            className="text-[15px] md:text-lg font-bold text-gray-900 mb-3 transition-colors leading-snug"
                          >
                            {feature.title}
                          </h5>
                          
                          <p className="text-gray-600 font-light leading-relaxed text-[13px] md:text-[14.5px] mt-auto hidden sm:block">
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

      {/* ── FAQ Section ── */}
      <section className="section bg-slate-50 py-24 border-t border-gray-100">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-white border border-gray-100 rounded-full px-4 py-1.5 shadow-sm mb-6">
                <span className="font-semibold text-sm tracking-widest uppercase text-gray-800">Common questions</span>
              </div>
              <h2 className="font-display font-bold leading-tight text-gray-900 tracking-tight text-3xl md:text-5xl mb-6">
                Frequently<br />asked questions
              </h2>
              <p className="text-gray-600 font-light max-w-md text-lg mb-10">
                Can't find what you're looking for? Reach out directly — we typically respond within 2 business hours.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center font-medium transition-all hover:shadow-md bg-white border border-gray-200 text-gray-900 rounded-full px-6 py-3 hover:-translate-y-1"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
