import React from "react";
import Header from "./components/Header/header";
import Single from "./pages/singleBlog/single";
import Compose from "./pages/Compose/compose";
import Home from "./pages/Home/home";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/footer";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App(){
    return(   
            // <Compose/>
            /* <Home/> */
            /* <Single/> */
    <Router>
    <div>
    <Header/>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    <Footer/> 
  </Router>
    );
}
export default App;