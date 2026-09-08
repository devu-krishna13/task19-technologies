import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import BlogCard from '../components/ui/BlogCard'
import CTASection from '../components/ui/CTASection'

const API_KEY = 'pk_ucyZsOgpafCiGYM4oUblYWMRaQKw3LSW';
const API_URL = 'https://blogs.task19.com/api/v1/projects/blogs';

const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data && data.blogs) {
        const matchedPost = data.blogs.find(b => generateSlug(b.title) === slug) || data.blogs[0];
        
        if (matchedPost) {
          const firstSectionWithText = matchedPost.sections?.find(s => s.text_content) || {};
          
          const image = matchedPost.cover_image 
            ? `https://blogs.task19.com${matchedPost.cover_image}` 
            : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop';
            
          const dateObj = new Date(matchedPost.created_at);
            
            setPost({
            ...matchedPost,
            title: matchedPost.title,
            slug: generateSlug(matchedPost.title),
            image: image,
            excerpt: matchedPost.excerpt || (firstSectionWithText.text_content ? firstSectionWithText.text_content.substring(0, 150) + '...' : ''),
            category: matchedPost.category?.name || 'Latest Updates',
            date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            readTime: '5 min read',
            author_name: matchedPost.author_name,
            author_title: matchedPost.author_title,
            author_avatar: matchedPost.author_avatar ? `https://blogs.task19.com${matchedPost.author_avatar}` : null
          })
        }
        
        const relatedPosts = data.blogs
          .filter(b => generateSlug(b.title) !== slug)
          .slice(0, 2)
          .map(b => {
            const firstSectionWithText = b.sections?.find(s => s.text_content) || {};
            const image = b.cover_image ? `https://blogs.task19.com${b.cover_image}` : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop';
            const dateObj = new Date(b.created_at);
            
            return {
              title: b.title,
              slug: generateSlug(b.title),
              image: image,
              excerpt: b.excerpt || (firstSectionWithText.text_content ? firstSectionWithText.text_content.substring(0, 150) + '...' : ''),
              category: b.category?.name || 'Latest Updates',
              date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
              readTime: '5 min read'
            }
          })
        setRelated(relatedPosts)
      }
      setLoading(false)
    })
    .catch(err => {
      console.error(err)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center bg-surface">
        <p className="text-gray-500">Loading article...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center bg-surface">
        <p className="text-gray-500">Article not found.</p>
      </div>
    )
  }

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
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover mb-10 shadow-lg rounded-[20px]" loading="lazy" />
              )}
              <div className="prose prose-lg max-w-none">
                {post.sections?.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    {section.image_path && (
                      <img 
                        src={`https://blogs.task19.com${section.image_path}`} 
                        alt={`Section ${idx}`} 
                        className="w-full h-auto max-h-[500px] object-cover mb-6 shadow-lg rounded-[20px]" 
                        loading="lazy" 
                      />
                    )}
                    {section.text_content && (
                      <div 
                        className="text-lg text-text-secondary leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: section.text_content.replace(/\n/g, '<br/>') }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </article>

            <aside>
              <div className="sticky top-28 space-y-8">
                <div className="p-6 bg-secondary border border-border rounded-[20px]">
                  <h3 className="font-display font-bold text-text-primary mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <img src={post.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || 'Task19 Team')}&background=2563eb&color=fff&size=48`} alt={post.author_name || "Task19 Team"} className="w-14 h-14 rounded-full object-cover shadow-md" />
                    <div>
                      <p className="font-display font-semibold text-text-primary text-[15px]">{post.author_name || "Task19 Team"}</p>
                      <p className="text-xs text-text-muted mt-1">{post.author_title || "Digital Commerce Experts"}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Our team of e-commerce specialists writes about practical strategies for D2C growth, technical architecture, and digital transformation.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-[0_0_40px_rgba(1,58,214,0.15)] relative overflow-hidden group mt-8">
                  {/* Subtle accent glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#013ad6]/30 blur-[50px] rounded-full group-hover:bg-[#013ad6]/40 transition-all duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-white mb-3 text-xl">Need Help With Your Store?</h3>
                    <p className="text-[14px] text-gray-400 mb-6 leading-relaxed">Get a free technical audit and discover exactly what's holding your revenue back.</p>
                    <Link to="/contact" className="inline-flex items-center justify-center w-full gap-2 text-[14px] font-display font-bold bg-white px-6 py-3 hover:bg-gray-200 transition-colors duration-300 rounded-full shadow-sm" style={{ color: '#000000' }}>
                      Get Free Audit
                    </Link>
                  </div>
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
              {related.map((p, i) => <BlogCard key={p.slug} {...p} index={i} />)}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
