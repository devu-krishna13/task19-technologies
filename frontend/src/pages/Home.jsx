import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import SectionHeading from '../components/ui/SectionHeading'
import FeatureCard from '../components/ui/FeatureCard'
import ServiceCard from '../components/ui/ServiceCard'
import BlogCard from '../components/ui/BlogCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTASection from '../components/ui/CTASection'

import { Link } from 'react-router-dom'
import {
  stats, whyChooseUs, portfolioItems, testimonials, blogPosts, faqs, clientBrands, technologies
} from '../constants/data'
import { servicesForCards } from '../constants/services'
import {
  ArrowRight,
  Gauge,
  Blocks,
  Smartphone,
  ShieldCheck,
  Layers3,
  Rocket,
} from 'lucide-react'

/* ── Hero Slides ── */
const heroSlides = [
  {
    label: 'Innovation & Strategy',
    title: <>Experiences Powered by<br /><em className="font-serif-italic not-italic text-white/40">Intelligence.</em></>,
    cta: 'Watch the Future',
    // Business team collaborating on laptops — 16:9 pre-cropped
    bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'AI Solutions',
    title: <>AI Precision. Human Intuition.<br /><em className="font-serif-italic not-italic text-white/40">Real Results.</em></>,
    cta: 'Explore AI Services',
    // Modern tech workspace with screens — 16:9 pre-cropped
    bg: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'Industry Leaders',
    title: <>Tech, Marketing, Industry<br />Leaders, <em className="font-serif-italic not-italic text-white/40">One Stage!</em></>,
    cta: 'See Our Work',
    // Business conference / audience hall — 16:9 pre-cropped
    bg: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
  {
    label: 'Digital Transformation',
    title: <>Helping You Take the<br /><em className="font-serif-italic not-italic text-white/40">Digital Leap</em></>,
    cta: 'Get Free Audit',
    // E-commerce / analytics on laptop — 16:9 pre-cropped
    bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90',
  },
]

const specializedSolutions = [
  {
    icon: Blocks,
    title: 'Shopify Migration',
    description: 'Move catalog data, customers, content, and SEO value into a cleaner storefront architecture without losing business momentum.',
  },
  {
    icon: Smartphone,
    title: 'Store to Mobile App',
    description: 'Extend your storefront into mobile experiences that improve retention, repeat purchasing, and brand affinity.',
  },
  {
    icon: ShieldCheck,
    title: 'Custom Shopify Apps',
    description: 'Build private or public apps when generic plugins create limits, bloat, or operational friction.',
  },
]

const valuePillars = [
  { icon: Gauge, title: 'Performance-Led Builds', description: 'Core Web Vitals, fast interactions, and resilient storefront behavior are part of the baseline.' },
  { icon: Layers3, title: 'Reusable Design Systems', description: 'We build reusable sections, cards, and page patterns so growth does not create visual inconsistency.' },
  { icon: Blocks, title: 'Proof-First Messaging', description: 'Project results, metrics, and client context appear early so the website earns trust before it asks for action.' },
  { icon: Rocket, title: 'Revenue-Focused UX', description: 'Every page balances clarity, hierarchy, and conversion paths to remove friction from decision-making.' },
  { icon: Smartphone, title: 'Responsive by Default', description: 'Spacing, alignment, and typography are tuned for mobile, tablet,desktop instead of adapted at the end.' },
  { icon: ShieldCheck, title: 'Operational Reliability', description: 'Migration planning, QA, and scalable implementation support launches that feel calm rather than risky.' },
]; const techLogos = [
  {
    name: 'Shopify',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
      </svg>
    )
  },
  {
    name: 'WooCommerce',
    svg: (
      <svg className="h-9 md:h-11 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 256 153" fill="currentColor">
        <path d="M232.137523,0 L23.7592719,0 C10.5720702,0 -0.103257595,10.7799647 0.000639559736,23.862498 L0.000639559736,103.404247 C0.000639559736,116.591115 10.6767385,127.266612 23.8639402,127.266612 L122.558181,127.266612 L167.667206,152.384995 L157.410382,127.266612 L232.137523,127.266612 C245.325059,127.266612 255.999888,116.591115 255.999888,103.404247 L255.999888,23.862498 C255.999888,10.6752964 245.325059,0 232.137523,0 Z M19.3640061,18.4201481 C16.4334946,18.6294847 14.2355942,19.6761007 12.7703719,21.6645976 C11.3051496,23.5484931 10.781875,25.9556632 11.095813,28.6768382 C17.2707741,67.9247058 23.027062,94.4034429 28.3647436,108.113986 C30.4579757,113.137395 32.8651458,115.5451 35.690989,115.335764 C40.086656,115.021425 45.3196694,108.951332 51.4946305,97.1248185 C54.73908,90.4260478 59.7628237,80.3792294 66.5657276,66.9823567 C72.2170797,86.762992 79.9618646,101.625221 89.6956814,111.567705 C92.417057,114.393415 95.2427665,115.649434 97.9634733,115.440098 C100.371178,115.230761 102.254539,113.974742 103.510558,111.672039 C104.557241,109.683676 104.975914,107.380974 104.766578,104.764601 C104.138568,95.2407893 105.080917,81.9489193 107.69729,64.8892584 C110.417997,47.3063898 113.767382,34.6424627 117.849111,27.1069476 C118.686458,25.5370569 119.000128,23.9670994 118.895794,22.0832708 C118.686458,19.6760338 117.639775,17.6875369 115.651411,16.1176463 C113.663048,14.5477557 111.46468,13.8151445 109.057643,14.0244142 C106.022597,14.2337508 103.719895,15.6989731 102.150205,18.6294847 C95.6614396,30.4560654 91.0560348,49.6088916 88.335328,76.1924977 C84.3579328,66.145211 81.0085475,54.3185634 78.3921746,40.3987506 C77.2411578,34.2238564 74.4154483,31.2933449 69.8100434,31.6073497 C66.670329,31.8166194 64.0538892,33.9098515 61.9606572,37.8869122 L39.0401069,81.5302462 C35.2723159,66.3544807 31.7138615,47.8296643 28.4694119,25.9556632 C27.7368007,20.5133802 24.7016209,18.0014749 19.3640061,18.4201481 Z M221.044022,25.9559976 C228.475136,27.5259551 234.022221,31.5030159 237.789611,38.0965832 C241.138996,43.7482697 242.81302,50.5511737 242.81302,58.7146317 C242.81302,69.4943957 240.092314,79.3325464 234.649562,88.3333508 C228.370134,98.7995112 220.206676,104.032257 210.054854,104.032257 C208.275828,104.032257 206.391799,103.82292 204.402767,103.404247 C196.972321,101.834557 191.425236,97.857831 187.657177,91.264063 C184.308461,85.5076413 182.633768,78.6002028 182.633768,70.5410787 C182.633768,59.7612478 185.355144,49.923164 190.797226,41.0270948 C197.181658,30.5610681 205.345116,25.3280548 215.392603,25.3280548 C217.171629,25.3280548 219.055659,25.5373913 221.044022,25.9559976 Z M216.648622,82.5769291 C220.521015,79.1232099 223.137388,73.9947979 224.602744,67.0873594 C225.021417,64.6802562 225.335087,62.0637496 225.335087,59.3425746 C225.335087,56.3074616 224.707078,53.0630121 223.451058,49.8184957 C221.881368,45.7367667 219.788002,43.5389332 217.275963,43.0155917 C213.508574,42.2829805 209.845518,44.3762126 206.391799,49.5045577 C203.566089,53.4816184 201.786394,57.6680157 200.844713,61.9590813 C200.321038,64.3663182 200.111701,66.9830255 200.111701,69.5993984 C200.111701,72.6344445 200.739711,75.8788272 201.99573,79.1232099 C203.566089,83.2049389 205.658786,85.4026386 208.170825,85.9263145 C210.787198,86.4493215 213.612908,85.2983047 216.648622,82.5769291 Z M172.167608,38.0965832 C168.399549,31.5030159 162.74813,27.5259551 155.422019,25.9559976 C153.432987,25.5373913 151.549626,25.3280548 149.769931,25.3280548 C139.723112,25.3280548 131.559654,30.5610681 125.175223,41.0270948 C119.732472,49.923164 117.011765,59.7612478 117.011765,70.5410787 C117.011765,78.6002028 118.686458,85.5076413 122.035174,91.264063 C125.803233,97.857831 131.350318,101.834557 138.780763,103.404247 C140.769126,103.82292 142.653156,104.032257 144.432851,104.032257 C154.584672,104.032257 162.74813,98.7995112 169.027559,88.3333508 C174.47031,79.3325464 177.191017,69.4943957 177.191017,58.7146317 C177.191017,50.5511737 175.516324,43.7482697 172.167608,38.0965832 Z M158.980072,67.0873594 C157.515384,73.9947979 154.898343,79.1232099 151.02595,82.5769291 C147.990904,85.2983047 145.165195,86.4493215 142.548822,85.9263145 C140.036783,85.4026386 137.943417,83.2049389 136.373727,79.1232099 C135.117707,75.8788272 134.489698,72.6344445 134.489698,69.5993984 C134.489698,66.9830255 134.699034,64.3663182 135.22271,61.9590813 C136.16439,57.6680157 137.943417,53.4816184 140.769126,49.5045577 C144.223514,44.3762126 147.88657,42.2829805 151.65396,43.0155917 C154.165999,43.5389332 156.259365,45.7367667 157.829055,49.8184957 C159.085074,53.0630121 159.713084,56.3074616 159.713084,59.3425746 C159.713084,62.0637496 159.503748,64.6802562 158.980072,67.0873594 Z" />
      </svg>
    )
  },
  {
    name: 'WordPress',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
      </svg>
    )
  },
  {
    name: 'React',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
      </svg>
    )
  },
  {
    name: 'Laravel',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    )
  },
  {
    name: 'PHP',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
      </svg>
    )
  },
  {
    name: 'Flutter',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    svg: (
      <svg className="h-10 md:h-12 w-auto text-white/80 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    )
  }
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Task19 Technologies — Shopify & E-Commerce Development Experts</title>
        <meta name="description" content="Task19 Technologies is a leading Shopify & WooCommerce development agency. We build high-performance e-commerce stores, custom Shopify apps, and digital solutions that drive revenue." />
        <link rel="canonical" href="https://task19.com" />
      </Helmet>

      {/* ═══ ROTATING HERO ═══ */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper h-screen min-h-[600px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.hero-pagination' }}
          loop
          className="hero-swiper absolute inset-0 w-full h-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i} className="relative w-full h-full flex items-center justify-center">
              {/* Background image with cinematic gradient */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={slide.bg}
                  alt={slide.label}
                  className="w-full h-full object-cover object-center"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 0.9) 80%)'
                }}></div>
              </div>

              {/* Content — Centered absolutely */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center">
                <div className="container relative flex flex-col items-center text-center px-4 mx-auto">

                  {/* Top Badge (slide.label) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">!</div>
                    <span className="text-white/90 text-sm font-medium">{slide.label}</span>
                  </motion.div>

                  {/* Main Headline (slide.title) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto"
                  >
                    <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                      {slide.title}
                    </h1>
                  </motion.div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-8 left-0 right-0 z-20 pointer-events-none">
          <div className="container flex justify-center">
            <div className="hero-pagination flex gap-2 pointer-events-auto" />
          </div>
        </div>
      </section>

      {/* ═══ RECENT PORTFOLIO ═══ */}
      <section className="pt-40 pb-32 lg:pt-48 lg:pb-40 bg-white">
        <div className="container">

          <div className="text-center">
            <h2
              className="font-display font-light text-text-primary leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                marginTop: "40px",       // Forces space above the text
                marginBottom: "40px"     // Forces space below the text before the grid
              }}
            >
              Recent Portfolio
            </h2>
          </div>

          {/* Added pt-12 pb-16 (for mobile) and lg:pt-20 lg:pb-24 (for desktop screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 pt-12 pb-16 lg:pt-20 lg:pb-24">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="cursor-pointer"
              >
                <a
                  href={item.externalLink || `/portfolio/${item.slug}`}
                  target={item.externalLink ? "_blank" : "_self"}
                  rel={item.externalLink ? "noopener noreferrer" : undefined}
                  className="block clip-inset-wrapper group"
                >
                  {/* Image */}
                  <div
                    className="w-full overflow-hidden clip-inset"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-4 pb-2">
                    <span className="text-[11px] font-body text-text-muted">
                      {item.industry || item.category}
                    </span>

                    <p className="mt-2 text-[13px] leading-[1.7] text-text-primary group-hover:text-accent transition-colors">
                      <span className="font-semibold">{item.title}:</span>{" "}
                      {item.shortDesc}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <div
            className="flex justify-center mt-20 pt-14 pb-6"
            style={{ borderTop: "1px solid #e5e5e5" }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 bg-black text-white hover:bg-[#1b1b1b] transition-all duration-300"
              style={{
                padding: "1rem 2.8rem",
                fontSize: "0.9rem",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                marginTop: "40px",       // Forces space above the text
                marginBottom: "40px"     // Forces space below the text before the grid
              }}
            >
              Explore All Portfolio

              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={18}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STRATEGY ═══ */}
      <section className="section" style={{ backgroundColor: '#f9fafb', paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px' }}>
            <div className="lg:sticky lg:top-32 self-start">
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Strategy</span>
              </div>
              <h2 className="font-display font-bold leading-tight text-black tracking-tight" style={{ fontSize: '42px', marginBottom: '24px' }}>
                Stop Leaving Revenue<br />On The Table
              </h2>
              <p className="text-gray-500 font-light max-w-md" style={{ fontSize: '16px', marginTop: '8px', marginBottom: '32px' }}>
                In the competitive Direct-to-Consumer (D2C) landscape, your e-commerce platform is your most critical asset. We solve the technical and strategic hurdles that limit growth.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-80" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#000', borderRadius: '14px', padding: '12px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '8px' }}>
              {[
                { title: 'Conversion Bottlenecks', desc: 'A beautiful site is useless if it doesn\'t sell. We focus on conversion rate optimization (CRO) from the ground up.' },
                { title: 'Scalability Issues', desc: 'We build infrastructure—from code to hosting—that can handle flash sales, high traffic, and rapid product expansion without breaking.' },
                { title: 'Feature Gaps', desc: 'When off-the-shelf apps aren\'t enough, we develop custom solutions that fit your unique business logic perfectly.' },
                { title: 'Proven Results & Trust', desc: 'We partner with D2C brands to deliver measurable growth. Our solutions are designed to be high-performance, maintainable, and revenue-focused.' }
              ].map((item, i, arr) => (
                <motion.div
                  key={i}
                  className="transition-all duration-300"
                  style={{ padding: '24px 0', borderBottom: i < arr.length - 1 ? '1px solid #e5e7eb' : 'none' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-5 mb-3">
                    <div className="flex flex-shrink-0 items-center justify-center rounded-full" style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6' }}>
                      <span className="font-display font-bold" style={{ fontSize: '18px', color: '#111827' }}>0{i + 1}</span>
                    </div>
                    <h3 className="font-display font-bold text-gray-900 m-0" style={{ fontSize: '20px' }}>{item.title}</h3>
                  </div>
                  <p className="leading-relaxed" style={{ color: '#4b5563', fontSize: '15px', paddingLeft: '68px', margin: 0 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES (WAC Clean Layout Style) ═══ */}
      <section className="section" style={{ backgroundColor: '#050f28', color: '#fff', paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container px-4 mx-auto w-full">

          {/* Header */}
          <div className="mb-6">
            <div className="inline-block" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '6px 16px' }}>
              <span className="font-medium text-white" style={{ fontSize: '14px' }}>Tech Stack</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center" style={{ marginBottom: '48px' }}>
            <div>
              <h2
                className="font-display font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: '42px', margin: 0 }}
              >
                Technologies
              </h2>
            </div>
            <div>
              <p className="font-light leading-relaxed max-w-xl"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '18px',
                  margin: 0
                }}>
                Shopify, WooCommerce & Custom App Development expertise for seamless e-commerce.
              </p>
            </div>
          </div>

          {/* Logo Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-items-center"
            style={{ gap: '48px 32px', marginBottom: '48px' }}
          >
            {techLogos.map((tech, i) => (
              <motion.div
                key={tech.name}
                className="w-full flex items-center justify-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              >
                <div
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 [&_svg]:h-full [&_svg]:w-auto"
                  style={{
                    height: '42px',
                    filter: 'brightness(0) invert(1)',
                  }}
                >
                  {tech.svg}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all button */}
          <div className="flex justify-center">
            <Link
              to="/technologies"
              className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-90"
              style={{ backgroundColor: '#fff', color: '#000', borderRadius: '9999px', padding: '14px 28px', fontSize: '15px' }}
            >
              <span>View all technologies</span>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ═══ SPECIALIZED SOLUTIONS ═══ */}
      <section className="section" style={{ backgroundColor: '#f9fafb', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px' }}>
            <div className="lg:sticky lg:top-32 self-start">
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Specialized Solutions</span>
              </div>
              <h2 className="font-display font-bold leading-tight text-black tracking-tight" style={{ fontSize: '42px', marginBottom: '24px' }}>
                Focused Services for Commerce Teams
              </h2>
              <p className="text-gray-500 font-light max-w-md" style={{ fontSize: '16px', marginTop: '8px', marginBottom: '32px' }}>
                These focused capabilities connect clearly to the problems growing stores actually need solved.
              </p>
              <Link to="/services/shopify" className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-80" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#000', borderRadius: '14px', padding: '12px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                All Services <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1" style={{ gap: '16px', paddingTop: '8px' }}>
              {specializedSolutions.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-white transition-all duration-300 hover:shadow-md"
                  style={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '20px 32px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-5 mb-4">
                    <div className="flex flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300" style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6' }}>
                      <item.icon className="w-5 h-5" style={{ color: '#000' }} />
                    </div>
                    <h3 className="font-display font-bold text-gray-900 m-0" style={{ fontSize: '20px' }}>{item.title}</h3>
                  </div>
                  <p className="leading-relaxed" style={{ color: '#4b5563', fontSize: '15px', paddingLeft: '68px', margin: 0 }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="mb-6">
            <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px' }}>
              <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>What We Do</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center" style={{ marginBottom: '64px' }}>
            <div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: '42px', margin: 0 }}>
                Full-Stack E-Commerce Solutions
              </h2>
              <p className="font-light leading-relaxed max-w-xl text-gray-500" style={{ fontSize: '18px', margin: 0 }}>
                A balanced mix of platform expertise, growth engineering, and custom product work for brands that need more than a template rollout.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end justify-center h-full">
              <Link
                to="/services"
                className="inline-flex items-center justify-center font-medium transition-colors hover:bg-gray-50"
                style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #d1d5db', borderRadius: '9999px', padding: '14px 32px', fontSize: '15px' }}
              >
                <span>Explore All Services</span>
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesForCards.slice(0, 8).map((service, i) => {
              const dummyImages = [
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              ];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                  style={{ borderRadius: '24px' }}
                >
                  <Link to={`/services/${service.slug}`} className="absolute inset-0 z-10" aria-label={service.title} />

                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative shrink-0">
                    <img
                      src={dummyImages[i] || dummyImages[0]}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-grow relative z-0" style={{ padding: '24px' }}>
                    <h6 className="font-display font-bold text-gray-900 leading-tight tracking-tight group-hover:text-black transition-colors mb-3" style={{ fontSize: '18px' }}>
                      {service.title}
                    </h6>
                    <p className="text-gray-500 font-light leading-relaxed line-clamp-3 mb-6" style={{ fontSize: '14px' }}>
                      {service.shortDesc}
                    </p>
                    <div className="mt-auto flex items-center text-gray-500 hover:text-black font-medium transition-colors" style={{ fontSize: '14px' }}>
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ VALUE SECTION ═══ */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="mb-6">
            <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px' }}>
              <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Why Task19</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center" style={{ marginBottom: '64px' }}>
            <div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: '42px', margin: 0 }}>
                Modern UI Needs More Than Pretty Screens
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end justify-center h-full">
              <p className="font-light leading-relaxed max-w-xl text-gray-500 lg:text-right" style={{ fontSize: '18px', margin: 0 }}>
                The strongest section design comes from alignment between messaging, interaction quality, visual rhythm, and reusable implementation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePillars.map((item, i) => {
              const valueImages = [
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80"
              ];
              const imageUrl = valueImages[i] || valueImages[0];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                  style={{ borderRadius: '24px' }}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative shrink-0">
                    <img
                      src={imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-grow relative z-0" style={{ padding: '32px' }}>
                    <h6 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-3" style={{ fontSize: '22px' }}>
                      {item.title}
                    </h6>
                    <p className="text-gray-500 font-light leading-relaxed line-clamp-3" style={{ fontSize: '15px' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS (Featured Stories) ═══ */}
      <section className="section" style={{ backgroundColor: '#f9fafb', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-gray-900 mb-4" style={{ fontSize: '42px', letterSpacing: '-0.02em' }}>
              Client Success Stories
            </h2>
            <div className="flex items-center justify-center gap-2 font-medium text-gray-800">
              <span style={{ fontSize: '15px' }}>4.5/5</span>
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-gray-500 ml-1" style={{ fontSize: '14px' }}>(Trusted by 148+ users)</span>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Maya Zong',
                  title: 'UI/UX Designer',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
                  content: 'I appreciate how simple and focused this platform is. It removes the clutter and helps me stay organized across multiple e-commerce projects.'
                },
                {
                  name: 'Ethan Miller',
                  title: 'Web Developer',
                  image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
                  content: 'Working with this team helps me manage multiple client setups without missing deadlines. The workflows give instant clarity on builds and deployments.'
                },
                {
                  name: 'Hannah Lee',
                  title: 'Content Writer',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
                  content: 'Tracking content migrations used to be difficult. The custom solutions provided made the entire transition process clear and completely reliable.'
                },
                {
                  name: 'Daniel Perez',
                  title: 'Software Engineer',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
                  content: 'The integrations are perfectly suited for modern engineering teams. I can quickly see what’s due and what’s completed without legacy blockers.'
                },
                {
                  name: 'Laura Kim',
                  title: 'Product Designer',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
                  content: 'The strategic consulting has helped me improve my delivery consistency with enterprise clients drastically.'
                },
                {
                  name: 'Priya Shah',
                  title: 'Marketing Specialist',
                  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
                  content: 'This keeps all my campaign technical requirements structured. I no longer rely on scattered notes or reminders.'
                }
              ].map((t, i) => (
                <div key={i} className="rounded-[24px] flex flex-col justify-between" style={{ backgroundColor: '#e5e7eb', padding: '32px', minHeight: '260px' }}>
                  <p className="text-gray-800 leading-relaxed mb-8 font-medium" style={{ fontSize: '15px' }}>
                    {t.content}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h5 className="font-display font-bold text-gray-900 m-0 leading-tight" style={{ fontSize: '15px' }}>{t.name}</h5>
                        <span className="text-gray-600" style={{ fontSize: '13px' }}>{t.title}</span>
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fade overlay and button */}
            <div className="absolute bottom-0 left-0 w-full h-56 pointer-events-none flex items-end justify-center pb-8" style={{ background: 'linear-gradient(to top, #f9fafb 15%, rgba(249, 250, 251, 0) 100%)' }}>
              <Link
                to="#"
                className="inline-flex items-center justify-center text-white rounded-full font-medium pointer-events-auto hover:bg-black transition-all"
                style={{ backgroundColor: '#111827', fontSize: '15px', padding: '16px 36px', lineHeight: '1', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                onClick={(e) => {
                  e.preventDefault();
                  // In a real app this would route to a reviews page
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                View all Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="mb-6">
            <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px' }}>
              <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Our Blog</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center" style={{ marginBottom: '40px' }}>
            <div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight" style={{ fontSize: '42px', margin: 0 }}>
                Insights & News
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end justify-center h-full">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center font-medium transition-colors hover:bg-gray-50"
                style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #d1d5db', borderRadius: '9999px', padding: '14px 32px', fontSize: '15px' }}
              >
                <span>View all insights</span>
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ...blogPosts,
              {
                slug: 'headless-commerce-architecture-2026',
                title: 'Architecting High-Performance Headless Commerce for Enterprise Brands',
                category: 'Architecture',
                date: 'September 19, 2022',
                readTime: '6 min read',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=360&fit=crop'
              }
            ].slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                style={{ borderRadius: '24px' }}
              >
                <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />

                <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md px-3 py-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '9999px' }}>
                    <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow relative z-0" style={{ padding: '32px' }}>
                  <div className="flex items-center justify-between text-gray-500 font-medium mb-4" style={{ fontSize: '13px', letterSpacing: '0.02em' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h5 className="font-display font-bold text-gray-900 leading-tight tracking-tight group-hover:text-black transition-colors line-clamp-3 mb-6" style={{ fontSize: '22px' }}>
                    {post.title}
                  </h5>
                  <div className="mt-auto flex items-center text-gray-500 hover:text-black font-medium transition-colors" style={{ fontSize: '14px' }}>
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px' }}>
            <div>
              <div className="inline-block bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '9999px', padding: '6px 16px', marginBottom: '24px' }}>
                <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Common questions</span>
              </div>
              <h2 className="font-display font-bold leading-tight text-black tracking-tight" style={{ fontSize: '42px', marginBottom: '24px' }}>
                Frequently<br />asked questions
              </h2>
              <p className="text-gray-500 font-light max-w-md" style={{ fontSize: '16px', marginTop: '8px', marginBottom: '32px' }}>
                Can't find what you're looking for? Reach out directly — we typically respond within 2 business hours.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-80" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#000', borderRadius: '14px', padding: '12px 24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div style={{ paddingTop: '8px' }}><FAQAccordion items={faqs.slice(0, 5)} /></div>
          </div>
        </div>
      </section>

      {/* <CTASection
        title="Proven Results. Trusted Partners."
        subtitle="Whether you need a complete rebuild, complex custom features, or strategic platform integration, our team is ready to deliver."
        primaryText="Let's Discuss Your Project"
        primaryTo="/contact"
        eyebrow="Proven Results"
      /> */}
    </>
  )
}
