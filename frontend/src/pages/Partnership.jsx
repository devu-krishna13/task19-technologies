import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Partnership() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Helmet>
        <title>Partnership — Task19 Technologies</title>
      </Helmet>
      
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[70svh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Partnership Background"
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Join Our Network</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Strategic <em className="font-serif-italic not-italic text-white/40">Partnerships.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">Grow With Us</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We partner with industry leaders, agencies, and technology platforms to deliver exceptional digital experiences. By joining our partnership network, you gain access to our enterprise-grade development capabilities, dedicated support, and mutually beneficial growth opportunities.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#013Ad6] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-blue-800 transition-colors">
            Become a Partner <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
