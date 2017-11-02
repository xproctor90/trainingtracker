import React from "react";
import { Carousel } from "react-bootstrap";
// import * as IMG from "../../IMG/"; 
// Depending on the current path, this component sets the "active" class on the appropriate slider link item

const Slide = (props) =>
<div>
  <Carousel>
    <Carousel.Item>
      <img width={1000} height={500} alt="training1" src={require('../../IMG/fball1-edit.jpg')}/>
      <Carousel.Caption>
        <h3>Do you need a personal trainer?</h3>
        <p>We got you covered!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="training2" src={require('../../IMG/gym-training.jpg')}/>
      <Carousel.Caption>
        <h3>Login,</h3>
        <p>do the baseline test & meet your trainer bot then start getting results!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1000} height={500} alt="training3" src={require('../../IMG/pt2-edit.jpg')}/>
      <Carousel.Caption>
        <h3>Use our trainers and our great tips!</h3>
        <p>connect with your training tracker today!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
export default Slide;