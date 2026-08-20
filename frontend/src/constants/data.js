export const portfolioItems = [
  {
    id: 1, slug: 'sereine',

    results: [
      { metric: '45%', label: 'Increase in Mobile Conversions' },
      { metric: '1.2s', label: 'Average Page Load Time' },
      { metric: '30%', label: 'Reduction in Bounce Rate' }
    ],
    testimonial: {
      quote: "Task19 Technologies completely transformed our online flagship. The new headless architecture perfectly captures our brand's luxury aesthetic while delivering lightning-fast performance. Our mobile sales have skyrocketed.",
      author: "Creative Director",
      company: "Sereine"
    },
    faqs: [
      { question: "How does a headless Shopify architecture benefit fine jewelry brands?", answer: "Headless commerce allows luxury brands to decouple the frontend presentation from Shopify's backend. This means we can create highly bespoke, animated, and immersive digital experiences that reflect the delicacy of fine jewelry, without being constrained by traditional theme limitations, all while achieving sub-second load times." },
      { question: "How do you handle high-resolution imagery for luxury e-commerce?", answer: "We implement advanced image compression pipelines, lazy loading, and modern WebP/AVIF formats. This ensures that customers see every intricate detail of the jewelry instantly, reducing bounce rates and increasing high-intent engagement." }
    ],
    title: 'Sereine',
    category: 'E-commerce',
    client: 'Sereine',
    industry: 'Fine Jewelry',
    shortDesc: 'An elegant online boutique offering premium, sustainable fine jewelry and accessories.',
    image: '/portfolio-screenshots/sereine-home.jpg',
    externalLink: 'https://sereine.in/',
    technologies: ['Shopify', 'React', 'Tailwind CSS'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Sereine is a modern fine jewelry brand committed to sustainable sourcing and minimalist aesthetics. Targeting a highly conscious consumer base that values both craftsmanship and ethical production, they needed a digital flagship that reflected the luxury and delicacy of their 14K solid gold pieces. Their vision was to create a serene, uncluttered shopping environment that mirrored the elegance of stepping into a high-end physical boutique.',
    challenge: 'Despite having a stunning product line, their legacy e-commerce platform was holding them back. The brand struggled to convey the premium quality and intricate details of their jewelry online. High bounce rates were directly attributed to slow-loading high-resolution imagery and a clunky mobile checkout experience. Furthermore, the lack of an intuitive filtering system made it difficult for high-intent buyers to navigate their extensive catalog, resulting in lost sales and diminished brand trust.',
    solution: 'We architected a highly performant, headless-inspired Shopify storefront with a relentless focus on mobile optimization. We integrated advanced image compression pipelines and lazy loading, ensuring that high-fidelity product imagery loaded instantly without sacrificing quality. A streamlined, one-click checkout process was implemented to reduce friction, alongside a custom "Virtual Try-On" integration to boost buyer confidence. The result was a 45% increase in mobile conversions and a drastically improved PageSpeed score.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/sereine-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/sereine-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/sereine-product.jpg' }
    ]
  },
  {
    id: 2, slug: 'rea-med',

    results: [
      { metric: '2x', label: 'B2C Conversion Rate' },
      { metric: '10k+', label: 'Monthly Active B2B Portal Users' },
      { metric: '60%', label: 'Faster Wholesale Reordering' }
    ],
    testimonial: {
      quote: "Managing distinct B2B and B2C segments on a single platform seemed impossible until Task19 stepped in. They engineered a dual-faceted solution that streamlined our hospital procurement workflows while doubling our public retail sales.",
      author: "Operations Manager",
      company: "Rea Med"
    },
    faqs: [
      { question: "Can Shopify Plus handle both B2B and B2C seamlessly?", answer: "Yes. By leveraging Shopify Plus's advanced B2B on Shopify features, custom liquid logic, and specialized apps, we can create gated wholesale portals with custom pricing tiers alongside a frictionless public retail storefront on the exact same backend." },
      { question: "How do you streamline healthcare procurement workflows?", answer: "We integrate custom PO (Purchase Order) systems, quick-order forms, and contracted pricing logic directly into the user account dashboard, allowing medical institutions to reorder essential supplies in seconds." }
    ],
    title: 'Rea Med',
    category: 'E-commerce',
    client: 'Rea Med',
    industry: 'Healthcare & Medical Supplies',
    shortDesc: 'A robust B2B and B2C digital platform for premium medical supplies and equipment.',
    image: '/portfolio-screenshots/rea-med-home.jpg',
    externalLink: 'https://drpharmcoz.com/',
    technologies: ['Shopify Plus', 'Node.js', 'PostgreSQL'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Rea Med serves as a critical bridge in the healthcare supply chain, providing high-quality medical equipment, pharmaceuticals, and consumables to both individual practitioners and large-scale hospital networks. Their mission is to digitize and simplify medical procurement, transforming a traditionally analog and paper-heavy industry into a seamless digital experience.',
    challenge: 'Serving two highly distinct customer segments (B2B and B2C) on a single unified platform proved technically difficult. B2B clients required custom pricing tiers based on contract negotiations, bulk ordering capabilities, tax-exempt purchasing, and complex purchase order (PO) workflows. Meanwhile, B2C consumers needed a straightforward, frictionless shopping experience without being bogged down by corporate procurement steps.',
    solution: 'We developed a dual-faceted Shopify Plus architecture tailored specifically for medical distribution. Utilizing customized Liquid logic and specialized B2B wholesale applications, we created a secure, gated portal where medical institutions could access their contracted pricing and streamlined reordering workflows. Simultaneously, the public-facing site was optimized with a clean, accessible interface for individual buyers. This architectural split effectively doubled their B2C conversion rate while automating 80% of their B2B manual order processing.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/rea-med-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/rea-med-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/rea-med-product.jpg' }
    ]
  },
  {
    id: 3, slug: 'riza-uae',

    results: [
      { metric: '150%', label: 'Growth in Organic Traffic' },
      { metric: '3.5x', label: 'ROI on Marketing Spend' },
      { metric: '40%', label: 'Increase in Average Order Value' }
    ],
    testimonial: {
      quote: "The Task19 team understands the UAE retail market deeply. They didn't just build us a store; they engineered a growth machine that dominates local search and provides a flawless checkout experience for our customers.",
      author: "E-Commerce Director",
      company: "Riza UAE"
    },
    faqs: [
      { question: "How do you optimize Shopify stores for the UAE market?", answer: "We focus on localized performance, ensuring fast delivery of assets across the MENA region using Edge CDNs. We also integrate localized payment gateways, seamless multi-currency support, and mobile-first RTL (Right-to-Left) Arabic layouts if required." },
      { question: "What is the best way to increase Average Order Value (AOV) in retail?", answer: "We implement strategic in-cart upsells, dynamic 'frequently bought together' bundles, and tiered free-shipping thresholds that psychologically encourage customers to add more items before checkout." }
    ],
    title: 'Riza UAE',
    category: 'E-commerce',
    client: 'Riza UAE',
    industry: 'Retail & Lifestyle',
    shortDesc: 'A premium e-commerce store serving the UAE market with curated product collections.',
    image: '/portfolio-screenshots/riza-uae-home.jpg',
    externalLink: 'https://www.rizauae.com/',
    technologies: ['Shopify', 'Vue.js', 'Tailwind CSS'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Riza UAE is a rapidly growing retail brand dedicated to bringing curated lifestyle and fashion products to the dynamic UAE market. They focus on delivering a high-end shopping experience tailored to modern consumers who expect speed, reliability, and localized cultural relevance in their digital interactions.',
    challenge: 'As a brand operating in a highly competitive market, Riza UAE needed an e-commerce platform that could handle high-volume flash sales without crashing. Their previous setup suffered from poor localization, lacking robust multi-currency support and seamless Arabic language integration, which alienated a significant portion of their target demographic.',
    solution: 'Task19 Technologies engineered a robust Shopify storefront utilizing modern Vue.js components for dynamic, app-like interactions without page reloads. We implemented a fully localized experience with seamless language switching (English/Arabic) and precise multi-currency gateways tailored for the Middle East (including localized cash-on-delivery flows). The optimized infrastructure successfully handled a 300% surge in traffic during their peak holiday sale without a single drop in performance.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/riza-uae-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/riza-uae-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/riza-uae-product.jpg' }
    ]
  },
  {
    id: 4, slug: 'mazara',

    results: [
      { metric: '80%', label: 'Faster Inventory Syncing' },
      { metric: '25%', label: 'Increase in Repeat Purchases' },
      { metric: '0', label: 'Downtime During High-Traffic Events' }
    ],
    testimonial: {
      quote: "Task19 completely overhauled our digital infrastructure. Their custom integrations and scalable architecture have allowed us to handle massive traffic spikes during our sales without a single hiccup.",
      author: "Head of Digital",
      company: "Mazara"
    },
    faqs: [
      { question: "How do you ensure e-commerce platforms stay stable during flash sales?", answer: "We utilize robust cloud infrastructure, aggressive edge caching (like Cloudflare), and optimized database queries. For Shopify, we rely on its elastic architecture while ensuring all custom API integrations have robust fallback mechanisms." },
      { question: "Can you build custom inventory management integrations?", answer: "Absolutely. We regularly build middleware using Node.js or Laravel to synchronize complex ERP systems (like SAP or NetSuite) with modern e-commerce storefronts in real-time." }
    ],
    title: 'Mazara',
    category: 'E-commerce',
    client: 'Mazara',
    industry: 'Fashion & Apparel',
    shortDesc: 'A vibrant and modern fashion destination for trend-conscious shoppers.',
    image: '/portfolio-screenshots/mazara-home.jpg',
    externalLink: 'https://mazara.in/',
    technologies: ['WooCommerce', 'WordPress', 'React'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Mazara is a forward-thinking fashion and apparel brand known for its vibrant aesthetics and trend-conscious collections. They aim to empower their customers through bold designs, offering everything from everyday essentials to statement pieces in a highly visual, lookbook-driven digital environment.',
    challenge: 'The highly visual nature of Mazaras brand meant their website was incredibly image-heavy, leading to severe performance bottlenecks on mobile devices. Furthermore, their inventory management system was struggling to keep up with rapid seasonal turnovers, resulting in out-of-stock items being displayed and frustrating eager shoppers.',
    solution: 'We completely overhauled their WooCommerce architecture, implementing a React-based headless frontend to dramatically decouple the heavy backend processing from the user interface. We introduced a predictive search engine and an AI-driven product recommendation system to increase average order value. Additionally, we synchronized their ERP system directly with the storefront, ensuring real-time inventory accuracy and eliminating stock-out frustrations.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/mazara-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/mazara-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/mazara-product.jpg' }
    ]
  },
  {
    id: 5, slug: 'pisang',

    results: [
      { metric: '65%', label: 'Increase in Mobile Traffic' },
      { metric: '1.5s', label: 'Decrease in Checkout Time' },
      { metric: '50%', label: 'Lower Cart Abandonment' }
    ],
    testimonial: {
      quote: "The UX overhaul provided by Task19 changed the trajectory of our brand. The site feels incredibly fast and intuitive, leading to a massive drop in abandoned carts.",
      author: "Founder",
      company: "Pisang"
    },
    faqs: [
      { question: "Why is mobile-first design critical for modern e-commerce?", answer: "Over 70% of e-commerce traffic now originates from mobile devices. A mobile-first approach ensures touch targets are optimized, navigation is intuitive, and checkout is frictionless on small screens, which directly impacts the bottom line." },
      { question: "How do you reduce cart abandonment?", answer: "We implement persistent carts, guest checkout options, progress indicators, and localized payment methods (like Apple Pay/Google Pay) to remove all possible friction between the cart and the final purchase." }
    ],
    title: 'Pisang',
    category: 'E-commerce',
    client: 'Pisang',
    industry: 'Food & Beverage',
    shortDesc: 'An artisanal food brand specializing in premium, organic snacks and treats.',
    image: '/portfolio-screenshots/pisang-home.jpg',
    externalLink: 'https://pisang.in/',
    technologies: ['Shopify', 'Liquid', 'Alpine.js'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Pisang is an artisanal food brand dedicated to crafting premium, organic snacks and treats. Rooted in natural ingredients and sustainable farming practices, they appeal to health-conscious consumers who refuse to compromise on taste or quality.',
    challenge: 'Selling perishable food items online comes with unique challenges. Pisang needed a platform that could elegantly handle subscription-based purchasing (recurring snack boxes), manage complex shipping rules based on temperature zones, and effectively communicate the organic, farm-to-table story of their ingredients.',
    solution: 'We crafted a visually rich Shopify experience utilizing Alpine.js for lightweight, lightning-fast interactivity. We integrated a robust subscription management app, allowing customers to easily pause, skip, or modify their recurring orders. Custom shipping logic was coded into the checkout process to automatically restrict delivery zones during warmer months. The site now seamlessly blends compelling brand storytelling with a frictionless recurring-revenue purchasing engine.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/pisang-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/pisang-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/pisang-product.jpg' }
    ]
  },
  {
    id: 6, slug: 'folk-fab',

    results: [
      { metric: '200%', label: 'Increase in Search Visibility' },
      { metric: '35%', label: 'Higher Customer Lifetime Value' },
      { metric: '99.9%', label: 'Platform Uptime' }
    ],
    testimonial: {
      quote: "Task19 isn't just a development agency; they are strategic partners. Their deep technical SEO knowledge and platform expertise have driven unprecedented organic growth for our brand.",
      author: "Marketing Director",
      company: "Folk & Fab"
    },
    faqs: [
      { question: "How do you optimize an e-commerce store for Technical SEO?", answer: "We ensure perfect Core Web Vitals, implement dynamic JSON-LD schema markup for products and reviews, optimize internal linking structures, and eliminate duplicate content issues common in faceted navigation." },
      { question: "Can a redesign impact existing SEO rankings?", answer: "If done incorrectly, yes. That's why we perform meticulous 301 redirect mapping, preserve URL structures where possible, and run comprehensive pre- and post-launch SEO audits to protect and enhance your organic value." }
    ],
    title: 'Folk & Fab',
    category: 'E-commerce',
    client: 'Folk & Fab',
    industry: 'Home Decor & Textiles',
    shortDesc: 'A curated marketplace for handcrafted home textiles and traditional artisan decor.',
    image: '/portfolio-screenshots/folk-fab-home.jpg',
    externalLink: 'https://folkandfab.com/',
    technologies: ['Shopify Plus', 'Next.js', 'Vercel'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Folk & Fab is a curated marketplace that celebrates traditional craftsmanship. They source handcrafted home textiles, rugs, and decor directly from artisans around the world, bridging the gap between ancient weaving techniques and modern interior design.',
    challenge: 'As a marketplace representing numerous distinct artisans, Folk & Fab needed a way to tell the unique story behind every individual product while maintaining a cohesive brand identity. Their previous site was difficult to navigate, burying incredible artisan stories beneath generic product grids and failing to capture the rich texture of the textiles.',
    solution: 'We deployed a headless Shopify Plus architecture powered by Next.js and hosted on Vercel, allowing for incredible speed and flexibility. We designed a custom "Artisan Spotlight" data structure that interweaves rich editorial content (videos, artisan bios) directly into the product detail pages. Enhanced zoom capabilities and custom video players were added so customers could practically "feel" the textures through the screen.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/folk-fab-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/folk-fab-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/folk-fab-product.jpg' }
    ]
  },
  {
    id: 7, slug: 'goodwill-collections',

    results: [
      { metric: '3x', label: 'Catalog Size Handled Seamlessly' },
      { metric: '40%', label: 'Faster Search Results' },
      { metric: '20%', label: 'Increase in Conversion Rate' }
    ],
    testimonial: {
      quote: "Handling our massive, ever-changing inventory was a nightmare before Task19. They implemented a lightning-fast search solution and optimized our backend, making product discovery effortless for our customers.",
      author: "IT Manager",
      company: "Goodwill Collections"
    },
    faqs: [
      { question: "How do you handle e-commerce sites with thousands of SKUs?", answer: "We utilize advanced filtering systems and robust search engines (like Algolia or specialized Shopify apps) to ensure that users can instantly find exactly what they are looking for, regardless of catalog size." },
      { question: "What is faceted search?", answer: "Faceted search allows users to narrow down search results by applying multiple filters (like size, color, brand, or price) simultaneously, which is critical for high-SKU catalogs." }
    ],
    title: 'Goodwill Collections',
    category: 'E-commerce',
    client: 'Goodwill Collections',
    industry: 'Apparel & Accessories',
    shortDesc: 'A trusted online retailer offering a wide range of family apparel and lifestyle goods.',
    image: '/portfolio-screenshots/goodwill-collections-home.jpg',
    externalLink: 'https://www.goodwillcollections.com/',
    technologies: ['WooCommerce', 'PHP', 'MySQL'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Goodwill Collections is a trusted, family-oriented online retailer offering a massive, diverse catalog of apparel, accessories, and lifestyle goods. They pride themselves on providing high value, affordable pricing, and an expansive selection that caters to every age group.',
    challenge: 'With a catalog exceeding 10,000 SKUs, their monolithic WooCommerce database was grinding to a halt. Search queries were timing out, and customers were abandoning carts due to incredibly slow page loads during checkout. They needed an enterprise-grade optimization strategy without completely rebuilding from scratch.',
    solution: 'Task19 Technologies conducted a deep-dive audit and optimization of their entire WooCommerce ecosystem. We migrated their database to a high-performance MySQL cluster, implemented advanced Redis object caching, and integrated ElasticSearch to handle their massive catalog. Search times were reduced from 8 seconds to under 200 milliseconds, and checkout abandonment dropped by 32%.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/goodwill-collections-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/goodwill-collections-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/goodwill-collections-product.jpg' }
    ]
  },
  {
    id: 8, slug: 'aura-murtis',

    results: [
      { metric: '120%', label: 'Increase in International Sales' },
      { metric: '50%', label: 'Faster Global Load Times' },
      { metric: '95%', label: 'Customer Satisfaction Score' }
    ],
    testimonial: {
      quote: "Expanding globally was our primary goal. Task19 provided the multi-currency and localized architecture we needed to confidently enter new markets.",
      author: "CEO",
      company: "Aura Murtis"
    },
    faqs: [
      { question: "How do you build a store for international audiences?", answer: "We implement Shopify Markets or customized multi-store architectures that serve localized content, currencies, and languages based on the user's geolocation, alongside international tax and duty calculators." },
      { question: "Is a multi-store setup better than a single localized store?", answer: "It depends on the complexity of your operations. Single stores with Shopify Markets are easier to manage, while multi-store setups offer deeper customization for radically different regional marketing strategies." }
    ],
    title: 'Aura Murtis',
    category: 'E-commerce',
    client: 'Aura Murtis',
    industry: 'Spiritual & Cultural Goods',
    shortDesc: 'An exquisite destination for beautifully crafted spiritual idols and cultural artifacts.',
    image: '/portfolio-screenshots/aura-murtis-home.jpg',
    externalLink: 'https://auramurtis.com/',
    technologies: ['Shopify', 'React', 'Framer Motion'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Aura Murtis specializes in the creation and distribution of exquisitely crafted spiritual idols, brass artifacts, and cultural goods. They serve a deeply devoted customer base that views these purchases not merely as decor, but as highly emotional and spiritual investments.',
    challenge: 'Because of the high emotional value and often high price point of brass and marble idols, customers require immense trust and detailed visual inspection before purchasing. The existing platform failed to provide a premium, respectful environment, presenting sacred artifacts like generic commodities.',
    solution: 'We completely reimagined the digital experience to feel like a high-end digital gallery. Utilizing React and Framer Motion on top of Shopify, we introduced smooth, respectful scroll animations and immersive, full-screen product galleries. We also integrated a custom 3D model viewer, allowing devotees to rotate and inspect the craftsmanship of the idols from every angle before committing to a purchase.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/aura-murtis-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/aura-murtis-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/aura-murtis-product.jpg' }
    ]
  },
  {
    id: 9, slug: 'cadfour',

    results: [
      { metric: '4x', label: 'Faster Content Updates' },
      { metric: '30%', label: 'Increase in Lead Generation' },
      { metric: '100%', label: 'Custom Design Integration' }
    ],
    testimonial: {
      quote: "We needed a corporate platform that looked stunning but was incredibly easy for our marketing team to manage. Task19 delivered a custom WordPress solution that exceeded all expectations.",
      author: "Director of Communications",
      company: "Cadfour"
    },
    faqs: [
      { question: "Why choose custom WordPress over a pre-built theme?", answer: "Custom WordPress builds eliminate code bloat, ensuring lightning-fast load times. They are tailored exactly to your brand's unique design and provide a highly customized, secure backend tailored to your team's publishing workflow." },
      { question: "Is WordPress secure for enterprise use?", answer: "Yes. When built correctly, hosted on enterprise infrastructure, and maintained with strict security protocols (like custom login URLs, minimal plugins, and automated vulnerability patching), WordPress is highly secure." }
    ],
    title: 'Cadfour',
    category: 'E-commerce',
    client: 'Cadfour',
    industry: 'Tech & Electronics',
    shortDesc: 'A cutting-edge electronics retailer specializing in premium gadgets and tech accessories.',
    image: '/portfolio-screenshots/cadfour-home.jpg',
    externalLink: 'https://cadfour.com/',
    technologies: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS'],
    features: ['Custom Shopify Theme Development', 'Responsive Mobile-First Design', 'Advanced Search & Filtering', 'Seamless Payment Gateway Integration', 'Performance Optimization (90+ PageSpeed)'],
    aboutProject: 'Cadfour is a cutting-edge electronics and tech retailer catering to early adopters and gadget enthusiasts. They curate and sell high-end tech accessories, smart home devices, and premium audio equipment, positioning themselves as a trusted authority in the fast-paced tech landscape.',
    challenge: 'Tech consumers are notoriously demanding when it comes to digital experiences; a slow or buggy website instantly destroys a tech brands credibility. Cadfours original template-based site felt sluggish and generic, failing to match the innovative, futuristic nature of the products they were selling.',
    solution: 'We built a state-of-the-art headless commerce solution using Next.js and the Shopify Storefront API. The new site features lightning-fast server-side rendering, dark-mode by default styling using Tailwind CSS, and complex product comparison tools. We also integrated a dynamic "Tech Specs" accordion system that pulls highly detailed metadata from the Shopify backend, providing power users with the deep technical information they crave.',
    screenshots: [
      { title: 'Home Page', url: '/portfolio-screenshots/cadfour-home.jpg' },
      { title: 'Shop Page', url: '/portfolio-screenshots/cadfour-shop.jpg' },
      { title: 'Product Page', url: '/portfolio-screenshots/cadfour-product.jpg' }
    ]
  }
];

