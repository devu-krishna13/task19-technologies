import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, TrendingUp, Layers, Settings, Globe, BarChart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PageHero from '../../components/ui/PageHero';
const features = [
  {
    title: 'Custom Shopify Theme Development',
    desc: 'Stand out from the competition with bespoke, high-converting Shopify themes built from scratch using custom Liquid code and Section architecture tailored to your D2C brand.',
    icon: ShoppingCart
  },
  {
    title: 'Headless Shopify Commerce',
    desc: 'Unlock lightning-fast storefronts by decoupling your frontend. We leverage the Storefront API with React and Next.js to deliver unparalleled speed and custom UX.',
    icon: Globe
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    desc: 'Data-driven UI/UX enhancements, frictionless checkout flows, and strategic A/B testing designed to maximize your AOV (Average Order Value) and overall ROI.',
    icon: TrendingUp
  },
  {
    title: 'Complex App Integrations & ERPs',
    desc: 'We seamlessly integrate third-party APIs, custom private apps, ERP systems, and CRMs to automate your back-office operations and inventory management.',
    icon: Layers
  },
  {
    title: 'Seamless Store Migrations',
    desc: 'Flawlessly migrate your data from legacy platforms (WooCommerce, Magento, Custom) to Shopify Plus with zero downtime and strict SEO preservation protocols.',
    icon: Settings
  },
  {
    title: 'Advanced Analytics & Tracking',
    desc: 'Implement precise server-side tracking, Meta pixel integrations, and GA4 setups to ensure every ad dollar and user interaction is accurately measured.',
    icon: BarChart
  }
];

export default function ShopifyServices() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Shopify Plus & E-Commerce Development | Task19 Technologies</title>
        <meta name="description" content="Expert Shopify development agency specializing in custom D2C themes, Headless commerce, CRO, and seamless store migrations." />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        badgeText="E-Commerce Leaders"
        title={<>Shopify Store <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Development.</span></>}
        description="We architect and build high-performing Shopify stores for direct-to-consumer brands, structuring every decision around conversion optimization and global growth."
        orbColor1="bg-emerald-300/20"
        orbColor2="bg-teal-300/20"
      >
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-xl transition-all hover:scale-105"
        >
          Scale Your Brand <ArrowRight className="ml-2 w-4 h-4" />
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
                At Task19 Technologies, we don't just build Shopify stores; we engineer highly scalable e-commerce ecosystems that drive serious revenue. We cater to ambitious D2C brands that have outgrown standard templates.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Our approach integrates stunning, bespoke UI/UX design with robust custom Liquid development, Headless Commerce setups, and deep API integrations. We ensure your storefront is an intuitive, conversion-optimized machine capable of handling global traffic spikes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-[2rem] transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1074&auto=format&fit=crop" 
                alt="Shopify E-Commerce Development" 
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
              Our Shopify Solutions
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              Stop settling for generic themes. We build custom Shopify architectures that capture attention, load instantly, and turn browsers into lifelong brand advocates.
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
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 text-gray-400 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300 shadow-sm">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  {/* Replaced h3 with h5 as requested */}
                  <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-snug">{feature.title}</h5>
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
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to dominate your market?</h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-2xl mx-auto">
            From seamless migrations to headless commerce and custom integrations, we have the specialized expertise to elevate your Shopify brand.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-xl transition-all hover:scale-105"
          >
            Launch Your Store <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
