import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Zap, Star, Settings, LayoutDashboard, Target } from 'lucide-react'

export default function MarginMateApp() {
  return (
    <>
      <Helmet>
        <title>MarginMate Custom Pricing | Task19 Technologies</title>
        <meta name="description" content="Reward your loyal customers with personalized pricing and an engaging loyalty program. Increase retention and drive repeat purchases with our all-in-one solution." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[100svh] md:h-screen md:min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="MarginMate Hero Background"
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Shopify Pricing App</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full mb-2 md:mb-8"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-3 md:mb-6" style={{ fontSize: 'clamp(2.25rem, 8vw, 5rem)' }}>
                Custom Pricing & Loyalty <br /><em className="font-serif-italic not-italic text-white/40">Rewards Made Simple.</em>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                Reward your loyal customers with personalized pricing and an engaging loyalty program. Increase retention and drive repeat purchases with our all-in-one solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a 
                href="https://custompricing.task19.com/home" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white font-bold text-[15px] transition-all hover:bg-gray-100 shadow-lg"
                style={{ color: '#000000' }}
              >
                Explore More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="https://youtu.be/f8-t9lA1TrY?si=9t5sfsXlWZwFOfXL" 
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
              { value: '500+', label: 'Active Stores' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '2M+', label: 'Points Redeemed' },
              { value: '24/7', label: 'Support Available' }
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

      {/* About App Text Section */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Flexible Pricing & Loyalty Control for Your Shopify Store
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Custom Pricing & Loyalty App is a Shopify app that allows store owners to offer personalized pricing and reward loyal customers — all within the same store. You can create special pricing for wholesale, VIP, or selected customers, and set prices either lower or higher than your regular retail price based on your business strategy. When customers log in, they automatically see their assigned price. Alongside this, the app also includes a loyalty rewards system where customers earn points on every purchase and redeem them for discounts. It runs smoothly in the background, keeping the shopping experience clean and professional while helping you increase customer retention and overall sales.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 md:py-12 bg-gray-50 border-t border-gray-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Powerful Features</h4>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create personalized pricing and reward loyal customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Tier-Based Pricing',
                desc: 'Create VIP, Gold, or Wholesale customer tiers with exclusive pricing and automated assignments.'
              },
              {
                icon: Zap,
                title: 'Auto Price Replacement',
                desc: 'Instantly replaces retail prices for logged-in eligible customers across your entire storefront.'
              },
              {
                icon: Star,
                title: 'Loyalty Points System',
                desc: 'Automatically reward customers with points on every purchase. Fully configurable redemption rates.'
              },
              {
                icon: Settings,
                title: 'Manual Adjustments',
                desc: 'Easily add or deduct loyalty points directly from the admin panel for complete control.'
              },
              {
                icon: Target,
                title: 'Customer Specifics',
                desc: 'Set exclusive prices for individual customers based on their history or specific requirements.'
              },
              {
                icon: LayoutDashboard,
                title: 'Easy Management',
                desc: 'Control your entire pricing strategy and loyalty program from one intuitive, unified dashboard.'
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
            Ready to Boost Your Sales?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light mb-4 md:mb-10">
            Join hundreds of Shopify merchants who are already rewarding their customers and increasing their repeat purchase rate.
          </p>
          <a 
            href="https://apps.shopify.com/custom-pricing-and-loyalty?st_source=autocomplete&surface_detail=autocomplete_apps" 
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
