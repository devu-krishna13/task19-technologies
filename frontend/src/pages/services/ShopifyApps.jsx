import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Smartphone, Blocks } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Private Store Automations',
    desc: 'Automating internal workflows, third-party stock syncing, and advanced metadata operations.'
  },
  {
    title: 'Shopify App Store Launch',
    desc: 'Designing and building public apps using React, Node.js, and official Shopify Polaris guidelines.'
  },
  {
    title: 'Plus Checkout Customization',
    desc: 'Implementing custom checkout validators, functions, and delivery rules for Shopify Plus stores.'
  },
  {
    title: 'Secure API Connections',
    desc: 'Connecting storefronts to HubSpot, Salesforce, custom CRM, and logistics solutions via secure APIs.'
  }
];

export default function ShopifyApps() {
  return (
    <>
      <Helmet>
        <title>Custom Shopify App Development — Task19 Technologies</title>
        <meta name="description" content="Create custom apps when standard integrations fall short. From private automations to public SaaS apps." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Shopify Apps Development"
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
              PHASE 04 — INTEGRATION
            </div>
            <h1 className="font-display font-bold text-white leading-tight tracking-tight mb-6 text-4xl md:text-6xl lg:text-7xl break-words">
              Custom Shopify Apps<br />& Private Solutions
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Create custom apps when standard integrations fall short. From private automations to public SaaS apps listed on the Shopify App Store.
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Code and Development" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Polaris Compliant</p>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pushing Shopify's Boundaries
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Sometimes the app you need just doesn't exist yet. We specialize in building secure, highly scalable Shopify Apps tailored to your unique operational logic or as a standalone SaaS product.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Blocks className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Seamless Integration</h4>
                    <p className="text-gray-600">Native-feeling interfaces using the official Shopify Polaris design system.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Modern Architecture</h4>
                    <p className="text-gray-600">Built on Node.js, React, and GraphQL for lightning-fast API responses and robust scalability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">App Store Approval</h4>
                    <p className="text-gray-600">Expert guidance through Shopify's rigorous review process for public SaaS apps.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Consult an App Developer <ArrowRight className="ml-2 w-4 h-4" />
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
              Extend Shopify's Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you need to streamline internal ops or build a scalable SaaS product, our custom apps deliver flawless performance.
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
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-700">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section id="app-development" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Build Shopify Apps
          </h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Requirements & Scope', desc: 'We map out the precise logic, API limitations, and user flows required to achieve your goal.' },
              { step: '02', title: 'UI/UX Design in Polaris', desc: 'Designing an intuitive interface that feels like a native extension of the Shopify admin panel.' },
              { step: '03', title: 'Development & Security', desc: 'Writing clean, secure code utilizing Shopify’s GraphQL APIs and App Bridge.' },
              { step: '04', title: 'Deployment & Review', desc: 'Thorough testing across stores, and handling the entire submission process if listing publicly.' }
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
                Start Building Your App <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
