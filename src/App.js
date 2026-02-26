import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Courses />
      <Clients />
      <Gallery />
      <Testimonials />
      <Video />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