export const portfolioCategories = ['All', 'Shopify', 'WooCommerce', 'E-commerce', 'Mobile App', 'Web App']

export const testimonials = [
  {
    name: 'Nandakumar V',
    company: 'LuLu Group International',
    role: 'Chief Communications Officer',
    industry: 'Retail',
    avatar: 'https://admin.wac.co/uploads/nandakumar_thumb_1_0541c60e04.png',
    content: 'Lulu Group is a diversified conglomerate with business entities worldwide and contributes highly to the Gulf’s economic status.',
    rating: 5,
  },
  {
    name: 'Aboobacker Mohammed Ali',
    company: 'Unicoin DCX',
    role: 'Founder',
    industry: 'Financial',
    avatar: 'https://admin.wac.co/uploads/Aboobacker_thumbnail_bde1b40179.jpg',
    content: 'Unicoin DCX is a cryptocurrency exchange that uses blockchain technology to let you send, receive and trade across the platform.',
    rating: 5,
  },
  {
    name: 'Antony Jos',
    company: 'Joyalukkas Exchange',
    role: 'Managing Director',
    industry: 'Financial',
    avatar: 'https://admin.wac.co/uploads/Antony_thumb_861531fa78.jpg',
    content: 'Joyalukkas Exchange is a well-known foreign exchange offering a range of financial services in the UAE, Kuwait and Oman.',
    rating: 5,
  },
]

