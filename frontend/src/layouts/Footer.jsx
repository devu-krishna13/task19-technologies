import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Works', to: '/portfolio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

const serviceLinks = [
  { label: 'Shopify Store Development', to: '/services/shopify' },
  { label: 'WooCommerce Development', to: '/services/woocommerce' },
  { label: 'Custom Shopify Apps', to: '/services/shopify-apps-dev' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'UI/UX Design', to: '/services/ui-ux-design' },
]

const otherLinks = [
  { label: 'Partnership', to: '/partnership' },
  { label: 'Awards and Recognitions', to: '/awards' },
  { label: 'Insights', to: '/blog' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Our Clients', to: '/clients' },
  { label: 'Submit Feedback', to: '/feedback' },
]

const connectInfo = [
  { label: 'Sales Enquiry', value: 'Sales@task19.com' },
  { label: 'General Enquiry', value: 'info@task19.com' },
  { label: 'HR Enquiry', value: 'Hr@task19.com' },
  { label: 'Whatsapp (Sales)', value: '+91 70126 39646' },
  { label: 'Locations', value: 'Kochi & Calicut, India' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/task19-technologies/', label: 'LinkedIn' },
  { icon: Youtube, href: 'http://www.youtube.com/@Task19Technologies', label: 'Youtube' },
  { icon: Instagram, href: 'https://www.instagram.com/tasknineteen/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1BUtfhNHxW/', label: 'Facebook' },
  { icon: XIcon, href: 'https://x.com/Task19_', label: 'X' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050f28', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container py-12 md:py-20">

        {/* Top CTA Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-10 mb-12 md:mb-20">
          <div>
            <h4 className="font-display font-bold leading-tight text-[32px] md:text-[40px] text-white tracking-[-0.02em]">
              Get started now!
            </h4>
            <p className="text-gray-400 text-base md:text-lg mt-2 md:mt-4">It takes less than a minute of your time.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-90 bg-white rounded-xl md:rounded-2xl px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-[15px] shadow-sm"
            style={{ color: '#000000' }}
          >
            Request a quote <span className="ml-2 md:ml-3 font-normal">→</span>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 lg:gap-8 mb-12 md:mb-20">
          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-4 md:mb-6 text-sm md:text-[15px] text-white">Company</h4>
            <ul className="flex flex-col gap-3 md:gap-3.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:opacity-100 text-[13px] md:text-sm text-white/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-4 md:mb-6 text-sm md:text-[15px] text-white">Services</h4>
            <ul className="flex flex-col gap-3 md:gap-3.5">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:opacity-100 text-[13px] md:text-sm text-white/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="font-display font-bold mb-4 md:mb-6 text-sm md:text-[15px] text-white">Other</h4>
            <ul className="flex flex-col gap-3 md:gap-3.5">
              {otherLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:opacity-100 text-[13px] md:text-sm text-white/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold mb-4 md:mb-6 text-sm md:text-[15px] text-white">Connect</h4>
            <ul className="flex flex-col gap-3 md:gap-3.5">
              {connectInfo.map((info) => (
                <li key={info.label} className="flex flex-col xl:grid xl:grid-cols-[120px_1fr] items-start gap-1 xl:gap-2">
                  <span className="text-[12px] md:text-[13px] text-white/50 xl:text-white/70">{info.label}</span>
                  <span className="text-[13px] md:text-sm text-white font-medium">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full lg:w-auto text-[12px] md:text-[13px] text-white/50">
            <span>TASK19 © {new Date().getFullYear()} All rights reserved</span>
            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/privacy-policy" className="transition-colors hover:opacity-100 text-white/50">Privacy Policy</Link>
              <Link to="/terms" className="transition-colors hover:opacity-100 text-white/50">Terms & Conditions</Link>
            </div>
          </div>

          <div className="flex items-center gap-6 justify-center w-full lg:w-auto">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="transition-colors duration-300 hover:opacity-100" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

