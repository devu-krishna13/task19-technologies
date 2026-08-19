import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, Database, Lock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Zero-Loss Database Export',
    desc: 'Preserving orders, customer details, products, and historic coupons with validated mapping models.'
  },
  {
    title: 'Plugin & Theme Customization',
    desc: 'Writing clean custom plugins and custom themes to support subscription and membership portals.'
  },
  {
    title: 'B2B & Wholesale Engine',
    desc: 'Setting up custom tier pricing, bulk order lists, customer registration checks, and tax exemptions.'
  },
  {
    title: 'ERP & Inventory Sync',
    desc: 'Automating inventory updates and order syncs with external systems using WooCommerce APIs.'
  }
];

export default function WooCommerceMigration() {
  return (
    <>
      <Helmet>
        <title>WooCommerce Development & Migration — Task19 Technologies</title>
        <meta name="description" content="Build secure WooCommerce environments or migrate seamlessly with zero downtime." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="WooCommerce Migration"
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
              PHASE 03 — MIGRATION
            </div>
            <h1 className="font-display font-bold text-white leading-tight tracking-tight mb-6 text-4xl md:text-6xl lg:text-7xl break-words">
              WooCommerce to Shopify<br />Migration Services
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Build secure, scalable WooCommerce environments, or migrate existing platforms with complete data preservation and zero catalog downtime.
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
                A Safe and Secure Transition
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Replatforming can be daunting. We take the risk out of migration by ensuring every product, customer record, and historical order is accurately mapped to your new store without losing SEO traction.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">100% Data Integrity</h4>
                    <p className="text-gray-600">No missing orders or broken product variants. Every field is mapped and verified.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">SEO Preservation</h4>
                    <p className="text-gray-600">Proper 301 redirects are generated for every single URL to maintain your Google rankings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Zero Customer Friction</h4>
                    <p className="text-gray-600">Customers keep their accounts and order history, making the transition invisible to them.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Get a Free Migration Estimate <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Code and Migration" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Uptime Guarantee</p>
                    <p className="text-2xl font-bold text-gray-900">99.9%</p>
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
              Seamless Transition. Zero Downtime.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We ensure every product, customer, and order makes the move safely, maintaining your SEO rankings and business continuity.
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
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-700">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section id="migration-process" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Migrate Your Store
          </h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Data Audit & Mapping', desc: 'We analyze your current database structure and map all entities to the new Shopify architecture.' },
              { step: '02', title: 'Trial Migration on Staging', desc: 'A full test migration is performed on a private staging server to verify accuracy and resolve mapping errors.' },
              { step: '03', title: 'Theme & App Setup', desc: 'We rebuild your storefront, ensuring all visual elements and third-party integrations are fully functional.' },
              { step: '04', title: 'Delta Sync & Go Live', desc: 'A final sync captures any new orders placed during the build phase before we switch the DNS to the live store.' }
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
                Start Your Risk-Free Migration <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
