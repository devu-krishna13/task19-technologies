import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/services' },
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
              className="lg:hidden flex items-center justify-center w-14 h-14 bg-[#0D1B4C] rounded-full shadow-lg text-white hover:bg-[#1B3B92] transition-colors border border-white/20"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] left-0 right-0 bottom-0 z-[90] bg-[#070D1E] pt-6 px-8 sm:px-12 pb-10 lg:hidden overflow-y-auto border-t border-white/10 shadow-2xl"
          >
            {/* Mobile Nav Links Container */}
            <div className="max-w-md mx-auto">
              <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{ color: location.pathname === link.to ? '#38BDF8' : '#FFFFFF' }}
                  className="group flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl transition-all duration-200 hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="font-display font-semibold text-lg tracking-normal">
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 my-5" />

              {/* Mobile Contact Info */}
              <div className="px-4 space-y-6 text-center">
                <a 
                  href="tel:+917012639646" 
                  style={{ color: '#FFFFFF' }} 
                  className="flex items-center justify-center gap-3 text-base font-medium text-white/80 hover:text-[#38BDF8] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <span>+91 70126 39646</span>
                </a>

                <a 
                  href="mailto:info@task19.com" 
                  style={{ color: '#FFFFFF' }} 
                  className="flex items-center justify-center gap-3 text-base font-medium text-white/80 hover:text-[#38BDF8] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <span>info@task19.com</span>
                </a>

                <Link
                  to="/contact"
                  style={{ color: '#FFFFFF' }}
                  className="mt-8 flex items-center justify-center gap-2 h-12 bg-gradient-to-r from-[#38BDF8] to-[#2E5FC6] text-white text-sm font-semibold rounded-full hover:brightness-110 transition-all shadow-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
