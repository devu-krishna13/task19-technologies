import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Platform Architecture Consulting',
    desc: 'Guidance on choosing the right plan — Standard, Advanced, or Shopify Plus — for where your brand is headed.'
  },
  {
    title: 'Developer Environment Setup',
    desc: 'Secure development, staging, and live environments configured for a clean, dependable release process.'
  },
  {
    title: 'Core Store Configuration',
    desc: 'Shipping profiles, payment gateways, tax rules, multi-currency, and localisation — set up right, once.'
  },
  {
    title: 'Code Structure & Theme Strategy',
    desc: 'Scalable Liquid, sound version control, and theme practices your future team can actually build on.'
  }
];

export default function D2CStoreSetup() {
  return (
    <>
      <Helmet>
        <title>Shopify D2C Setup & Strategy — Task19 Technologies</title>
        <meta name="description" content="We architect and build high-performing Shopify stores from the ground up for D2C brands." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="D2C Setup"
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
              PHASE 01 — FOUNDATION
            </div>
            <h1 className="font-display font-bold text-white leading-tight tracking-tight mb-6 text-4xl md:text-6xl lg:text-7xl break-words">
              Shopify D2C Developer<br />Setup & Strategy
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We architect and build high-performing Shopify stores from the ground up for direct-to-consumer brands, structuring every decision around conversion and growth from day one.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Why Choose Us / Key Benefits */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why a Proper Setup Matters
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A Shopify store is more than just a theme and some products. The foundation you lay on day one determines how easily you can scale, integrate apps, and optimize for conversions in the future.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Built for Speed</h4>
                    <p className="text-gray-600">Optimized asset delivery and clean liquid code ensures lightning-fast load times.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Future-Proof Architecture</h4>
                    <p className="text-gray-600">Configured to handle catalog expansions and high-traffic flash sales without breaking.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Global Ready</h4>
                    <p className="text-gray-600">Properly structured markets, currencies, and languages for international expansion.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Consult with an Expert <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard Setup" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Setup Success Rate</p>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                  </div>
                </div>
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
              Everything Included in the Foundation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our D2C setup process ensures every technical aspect of your Shopify store is configured for scale, speed, and seamless management.
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
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section id="how-it-works" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Work
          </h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Discovery & Architecture', desc: 'We start by understanding your business model, catalog size, and target audience to architect the optimal Shopify setup.' },
              { step: '02', title: 'Development & Configuration', desc: 'Our team builds out the environments, configures essential settings, and develops the custom Liquid themes tailored to your brand.' },
              { step: '03', title: 'Testing & QA', desc: 'Rigorous testing across devices, browsers, and simulated user flows to ensure a flawless checkout experience.' },
              { step: '04', title: 'Launch & Handover', desc: 'A smooth transition to live, complete with team training on managing the new Shopify ecosystem.' }
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
                Schedule Your Project Kickoff <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
