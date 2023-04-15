//Documentation style
// import "./blog.css";
// import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const fetchBlogs = async () => {
//     const responseBlog = await axios.get(`http://localhost:8000/backend/blogs`);
//     setBlogs(responseBlog.data);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <>
//       <section className="blog">
//         <div className="contanier blog-container">
//           {blogs.map((b) => (
//             <article className="blogItems" key={b.id}>
//               <div className="blog-img">
//                 <img src={b.image} alt="img" />
//               </div>
//               <Link to={`details/${b.id}`} className="link">
//                 <h3 className="title">{b.title}</h3>
//               </Link>
//               <p className="qoute">{b.qoute}</p>
//               <div className="date-time">
//                 <AiOutlineClockCircle className="clock-icon" />
//                 <label className="time">{b.time}</label>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
// export default Blog;

import "./blog.css";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  const publicFolder = "http://localhost:8000/images/";
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
          {blogs.map((b) => (
            <article className="blogItems" key={b.id}>
              <div className="blog-img">
                <img src={publicFolder + b.image} alt="img" />
              </div>
              <Link to={`details/${b.id}`} className="link">
                <h3 className="title">{b.title}</h3>
              </Link>
              <p className="qoute">{b.qoute}</p>
              <div className="date-time">
                <AiOutlineClockCircle className="clock-icon" />
                <label className="time">{b.time}</label>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export default Blog;
