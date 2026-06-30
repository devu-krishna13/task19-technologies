import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 70126 39646',
    subDetails: 'Mon-Fri from 9am to 6pm (IST)',
    link: 'tel:+917012639646'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@task19.com',
    subDetails: 'We typically reply within 2 hours',
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — Task19 Technologies</title>
        <meta name="description" content="Get in touch with Task19 Technologies for premium web development, mobile apps, and digital transformation services. Based in Ernakulam, Kerala." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-24 section-dark bg-dot-pattern">
        <div className="container">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[0.3em] uppercase text-accent">Contact</span>
            </span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h1)' }}>
              Let's Build Something <br />
              <span className="text-gradient">Extraordinary Together</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Whether you have a fully formed project or just an idea, our team is ready to help you turn it into reality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface relative -mt-10 z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 bg-secondary border border-border h-full">
                <SectionHeading
                  label="Reach Out"
                  title="Get in Touch"
                  align="left"
                  className="mb-8"
                />
                
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
                      <div className="w-12 h-12 flex items-center justify-center bg-surface border border-border text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">{info.title}</p>
                        <p className="text-sm font-medium text-text-secondary">{info.details}</p>
                        <p className="text-xs text-text-muted mt-1">{info.subDetails}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="pt-8 border-t border-border">
                  <h4 className="font-display font-semibold text-text-primary mb-4">What happens next?</h4>
                  <ul className="space-y-3">
                    {[
                      'We schedule a 30-min discovery call',
                      'We sign an NDA to protect your ideas',
                      'We deliver a detailed technical proposal',
                      'We assemble your dedicated team'
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-text-secondary">
                        <span className="font-display font-bold text-accent">0{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 bg-surface border border-border shadow-xl">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">Send us a message</h3>
                <p className="text-text-secondary mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-display font-semibold text-text-primary">First Name *</label>
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        className={`w-full bg-secondary border px-4 py-3 text-sm focus:outline-none transition-colors duration-300
                          ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent'}`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-display font-semibold text-text-primary">Last Name *</label>
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        className={`w-full bg-secondary border px-4 py-3 text-sm focus:outline-none transition-colors duration-300
                          ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent'}`}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-display font-semibold text-text-primary">Email Address *</label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                        })}
                        className={`w-full bg-secondary border px-4 py-3 text-sm focus:outline-none transition-colors duration-300
                          ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent'}`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-display font-semibold text-text-primary">Phone Number</label>
                      <input
                        {...register('phone')}
                        className="w-full bg-secondary border border-border focus:border-accent px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-display font-semibold text-text-primary">Interested In</label>
                    <select
                      {...register('service')}
                      className="w-full bg-secondary border border-border focus:border-accent px-4 py-3 text-sm focus:outline-none transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ecommerce">E-commerce / Shopify</option>
                      <option value="design">UI/UX Design</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-display font-semibold text-text-primary">Project Details *</label>
                    <textarea
                      {...register('message', { required: 'Please provide some details about your project' })}
                      rows="5"
                      className={`w-full bg-secondary border px-4 py-3 text-sm focus:outline-none transition-colors duration-300 resize-none
                        ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-accent'}`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full flex items-center justify-center gap-2 py-4 font-display font-bold text-sm uppercase tracking-wider transition-all duration-300
                      ${isSuccess 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-accent hover:bg-accent-hover text-white disabled:opacity-70 disabled:cursor-not-allowed'}`}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : isSuccess ? (
                      <><CheckCircle2 className="w-5 h-5" /> Message Sent Successfully</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                  
                  <p className="text-xs text-text-muted text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-secondary border-t border-border mt-20 relative">
         <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
         {/* Simple placeholder for map - in production use Google Maps iframe */}
         <div className="w-full h-full flex flex-col items-center justify-center text-text-muted p-6 text-center">
            <MapPin className="w-12 h-12 mb-4 text-border" />
            <p className="font-display text-lg font-semibold text-text-secondary">Task19 Technologies</p>
            <p>Kathrikadavu Junction, Ernakulam, Kerala 682017</p>
         </div>
      </section>
    </>
  )
}
