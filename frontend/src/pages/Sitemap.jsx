import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Main pages',
    links: [
      ['Home', '/'],
      ['About', '/about'],
      ['Services', '/services'],
      ['Portfolio', '/portfolio'],
      ['Blog', '/blog'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Commerce pages',
    links: [
      ['Shopify Services', '/services/shopify'],
      ['Shopify Apps', '/shopify-apps'],
      ['Industries', '/industries'],
      ['Technologies', '/technologies'],
      ['Careers', '/careers'],
    ],
  },
  {
    title: 'Legal pages',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms of Service', '/terms'],
    ],
  },
]

export default function Sitemap() {
  return (
    <>
      <Helmet>
        <title>Sitemap — Task19 Technologies</title>
        <meta
          name="description"
          content="Browse the sitemap for Task19 Technologies and navigate quickly to our services, portfolio, blog, and legal pages."
        />
      </Helmet>

      <section className="pt-40 pb-24 bg-primary">
        <div className="container">
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Navigation</span>
          </span>
          <h1 className="font-display font-light text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
            Sitemap
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
            A simple directory of the main pages inside the site so visitors can reach the right section quickly.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="border border-border p-8">
                <h2 className="font-display text-xl font-medium text-text-primary mb-5">{section.title}</h2>
                <div className="space-y-3">
                  {section.links.map(([label, href]) => (
                    <Link key={href} to={href} className="block text-text-secondary hover:text-accent transition-colors duration-300">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
