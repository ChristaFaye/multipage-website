import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import App from './App'
import Footer from './components/Footer';
import './css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header
        home="Home"
        about="About Us"
        membership="Membership"
        inclusions="Inclusions"
        connect="Connect"
      />
      <App />
      <Footer />
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);


