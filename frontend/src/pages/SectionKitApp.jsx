import React, { useState } from 'react';
import SEO from '../components/SEO';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const showcaseItems = [
  {
    src: '/sectionkit/trust_strip.jpg',
    title: 'Trust Strip',
    desc: 'Reassure shoppers with clear, editable service messages and policies.',
  },
  {
    src: '/sectionkit/delivery.jpg',
    title: 'Delivery Dates',
    desc: 'Build trust with precise delivery estimates and countdowns.',
  },
  {
    src: '/sectionkit/highlights.jpg',
    title: 'Product Highlights',
    desc: 'Make the most useful product benefits easy to scan.',
  },
  {
    src: '/sectionkitdashboard.jpeg',
    title: 'Admin Cockpit',
    desc: 'Manage all 32 blocks from a sleek Shopify Polaris dashboard.',
  },
  {
    src: '/sectionkit/hero-app-mockup.jpg',
    title: 'Theme Editor Native',
    desc: 'Add and customize blocks in Dawn without editing code.',
  }
];

export default function SectionKitApp() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);

  return (
    <div className="bg-[#f6f6f7] text-[#202223] font-sans antialiased overflow-x-hidden">
      <SEO 
        title="SectionKit: Theme Sections & Blocks | Task19 Technologies"
        description="Add customizable product-page blocks, delivery estimates, trust details, and storefront utilities to Online Store 2.0 themes without touching theme code."
        canonical="https://www.task19.com/shopify-apps/section-kit"
      />

      {/* Hero Section */}
      <section className="relative border-b border-[#e1e3e5] pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 text-center overflow-hidden bg-white">
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 50% -20%, #e3f1ed 0%, #ffffff 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#e3f1ed] text-[#008060] border border-[#95c9b4] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            ✦ Built for Shopify
          </div>
          <h1 className="text-[36px] md:text-[44px] font-[700] leading-[1.2] tracking-tight text-[#202223] mb-5">
            Make Every Product Page Feel <span className="text-[#008060]">Thoughtfully Built</span>
          </h1>
          <p className="text-[17px] text-[#6d7175] mb-10 leading-[1.6]">
            Add customizable product-page blocks, delivery estimates, trust details, and storefront utilities to Dawn and Online Store 2.0 themes — zero code required.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://sectionkit.task19.com/installation-guide" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm text-[15px]" style={{ color: '#ffffff' }}>
              Add to Shopify — It's Free
            </a>
            <a href="https://sectionkit.task19.com/installation-guide" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] hover:bg-[#f1f2f3] text-[#6d7175] hover:text-[#202223] px-8 py-3.5 rounded-lg font-semibold transition-all text-[15px]">
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
              { val: '32+', label: 'Widget Choices', sub: 'Trust, timers, badges & more' },
              { val: 'OS 2.0', label: 'Theme App Blocks', sub: 'Native Shopify editor integration' },
              { val: '0', label: 'Code Required', sub: 'Drag and drop in Dawn & any theme' },
              { val: '$0', label: 'Free Plan Available', sub: 'Start customizing immediately' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-7 text-center">
                <div className="text-[36px] font-extrabold text-[#008060] mb-1.5 leading-none">{stat.val}</div>
                <div className="text-[13px] text-[#202223] font-semibold">{stat.label}</div>
                {stat.sub && <div className="text-[11px] text-[#6d7175] mt-1 font-medium">{stat.sub}</div>}
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
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Build better pages in 3 easy steps</h3>
          <p className="text-[15px] text-[#6d7175]">Three steps. No theme code editing needed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🔌', title: '1. Install the App', desc: 'Add SectionKit from the Shopify App Store. We\'ll automatically integrate with your Online Store 2.0 theme in seconds.' },
            { icon: '⚙️', title: '2. Choose What to Show', desc: 'Choose from 32 widget choices. Configure trust strips, delivery estimates, highlights, and promotions in our intuitive dashboard.' },
            { icon: '🚀', title: '3. Publish in Theme Editor', desc: 'Place blocks using Shopify\'s native Theme Editor. Position and customize settings with zero code and preview changes live.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-6">
              <div className="text-[32px] mb-4">{item.icon}</div>
              <h5 className="text-[16px] font-bold mb-2 text-[#202223]">{item.title}</h5>
              <p className="text-[13px] text-[#6d7175] leading-[1.6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-y border-[#e1e3e5]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
              Everything You Need for High-Converting Themes
            </span>
            <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Powerful features designed to solve merchant pain points</h3>
            <p className="text-[15px] text-[#6d7175]">Control every product detail from one simple dashboard.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: '🛡️', title: 'Trust Strip', desc: 'Reassure shoppers with clear, editable service messages and policies directly on the product page.' },
              { icon: '🚚', title: 'Delivery Estimates', desc: 'Show an honest, merchant-controlled delivery timeline and cutoff countdown to set expectations before checkout.' },
              { icon: '✨', title: 'Product Highlights', desc: 'Make the most useful product benefits easy to scan with beautiful iconography and responsive layout.' },
              { icon: '🏷️', title: 'Promotion Banner', desc: 'Give genuine promotions and discount codes a polished place on the page to drive conversions.' },
              { icon: '📦', title: 'Stock Note', desc: 'Display variant availability without invented urgency to build trust and drive natural sales.' },
              { icon: '💳', title: 'Payment Methods', desc: 'Show payment logos enabled for your store and market, letting shoppers know how they can pay.' },
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
        </div>
      </section>

      {/* Screenshot Carousel */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
            Experience the Premium Feel
          </span>
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">App Interface & Flow</h3>
          <p className="text-[15px] text-[#6d7175]">Our widgets are designed to blend perfectly with your theme while providing cutting-edge functionality.</p>
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
              <SwiperSlide key={index} className="!h-auto flex">
                <div 
                  className="flex flex-col w-full h-full bg-[#f9fafb] border border-[#e1e3e5] rounded-[12px] overflow-hidden group cursor-zoom-in hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all"
                  onClick={() => {
                    setActiveItem(item);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="w-full aspect-[4/3] bg-[#f1f2f3] border-b border-[#e1e3e5] relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="bg-black/80 text-white px-3.5 py-1.5 rounded-full text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                        🔍 Enlarge
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow bg-white min-h-[110px]">
                    <h5 className="text-[16px] font-bold text-[#202223] mb-2 leading-snug">{item.title}</h5>
                    <p className="text-[13px] text-[#6d7175] leading-relaxed flex-grow">{item.desc}</p>
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
        <h3 className="text-[28px] font-[700] text-[#202223] mb-3">Ready to Transform Your Product Pages?</h3>
        <p className="text-[#6d7175] text-[16px] mb-8 max-w-xl mx-auto">Join Shopify merchants using SectionKit to build trust and drive more conversions.</p>
        
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://sectionkit.task19.com/installation-guide" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]" style={{ color: '#ffffff' }}>
            Add to Shopify — Free to install
          </a>
          <a href="https://sectionkit.task19.com/installation-guide" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] text-[#6d7175] hover:text-[#202223] hover:bg-white px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]">
            View Install Guide
          </a>
        </div>
      </section>
    </div>
  );
}
