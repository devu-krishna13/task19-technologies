import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

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

  const inputBase = `w-full bg-transparent border-0 border-b-2 border-border focus:border-accent px-0 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none transition-colors duration-300`

  return (
    <>
      <Helmet>
        <title>Contact Us — Task19 Technologies</title>
        <meta name="description" content="Get in touch with Task19 Technologies for premium Shopify development, mobile apps, and digital transformation services. Based in Ernakulam, Kerala." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="container relative z-10">
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-accent" />
              <span className="font-display text-xs font-medium tracking-[0.3em] uppercase text-accent">Contact</span>
            </span>
            <h1 className="font-display font-light text-white mb-7 leading-[1.05]" style={{ fontSize: 'var(--font-size-h1)' }}>
              Let's Build Something<br />
              <em className="font-serif-italic text-white/50">Extraordinary Together</em>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              Whether you have a fully-formed project or just an idea, our team is ready to help you turn it into a revenue-driving reality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

            {/* Contact Info */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="font-display text-xs font-medium tracking-[0.25em] uppercase text-accent">Reach Out</span>
              </span>
              <h2 className="font-display font-light text-text-primary mb-8 leading-snug" style={{ fontSize: 'var(--font-size-h3)' }}>
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
                    <div className="w-11 h-11 flex items-center justify-center border border-border text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 flex-shrink-0">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-display font-medium text-text-primary mb-1 group-hover:text-accent transition-colors duration-300 text-sm">{info.title}</p>
                      <p className="text-sm font-medium text-text-secondary">{info.details}</p>
                      <p className="text-xs text-text-muted mt-0.5">{info.subDetails}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <h4 className="font-display font-medium text-text-primary mb-5 text-sm">What happens next?</h4>
                <ol className="space-y-4">
                  {[
                    'We schedule a 30-min discovery call',
                    'We sign an NDA to protect your ideas',
                    'We deliver a detailed technical proposal',
                    'We assemble your dedicated team'
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="font-display font-semibold text-accent text-sm flex-shrink-0">0{i + 1}</span>
                      <span className="text-sm text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-border p-8 sm:p-10">
                <h3 className="font-display text-2xl font-light text-text-primary mb-2">Send us a message</h3>
                <p className="text-text-secondary text-sm mb-8 font-light">Fill out the form below and our team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-xs font-display font-medium text-text-muted tracking-wider uppercase block mb-2">First Name *</label>
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        className={`${inputBase} ${errors.firstName ? 'border-b-error' : ''}`}
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-xs text-error mt-2">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-display font-medium text-text-muted tracking-wider uppercase block mb-2">Last Name *</label>
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        className={`${inputBase} ${errors.lastName ? 'border-b-error' : ''}`}
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-xs text-error mt-2">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-xs font-display font-medium text-text-muted tracking-wider uppercase block mb-2">Email Address *</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                        })}
                        className={`${inputBase} ${errors.email ? 'border-b-error' : ''}`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-xs text-error mt-2">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-display font-medium text-text-muted tracking-wider uppercase block mb-2">Phone Number</label>
                      <input
                        {...register('phone')}
                        className={inputBase}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-display font-medium text-text-muted tracking-wider uppercase block mb-2">Interested In</label>
                    <select
                      {...register('service')}
                      className={`${inputBase} appearance-none cursor-pointer`}
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
                  </div>

                  <div>
                    <label className="text-xs font-display font-medium text-text-muted tracking-wider uppercase block mb-2">Project Details *</label>
                    <textarea
                      {...register('message', { required: 'Please provide some details about your project' })}
                      rows="4"
                      className={`${inputBase} resize-none ${errors.message ? 'border-b-error' : ''}`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && <p className="text-xs text-error mt-2">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full flex items-center justify-center gap-2 py-4 font-display font-semibold text-sm uppercase tracking-wider transition-all duration-300
                      ${isSuccess
                        ? 'bg-success text-white cursor-default'
                        : 'bg-accent hover:bg-accent-hover text-white disabled:opacity-70 disabled:cursor-not-allowed'}`}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : isSuccess ? (
                      <><CheckCircle2 className="w-4 h-4" /> Message Sent Successfully</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 w-full bg-secondary border-t border-border relative overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center text-text-muted p-6 text-center">
          <MapPin className="w-10 h-10 mb-4 text-border" />
          <p className="font-display text-base font-medium text-text-secondary">Task19 Technologies</p>
          <p className="text-sm text-text-muted mt-1">Kathrikadavu Junction, Ernakulam, Kerala 682017, India</p>
          <a
            href="https://maps.google.com/?q=Kathrikadavu+Ernakulam+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs text-accent hover:text-accent-hover font-display font-medium"
          >
            Open in Google Maps <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </section>
    </>
  )
}
