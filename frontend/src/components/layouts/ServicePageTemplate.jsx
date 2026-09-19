import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import FAQAccordion from '../ui/FAQAccordion'
import CTASection from '../ui/CTASection'
import PageHero from '../ui/PageHero'

export default function ServicePageTemplate({
  metaTitle,
  metaDesc,
  heroBadge,
  heroTitle,
  heroSubtitle,
  heroDesc,
  heroImage,
  serviceTitle,
  serviceDesc,
  features,
  results,
  icon: Icon,
  faqs,
  ctaTitle,
  ctaSubtitle
}) {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
      </Helmet>

      {/* ── Page Hero ── */}
      <PageHero
        badgeText={heroBadge}
        title={<>{heroTitle}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{heroSubtitle}</span></>}
        description={heroDesc}
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black transition-all duration-300 hover:scale-105">
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105">
            View Case Studies
          </Link>
        </div>
      </PageHero>

      {/* ── Core Service Content (Premium Split Layout) ── */}
      <section className="bg-white py-12 md:py-16 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Text & Features */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-[#F5F7FF] px-4 py-2 rounded-full mb-6">
                <span className="text-[#013Ad6] font-bold text-[13px] tracking-widest uppercase">
                  Core Capabilities
                </span>
              </div>

              <h4 className="font-display font-bold text-gray-900 mb-6">
                {serviceTitle}
              </h4>

              <p className="text-gray-500 text-[18px] md:text-[20px] font-light leading-relaxed mb-12">
                {serviceDesc}
              </p>

              <div className="space-y-6 mb-12">
                {features.map((f, j) => (
                  <motion.div
                    key={j}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F5F7FF] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#013Ad6] transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-[#013Ad6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[17px] text-gray-800 font-medium leading-relaxed group-hover:text-[#013Ad6] transition-colors duration-300">
                      {f}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 bg-black text-white font-bold text-[15px] px-10 py-4 rounded-full hover:bg-[#013Ad6] transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: Image & Floating Results */}
            <motion.div
              className="lg:w-1/2 relative mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gray-100 mb-8">
                <img
                  src={heroImage}
                  alt="Service Illustration"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Key Highlights */}
              <motion.div
                className="mt-8 bg-[#f8f9fc] border border-gray-100 p-6 md:p-8 rounded-[24px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#013Ad6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h5 className="font-display text-xl font-bold text-gray-900">Key Highlights</h5>
                </div>

                <ul className="space-y-4">
                  {[
                    '8000+ social media community members',
                    'Full-stack team: Product Managers, Developers, Designers, and Marketers',
                    'Developed 10+ SaaS and custom platforms',
                    'Powering 100+ online sellers',
                    'Long-term partnerships with startups and scaling businesses'
                  ].map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#013Ad6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-[#013Ad6] rounded-full"></div>
                      </div>
                      <span className="text-[15px] text-gray-700 leading-relaxed font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#f8f9fc] border-t border-gray-100 py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="mb-6">
                  <div className="inline-block bg-white border border-gray-200" style={{ borderRadius: '9999px', padding: '6px 16px' }}>
                    <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Questions & Answers</span>
                  </div>
                </div>
                <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-5" style={{ fontSize: '25px' }}>
                  Service FAQs
                </h2>
                <p className="text-gray-500 font-light text-[18px] mb-8 max-w-md">
                  Have more questions about our {heroBadge} services? Let's talk.
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
      )}

    </>
  )
}
