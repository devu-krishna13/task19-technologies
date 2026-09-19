import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
const sections = [
  {
    title: 'Use of this website',
    body: 'The Task19 Technologies website is provided for general information about our services, case studies, insights, and contact channels. Content may be updated without prior notice to ensure accuracy and relevance.',
  },
  {
    title: 'Project proposals and estimates',
    body: 'Any timeline, scope, or pricing information shared through consultations or proposals remains subject to project discovery, agreed deliverables, and final contract terms. Initial estimates are provided as guidelines and do not constitute a binding agreement until formally signed.',
  },
  {
    title: 'Intellectual property',
    body: 'Unless otherwise stated, the content, design elements, copy, code snippets, and materials presented on this website are owned by Task19 Technologies or used with permission. You may not copy, reproduce, or distribute this content without prior written consent.',
  },
  {
    title: 'Limitation of liability',
    body: 'While we aim to keep all content accurate and current, Task19 Technologies is not liable for direct or indirect loss arising solely from reliance on website content outside a signed service agreement.',
  },
  {
    title: 'Governing Law',
    body: 'These terms of service shall be governed by and construed in accordance with the applicable laws of the jurisdiction in which Task19 Technologies operates. Any disputes will be subject to the exclusive jurisdiction of the competent courts.',
  }
]

export default function Terms() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Terms of Service — Task19 Technologies</title>
        <meta
          name="description"
          content="Read the Task19 Technologies terms of service for website use, proposals, intellectual property, and general limitations."
        />
      </Helmet>

      {/* ── Hero Section ── */}
      <PageHero
        badgeText="Legal Information"
        title={<>Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Service.</span></>}
        description="These terms outline the general conditions for using our website and the principles that support our client engagements."
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
                  Please read these Terms of Service carefully before using the Task19 Technologies website. By accessing or using our site, you agree to be bound by these terms. Last updated: August 2026.
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
                <h3 className="font-display text-2xl font-bold mb-4" style={{ color: '#111827' }}>Questions about our terms?</h3>
                <p className="mb-8 leading-relaxed" style={{ color: '#6b7280' }}>
                  If you require clarification on any of our Terms of Service or how they apply to a potential project, please get in touch with our team.
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
