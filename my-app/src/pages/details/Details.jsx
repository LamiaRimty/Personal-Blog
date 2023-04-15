import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

function Details() {
  const publicFolder = "http://localhost:8000/images/";
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  const fetchBlogDetails = async () => {
    const res = await axios.get(`http://localhost:8000/backend/blogs/${id}`);
    //console.log(res);
    setBlogPost(res.data);
  };
  useEffect(() => {
    fetchBlogDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/backend/blogs/${id}`, id);
      window.location.replace(`http://localhost:3000`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section id="details">
        {blogPost ? (
          <article className="singleBlog">
            <div className="container">
              <h1>{blogPost.title}</h1>
              <div>
                {/* home page image  old no,new yes  */}
                {blogPost.image && (
                  <img src={publicFolder + blogPost.image} alt="" />
                )}

                {/* home page image  old no,new yes  */}
                {/* <img src={publicFolder + blogPost.image} alt="" /> */}

                {/* home page image  old yes,new no  */}
                {/* <img src={blogPost.image} alt="" /> */}
              </div>
              <p className="time">{blogPost.time}</p>
              <p className="desc">{blogPost.description}</p>
            </div>
          </article>
        ) : null}
        <div className="buttons">
          <button className="button">
            <BsPencilSquare />
          </button>
          <button className="button" onClick={handleDelete}>
            <AiOutlineDelete />
          </button>
        </div>
      </section>
    </>
  );
}

export default Details;