export const blogPosts = [
  {
    slug: 'ecommerce-conversion-killers',
    title: 'The 5 Hidden E-Commerce Conversion Killers Costing You Revenue',
    excerpt: 'While a beautiful storefront captures attention, hidden technical bottlenecks — from mobile friction to sluggish page speeds — are quietly draining your revenue. Learn the five most common conversion killers and how to fix them.',
    category: 'Strategy & Growth',
    date: 'August 3, 2026',
    readTime: '8 min read',
    image: '/portfolio-screenshots/ecommerce-conversion-killers-home.jpg' + 'https://example.com',
    content: '',
  },
  {
    slug: 'custom-shopify-app-benefits',
    title: 'Why Your Shopify Store Needs a Custom App: Beyond the App Store Ceiling',
    excerpt: 'When off-the-shelf plugins reach their limit, custom Shopify application development provides the unique business logic, competitive edge, and technical stability your brand needs to scale without compromise.',
    category: 'Technical Expertise',
    date: 'June 14, 2026',
    readTime: '7 min read',
    image: '/portfolio-screenshots/custom-shopify-app-benefits-home.jpg' + 'https://example.com',
    content: '',
  },
  {
    slug: 'ecommerce-sku-migration-guide',
    title: 'The Complete Guide to Large-Scale SKU Migration: Zero Downtime, Maximum SEO',
    excerpt: 'Migrating 10,000+ SKUs without losing search rankings or customer data requires a precision-engineered process. Here\'s our battle-tested methodology for seamless catalog migrations.',
    category: 'Migration & Scalability',
    date: 'June 14, 2026',
    readTime: '10 min read',
    image: '/portfolio-screenshots/custom-shopify-app-benefits-home.jpg' + 'https://example.com',
    content: '',
  },
  {
    slug: 'headless-commerce-guide',
    title: 'Is Headless Commerce Right For Your Brand? A Technical Perspective',
    excerpt: 'Decoupling your front-end from your backend platform is a major architectural shift. We explore when headless commerce actually provides ROI and when it is just unnecessary complexity.',
    category: 'Technical Expertise',
    date: 'May 10, 2026',
    readTime: '12 min read',
    image: '/portfolio-screenshots/ecommerce-sku-migration-guide-home.jpg' + 'https://example.com',
    content: '',
  },
  {
    slug: 'retention-over-acquisition',
    title: 'Why E-commerce Brands Are Shifting Budgets from Acquisition to Retention',
    excerpt: 'With rising customer acquisition costs, the most profitable brands are focusing on LTV. Learn the technical infrastructure needed to power a truly personalized retention strategy.',
    category: 'Strategy & Growth',
    date: 'April 22, 2026',
    readTime: '6 min read',
    image: '/portfolio-screenshots/headless-commerce-guide-home.jpg' + 'https://example.com',
    content: '',
  },
  {
    slug: 'woocommerce-scaling',
    title: 'Scaling WooCommerce: How to Handle High-Traffic Flash Sales',
    excerpt: 'WooCommerce is highly customizable, but can struggle under sudden traffic spikes without proper caching, database optimization, and elastic infrastructure. Here is how we scale it.',
    category: 'Migration & Scalability',
    date: 'March 15, 2026',
    readTime: '9 min read',
    image: '/portfolio-screenshots/retention-over-acquisition-home.jpg' + 'https://example.com',
    content: '',
  },
]

