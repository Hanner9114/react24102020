import React, { Component } from 'react';
import logo from '../img/logo.png';

class Navigation extends Component {
    render() {
        return(
            
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#"> <img src={logo} className="App-logo" alt="logo"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="botonnav collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active text-white" href="#">Inicio <span class="sr-only">(current)</span></a>
                <a class="nav-link text-white" href="#">¿Quién somos?</a>
                <a class="nav-link text-white" href="#">Galería</a>
                <a class="nav-link text-white" href="#">Contacto</a>
              </div>
            </div>
          </nav>
  
        )
    }
}

export default Navigation;