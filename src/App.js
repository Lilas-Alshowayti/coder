import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Numbers from "./components/Numbers/Numbers";
import Portfolio from "./components/Portfolio/Portfolio";
import Freelancing from "./components/Freelancing/Freelancing";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Services />
      <Numbers />
      <Portfolio />
      <Testimonials />
      <Freelancing />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
