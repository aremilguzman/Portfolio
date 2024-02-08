import "./app.scss"
import { useState,useEffect } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Parallax } from "./components/Parallax/Parallax";
import { Portfolio } from "./components/Portfolio/Portfolio";

const App = () => {

  const [backgroundColor, setBackgroundColor] = useState('#0c0c1d'); // Estado para el color de fondo

  useEffect(() => {
    
    setBackgroundColor('#000000'); 
  }, []);

  return <div>
    <div style={{ backgroundColor }}></div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"><Parallax type="aboutme"/></section>
    <section><About/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    
  </div>;
  
}

export default App;
