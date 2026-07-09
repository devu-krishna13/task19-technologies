import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Recent Portfolio', to: '/portfolio' },
  { label: 'Shopify Service Page', to: '/services/shopify' },
  { label: 'Shopify Apps', to: '/shopify-apps' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
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

  const isHome = location.pathname === '/'
  const headerBg = scrolled
    ? 'bg-primary/95 backdrop-blur-xl shadow-sm border-b border-white/10'
    : isHome
      ? 'bg-black/30 backdrop-blur-md border-b border-white/5'
      : 'bg-primary/95 backdrop-blur-xl border-b border-white/10'
  const textColor = 'text-white'
  const logoColor = 'text-white'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${headerBg}`}>
        <div className="container">
          <div className="flex items-center justify-between h-[72px] gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Task19 Technologies Home">
              <div className="w-9 h-9 bg-accent flex items-center justify-center font-display font-bold text-white text-xs">
                T19
              </div>
              <span className={`font-display font-semibold text-xl tracking-tight transition-colors duration-300 ${logoColor}`}>
                Task19
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-9 xl:gap-11" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`group relative font-body text-sm font-medium transition-colors duration-300 hover:text-white ${textColor} ${
                    location.pathname === link.to ? 'text-white' : 'text-white/80'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 top-full mt-2 h-px bg-accent transition-all duration-300 ${
                      location.pathname === link.to ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <a
                href="tel:+917012639646"
                className={`flex items-center gap-2 text-sm font-medium leading-none transition-colors duration-300 hover:text-white/80 ${textColor}`}
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 70126 39646</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden transition-colors duration-300 ${textColor}`}
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-primary overflow-y-auto lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-border-dark">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-accent flex items-center justify-center font-display font-bold text-white text-xs">T19</div>
                <span className="font-display font-semibold text-xl text-white">Task19</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="px-6 pt-6 pb-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`block py-5 border-b border-border-dark font-display font-light text-xl text-white hover:text-accent transition-colors duration-200 ${
                    location.pathname === link.to ? 'text-accent' : ''
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}



              {/* Mobile Contact Info */}
              <div className="pt-8 space-y-5">
                <a href="tel:+917012639646" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+91 70126 39646</span>
                </a>
                <a href="mailto:info@task19.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">info@task19.com</span>
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-display font-semibold transition-all duration-300 hover:bg-accent-hover w-full justify-center mt-4"
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
