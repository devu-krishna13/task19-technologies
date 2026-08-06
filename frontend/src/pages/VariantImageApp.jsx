import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Play, BarChart3, Zap, Layers, Shield, LayoutDashboard, Settings } from 'lucide-react'

export default function VariantImageApp() {
  return (
    <>
      <Helmet>
        <title>Task19 Variant Image Manager | Task19 Technologies</title>
        <meta name="description" content="Create variant-specific image galleries that update dynamically. Reduce confusion, boost conversions, and deliver a premium shopping experience." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[100svh] md:h-screen md:min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="Variant Image Manager Hero Background"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 0.9) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-8 md:pt-0">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 mb-6 md:mb-8"
            >
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] md:text-xs font-bold">!</div>
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Shopify Storefront App</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full mb-2 md:mb-8"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-3 md:mb-6" style={{ fontSize: 'clamp(2.25rem, 8vw, 5rem)' }}>
                Show Customers the <br /><em className="font-serif-italic not-italic text-white/40">Right Images.</em>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                Create variant-specific image galleries that update dynamically. Reduce confusion, boost conversions, and deliver a premium shopping experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a 
                href="https://variantappstore.task19.com/home" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white font-bold text-[15px] transition-all hover:bg-gray-100 shadow-lg"
                style={{ color: '#000000' }}
              >
                Explore More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="https://youtu.be/f96bx7ZU3D8?si=AoFeYg3nu_OV9i5-" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white/10 text-white border border-white/20 font-medium text-[15px] transition-all hover:bg-white/20"
              >
                <Play className="w-4 h-4 mr-2" /> View Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '50%', label: 'Reduction in Returns' },
              { value: '35%', label: 'Increase in Conversions' },
              { value: '2min', label: 'Setup Time' },
              { value: '100%', label: 'Theme Compatible' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[24px] p-4 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-center items-center min-h-[160px] md:min-h-[220px]"
              >
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4" style={{ color: '#017253' }}>
                  {stat.value}
                </h3>
                <p className="text-[12px] md:text-[15px] font-medium leading-tight" style={{ color: '#017253' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pb-10 md:pb-12 pt-4 md:pt-6 bg-surface">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">How it work</h4>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Variant galleries in minutes
            </h2>
            <p className="text-gray-500 text-lg">Three steps to a better customer experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>

            {[
              {
                step: '01',
                title: 'Connect Your Store',
                desc: 'Install Task19 Variant Image Manager from the Shopify App Store. We\'ll automatically sync your products and their variants in seconds.'
              },
              {
                step: '02',
                title: 'Assign Images',
                desc: 'Use our intuitive drag-and-drop interface to easily organize and assign your product images to specific variants.'
              },
              {
                step: '03',
                title: 'Go Live',
                desc: 'Enable the app block in your theme editor with one click. Your dynamic variant galleries will start appearing on product pages immediately.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-display text-2xl font-bold mb-6 border-4 border-white shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About App Text Section */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Show the Right Image. Sell with Confidence.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Shopify Variant Manager is a Shopify app designed to help store owners show the right images and descriptions for each product variant, such as different sizes, colors, or styles. Instead of customers seeing the same images for every option, this app lets you display specific photos and details that match exactly what they choose. It makes your product pages clearer, more attractive, and easier to understand, helping customers feel confident about what they are buying. In simple terms, this app helps Shopify merchants present their products better and increase sales by giving shoppers a more accurate and personalized shopping experience.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 md:py-12 bg-gray-50 border-t border-gray-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Powerful Features</h4>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create stunning variant galleries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Advanced Analytics',
                desc: 'Track which variants are drawing the most attention and optimize your image strategy based on real data.'
              },
              {
                icon: Zap,
                title: 'Zero Performance Impact',
                desc: 'Our gallery script is lazy-loaded and optimized. It adds zero bloat to your storefront load times.'
              },
              {
                icon: Layers,
                title: 'Multi-Store Support',
                desc: 'Manage unlimited Shopify stores with secure OAuth. Perfect for agencies and multi-brand merchants.'
              },
              {
                icon: Shield,
                title: 'GDPR & Security',
                desc: 'Full compliance with automatic data deletion. Your data is encrypted and secure.'
              },
              {
                icon: LayoutDashboard,
                title: 'Theme Independent',
                desc: 'Works with any Shopify theme using App Blocks. Customizable styles to match brand perfectly.'
              },
              {
                icon: Settings,
                title: 'Auto-Sync (Webhooks)',
                desc: 'Shopify webhooks automatically sync changes. Your data stays current without manual work.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[24px] border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-10 md:py-12 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-6">
            Ready to Transform Your Product Pages?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light mb-4 md:mb-10">
            Join hundreds of merchants using Task19 Variant Image Manager to create better shopping experiences.
          </p>
          <a 
            href="https://apps.shopify.com/variant-2?st_source=autocomplete&surface_detail=autocomplete_apps" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-white font-bold text-[16px] transition-all hover:bg-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Add to Shopify - Free <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </>
  )
}
