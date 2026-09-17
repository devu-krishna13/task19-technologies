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
    src: 'https://variantappstore.task19.com/screenshot/products.webp',
    title: 'Product Overview',
    desc: 'View all your Shopify products and their variant status at a glance. Filter by collection or status.',
  },
  {
    src: 'https://variantappstore.task19.com/screenshot/drag_and_drop.webp',
    title: 'Smart Drag & Drop',
    desc: 'Easily assign images to variants by dragging them from your product images pool.',
  },
  {
    src: 'https://variantappstore.task19.com/screenshot/manage.webp',
    title: 'Variant Control',
    desc: 'Add specific descriptions and metadata for each variant to improve SEO and customer clarity.',
  },
  {
    src: 'https://variantappstore.task19.com/screenshot/store_front.webp',
    title: 'Dynamic Storefront',
    desc: 'Show customers exactly what they select. Images update instantly when a variant is picked on your store.',
  }
];

export default function VariantImageApp() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(showcaseItems[0]);

  return (
    <div className="bg-[#f6f6f7] text-[#202223] font-sans antialiased overflow-x-hidden">
      <Helmet>
        <title>Task19 Variant Image Manager - Product Variant Images for Shopify</title>
        <meta name="description" content="Create stunning variant-specific image galleries for your Shopify store. Show customers exactly what they're getting with dynamic product images." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative border-b border-[#e1e3e5] pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 text-center overflow-hidden bg-white">
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 50% -20%, #e3f1ed 0%, #ffffff 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#e3f1ed] text-[#008060] border border-[#95c9b4] rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            ✦ Built for Shopify Stores
          </div>
          <h1 className="text-[36px] md:text-[44px] font-[700] leading-[1.2] tracking-tight text-[#202223] mb-5">
            Show Customers the <span className="text-[#008060]">Right Images</span>
          </h1>
          <p className="text-[17px] text-[#6d7175] mb-10 leading-[1.6]">
            Create variant-specific image galleries that update dynamically. Reduce confusion, boost conversions, and deliver a premium shopping experience.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://apps.shopify.com/variant-2" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm text-[15px]" style={{ color: '#ffffff' }}>
              Add to Shopify — It's Free
            </a>
            <a href="https://variantappstore.task19.com/installation-guide" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] hover:bg-[#f1f2f3] text-[#6d7175] hover:text-[#202223] px-8 py-3.5 rounded-lg font-semibold transition-all text-[15px]">
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
              { val: '50%', label: 'Reduction in Returns' },
              { val: '35%', label: 'Increase in Conversions' },
              { val: '2min', label: 'Setup Time' },
              { val: '100%', label: 'Theme Compatible' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-7 text-center">
                <div className="text-[40px] font-extrabold text-[#008060] mb-1.5 leading-none">{stat.val}</div>
                <div className="text-[13px] text-[#6d7175] font-medium">{stat.label}</div>
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
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Variant galleries in minutes</h3>
          <p className="text-[15px] text-[#6d7175]">Three steps to a better customer experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🔗', title: '1. Connect Your Store', desc: 'Install Task19 Variant Image Manager from the Shopify App Store. We\'ll automatically sync your products and their variants in seconds.' },
            { icon: '🖼️', title: '2. Assign Images', desc: 'Use our intuitive drag-and-drop interface to easily organize and assign your product images to specific variants.' },
            { icon: '🚀', title: '3. Go Live', desc: 'Enable the app block in your theme editor with one click. Your dynamic variant galleries will start appearing on product pages immediately.' }
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
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e8f4fd] text-[#2c6ecb] mb-3">
              Powerful Features
            </span>
            <h3 className="text-[24px] font-[700] text-[#202223] mb-2">Everything you need to create stunning variant galleries</h3>
            <p className="text-[15px] text-[#6d7175]">Powerful capabilities designed to simplify image management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📊', title: 'Advanced Analytics', desc: 'Track which variants are drawing the most attention and optimize your image strategy based on real data.' },
              { icon: '🔄', title: 'Auto-Sync (Webhooks)', desc: 'Shopify webhooks automatically sync changes. Your data stays current without manual work.' },
              { icon: '🏪', title: 'Multi-Store Support', desc: 'Manage unlimited Shopify stores with secure OAuth. Perfect for agencies and multi-brand merchants.' },
              { icon: '🔒', title: 'GDPR & Security', desc: 'Full compliance with automatic data deletion. Your data is encrypted and secure.' },
              { icon: '⚡', title: 'Zero Performance Impact', desc: 'Our gallery script is lazy-loaded and optimized. It adds zero bloat to your storefront load times.' },
              { icon: '🎨', title: 'Theme Independent', desc: 'Works with any Shopify theme using App Blocks. Customizable styles to match your brand perfectly.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(63,63,68,0.15),_0_0_0_1px_rgba(63,63,68,0.05)] border border-[#e1e3e5] p-6 flex flex-col gap-2">
                <div className="text-[24px] leading-none mb-1">{f.icon}</div>
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
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-[#e3f1ed] text-[#008060] mb-3 border border-[#95c9b4]">
            ✨ Experience
          </span>
          <h3 className="text-[20px] font-[700] text-[#202223] mb-2">Premium <span className="text-[#008060]">App Interface</span></h3>
          <p className="text-[15px] text-[#6d7175]">Experience the most intuitive variant management system for Shopify.</p>
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
        <h3 className="text-[28px] font-[700] text-[#202223] mb-3">Ready to Transform Your Product Pages?</h3>
        <p className="text-[#6d7175] text-[16px] mb-8 max-w-xl mx-auto">Join hundreds of merchants using Task19 Variant Image Manager to create better shopping experiences.</p>
        
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://apps.shopify.com/variant-2" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#008060] hover:bg-[#006e52] px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]" style={{ color: '#ffffff' }}>
            Add to Shopify — Free to install
          </a>
          <a href="https://variantappstore.task19.com/installation-guide" className="inline-flex items-center justify-center bg-transparent border border-[#c9cccf] text-[#6d7175] hover:text-[#202223] hover:bg-white px-6 py-3 rounded-[8px] font-semibold transition-colors text-[14px]">
            View Install Guide
          </a>
        </div>
      </section>
    </div>
  );
}
