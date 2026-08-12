import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const sections = [
  {
    title: 'Information we collect',
    body: 'We collect contact details, project information, and communication history when you submit a form, request an audit, or begin a project discussion with Task19 Technologies.',
  },
  {
    title: 'How we use information',
    body: 'Your information is used to respond to enquiries, prepare proposals, improve service delivery, and maintain communication related to project execution and support.',
  },
  {
    title: 'Data protection',
    body: 'We use reasonable administrative and technical safeguards to protect client information and limit access to people involved in delivery, support, or required business operations.',
  },
  {
    title: 'Third-party services',
    body: 'Where needed, trusted third-party providers may support hosting, analytics, communication, or payment workflows. They only receive data necessary for their specific function.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Task19 Technologies</title>
        <meta
          name="description"
          content="Read the privacy policy for Task19 Technologies and how we collect, use, and protect information shared with us."
        />
      </Helmet>

      <section className="pt-40 pb-24 bg-primary">
        <div className="container">
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Legal</span>
          </span>
          <h1 className="font-display font-light text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
            Privacy Policy
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
            This page explains how Task19 Technologies handles the information you share with us when you contact the team or engage our services.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container container-sm">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-border pb-8">
                <h2 className="font-display text-2xl font-medium text-text-primary mb-4">{section.title}</h2>
                <p className="text-text-secondary leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-display font-semibold hover:bg-primary-light transition-all duration-300">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
