export const portfolioItems = [
  {
    id: 1, slug: 'paintemic',
    title: 'Paintemic',
    category: 'Shopify',
    client: 'Paintemic Ltd.',
    shortDesc: 'A premium art supplies Shopify store with custom product configurator and subscription model.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=450&fit=crop',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    results: ['140% increase in conversion rate', '3x faster page load speed', '60% reduction in cart abandonment'],
    challenge: 'Paintemic needed a distinctive online presence for their art supplies brand — one that conveyed creativity and craftsmanship while supporting complex product variants and a subscription loyalty program.',
    solution: 'We developed a custom Shopify theme with an innovative product configurator allowing customers to build personalized art kits. We integrated a tiered loyalty program and implemented advanced performance optimizations.',
  },
  {
    id: 2, slug: 'dsny-online',
    title: 'DSNY Online',
    category: 'Shopify',
    client: 'DSNY Online',
    shortDesc: 'High-volume fashion e-commerce store rebuilt for speed, SEO, and mobile-first UX.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop',
    technologies: ['Shopify Plus', 'React', 'Node.js', 'Algolia'],
    results: ['220% growth in organic traffic', '85% mobile conversion improvement', '45% faster search response'],
    challenge: 'An outdated store architecture was causing slow page loads and poor mobile experiences, resulting in high bounce rates and lost revenue for this growing fashion brand.',
    solution: 'Complete Shopify Plus migration with headless commerce architecture, Algolia-powered search, and mobile-first redesign that dramatically improved performance across all metrics.',
  },
  {
    id: 3, slug: 'riza-uae',
    title: 'RIZA UAE',
    category: 'E-commerce',
    client: 'RIZA UAE',
    shortDesc: 'Multi-currency luxury accessories store built for the Middle East market.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=450&fit=crop',
    technologies: ['Shopify', 'Multi-currency', 'Arabic RTL', 'WhatsApp Integration'],
    results: ['First 90 days: AED 500K+ revenue', 'RTL/LTR bilingual support', '98% mobile usability score'],
    challenge: 'Launching a luxury accessories brand in the UAE required a bilingual (English/Arabic) store with RTL layout support, multi-currency pricing, and WhatsApp commerce integration.',
    solution: 'Custom Shopify store with full Arabic RTL support, dynamic currency switching for UAE, KSA, and KWD, and native WhatsApp Business API integration for seamless customer communication.',
  },
  {
    id: 4, slug: 'mazara',
    title: 'Mazara',
    category: 'WooCommerce',
    client: 'Mazara Foods',
    shortDesc: 'Gourmet food subscription platform with complex delivery scheduling logic.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=450&fit=crop',
    technologies: ['WooCommerce', 'Custom Plugins', 'Stripe', 'Google Maps API'],
    results: ['500+ active subscribers in 6 months', 'Zero downtime delivery scheduling', '4.9/5 customer rating'],
    challenge: 'Mazara needed a subscription platform with intricate delivery window management, customizable meal plans, and seamless integration with their kitchen fulfillment system.',
    solution: 'Built custom WooCommerce subscription engine with real-time delivery slot management, drag-and-drop meal plan builder, and automated kitchen dispatch notifications.',
  },
  {
    id: 5, slug: 'pisang',
    title: 'Pisang',
    category: 'Shopify',
    client: 'Pisang Cosmetics',
    shortDesc: 'Clean beauty brand storefront with ingredient-based product filtering and skin quiz.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=450&fit=crop',
    technologies: ['Shopify', 'JavaScript', 'Quiz Engine', 'Klaviyo'],
    results: ['35% quiz-to-purchase conversion', '180% email list growth', 'Featured in Vogue India'],
    challenge: 'Consumers increasingly want to understand what goes into their beauty products. Pisang needed a shopping experience built around ingredient transparency and personalization.',
    solution: 'Developed an interactive skin quiz engine that recommends products based on skin type and concerns, combined with a searchable ingredient glossary and Klaviyo email automation.',
  },
  {
    id: 6, slug: 'folk-and-fab',
    title: 'Folk & Fab',
    category: 'Shopify',
    client: 'Folk & Fab',
    shortDesc: 'Artisan handcraft marketplace connecting rural Indian artisans with global buyers.',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=450&fit=crop',
    technologies: ['Shopify', 'Multi-vendor', 'Razorpay', 'Custom Theme'],
    results: ['200+ artisans onboarded', '$120K international sales in Year 1', '100% artisan payment accuracy'],
    challenge: 'Creating a multi-vendor marketplace that empowers rural artisans with minimal technical knowledge while providing a world-class shopping experience for international buyers.',
    solution: 'Custom Shopify multi-vendor system with simplified artisan dashboards, automated INR/USD/GBP conversion, and storytelling product pages that connect buyers to makers.',
  },
]

export const portfolioCategories = ['All', 'Shopify', 'WooCommerce', 'E-commerce', 'Mobile App', 'Web App']

