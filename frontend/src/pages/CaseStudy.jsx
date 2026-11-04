import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, ExternalLink, Quote, FileDown, ShieldCheck, Zap, Layers, Sparkles, Building2, MapPin, Target, Layers2 } from 'lucide-react'
import { portfolioItems } from '../constants/data'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'

export default function CaseStudy() {
  const { slug } = useParams()
  const item = portfolioItems.find(p => p.slug === slug) || portfolioItems[0]

  return (
    <>
      <SEO 
        title={`${item.title} Case Study — Task19 Technologies`}
        description={item.shortDesc || `Explore how Task19 Technologies engineered high-performance e-commerce solutions for ${item.title}.`}
        canonical={`https://www.task19.com/portfolio/${item.slug}`}
      />

      {/* ═══ XICOM-INSPIRED SPLIT HERO ═══ */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-24 flex items-center min-h-[90svh] md:min-h-[700px]">
        {/* Deep Abstract Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050f28]">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(0, 102, 255, 0.18) 0%, rgba(5, 15, 35, 1) 100%)'
          }}></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 mx-auto w-full max-w-4xl">
          <div className="flex flex-col items-center text-center">
            
            {/* Navigation Breadcrumb */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 lg:mb-8 flex items-center gap-4"
              >
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-300 font-display text-sm">
                  <ArrowLeft className="w-4 h-4" /> All Case Studies
                </Link>
                <span className="text-white/20">|</span>
                <Link to="/portfolio" className="text-white/50 hover:text-white transition-colors duration-300 font-display text-sm">
                  Portfolio Gallery
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-white/90 text-xs md:text-sm font-medium">{item.category} Case Study</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
              >
                <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-4" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 4rem)' }}>
                  {item.title}
                </h1>
                <p className="text-base md:text-lg !text-gray-200 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                  {item.shortDesc}
                </p>
              </motion.div>

              {item.technologies && item.technologies.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap justify-center gap-2 mb-8"
                >
                  {item.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-white/90 text-xs md:text-sm rounded-md border border-white/10 font-mono">
                      {tech}
                    </span>
                  ))}
                </motion.div>
              )}

              {/* Action CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              >
                {item.pdfUrl && (
                  <a 
                    href={item.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center font-medium transition-all hover:bg-blue-600 bg-blue-500 text-white rounded-full px-6 py-3.5 shadow-lg shadow-blue-500/25 text-sm md:text-[15px] text-center"
                    style={{ color: '#ffffff' }}
                  >
                    <FileDown className="w-4 h-4 mr-2" /> Download Case Study PDF
                  </a>
                )}

                {item.externalLink && (
                  <a 
                    href={item.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center font-medium transition-colors hover:bg-gray-100 !text-black bg-white rounded-full px-6 py-3.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm md:text-[15px] text-center"
                    style={{ color: '#000000' }}
                  >
                    Visit Live Store <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ PROJECT OVERVIEW & METRICS ═══ */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
              <div>
                <div className="inline-block bg-white shadow-sm border border-gray-200 rounded-full px-4 py-1.5 mb-4">
                  <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Project Specification</span>
                </div>
                <h2 className="font-display font-bold leading-tight text-gray-900 tracking-tight text-2xl md:text-3xl mb-6">
                  Executive Brief
                </h2>
                
                <div className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" /> Client
                    </p>
                    <p className="font-display font-semibold text-gray-900 text-base">{item.client || item.title}</p>
                  </div>

                  {item.headquarters && (
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" /> Headquarters
                      </p>
                      <p className="text-gray-800 text-sm font-medium">{item.headquarters}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600" /> Industry
                    </p>
                    <p className="text-gray-800 text-sm font-medium">{item.industry}</p>
                  </div>

                  {item.targetMarket && (
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-blue-600" /> Target Market
                      </p>
                      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">{item.targetMarket}</p>
                    </div>
                  )}

                  {item.coreApp && (
                    <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100">
                      <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider mb-1">Core Proprietary App</p>
                      <p className="text-gray-900 text-sm font-semibold">{item.coreApp}</p>
                      {item.appUrl && (
                        <a 
                          href={item.appUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-xs bg-blue-600 text-white hover:bg-blue-700 mt-2 px-3 py-1.5 rounded-md font-semibold transition-colors"
                          style={{ color: '#ffffff' }}
                        >
                          Visit App Details <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  )}

                  {item.deliverables && item.deliverables.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Deliverables</p>
                      <ul className="space-y-1.5">
                        {item.deliverables.map((deliv, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold leading-none mt-0.5">•</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.externalLink && (
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href={item.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gray-900 hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-sm group"
                        style={{ color: '#ffffff' }}
                      >
                        Visit Live Website <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                  className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 text-blue-600 mb-3 text-xs font-bold uppercase tracking-wider">
                    <span>01</span>
                    <span className="w-4 h-[1px] bg-blue-600"></span>
                    <span>Executive Summary</span>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl sm:text-3xl mb-4">About the Client & Opportunity</h3>
                  <p className="leading-relaxed text-gray-600 text-base sm:text-lg">{item.aboutProject}</p>
                </motion.div>
              )}

              {item.challenge && (
                <motion.div
                  className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 text-amber-600 mb-3 text-xs font-bold uppercase tracking-wider">
                    <span>02</span>
                    <span className="w-4 h-[1px] bg-amber-600"></span>
                    <span>The Challenge</span>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl sm:text-3xl mb-4">Why Off-The-Shelf E-Commerce Failed</h3>
                  <p className="leading-relaxed text-gray-600 text-base sm:text-lg mb-4">{item.challenge}</p>
                  
                  {item.slug === 'cadfour' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                      <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <span className="font-semibold text-gray-900 block text-sm mb-1">Standard Shopify Barrier</span>
                        <span className="text-gray-600 text-xs leading-relaxed block">Architected around single retail price; couldn't handle tiered contract customer rates.</span>
                      </div>
                      <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <span className="font-semibold text-gray-900 block text-sm mb-1">Cost-Prohibitive Enterprise Plus</span>
                        <span className="text-gray-600 text-xs leading-relaxed block">Native B2B pricing demanded $2,000+/month overhead plus revenue fees.</span>
                      </div>
                      <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <span className="font-semibold text-gray-900 block text-sm mb-1">Kitchen Reorder Friction</span>
                        <span className="text-gray-600 text-xs leading-relaxed block">Password drop-offs on prep lines led chefs back to manual phone calls & WhatsApp voice notes.</span>
                      </div>
                      <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                        <span className="font-semibold text-gray-900 block text-sm mb-1">Flawed Coupon Workaround</span>
                        <span className="text-gray-600 text-xs leading-relaxed block">Discount codes leaked online, failed on multi-category orders, and created credit memo chaos.</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {item.solution && (
                <motion.div
                  className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 text-emerald-600 mb-3 text-xs font-bold uppercase tracking-wider">
                    <span>03</span>
                    <span className="w-4 h-[1px] bg-emerald-600"></span>
                    <span>The Solution</span>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-2xl sm:text-3xl mb-4">What Task19 Architected</h3>
                  <p className="leading-relaxed text-gray-600 text-base sm:text-lg mb-6">{item.solution}</p>

                  {item.slug === 'cadfour' && (
                    <div className="space-y-4 pt-2">
                      <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 block text-sm">Proprietary B2B Custom Pricing App Integration</strong>
                          <span className="text-gray-600 text-xs sm:text-sm leading-relaxed block">Customer tags automatically map verified restaurant accounts to negotiated price matrices with zero coupon codes.</span>
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 block text-sm">Frictionless Passwordless OTP Authentication</strong>
                          <span className="text-gray-600 text-xs sm:text-sm leading-relaxed block">Purchasing managers authenticate via Canadian SMS or WhatsApp OTP in under 5 seconds directly from the storefront header.</span>
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 block text-sm">Bulk Case vs. Pack Selectors & Volume Breaks</strong>
                          <span className="text-gray-600 text-xs sm:text-sm leading-relaxed block">Live unit-price breakdowns and dynamic GTA delivery progress thresholds driving higher average order volume.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE IMPACT (RESULTS) ═══ */}
      {item.results && item.results.length > 0 && (
        <section className="py-12 md:py-16 bg-[#050f28] text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-block bg-white/10 border border-white/15 rounded-full px-3.5 py-1 mb-3">
                <span className="font-semibold text-blue-400 text-xs uppercase tracking-wider">Business Impact</span>
              </div>
              <h2 className="font-display font-bold text-white leading-tight tracking-tight text-2xl sm:text-3xl md:text-4xl">
                Quantifiable Commercial Results
              </h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {item.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-5 md:p-6 rounded-2xl text-center bg-white/5 border border-white/10 hover:border-blue-400/30 transition-colors"
                >
                  <span className="font-display font-bold text-blue-400 leading-none mb-2 text-2xl sm:text-3xl md:text-4xl">
                    {result.metric}
                  </span>
                  <span className="text-white/75 text-xs sm:text-sm font-light leading-snug">{result.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Business Impact Detail Cards */}
            {item.businessImpact && item.businessImpact.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                {item.businessImpact.map((impact, idx) => (
                  <div key={idx} className="p-5 bg-white/[0.03] rounded-xl border border-white/5">
                    <h5 className="font-display font-semibold text-white text-sm sm:text-[15px] mb-1.5 leading-snug">{impact.title}</h5>
                    <p className="text-white/60 text-xs leading-relaxed">{impact.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ═══ VERIFIED CLIENT ENDORSEMENT ═══ */}
      {item.testimonial && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container max-w-3xl mx-auto px-4">

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              {/* Top Row: Stars + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-semibold rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified
                </span>
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                "{item.testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                  {item.testimonial.author ? item.testimonial.author.charAt(0) : 'C'}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-900 leading-tight">{item.testimonial.author}</span>
                  <span className="block text-xs text-gray-500">{item.testimonial.company}</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ═══ CAPABILITIES & FEATURES ═══ */}
      {item.features && item.features.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-3 shadow-sm">
                <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Features Delivered</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-3xl md:text-4xl">
                Key Platform Capabilities
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3.5 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-blue-200 transition-colors"
                >
                  <div className="mt-0.5 rounded-full bg-blue-50 p-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-800 text-sm md:text-base leading-snug">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SCREENSHOTS / SHOWCASE ═══ */}
      {item.screenshots && item.screenshots.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-3 shadow-sm">
                <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Visual Showcase</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-3xl md:text-4xl">
                Storefront & Catalog Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.screenshots.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col bg-white border border-gray-200 overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative shrink-0 border-b border-gray-100">
                    <img
                      src={screen.url}
                      alt={screen.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h6 className="font-display font-bold text-gray-900 text-center text-base m-0">
                      {screen.title}
                    </h6>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ TECH STACK ═══ */}
      {item.technologies && item.technologies.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <div className="inline-block bg-white shadow-sm border border-gray-200 rounded-full px-4 py-1.5 mb-3">
                <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Tech Stack</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-2xl md:text-3xl">
                Engineered for High Velocity & Speed
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {item.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-800 text-sm font-medium shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SEO FAQS ═══ */}
      {item.faqs && item.faqs.length > 0 && (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container max-w-3xl mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-3 shadow-sm">
                <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Project Insights</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion items={item.faqs} />
          </div>
        </section>
      )}

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-16 md:py-20 bg-[#050f28] text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
            Transform Your B2B Operations with Task19
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
            Ready to engineer a high-velocity Shopify wholesale store or automate contracted customer pricing? Partner with certified experts at Task19 Technologies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              style={{ color: '#000000' }}
            >
              Partner with Task19 <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 border border-white/20 transition-colors"
            >
              Explore More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
