import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BlogCard from '../components/ui/BlogCard'
// import { blogPosts } from '../constants/data' // Removed hardcoded data

const API_KEY = 'pk_ucyZsOgpafCiGYM4oUblYWMRaQKw3LSW';
const API_URL = 'https://blogs.task19.com/api/v1/projects/blogs';

// Helper to transform API blog data to match our frontend format
const transformBlog = (apiBlog) => {
  const firstSectionWithText = apiBlog.sections?.find(s => s.text_content) || {};
  
  const image = apiBlog.cover_image 
    ? `https://blogs.task19.com${apiBlog.cover_image}` 
    : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=360&fit=crop';
  
  const slug = apiBlog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const dateObj = new Date(apiBlog.created_at);
  
  return {
    ...apiBlog,
    title: apiBlog.title,
    slug: slug,
    image: image,
    excerpt: apiBlog.excerpt || (firstSectionWithText.text_content ? firstSectionWithText.text_content.substring(0, 150) + '...' : 'Read this amazing article on our blog.'),
    category: apiBlog.category?.name || 'Latest Updates',
    date: dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
  };
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [dynamicCategories, setDynamicCategories] = useState(['All', 'Latest Updates'])

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data && data.blogs) {
        const transformedBlogs = data.blogs.map(transformBlog);
        setBlogs(transformedBlogs);
        
        // Extract unique categories from the API response
        const apiCategories = new Set(transformedBlogs.map(b => b.category));
        
        // Always start with 'All' and 'Latest Updates'
        const uniqueCategories = ['All', 'Latest Updates'];
        
        // Add any additional dynamic categories
        apiCategories.forEach(cat => {
          if (cat !== 'Latest Updates') {
            uniqueCategories.push(cat);
          }
        });
        
        setDynamicCategories(uniqueCategories);
      }
      setLoading(false)
    })
    .catch(err => {
      console.error(err)
      setLoading(false)
    })
  }, [])

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(p => p.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Blog & Insights — Task19 Technologies</title>
        <meta name="description" content="Expert insights on e-commerce development, Shopify optimization, digital transformation, and technology trends from the Task19 Technologies team." />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050f28] hero-section-wrapper min-h-[400px] h-[55svh] md:h-screen md:min-h-[500px] max-h-[600px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&crop=center&w=800&h=1200&q=90" />
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&crop=center&w=1920&h=1080&q=90"
              alt="Blog Background"
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
              <span className="text-white/90 text-[12px] md:text-sm font-medium">Insights & Resources</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <h1 className="font-display font-bold text-white leading-[1.15] md:leading-[1.1] tracking-tight mb-4 md:mb-8" style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)' }}>
                Ideas Worth<br /><em className="font-serif-italic not-italic text-white/40">Building On.</em>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-[24px] lg:px-[40px]">

          {/* Category Filter */}
          <div className="flex overflow-x-auto gap-3 md:gap-4 mb-10 md:mb-14 md:flex-wrap justify-start md:justify-start pb-2 -mx-[24px] px-[24px] lg:-mx-[40px] lg:px-[40px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {dynamicCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap flex-shrink-0 flex items-center justify-center h-[48px] px-6 md:px-8 rounded-full text-[15px] font-medium transition-all duration-300 border focus:outline-none select-none
                  ${activeCategory === cat
                    ? 'bg-black text-white border-black hover:bg-black hover:text-white'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-[15px] text-[#6F7482]">Loading articles...</p>
            </div>
          ) : filtered.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} {...post} index={i} />
                ))}
              </div>
              <div className="mt-12 md:mt-16 flex justify-center">
                <button className="px-8 py-3 rounded-full border border-gray-200 bg-white text-[13px] font-bold tracking-wide uppercase text-gray-900 hover:bg-gray-900 hover:text-white active:bg-gray-900 active:text-white transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none select-none">
                  View More Articles
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-[15px] text-[#6F7482]">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
