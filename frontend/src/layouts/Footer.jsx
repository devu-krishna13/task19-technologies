import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram, Youtube, Github } from 'lucide-react'

const serviceLinks = [
  { label: 'Shopify Store Development', to: '/services/shopify' },
  { label: 'Shopify Customization & CRO', to: '/services/shopify-cro' },
  { label: 'WooCommerce Development', to: '/services/woocommerce' },
  { label: 'Custom Shopify Apps', to: '/services/shopify-apps-dev' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'UI/UX Design', to: '/services/ui-ux-design' },
  { label: 'Cloud & DevOps', to: '/services/cloud-solutions' },
]

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technologies', to: '/technologies' },
]

const otherLinks = [
  { label: 'Shopify Apps', to: '/shopify-apps' },
  { label: 'Blog & Insights', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/task19', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      {/* Main Footer — Full 4-Column Layout */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand + Connect Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-accent flex items-center justify-center font-display font-bold text-white text-xs">T19</div>
              <span className="font-display font-semibold text-xl text-white">Task19</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Revenue-focused Shopify, WooCommerce, and custom commerce engineering for ambitious digital brands.
            </p>

            {/* Multiple Contact Lines */}
            <div className="space-y-3 mb-6">
              <a href="tel:+917012639646" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+91 70126 39646</span>
              </a>
              <a href="mailto:info@task19.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@task19.com</span>
              </a>
              <a href="mailto:careers@task19.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>careers@task19.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kathrikadavu Junction, Ernakulam, Kerala 682017, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Link to="/" className="px-3 py-1.5 border border-white/10 text-[11px] font-display tracking-[0.2em] uppercase text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">Home</Link>
              <Link to="/services/shopify" className="px-3 py-1.5 border border-white/10 text-[11px] font-display tracking-[0.2em] uppercase text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">Services</Link>
              <Link to="/shopify-apps" className="px-3 py-1.5 border border-white/10 text-[11px] font-display tracking-[0.2em] uppercase text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">Apps</Link>
              <Link to="/portfolio" className="px-3 py-1.5 border border-white/10 text-[11px] font-display tracking-[0.2em] uppercase text-white/60 hover:text-white hover:border-white/30 transition-all duration-300">Portfolio</Link>
            </div>

            {/* Social Icons — 6 icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-medium text-white mb-6 text-sm tracking-[0.1em] uppercase">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-sm text-white/50 hover:text-white group transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-medium text-white mb-6 text-sm tracking-[0.1em] uppercase">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-sm text-white/50 hover:text-white group transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other + Newsletter Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-medium text-white mb-6 text-sm tracking-[0.1em] uppercase">Other</h3>
            <ul className="space-y-3 mb-8">
              {otherLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-sm text-white/50 hover:text-white group transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-medium text-white mb-4 text-xs tracking-[0.1em] uppercase">Stay Updated</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-white/20 focus-within:border-accent transition-colors duration-300">
                <input type="email" placeholder="Your email address" className="w-full bg-transparent text-white text-sm py-3 focus:outline-none placeholder-white/30" />
              </div>
              <button type="submit" className="w-full py-3 bg-accent text-white text-sm font-display font-semibold hover:bg-accent-hover transition-colors duration-300 flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar — with legal links */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Task19 Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/30 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link to="/sitemap" className="text-xs text-white/30 hover:text-white transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
