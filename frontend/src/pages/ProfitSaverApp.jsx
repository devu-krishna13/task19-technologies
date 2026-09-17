import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Settings, Users, Database, LayoutDashboard, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const showcaseItems = [
  {
    src: '/tier loyalty/campaign_detail.webp',
    title: 'Comprehensive Dashboard',
    desc: 'Detailed health and performance overview of your loyalty operations. Monitor budgets, active campaigns, and usage percentages in one high-detail panel.',
  },
  {
    src: '/tier loyalty/tier_settings.webp',
    title: 'Customizable Tiers',
    desc: 'Easily edit labels, percentages, and rarity for all 7 mystery tiers. Tailor the excitement level to match your brand and business goals.',
  },
  {
    src: '/tier loyalty/new_create.webp',
    title: 'Fast Campaign Setup',
    desc: 'Launch new reward campaigns instantly with minimal configuration. Simply set your name and budget, and let the automation handle the rest.',
  },
  {
    src: '/tier loyalty/recent_issued.webp',
    title: 'Live Activity Stream',
    desc: 'Real-time monitoring of every voucher won and redeemed in your store. Stay on top of customer interactions as they happen.',
  },
  {
    src: '/tier loyalty/campaign history_manual add.webp',
    title: 'Manual Control',
    desc: 'Full administrative control to manually issue vouchers to loyal customers and track the detailed history of every past campaign.',
  }
];

