import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BlogCard from '../components/ui/BlogCard'
import PageHero from '../components/ui/PageHero'

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
    excerpt: apiBlog.excerpt || (firstSectionWithText.text_content ? firstSectionWithText.text_content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim().substring(0, 150) + '...' : 'Read this amazing article on our blog.'),
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
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const cachedData = sessionStorage.getItem('blogs_data');
    if (cachedData) {
      const data = JSON.parse(cachedData);
      processBlogData(data);
      return;
    }

    fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      sessionStorage.setItem('blogs_data', JSON.stringify(data));
      processBlogData(data);
    })
    .catch(err => {
      console.error(err)
      setLoading(false)
    })
  }, [])

  const processBlogData = (data) => {
    if (data && data.blogs) {
      const transformedBlogs = data.blogs.map(transformBlog);
      setBlogs(transformedBlogs);
      
      const apiCategories = new Set(transformedBlogs.map(b => b.category));
      const uniqueCategories = ['All', 'Latest Updates'];
      
      apiCategories.forEach(cat => {
        if (cat !== 'Latest Updates') {
          uniqueCategories.push(cat);
        }
      });
      
      setDynamicCategories(uniqueCategories);
    }
    setLoading(false)
  } // Fetch ONLY once on mount

  // Filter locally
  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(p => p.category === activeCategory)

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  const itemsPerPage = 6
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1
  const currentCards = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to the top of the grid
      window.scrollTo({ top: 350, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Helmet>
        <title>Blog & Insights — Task19 Technologies</title>
        <meta name="description" content="Expert insights on e-commerce development, Shopify optimization, digital transformation, and technology trends from the Task19 Technologies team." />
      </Helmet>

      {/* Hero */}
      <PageHero
        badgeText="Tech & E-commerce Blog"
        title={<><span className="whitespace-nowrap text-gray-900">Digital Strategies &</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Actionable Insights.</span></>}
        description="Expert insights on e-commerce development, Shopify optimization, digital transformation, and technology trends from the Task19 Technologies team."
        orbColor1="bg-blue-300/20"
        orbColor2="bg-indigo-300/20"
      />

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
                {currentCards.map((post, i) => (
                  <BlogCard key={post.slug} {...post} index={i} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="mt-12 md:mt-16 flex justify-center items-center gap-2">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none select-none"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all duration-300 focus:outline-none select-none
                        ${currentPage === page 
                          ? 'border-gray-900 bg-gray-900 text-white shadow-md' 
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none select-none"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              )}
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
