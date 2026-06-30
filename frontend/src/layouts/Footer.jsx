import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const serviceLinks = [
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'UI/UX Design', to: '/services/ui-ux-design' },
  { label: 'Cloud Solutions', to: '/services/cloud-solutions' },
  { label: 'AI Development', to: '/services/ai-development' },
  { label: 'DevOps', to: '/services/devops' },
]

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Industries', to: '/industries' },
  { label: 'Technologies', to: '/technologies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
]

const techLinks = [
  'React.js', 'Node.js', 'Laravel', 'Flutter', 'Python', 'AWS', 'Docker', 'Shopify',
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center font-display font-bold text-white text-[0.85rem] rounded-[2px]">T19</div>
              <span className="font-display font-bold text-xl text-white">Task19</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A premier technology partner delivering enterprise-grade digital solutions across web, mobile, cloud, and AI — turning complex challenges into competitive advantages.
            </p>
            <div className="space-y-3">
              <a href="tel:+917012639646" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+91 70126 39646</span>
              </a>
              <a href="mailto:info@task19.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>info@task19.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kathrikadavu Junction, Ernakulam, Kerala 682017, India</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/50 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-sm tracking-[0.1em] uppercase">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white group transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-sm tracking-[0.1em] uppercase">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white group transition-colors duration-300">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Tech */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6 text-sm tracking-[0.1em] uppercase">Stay Updated</h3>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              Get the latest tech insights and company updates delivered to your inbox.
            </p>
            <form className="flex gap-2 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm
                           placeholder-white/30 focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <h3 className="font-display font-semibold text-white mb-4 text-sm tracking-[0.1em] uppercase">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {techLinks.map((tech) => (
                <span key={tech}
                  className="px-2.5 py-1 text-xs font-display font-medium text-white/50 border border-white/10 hover:border-accent/40 hover:text-white transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Task19 Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-white transition-colors duration-300">Terms of Service</Link>
            <Link to="/sitemap" className="text-xs text-white/40 hover:text-white transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
