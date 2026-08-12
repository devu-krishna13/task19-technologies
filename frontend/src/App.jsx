import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import PageLoader from './components/ui/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ShopifyServices = lazy(() => import('./pages/services/ShopifyServices'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const MobileAppDevelopment = lazy(() => import('./pages/services/MobileAppDevelopment'))
const UIUXDesign = lazy(() => import('./pages/services/UIUXDesign'))
const SoftwareDevelopment = lazy(() => import('./pages/services/SoftwareDevelopment'))
const EnterpriseSolutions = lazy(() => import('./pages/services/EnterpriseSolutions'))
const CloudSolutions = lazy(() => import('./pages/services/CloudSolutions'))
const AIDevelopment = lazy(() => import('./pages/services/AIDevelopment'))
const DevOps = lazy(() => import('./pages/services/DevOps'))
const QATesting = lazy(() => import('./pages/services/QATesting'))
const Maintenance = lazy(() => import('./pages/services/Maintenance'))
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'))
const ShopifyApps = lazy(() => import('./pages/ShopifyApps'))
const Industries = lazy(() => import('./pages/Industries'))
const Technologies = lazy(() => import('./pages/Technologies'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const Sitemap = lazy(() => import('./pages/Sitemap'))

export default function App() {
  const location = useLocation()
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* Shopify-focused services */}
            <Route path="/services/shopify" element={<ShopifyServices />} />
            <Route path="/services/shopify-cro" element={<ShopifyServices />} />
            <Route path="/services/woocommerce" element={<ShopifyServices />} />
            <Route path="/services/shopify-apps-dev" element={<ShopifyServices />} />
            {/* Standard services */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/ai-development" element={<AIDevelopment />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/qa-testing" element={<QATesting />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            {/* Shopify Apps page */}
            <Route path="/shopify-apps" element={<ShopifyApps />} />
            {/* WordPress-style URL redirects */}
            <Route path="/shopify-services" element={<Navigate to="/services/shopify" replace />} />
            <Route path="/shopify-services/" element={<Navigate to="/services/shopify" replace />} />
            <Route path="/shopify-apps-list" element={<Navigate to="/shopify-apps" replace />} />
            <Route path="/shopify-apps-list/" element={<Navigate to="/shopify-apps" replace />} />
            <Route path="/recent-portfolio" element={<Navigate to="/portfolio" replace />} />
            <Route path="/recent-portfolio/" element={<Navigate to="/portfolio" replace />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
            <Route path="/contact-us/" element={<Navigate to="/contact" replace />} />
            {/* Other pages */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </MainLayout>
  )
}
