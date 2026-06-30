import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import PageLoader from './components/ui/PageLoader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
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
const Industries = lazy(() => import('./pages/Industries'))
const Technologies = lazy(() => import('./pages/Technologies'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))

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
            <Route path="/industries" element={<Industries />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<CaseStudy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </MainLayout>
  )
}
