import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Performance & Speed Audits',
    desc: 'Analyzing Core Web Vitals, server response times, and script loads to eliminate friction points.'
  },
  {
    title: 'A/B Testing Implementation',
    desc: 'Launching layout experiments on collection and detail pages to identify high-converting designs.'
  },
  {
    title: 'Frictionless Mobile UX',
    desc: 'Streamlining navigation headers, slide-out carts, and filter setups optimized for mobile buyers.'
  },
  {
    title: 'Strategic AOV Uplift Tools',
    desc: 'Configuring custom bundle checkouts, cart recommendations, and threshold progress bars.'
  }
];

export default function CRO() {
  return (
    <>
      <Helmet>
        <title>Shopify Customization & CRO Strategy — Task19 Technologies</title>
        <meta name="description" content="Transform an underperforming store into a conversion engine. We audit, redesign, and optimize your storefront." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="CRO Optimization"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 text-white text-sm font-medium">
              PHASE 02 — OPTIMIZATION
            </div>
            <h1 className="font-display font-bold text-white leading-tight tracking-tight mb-6 text-4xl md:text-6xl lg:text-7xl break-words">
              Shopify CRO &<br />Customization
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Transform an underperforming store into a conversion engine. We audit, redesign, and optimize your storefront to lift average order value and scale conversion metrics.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Why Choose Us / Key Benefits */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                alt="Analytics Graph" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Average Conversion Lift</p>
                    <p className="text-2xl font-bold text-gray-900">+35%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Turn Traffic Into Revenue
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Driving traffic is expensive. If your store isn't optimized to convert those visitors, you're leaving money on the table. We identify drop-off points and patch the leaks in your funnel.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Data-Backed Decisions</h4>
                    <p className="text-gray-600">No guesswork. We rely on heatmaps, analytics, and user testing to guide every design change.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Increase Average Order Value</h4>
                    <p className="text-gray-600">Implement intelligent upsells, cross-sells, and bundling strategies at the perfect moment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Reduce Cart Abandonment</h4>
                    <p className="text-gray-600">Streamline the checkout flow, optimize trust signals, and remove unnecessary friction.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Schedule CRO Audit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Optimization Toolkit
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We employ a comprehensive suite of tools and strategies to continuously monitor and improve your store's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[24px] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-700">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section id="cro-process" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our 4-Step CRO Framework
          </h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Comprehensive Audit', desc: 'We analyze your current Google Analytics, heatmaps, and session recordings to identify where users are dropping off.' },
              { step: '02', title: 'Hypothesis Creation', desc: 'Based on the data, we formulate specific hypotheses on what design or structural changes will improve conversion rates.' },
              { step: '03', title: 'Design & A/B Testing', desc: 'We design the new variants and run controlled split tests to gather statistical proof before rolling out changes.' },
              { step: '04', title: 'Implementation & Iteration', desc: 'Winning variants are permanently coded into your theme, and we move on to the next major drop-off point.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-4xl font-display font-bold text-gray-200 shrink-0 mt-1">{item.step}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Optimizing Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
