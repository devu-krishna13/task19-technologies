import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Layers, Smartphone, Globe, Cloud, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Us — Task19 Technologies</title>
        <meta name="description" content="Founded in 2017, Task19 Technologies is a dynamic software development company specializing in scalable SaaS, mobile apps, and custom software." />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-primary hero-section-wrapper min-h-[500px] h-[70svh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
            alt="Task19 Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.3) 0%, rgba(5, 15, 35, 0.95) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-20 md:pt-0">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8"
            >
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Company Profile</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Building Scalable <br />
                <em className="font-serif-italic not-italic text-white/40">Digital Solutions.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights (Stats) ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '100+', label: 'Active Sellers' },
              { value: '10+', label: 'SaaS Platforms' },
              { value: '8k+', label: 'Community Members' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col p-8 bg-[#f8f9fc] rounded-[24px] border border-gray-100 hover:border-[#013Ad6]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 text-center md:text-left"
              >
                <div className="font-display font-bold text-[#013Ad6] mb-2 text-4xl md:text-5xl leading-none">
                  {stat.value}
                </div>
                <p className="text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-gray-900 transition-colors duration-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story, Vision & Mission ── */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-block bg-white mb-6 border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
                <span className="font-medium text-gray-800 text-sm uppercase tracking-wider">Since 2017</span>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-6" style={{ fontSize: '42px' }}>
                A Brief Story of Task19
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Founded in 2017 and based in Kochi & Calicut, <strong>Task19 Technologies (Betatask Private Limited)</strong> is a dynamic software development company specializing in building powerful, scalable digital solutions for businesses worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                With over 7 years of experience, we have successfully designed and launched SaaS products, mobile applications, and custom software platforms across various industries including E-commerce, EdTech, Healthcare, and Retail & Wholesale.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-8">
              <div className="bg-[#f8f9fc] p-8 md:p-10 rounded-[32px] border border-gray-100">
                <h3 className="font-display font-bold text-[#111827] text-2xl mb-4">Our Vision</h3>
                <p className="text-[#4b5563] leading-relaxed">
                  To empower businesses of all sizes with smart, scalable digital products that drive growth, efficiency, and innovation.
                </p>
              </div>
              <div className="bg-[#f8f9fc] p-8 md:p-10 rounded-[32px] border border-gray-100">
                <h3 className="font-display font-bold text-[#111827] text-2xl mb-4">Our Mission</h3>
                <p className="text-[#4b5563] leading-relaxed">
                  To build user-centric, high-performance technology solutions that solve real-world problems with a strong focus on product-market fit, usability, and long-term value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Director's Note ── */}
      <section className="py-12 md:py-16 bg-[#f8f9fc]">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Left Side: Content */}
            <div className="w-full md:w-2/3 text-center md:text-left flex flex-col items-center md:items-start">
              <svg className="w-8 h-8 text-[#013Ad6] mb-6 opacity-60 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-gray-700 text-lg md:text-[19px] leading-relaxed mb-6 font-light">
                "When I started Task19 Technologies in 2017, my goal was simple: to build a company that creates real impact through technology. Today, I'm proud to say that we've helped startups, e-commerce sellers, and businesses turn their ideas into powerful digital solutions."
              </p>
              <p className="text-gray-700 text-lg md:text-[19px] leading-relaxed mb-6 font-light">
                Our expertise in SaaS platforms, mobile apps, and e-commerce systems has allowed us to serve 100+ active users and partner with clients across India and the GCC. Every product we build is rooted in our commitment to usability, performance, and business value.
              </p>
              <p className="text-gray-700 text-lg md:text-[19px] leading-relaxed font-medium">
                At Task19, we're more than just developers - we're partners in growth, innovation, and long-term success.
              </p>
            </div>

            {/* Right Side: Profile */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center pl-0 md:pl-8 md:border-l border-gray-100">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-50">
                <img 
                  src="/images (3).jpg" 
                  alt="Afsal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Afsal&background=013Ad6&color=fff";
                  }}
                />
              </div>
              <h4 className="font-display font-bold text-2xl text-gray-900 mb-1">Afsal</h4>
              <p className="text-[#013Ad6] text-sm uppercase tracking-widest font-bold">Director</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Task19 Technologies</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services & Core Capabilities ── */}
      <section className="pb-12 md:pb-16 pt-0 bg-[#f8f9fc]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-4" style={{ fontSize: '42px' }}>
              Core Capabilities
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-[18px]">
              We offer a full spectrum of engineering and design services to build your next big product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'SaaS Product Development', icon: Cloud },
              { title: 'Custom Software Development', icon: Code },
              { title: 'E-Commerce Solutions', desc: '(Shopify, WooCommerce)', icon: Globe },
              { title: 'Mobile App Development', desc: '(React Native)', icon: Smartphone },
              { title: 'Web Application Development', icon: Layers },
              { title: 'Marketing & Automations', icon: Briefcase }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#013Ad6] shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[17px] text-gray-900 mb-1">{service.title}</h4>
                  {service.desc && <p className="text-gray-500 text-sm font-medium">{service.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="font-display font-bold text-2xl text-center text-gray-900 mb-8">Technologies We Use</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['React.js', 'Tailwind CSS', 'Laravel', 'Node.js', 'React Native', 'Flutter', 'MongoDB', 'MySQL', 'AWS', 'DigitalOcean', 'Firebase', 'Stripe', 'Razorpay', 'Meta & Google APIs'].map((tech, i) => (
                <span key={i} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm hover:border-[#013Ad6] hover:text-[#013Ad6] transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-6" style={{ fontSize: '42px' }}>
            Let's Build Together
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're a startup founder looking to bring your MVP to life or a business looking for a reliable tech partner—Task19 Technologies is here to take your vision from idea to launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Email Us</span>
              <a href="mailto:info@task19.com" className="font-bold text-lg hover:underline" style={{ color: '#013Ad6' }}>info@task19.com</a>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Locations</span>
              <span className="font-bold text-lg text-gray-900">Kochi & Calicut, Kerala</span>
            </div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#013Ad6] text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#002B9E] transition-colors shadow-lg">
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
