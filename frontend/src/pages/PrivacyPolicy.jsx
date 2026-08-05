import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    title: 'Information we collect',
    body: 'We collect contact details, project information, and communication history when you submit a form, request an audit, or begin a project discussion with Task19 Technologies. This helps us understand your needs and tailor our proposals accordingly.',
  },
  {
    title: 'How we use information',
    body: 'Your information is used strictly to respond to enquiries, prepare proposals, improve service delivery, and maintain communication related to project execution and support. We do not sell or rent your personal data to third parties for marketing purposes.',
  },
  {
    title: 'Data protection',
    body: 'We use reasonable administrative and technical safeguards to protect client information and limit access to people involved in delivery, support, or required business operations. Our systems are regularly monitored for potential vulnerabilities.',
  },
  {
    title: 'Third-party services',
    body: 'Where needed, trusted third-party providers may support hosting, analytics, communication, or payment workflows. They only receive data necessary for their specific function and are contractually obligated to keep it secure and confidential.',
  },
  {
    title: 'Cookies and Tracking',
    body: 'We may use cookies and similar tracking technologies on our website to analyze traffic, enhance user experience, and optimize our services. You can control cookie preferences through your browser settings.',
  },
  {
    title: 'Your Rights',
    body: 'Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. Please reach out to us using the contact information below to exercise any of these rights.',
  }
]

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Privacy Policy — Task19 Technologies</title>
        <meta
          name="description"
          content="Read the privacy policy for Task19 Technologies and how we collect, use, and protect information shared with us."
        />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[400px] h-[50svh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&crop=center&w=1920&h=1080&q=80"
            alt="Privacy Background"
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Legal Information</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Privacy<em className="font-serif-italic not-italic text-white/40"> Policy.</em>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                This page explains how Task19 Technologies handles the information you share with us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
            
            {/* Sticky Sidebar Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <h3 className="font-display font-bold mb-6 uppercase tracking-wider text-sm" style={{ color: '#111827' }}>Table of Contents</h3>
                <ul className="space-y-4 border-l-2 border-gray-100 pl-4">
                  {sections.map((section, idx) => (
                    <li key={idx}>
                      <a href={`#section-${idx}`} className="hover:text-[#013Ad6] transition-colors text-sm font-medium block" style={{ color: '#6b7280' }}>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content Area */}
            <div className="space-y-12">
              <div className="max-w-none">
                <p className="text-xl font-medium mb-12 leading-relaxed" style={{ color: '#1f2937' }}>
                  At Task19 Technologies, we take your privacy seriously. We are committed to protecting the personal data you share with us and ensuring transparency in how we handle it. Last updated: August 2026.
                </p>
                
                {sections.map((section, idx) => (
                  <div key={idx} id={`section-${idx}`} className="scroll-mt-32 mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6" style={{ color: '#111827' }}>{section.title}</h2>
                    <p className="leading-relaxed" style={{ color: '#4b5563' }}>
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-gray-200 mt-16">
                <h3 className="font-display text-2xl font-bold mb-4" style={{ color: '#111827' }}>Still have questions?</h3>
                <p className="mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
                  If you have any questions about our Privacy Policy or data handling practices, please do not hesitate to contact our support team.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#013Ad6] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide hover:bg-[#002B9E] transition-colors shadow-md">
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
