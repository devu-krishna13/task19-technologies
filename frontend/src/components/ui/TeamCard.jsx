import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function TeamCard({ name, role, bio, image, photo, social, index = 0 }) {
  const imgUrl = image || photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=050f28&color=fff&size=400`
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-white border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 rounded-[24px]"
    >
      <div className="aspect-[4/4] overflow-hidden bg-gray-50 relative shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050f28]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={imgUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {social && (
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-[#013Ad6] flex items-center justify-center hover:bg-[#013Ad6] hover:text-white transition-colors duration-300 shadow-lg">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 shadow-lg">
                <XIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="font-display text-[20px] font-bold text-gray-900 mb-2 group-hover:text-[#013Ad6] transition-colors">{name}</h3>
        <p className="text-[12px] font-bold tracking-widest uppercase text-[#013Ad6] mb-4">{role}</p>
        <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-4">{bio}</p>
      </div>
    </motion.div>
  )
}
