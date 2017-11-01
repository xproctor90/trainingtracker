import React from "react";
import { Carousel } from "react-bootstrap";
// import * as IMG from "../../IMG/"; 
// Depending on the current path, this component sets the "active" class on the appropriate slider link item

const Slide = (props) =>
<div>
  <Carousel>
    <Carousel.Item>
      <img width={1000} height={500} alt="Weight Room" src={require('../../IMG/fball1.jpg')}/>
      <Carousel.Caption>
        <h3>Do you need a personal trainer?</h3>
        <p>We got you covered!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="Weight Room #2" src={require('../../IMG/pt1.jpg')}/>
      <Carousel.Caption>
        <h3>Login,</h3>
        <p>do the baseline test & meet your trainer bot then start getting results!.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="900x500" src={require('../../IMG/pt2.jpg')}/>
      <Carousel.Caption>
        <h3>Use our trainers and our great tips!</h3>
        <p>connect with your training tracker today!.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
export default Slide;