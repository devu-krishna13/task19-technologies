import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const showcaseItems = [
  {
    src: 'https://custompricing.task19.com/screenshots/custom_pricing.webp',
    title: 'Advanced Pricing Rules',
    desc: 'Set up complex pricing logic based on customer history and purchase volume.',
  },
  {
    src: 'https://custompricing.task19.com/screenshots/loyalty.webp',
    title: 'Loyalty Program Management',
    desc: 'Configure points earning rules and redemption options in seconds.',
  },
  {
    src: 'https://custompricing.task19.com/screenshots/loyalty_hisory.webp',
    title: 'Detailed Customer Insights',
    desc: 'Track every point earned and spent with high-precision audit logs.',
  },
  {
    src: 'https://custompricing.task19.com/screenshots/pricing_tier_detail.webp',
    title: 'Tiered Discount Configuration',
    desc: 'Target specific customer segments with granular discount tiers.',
  },
  {
    src: 'https://custompricing.task19.com/screenshots/pricing_tiers.webp',
    title: 'Tier-Based Segmenting',
    desc: 'Manage all your customer segments from one intuitive overview.',
  },
  {
    src: 'https://custompricing.task19.com/screenshots/settings.webp',
    title: 'Intuitive Global Settings',
    desc: 'Full control over app behavior, widget styling, and automated emails.',
  }
];

