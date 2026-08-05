import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Star, Award, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const awardsData = [
  {
    title: 'Top Shopify Plus Agency 2023',
    issuer: 'Clutch',
    year: '2023',
    desc: 'Recognized for delivering outstanding enterprise-level Shopify architectures and seamless migration solutions.',
    icon: Trophy,
    color: '#013Ad6'
  },
  {
    title: 'Best E-Commerce UI/UX Design',
    issuer: 'Awwwards',
    year: '2022',
    desc: 'Awarded for an innovative, conversion-first Direct-to-Consumer storefront design that significantly reduced bounce rates.',
    icon: Star,
    color: '#b45309'
  },
  {
    title: 'Top Rated WooCommerce Developer',
    issuer: 'Enterprise Review',
    year: '2023',
    desc: 'Maintained a flawless track record delivering high-performance WordPress and WooCommerce environments for B2B clients.',
    icon: ShieldCheck,
    color: '#059669'
  },
  {
    title: 'Fastest Growing Tech Agency',
    issuer: 'Tech Business Awards',
    year: '2024',
    desc: 'Recognized among the top 50 fastest-growing digital transformation agencies focused on modern scalable commerce.',
    icon: Award,
    color: '#7c3aed'
  }
]

export default function Awards() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Helmet>
        <title>Awards & Recognitions — Task19 Technologies</title>
      </Helmet>
      
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[70svh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Awards Background"
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Our Achievements</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Awards & <em className="font-serif-italic not-italic text-white/40">Recognitions.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="py-12 md:py-16 bg-[#f8f9fc]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900">Celebrating Excellence</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to delivering world-class digital solutions has been recognized by leading industry authorities. These awards represent our team's dedication to innovation, quality, and measurable client success.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {awardsData.map((award, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-10 bg-white border border-gray-100 hover:border-[#013Ad6]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-[24px] transition-all duration-400 w-full"
              >
                {/* Left Side: Icon & Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 w-full md:w-2/3">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-700 group-hover:bg-[#013Ad6] group-hover:text-white transition-colors duration-400 shadow-sm">
                    <award.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-3 group-hover:text-[#013Ad6] transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light text-[15px]">
                      {award.desc}
                    </p>
                  </div>
                </div>
                
                {/* Right Side: Issuer & Year */}
                <div className="mt-8 md:mt-0 flex items-center gap-8 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-10 text-left w-full md:w-1/3">
                  <div className="flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Issuer
                    </span>
                    <span className="block font-bold text-gray-900 text-[17px]">
                      {award.issuer}
                    </span>
                  </div>
                  <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Year
                    </span>
                    <span className="block font-bold text-[#013Ad6] text-2xl font-display">
                      {award.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-[#013Ad6] text-white px-10 py-4 rounded-full font-bold text-[15px] hover:bg-[#002B9E] transition-colors shadow-lg">
                View Our Award-Winning Work <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