export default function ProfitSaverApp() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);

  return (
    <div className="bg-[#f6f6f7] text-[#202223] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>Profit Saver – 7-Tier Voucher Rewards for Shopify</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative border-b border-[#e1e3e5] pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 text-center overflow-hidden bg-white">
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 50% -20%, #e3f1ed 0%, #ffffff 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#e3f1ed] text-[#008060] border border-[#95c9b4] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            ✦ Built for Shopify Merchants
          </div>
          <h1 className="text-[36px] md:text-[44px] font-[700] leading-[1.2] tracking-tight text-[#202223] mb-5">
            Turn Every Order Into a <span className="text-[#008060]">Loyalty Reward</span>
          </h1>
          <p className="text-[17px] text-[#6d7175] mb-10 leading-[1.6]">
            Profit Saver automatically issues tiered discount vouchers when customers place
            orders — no points, no complexity. You set the budget, we handle the rest.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://apps.shopify.com/7-tier-loyalty" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm text-[15px]" style={{ color: '#ffffff' }}>
              Add to Shopify — Free to install
            </a>
            <a href="https://tierloyaltycommon.task19.com/installation-guide" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] hover:bg-[#f1f2f3] text-[#6d7175] hover:text-[#202223] px-8 py-3.5 rounded-lg font-semibold transition-all text-[15px]">
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
              { val: '7', label: 'Discount Tiers (Edit as you like)', sub: 'Currently: 1%–20%' },
              { val: 'Auto', label: 'Weighted Probabilities', sub: null },
              { val: '100%', label: 'Budget Controlled', sub: null },
              { val: 'Live', label: 'Merchant Confirmed', sub: null },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-7 text-center">
                <div className="text-[40px] font-extrabold text-[#008060] mb-1.5 leading-none">{stat.val}</div>
                <div className="text-[13px] text-[#6d7175] font-medium">{stat.label}</div>
                {stat.sub && <div className="text-[11px] text-[#8c9196] mt-1">{stat.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e3f1ed] text-[#008060] mb-3">
            How It Works
          </span>
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Rewards on autopilot</h3>
          <p className="text-[15px] text-[#6d7175]">Three steps. No manual work after setup.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🛒', title: '1. Customer Places Order', desc: 'When an order is created in your store, Shopify notifies Profit Saver via webhook — instantly and automatically.' },
            { icon: '🎲', title: '2. Tier Is Randomly Selected', desc: 'A weighted random algorithm picks a tier (1%–20% discount). Lower tiers are more frequent, higher tiers are rare — like a lucky voucher draw.' },
            { icon: '💳', title: '3. Voucher Lands in Wallet', desc: 'The customer sees their voucher in the cart widget. They can stack rewards based on their activity. One click generates a real Shopify discount code.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-6">
              <div className="text-[32px] mb-4">{item.icon}</div>
              <h5 className="text-[16px] font-bold mb-2 text-[#202223]">{item.title}</h5>
              <p className="text-[13px] text-[#6d7175] leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tiers Table Section */}
      <section className="bg-white border-y border-[#e1e3e5]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
              The 7 Tiers
            </span>
            <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Transparently weighted probabilities</h3>
            <p className="text-[15px] text-[#6d7175] max-w-[600px]">Designed to balance customer excitement with predictable business liability.</p>
          </div>
          
          <div className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] overflow-x-auto">
            <table className="w-full text-left text-[14px] whitespace-nowrap">
              <thead>
                <tr className="border-b-2 border-[#e1e3e5]">
                  <th className="px-4 py-3 text-[12px] uppercase tracking-[0.5px] text-[#8c9196] font-semibold">Tier</th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-[0.5px] text-[#8c9196] font-semibold">Label</th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-[0.5px] text-[#8c9196] font-semibold">Discount</th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-[0.5px] text-[#8c9196] font-semibold">Probability</th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-[0.5px] text-[#8c9196] font-semibold">Rarity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1e3e5]">
                {[
                  { tier: '#1', label: 'Tier 1', discount: '1%', prob: '35%', rarity: 'Common', badge: 'bg-[#e8f4fd] text-[#2c6ecb]' },
                  { tier: '#2', label: 'Tier 2', discount: '2%', prob: '25%', rarity: 'Common', badge: 'bg-[#e8f4fd] text-[#2c6ecb]' },
                  { tier: '#3', label: 'Tier 3', discount: '3%', prob: '15%', rarity: 'Uncommon', badge: 'bg-[#e3f1ed] text-[#008060]' },
                  { tier: '#4', label: 'Tier 4', discount: '5%', prob: '12%', rarity: 'Uncommon', badge: 'bg-[#e3f1ed] text-[#008060]' },
                  { tier: '#5', label: 'Tier 5', discount: '10%', prob: '8%', rarity: 'Rare', badge: 'bg-[#fff3cd] text-[#916a00]' },
                  { tier: '#6', label: 'Tier 6', discount: '15%', prob: '3%', rarity: 'Very Rare', badge: 'bg-[#fff3cd] text-[#916a00]' },
                  { tier: '#7', label: 'Tier 7', discount: '20%', prob: '2%', rarity: 'Legendary', badge: 'bg-[#fff3cd] text-[#916a00]' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-semibold text-[#2c6ecb]">{row.tier}</td>
                    <td className="px-4 py-3 font-semibold text-[#202223]">{row.label}</td>
                    <td className="px-4 py-3 font-bold text-[#008060]">{row.discount}</td>
                    <td className="px-4 py-3 text-[#6d7175]">{row.prob}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[12px] font-semibold ${row.badge}`}>{row.rarity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e3f1ed] text-[#008060] mb-3">
            Features
          </span>
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Everything built in</h3>
          <p className="text-[15px] text-[#6d7175]">Install once. Rewards flow automatically from that day forward.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { icon: '💰', title: 'Budget Cap Control', desc: 'Set a campaign budget cap. When reached, the system stops issuing vouchers automatically — zero overspend risk.' },
            { icon: '📊', title: 'Campaign Dashboard', desc: 'Track budget used, coins issued, and campaign history in a clean admin panel embedded in Shopify.' },
            { icon: '🎯', title: 'Manual Credit', desc: 'Manually credit a customer with any tier voucher — by customer ID or email address.' },
            { icon: '🔄', title: 'Auto Reconciliation', desc: 'Coins issued by email are automatically matched to the Shopify customer ID when they log in.' },
            { icon: '🔒', title: 'Fraud Prevention', desc: 'Vouchers are reserved when a code is applied — preventing double-use across sessions.' },
            { icon: '📋', title: 'Order History', desc: 'Full redeemed / expired / revoked voucher history per customer — visible in the cart widget.' },
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-6 flex gap-4 items-start">
              <div className="text-[24px] flex-shrink-0 leading-none">{f.icon}</div>
              <div>
                <h5 className="text-[15px] font-bold text-[#202223] mb-1">{f.title}</h5>
                <p className="text-[13px] text-[#6d7175] leading-[1.6]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="bg-white border-y border-[#e1e3e5]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
              Voucher Lifecycle
            </span>
            <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Full tracking from win to redemption</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', badge: 'Active', badgeCls: 'bg-[#e3f1ed] text-[#008060]', title: 'Won & Ready', desc: 'The customer earned the voucher on a paid order. It sits in their wallet, available on their next purchase.' },
              { icon: '🔒', badge: 'Reserved', badgeCls: 'bg-[#fff3cd] text-[#916a00]', title: 'Applied at Cart', desc: 'Customer applies the voucher. A unique Shopify discount code is generated and locked to their session.' },
              { icon: '✅', badge: 'Redeemed', badgeCls: 'bg-[#e8f4fd] text-[#2c6ecb]', title: 'Order Completed', desc: 'Customer checks out with their discount code. Voucher is permanently marked as used.' },
            ].map((lc, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-8 text-center">
                <div className="text-[32px] mb-3">{lc.icon}</div>
                <div className="mb-3">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[12px] font-semibold ${lc.badgeCls}`}>{lc.badge}</span>
                </div>
                <h5 className="text-[15px] font-bold text-[#202223] mb-2">{lc.title}</h5>
                <p className="text-[13px] text-[#6d7175] leading-[1.6]">{lc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Carousel */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
            Experience
          </span>
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">App Interface & Flow</h3>
          <p className="text-[15px] text-[#6d7175]">Explore how Profit Saver looks and feels for merchants.</p>
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
        <h3 className="text-[28px] font-[700] text-[#202223] mb-3">Start rewarding your customers today</h3>
        <p className="text-[#6d7175] text-[16px] mb-8 max-w-xl mx-auto">Free to install. No credit card needed. Live in 5 minutes.</p>
        
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://apps.shopify.com/7-tier-loyalty" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]" style={{ color: '#ffffff' }}>
            Add to Shopify — Free to install
          </a>
          <a href="https://tierloyaltycommon.task19.com/installation-guide" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] text-[#6d7175] hover:text-[#202223] hover:bg-white px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]">
            View Install Guide
          </a>
        </div>
      </section>
    </div>
  );
}
