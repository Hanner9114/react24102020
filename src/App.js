import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import BodyMision from './components/BodyMision'
import BodyVision from './components/BodyVision'
import BodyAbajo from './components/BodyAbajo';
import Footer from './components/Footer';
import MyGallery from './components/galerySlide';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <br />
        <MyGallery />
        <br />
        <BodyMision />
        <BodyVision />
        <BodyAbajo />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default App;
