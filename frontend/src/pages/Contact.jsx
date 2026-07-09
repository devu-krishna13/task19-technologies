import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 70126 39646',
    subDetails: 'Mon–Fri, 9am to 6pm IST',
    link: 'tel:+917012639646'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@task19.com',
    subDetails: 'Typically reply within 2 hours',
    link: 'mailto:info@task19.com'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Kathrikadavu Junction',
    subDetails: 'Ernakulam, Kerala 682017, India',
    link: 'https://maps.google.com/?q=Task19+Technologies+Ernakulam'
  }
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  // Updated inputBase to premium SaaS style
  const inputBase = `w-full border border-gray-200 rounded-[12px] px-4 py-3.5 text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black focus:bg-white transition-all duration-300`

  return (
    <>
      <Helmet>
        <title>Contact Us — Task19 Technologies</title>
        <meta name="description" content="Get in touch with Task19 Technologies for premium Shopify development, mobile apps, and digital transformation services. Based in Ernakulam, Kerala." />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="section relative overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.4) 0%, rgba(5, 15, 35, 1) 80%)', paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-md" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '6px 16px' }}>
                <span className="font-medium text-white" style={{ fontSize: '14px' }}>Contact</span>
              </div>
            </div>
            
            <h1 className="font-display font-bold text-white leading-[1.1] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
              Let's Build Something<br />
              <span className="text-white/60 font-light">Extraordinary</span>
            </h1>
            
            <p className="font-light leading-relaxed max-w-2xl mb-10" style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.8)' }}>
              Whether you have a fully-formed project or just an idea, our team is ready to help you turn it into a revenue-driving reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-gray-50" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left Side: Contact Info */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <div className="inline-block bg-white border border-gray-200" style={{ borderRadius: '9999px', padding: '6px 16px' }}>
                  <span className="font-medium text-gray-800" style={{ fontSize: '14px' }}>Reach Out</span>
                </div>
              </div>
              <h2 className="font-display font-bold text-gray-900 leading-tight tracking-tight mb-10" style={{ fontSize: '36px' }}>
                Get in Touch
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.link}
                    target={info.icon === MapPin ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-[16px] text-gray-900 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-gray-900 mb-1 group-hover:text-black transition-colors duration-300 text-[16px]">{info.title}</p>
                      <p className="text-[15px] font-medium text-gray-600 mb-0.5">{info.details}</p>
                      <p className="text-[13px] text-gray-400">{info.subDetails}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <h4 className="font-display font-bold text-gray-900 mb-6 text-lg">What happens next?</h4>
                <ol className="space-y-5">
                  {[
                    'We schedule a 30-min discovery call',
                    'We sign an NDA to protect your ideas',
                    'We deliver a detailed technical proposal',
                    'We assemble your dedicated team'
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-display font-bold text-[11px]">{i + 1}</span>
                      </div>
                      <span className="text-[15px] font-medium text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7">
              <div 
                className="p-8 sm:p-12" 
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderRadius: '24px', 
                  border: '1px solid #f3f4f6', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.04)' 
                }}
              >
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Send us a message</h3>
                <p className="text-gray-500 text-[15px] font-medium mb-10">Fill out the form below and our team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block mb-2">First Name *</label>
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        className={`${inputBase} ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        style={{ backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-2 font-medium">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block mb-2">Last Name *</label>
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        className={`${inputBase} ${errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        style={{ backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-2 font-medium">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block mb-2">Email Address *</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                        })}
                        className={`${inputBase} ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        style={{ backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-2 font-medium">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block mb-2">Phone Number</label>
                      <input
                        {...register('phone')}
                        className={inputBase}
                        style={{ backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block mb-2">Interested In</label>
                    <div className="relative">
                      <select
                        {...register('service')}
                        className={`${inputBase} appearance-none cursor-pointer pr-10`}
                        style={{ backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}
                      >
                        <option value="">Select a service...</option>
                        <option value="shopify">Shopify Store Development</option>
                        <option value="shopify-cro">Shopify Customization & CRO</option>
                        <option value="woocommerce">WooCommerce Development</option>
                        <option value="shopify-apps">Custom Shopify App Development</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block mb-2">Project Details *</label>
                    <textarea
                      {...register('message', { required: 'Please provide some details about your project' })}
                      rows="5"
                      className={`${inputBase} resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      style={{ backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-2 font-medium">{errors.message.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-[15px] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed`}
                      style={{
                        backgroundColor: isSuccess ? '#16a34a' : '#000000',
                        color: '#ffffff'
                      }}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : isSuccess ? (
                        <><CheckCircle2 className="w-5 h-5" /> Message Sent Successfully</>
                      ) : (
                        <>Send Message <Send className="w-4 h-4 ml-1" /></>
                      )}
                    </button>
                  </div>

                  <p className="text-[12px] font-medium text-gray-400 text-center mt-6">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map Footer ── */}
      <section className="bg-gray-100 border-t border-gray-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white border border-gray-200 p-4 rounded-[32px] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Side: Embedded Google Map */}
              <div className="w-full h-[350px] rounded-[24px] overflow-hidden border border-gray-100 relative bg-gray-50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.37568579069!2d76.28945654999999!3d9.98863615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa585792c3!2sKathrikadavu%2C%20Kaloor%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Right Side: Address Info */}
              <div className="flex flex-col justify-center p-8 lg:p-12 text-center lg:text-left">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-3">Task19 Technologies</h3>
                <p className="text-[16px] font-medium text-gray-500 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Kathrikadavu Junction, Ernakulam<br />
                  Kerala 682017, India
                </p>
                <div>
                  <a
                    href="https://maps.google.com/?q=Task19+Technologies+Kathrikadavu+Ernakulam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black rounded-full text-[14px] font-bold text-white hover:bg-gray-800 transition-all duration-300"
                  >
                    Open in Google Maps <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
