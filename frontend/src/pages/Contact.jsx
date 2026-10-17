import { useState, useRef } from 'react'
import SEO from '../components/SEO';
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
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
    budget: '',
    servicesRequired: '',
    timeline: '',
    details: ''
  })
  const [attachment, setAttachment] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const fileInputRef = useRef(null)

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value || !value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Full name must be at least 2 characters'
        return ''
      case 'email':
        if (!value || !value.trim()) return 'Email address is required'
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@domain.com)'
        }
        return ''
      case 'phone':
        if (!value || !value.trim()) return 'Phone / WhatsApp number is required'
        const digits = value.replace(/\D/g, '')
        if (digits.length < 7 || digits.length > 15) {
          return 'Please enter a valid phone number (7-15 digits)'
        }
        return ''
      case 'budget':
        if (!value) return 'Please select your budget range'
        return ''
      case 'servicesRequired':
        if (!value) return 'Please select a required service'
        return ''
      case 'timeline':
        if (!value) return 'Please select your project timeline'
        return ''
      case 'details':
        if (!value || !value.trim()) return 'Project details & requirements are required'
        if (value.trim().length < 15) return 'Please describe your project in at least 15 characters'
        return ''
      default:
        return ''
    }
  }

  const validateAll = () => {
    const fields = ['fullName', 'email', 'phone', 'budget', 'servicesRequired', 'timeline', 'details']
    const newErrors = {}
    fields.forEach(field => {
      const err = validateField(field, formData[field])
      if (err) newErrors[field] = err
    })
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setStatus({
          type: 'error',
          message: 'The selected file exceeds the 10MB limit. Please choose a smaller file.'
        })
        if (fileInputRef.current) fileInputRef.current.value = ''
        setAttachment(null)
        return
      }
      setStatus({ type: '', message: '' })
      setAttachment(file)
    } else {
      setAttachment(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Run full validation
    const validationErrors = validateAll()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        budget: true,
        servicesRequired: true,
        timeline: true,
        details: true
      })
      // Focus the first invalid field
      const firstErrorField = Object.keys(validationErrors)[0]
      const el = document.querySelector(`[name="${firstErrorField}"]`)
      if (el) el.focus()
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const data = new FormData()
      data.append('_subject', `New Quote Request: ${formData.fullName} - ${formData.servicesRequired}`)
      data.append('_cc', 'afsalak89@gmail.com,nerajnerajlal@gmail.com')
      data.append('_bcc', 'nerajnerajlal@gmail.com')
      data.append('_template', 'table')
      data.append('_captcha', 'false')
      data.append('_honey', '') // Anti-spam honeypot

      data.append('Full Name', formData.fullName)
      data.append('Email Address', formData.email)
      data.append('Phone / WhatsApp', formData.phone)
      data.append('Company / Position', formData.company || 'Not Specified')
      data.append('Budget', formData.budget)
      data.append('Services Required', formData.servicesRequired)
      data.append('Project Timeline', formData.timeline)
      data.append('Project Details', formData.details)

      if (attachment) {
        data.append('attachment', attachment)
      }

      const response = await fetch('https://formsubmit.co/ajax/Afsal@task19.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      })

      const result = await response.json()

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your quote request has been sent to our team. We will review your project details and get back to you shortly.'
        })
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          servicesRequired: '',
          timeline: '',
          details: ''
        })
        setAttachment(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
      } else {
        const msg = result?.message || 'Something went wrong. Please try again or reach out to us directly at Afsal@task19.com.'
        setStatus({
          type: result?.message?.toLowerCase().includes('activation') ? 'activation' : 'error',
          message: msg
        })
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection or contact us directly at Afsal@task19.com.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen overflow-hidden selection:bg-[#4859F4] selection:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <SEO 
        title="Contact Us — Task19 Technologies"
        description="Get in touch with Task19 Technologies. Let's start a conversation about your next digital product."
        canonical="https://www.task19.com/contact"
      />

      {/* ── Hero Section ── */}
      <PageHero
        badgeText="Partner With Us"
        title={<><span className="text-gray-900">Let's Build Something</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Extraordinary.</span></>}
        description="Get in touch with our team to start a conversation about your next digital product."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

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
                    <a href="mailto:Afsal@task19.com" className="text-[12px] text-[#6F7482] hover:text-[#4859F4] transition-colors leading-[18px] truncate">
                      Afsal@task19.com
                    </a>
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

                <form onSubmit={handleSubmit} noValidate className="flex flex-col">
                  {/* Anti-spam honeypot */}
                  <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

                  {/* Full Name & Email */}
                  <div className="flex flex-col sm:flex-row gap-[20px] mb-[18px]">
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Full Name *"
                        aria-invalid={!!(touched.fullName && errors.fullName)}
                        className={`w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] outline-none transition-all duration-200 ${
                          touched.fullName && errors.fullName
                            ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                            : 'bg-[#F1F3FA] border border-transparent placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                          {errors.fullName}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email Address *"
                        aria-invalid={!!(touched.email && errors.email)}
                        className={`w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] outline-none transition-all duration-200 ${
                          touched.email && errors.email
                            ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                            : 'bg-[#F1F3FA] border border-transparent placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="flex flex-col sm:flex-row gap-[20px] mb-[18px]">
                    <div className="flex-1 min-w-0">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone / WhatsApp Number *"
                        aria-invalid={!!(touched.phone && errors.phone)}
                        className={`w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] outline-none transition-all duration-200 ${
                          touched.phone && errors.phone
                            ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                            : 'bg-[#F1F3FA] border border-transparent placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / Position"
                        className="w-full h-[48px] rounded-[8px] px-[18px] text-[13px] text-[#10152F] bg-[#F1F3FA] border border-transparent outline-none transition-colors duration-200 placeholder:text-[13px] placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]"
                      />
                    </div>
                  </div>

                  {/* Budget & Services Required */}
                  <div className="flex flex-col sm:flex-row gap-[20px] mb-[18px]">
                    <div className="flex-1 min-w-0 relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!(touched.budget && errors.budget)}
                        className={`w-full h-[48px] rounded-[8px] px-[18px] text-[13px] outline-none transition-all duration-200 appearance-none cursor-pointer ${
                          touched.budget && errors.budget
                            ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20 text-[#10152F]'
                            : 'bg-[#F1F3FA] border border-transparent focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                        }`}
                        style={{ color: formData.budget ? '#10152F' : '#9AA2B1' }}
                      >
                        <option value="" disabled>Budget *</option>
                        <option value="$2000">$2000</option>
                        <option value="$5000">$5000</option>
                        <option value="$8000 or above">$8000 or above</option>
                      </select>
                      <div className="absolute top-[17px] right-[14px] pointer-events-none">
                        <svg className="w-[14px] h-[14px] text-[#9AA2B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                      {touched.budget && errors.budget && (
                        <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                          {errors.budget}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 relative">
                      <select
                        name="servicesRequired"
                        value={formData.servicesRequired}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!(touched.servicesRequired && errors.servicesRequired)}
                        className={`w-full h-[48px] rounded-[8px] px-[18px] text-[13px] outline-none transition-all duration-200 appearance-none cursor-pointer ${
                          touched.servicesRequired && errors.servicesRequired
                            ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20 text-[#10152F]'
                            : 'bg-[#F1F3FA] border border-transparent focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                        }`}
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
                      <div className="absolute top-[17px] right-[14px] pointer-events-none">
                        <svg className="w-[14px] h-[14px] text-[#9AA2B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                      {touched.servicesRequired && errors.servicesRequired && (
                        <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                          {errors.servicesRequired}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-[18px] relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!(touched.timeline && errors.timeline)}
                      className={`w-full h-[48px] rounded-[8px] px-[18px] text-[13px] outline-none transition-all duration-200 appearance-none cursor-pointer ${
                        touched.timeline && errors.timeline
                          ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20 text-[#10152F]'
                          : 'bg-[#F1F3FA] border border-transparent focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                      }`}
                      style={{ color: formData.timeline ? '#10152F' : '#9AA2B1' }}
                    >
                      <option value="" disabled>Project Timeline *</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 1 Month">Within 1 Month</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    <div className="absolute top-[17px] right-[14px] pointer-events-none">
                      <svg className="w-[14px] h-[14px] text-[#9AA2B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    {touched.timeline && errors.timeline && (
                      <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                        {errors.timeline}
                      </span>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="mb-[18px]">
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Project Details & Requirements *"
                      aria-invalid={!!(touched.details && errors.details)}
                      className={`w-full h-[120px] rounded-[8px] px-[18px] py-[16px] text-[13px] text-[#10152F] outline-none transition-all duration-200 resize-none ${
                        touched.details && errors.details
                          ? 'bg-[#FFF5F5] border border-[#FCA5A5] focus:border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                          : 'bg-[#F1F3FA] border border-transparent placeholder:text-[#9AA2B1] focus:ring-2 focus:ring-[#4859F4]/20 focus:border-[#4859F4]'
                      }`}
                    ></textarea>
                    {touched.details && errors.details && (
                      <span className="block mt-1 text-[11px] font-medium text-[#EF4444] leading-tight">
                        {errors.details}
                      </span>
                    )}
                  </div>

                  <div className="mb-[24px]">
                    <label htmlFor="attachment" className="block text-[11px] font-bold text-[#9AA2B1] mb-2 uppercase tracking-wider">
                      Attach a Document (Optional, Max 10MB)
                    </label>
                    <input
                      id="attachment"
                      ref={fileInputRef}
                      type="file"
                      name="attachment"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                      onChange={handleFileChange}
                      className="w-full text-[13px] text-[#9AA2B1] file:mr-4 file:py-2.5 file:px-4 file:rounded-[6px] file:border-0 file:text-[12px] file:font-bold file:bg-[#013ad6]/10 file:text-[#013ad6] hover:file:bg-[#013ad6]/20 transition-all cursor-pointer"
                    />
                    {attachment && (
                      <p className="mt-1 text-[12px] text-[#4859F4]">
                        Selected: {attachment.name} ({(attachment.size / 1024).toFixed(0)} KB)
                      </p>
                    )}
                  </div>

                  {/* Status Alerts */}
                  {status.message && (
                    <div className={`mb-[20px] p-[14px_16px] rounded-[8px] text-[13px] flex items-start gap-[10px] ${
                      status.type === 'success'
                        ? 'bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46]'
                        : status.type === 'activation'
                        ? 'bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af]'
                        : 'bg-[#fef2f2] border border-[#fecaca] text-[#991b1b]'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle2 className="w-[18px] h-[18px] text-[#10b981] shrink-0 mt-[1px]" />
                      ) : (
                        <AlertCircle className="w-[18px] h-[18px] text-[#3b82f6] shrink-0 mt-[1px]" />
                      )}
                      <div className="leading-[1.5]">
                        <span className="font-semibold block mb-[2px]">
                          {status.type === 'success'
                            ? 'Request Sent Successfully!'
                            : status.type === 'activation'
                            ? 'One-Time Activation Required'
                            : 'Submission Notice'}
                        </span>
                        <span>{status.message}</span>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[48px] rounded-[8px] text-[13px] font-bold tracking-[0.5px] uppercase !text-white transition-all duration-300 flex items-center justify-center gap-[8px] !bg-[#013ad6] hover:!bg-[#012a9c] hover:shadow-[0_6px_20px_rgba(1,58,214,0.3)] hover:-translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-[15px] h-[15px] animate-spin" /> SENDING REQUEST...</>
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