export const stats = [
  { value: 700, suffix: '+', label: 'High-Impact Projects' },
  { value: 600, suffix: '+', label: 'International Clients' },
  { value: 450, suffix: '+', label: 'Dedicated Experts' },
  { value: 100, suffix: '+', label: 'Brand Connections' },
]

export const industries = [
  { name: 'E-commerce & Retail', icon: 'fa-solid fa-cart-shopping', desc: 'End-to-end digital commerce solutions for D2C and B2B brands.' },
  { name: 'Healthcare & MedTech', icon: 'fa-solid fa-heart-pulse', desc: 'HIPAA-compliant digital health platforms and patient engagement tools.' },
  { name: 'Finance & FinTech', icon: 'fa-solid fa-credit-card', desc: 'Secure, regulated financial applications and payment ecosystems.' },
  { name: 'Education & EdTech', icon: 'fa-solid fa-graduation-cap', desc: 'Engaging learning platforms, LMS solutions, and virtual classrooms.' },
  { name: 'Real Estate & PropTech', icon: 'fa-regular fa-building', desc: 'Property listing portals, virtual tours, and CRM platforms.' },
  { name: 'Food & Hospitality', icon: 'fa-solid fa-utensils', desc: 'Digital ordering, reservation, and loyalty platforms.' },
  { name: 'Manufacturing & Logistics', icon: 'fa-solid fa-industry', desc: 'Supply chain visibility, inventory management, and IoT platforms.' },
  { name: 'Media & Entertainment', icon: 'fa-solid fa-film', desc: 'Content platforms, streaming services, and audience engagement tools.' },
]

