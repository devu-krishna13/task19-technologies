import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
export default function Feedback() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Helmet>
        <title>Submit Feedback — Task19 Technologies</title>
      </Helmet>
      
      {/* ── Hero Section ── */}
      <PageHero
        badgeText="We Value Your Voice"
        title={<>Submit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Feedback.</span></>}
        description="Your feedback is essential to our continuous improvement."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

      {/* Content Section */}
      <section className="py-12 md:py-16 container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">Help Us Improve</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Your feedback is essential to our continuous improvement. Whether you have suggestions for our services, thoughts on your experience with our team, or ideas for new features, we want to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#013Ad6] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-blue-800 transition-colors">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
