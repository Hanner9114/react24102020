import React, { Component } from 'react';
import slide1 from '../img/slide1.PNG';
import imageSlide2 from '../img/slide2.PNG';


class galerySlide extends Component {
  render() {
    return (
      <div className="slide-container">
        <div className="slider">
          <ul>
            <li>
              <img src={slide1} alt="" />
            </li>
            <li>
              <img src={imageSlide2} alt="" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default galerySlide;