export const technologies = [
  { name: 'React.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Flutter', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'React Native', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Swift', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'Kotlin', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
  { name: 'AWS', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Google Cloud', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Docker', category: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', category: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'PostgreSQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Shopify', category: 'E-commerce', icon: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'WooCommerce', category: 'E-commerce', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg' },
  { name: 'TensorFlow', category: 'AI/ML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OpenAI', category: 'AI/ML', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
]

export const techCategories = ['All', 'Frontend', 'Backend', 'Mobile', 'Cloud', 'DevOps', 'Database', 'E-commerce', 'AI/ML']

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    desc: 'We begin by deeply understanding your business goals, target audience, competitive landscape, and technical requirements. This phase produces a clear project blueprint.',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    desc: 'Our design team creates wireframes, user flows, and high-fidelity prototypes — validated with real users before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Development Sprints',
    desc: 'Agile two-week sprints with working software demos, continuous integration, and transparent progress tracking through your dedicated project portal.',
  },
  {
    number: '04',
    title: 'QA & Performance',
    desc: 'Rigorous manual and automated testing across devices, browsers, and load conditions ensures your product launches with confidence.',
  },
  {
    number: '05',
    title: 'Launch & Scale',
    desc: 'Strategic deployment with zero-downtime release processes, followed by 30-day post-launch monitoring and iterative performance optimization.',
  },
]

