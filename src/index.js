import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About'
import Contact from './components/Contact';
import Membership from './components/Membership';
import Inclusions from './components/Inclusions';
import Plans from './components/Plans';
import Footer from './components/Footer';
import './css/style.css'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Welcome />
    <About />
    <Membership />
    <Inclusions />
    <Plans />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


