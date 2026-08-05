import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import { industries } from '../constants/data'

const industryDetails = [
  {
    name: 'E-commerce & Retail',
    icon: 'fa-solid fa-cart-shopping',
    headline: 'Powering the Next Generation of D2C Commerce',
    desc: 'As experts in Shopify and custom commerce architectures, we help retail brands build highly scalable storefronts. We focus on conversion-driven design, lightning-fast performance, and robust inventory management integrations.',
    solutions: ['Headless Commerce Solutions', 'Shopify Plus Development', 'Omnichannel Integrations', 'High-Volume Checkout Optimization'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    name: 'Healthcare & MedTech',
    icon: 'fa-solid fa-heart-pulse',
    headline: 'HIPAA-Compliant Digital Health Solutions',
    desc: 'We engineer secure, scalable digital health platforms that bridge the gap between providers and patients. Our focus is on data privacy, intuitive telehealth interfaces, and seamless integration with existing EMR/EHR systems.',
    solutions: ['Telehealth Web & Mobile Apps', 'Secure Patient Portals', 'EMR/EHR System Integration', 'Medical Data Analytics Dashboards'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    name: 'Finance & FinTech',
    icon: 'fa-solid fa-credit-card',
    headline: 'Secure, Regulated Financial Technology',
    desc: 'Trust and security are the foundation of finance. We develop robust financial applications, payment gateways, and banking portals that comply with strict regulatory standards while delivering exceptional user experiences.',
    solutions: ['Custom Payment Gateways', 'Fintech Mobile Applications', 'Blockchain & Smart Contracts', 'Automated KYC/AML Onboarding'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  },
  {
    name: 'Education & EdTech',
    icon: 'fa-solid fa-graduation-cap',
    headline: 'Transforming Learning Through Technology',
    desc: 'We build interactive e-learning platforms and LMS solutions designed to scale. From corporate training portals to interactive student dashboards, we focus on engagement, accessibility, and measurable learning outcomes.',
    solutions: ['Custom LMS Development', 'Interactive Virtual Classrooms', 'Student Progress Analytics', 'Mobile Learning Applications'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  },
]

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve — Task19 Technologies</title>
        <meta name="description" content="Task19 Technologies delivers specialized digital solutions across e-commerce, healthcare, finance, education, real estate, and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[70svh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Industries Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, rgba(5, 15, 35, 0.95) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-20 md:pt-0">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8"
            >
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Deep Expertise Across Key Verticals</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Industries We <em className="font-serif-italic not-italic text-white/40">Transform.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Overview Grid */}
      <section className="bg-[#f8f9fc] pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
            <div className="inline-block bg-white mb-4 shadow-sm border border-gray-100 rounded-full px-4 py-1.5">
              <span className="font-medium text-[#013Ad6] text-[13px] tracking-wide uppercase">Our Expertise</span>
            </div>
            <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Industries We Transform
            </h2>
            <p className="text-gray-500 font-light text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
              Specialized solutions built on deep knowledge of sector-specific requirements, regulations, and user expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                className="group relative bg-white p-5 rounded-[16px] overflow-hidden border border-gray-100 hover:border-[#013Ad6]/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-1 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F7FF] text-[#013Ad6] group-hover:bg-[#013Ad6] group-hover:text-white transition-colors duration-400 flex items-center justify-center mb-4">
                  <i className={`${industry.icon} text-lg group-hover:scale-110 transition-transform duration-400`}></i>
                </div>
                <h5 className="font-display font-bold text-gray-900 mb-2 group-hover:text-[#013Ad6] transition-colors duration-300">
                  {industry.name}
                </h5>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 space-y-16 md:space-y-24">
          {industryDetails.map((ind, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Side */}
              <motion.div
                className="w-full lg:w-1/2 flex flex-col"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shadow-sm text-[#013Ad6]">
                    <i className={`${ind.icon} text-2xl`}></i>
                  </div>
                  <span className="inline-block font-display text-[11px] font-bold tracking-[0.2em] uppercase text-[#013Ad6] mb-4 bg-[#F5F7FF] px-3 py-1 rounded-md">
                    {ind.name}
                  </span>
                  <h2 className="font-display font-bold text-gray-900 leading-[1.15] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {ind.headline}
                  </h2>
                  <p className="text-gray-500 text-[16px] md:text-[18px] font-light leading-relaxed mb-8">
                    {ind.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ind.solutions.map((sol, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#E5EDFF] flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 text-[#013Ad6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[14px] font-medium text-gray-700">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.95, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={ind.image} 
                    alt={ind.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[40px] bg-gradient-to-tr from-[#f1f3f9] to-[#ffffff] opacity-50 blur-3xl" />
              </motion.div>

            </div>
          ))}
        </div>
      </section>

    </>
  )
}
