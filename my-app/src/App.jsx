import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Compose from "./pages/compose/Compose";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
//import Single from "./pages/single/Single";
//import SingleBlog from "./components/singleBlog/SingleBlog";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./pages/error/error-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Redirect,Navigate
} from "react-router-dom";
import Details from "./pages/details/Details";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
            errorElement={<ErrorPage />}
          />

          <Route exact path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compose" element={<Compose />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
