import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'

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
  { label: 'Resource Augmentation', to: '/resources' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Our Clients', to: '/clients' },
  { label: 'Submit Feedback', to: '/feedback' },
  { label: 'Sitemap', to: '/sitemap' },
]

const connectInfo = [
  { label: 'General Enquiry', value: '+91 70126 39646' },
  { label: 'Sales Enquiry', value: '+91 70126 39647' },
  { label: 'Email', value: 'info@task19.com' },
  { label: 'HR Enquiry', value: '+91 70126 39648' },
  { label: 'Whatsapp (Sales)', value: '+91 70126 39649' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/task19', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050f28', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '48px' }}>

        {/* Top CTA Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10" style={{ marginBottom: '96px' }}>
          <div>
            <h4 className="font-display font-bold leading-tight" style={{ fontSize: '40px', color: '#ffffff', tracking: '-0.02em' }}>
              Get started now!
            </h4>
            <p style={{ color: '#9ca3af', fontSize: '18px', marginTop: '16px' }}>It takes less than a minute of your time.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#000000', borderRadius: '14px', padding: '14px 32px', fontSize: '15px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
          >
            Request a quote <span className="ml-3 font-normal text-[15px]">→</span>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8" style={{ marginBottom: '80px' }}>
          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-6" style={{ fontSize: '15px', color: '#ffffff' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:opacity-100" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-6" style={{ fontSize: '15px', color: '#ffffff' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:opacity-100" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="font-display font-bold mb-6" style={{ fontSize: '15px', color: '#ffffff' }}>Other</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {otherLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:opacity-100" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold mb-6" style={{ fontSize: '15px', color: '#ffffff' }}>Connect</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {connectInfo.map((info) => (
                <li key={info.label} className="grid grid-cols-[135px_1fr] items-start gap-2">
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{info.label}</span>
                  <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: '500' }}>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6" style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full lg:w-auto" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            <span>TASK19 © {new Date().getFullYear()} All rights reserved</span>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="transition-colors hover:opacity-100" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</Link>
              <Link to="/terms" className="transition-colors hover:opacity-100" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms & Conditions</Link>
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

