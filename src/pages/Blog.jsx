import React, { useState } from 'react';
import './Blog.css';
const blogPosts = [
  {
    title: "5 Things to Check Before Booking a Hotel Online",
    summary: "Check reviews, cancellation policy, price comparisons, hidden fees, and location.",
    date: "May 20, 2025",
    author: "Aviral Mishra",
  },
  {
    title: "Top 10 Travel Hacks Every Smart Traveler Should Know",
    summary: "10 smart hacks to save time, money, and travel smarter.",
    date: "May 12, 2025",
    author: "Aviral Mishra",
  },
  {
    title: "How to Travel on a Budget Without Compromising Comfort",
    summary: "Design lessons from building a user-friendly hotel app.",
    date: "May 1, 2025",
    author: "Aviral Mishra",
  },
  {
    title: "Best Apps Every Traveler Should Have",
    summary: "Explore the must-have apps for navigation, bookings, and translation.",
    date: "April 20, 2025",
    author: "Aviral Mishra",
  },
  {
    title: "Why Hotel Reviews Matter More Than You Think",
    summary: "Learn how to interpret reviews and spot genuine feedback.",
    date: "April 10, 2025",
    author: "Aviral Mishra",
  },
  {
    title: "Packing Like a Pro: Tips for Light Travel",
    summary: "Smart packing strategies to save space and stress.",
    date: "March 28, 2025",
    author: "Aviral Mishra",
  },
];
const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };
  return (
    <section className="blog">
      <h2>StayMaster Blog</h2>
      <p>Explore travel tips, tech insights, product updates, and more from the StayMaster team.</p>
      <div className="blog-grid">
        {blogPosts.slice(0, visibleCount).map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <span className="author">{post.author} · {post.date}</span>
          </div>
        ))}
      </div>
      {visibleCount < blogPosts.length && (
        <button className="see-more-btn" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </section>
  );
};
export default Blog;