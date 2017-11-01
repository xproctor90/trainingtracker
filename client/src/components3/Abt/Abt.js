import React from "react";
import ReactDOM from 'react-dom';
import Foundation from 'react-foundation';
import { MediaObjectSection, MediaObject, Thumbnail} from 'react-foundation';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const Cards = (props) => 

<div className="media-object-basics-example">
  <MediaObject>
    <MediaObjectSection>
      <Thumbnail src={require('../../IMG/pt1.jpg')}/>
    </MediaObjectSection>
    <MediaObjectSection isMain>
      <h4>We want everyone to be healthy.</h4>
      <p>We at Training Tracker love what we do! We started our journey on a sunny...strangley warm fall day. From that day forward we have been commited to helping people get in shape and get healthy </p>
    </MediaObjectSection>
  </MediaObject>
</div>

export default Cards;