export const whyChooseUs = [
  {
    title: 'Full-Stack Expertise Under One Roof',
    desc: 'Design, development, QA, and DevOps in a single cohesive team — no coordination overhead, no communication gaps.',
  },
  {
    title: 'E-commerce DNA',
    desc: 'Deep specialization in Shopify and WooCommerce gives us insights that generalist agencies simply cannot match.',
  },
  {
    title: 'Transparent, Agile Process',
    desc: 'You see working software every two weeks. No black-box development — complete visibility at every stage.',
  },
  {
    title: 'Performance-First Engineering',
    desc: 'We optimize for Core Web Vitals, conversion rates, and business metrics — not just lines of code.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We invest in understanding your business so deeply that we function as an embedded technology partner, not a vendor.',
  },
  {
    title: 'Proven Track Record',
    desc: 'A portfolio of 200+ successful deliveries across 15+ countries, with a 98% client satisfaction rate.',
  },
]

export const teamMembers = [
  {
    name: 'Afsal Kabeer',
    role: 'Chief Executive Officer',
    bio: 'A visionary leader with deep expertise in digital commerce, Faisal steers Task19 Technologies with a mission to deliver unparalleled technical value to growing brands.',
    image: 'https://ui-avatars.com/api/?name=Faisal+Kabeer&background=013Ad6&color=fff&size=512',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Dr. K.S. Kochumon',
    role: 'Founder',
    bio: 'With a strong foundation in strategic development, Dr. Kochumon founded Task19 to bridge the gap between complex technological capabilities and real-world business needs.',
    image: 'https://ui-avatars.com/api/?name=K+S+Kochumon&background=10152F&color=fff&size=512',
    social: { linkedin: '#' },
  },
  {
    name: 'Ananya Krishnan',
    role: 'Head of Technology',
    bio: 'Leading our engineering team, Ananya architects robust, scalable platforms that power seamless e-commerce experiences across global markets.',
    image: 'https://ui-avatars.com/api/?name=Ananya+Krishnan&background=4859F4&color=fff&size=512',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Divya Menon',
    role: 'Head of Client Success',
    bio: 'Divya ensures every project translates into measurable growth, fostering long-term strategic partnerships with our enterprise clients.',
    image: 'https://ui-avatars.com/api/?name=Divya+Menon&background=A6A9C4&color=fff&size=512',
    social: { linkedin: '#' },
  },
]

