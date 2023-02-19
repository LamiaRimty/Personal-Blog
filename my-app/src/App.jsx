import React from "react";
import Header from "./components/Header/header";
//import Single from "./pages/singleBlog/single";
//import Compose from "./pages/Compose/compose";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";
//import SingleBlog from "./pages/singleBlog/singleBlog";
import About from "./pages/About/about"
import Contact from "./pages/Contact/contact";

import {
    BrowserRouter as Router,
    Routes,
    Route,
   //Redirect,Navigate
  } from "react-router-dom";


function App(){
    return( 
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
         
        <Route path="/blogs" element={<Blogs />}/>
          
        <Route path="/about" element={<About />}/>
          
        <Route path="/contact" element={<Contact />}/>    
      </Routes>
      <Footer/>
    </div>
  </Router>

    );
}
export default App;