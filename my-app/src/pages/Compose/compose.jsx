import React, { useState } from "react";
import "./compose.css";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

function Compose() {
  // const [image, setImage] = useState("");
  // const [title, setTitle] = useState("");
  // const [time, setTime] = useState("");
  // const [qoute, setQoute] = useState("");
  // const [description, setDescription] = useState("");

  // const [value, setValue] = useState("");
  // console.log(value);
  // const [post, setPost] = useState({
  //   image: "",
  //   title: "",
  //   time: "",
  //   qoute: "",
  //   description: "",
  // });
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   console.log(name);
  //   console.log(value);
  //   setPost((prevPost) => {
  //     return {
  //       ...prevPost,
  //       [name]: value,
  //     };
  //   });
  // }

  // function submitPost(event) {
  //   props.onAdd(post);
  //   event.preventDefault();
  // }

  return (
    <>
      <section id="composeBlog">
        <div className="container-compose">
          <div className="container">
            <img
              className="composeImg"
              src="https://cdn.dribbble.com/users/4596776/screenshots/14382770/untitled_artwork_2_copy.png"
              alt="composeImg"
            />
          </div>
          <form className="composeForm">
            <div className="composeFormGroup flexCenter">
              <label>Cover Photo</label>
              <input
                name="image"
                // value={post.image}
                // onChange={handleChange}
                className="composeBlog"
                type="file"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Title</label>
              <input
                name="title"
                // value={post.title}
                // onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Title"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Time</label>
              <input
                name="time"
                //  value={post.time}
                // onChange={handleChange}
                className="composeBlog"
                type="time"
                placeholder="Time"
                autoFocus={true}
              />
            </div>

            <div className="composeFormGroup">
              <label>Qoute</label>
              <input
                name="qoute"
                // value={post.qoute}
                // onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Qoute"
                autoFocus={true}
              />
            </div>

            <div className="composeFormGroup" id="composeEdit">
              <label>Description</label>
              <textarea
                name="description"
                //  value={post.description}
                //   onChange={handleChange}
                className="composeBlog"
                type="text"
                placeholder="Write a blog..."
                cols="30"
                rows="10"
              ></textarea>
              {/* <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="composeBlog editor"
                type="text"
                placeholder="Qoute"
                autoFocus={true}
              /> */}
              ;
            </div>

            <button
              // onClick={submitPost}
              className="composeBlogBtn"
              type="submit"
              autoComplete="off"
            >
              Publish
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Compose;
