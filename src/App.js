import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./css/styles.css";


/*
 import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header"; 
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import "./css/styles.css";*/

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>

      {/*  

<Router>
   <Navbar />   
<Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
</Router> */}
    </>
  );
}

export default App;
