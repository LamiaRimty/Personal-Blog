import "./blog.css";
import React from "react";
import { Link } from "react-router-dom";
const BlogData = [
  {
    id: 1,
    title: "My journey to Web Development",
    time: "December 1,2022 .  🥐 10 min to read",
    qoute: "A personal reflection",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },

  {
    id: 2,
    title: "Difference between == and === in javascript",
    time: "December 1,2022 .  ☕️ 10 min to read",
    qoute: "Which one to use?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },

  {
    id: 3,
    title: "Ways of Creating objects JavaScript",
    time: "December 1,2022 .  🍱 10 min to read",
    qoute: "Three ways to set you on right path.?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];

function Blog() {
  return (
    <div className="blog">
      <h5>My Recent Blogs</h5>
      <div className="container blog-container">
        {BlogData.map(({ id, title, time, description }) => {
          return (
            <article key={id} className="blogItem">
              <h1 className="title">{title}</h1>
              <p className="time">{time}</p>
              {/* <p className="qoute"></p> */}
              <p className="description">{description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Blog;
