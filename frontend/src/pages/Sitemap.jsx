import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Layers, FileText, HelpCircle } from 'lucide-react'

const sections = [
  {
    title: 'Company',
    icon: <Briefcase className="w-5 h-5" />,
    links: [
      ['Home', '/'],
      ['About Us', '/about'],
      ['Careers', '/careers'],
      ['Partnership', '/partnership'],
      ['Contact Us', '/contact'],
    ],
  },
  {
    title: 'Services',
    icon: <Layers className="w-5 h-5" />,
    links: [
      ['All Services', '/services'],
      ['Shopify Development', '/services/shopify'],
      ['WooCommerce Migration', '/services/woocommerce'],
      ['Custom Shopify Apps', '/services/shopify-apps-dev'],
      ['Web Development', '/services/web-development'],
      ['Mobile App Development', '/services/mobile-app-development'],
      ['UI/UX Design', '/services/ui-ux-design'],
    ],
  },
  {
    title: 'Resources & Work',
    icon: <FileText className="w-5 h-5" />,
    links: [
      ['Portfolio', '/portfolio'],
      ['Industries', '/industries'],
      ['Technologies', '/technologies'],
      ['Client Success Stories', '/testimonials'],
      ['Our Clients', '/clients'],
      ['Awards & Recognitions', '/awards'],
      ['Blog & Insights', '/blog'],
    ],
  },
  {
    title: 'Support & Legal',
    icon: <HelpCircle className="w-5 h-5" />,
    links: [
      ['Submit Feedback', '/feedback'],
      ['Privacy Policy', '/privacy-policy'],
      ['Terms of Service', '/terms'],
      ['Sitemap', '/sitemap'],
    ],
  },
]

export default function Sitemap() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Sitemap — Task19 Technologies</title>
        <meta
          name="description"
          content="Browse the sitemap for Task19 Technologies and navigate quickly to our services, portfolio, blog, and legal pages."
        />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[400px] h-[50svh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&crop=center&w=1920&h=1080&q=80"
            alt="Sitemap Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.2) 0%, rgba(5, 15, 35, 0.95) 80%)'
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Site Directory</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Site<em className="font-serif-italic not-italic text-white/40">map.</em>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                A simple directory of the main pages inside the site so you can reach the right section quickly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sitemap Links Grid ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {sections.map((section, idx) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#f8f9fc] rounded-[32px] p-8 md:p-10 border border-gray-100 hover:border-[#013Ad6]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-400 h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#013Ad6] shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 leading-tight">
                    {section.title}
                  </h2>
                </div>
                
                <ul className="space-y-5 flex-grow">
                  {section.links.map(([label, href]) => (
                    <li key={href}>
                      <Link 
                        to={href} 
                        className="group flex items-center justify-between text-gray-600 hover:text-[#013Ad6] font-medium transition-colors duration-300"
                      >
                        <span className="text-[15px]">{label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
