import { Code } from 'lucide-react'
import ServicePageTemplate from '../../components/layouts/ServicePageTemplate'

export default function WebDevelopment() {
  return (
    <ServicePageTemplate 
      metaTitle="Custom Web Development — Task19 Technologies"
      metaDesc="High-performance, scalable web applications and enterprise websites built with modern frameworks like React and Next.js."
      heroBadge="Engineering Excellence"
      heroTitle="Custom Web"
      heroSubtitle="Development"
      heroDesc="We build fast, secure, and highly scalable web applications that solve complex business problems. Our engineering team focuses on pristine code quality and exceptional user experiences."
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
      serviceTitle="Modern Web Architecture"
      serviceDesc="From corporate portals to complex SaaS platforms, we architect web solutions using the latest, most reliable frameworks. We prioritize Core Web Vitals, robust security, and seamless API integrations."
      features={[
        'Single Page Applications (React, Vue, Angular)',
        'Server-Side Rendered apps (Next.js, Nuxt)',
        'Enterprise-grade API development (Node.js, Python)',
        'Headless CMS integration (Sanity, Contentful, Strapi)',
        'Progressive Web Apps (PWAs)',
        'Cloud infrastructure & database architecture'
      ]}
      results={[
        '99.9% application uptime',
        'Perfect Lighthouse performance scores',
        'Military-grade security protocols'
      ]}
      icon={Code}
      faqs={[
        { question: 'Do you provide full-stack development?', answer: 'Yes, we handle everything from database architecture and API development on the backend to highly interactive user interfaces on the frontend.' },
        { question: 'Will my web application be mobile responsive?', answer: 'Absolutely. Every web application we build is designed with a mobile-first philosophy, ensuring perfect functionality across all device sizes.' }
      ]}
    />
  )
}
