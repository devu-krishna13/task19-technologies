import { Code2 } from 'lucide-react'
import ServicePageTemplate from '../../components/layouts/ServicePageTemplate'

export default function CustomShopifyApps() {
  return (
    <ServicePageTemplate 
      metaTitle="Custom Shopify App Development — Task19 Technologies"
      metaDesc="Private and public Shopify App Store development using React, Node.js, and Polaris guidelines."
      heroBadge="Custom Solutions"
      heroTitle="Custom Shopify"
      heroSubtitle="App Development"
      heroDesc="When the Shopify App Store doesn't have what you need, we build it. From private backend business automations to public SaaS apps deployed to thousands of merchants."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
      serviceTitle="Extending Shopify's Capabilities"
      serviceDesc="We engineer scalable applications using Shopify's official App Bridge, REST, and GraphQL Admin APIs. Whether you need to sync custom logistics or build a totally new merchant tool, we have the technical depth to deliver."
      features={[
        'Private Shopify apps for internal store automation',
        'Public Shopify App Store app development (React + Node.js)',
        'Shopify Plus Checkout Extensibility',
        'Integration with bespoke ERP, CRM, and fulfillment systems',
        'Webhook-based event automation architecture',
        'UI design adhering strictly to Shopify Polaris guidelines'
      ]}
      results={[
        '4 public apps currently on the App Store',
        '200+ active merchant installs',
        'Seamless Shopify Admin integration'
      ]}
      icon={Code2}
      faqs={[
        { question: 'What makes a custom app different from a public app?', answer: 'A private custom app is built exclusively for your store\'s unique business logic. A public app is designed for scale and listed on the App Store for any merchant to install. We build both.' },
        { question: 'What tech stack do you use for Shopify Apps?', answer: 'We follow Shopify\'s best practices, primarily using React, Node.js, Remix, Prisma, and GraphQL, ensuring fast, secure, and easily maintainable applications.' }
      ]}
    />
  )
}
