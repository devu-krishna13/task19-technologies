import { Helmet } from 'react-helmet-async'

const sections = [
  {
    title: 'Use of this website',
    body: 'The Task19 Technologies website is provided for general information about our services, case studies, insights, and contact channels. Content may be updated without prior notice.',
  },
  {
    title: 'Project proposals and estimates',
    body: 'Any timeline, scope, or pricing information shared through consultations or proposals remains subject to project discovery, agreed deliverables, and final contract terms.',
  },
  {
    title: 'Intellectual property',
    body: 'Unless otherwise stated, the content, design elements, copy, and materials presented on this website are owned by Task19 Technologies or used with permission.',
  },
  {
    title: 'Limitation of liability',
    body: 'While we aim to keep all content accurate and current, Task19 Technologies is not liable for direct or indirect loss arising solely from reliance on website content outside a signed service agreement.',
  },
]

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Task19 Technologies</title>
        <meta
          name="description"
          content="Read the Task19 Technologies terms of service for website use, proposals, intellectual property, and general limitations."
        />
      </Helmet>

      <section className="pt-40 pb-24 bg-primary">
        <div className="container">
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-accent" />
            <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Legal</span>
          </span>
          <h1 className="font-display font-light text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
            Terms of Service
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl">
            These terms outline the general conditions for using the website and the principles that support our client engagements.
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
        </div>
      </section>
    </>
  )
}
