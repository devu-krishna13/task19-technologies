import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import SectionHeading from '../components/ui/SectionHeading'
import FeatureCard from '../components/ui/FeatureCard'
import ServiceCard from '../components/ui/ServiceCard'
import BlogCard from '../components/ui/BlogCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'

import { Link } from 'react-router-dom'
import {
  stats, whyChooseUs, portfolioItems, testimonials, blogPosts, faqs, clientBrands,
} from '../constants/data'
import { servicesForCards } from '../constants/services'
import {
  ArrowRight,
  Gauge,
  Blocks,
  Smartphone,
  ShieldCheck,
  Layers3,
  Rocket,
} from 'lucide-react'

/* ── Hero Slides ── */
const heroSlides = [
  {
    label: 'Innovation & Strategy',
    title: <>Experiences Powered by<br /><em className="font-serif-italic not-italic text-white/50">Intelligence.</em></>,
    desc: 'Today’s businesses need more than just digital tools—they need clear strategic direction, backed by deep customer insight.',
    metric: '700+',
    metricLabel: 'High-Impact Projects Delivered',
  },
  {
    label: 'AI Solutions',
    title: <>AI Precision. Human Intuition.<br /><em className="font-serif-italic not-italic text-white/50">Real Results.</em></>,
    desc: 'Agentic Solutions Engineered to Scale and drive the next digital revolution in your industry.',
    metric: '100+',
    metricLabel: 'Brand Connections Worldwide',
  },
  {
    label: 'Industry Leaders',
    title: <>Tech, Marketing, Industry<br />Leaders, <em className="font-serif-italic not-italic text-white/50">One Stage!</em></>,
    desc: 'WAC Beyond Preview Event - Discover authentic experiences, straight from those we serve.',
    metric: '600+',
    metricLabel: 'International Clients',
  },
  {
    label: 'Digital Transformation',
    title: <>Helping You Take the<br /><em className="font-serif-italic not-italic text-white/50">Digital Leap</em></>,
    desc: 'Reshaping the entire digital landscape for global brands across retail, finance, and manufacturing.',
    metric: '450+',
    metricLabel: 'Dedicated Experts',
  },
]

const specializedSolutions = [
  {
    icon: Blocks,
    title: 'Shopify Migration',
    description: 'Move catalog data, customers, content, and SEO value into a cleaner storefront architecture without losing business momentum.',
  },
  {
    icon: Smartphone,
    title: 'Store to Mobile App',
    description: 'Extend your storefront into mobile experiences that improve retention, repeat purchasing, and brand affinity.',
  },
  {
    icon: ShieldCheck,
    title: 'Custom Shopify Apps',
    description: 'Build private or public apps when generic plugins create limits, bloat, or operational friction.',
  },
]

