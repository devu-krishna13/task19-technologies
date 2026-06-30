import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg',
  outline: 'border border-border-dark text-text-primary bg-transparent hover:border-accent hover:text-accent',
  'outline-white': 'border border-white/30 text-white bg-transparent hover:bg-white hover:text-primary',
  ghost: 'bg-transparent hover:bg-secondary text-text-primary',
  dark: 'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm gap-2',
  md: 'px-7 py-3.5 text-[0.9375rem] gap-2.5',
  lg: 'px-9 py-4.5 text-base gap-3',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  arrow = false,
  className = '',
  ...props
}) {
  const classes = `
    inline-flex items-center justify-center font-display font-semibold tracking-wide
    transition-all duration-300 ease-out rounded-full
    hover:-translate-y-0.5
    ${variants[variant]} ${sizes[size]} ${className}
  `.trim()

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (to) {
    return <Link to={to} className={`group ${classes}`} {...props}>{content}</Link>
  }
  if (href) {
    return <a href={href} className={`group ${classes}`} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>
  }
  return <button className={`group ${classes}`} {...props}>{content}</button>
}
