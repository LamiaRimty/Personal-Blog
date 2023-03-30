import "./blog.css";
import React from "react";
import { json, Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchPost = () => {
    fetch(`http://localhost:8000/backend/blogs`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setBlogs(json);
      });
  };

  useEffect(() => {
    fetchPost();
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
