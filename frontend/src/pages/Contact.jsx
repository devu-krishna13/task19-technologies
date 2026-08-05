import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube, Loader2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    currency: 'USD',
    budget: '',
    servicesRequired: '',
    timeline: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      currency: 'USD',
      budget: '',
      servicesRequired: '',
      timeline: '',
      details: ''
    })
    setTimeout(() => setIsSuccess(false), 5000)
  }

  // Animation on mount
  useEffect(() => {
    // Component mounted
  }, [])

  const inputClasses = "w-full border-[1.4px] border-transparent rounded-[10px] px-[16px] py-[13px] text-[13.5px] text-[#14142B] bg-[#F1F3FA] outline-none transition-all duration-200 placeholder:text-[#A6A9C4] focus:border-[#4859F4] focus:bg-[#FFFFFF]"
  const textareaClasses = `${inputClasses} resize-none h-[110px]`

  return (
    <div className="bg-[#FFFFFF] min-h-screen overflow-hidden selection:bg-[#4859F4] selection:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Helmet>
        <title>Contact Us — Task19 Technologies</title>
        <meta name="description" content="Get in touch with Task19 Technologies. Let's start a conversation about your next digital product." />
        <link rel="canonical" href="https://task19.com/contact" />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[#050f28] hero-section-wrapper min-h-[500px] h-[100svh] md:h-screen md:min-h-[700px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="Contact Us Background"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 0.9) 80%)'
          }}></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-24 md:pt-20">
          <div className="container relative flex flex-col items-center text-center px-4 sm:px-6 mx-auto w-full">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 mb-6 md:mb-8"
            >
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] md:text-xs font-bold">!</div>
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Get In Touch</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-4 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Let's Start a<br /><em className="font-serif-italic not-italic text-white/40">Conversation.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main Contact Section ── */}
      <section className="pt-[30px] pb-[40px] lg:pt-[40px] lg:pb-[60px] bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[40px]">
          <div className="flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[120px] items-start">

            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-1/2 max-w-[500px] flex flex-col">
              <h4 className="text-[22px] md:text-[24px] font-bold text-[#10152F] leading-[1.15] mb-[16px]">
                Contact Information
              </h4>
              <p className="text-[14px] text-[#707070] leading-[28px] mb-[28px]">
                Our expert development service provides fast and efficient creation of digital solutions. Our certified professionals will ensure your project is executed flawlessly and safely.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                {/* Address */}
                <div className="sm:col-span-2 bg-[#FFFFFF] border border-[#ECECEC] rounded-[10px] p-[16px] min-h-[64px] flex items-start gap-[14px] shadow-[0_5px_15px_rgba(0,0,0,0.03)]">
                  <div className="w-[40px] h-[40px] min-w-[40px] rounded-[10px] bg-[#F5F6FA] flex items-center justify-center text-[#4859F4] shrink-0 mt-[2px]">
                    <MapPin className="w-[16px] h-[16px] stroke-[1.2px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-[#10152F] leading-tight mb-[4px]">Task19 Technologies</span>
                    <span className="text-[11px] font-bold text-[#10152F] opacity-60 mb-[6px] uppercase tracking-wider">(Betatask Private Limited)</span>
                    <span className="text-[13px] text-[#6F7482] leading-[1.6]">
                      KSUM 1st Floor, Govt Cyber Park<br />
                      Calicut, Kerala, India<br />
                      Locations: Kochi & Calicut
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#FFFFFF] border border-[#ECECEC] rounded-[10px] p-[12px_16px] h-[64px] w-full flex items-center gap-[12px] shadow-[0_5px_15px_rgba(0,0,0,0.03)]">
                  <div className="w-[40px] h-[40px] min-w-[40px] rounded-[10px] bg-[#F5F6FA] flex items-center justify-center text-[#4859F4] shrink-0">
                    <Phone className="w-[16px] h-[16px] stroke-[1.2px]" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[15px] font-semibold text-[#10152F] leading-tight mb-[2px] truncate">Phone Number</span>
                    <span className="text-[12px] text-[#6F7482] leading-[18px] truncate">
                      +91 70126 39646
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#FFFFFF] border border-[#ECECEC] rounded-[10px] p-[12px_16px] h-[64px] w-full flex items-center gap-[12px] shadow-[0_5px_15px_rgba(0,0,0,0.03)]">
                  <div className="w-[40px] h-[40px] min-w-[40px] rounded-[10px] bg-[#F5F6FA] flex items-center justify-center text-[#4859F4] shrink-0">
                    <Mail className="w-[16px] h-[16px] stroke-[1.2px]" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[15px] font-semibold text-[#10152F] leading-tight mb-[2px] truncate">Email Address</span>
                    <span className="text-[12px] text-[#6F7482] leading-[18px] truncate">
                      info@task19.com
                    </span>
                  </div>
                </div>

                {/* Working Time */}
                <div className="sm:col-span-2 bg-[#FFFFFF] border border-[#ECECEC] rounded-[10px] p-[12px_16px] h-[64px] w-full flex items-center gap-[12px] shadow-[0_5px_15px_rgba(0,0,0,0.03)]">
                  <div className="w-[40px] h-[40px] min-w-[40px] rounded-[10px] bg-[#F5F6FA] flex items-center justify-center text-[#4859F4] shrink-0">
                    <Clock className="w-[16px] h-[16px] stroke-[1.2px]" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[15px] font-semibold text-[#10152F] leading-tight mb-[2px] truncate">Working Time</span>
                    <span className="text-[12px] text-[#6F7482] leading-[18px] truncate">
                      Mon - Fri 9AM - 6PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <div className="text-[17px] font-semibold text-[#10152F] mb-[4px]">Follow The Social Media:</div>
                <div className="text-[13px] text-[#707070] leading-[22px] max-w-[420px] mb-[10px]">Ensure your business is ready for the digital future with our expert consulting.</div>
                <div className="flex gap-[10px]">
                  {[
                    { icon: Facebook, href: 'https://www.facebook.com/share/1BUtfhNHxW/' },
                    { icon: XIcon, href: 'https://x.com/Task19_' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/task19-technologies/' },
                    { icon: Instagram, href: 'https://www.instagram.com/tasknineteen/' },
                    { icon: Youtube, href: 'http://www.youtube.com/@Task19Technologies' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="group w-[30px] h-[30px] rounded-full bg-[#FFFFFF] border border-[#ECECEC] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-[#4859F4] transition-colors duration-200"
                    >
                      <social.icon className="w-[14px] h-[14px] text-[#4859F4] group-hover:text-[#FFFFFF]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="bg-[#FFFFFF] rounded-[16px] p-[32px] md:p-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#F4F5F9] w-full max-w-[500px]">
                <h4 className="text-[22px] md:text-[24px] font-bold text-[#10152F] leading-[1.15] mb-[24px]">
                  Request a Quote
                </h4>

                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 placeholder:text-[13px] placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 placeholder:text-[13px] placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                    <div className="flex-1 min-w-0">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone / WhatsApp Number *"
                        className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 placeholder:text-[13px] placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / Position"
                        className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 placeholder:text-[13px] placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-[20px] mb-[20px]">
                    <div className="flex-1 min-w-0">
                      <div className="flex h-[48px] rounded-[8px] bg-[#F1F3FA] focus-within:ring-2 focus-within:ring-[#4859F4]/20 transition-colors duration-200 overflow-hidden">
                        <div className="relative border-r border-[#E2E8F0]">
                          <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="h-full pl-[14px] pr-[28px] text-[13px] font-semibold text-[#10152F] bg-transparent outline-none appearance-none cursor-pointer"
                          >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-[10px] pointer-events-none">
                            <svg className="w-[12px] h-[12px] text-[#9AA2B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                        <input
                          type="number"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="Budget *"
                          className="flex-1 min-w-0 h-full px-[14px] text-[13px] text-[#10152F] bg-transparent outline-none placeholder:text-[13px] placeholder:text-[#9AA2B1] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          style={{ MozAppearance: 'textfield' }}
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 relative">
                      <select
                        name="servicesRequired"
                        required
                        value={formData.servicesRequired}
                        onChange={handleChange}
                        className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 focus:ring-2 focus:ring-[#4859F4]/20 appearance-none cursor-pointer"
                        style={{ color: formData.servicesRequired ? '#10152F' : '#9AA2B1' }}
                      >
                        <option value="" disabled>Services Required *</option>
                        <option value="Shopify Store">Shopify Store</option>
                        <option value="WooCommerce Store">WooCommerce Store</option>
                        <option value="WordPress Website">WordPress Website</option>
                        <option value="Custom E-Commerce">Custom E-Commerce</option>
                        <option value="Custom Web App">Custom Web App</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO & Marketing">SEO & Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-[14px] pointer-events-none">
                        <svg className="w-[14px] h-[14px] text-[#9AA2B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-[20px] relative">
                    <select
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 focus:ring-2 focus:ring-[#4859F4]/20 appearance-none cursor-pointer"
                      style={{ color: formData.timeline ? '#10152F' : '#9AA2B1' }}
                    >
                      <option value="" disabled>Project Timeline *</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-[14px] pointer-events-none">
                      <svg className="w-[14px] h-[14px] text-[#9AA2B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  <div className="mb-[20px]">
                    <textarea
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Project Details & Requirements *"
                      className="w-full h-[120px] rounded-[8px] px-[18px] py-[16px] text-[13px] text-[#10152F] bg-[#F1F3FA] outline-none transition-colors duration-200 placeholder:text-[13px] placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20 resize-none"
                    ></textarea>
                  </div>

                  <div className="mb-[28px]">
                    <label className="block text-[11px] font-bold text-[#9AA2B1] mb-2 uppercase tracking-wider">Attach a Document (Optional)</label>
                    <input
                      type="file"
                      name="attachment"
                      className="w-full text-[13px] text-[#9AA2B1] file:mr-4 file:py-2.5 file:px-4 file:rounded-[6px] file:border-0 file:text-[12px] file:font-bold file:bg-[#013ad6]/10 file:text-[#013ad6] hover:file:bg-[#013ad6]/20 transition-all cursor-pointer"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full h-[48px] rounded-[8px] text-[13px] font-bold tracking-[0.5px] uppercase !text-white transition-all duration-300 flex items-center justify-center gap-[8px] ${
                      isSuccess 
                        ? '!bg-[#10b981] hover:!bg-[#059669]' 
                        : '!bg-[#013ad6] hover:!bg-[#012a9c] hover:shadow-[0_6px_20px_rgba(1,58,214,0.3)] hover:-translate-y-[1px]'
                    }`}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-[14px] h-[14px] animate-spin" /> SENDING...</>
                    ) : isSuccess ? (
                      <><CheckCircle2 className="w-[14px] h-[14px]" /> REQUEST SENT</>
                    ) : (
                      "REQUEST QUOTE"
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Full Width Map Section ── */}
      <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-[#F1F3FA]">
        <iframe
          src="https://maps.google.com/maps?q=Govt%20Cyberpark,%20Nellikode,%20Calicut&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 block grayscale hover:grayscale-0 transition-all duration-700"
          allowFullScreen=""
          loading="lazy"
          title="Task19 Office Location"
        ></iframe>
      </section>

    </div>
  )
}