export const testimonials = [
  {
    name: 'Arjun Mehta',
    company: 'Paintemic Ltd.',
    role: 'CEO',
    content: 'Task19 Technologies completely transformed our Shopify store. The custom product configurator they built is something I couldn\'t find anywhere else. Our conversion rate nearly doubled in the first month after launch.',
    rating: 5,
  },
  {
    name: 'Sarah Al-Rashidi',
    company: 'RIZA UAE',
    role: 'Founder & Creative Director',
    content: 'Launching in the UAE market is complex — bilingual support, local payment gateways, cultural nuances. Task19 handled every single one of these challenges flawlessly. Our store generated AED 500K in the first 90 days.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    company: 'Pisang Cosmetics',
    role: 'Head of Digital',
    content: 'The skin quiz they developed for us is now our most powerful sales tool. 35% of quiz completions result in a purchase — far above industry average. The team\'s understanding of consumer psychology is impressive.',
    rating: 5,
  },
  {
    name: 'Daniel Chen',
    company: 'Mazara Foods',
    role: 'Co-Founder',
    content: 'Building a food subscription platform with our level of complexity required a team that truly listened. Task19 understood our operations, built exactly what we needed, and delivered two weeks ahead of schedule.',
    rating: 5,
  },
  {
    name: 'Fatima Hussain',
    company: 'Folk & Fab',
    role: 'Operations Director',
    content: 'We had a vision to connect Indian artisans with the world. Task19 brought that vision to life with a platform that even artisans with no tech experience can manage confidently. Truly life-changing work.',
    rating: 5,
  },
]

export const blogPosts = [
  {
    slug: 'ecommerce-conversion-killers',
    title: 'The 5 Hidden E-Commerce Conversion Killers Costing You Revenue',
    excerpt: 'While a beautiful storefront captures attention, hidden technical bottlenecks — from mobile friction to sluggish page speeds — are quietly draining your revenue. Learn the five most common conversion killers and how to fix them.',
    category: 'Strategy & Growth',
    date: 'August 3, 2022',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'custom-shopify-app-benefits',
    title: 'Why Your Shopify Store Needs a Custom App: Beyond the App Store Ceiling',
    excerpt: 'When off-the-shelf plugins reach their limit, custom Shopify application development provides the unique business logic, competitive edge, and technical stability your brand needs to scale without compromise.',
    category: 'Technical Expertise',
    date: 'June 14, 2022',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&fit=crop',
    content: '',
  },
  {
    slug: 'ecommerce-sku-migration-guide',
    title: 'The Complete Guide to Large-Scale SKU Migration: Zero Downtime, Maximum SEO',
    excerpt: 'Migrating 10,000+ SKUs without losing search rankings or customer data requires a precision-engineered process. Here\'s our battle-tested methodology for seamless catalog migrations.',
    category: 'Migration & Scalability',
    date: 'June 14, 2022',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=360&fit=crop',
    content: '',
  },
]

export const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Global Clients' },
  { value: 8, suffix: '+', label: 'Years of Excellence' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export const industries = [
  { name: 'E-commerce & Retail', icon: '🛍️', desc: 'End-to-end digital commerce solutions for D2C and B2B brands.' },
  { name: 'Healthcare & MedTech', icon: '⚕️', desc: 'HIPAA-compliant digital health platforms and patient engagement tools.' },
  { name: 'Finance & FinTech', icon: '💳', desc: 'Secure, regulated financial applications and payment ecosystems.' },
  { name: 'Education & EdTech', icon: '🎓', desc: 'Engaging learning platforms, LMS solutions, and virtual classrooms.' },
  { name: 'Real Estate & PropTech', icon: '🏢', desc: 'Property listing portals, virtual tours, and CRM platforms.' },
  { name: 'Food & Hospitality', icon: '🍽️', desc: 'Digital ordering, reservation, and loyalty platforms.' },
  { name: 'Manufacturing & Logistics', icon: '🏭', desc: 'Supply chain visibility, inventory management, and IoT platforms.' },
  { name: 'Media & Entertainment', icon: '🎬', desc: 'Content platforms, streaming services, and audience engagement tools.' },
]

export const technologies = [
  { name: 'React.js', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', icon: '▲' },
  { name: 'Vue.js', category: 'Frontend', icon: '💚' },
  { name: 'TypeScript', category: 'Frontend', icon: '📘' },
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Laravel', category: 'Backend', icon: '🔴' },
  { name: 'Python', category: 'Backend', icon: '🐍' },
  { name: 'Java', category: 'Backend', icon: '☕' },
  { name: 'Flutter', category: 'Mobile', icon: '💙' },
  { name: 'React Native', category: 'Mobile', icon: '📱' },
  { name: 'Swift', category: 'Mobile', icon: '🧡' },
  { name: 'Kotlin', category: 'Mobile', icon: '🟣' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'Azure', category: 'Cloud', icon: '🔷' },
  { name: 'Google Cloud', category: 'Cloud', icon: '🌐' },
  { name: 'Docker', category: 'DevOps', icon: '🐳' },
  { name: 'Kubernetes', category: 'DevOps', icon: '⚙️' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'Redis', category: 'Database', icon: '🔴' },
  { name: 'Shopify', category: 'E-commerce', icon: '🛍️' },
  { name: 'WooCommerce', category: 'E-commerce', icon: '🛒' },
  { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
  { name: 'OpenAI', category: 'AI/ML', icon: '🤖' },
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
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    bio: 'A visionary entrepreneur with 12+ years in e-commerce technology, Rajesh founded Task19 with a clear mission: to give ambitious brands the technical horsepower they need to compete globally.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Ananya Krishnan',
    role: 'Head of Technology',
    bio: 'With a background in distributed systems and e-commerce architecture, Ananya leads our engineering team in building scalable, performant solutions that stand up to real-world traffic.',
    social: { linkedin: '#' },
  },
  {
    name: 'Mohammed Al-Farsi',
    role: 'Head of Design',
    bio: 'A multi-disciplinary designer who bridges UX research with visual craft, Mohammed has shaped the digital identity of 80+ brands across three continents.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Divya Menon',
    role: 'Head of Client Success',
    bio: 'Divya ensures every client project delivers measurable ROI. Her consultative approach transforms client relationships from transactional to genuinely strategic partnerships.',
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
