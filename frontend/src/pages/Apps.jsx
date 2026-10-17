import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, BarChart3, Layers, Zap, CheckCircle, LayoutGrid } from 'lucide-react';
import CTASection from '../components/ui/CTASection';
import PageHero from '../components/ui/PageHero';

const apps = [
  {
    id: 'profit-saver',
    name: 'Profit Saver: 7-Tier Loyalty',
    tagline: 'Customer Loyalty & Rewards',
    icon: BarChart3,
    color: '#013ad6',
    rating: '4.9',
    reviews: '120+',
    desc: 'Drive repeat purchases and increase customer lifetime value with a powerful 7-tier loyalty points system. Reward customers automatically based on spend, and give them real reasons to come back.',
    features: [
      '7 fully customizable loyalty tiers',
      'Points for purchases, reviews, and referrals',
      'Automatic point application at checkout',
      'Merchant dashboard with analytics',
      'Email notifications for milestones',
      'Seamless Shopify theme integration',
    ],
    shopifyUrl: '/shopify-apps/profit-saver',
    isInternal: true,
    badge: 'Top Rated',
    image: '/profitsaverdashboard.jpeg',
  },
  {
    id: 'page-booster',
    name: 'Page Booster – Product Blocks',
    tagline: 'Upsells & Product Features',
    icon: Layers,
    color: '#7c3aed',
    rating: '4.8',
    reviews: '80+',
    desc: 'Add high-converting product bundles, custom discount codes, and AI-generated product feature highlights directly to your product pages — without touching code.',
    features: [
      'Product bundle builder for upsells',
      'AI-generated feature descriptions',
      'Custom discount code blocks',
      'Drag-and-drop product page editor',
      'Mobile-responsive block layouts',
      'Analytics on block performance',
    ],
    shopifyUrl: '/shopify-apps/page-booster',
    isInternal: true,
    badge: 'Best Seller',
    image: '/pageboosternew.jpeg',
  },
  {
    id: 'marginmate',
    name: 'MarginMate Custom Pricing',
    tagline: 'Custom Pricing Engine',
    icon: Zap,
    color: '#06b6d4',
    rating: '4.7',
    reviews: '45+',
    desc: 'Set custom pricing rules, volume discounts, and B2B/wholesale pricing tiers for different customer groups — without complex manual overrides or custom code.',
    features: [
      'B2B and wholesale price rules',
      'Volume discount tier management',
      'Customer tag-based pricing',
      'Manual price override capabilities',
      'Price lock for specific collections',
      'Admin dashboard and reporting',
    ],
    shopifyUrl: '/shopify-apps/marginmate',
    isInternal: true,
    badge: 'B2B Essential',
    image: '/marginmatecutompricing.jpeg',
  },
  {
    id: 'variant-image',
    name: 'Task19 Variant Image Manager',
    tagline: 'Product Variant Images',
    icon: ShoppingBag,
    color: '#10b981',
    rating: '4.9',
    reviews: '95+',
    desc: 'Display unique, specific images for different product variants — showing the exact product the customer is choosing. Reduce confusion, increase confidence, and boost add-to-cart rates.',
    features: [
      'Per-variant image assignment',
      'Bulk image upload and management',
      'Automatic variant detection',
      'Supports all Shopify themes',
      'No code or theme editing required',
      'Mobile-optimized gallery display',
    ],
    shopifyUrl: '/shopify-apps/variant-image',
    isInternal: true,
    badge: 'Conversion Booster',
    image: '/variantimagemanager.jpeg',
  },
  {
    id: 'section-kit',
    name: 'SectionKit – Theme Sections & Blocks',
    tagline: 'Storefront & OS 2.0 Blocks',
    icon: LayoutGrid,
    color: '#059669',
    rating: '4.9',
    reviews: '30+',
    desc: 'Add polished product-page blocks, delivery estimates, trust details, and storefront utilities to Online Store 2.0 themes — choose a block and customize it in the theme editor.',
    features: [
      '32+ customizable widget choices',
      'Trust strips, policy badges & guarantees',
      'Merchant-controlled delivery timelines',
      'Promotion banners & stock status notes',
      'Free plan available ($0/month)',
      '100% native Shopify Theme Editor blocks',
    ],
    shopifyUrl: '/shopify-apps/section-kit',
    isInternal: true,
    badge: 'Theme Essential',
    image: '/sectionkitdashboard.jpeg',
  },
];

export default function ShopifyApps() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Shopify Apps by Task19 Technologies — App Store"
        description="Explore Shopify apps built by Task19 Technologies: Profit Saver Loyalty, Page Booster, MarginMate Custom Pricing, Variant Image Manager, and SectionKit."
        canonical="https://www.task19.com/shopify-apps"
      />

      {/* ── Page Hero ── */}
      <PageHero
        badgeText="Our Apps"
        title={<>Shopify <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Apps.</span></>}
        description="Powerful, conversion-focused Shopify apps designed to scale your store, improve user experience, and drive higher revenue."
        orbColor1="bg-emerald-300/20"
        orbColor2="bg-teal-300/20"
      />

      {/* ── Apps Grid Section ── */}
      <div className="bg-surface py-16 lg:py-28">
        <div className="container max-w-[1300px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => app.isInternal ? navigate(app.shopifyUrl) : window.open(app.shopifyUrl, '_blank')}
                className="group relative bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  <img 
                    src={app.image} 
                    alt={app.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  {/* Badges overlaid on image */}
                  <div className="absolute top-5 left-5 z-20 flex gap-2">
                    <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-sm text-[11px] font-bold rounded-full shadow-sm" style={{color: app.color}}>
                      {app.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 md:p-8 flex flex-col flex-grow relative z-20 bg-white">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-[13px] font-bold text-gray-900">{app.rating}</span>
                    <span className="text-[13px] text-gray-500 font-medium">({app.reviews})</span>
                  </div>

                  <p className="font-display text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{color: app.color}}>
                    {app.tagline}
                  </p>
                  
                  <h3 className="font-display font-bold text-gray-900 text-[22px] leading-[1.3] mb-3">
                    {app.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-[1.65] mb-6 text-[14px] font-light">
                    {app.desc}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 gap-y-2.5 mb-8 flex-grow">
                    {app.features.map((f, j) => (
                      <div key={j} className="flex gap-2.5 items-start">
                        <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${app.color}15` }}>
                          <CheckCircle className="w-3 h-3" style={{ color: app.color }} />
                        </div>
                        <span className="text-[13px] text-gray-700 font-medium leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-5 border-t border-gray-100 mt-auto">
                    <div 
                      className="inline-flex items-center font-bold text-[13px] transition-colors hover:opacity-80 uppercase tracking-wide" 
                      style={{color: app.color}}
                    >
                      {app.isInternal ? 'View Details' : 'Install App'} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Closing CTA ── */}
      <CTASection
        title="Ready to Scale Your Shopify Store?"
        subtitle="Install one of our apps or get in touch with our engineering team for custom e-commerce solutions."
        primaryText="Get in Touch"
        primaryTo="/contact"
      />
    </>
  );
}
