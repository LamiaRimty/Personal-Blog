import "./blog.css";
import React from "react";
import { blog } from "../../assets/data/blogData";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="blog">
        {blog.map((blogItem) => (
          <article className="blog-container" key={blogItem.id}>
            <Link to={`details/${blogItem.id}`} className="link">
              <h1 className="title">{blogItem.title}</h1>
            </Link>

            <p className="time">{blogItem.time}</p>
            <p className="qoute">{blogItem.qoute}</p>
          </article>
        ))}
      </div>
    </>
  );
}
export default Blog;