export const jobListings = [
  {
    id: 1, slug: 'senior-react-developer',
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Ernakulam, Kerala (Hybrid)',
    type: 'Full-time',
    experience: '4–6 years',
    description: 'We are looking for a talented Senior React Developer to join our growing engineering team. You will architect and build high-performance frontend applications for our enterprise clients, working closely with our design and backend teams.',
    requirements: [
      '4+ years of professional React.js development experience',
      'Strong understanding of state management (Redux, Zustand, Jotai)',
      'Experience with Next.js, TypeScript, and testing frameworks',
      'Familiarity with REST API design and GraphQL',
      'Experience with CI/CD pipelines and Git workflows',
    ],
  },
  {
    id: 2, slug: 'shopify-theme-developer',
    title: 'Shopify Theme Developer',
    department: 'E-commerce',
    location: 'Ernakulam, Kerala (On-site)',
    type: 'Full-time',
    experience: '2–4 years',
    description: 'Join our specialized e-commerce team as a Shopify Theme Developer. You will design and build custom Shopify themes and implement complex storefront features for our D2C brand clients.',
    requirements: [
      '2+ years of Shopify theme development (Liquid)',
      'Strong proficiency in JavaScript, CSS3, and Tailwind',
      'Experience with Shopify sections and blocks architecture',
      'Understanding of e-commerce UX and conversion optimization',
      'Shopify Partner certification (preferred)',
    ],
  },
  {
    id: 3, slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Ernakulam, Kerala (Hybrid)',
    type: 'Full-time',
    experience: '2–4 years',
    description: 'We are seeking a talented UI/UX Designer who combines strong aesthetic sensibility with a research-driven approach to create digital experiences that delight users and drive business results.',
    requirements: [
      '2+ years of professional UI/UX design experience',
      'Expert-level Figma proficiency with design system experience',
      'Strong portfolio demonstrating UX research and visual design',
      'Understanding of accessibility standards (WCAG 2.1)',
      'Experience with user testing and iterative design processes',
    ],
  },
]

