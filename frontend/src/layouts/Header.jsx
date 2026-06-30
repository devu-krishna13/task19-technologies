import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react'
import Button from '../components/ui/Button'

const serviceLinks = [
  { label: 'Web Development', to: '/services/web-development', desc: 'Modern, scalable web solutions' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development', desc: 'iOS & Android native apps' },
  { label: 'UI/UX Design', to: '/services/ui-ux-design', desc: 'User-centered design systems' },
  { label: 'Software Development', to: '/services/software-development', desc: 'Custom enterprise software' },
  { label: 'Enterprise Solutions', to: '/services/enterprise-solutions', desc: 'ERP, CRM & automation' },
  { label: 'Cloud Solutions', to: '/services/cloud-solutions', desc: 'AWS, Azure, GCP migration' },
  { label: 'AI Development', to: '/services/ai-development', desc: 'Machine learning & Gen AI' },
  { label: 'DevOps', to: '/services/devops', desc: 'CI/CD & infrastructure' },
  { label: 'QA & Testing', to: '/services/qa-testing', desc: 'Quality assurance services' },
  { label: 'Maintenance & Support', to: '/services/maintenance', desc: 'Ongoing tech support' },
  { label: 'Digital Transformation', to: '/services/digital-transformation', desc: 'Strategic modernization' },
]

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
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaMenuOpen(false)
  }, [location])

  const isHomePage = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-border shadow-sm`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" aria-label="Task19 Technologies Home">
              <div className="w-10 h-10 bg-accent flex items-center justify-center font-display font-bold text-white text-[0.85rem] rounded-[2px]">
                T19
              </div>
              <span className="font-display font-bold text-xl tracking-tight transition-colors duration-300 text-text-primary">
                Task19
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasMenu ? (
                  <button
                    key={link.label}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                    className={`flex items-center gap-1 font-body text-[0.9375rem] font-medium transition-colors duration-300 text-text-primary hover:text-accent
                      ${megaMenuOpen ? 'text-accent' : ''}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="font-body text-[0.9375rem] font-medium transition-colors duration-300 text-text-primary hover:text-accent"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+917012639646"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 text-text-primary hover:text-accent"
              >
                <Phone className="w-4 h-4" />
                <span>+91 70126 39646</span>
              </a>
              <Button to="/contact" variant="primary" size="sm" arrow>
                Get a Quote
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden transition-colors duration-300 text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl"
            >
              <div className="container py-10">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-4 border-r border-border pr-8">
                    <p className="text-xs font-display font-semibold tracking-[0.2em] uppercase text-accent mb-4">Our Services</p>
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                      End-to-End Digital Solutions
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      From strategy to deployment, we deliver comprehensive technology services that drive measurable business growth.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm font-display font-semibold text-accent hover:gap-3 transition-all duration-300"
                    >
                      View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-2">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="group flex flex-col p-4 hover:bg-secondary transition-colors duration-200"
                        >
                          <span className="font-display text-sm font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors duration-200">
                            {s.label}
                          </span>
                          <span className="text-xs text-text-muted">{s.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-white overflow-y-auto lg:hidden"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-border">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent flex items-center justify-center font-display font-bold text-white text-[0.85rem] rounded-[2px]">T19</div>
                <span className="font-display font-bold text-xl text-text-primary">Task19</span>
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6 text-text-primary" />
              </button>
            </div>
            <nav className="px-6 py-8 space-y-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-4 border-b border-border font-display font-semibold text-text-primary"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block py-2.5 text-sm text-text-secondary hover:text-accent transition-colors duration-200 border-b border-border/50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {navLinks.filter(l => !l.hasMenu).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block py-4 border-b border-border font-display font-semibold text-text-primary hover:text-accent transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8 space-y-4">
                <a href="tel:+917012639646" className="flex items-center gap-3 text-text-secondary">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+91 70126 39646</span>
                </a>
                <a href="mailto:info@task19.com" className="flex items-center gap-3 text-text-secondary">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>info@task19.com</span>
                </a>
                <Button to="/contact" variant="primary" size="md" arrow className="w-full justify-center">
                  Get a Free Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
