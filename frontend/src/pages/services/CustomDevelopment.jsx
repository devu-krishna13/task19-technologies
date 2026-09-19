import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Server, Database, Smartphone, Cloud, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PageHero from '../../components/ui/PageHero';
const features = [
  {
    title: 'Custom Web Applications',
    desc: 'We architect highly scalable, data-intensive web applications using modern JavaScript frameworks like React, Next.js, Vue, and robust backends tailored to your exact business logic.',
    icon: Code2
  },
  {
    title: 'Bespoke SaaS Platforms',
    desc: 'From initial MVP to enterprise-grade scalability. We specialize in multi-tenant SaaS architecture, secure subscription billing integration, and frictionless onboarding flows.',
    icon: Server
  },
  {
    title: 'API Development & Integrations',
    desc: 'Connect disparate systems securely. We build robust RESTful and GraphQL APIs to seamlessly integrate third-party services, legacy databases, and mobile applications.',
    icon: Database
  },
  {
    title: 'Cross-Platform Mobile Apps',
    desc: 'Extend your digital presence to iOS and Android. We utilize React Native and Flutter to deliver native-like mobile experiences from a single, maintainable codebase.',
    icon: Smartphone
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Deploy with confidence. We configure secure, auto-scaling cloud environments on AWS and Google Cloud, coupled with automated CI/CD pipelines for rapid iterations.',
    icon: Cloud
  },
  {
    title: 'Legacy System Modernization',
    desc: 'Migrate outdated, monolithic systems into modern, agile microservices. Improve your security posture, reduce tech debt, and accelerate your development lifecycle.',
    icon: Layers
  }
];

export default function CustomDevelopment() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Custom Software Development & SaaS | Task19 Technologies</title>
        <meta name="description" content="Bespoke software development agency specializing in scalable web apps, SaaS platforms, API integrations, and cross-platform mobile development." />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        badgeText="Engineering Excellence"
        title={<>Custom Software <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Development.</span></>}
        description="When off-the-shelf solutions aren't enough, we engineer bespoke software, web applications, and scalable SaaS platforms tailored precisely to your unique business challenges."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      >
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-xl transition-all hover:scale-105"
        >
          Discuss Your Idea <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </PageHero>

      {/* What We Do Section */}
      <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                At Task19 Technologies, we solve complex operational challenges by building high-end, bespoke software solutions. We partner with enterprises and visionary startups to architect systems that scale securely.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Whether you are conceptualizing a disruptive new SaaS platform, modernizing a legacy enterprise system, or building a high-traffic React Native mobile application, our engineering team utilizes cutting-edge stacks (Node.js, Next.js, Python) to deliver resilient and flawless digital products.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[2rem] transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80" 
                alt="Custom Software Development Code" 
                className="relative z-10 rounded-[2rem] shadow-2xl object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Engineered to Scale
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              We leverage modern technology stacks to build resilient, fast, and highly secure digital products. From conceptualization to deployment, we build software that lasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 text-gray-400 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all duration-300 shadow-sm">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  {/* Replaced h3 with h5 as requested */}
                  <h5 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">{feature.title}</h5>
                  <p className="text-gray-600 font-light leading-relaxed text-[15px]">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Have a complex technical problem?</h2>
          <p className="text-lg text-gray-600 font-light mb-10 max-w-2xl mx-auto">
            Let's build a custom software solution that automates workflows, connects disparate systems, and accelerates your operational growth.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-black hover:shadow-xl transition-all hover:scale-105"
          >
            Start Building <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
