import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Compose from "./pages/compose/Compose";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
//import Single from "./pages/single/Single";
//import SingleBlog from "./components/singleBlog/SingleBlog";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
//import ErrorPage from "./pages/error/error-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Redirect,Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/blogs" element={<Blog />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/compose" element={<Compose />} />

          {/* <Route
            path="/blog/:blogId"
            element={<Single />}
            errorElement={<ErrorPage />}
          /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
