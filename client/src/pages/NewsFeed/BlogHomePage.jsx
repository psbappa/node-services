import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaClock, FaTags } from 'react-icons/fa';
import './BlogHomePage.css'; // for styling

const BlogHomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blogPosts = [
    {
      title: "Mastering React in 2025",
      date: "July 12, 2025",
      category: "React",
      excerpt: "Explore the latest techniques and patterns to build scalable React applications...",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "10 Tips for Better UI/UX",
      date: "July 10, 2025",
      category: "Design",
      excerpt: "Good design is invisible. Here's how to improve your interfaces with simple practices...",
      image: "https://picsum.photos/200/300",
    },
    // Add more posts
  ];

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <header className="hero-section" data-aos="fade-up">
        <div className="hero-text">
          <h1>Welcome to My Tech Blog</h1>
          <p>Insights, tutorials, and guides to help you grow as a developer.</p>
        </div>
        <img src="https://unsplash.com/photos/male-mannequin-m9d8W67TXDI" alt="hero" />
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Blog Posts */}
        <main className="posts-section">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index} data-aos="fade-up">
              <img src={post.image} alt={post.title} />
              <div className="card-content">
                <h2>{post.title}</h2>
                <div className="meta">
                  <span><FaClock /> {post.date}</span>
                  <span><FaTags /> {post.category}</span>
                </div>
                <p>{post.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </main>

        {/* Sidebar */}
        <aside className="sidebar" data-aos="fade-left">
          <h3>Categories</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Design</li>
            <li>Career</li>
          </ul>
          <h3>Recent Posts</h3>
          <ul>
            <li>Optimizing React Performance</li>
            <li>Top VSCode Extensions</li>
            <li>How to Learn CSS Fast</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogHomePage;
