import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