export default function MarginMateApp() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);

  return (
    <div className="bg-[#f6f6f7] text-[#202223] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>MarginMate Custom Pricing – Shopify App</title>
        <meta name="description" content="High-performance custom pricing and automated loyalty rewards for Shopify merchants." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative border-b border-[#e1e3e5] pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 text-center overflow-hidden bg-white">
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 50% -20%, #e3f1ed 0%, #ffffff 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#e3f1ed] text-[#008060] border border-[#95c9b4] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            ✦ BUILD FOR YOUR CUSTOMERS
          </div>
          <h1 className="text-[36px] md:text-[44px] font-[700] leading-[1.2] tracking-tight text-[#202223] mb-5">
            Custom Pricing & <span className="text-[#008060]">Loyalty Rewards</span> Made Simple
          </h1>
          <p className="text-[17px] text-[#6d7175] mb-10 leading-[1.6]">
            Reward your loyal customers with personalized pricing and an engaging loyalty program. Increase retention and drive repeat purchases with our all-in-one solution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://apps.shopify.com/custom-pricing-and-loyalty" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm text-[15px]" style={{ color: '#ffffff' }}>
              Add to Shopify — It's Free
            </a>
            <a href="https://custompricing.task19.com/installation" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] hover:bg-[#f1f2f3] text-[#6d7175] hover:text-[#202223] px-8 py-3.5 rounded-lg font-semibold transition-all text-[15px]">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-[#e1e3e5]">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '500+', label: 'Active Stores' },
              { val: '98%', label: 'Satisfaction Rate' },
              { val: '2M+', label: 'Points Redeemed' },
              { val: '24/7', label: 'Support Available' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-7 text-center">
                <div className="text-[40px] font-extrabold text-[#008060] mb-1.5 leading-none">{stat.val}</div>
                <div className="text-[13px] text-[#6d7175] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-y border-[#e1e3e5]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
              Everything For Your Business
            </span>
            <h3 className="text-[24px] font-[700] text-[#202223] mb-2">Powerful Features</h3>
            <p className="text-[15px] text-[#6d7175]">Everything you need to create personalized pricing and reward loyal customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '👥', title: 'Tier-Based Pricing', desc: 'Create VIP, Gold, or Wholesale customer tiers with exclusive pricing and automated assignments.' },
              { icon: '🔄', title: 'Auto Price Replacement', desc: 'Instantly replaces retail prices for logged-in eligible customers across your entire storefront.' },
              { icon: '⭐', title: 'Loyalty Points System', desc: 'Automatically reward customers with points on every purchase. Fully configurable redemption rates.' },
              { icon: '✍️', title: 'Manual Adjustments', desc: 'Easily add or deduct loyalty points directly from the admin panel for complete control.' },
              { icon: '👤', title: 'Customer Specifics', desc: 'Set exclusive prices for individual customers based on their history or specific requirements.' },
              { icon: '⚙️', title: 'Easy Management', desc: 'Control your entire pricing strategy and loyalty program from one intuitive, unified dashboard.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-6">
                <div className="text-[32px] mb-4 leading-none">{f.icon}</div>
                <h5 className="text-[16px] font-bold text-[#202223] mb-2">{f.title}</h5>
                <p className="text-[13px] text-[#6d7175] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Carousel */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e3f1ed] text-[#008060] mb-3 border border-[#95c9b4]">
            ✨ Visual Tour
          </span>
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Experience the <span className="text-[#008060]">Power</span> of Precision</h3>
          <p className="text-[15px] text-[#6d7175]">Take a look at how MarginMate Custom Pricing transforms your store's backend into a sales-driving engine.</p>
        </div>

        <div className="bg-white p-4 md:p-8 md:px-12 rounded-[16px] border border-[#e1e3e5] shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative group/swiper">
          <button className="custom-prev absolute left-2 md:-left-4 top-[40%] md:top-[40%] -translate-y-1/2 z-10 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] rounded-full p-2.5 border border-[#e1e3e5] text-[#6d7175] hover:bg-[#f6f6f7] hover:text-[#008060] hover:scale-105 transition-all focus:outline-none opacity-0 group-hover/swiper:opacity-100 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:hover:scale-100">
            <ChevronLeft size={24} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next'
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full h-full pb-12 px-2"
          >
            {showcaseItems.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div 
                  className="flex flex-col h-full bg-[#f9fafb] border border-[#e1e3e5] rounded-[12px] overflow-hidden group cursor-zoom-in hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all"
                  onClick={() => {
                    setActiveItem(item);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="p-4 border-b border-[#e1e3e5] bg-[#f1f2f3] flex items-center justify-center aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="max-w-full max-h-full rounded shadow-[0_1px_3px_rgba(0,0,0,0.1)] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="bg-black/80 text-white px-3.5 py-1.5 rounded-full text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                        🔍 Enlarge
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-grow bg-white">
                    <h5 className="text-[16px] font-bold text-[#202223] mb-2">{item.title}</h5>
                    <p className="text-[13px] text-[#6d7175] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next absolute right-2 md:-right-4 top-[40%] md:top-[40%] -translate-y-1/2 z-10 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] rounded-full p-2.5 border border-[#e1e3e5] text-[#6d7175] hover:bg-[#f6f6f7] hover:text-[#008060] hover:scale-105 transition-all focus:outline-none opacity-0 group-hover/swiper:opacity-100 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:hover:scale-100">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 lg:p-10 cursor-zoom-out animate-in fade-in duration-200"
            onClick={() => setLightboxOpen(false)}
          >
            <img 
              src={activeItem?.src} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full rounded-[8px] shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain animate-in zoom-in-95 duration-300"
            />
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f0f9f6] py-16 px-6 text-center border-t border-[#e1e3e5]">
        <h3 className="text-[28px] font-[700] text-[#202223] mb-3">Start Personalizing Your Pricing Today</h3>
        <p className="text-[#6d7175] text-[16px] mb-8 max-w-xl mx-auto">Join 500+ Shopify merchants using MarginMate Custom Pricing to build loyalty and increase B2B sales.</p>
        
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://apps.shopify.com/custom-pricing-and-loyalty" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]" style={{ color: '#ffffff' }}>
            Add to Shopify — Free to install
          </a>
          <a href="https://custompricing.task19.com/installation" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] text-[#6d7175] hover:text-[#202223] hover:bg-white px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]">
            View Install Guide
          </a>
        </div>
      </section>
    </div>
  );
}
