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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const fetchBlogDetails = async () => {
    const res = await axios.get(`http://localhost:8000/backend/blogs/${id}`);
    //console.log(res);
    setBlogPost(res.data);
    setTitle(res.data.title);
    setDescription(res.data.description);
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

  const handleUpdate = async () => {
    console.log(1);
    try {
      await axios.put(`http://localhost:8000/backend/blogs/${id}`, {
        title,
        description,
      });
      console.log(2);
      setUpdateMode(false);
      console.log(3);
    } catch (error) {
      console.log(4);
      console.log(error);
      console.log(5);
    }
    console.log(6);
  };

  return (
    <>
      <section id="details">
        {blogPost ? (
          <article className="singleBlog">
            <div className="container container-blog-wrap">
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
              {updateMode ? (
                <input
                  type="text"
                  value={title}
                  className="blogTitleInput"
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <>
                  <h1 className="blogTitle">
                    {title}
                    <div className="buttons blogEdit">
                      <button
                        className="button"
                        onClick={() => setUpdateMode(true)}
                      >
                        <BsPencilSquare />
                      </button>

                      <button className="button" onClick={handleDelete}>
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </h1>
                </>
              )}
              <p className="time">{blogPost.time}</p>
              {updateMode ? (
                <textarea
                  className="blogDescInput"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              ) : (
                <p className="blogDesc">{description}</p>
              )}

              {updateMode && (
                <button className="blogEditButton" onClick={handleUpdate}>
                  Update
                </button>
              )}
            </div>
          </article>
        ) : null}
      </section>
    </>
  );
}

export default Details;
