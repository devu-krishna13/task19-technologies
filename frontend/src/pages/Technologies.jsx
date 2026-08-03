import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import { technologies, techCategories } from '../constants/data'

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Technologies We Use — Task19 Technologies</title>
        <meta name="description" content="Explore the modern technology stack Task19 Technologies uses to build high-performance web, mobile, cloud, and AI solutions." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[100svh] md:h-[60vh] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="Technologies"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, rgba(5, 15, 35, 0.95) 80%)'
          }}></div>
        </div>

        <div className="container relative z-10 pt-24 md:pt-20">
          <motion.div className="max-w-4xl mx-auto text-center px-4 sm:px-6" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 mb-6 md:mb-8 mx-auto">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] md:text-xs font-bold">!</div>
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Tech Stack</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
              The Technologies That<br /><em className="font-serif-italic not-italic text-white/40">Power Our Solutions.</em>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="section bg-surface">
        <div className="container">
          {/* Category Filter */}
          <style>{`
            .hide-scroll::-webkit-scrollbar { display: none; }
            .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          <div className="w-full mx-auto hide-scroll" style={{ marginBottom: '40px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '12px', paddingBottom: '8px' }}>
              {techCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="font-display text-sm font-bold transition-all duration-300"
                  style={{
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    ...(activeCategory === cat
                      ? { backgroundColor: '#013ad6', color: '#ffffff', borderColor: '#013ad6', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }
                      : { backgroundColor: '#ffffff', color: '#6b7280', borderColor: '#e5e7eb' }
                    )
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group relative flex items-center justify-center p-6 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default aspect-square"
                style={{
                  borderRadius: '24px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
                }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="relative z-10 w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category breakdown */}
      <section className="section section-grey">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8" style={{ marginBottom: '40px' }}>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[#013ad6]"></div>
                <span className="text-[#013ad6] font-display font-bold text-sm tracking-widest uppercase">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight">
                How We Choose Our Stack
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p className="text-gray-500 text-lg leading-relaxed lg:text-right">
                We make technology decisions based on what's best for your project — not what's trendy or what we're most comfortable with.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Performance First', desc: 'Every technology in our stack is evaluated for real-world performance under production load. We don\'t use technologies that look impressive in demos but fail in production.' },
              { title: 'Long-Term Viability', desc: 'We choose technologies with strong community backing, corporate support, and clear long-term roadmaps. Your investment should remain viable for years.' },
              { title: 'Right Tool, Right Job', desc: 'We don\'t have a one-size-fits-all stack. We match technology choices to the specific requirements of each project — and we\'re always honest about the trade-offs.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                style={{
                  padding: '36px',
                  borderRadius: '24px',
                  border: '1px solid rgba(229, 231, 235, 0.5)',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#013ad6] to-[#06b6d4] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-9xl font-display font-bold pointer-events-none group-hover:opacity-[0.06] transition-all duration-500 group-hover:-translate-y-4 group-hover:translate-x-4">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-11 h-11 flex-shrink-0 bg-blue-50 rounded-xl flex items-center justify-center font-display font-bold text-base text-[#013ad6] border border-blue-100 group-hover:bg-[#013ad6] group-hover:text-white transition-colors duration-500 shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display font-bold text-gray-900 tracking-tight" style={{ fontSize: '16px', lineHeight: '1.2' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed relative z-10" style={{ fontSize: '14px' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
