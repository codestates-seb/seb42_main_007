import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div>
            <h3>양양</h3>
          </div>
          <div>
            <h3>제주</h3>
          </div>
          <div>
            <h3>부산</h3>
          </div>
          <div>
            <h3>고성</h3>
          </div>
          <div>
            <h3>강릉</h3>
          </div>
          <div>
            <h3>포항</h3>
          </div>
        </Slider>
      </div>
    );
  }
}