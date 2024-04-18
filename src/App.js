import React from 'react'
import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
// import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';
import Client from './components/client/Client' ;
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Skill />
      <Client />
      <Footer />
    </>
  );
}

export default App;
