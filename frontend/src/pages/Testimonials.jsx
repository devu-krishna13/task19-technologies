import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
export default function Testimonials() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Helmet>
        <title>Testimonials — Task19 Technologies</title>
      </Helmet>
      
      {/* ── Hero Section ── */}
      <PageHero
        badgeText="Success Stories"
        title={<>Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Testimonials.</span></>}
        description="Read what our clients have to say about partnering with Task19 Technologies."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

      {/* Testimonials Grid Section */}
      <section className="py-12 md:py-16 container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-gray-900 mb-4 text-[20px] md:text-[42px]" style={{ letterSpacing: '-0.02em' }}>
            Client Success Stories
          </h2>
          <div className="flex items-center justify-center gap-2 font-medium text-gray-800">
            <span style={{ fontSize: '15px' }}>4.5/5</span>
            <div className="flex text-yellow-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-gray-500 ml-1" style={{ fontSize: '14px' }}>(Trusted by 148+ users)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Maya Zong',
              title: 'UI/UX Designer',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
              content: 'I appreciate how simple and focused this platform is. It removes the clutter and helps me stay organized across multiple e-commerce projects.'
            },
            {
              name: 'Ethan Miller',
              title: 'Web Developer',
              image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
              content: 'Working with this team helps me manage multiple client setups without missing deadlines. The workflows give instant clarity on builds and deployments.'
            },
            {
              name: 'Hannah Lee',
              title: 'Content Writer',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
              content: 'Tracking content migrations used to be difficult. The custom solutions provided made the entire transition process clear and completely reliable.'
            },
            {
              name: 'Daniel Perez',
              title: 'Software Engineer',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
              content: 'The integrations are perfectly suited for modern engineering teams. I can quickly see what’s due and what’s completed without legacy blockers.'
            },
            {
              name: 'Laura Kim',
              title: 'Product Designer',
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
              content: 'The strategic consulting has helped me improve my delivery consistency with enterprise clients drastically.'
            },
            {
              name: 'Priya Shah',
              title: 'Marketing Specialist',
              image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
              content: 'This keeps all my campaign technical requirements structured. I no longer rely on scattered notes or reminders.'
            },
            {
              name: 'James Wilson',
              title: 'Operations Director',
              image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
              content: 'An absolute game-changer for our supply chain management. The custom Shopify app they built saved us hundreds of hours of manual labor every month.'
            },
            {
              name: 'Sofia Martinez',
              title: 'E-commerce Manager',
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
              content: 'Our conversion rates jumped 24% after their CRO audit and redesign. They really understand what drives purchasing decisions online.'
            },
            {
              name: 'Thomas Wright',
              title: 'CEO & Founder',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
              content: 'We successfully migrated 10,000+ SKUs from Magento to Shopify Plus without a single minute of downtime. Truly exceptional technical capability.'
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[24px] flex flex-col justify-between" style={{ backgroundColor: '#e5e7eb', padding: '32px', minHeight: '260px' }}
            >
              <p className="text-gray-800 leading-relaxed mb-8 font-medium" style={{ fontSize: '15px' }}>
                "{t.content}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-display font-bold text-gray-900 m-0 leading-tight" style={{ fontSize: '15px' }}>{t.name}</h5>
                    <span className="text-gray-600" style={{ fontSize: '13px' }}>{t.title}</span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
