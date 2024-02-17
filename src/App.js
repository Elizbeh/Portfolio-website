import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default App;
