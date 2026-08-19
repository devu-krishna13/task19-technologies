import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutTemplate, Shield, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Custom Theme Development',
    desc: 'Building bespoke WordPress themes from scratch with clean code, ensuring optimal performance and flexibility.'
  },
  {
    title: 'Platform Migrations',
    desc: 'Safely transitioning your existing site to WordPress without losing SEO rankings or critical data.'
  },
  {
    title: 'Speed & Security Optimization',
    desc: 'Implementing caching strategies, CDNs, and robust security measures to protect your content and users.'
  },
  {
    title: 'Headless WordPress Architecture',
    desc: 'Decoupling the frontend from the backend to deliver lightning-fast experiences using modern JavaScript frameworks.'
  }
];

export default function WordPress() {
  return (
    <>
      <Helmet>
        <title>Custom WordPress Development — Task19 Technologies</title>
        <meta name="description" content="Design and develop fast, secure, and scalable WordPress websites perfectly tailored to your brand." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="WordPress Development"
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
              PHASE 05 — CONTENT & COMMERCE
            </div>
            <h1 className="font-display font-bold text-white leading-tight tracking-tight mb-6 text-4xl md:text-6xl lg:text-7xl break-words">
              WordPress Development<br />& Scalability
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Design and develop fast, secure, and scalable WordPress websites perfectly tailored to your brand's content and operational needs.
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
                src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80" 
                alt="WordPress Development" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Core Web Vitals</p>
                    <p className="text-2xl font-bold text-gray-900">95+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                WordPress Done Right
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We don't rely on bloated page builders. We engineer custom WordPress solutions from the ground up, focusing on speed, security, and an intuitive authoring experience for your marketing team.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Lightning Fast</h4>
                    <p className="text-gray-600">Clean code and advanced caching setups to ensure your site loads instantly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Enterprise Security</h4>
                    <p className="text-gray-600">Hardened environments, routine updates, and robust firewall configurations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">SEO Optimized</h4>
                    <p className="text-gray-600">Built with semantic HTML and schema markup to dominate search rankings.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Request a Proposal <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section id="wp-features" className="py-12 md:py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Platform Built Around Your Content
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We leverage the flexibility of WordPress to build sites that are not just beautiful, but deeply integrated with your business operations.
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
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-700">
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How it works */}
      <section id="wp-process" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Development Process
          </h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Content Strategy & Design', desc: 'We align on the site architecture and design bespoke UI layouts tailored to your audience.' },
              { step: '02', title: 'Custom Theme Build', desc: 'Translating designs into a highly optimized, lightweight WordPress theme utilizing modern standards.' },
              { step: '03', title: 'Gutenberg Integration', desc: 'Configuring custom blocks so your team can easily build rich pages without touching code.' },
              { step: '04', title: 'QA & Deployment', desc: 'Rigorous performance testing and SEO checks before executing a seamless launch.' }
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
                Let's Build Your Site <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
