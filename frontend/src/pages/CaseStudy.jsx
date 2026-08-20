import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, ExternalLink, Quote } from 'lucide-react'
import { portfolioItems } from '../constants/data'
import FAQAccordion from '../components/ui/FAQAccordion'

export default function CaseStudy() {
  const { slug } = useParams()
  const item = portfolioItems.find(p => p.slug === slug) || portfolioItems[0]

  return (
    <>
      <Helmet>
        <title>{item.title} Case Study — Task19 Technologies</title>
        <meta name="description" content={item.shortDesc} />
      </Helmet>

      {/* ═══ XICOM-INSPIRED SPLIT HERO ═══ */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-24 flex items-center min-h-[90svh] md:min-h-[700px]">
        {/* Deep Abstract Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050f28]">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(0, 102, 255, 0.15) 0%, rgba(5, 15, 35, 1) 100%)'
          }}></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col items-start text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 lg:mb-8"
              >
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 font-display text-sm">
                  <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-white/80 text-xs md:text-sm font-medium">{item.category}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
              >
                <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                  {item.title}
                </h1>
                <p className="text-base md:text-xl !text-gray-200 leading-relaxed font-light mb-8 max-w-xl">
                  {item.shortDesc}
                </p>
              </motion.div>

              {item.technologies && item.technologies.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-10"
                >
                  {item.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-white/90 text-sm rounded-md border border-white/10">
                      {tech}
                    </span>
                  ))}
                </motion.div>
              )}

              {item.externalLink && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <a 
                    href={item.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center font-medium transition-colors hover:bg-gray-100 !text-black bg-white rounded-full px-8 py-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    Visit {item.externalLink.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              )}
            </div>

            {/* Right Column: Browser Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 w-full flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[600px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#1e1e1e]">
                <div className="h-8 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-black/20">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <div className="mx-auto bg-black/20 text-white/30 text-[10px] px-24 py-1 rounded-md max-w-full hidden sm:block">
                    {item.externalLink ? item.externalLink.replace(/^https?:\/\//, '') : 'task19.com'}
                  </div>
                </div>
                <div className="aspect-[16/10] bg-gray-900 w-full relative overflow-hidden group">
                  <img 
                    src={item.image} 
                    alt={`${item.title} Preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-in-out group-hover:-translate-y-[10%]"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ PROJECT OVERVIEW ═══ */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-8">
              <div>
                <div className="inline-block bg-white shadow-sm" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                  <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Project Details</span>
                </div>
                <h2 className="font-display font-bold leading-tight text-black tracking-tight text-[32px] mb-8">
                  The Complete Overview
                </h2>
                
                <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Client</p>
                    <p className="font-display font-medium text-gray-900 text-lg">{item.client}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Industry</p>
                    <p className="font-display font-medium text-gray-900 text-lg">{item.industry}</p>
                  </div>
                  
                  {item.externalLink && (
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group">
                        Visit Live Website <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {item.aboutProject && (
                <motion.div
                  className="bg-white transition-all duration-300 hover:shadow-md"
                  style={{ borderRadius: '24px', border: '1px solid #f3f4f6', padding: '40px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-display font-bold text-gray-900 text-2xl mb-4">About the Project</h3>
                  <p className="leading-relaxed text-gray-500 text-lg">{item.aboutProject}</p>
                </motion.div>
              )}

              {item.challenge && (
                <motion.div
                  className="bg-white transition-all duration-300 hover:shadow-md"
                  style={{ borderRadius: '24px', border: '1px solid #f3f4f6', padding: '40px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="font-display font-bold text-gray-900 text-2xl mb-4">The Challenge</h3>
                  <p className="leading-relaxed text-gray-500 text-lg">{item.challenge}</p>
                </motion.div>
              )}

              {item.solution && (
                <motion.div
                  className="bg-white transition-all duration-300 hover:shadow-md"
                  style={{ borderRadius: '24px', border: '1px solid #f3f4f6', padding: '40px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-display font-bold text-gray-900 text-2xl mb-4">Our Solution</h3>
                  <p className="leading-relaxed text-gray-500 text-lg">{item.solution}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE IMPACT (RESULTS) ═══ */}
      {item.results && item.results.length > 0 && (
        <section className="py-8 md:py-12 lg:py-16 bg-[#050f28] text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-white" style={{ fontSize: '14px' }}>Business Impact</span>
              </div>
              <h2 className="font-display font-bold text-white leading-tight tracking-tight text-[32px] md:text-[42px]">
                Measurable Results
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-8 rounded-3xl text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="font-display font-bold text-blue-400 leading-none mb-4" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                    {result.metric}
                  </span>
                  <span className="text-white/80 text-lg font-light">{result.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ TECH STACK ═══ */}
      {item.technologies && item.technologies.length > 0 && (
        <section className="py-8 md:py-12 lg:py-16 bg-white border-t border-gray-100">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-white shadow-sm" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Technologies Used</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-[32px] md:text-[42px]">
                Engineered for Performance
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {item.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="font-display font-medium text-gray-800 text-lg">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ PROJECT TIMELINE ═══ */}
      <section className="py-8 md:py-12 lg:py-16 bg-[#050f28] text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span className="font-medium text-white" style={{ fontSize: '14px' }}>The Process</span>
            </div>
            <h2 className="font-display font-bold text-white leading-tight tracking-tight text-[32px] md:text-[42px]">
              How We Brought It To Life
            </h2>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-blue-900/50 z-0"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {[
                { step: '01', title: 'Discovery', desc: 'Deep dive into brand goals & technical requirements.' },
                { step: '02', title: 'Architecture', desc: 'Designing the data flow and user experience.' },
                { step: '03', title: 'Development', desc: 'Agile engineering with continuous testing.' },
                { step: '04', title: 'Launch', desc: 'Final QA, deployment, and performance scaling.' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 border-4 border-[#050f28] flex items-center justify-center font-display font-bold text-base md:text-xl mb-4 md:mb-6 shadow-[0_0_20px_rgba(0,102,255,0.4)]">
                    {phase.step}
                  </div>
                  <h5 className="font-display font-bold text-base md:text-xl mb-2 md:mb-3">{phase.title}</h5>
                  <p className="!text-gray-300 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      {item.features && item.features.length > 0 && (
        <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Capabilities</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-[32px] md:text-[42px]">
                Key Features Delivered
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="mt-0.5 rounded-full bg-blue-50 p-1 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SCREENSHOTS ═══ */}
      {item.screenshots && item.screenshots.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '16px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>UI/UX Showcase</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-[32px] md:text-[42px]">
                Project Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.screenshots.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                  style={{ borderRadius: '24px' }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative shrink-0 border-b border-gray-100">
                    <img
                      src={screen.url}
                      alt={screen.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-grow relative z-0" style={{ padding: '24px' }}>
                    <h6 className="font-display font-bold text-gray-900 text-center text-xl m-0">
                      {screen.title}
                    </h6>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SEO FAQS ═══ */}
      {item.faqs && item.faqs.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container max-w-3xl mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '16px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Expertise</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-[32px] md:text-[42px]">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion items={item.faqs} />
          </div>
        </section>
      )}

    </>
  )
}
