import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter, Send, CheckCircle2, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
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
    await new Promise(resolve => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const inputStyle = "w-full h-[58px] bg-white border border-[#E1E5EB] rounded-[8px] px-6 text-base text-[#111111] placeholder-[#949AA5] focus:outline-none focus:border-[#2E5FC6] focus:ring-1 focus:ring-[#2E5FC6] transition-all shadow-sm"
  const textareaStyle = "w-full min-h-[200px] bg-white border border-[#E1E5EB] rounded-[8px] p-6 text-base text-[#111111] placeholder-[#949AA5] focus:outline-none focus:border-[#2E5FC6] focus:ring-1 focus:ring-[#2E5FC6] transition-all shadow-sm resize-none"

  return (
    <>
      <Helmet>
        <title>Contact Us — Task19 Technologies</title>
        <meta name="description" content="Get in touch with Task19 Technologies in Ernakulam, Kerala. Let's start a conversation about your digital product." />
        <link rel="canonical" href="https://task19.com/contact" />
      </Helmet>

      {/* ── Hero Section (Untouched) ── */}
      <section className="relative h-[450px] flex items-center justify-center pt-20 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white font-serif-italic m-0" style={{ fontSize: '3em', padding: '40px 0px' }}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── SECTION 1: CONTACT INTRODUCTION ── */}
      <section className="w-full bg-white text-center" style={{ paddingTop: '70px', paddingBottom: '60px' }}>
        <div className="container max-w-[700px] mx-auto px-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#2E5FC6] mb-3">
            CONTACT
          </span>
          <h2 className="font-display font-bold text-[#111111] text-3xl md:text-[40px] leading-tight mb-5">
            Let's Start a Conversation
          </h2>
          <p className="text-[#555555] text-base md:text-[17px] leading-relaxed font-light">
            Have a project in mind? We'd love to hear from you. Whether you're looking for web development, mobile applications, UI/UX design, Shopify, WordPress, or custom software solutions, our team is ready to help.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: CONTACT DETAILS + FORM ── */}
      <section className="w-full bg-[#F7F9FC]" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left Column (38%) */}
            <div className="w-full lg:w-[38%] flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[#111111] text-2xl md:text-3xl mb-4">
                  Contact Details
                </h3>
                <p className="text-[#555555] text-[15px] leading-relaxed mb-6">
                  Please let us know if you have any questions, want to discuss your project, or would like more information about our services.
                </p>

                {/* Divider Line */}
                <div className="w-[80px] h-[3px] rounded-full bg-gradient-to-r from-[#59C5F6] to-[#2E5FC6] mb-8" />

                {/* Contact Items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2E5FC6] flex-shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-[#888888] mb-1">Office Address</p>
                      <p className="text-[#111111] text-[15px] leading-snug font-medium">
                        Kathrikadavu Junction, Ernakulam, Kerala 682017, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2E5FC6] flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-[#888888] mb-1">Phone</p>
                      <a href="tel:+917012639646" style={{ color: '#111111' }} className="block font-semibold text-base text-[#111111] hover:!text-[#2E5FC6] transition-colors">
                        +91 70126 39646
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2E5FC6] flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-[#888888] mb-1">Email</p>
                      <a href="mailto:info@task19.com" style={{ color: '#111111' }} className="block font-semibold text-base text-[#111111] hover:!text-[#2E5FC6] transition-colors">
                        info@task19.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2E5FC6] flex-shrink-0 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-[#888888] mb-1">Working Hours</p>
                      <p className="text-[#111111] text-[15px] font-medium">
                        Monday – Friday<br />
                        <span className="text-[#555555] font-normal">9:00 AM – 6:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons inside 42px circles */}
              <div className="flex items-center gap-3 mt-10">
                {[
                  { icon: Facebook, label: 'Facebook', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' }
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-[42px] h-[42px] rounded-full bg-white text-[#555555] hover:text-white hover:bg-[#2E5FC6] flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column (62%): Professional Contact Form */}
            <div className="w-full lg:w-[62%] bg-white rounded-xl p-8 md:p-12 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div className="mb-8">
                <h4 className="font-display font-bold text-[#111111] text-2xl mb-2">Send Us a Message</h4>
                <p className="text-[#555555] text-[15px] font-light">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name *"
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name *"
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject *"
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Large Message *"
                    className={textareaStyle}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="flex items-center justify-center font-semibold text-white transition-all duration-300 hover:brightness-105 shadow-md cursor-pointer border-0"
                    style={{
                      width: '180px',
                      height: '54px',
                      borderRadius: '6px',
                      background: isSuccess
                        ? '#10B981'
                        : 'linear-gradient(90deg, #59C5F6, #2E5FC6)',
                      fontSize: '14px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> SENDING</span>
                    ) : isSuccess ? (
                      <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> SENT!</span>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: OFFICE LOCATION ── */}
      <section className="w-full bg-white" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-bold text-[#111111] text-3xl md:text-[38px] leading-tight mb-4">
              Visit Our Office
            </h2>
            <p className="text-[#555555] text-base leading-relaxed font-light">
              You're always welcome to visit our office during business hours. Schedule a meeting with our experts and let's discuss your next project.
            </p>
          </div>

          <div
            className="w-full overflow-hidden border border-gray-100"
            style={{ height: '380px', borderRadius: '12px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.17646537651!2d76.29548451479426!3d9.993425575742491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d500ff502bd%3A0x86bd61da433f48a!2sKathrikadavu%2C%20Kaloor%2C%20Ernakulam%2C%20Kerala%20682017!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 block"
              allowFullScreen=""
              loading="lazy"
              title="Task19 Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CALL TO ACTION ── */}
      {/* <section
        className="w-full text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #0D1B4C 0%, #1B3B92 100%)',
          paddingTop: '70px',
          paddingBottom: '70px'
        }}
      >
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-white text-3xl md:text-[40px] leading-tight mb-5">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl mx-auto">
            Let's work together to create innovative digital experiences that grow your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-[6px] bg-white text-[#0D1B4C] font-semibold text-sm hover:bg-white/90 transition-all shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-[6px] border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section> */}
    </>
  )
}
