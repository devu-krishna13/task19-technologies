import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import BlogCard from '../components/ui/BlogCard'
import CTASection from '../components/ui/CTASection'
import { blogPosts } from '../constants/data'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0]
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{post.title} — Task19 Technologies Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <section className="pt-40 pb-24 section-dark bg-grid-pattern">
        <div className="container">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors duration-300 font-display text-sm">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block font-display text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">{post.category}</span>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'var(--font-size-h2)' }}>{post.title}</h1>
            <div className="flex flex-wrap items-center gap-5 text-white/50 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span className="flex items-center gap-1.5"><Tag className="w-4 h-4" />{post.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <article className="lg:col-span-2">
              <img src={post.image} alt={post.title} className="w-full object-cover mb-10 shadow-lg" loading="lazy" />
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">{post.excerpt}</p>
                <h2 className="font-display text-2xl font-bold text-text-primary mt-10 mb-4">The Core Problem</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  In the competitive Direct-to-Consumer landscape, the gap between a store that generates revenue and one that struggles to convert comes down to a handful of critical technical factors. Understanding these bottlenecks is the first step to eliminating them.
                </p>
                <h2 className="font-display text-2xl font-bold text-text-primary mt-10 mb-4">The Path Forward</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Each of these challenges has proven solutions. The key is approaching them systematically, with the right technical expertise, and an unwavering focus on the metric that matters most: revenue generated per visitor.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  At Task19 Technologies, we've helped dozens of brands identify and eliminate these conversion killers. The results speak for themselves: clients typically see a 30–150% improvement in conversion rates within 90 days of implementing our recommendations.
                </p>
              </div>
            </article>

            <aside>
              <div className="sticky top-28 space-y-8">
                <div className="p-6 bg-secondary border border-border">
                  <h3 className="font-display font-bold text-text-primary mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://ui-avatars.com/api/?name=Task19+Team&background=2563eb&color=fff&size=48" alt="Task19 Team" className="w-12 h-12 rounded-full" />
                    <div>
                      <p className="font-display font-semibold text-text-primary text-sm">Task19 Team</p>
                      <p className="text-xs text-text-muted">Digital Commerce Experts</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Our team of e-commerce specialists writes about practical strategies for D2C growth, technical architecture, and digital transformation.
                  </p>
                </div>
                <div className="p-6 bg-accent text-white">
                  <h3 className="font-display font-bold mb-3">Need Help With Your Store?</h3>
                  <p className="text-sm text-white/80 mb-4">Get a free technical audit and discover what's holding your store back.</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-display font-semibold bg-white text-accent px-4 py-2 hover:bg-secondary transition-colors duration-300">
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-grey">
          <div className="container">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {related.map((post, i) => <BlogCard key={post.slug} {...post} index={i} />)}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
