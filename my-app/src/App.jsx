import React from "react";
import Header from "./components/Header/header";
//import Single from "./components/singleBlog/single";
import Compose from "./components/Compose/compose";
//import Home from "./components/Home/home"; 
import Footer from "./components/Footer/footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App(){
    return(
        <div>
            <Header/>
            <Compose/>
            {/* <Home/> */}
            {/* <Single/> */}
            <Footer/>  
    </div>
    );

}
export default App;