import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Shield, Settings, Users, Database, LayoutDashboard, Clock } from 'lucide-react'


export default function ProfitSaverApp() {
  return (
    <>
      <Helmet>
        <title>Profit Saver: 7-Tier Loyalty | Task19 Technologies</title>
        <meta name="description" content="Profit Saver automatically issues tiered discount vouchers when customers place orders — no points, no complexity. You set the budget, we handle the rest." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[100svh] md:h-screen md:min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="Profit Saver Hero Background"
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Shopify Loyalty App</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full mb-2 md:mb-8"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-3 md:mb-6" style={{ fontSize: 'clamp(2.25rem, 8vw, 5rem)' }}>
                Turn Every Order Into a <br /><em className="font-serif-italic not-italic text-white/40">Loyalty Reward.</em>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                Profit Saver automatically issues tiered discount vouchers when customers place orders — no points, no complexity. You set the budget, we handle the rest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a 
                href="https://tierloyaltycommon.task19.com/home" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 md:h-14 px-8 md:px-10 rounded-full bg-white font-bold text-[15px] transition-all hover:bg-gray-100 shadow-lg"
                style={{ color: '#000000' }}
              >
                Explore More <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="https://youtu.be/2h9QkGZ41G0?si=TuTGSP_aan9z1YNI" 
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
              { value: '7', label: 'Discount Tiers' },
              { value: '100%', label: 'Weighted Probabilities' },
              { value: '100%', label: 'Budget Controlled' },
              { value: '100%', label: 'Merchant Confirmed' }
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
              Rewards on autopilot
            </h2>
            <p className="text-gray-500 text-lg">Three steps. No manual work after setup.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>

            {[
              {
                step: '01',
                title: 'Customer Places Order',
                desc: 'When an order is created in your store, Shopify notifies Profit Saver via webhook — instantly and automatically.'
              },
              {
                step: '02',
                title: 'Tier Is Randomly Selected',
                desc: 'Choose which features to enable. Set your discount rules, delivery estimates, and AI features in our intuitive dashboard.'
              },
              {
                step: '03',
                title: 'Voucher Lands in Wallet',
                desc: 'The customer sees their voucher in the cart widget. They can stack rewards based on their activity. One click generates a real Shopify discount code.'
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
            Gamified Loyalty Rewards for Shopify Stores
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Tier Loyalty is a Shopify loyalty app that turns every purchase into a fun reward experience for your customers. Instead of a traditional points system, this app gives customers a spin-to-win reward on every order, where they can earn tiered vouchers from 1% to 20% off, making shopping feel exciting and encouraging them to buy again. The app shows mystery rewards that reveal themselves after checkout, offers up to 7 different reward levels, lets customers stack vouchers up to a set cap, and works seamlessly on your product pages, cart, and checkout — all while protecting your margins and running automatically in the background. It’s designed to boost repeat purchases and make loyalty feel engaging and rewarding.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-10 md:py-12 bg-gray-50 border-t border-gray-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Everything built in</h4>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Install once. Rewards flow automatically.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Budget Cap Control',
                desc: 'Set a campaign budget cap. When reached, the system stops issuing vouchers automatically — zero overspend risk.'
              },
              {
                icon: LayoutDashboard,
                title: 'Campaign Dashboard',
                desc: 'Track budget used, coins issued, and campaign history in a clean admin panel embedded in Shopify.'
              },
              {
                icon: Database,
                title: 'Auto Reconciliation',
                desc: 'Coins issued by email are automatically matched to the Shopify customer ID when they log in.'
              },
              {
                icon: Users,
                title: 'Manual Credit',
                desc: 'Manually credit a customer with any tier voucher — by customer ID or email address.'
              },
              {
                icon: Settings,
                title: 'Fraud Prevention',
                desc: 'Vouchers are reserved when a code is applied — preventing double-use across sessions.'
              },
              {
                icon: Clock,
                title: 'Order History',
                desc: 'Full redeemed / expired / revoked voucher history per customer — visible in the cart widget.'
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
            Start rewarding your customers today
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light mb-4 md:mb-10">
            Free to install. No credit card needed. Live in 5 minutes.
          </p>
          <a 
            href="https://apps.shopify.com/7-tier-loyalty?st_source=autocomplete&surface_detail=autocomplete_apps" 
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
