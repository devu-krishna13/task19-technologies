import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Apps', to: '/shopify-apps' },
  { label: 'Blog', to: '/blog' },
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
      <header className={`fixed top-4 left-0 right-0 transition-all duration-500 px-4 md:px-8`} style={{ zIndex: 100 }}>
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
            <nav className="hidden lg:flex items-center bg-white h-14 rounded-full shadow-lg" style={{ paddingLeft: '64px', paddingRight: '64px', gap: '32px' }} aria-label="Main navigation">
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
              type="button"
              className="lg:hidden flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-colors border border-white/20"
              style={{ backgroundColor: '#0D1B4C' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#050f28] bg-opacity-95 backdrop-blur-xl pt-28 px-6 pb-8 lg:hidden overflow-y-auto flex flex-col justify-start"
            style={{ zIndex: 90 }}
          >
            {/* Nav Links */}
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  key={link.label}
                >
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between py-5 border-b border-white/10 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className="font-display font-medium text-[20px] tracking-tight transition-colors duration-300"
                      style={{ color: location.pathname === link.to ? '#ffffff' : 'rgba(255,255,255,0.6)' }}
                    >
                      {link.label}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Contact & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <a href="tel:+917012639646" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-medium">+91 70126 39646</span>
                </a>
                <a href="mailto:info@task19.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-medium">info@task19.com</span>
                </a>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 h-14 bg-white text-[15px] font-medium rounded-2xl hover:bg-gray-100 transition-colors mt-2"
                onClick={() => setMobileOpen(false)}
                style={{ color: '#000000' }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4" style={{ color: '#000000' }} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
