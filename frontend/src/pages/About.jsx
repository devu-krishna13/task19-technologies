import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Layers, Smartphone, Globe, Cloud, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Us — Task19 Technologies</title>
        <meta name="description" content="Founded in 2017, Task19 Technologies is a dynamic software development company specializing in scalable SaaS, mobile apps, and custom software." />
      </Helmet>

      {/* ── Hero Section ── */}
      <PageHero
        badgeText="Company Profile"
        title={<>Building Scalable <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Solutions.</span></>}
        description="Founded in 2017, Task19 Technologies is a dynamic software development company specializing in scalable SaaS, mobile apps, and custom software."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

      {/* ── 1. Intro Split Section (Xicom Style) ── */}
      <section className="py-10 md:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          {/* Top bar with pill */}
          <div className="flex flex-wrap items-center gap-4 mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 text-sm font-semibold tracking-wider text-gray-800 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span> About Task19
            </div>
            <div className="h-px bg-gray-300 flex-grow max-w-xs hidden sm:block"></div>
            <span className="text-gray-500 font-medium text-sm hidden sm:block">Est. 2017 &nbsp;·&nbsp; Kochi &nbsp;·&nbsp; Calicut</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] text-gray-900 tracking-tight">
                A technology company built through <span className="text-[#013Ad6]">experience</span>, persistence, and continuous learning.
              </h2>
              <div className="mt-8 text-[14px] font-bold text-gray-500 uppercase tracking-widest border-t border-gray-200 pt-6">
                Experience-Driven &nbsp;·&nbsp; Client-Focused &nbsp;·&nbsp; Trusted Since 2017
              </div>
            </div>

            <div className="lg:col-span-7 pt-2 lg:pt-4">
              <p className="text-[18px] md:text-[20px] text-gray-700 mb-6 leading-relaxed">
                Our journey began in <strong className="font-bold text-gray-900">2012</strong>, when the Task19.com domain was registered. What started as an idea took its official shape on <strong className="font-bold text-gray-900">November 6, 2017</strong>, when Task19 Technologies began operations.
              </p>
              <p className="text-[18px] md:text-[20px] text-gray-700 mb-8 leading-relaxed">
                We didn't start with mentors, investors, or a ready-made roadmap. We learned by doing—making mistakes, solving problems, adapting to change, and continuously improving. Those experiences shaped both our company and the way we work today.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/contact" className="bg-[#013Ad6] hover:bg-[#002B9E] !text-white px-8 py-3.5 rounded font-bold transition-all text-[16px] shadow-md hover:shadow-lg">
                  Start a project
                </Link>
                <a href="/pdf/Task19 Technologies Profile 2025 (2).pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 bg-white !text-gray-800 hover:bg-gray-50 px-8 py-3.5 rounded font-bold transition-colors flex items-center gap-2 text-[16px]">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Leverage Block (Middle headline) ── */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-center mb-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-center leading-tight text-gray-900 max-w-3xl">
              What a <span className="text-[#013Ad6]">Successful Partnership</span> actually means at Task19
            </h2>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-1 bg-red-600"></div>
          </div>
          <div className="text-center">
            <p className="text-[20px] md:text-[24px] text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
              At Task19, we believe a successful technology partnership is about more than delivering software. Providing real value, responding on time, being available when clients need us, and taking responsibility for our work have always been at the heart of what we do.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Split Block (Sticky left, list right) ── */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32">
                <h3 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 mb-6 leading-tight">
                  Core <span className="text-[#013Ad6]">Capabilities</span>
                </h3>
                <p className="text-[18px] md:text-[20px] text-gray-700 mb-6 leading-relaxed">
                  This approach has helped us build long-term relationships, with many clients returning to us for their next projects.
                </p>
                <p className="text-[18px] md:text-[20px] text-gray-700 mb-6 leading-relaxed">
                  Today, we build e-commerce solutions, Shopify stores and apps, SaaS products, web and mobile applications, and custom software solutions for businesses in India and international markets.
                </p>
                <p className="text-[18px] md:text-[20px] text-gray-900 leading-relaxed font-bold">
                  What sets us apart is the engineering discipline behind our products. That's what turns an idea into a scalable solution.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-[#f8f9fa] px-6 py-4 border-b border-gray-200">
                  <p className="text-lg font-bold text-gray-900 m-0">What We Build</p>
                </div>
                <ul className="divide-y divide-gray-200">
                  <li className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-[18px] mb-2 sm:mb-0">E-Commerce Solutions</span>
                    <span className="text-gray-500 font-medium text-sm">Shopify · WooCommerce</span>
                  </li>
                  <li className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-[18px] mb-2 sm:mb-0">Mobile App Development</span>
                    <span className="text-gray-500 font-medium text-sm">React Native · Flutter</span>
                  </li>
                  <li className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-[18px] mb-2 sm:mb-0">Web Application Development</span>
                    <span className="text-gray-500 font-medium text-sm">React.js · Laravel · Node.js</span>
                  </li>
                  <li className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-[18px] mb-2 sm:mb-0">SaaS Product Development</span>
                    <span className="text-gray-500 font-medium text-sm">Scalable Platforms</span>
                  </li>
                  <li className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-[18px] mb-2 sm:mb-0">Digital Marketing & Automation</span>
                    <span className="text-gray-500 font-medium text-sm">Integrations</span>
                  </li>
                  <li className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-gray-900 text-[18px] mb-2 sm:mb-0">Custom Software Development</span>
                    <span className="text-gray-500 font-medium text-sm">Enterprise Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Grid Block (Leadership - Premium) ── */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-blue-50/50 to-transparent opacity-70 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#013Ad6] font-bold tracking-widest uppercase text-sm mb-3 block">Our Team</span>
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 mb-4 tracking-tight">Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Task19 Technologies is led by directors committed to innovation, engineering excellence, and sustainable growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Director 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(1,58,214,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#013Ad6] to-[#002B9E] text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-500">
                <span className="text-2xl font-display font-bold">A</span>
              </div>
              
              <h4 className="text-[22px] md:text-[24px] font-bold text-gray-900 mb-2 group-hover:text-[#013Ad6] transition-colors duration-300">Afsal Kabeer</h4>
              <p className="text-[13px] font-bold uppercase tracking-widest text-[#013Ad6] mb-5">CEO & Director</p>
              
              <div className="h-px w-12 bg-gray-200 mb-5 group-hover:w-full group-hover:bg-blue-100 transition-all duration-500"></div>
              
              <p className="text-gray-600 leading-relaxed text-[15px]">Guiding the overall vision and strategic direction of the company with a focus on product-market fit.</p>
            </motion.div>

            {/* Director 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(1,58,214,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gray-900 text-white flex items-center justify-center mb-8 shadow-lg shadow-gray-900/10 group-hover:bg-gradient-to-br group-hover:from-[#013Ad6] group-hover:to-[#002B9E] group-hover:shadow-blue-500/40 transition-all duration-500">
                <span className="text-2xl font-display font-bold">F</span>
              </div>
              
              <h4 className="text-[22px] md:text-[24px] font-bold text-gray-900 mb-2 group-hover:text-[#013Ad6] transition-colors duration-300">Faizal Haneef</h4>
              <p className="text-[13px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#013Ad6] transition-colors duration-300 mb-5">Director</p>
              
              <div className="h-px w-12 bg-gray-200 mb-5 group-hover:w-full group-hover:bg-blue-100 transition-all duration-500"></div>
              
              <p className="text-gray-600 leading-relaxed text-[15px]">Driving operational excellence and ensuring that our development pipelines remain robust and efficient.</p>
            </motion.div>

            {/* Director 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(1,58,214,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-gray-900 text-white flex items-center justify-center mb-8 shadow-lg shadow-gray-900/10 group-hover:bg-gradient-to-br group-hover:from-[#013Ad6] group-hover:to-[#002B9E] group-hover:shadow-blue-500/40 transition-all duration-500">
                <span className="text-2xl font-display font-bold">H</span>
              </div>
              
              <h4 className="text-[22px] md:text-[24px] font-bold text-gray-900 mb-2 group-hover:text-[#013Ad6] transition-colors duration-300">Haris Haneefa</h4>
              <p className="text-[13px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#013Ad6] transition-colors duration-300 mb-5">Director</p>
              
              <div className="h-px w-12 bg-gray-200 mb-5 group-hover:w-full group-hover:bg-blue-100 transition-all duration-500"></div>
              
              <p className="text-gray-600 leading-relaxed text-[15px]">Overseeing technological innovation and building the engineering disciplines that power our solutions.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 5. Final Concluding Block ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-center mb-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-center leading-tight text-gray-900 max-w-3xl">
              Deliver value, earn trust, and build relationships <span className="text-[#013Ad6]">that last.</span>
            </h2>
          </div>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-1 bg-[#013Ad6]"></div>
          </div>
          <div className="text-center">
            <p className="text-[20px] md:text-[24px] text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
              We have come a long way by learning, building, and evolving—and we continue with the same principle we started with.
            </p>
            <Link to="/contact" className="inline-block bg-[#013Ad6] hover:bg-[#002B9E] !text-white px-10 py-4 rounded font-bold transition-all text-[18px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
