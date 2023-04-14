import React, { useEffect, useState } from "react";
import "./details.css";
import "../../components/header/header.css";
//import img from "../../assets/images/product1.jpg"
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

export function SingleblogPost() {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  const [blog, setblog] = useState({});
  const PublicFolder = "http://localhost:8000/images/";

  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get("http://localhost:8000/blogs/" + path);
      console.log(res);
      //setp 2
      setblog(res.data);
    };
    getBlog();
  }, [path]);

  // step 3
  // file create garne time add garne

  //   const handleDelete = async () => {
  //     try {
  //       await axios.delete(`/blogs/${blog._id}`, {
  //         formData: { username: user.username },
  //       });
  //       window.location.replace("/");
  //     } catch (error) {}
  //   };
  return (
    <>
      <section className="singlePage">
        <div className="container">
          {/*<div className='left'>{post.photo && <img src={post.photo} alt='' />}</div>*/}
          <div className="left">
            {blog.image && <img src={PublicFolder + blog.image} alt="" />}
          </div>
          <div className="right">
            <div className="buttons">
              <button className="button">
                <BsPencilSquare />
              </button>
              {/* <button className="button" onClick={handleDelete}> */}
              <button className="button">
                <AiOutlineDelete />
              </button>
            </div>

            <h1>{blog.title}</h1>
            <p>{blog.time}</p>
            <p>{blog.qoute}</p>
            <p>{blog.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
