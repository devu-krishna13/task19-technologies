import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import PortfolioCard from '../components/ui/PortfolioCard'
import BlogCard from '../components/ui/BlogCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import StatCounter from '../components/ui/StatCounter'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'

import {
  stats, industries, processSteps, whyChooseUs,
  portfolioItems, testimonials, blogPosts, faqs,
  technologies, techCategories,
} from '../constants/data'
import { servicesForCards } from '../constants/services'

import { CheckCircle, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const trustedBrands = ['Paintemic', 'DSNY Online', 'RIZA UAE', 'Mazara', 'Pisang', 'Folk & Fab', 'Goodwill', 'Habibi Shopping', 'Karenzi', 'CADFOUR', 'USEDIFI']

export default function Home() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>Task19 Technologies — Premium Digital Transformation & E-Commerce Solutions</title>
        <meta name="description" content="Task19 Technologies is a premier digital transformation partner delivering enterprise-grade web development, mobile apps, Shopify solutions, cloud services, and AI innovation." />
        <meta property="og:title" content="Task19 Technologies — Digital Transformation & Enterprise Solutions" />
        <meta property="og:description" content="Transform your business with Task19's expert team in web development, mobile apps, cloud, AI, and e-commerce solutions." />
        <link rel="canonical" href="https://task19.com" />
      </Helmet>

      {/* ══════════════════ HERO ══════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-20 border-b border-border-dark">
        <div className="container relative z-10 pt-32 pb-24">
          <div className="max-w-[90vw]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-sm font-semibold tracking-widest uppercase text-accent">
                E-Commerce Development Partner
              </span>
            </motion.div>

            <div ref={titleRef} className="mb-8">
              <h1 className="font-display font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: 'var(--font-size-hero)' }}>
                We Build E-Commerce<br />
                <span className="text-accent">Experiences</span><br />
                That Drive Revenue.
              </h1>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mb-12 font-body font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Leverage our full-stack expertise in Shopify, WooCommerce, and Custom App Development to turn complex e-commerce challenges into seamless, profitable solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button to="/contact" variant="primary" size="lg" arrow>
                Get Free Audit
              </Button>
              <Button to="/portfolio" variant="outline-white" size="lg" arrow>
                View Our Work
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { n: '200+', l: 'Projects Delivered' },
                { n: '50+', l: 'Global Clients' },
                { n: '8+', l: 'Years Experience' },
                { n: '98%', l: 'Satisfaction Rate' },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-accent pl-6">
                  <p className="font-display text-5xl font-bold text-white mb-2 leading-none">{s.n}</p>
                  <p className="text-xs text-white/50 font-display font-bold tracking-[0.2em] uppercase">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TRUSTED BY ══════════════════ */}
      <section className="py-12 border-y border-border overflow-hidden bg-surface">
        <div className="container mb-6">
          <p className="text-center text-xs font-display font-semibold tracking-[0.25em] uppercase text-text-muted">
            Trusted by Growing Brands Worldwide
          </p>
        </div>
        <div className="flex">
          <motion.div
            className="flex gap-12 items-center flex-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...trustedBrands, ...trustedBrands].map((brand, i) => (
              <span key={i} className="font-display font-bold text-xl text-text-primary/20 whitespace-nowrap hover:text-text-primary/60 transition-colors duration-300">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="End-to-End Digital Services"
            subtitle="From strategy and design to development and deployment — every service you need to build, launch, and scale a world-class digital presence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesForCards.map((service, i) => (
              <div key={service.id}>
                <ServiceCard {...service} index={i} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/services" variant="outline" size="md" arrow>
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE US ══════════════════ */}
      <section className="section section-grey">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
                Why Task19
              </span>
              <h2 className="font-display font-bold mb-6 text-text-primary" style={{ fontSize: 'var(--font-size-h2)' }}>
                A Technology Partner That Treats Your Success as Its Own
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                We are not a vendor who disappears after delivery. We are a team of technologists, designers, and strategists who invest deeply in understanding your business — and build solutions designed to grow with you.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-semibold text-text-primary text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/about" variant="primary" size="md" arrow>
                  Our Story
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=720&fit=crop"
                alt="Task19 team collaborating on digital solutions"
                className="w-full object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 shadow-xl hidden md:block">
                <p className="font-display text-4xl font-bold text-white">8+</p>
                <p className="text-white/80 text-xs font-medium tracking-wider uppercase mt-1">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            label="Our Impact"
            title="Numbers That Speak for Themselves"
            subtitle="Real results delivered for real businesses across industries and geographies."
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ INDUSTRIES ══════════════════ */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Industries We Serve"
            title="Deep Expertise Across Key Verticals"
            subtitle="We bring specialized knowledge to every project — understanding the unique challenges and opportunities of each industry we serve."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                className="group p-8 bg-surface border border-border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="text-4xl mb-6 block opacity-80 group-hover:scale-110 group-hover:text-accent transition-all duration-300">{industry.icon}</span>
                <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/industries" variant="outline" size="md" arrow>Explore All Industries</Button>
          </div>
        </div>
      </section>

      {/* ══════════════════ PROCESS ══════════════════ */}
      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            label="How We Work"
            title="Our Development Process"
            subtitle="A structured, transparent approach that keeps projects on time, on budget, and aligned to your goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="relative p-8 border border-border bg-surface hover:border-accent/20 hover:shadow-md transition-all duration-400 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 z-10 w-8 h-px bg-accent" />
                )}
                <div className="font-display text-5xl font-extrabold text-border mb-4 group-hover:text-accent/20 transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="font-display text-base font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PORTFOLIO ══════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
                Recent Work
              </span>
              <h2 className="font-display font-bold text-white" style={{ fontSize: 'var(--font-size-h2)' }}>
                Work We're Proud Of
              </h2>
            </div>
            <Button to="/portfolio" variant="outline-white" size="md" arrow>
              View All Projects
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                to={`/portfolio/${item.slug}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ TECHNOLOGIES ══════════════════ */}
      <section className="section section-grey">
        <div className="container">
          <SectionHeading
            label="Tech Stack"
            title="Technologies We Master"
            subtitle="We work with the world's most powerful and proven technologies to build solutions that last."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-border hover:border-accent/40 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="font-display text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="text-xs text-text-muted hidden sm:block">— {tech.category}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/technologies" variant="outline" size="md" arrow>Explore Full Stack</Button>
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="section bg-surface">
        <div className="container">
          <SectionHeading
            label="Client Stories"
            title="What Our Clients Say"
            subtitle="Real words from the founders and leaders who trusted us to build their most critical digital assets."
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard {...t} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ══════════════════ BLOG ══════════════════ */}
      <section className="section section-grey">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              label="Insights"
              title="Latest from Our Blog"
              align="left"
              className="mb-0"
            />
            <Button to="/blog" variant="outline" size="md" arrow>All Articles</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.slug} {...post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                label="Questions & Answers"
                title="Frequently Asked Questions"
                align="left"
                className="mb-0"
              />
              <p className="text-text-secondary mt-4 mb-8">
                Can't find what you're looking for? Reach out directly — we typically respond within 2 business hours.
              </p>
              <Button to="/contact" variant="primary" size="md" arrow>Contact Us</Button>
            </div>
            <div>
              <FAQAccordion items={faqs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <CTASection />
    </>
  )
}
