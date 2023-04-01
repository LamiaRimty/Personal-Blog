import "./blog.css";
import React from "react";
import { json, Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const responseBlog = await axios.get(`http://localhost:8000/backend/blogs`);
    setBlogs(responseBlog.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <section className="blog">
        <div className="contanier blog-container">
          {blogs.map((blogItem) => (
            <article className="blogItems" key={blogItem.id}>
              <div className="blog-img">
                <img src={blogItem.image} alt="img" />
              </div>
              <Link to={`details/${blogItem.id}`} className="link">
                <h3 className="title">{blogItem.title}</h3>
              </Link>
              <p className="qoute">{blogItem.qoute}</p>
              <div className="date-time">
                <AiOutlineClockCircle className="clock-icon" />
                <label className="time">{blogItem.time}</label>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export default Blog;
