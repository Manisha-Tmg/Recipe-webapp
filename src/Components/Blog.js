import React from "react";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Recent Posts From our users</h2>
      <div className="blog-grid">
        {/* You can map over an array of blog posts here */}
        <div className="blog-post">
          <img src="path_to_blog_image1.jpg" alt="Blog Post 1" />
          <h3>Blog Post Title 1</h3>
          <p>Short description of the blog post...</p>
        </div>
        <div className="blog-post">
          <img src="path_to_blog_image2.jpg" alt="Blog Post 2" />
          <h3>Blog Post Title 2</h3>
          <p>Short description of the blog post...</p>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default Blog;
