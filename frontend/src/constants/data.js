export const portfolioItems = [
  {
    id: 1, slug: 'paintemic',
    title: 'Paintemic',
    category: 'E-commerce',
    client: 'Paintemic',
    industry: 'Home Improvement',
    shortDesc: 'A vibrant online store for premium paint products with seamless shopping experience.',
    image: 'https://task19.com/wp-content/uploads/2025/12/paint-e1766062226583-1024x869.png',
    externalLink: 'https://task19.com/portfolio/paintemic/',
    technologies: ['Shopify', 'Liquid', 'Tailwind CSS', 'Klaviyo'],
    aboutProject: 'Paintemic emerged with a clear mission: to revolutionize how consumers and contractors purchase premium paints online. By bridging the gap between high-end architectural coatings and accessible e-commerce, they aimed to create a digital storefront that was as vibrant and durable as their products.',
    challenge: 'The brand struggled with a fragmented legacy platform that couldn\'t handle complex product variations—specifically the vast array of color hex codes, finishes, and volume sizes. Customers found it difficult to accurately visualize colors on their screens, leading to high cart abandonment rates and increased customer service inquiries regarding color matching.',
    solution: 'We engineered a custom headless-inspired Shopify architecture that seamlessly integrated an interactive color visualization tool directly onto the product pages. By restructuring their database to handle over 10,000 unique SKU combinations efficiently, we delivered a lightning-fast frontend. We also implemented an intelligent swatching system and a streamlined checkout process tailored for both B2B contractors and B2C DIY enthusiasts.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 2, slug: 'dsny-online',
    title: 'DSNY Online',
    category: 'E-commerce',
    client: 'DSNY Online',
    industry: 'Fashion',
    shortDesc: 'A modern fashion e-commerce platform built for a seamless online shopping experience.',
    image: 'https://task19.com/wp-content/uploads/2025/12/dsny-e1766061997597-1024x944.png',
    externalLink: 'https://task19.com/portfolio/dsny-online/',
    technologies: ['Shopify Plus', 'React', 'Figma', 'Yotpo'],
    aboutProject: 'DSNY Online is an avant-garde fashion label dedicated to bringing runway-ready streetwear to a global audience. Their ethos revolves around high-quality textiles, limited-edition drops, and a community-driven approach to modern apparel.',
    challenge: 'As their social media presence exploded, their existing WooCommerce setup buckled under the pressure of high-traffic "hype" drops. The site experienced significant latency during peak hours, and the rigid theme restricted their ability to run dynamic merchandising campaigns or showcase high-resolution editorial lookbooks without compromising load speed.',
    solution: 'We migrated DSNY Online to Shopify Plus, building a custom, highly performant theme optimized for mobile-first shoppers. We integrated advanced caching and image optimization pipelines to ensure editorial imagery loaded instantly. A bespoke "Drop Calendar" feature was introduced, alongside a seamless integration with their 3PL provider to automate fulfillment during massive sales spikes.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 3, slug: 'riza-uae',
    title: 'Riza UAE',
    category: 'E-commerce',
    client: 'Riza UAE',
    industry: 'Retail & Lifestyle',
    shortDesc: 'A premium e-commerce store serving the UAE market with curated product collections.',
    image: 'https://task19.com/wp-content/uploads/2025/12/rizauae-1024x1024.png',
    externalLink: 'https://task19.com/portfolio/riza-uae/',
    technologies: ['Shopify', 'Next.js', 'Stripe', 'Algolia'],
    aboutProject: 'Riza UAE curates luxury lifestyle products tailored specifically for the discerning Middle Eastern market. They focus on delivering exclusivity, premium quality, and a highly localized shopping experience for their high-net-worth clientele.',
    challenge: 'Localization was the primary hurdle. Riza UAE needed a fully bilingual (English and Right-to-Left Arabic) interface that didn\'t feel like an afterthought. Furthermore, they required integration with local UAE payment gateways and localized shipping providers, which out-of-the-box platforms struggled to support natively without clunky workarounds.',
    solution: 'We architected a robust dual-language Shopify architecture with precise RTL layout mirroring. By utilizing custom API endpoints, we seamlessly connected their preferred local payment and logistics networks. We also implemented an AI-driven predictive search to help users navigate their extensive catalog in either language instantly, dramatically improving the discovery-to-purchase funnel.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1555529733-0e670560f8e1?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 4, slug: 'mazara',
    title: 'Mazara',
    category: 'E-commerce',
    client: 'Mazara',
    industry: 'Luxury Retail',
    shortDesc: 'An elegant online retail destination with a focus on quality and customer experience.',
    image: 'https://task19.com/wp-content/uploads/2025/12/mazara-1024x1024.png',
    externalLink: 'https://task19.com/portfolio/mazara/',
    technologies: ['Shopify', 'Node.js', 'Redis', 'AWS'],
    aboutProject: 'Mazara represents the pinnacle of modern luxury retail, offering a meticulously curated selection of artisanal goods, jewelry, and high-end accessories designed for an affluent demographic that values narrative as much as the product.',
    challenge: 'The brand\'s digital presence lacked the sophistication of its physical products. They needed an immersive storytelling experience that blended editorial content with commerce. However, heavy multimedia assets were severely degrading page performance, and the checkout process felt generic and unbranded, breaking the luxury illusion.',
    solution: 'We deployed a custom-built Shopify storefront focusing on "shoppable editorials." By utilizing lazy-loading, WebP image formatting, and background video optimization, we maintained a rich visual aesthetic while achieving a 90+ Google PageSpeed score. We completely overhauled the checkout flow, introducing a personalized, white-glove unboxing preview and branded touchpoints throughout the transaction process.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 5, slug: 'pisang',
    title: 'Pisang',
    category: 'E-commerce',
    client: 'Pisang',
    industry: 'Food & Beverage',
    shortDesc: 'A delightful food brand e-commerce platform with engaging product presentation.',
    image: 'https://task19.com/wp-content/uploads/2025/12/pisang-e1766061420696-1024x1003.png',
    externalLink: 'https://task19.com/portfolio/pisang/',
    technologies: ['Shopify', 'ReCharge', 'React', 'GraphQL'],
    aboutProject: 'Pisang is an innovative, health-conscious food brand specializing in organic snacks and sustainable FMCG goods. They aim to make healthy eating accessible, fun, and highly convenient for busy professionals and families.',
    challenge: 'Pisang needed to transition from being primarily wholesale to establishing a strong Direct-to-Consumer (D2C) subscription model. Their existing platform couldn\'t handle recurring billing elegantly, and users found it incredibly difficult to manage or modify their upcoming subscription boxes, leading to high churn rates.',
    solution: 'We integrated a robust subscription engine (ReCharge) deeply into a custom Shopify build. We developed a bespoke customer portal that empowered users to easily skip, swap, or delay their snack boxes via a highly intuitive UI. Additionally, we implemented a "Build-A-Box" feature utilizing React, allowing customers to dynamically mix and match flavors while visualizing their custom bundle in real-time.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 6, slug: 'folk-fab',
    title: 'Folk & Fab',
    category: 'E-commerce',
    client: 'Folk & Fab',
    industry: 'Ethnic Fashion',
    shortDesc: 'A stylish fashion e-commerce store blending tradition with modern aesthetics.',
    image: 'https://task19.com/wp-content/uploads/2025/12/folk-1024x1024.png',
    externalLink: 'https://task19.com/portfolio/folk-fab/',
    technologies: ['Shopify', 'Tailwind CSS', 'Klaviyo', 'Gorgias'],
    aboutProject: 'Folk & Fab weaves the rich heritage of traditional textiles with contemporary fashion silhouettes. Their garments tell a story of regional artisans, making them a unique player in the crowded ethnic wear market.',
    challenge: 'The brand\'s intricate sizing requirements for ethnic wear—where custom tailoring and unique body measurements are standard—caused high return rates. Customers were hesitant to purchase expensive garments online without knowing exactly how they would fit.',
    solution: 'We developed an interactive, visual "Smart Fit" guide integrated directly into the product pages. Customers could input their measurements to receive precise size recommendations. Furthermore, we revamped the site\'s filtering system, allowing users to shop by fabric, occasion, and artisanal technique, transforming a confusing catalog into a guided styling experience.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1583391733958-6115993b4695?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1564585253556-9a25b18bc894?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 7, slug: 'goodwill-collections',
    title: 'Goodwill Collections',
    category: 'E-commerce',
    client: 'Goodwill Collections',
    industry: 'Apparel & Accessories',
    shortDesc: 'A curated collections store delivering quality fashion products online.',
    image: 'https://task19.com/wp-content/uploads/2025/12/goodwill-1024x1024.png',
    externalLink: 'https://task19.com/portfolio/goodwill-collections/',
    technologies: ['Shopify', 'Liquid', 'Vue.js', 'Omnisend'],
    aboutProject: 'Goodwill Collections operates on the philosophy of accessible fashion. They aggregate high-quality, trendy apparel and accessories into cohesive collections, making it easy for customers to buy complete "looks" rather than just individual pieces.',
    challenge: 'Their existing store had poor cross-selling capabilities. Customers were buying single items, resulting in a low Average Order Value (AOV). The UI made it difficult to discover matching accessories or complementary garments that belonged to the same curated collection.',
    solution: 'We re-engineered the storefront to focus on "Shop the Look" functionality. Using Vue.js injected into the Shopify theme, we created dynamic hotspot images where users could click on specific items worn by a model and add them to their cart without leaving the page. We also implemented strategic upsell modules in the slide-out cart, significantly boosting their AOV.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 8, slug: 'usedifi',
    title: 'Usedifi',
    category: 'Marketplace',
    client: 'Usedifi',
    industry: 'Consumer Electronics',
    shortDesc: 'A smart marketplace platform for pre-owned products with a clean user interface.',
    image: 'https://task19.com/wp-content/uploads/2025/12/usedifi-1024x1024.png',
    externalLink: 'https://task19.com/portfolio/usedifi/',
    technologies: ['Shopify', 'Next.js', 'Vercel', 'Stripe Connect'],
    aboutProject: 'Usedifi is disrupting the secondary electronics market by providing a trustworthy, verified platform for buying and selling refurbished tech. They aim to reduce e-waste while offering consumers premium devices at accessible prices.',
    challenge: 'Building a multi-vendor marketplace required complex logic that standard e-commerce platforms don\'t support natively. They needed a way for sellers to easily upload products, manage inventory, and receive automated payouts, while buyers needed a standardized grading system to trust the condition of the used items.',
    solution: 'We architected a headless marketplace solution using Next.js on the frontend and Shopify as the backend commerce engine. We integrated specialized marketplace middleware to handle vendor onboarding, product moderation workflows, and automated commission splitting. A custom "Condition Grading UI" was designed to clearly communicate the exact state of every pre-owned device to build buyer trust.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1550009158-9ebf6c8f7329?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 9, slug: 'habibi-shopping',
    title: 'Habibi Shopping',
    category: 'E-commerce',
    client: 'Habibi Shopping',
    industry: 'General Retail',
    shortDesc: 'A vibrant shopping destination serving diverse product categories online.',
    image: 'https://task19.com/wp-content/uploads/2025/12/habibi-1024x1024.png',
    externalLink: 'https://task19.com/portfolio/habibi-shopping/',
    technologies: ['Shopify', 'Liquid', 'Nosto', 'Yotpo'],
    aboutProject: 'Habibi Shopping is a hyper-growth general merchandise store catering to a broad demographic. They source trending products across electronics, home goods, and lifestyle categories, aiming to be a one-stop-shop with highly competitive pricing.',
    challenge: 'With a massive, constantly rotating inventory of over 50,000 SKUs, navigation and discovery were a nightmare. Users were overwhelmed by the generic category structures, and the search function returned irrelevant results, causing shoppers to bounce before finding what they were looking for.',
    solution: 'We completely overhauled their information architecture. We implemented an advanced mega-menu system with visual category cues and integrated an AI-powered merchandising tool to personalize product recommendations based on browsing behavior. An enterprise-grade search appliance was integrated to support typo-tolerance, synonym matching, and dynamic filtering.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 10, slug: 'karenzi',
    title: 'Karenzi',
    category: 'E-commerce',
    client: 'Karenzi',
    industry: 'High Fashion',
    shortDesc: 'A sophisticated fashion brand store with premium design and smooth checkout.',
    image: 'https://task19.com/wp-content/uploads/2025/12/karenzi-e1766059061627-1024x946.png',
    externalLink: 'https://task19.com/portfolio/karenzi/',
    technologies: ['Shopify', 'Tailwind CSS', 'Framer Motion', 'Klaviyo'],
    aboutProject: 'Karenzi is an independent high-fashion label renowned for minimalist aesthetics and sustainable materials. They target a demographic that values transparency in manufacturing as much as cutting-edge design.',
    challenge: 'Their previous template-based website failed to convey the premium nature of their brand. The user interface felt clunky, and vital information regarding their sustainable sourcing and supply chain transparency was buried deep in text-heavy pages that nobody read.',
    solution: 'We designed a custom, minimalist Shopify theme heavily focused on typography, negative space, and micro-interactions powered by Framer Motion. We introduced a unique "Sustainability Journey" module on every product page that visually mapped the garment\'s origin, from raw material to final stitch, effectively turning their supply chain into a core marketing asset without cluttering the buying journey.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1434389678278-be4d41a6b47c?w=800&h=600&fit=crop' }
    ]
  },
  {
    id: 11, slug: 'cadfour',
    title: 'Cadfour',
    category: 'E-commerce',
    client: 'Cadfour',
    industry: 'Modern Furniture',
    shortDesc: 'A modern retail e-commerce platform with optimized performance and conversion.',
    image: 'https://task19.com/wp-content/uploads/2025/12/cadfour-e1766049985957-1024x949.png',
    externalLink: 'https://task19.com/portfolio/cadfour/',
    technologies: ['Shopify', 'Three.js', 'React', 'AWS S3'],
    aboutProject: 'Cadfour specializes in mid-century modern and contemporary furniture. They cater to interior designers and design-conscious homeowners who demand high-quality, durable pieces for modern living spaces.',
    challenge: 'Selling high-ticket furniture online is notoriously difficult. Customers were abandoning carts because they couldn\'t accurately gauge the scale, texture, or physical presence of large items like sofas and dining tables purely from 2D photography.',
    solution: 'We revolutionized their shopping experience by integrating an interactive 3D model viewer and WebAR (Augmented Reality) capabilities using Three.js. This allowed customers to place true-to-scale 3D furniture models into their own living rooms via their smartphone cameras. Coupled with a customized freight-shipping calculator in the checkout, we removed the two biggest barriers to online furniture purchasing.',
    screenshots: [
      { title: 'Home Page', url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop' },
      { title: 'Shop Page', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop' },
      { title: 'Product Page', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop' }
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'custom-shopify-app-benefits',
    title: 'Why Your Shopify Store Needs a Custom App: Beyond the App Store Ceiling',
    excerpt: 'When off-the-shelf plugins reach their limit, custom Shopify application development provides the unique business logic, competitive edge, and technical stability your brand needs to scale without compromise.',
    category: 'Technical Expertise',
    date: 'June 14, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'ecommerce-sku-migration-guide',
    title: 'The Complete Guide to Large-Scale SKU Migration: Zero Downtime, Maximum SEO',
    excerpt: 'Migrating 10,000+ SKUs without losing search rankings or customer data requires a precision-engineered process. Here\'s our battle-tested methodology for seamless catalog migrations.',
    category: 'Migration & Scalability',
    date: 'June 14, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'headless-commerce-guide',
    title: 'Is Headless Commerce Right For Your Brand? A Technical Perspective',
    excerpt: 'Decoupling your front-end from your backend platform is a major architectural shift. We explore when headless commerce actually provides ROI and when it is just unnecessary complexity.',
    category: 'Technical Expertise',
    date: 'May 10, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'retention-over-acquisition',
    title: 'Why E-commerce Brands Are Shifting Budgets from Acquisition to Retention',
    excerpt: 'With rising customer acquisition costs, the most profitable brands are focusing on LTV. Learn the technical infrastructure needed to power a truly personalized retention strategy.',
    category: 'Strategy & Growth',
    date: 'April 22, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'woocommerce-scaling',
    title: 'Scaling WooCommerce: How to Handle High-Traffic Flash Sales',
    excerpt: 'WooCommerce is highly customizable, but can struggle under sudden traffic spikes without proper caching, database optimization, and elastic infrastructure. Here is how we scale it.',
    category: 'Migration & Scalability',
    date: 'March 15, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&fit=crop',
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