const valuePillars = [
  { icon: Gauge, title: 'Performance-Led Builds', description: 'Core Web Vitals, fast interactions, and resilient storefront behavior are part of the baseline, not an add-on.' },
  { icon: Layers3, title: 'Reusable Design Systems', description: 'We build reusable sections, cards, and page patterns so growth does not create visual inconsistency.' },
  { icon: Blocks, title: 'Proof-First Messaging', description: 'Project results, metrics, and client context appear early so the website earns trust before it asks for action.' },
  { icon: Rocket, title: 'Revenue-Focused UX', description: 'Every page balances clarity, hierarchy, and conversion paths to remove friction from decision-making.' },
  { icon: Smartphone, title: 'Responsive by Default', description: 'Spacing, alignment, and typography are tuned for mobile, tablet, and desktop instead of adapted at the end.' },
  { icon: ShieldCheck, title: 'Operational Reliability', description: 'Migration planning, QA, and scalable implementation support launches that feel calm rather than risky.' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Task19 Technologies — Shopify & E-Commerce Development Experts</title>
        <meta name="description" content="Task19 Technologies is a leading Shopify & WooCommerce development agency. We build high-performance e-commerce stores, custom Shopify apps, and digital solutions that drive revenue." />
        <link rel="canonical" href="https://task19.com" />
      </Helmet>

      {/* ═══ ROTATING HERO ═══ */}
      <section className="relative min-h-screen flex items-end bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10" style={{ background: '#013ad6' }} />

        <div className="container relative z-10 pt-40 pb-20 lg:pb-28">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.hero-pagination' }}
            loop
            className="hero-swiper"
          >
            {heroSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 items-end">
                  <div>
                    <div className="flex items-center gap-3 mb-10">
                      <span className="h-px w-10 bg-accent" />
                      <span className="font-display text-xs font-medium tracking-widest uppercase text-accent">{slide.label}</span>
                    </div>
                    <h1 className="font-display font-light text-white leading-[1.05] tracking-tight mb-10" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-12 font-light">{slide.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-display font-semibold text-sm hover:bg-accent-hover transition-all duration-300">
                        Get Free Audit <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-display font-medium text-sm hover:border-white/50 transition-all duration-300">
                        View Our Work
                      </Link>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10"
                  >
                    <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-white/45 mb-4">Featured proof point</p>
                    <p className="font-display text-5xl md:text-6xl font-light text-white leading-none mb-3">{slide.metric}</p>
                    <p className="text-sm text-white/60 leading-relaxed mb-8">{slide.metricLabel}</p>
                    <div className="space-y-4 border-t border-white/10 pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-xs font-display tracking-[0.2em] uppercase text-white/35">Delivery</span>
                        <span className="text-sm text-white/75 text-right">Clean architecture and reusable sections</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-xs font-display tracking-[0.2em] uppercase text-white/35">Design</span>
                        <span className="text-sm text-white/75 text-right">Premium spacing, typography, and responsive balance</span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-xs font-display tracking-[0.2em] uppercase text-white/35">Focus</span>
                        <span className="text-sm text-white/75 text-right">Proof, trust, and conversion clarity</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hero-pagination flex gap-2 mt-10" />
        </div>
      </section>

      {/* ═══ CASE STUDIES / PROOF ═══ */}
      <section className="section bg-surface">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-3 mb-4"><span className="h-px w-8 bg-accent" /><span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">Case Studies</span></span>
              <h2 className="font-display font-light text-text-primary" style={{ fontSize: 'var(--font-size-h2)' }}>Real Projects, <em className="font-serif-italic text-text-muted">Placed Early</em></h2>
              <p className="max-w-2xl mt-5 text-text-secondary text-lg font-light leading-relaxed">
                Proof comes before persuasion. These featured launches show the quality, category range, and performance outcomes behind our commerce work.
              </p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-display font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300 whitespace-nowrap">
              Explore Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link to={`/portfolio/${item.slug}`} className="group block border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden bg-surface h-full">
                  <div className="aspect-[4/3] overflow-hidden relative clip-inset-wrapper">
                    <div className="absolute inset-0 clip-inset transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/65 to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4 z-10"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-display font-medium tracking-wider uppercase text-text-primary">{item.industry}</span></div>
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="font-display text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                      <span className="text-xs font-display font-medium text-accent whitespace-nowrap">{item.category}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3 flex-1">{item.shortDesc}</p>
                    {item.metric && (
                      <div className="flex items-end justify-between gap-4 pt-4 border-t border-border">
                        <div>
                          <span className="font-display text-2xl font-light text-accent leading-none">{item.metric}</span>
                          <p className="text-[11px] text-text-muted font-display tracking-[0.15em] uppercase mt-2">{item.metricLabel}</p>
                        </div>
                        <span className="text-sm font-display font-medium text-text-primary group-hover:text-accent transition-colors duration-300">Read story</span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OUR STORY (Stats) ═══ */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 items-start">
            <div className="lg:w-1/3">
              <span className="inline-flex items-center gap-3 mb-6"><span className="h-px w-8 bg-accent" /><span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">Our Story</span></span>
              <h2 className="font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Numbers<br />That Matter</h2>
            </div>
            <div className="lg:w-2/3 lg:pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                {stats.map((stat, i) => (
                  <motion.div key={i} className="text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <div className="font-display text-4xl sm:text-5xl font-light text-white mb-4 leading-none tracking-tight">{stat.value}<span className="text-accent">{stat.suffix}</span></div>
                    <p className="text-sm font-body text-white/60 leading-snug max-w-[120px]">{stat.label.split(' ').map((word, idx) => (
                      <span key={idx}>{word}<br/></span>
                    ))}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLIENT LOGO WALL ═══ */}
      <section className="section bg-secondary border-y border-border">
        <div className="container">
          <SectionHeading
            label="Trusted Partners"
            title="A Stronger Trust Layer"
            subtitle="Recognizable client marks and brand references create the confidence that plain text alone never can."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
            {clientBrands.map((brand, i) => (
              <motion.div
                key={brand.name}
                className="bg-surface p-6 lg:p-7 min-h-[110px] flex flex-col justify-between"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <span className="font-display text-xs tracking-[0.25em] uppercase text-text-muted">
                  {brand.name.split(' ').map((part) => part[0]).join('').slice(0, 3)}
                </span>
                <span className="font-display text-base lg:text-lg font-medium text-text-primary leading-snug">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPECIALIZED SOLUTIONS ═══ */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                label="Specialized Shopify Solutions"
                title="Focused Services for Commerce Teams"
                subtitle="A premium homepage needs more than generic service tiles. These focused capabilities connect clearly to the problems growing stores actually need solved."
                align="left"
                className="mb-0"
              />
            </div>
            <div className="grid grid-cols-1 gap-5">
              {specializedSolutions.map((item, i) => (
                <FeatureCard key={item.title} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section bg-secondary">
        <div className="container">
          <SectionHeading label="What We Do" title="Full-Stack E-Commerce Solutions" subtitle="A balanced mix of platform expertise, growth engineering, and custom product work for brands that need more than a template rollout." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {servicesForCards.slice(0, 6).map((service, i) => (
              <div key={service.id} className={`border-r border-b border-border ${(i + 1) % 3 === 0 ? 'border-r-0' : ''}`}>
                <ServiceCard {...service} index={i} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text-primary font-display font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300">
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ VALUE SECTION ═══ */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Why Task19"
            title="Modern UI Needs More Than Pretty Screens"
            subtitle="The strongest section design comes from alignment between messaging, interaction quality, visual rhythm, and reusable implementation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valuePillars.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {whyChooseUs.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-border p-8 bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="text-xs font-display tracking-[0.25em] uppercase text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl font-medium text-text-primary mt-4 mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS (uniform cards) ═══ */}
      <section className="section bg-secondary">
        <div className="container">
          <SectionHeading label="Client Stories" title="What Our Clients Say" subtitle="Real words from founders and leaders who trusted us to build their most critical digital assets." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="section bg-surface">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading label="Insights" title="Latest from Our Blog" align="left" className="mb-0" />
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-primary font-display font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300 whitespace-nowrap">All Articles <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (<BlogCard key={post.slug} {...post} index={i} />))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading label="Questions & Answers" title="Frequently Asked Questions" align="left" className="mb-0" />
              <p className="text-text-secondary mt-5 mb-8 font-light">Can't find what you're looking for? Reach out directly — we typically respond within 2 business hours.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-all duration-300">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div><FAQAccordion items={faqs.slice(0, 5)} /></div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Build With Confidence"
        title="Ready to Build Your Future-Proof E-Commerce Store?"
        subtitle="Whether you need a complete rebuild, custom features, or migration support, we can shape the right delivery plan and design system for it."
        primaryText="Let's Discuss Your Project"
        secondaryText="Browse Our Services"
        secondaryTo="/services/shopify"
      />
    </>
  )
}
