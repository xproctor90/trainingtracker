import React from "react";
import { Carousel } from "react-bootstrap";
// import * as IMG from "../../IMG/"; 
// Depending on the current path, this component sets the "active" class on the appropriate slider link item

const Slide = (props) =>
<div>
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="Weight Room" src={require('../../IMG/fball1.jpg')}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1200} height={500} alt="Weight Room #2" src="http://cdnak1.psbin.com/img/mw=390/mh=250/cr=n/d=v5tal/0auungx4bmn0z0ym.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://www.findlay.edu/offices/student-affairs/recreational-services/Shared%20Documents/IMG_3847.JPG"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
export default Slide;