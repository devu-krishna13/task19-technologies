import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutTemplate, Shield, Zap, Search, Code, Smartphone, Database, Lock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PageHero from '../../components/ui/PageHero';
const features = [
  {
    title: 'Custom WordPress Theme Development',
    desc: 'We engineer bespoke, pixel-perfect WordPress themes from scratch. Our clean code approach ensures lightning-fast load times, optimal Core Web Vitals, and ultimate design flexibility tailored to your brand.',
    icon: LayoutTemplate
  },
  {
    title: 'WooCommerce & E-Commerce Solutions',
    desc: 'Transform your WordPress site into a high-converting sales engine. We specialize in complex WooCommerce setups, custom payment gateways, and scalable digital storefronts.',
    icon: Code
  },
  {
    title: 'Headless WordPress Architecture',
    desc: 'Future-proof your tech stack by decoupling the frontend using React or Next.js. Deliver blazing-fast, app-like experiences while keeping the familiar WordPress CMS backend.',
    icon: Smartphone
  },
  {
    title: 'Platform Migrations & Upgrades',
    desc: 'Safely and seamlessly migrate your existing website or legacy CMS to WordPress without losing critical data, user accounts, or your hard-earned search engine rankings.',
    icon: Database
  },
  {
    title: 'Advanced Speed Optimization',
    desc: 'We implement rigorous caching strategies, CDN integrations, and database optimizations to guarantee your WordPress site loads instantly across all devices and global networks.',
    icon: Zap
  },
  {
    title: 'Enterprise Security & Maintenance',
    desc: 'Protect your digital assets with robust firewalls, automated malware scanning, and hardened server environments designed specifically for enterprise WordPress deployments.',
    icon: Lock
  }
];

export default function WordPress() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Custom WordPress Development Agency | Task19 Technologies</title>
        <meta name="description" content="Expert WordPress development agency specializing in custom theme design, headless WordPress, WooCommerce solutions, and high-performance scalability." />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        badgeText="WordPress Expertise"
        title={<>Enterprise WordPress <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Development.</span></>}
        description="We design and engineer high-performance, secure, and scalable WordPress web applications that empower marketing teams and drive sustainable business growth."
        orbColor1="bg-purple-300/20"
        orbColor2="bg-indigo-300/20"
      >
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-xl transition-all hover:scale-105"
        >
          Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </PageHero>

      {/* What We Do Section */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                At Task19 Technologies, we don't just install templates. We are a full-stack engineering team that leverages the power of WordPress to build custom, enterprise-grade digital platforms. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Whether you need a high-traffic media publishing site, an intricate WooCommerce ecosystem, or a headless WordPress setup using React, we engineer solutions from the ground up that are optimized for search engines, speed, and absolute security.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-50 rounded-[2rem] transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=1170&auto=format&fit=crop" 
                alt="WordPress Backend Dashboard" 
                className="relative z-10 rounded-[2rem] shadow-2xl object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Our WordPress Solutions
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              We eliminate the bloat of traditional page builders. Experience the difference of a meticulously coded, custom WordPress architecture designed for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 text-gray-400 group-hover:scale-110 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100 transition-all duration-300 shadow-sm">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  {/* Replaced h3 with h5 as requested */}
                  <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors leading-snug">{feature.title}</h5>
                  <p className="text-gray-600 font-light leading-relaxed text-[15px]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to scale your content?</h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-2xl mx-auto">
            Partner with us to build a bespoke WordPress solution that drives organic traffic, engages users, and converts leads at scale.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-xl transition-all hover:scale-105"
          >
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
