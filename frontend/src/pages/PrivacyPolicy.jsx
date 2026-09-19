import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
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
      <PageHero
        badgeText="Legal Information"
        title={<>Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Policy.</span></>}
        description="This page explains how Task19 Technologies handles the information you share with us."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

      {/* ── Content Section ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
            
            {/* Sticky Sidebar Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <h4 className="font-display font-bold mb-6 uppercase tracking-wider text-sm" style={{ color: '#111827' }}>Table of Contents</h4>
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
                    <h4 className="font-display text-2xl md:text-3xl font-bold mb-6" style={{ color: '#111827' }}>{section.title}</h4>
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
