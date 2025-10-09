import React, { useState } from 'react'
import './Blog.css'

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    
    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            title: 'Building Strong Asian Leadership Communities',
            excerpt: 'Exploring the importance of creating supportive networks for emerging Asian leaders in professional environments.',
            category: 'leadership',
            author: 'Asian Business Leaders Team',
            date: '2024-01-15',
            image: '/src/assets/summit-lady.png',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Navigating Career Growth in Corporate Environments',
            excerpt: 'Strategies and insights for Asian professionals advancing their careers in competitive business landscapes.',
            category: 'career',
            author: 'Marcus Chen',
            date: '2024-01-10',
            image: '/src/assets/marcus.jpg',
            readTime: '7 min read'
        },
        {
            id: 3,
            title: 'The Power of Mentorship in Asian Business Networks',
            excerpt: 'How mentorship programs are transforming the way Asian professionals connect and grow together.',
            category: 'mentorship',
            author: 'Ellena Wang',
            date: '2024-01-05',
            image: '/src/assets/ellena.jpeg',
            readTime: '4 min read'
        },
        {
            id: 4,
            title: 'Innovation and Entrepreneurship in Asian Communities',
            excerpt: 'Highlighting successful Asian entrepreneurs and the innovative approaches they bring to business.',
            category: 'innovation',
            author: 'Alex Liu',
            date: '2023-12-28',
            image: '/src/assets/alex.jpg',
            readTime: '6 min read'
        },
        {
            id: 5,
            title: 'Breaking Barriers: Women in Asian Leadership',
            excerpt: 'Celebrating the achievements of Asian women leaders and addressing the unique challenges they face.',
            category: 'leadership',
            author: 'Michaela Zhang',
            date: '2023-12-20',
            image: '/src/assets/michaela.jpg',
            readTime: '8 min read'
        },
        {
            id: 6,
            title: 'Networking Strategies for Young Professionals',
            excerpt: 'Effective approaches to building meaningful professional relationships in the Asian business community.',
            category: 'career',
            author: 'ABL Editorial Team',
            date: '2023-12-15',
            image: '/src/assets/me.jpeg',
            readTime: '5 min read'
        }
    ]
    
    const categories = [
        { id: 'all', name: 'All Posts' },
        { id: 'leadership', name: 'Leadership' },
        { id: 'career', name: 'Career Growth' },
        { id: 'mentorship', name: 'Mentorship' },
        { id: 'innovation', name: 'Innovation' }
    ]
    
    const filteredPosts = selectedCategory === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === selectedCategory)
    
    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-title">Stories & Insights</h1>
                <p className="blog-subtitle">Insights, stories, and perspectives from the Asian business community</p>
            </div>
            
            <div className="blog-filters">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            
            <div className="blog-grid">
                {filteredPosts.map(post => (
                    <article key={post.id} className="blog-card">
                        <div className="blog-card-image">
                            <img src={post.image} alt={post.title} />
                            <div className="blog-category-tag">
                                {categories.find(cat => cat.id === post.category)?.name}
                            </div>
                        </div>
                        
                        <div className="blog-card-content">
                            <div className="blog-meta">
                                <span className="blog-author">{post.author}</span>
                                <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { 
                                    month: 'long', 
                                    day: 'numeric', 
                                    year: 'numeric' 
                                })}</span>
                                <span className="blog-read-time">{post.readTime}</span>
                            </div>
                            
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Blog


