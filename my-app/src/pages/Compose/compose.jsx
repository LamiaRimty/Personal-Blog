import React, { useState } from "react";
import "./compose.css";
import axios from "axios";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

//               <textarea
//                 // name="description"
//                 // value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="composeBlog"
//                 type="text"
//                 placeholder="Write a blog..."
//                 cols="30"
//                 rows="10"
//               ></textarea>
//               {/* <ReactQuill
//                 theme="snow"
//                 value={value}
//                 onChange={setValue}
//                 className="composeBlog editor"
//                 type="text"
//                 placeholder="Qoute"
//                 autoFocus={true}
//               /> */}
//             </div>

function Compose() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [qoute, setQoute] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("1");

    const newBlog = { title, time, qoute, description };
    console.log("2");
    console.log(newBlog);

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      data.append("title", title);
      data.append("time", time);
      data.append("qoute", qoute);
      data.append("description", description);
      newBlog.image = filename;

      console.log("3");

      try {
        await axios.post(`http://localhost:8000/backend/upload`, data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("4");

    try {
      //sent it to a single page
      const res = await axios.post(
        `http://localhost:8000/backend/blogs`,
        newBlog
      );

      console.log("5");
      window.location.replace(`http://localhost:3000/details/${res.data.id}`);
    } catch (err) {}
    console.log("6");
  };

  return (
    <>
      <section id="composeBlog">
        <div className="container-compose">
          <div className="container">
            {file && (
              <img
                className="composeImg"
                src={URL.createObjectURL(file)}
                alt="composeImg"
              />
            )}
          </div>
          <form className="composeForm" onSubmit={handleSubmit}>
            <div className="composeFormGroup flexCenter">
              <label>Cover Photo</label>
              <input
                id="fileInput"
                onChange={(e) => setFile(e.target.files[0])}
                accept="image/*"
                className="composeBlog"
                type="file"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="composeBlog"
                type="text"
                placeholder="Title"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Time</label>
              <input
                onChange={(e) => setTime(e.target.value)}
                className="composeBlog"
                type="text"
                placeholder="Time"
                autoFocus={true}
              />
            </div>

            <div className="composeFormGroup">
              <label>Qoute</label>
              <input
                onChange={(e) => setQoute(e.target.value)}
                className="composeBlog"
                type="text"
                placeholder="Qoute"
                autoFocus={true}
              />
            </div>

            <div className="composeFormGroup" id="composeEdit">
              <label>Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
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
            </div>

            <button className="composeBlogBtn" type="submit" autoComplete="off">
              Publish
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Compose;
