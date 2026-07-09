import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services/shopify' },
  { label: 'Apps', to: '/shopify-apps' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed top-4 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Pill */}
            <Link 
              to="/" 
              className="flex items-center gap-3 bg-white h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ paddingLeft: '12px', paddingRight: '32px' }}
              aria-label="Task19 Technologies Home"
            >
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-display font-bold text-white text-sm">
                T19
              </div>
              <span className="font-display font-bold text-xl tracking-tight" style={{ color: '#000' }}>
                Task19
              </span>
            </Link>

            {/* Desktop Nav Pill */}
            <nav className="hidden lg:flex items-center bg-white h-14 rounded-full shadow-lg" style={{ paddingLeft: '80px', paddingRight: '80px', gap: '40px' }} aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-body text-[15px] font-medium transition-colors duration-300 hover:opacity-70 whitespace-nowrap"
                  style={{ color: location.pathname === link.to ? '#2563eb' : '#000' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions Pill */}
            <div className="hidden lg:flex items-center bg-white h-14 rounded-full shadow-lg" style={{ paddingLeft: '12px', paddingRight: '12px', gap: '12px' }}>
              <a href="tel:+917012639646" className="w-10 h-10 flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
                <Phone className="w-4 h-4" style={{ color: '#000' }} />
              </a>
              <Link to="/contact" className="w-10 h-10 flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
                <Mail className="w-4 h-4" style={{ color: '#000' }} />
              </Link>
            </div>

            {/* Mobile Toggle Pill */}
            <button
              className="lg:hidden flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-surface pt-28 px-6 lg:hidden"
          >
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`py-4 px-6 rounded-2xl font-display font-semibold text-2xl transition-colors duration-200 ${
                    location.pathname === link.to ? 'bg-secondary text-accent' : 'text-text-primary hover:bg-secondary'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-8 px-6 space-y-6">
                <a href="tel:+917012639646" className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">+91 70126 39646</span>
                </a>
                <a href="mailto:info@task19.com" className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">info@task19.com</span>
                </a>
                <Link
                  to="/contact"
                  className="mt-6 flex items-center justify-center gap-2 h-14 bg-primary text-white text-[15px] font-medium rounded-full hover:bg-primary-light transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
