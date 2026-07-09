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
    <footer className="bg-black text-white">
      <div className="container pt-20 pb-12 lg:pt-28 lg:pb-16">

        {/* Top CTA Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 lg:mb-28 gap-10">
          <div>
            <h4 className="font-display font-light text-white leading-[1.08]" style={{ fontSize: '40px' }}>
              Get started now!
            </h4>
            <p className="text-white/60 text-lg font-light mt-4">It takes less than a minute of your time.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-light border border-white/40 bg-transparent text-white hover:bg-black hover:text-white transition-all duration-300 flex-shrink-0"
          >
            Request a quote <span className="ml-3 font-normal text-[15px]">→</span>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Company */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 text-[14px]">Company</h4>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] font-light text-white/70 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 text-[14px]">Services</h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] font-light text-white/70 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 text-[14px]">Other</h4>
            <ul className="space-y-3.5">
              {otherLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] font-light text-white/70 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 text-[14px]">Connect</h4>
            <ul className="space-y-3.5">
              {connectInfo.map((info) => (
                <li key={info.label} className="grid grid-cols-[135px_1fr] items-start gap-2">
                  <span className="text-[13px] font-light text-white/60">{info.label}</span>
                  <span className="text-[13px] font-light text-white">: {info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Add mb-8 (mobile) and lg:mb-12 (desktop) to the top-level div here */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 pt-6 mb-8 lg:mb-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[12px] font-light text-white/50 w-full lg:w-auto">
            <span>TASK19 © {new Date().getFullYear()} All rights reserved</span>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          <div className="flex items-center gap-6 justify-center w-full lg:w-auto">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="text-white/60 hover:text-white transition-colors duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