export const faqs = [
  {
    question: 'What types of businesses do you typically work with?',
    answer: 'We work with a broad range of businesses — from ambitious D2C startups launching their first digital storefront to established enterprises undertaking complex digital transformation. Our sweet spot is growth-stage e-commerce brands and technology companies looking for a reliable long-term technical partner.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer two primary engagement models: fixed-price projects for well-defined scopes, and time-and-materials retainers for ongoing development and support. After our discovery call, we provide a detailed proposal with a clear breakdown of deliverables, timelines, and costs. There are no surprise fees.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines depend on project scope. A Shopify store build typically takes 4–8 weeks. A custom web application ranges from 3–6 months. Enterprise software projects can span 6–12 months. We provide precise timelines after our discovery and scoping phase.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes. All projects include a 30-day complimentary post-launch support period. We also offer structured maintenance retainers — from basic monitoring packages to dedicated development hours — so you always have expert support when you need it.',
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer: 'Quality is embedded at every stage of our process. We employ dedicated QA engineers who execute comprehensive test plans covering functional, performance, and security dimensions. Our CI/CD pipelines enforce automated testing gates before any code reaches production.',
  },
  {
    question: 'Who will be my main point of contact during the project?',
    answer: 'Every project is assigned a dedicated Project Manager who serves as your single point of contact. You will have full visibility through weekly progress reports, a shared project portal, and direct access to your PM via Slack or your preferred communication channel.',
  },
]

export const aboutTimeline = [
  { year: '2016', title: 'Founded in Kerala', description: 'Task19 Technologies was established in Ernakulam with a small team of five, focused on Shopify store development for emerging Indian D2C brands.' },
  { year: '2018', title: 'First International Client', description: 'Expanded to serve clients in the UAE and UK, marking the beginning of our international growth journey and specialization in cross-border e-commerce.' },
  { year: '2020', title: 'Custom App Development', description: 'Launched our Shopify app development division, building proprietary apps — including Profit Saver Loyalty and MarginMate — now used by merchants worldwide.' },
  { year: '2022', title: '100+ Projects Milestone', description: 'Crossed the 100 successful project milestone while expanding our team to 30+ specialists across development, design, and strategy.' },
  { year: '2024', title: 'Full-Service Digital Agency', description: 'Evolved into a full-service digital transformation partner, offering web, mobile, cloud, AI, and enterprise solutions alongside our e-commerce roots.' },
  { year: '2025', title: 'Regional Technology Leader', description: 'Recognized as one of South India\'s leading technology companies, serving 50+ global clients across 15+ countries with a 200+ project portfolio.' },
]

// Client brands for logo wall
export const clientBrands = [
  { name: 'Caribou Coffee', logo: null },
  { name: 'Lulu Hypermarket', logo: null },
  { name: 'Middlesex University', logo: null },
  { name: 'Yallatoys', logo: null },
  { name: 'Dtale', logo: null },
  { name: 'IKEA', logo: null },
  { name: 'Garmin', logo: null },
  { name: 'Federal Bank', logo: null },
  { name: 'Marriott', logo: null },
  { name: 'Joyalukkas', logo: null },
  { name: 'Alyasra', logo: null },
  { name: 'Al Qatami', logo: null },
  { name: 'Nestle', logo: null },
  { name: 'Landmark Group', logo: null },
]
