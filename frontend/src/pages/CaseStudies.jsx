import React from 'react'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioItems } from '../constants/data'
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  ShieldCheck, 
  FileDown, 
  ExternalLink, 
  Zap, 
  Layers, 
  Sparkles,
  ChevronRight,
  Sparkle,
  ShoppingBag,
  DollarSign,
  Smartphone,
  Lock,
  ArrowUpRight
} from 'lucide-react'

export default function CaseStudies() {
  // Only Cadfour is active currently; future case studies will be added here
  const cadfour = portfolioItems.find(p => p.slug === 'cadfour') || portfolioItems[0]

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Case Studies & Client Success Stories — Task19 Technologies"
        description="Explore how Task19 Technologies engineers high-velocity B2B Shopify storefronts, custom pricing systems, and digital enterprise solutions with measurable ROI."
        canonical="https://www.task19.com/case-studies"
      />

      {/* ── Featured Hero Case Study (Matching other pages' aesthetic) ── */}
      {cadfour && (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 border-b border-gray-100">
          {/* Subtle Background Pattern */}
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />

          {/* Ambient Glowing Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[110px] pointer-events-none bg-blue-300/20" />
          <div className="absolute bottom-10 right-10 w-72 h-72 md:w-96 md:h-96 rounded-full blur-[110px] pointer-events-none bg-indigo-300/20" />

          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm shadow-sm text-xs font-semibold text-blue-700 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Featured Case Study
              </span>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
                {cadfour.category}
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading, Story & Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-7 space-y-6"
              >
                <h1 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                  Scaling Canada’s Premier Foodservice Distributor: <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    High-Velocity B2B Shopify Architecture
                  </span>
                </h1>
                
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                  How Task19 eliminated manual quotes, solved multi-tier contract pricing for 1,000+ restaurant supply SKUs, and deployed 5-second passwordless OTP authentication for <strong className="text-gray-900 font-semibold">Cadfour Supplies</strong> without Shopify Plus overhead.
                </p>

                {/* 4 Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 py-2">
                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block font-display font-extrabold text-gray-900 text-2xl sm:text-3xl mb-1">100%</span>
                    <span className="block text-xs text-gray-500 font-medium">Automated Pricing</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block font-display font-extrabold text-blue-600 text-2xl sm:text-3xl mb-1">&lt; 5s</span>
                    <span className="block text-xs text-gray-500 font-medium">OTP Instant Login</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block font-display font-extrabold text-emerald-600 text-2xl sm:text-3xl mb-1">$24k+</span>
                    <span className="block text-xs text-gray-500 font-medium">Annual SaaS Saved</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                    <span className="block font-display font-extrabold text-gray-900 text-2xl sm:text-3xl mb-1">1,000+</span>
                    <span className="block text-xs text-gray-500 font-medium">SKU Tier Overrides</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to={`/portfolio/${cadfour.slug}`}
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-lg transition-all text-sm"
                    style={{ color: '#ffffff' }}
                  >
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>

                  {cadfour.pdfUrl && (
                    <a
                      href={cadfour.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm text-sm"
                      style={{ color: '#111827' }}
                    >
                      <FileDown className="w-4 h-4 mr-2 text-blue-600" /> Download PDF Report
                    </a>
                  )}

                  <a
                    href="https://cadfour.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs sm:text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors py-2 px-2"
                  >
                    Visit cadfour.com <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Browser Mockup Frame */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <Link to={`/portfolio/${cadfour.slug}`} className="block group">
                  <div className="rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Browser Mockup Top Bar */}
                    <div className="h-9 bg-gray-100 px-4 flex items-center justify-between border-b border-gray-200">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono bg-white px-3 py-0.5 rounded-full border border-gray-200">
                        cadfour.com
                      </span>
                      <div className="w-6"></div>
                    </div>
                    
                    {/* Storefront Image */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-gray-50">
                      <img
                        src={cadfour.image}
                        alt="Cadfour Storefront Preview"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-gray-900/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
                        <span className="font-medium">Shopify B2B Custom Architecture</span>
                        <span className="text-blue-300 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Explore Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── Single Case Study Card Section (In-Depth Client Transformation) ── */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block bg-white shadow-sm border border-gray-200 rounded-full px-4 py-1.5 mb-3">
                <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Client Case Studies</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-3xl md:text-4xl tracking-tight">
                In-Depth Client Transformation
              </h3>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Browse Full Portfolio Gallery <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cadfour Single Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border-b border-gray-100">
                <img
                  src={cadfour.image}
                  alt={cadfour.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[#013Ad6] text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                    {cadfour.industry || cadfour.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
                    Enterprise B2B
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 font-medium">{cadfour.client || cadfour.title}</span>
                  <span className="text-xs text-blue-600 font-semibold">{cadfour.category}</span>
                </div>

                <h4 className="font-display font-bold text-gray-900 text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {cadfour.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {cadfour.shortDesc}
                </p>

                {/* Highlights or Results snapshot */}
                {cadfour.results && cadfour.results.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-gray-100">
                    {cadfour.results.slice(0, 2).map((r, ri) => (
                      <div key={ri} className="bg-gray-50 p-2 rounded-lg">
                        <span className="block font-bold text-gray-900 text-base leading-none mb-1">{r.metric}</span>
                        <span className="block text-[11px] text-gray-500 truncate">{r.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                  <Link
                    to={`/portfolio/${cadfour.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white hover:bg-black rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-sm"
                    style={{ color: '#ffffff' }}
                  >
                    Read Case Study <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                  {cadfour.pdfUrl && (
                    <a
                      href={cadfour.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 rounded-lg shadow-sm transition-all group"
                      style={{ color: '#111827' }}
                      title="Download PDF Report"
                    >
                      <FileDown className="w-3.5 h-3.5 text-red-600 transition-transform group-hover:scale-110" />
                      <span className="font-bold text-gray-900" style={{ color: '#111827' }}>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Engineering Approach Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="font-semibold text-gray-800 text-xs uppercase tracking-wider">Methodology</span>
            </div>
            <h3 className="font-display font-bold text-gray-900 text-3xl md:text-4xl tracking-tight mb-4">
              Our Case Study Engineering Framework
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Every client deployment combines custom theme engineering with proprietary apps to solve real commercial bottlenecks without unnecessary SaaS bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h4 className="font-display font-bold text-gray-900 text-xl mb-3">Discovery & Bottlenecks</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We analyze client ordering friction, ERP requirements, manual invoicing pain-points, and conversion drop-offs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h4 className="font-display font-bold text-gray-900 text-xl mb-3">Custom Architecture</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deploying bespoke Shopify storefronts paired with our proprietary apps (B2B Pricing, OTP login, Margin Mate) to eliminate multi-thousand dollar monthly fees.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h4 className="font-display font-bold text-gray-900 text-xl mb-3">Measurable Growth</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivering sub-60-second reordering, zero pricing errors, and measurable annual savings from day one of deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action Banner ── */}
      <section className="py-16 md:py-20 bg-[#050f28] text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
            Ready to Engineer Your Success Story?
          </h3>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
            Partner with certified Shopify experts and app engineers at Task19 Technologies. Transform complex wholesale or retail workflows into high-converting revenue streams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              style={{ color: '#000000' }}
            >
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/shopify-apps"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 border border-white/20 transition-colors"
            >
              Explore Our Shopify Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
