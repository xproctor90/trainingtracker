import React from "react";
import ReactDOM from 'react-dom';
import Foundation from 'react-foundation';
import { MediaObjectSection, MediaObject, Thumbnail} from 'react-foundation';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const Cards = (props) => 

<div className="media-object-basics-example">
  <MediaObject>
    <MediaObjectSection>
      <Thumbnail src="//unsplash.it/100"/>
    </MediaObjectSection>
    <MediaObjectSection isMain>
      <h4>Dreams feel real while we're in them.</h4>
      <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
    </MediaObjectSection>
  </MediaObject>
</div>

export default Cards;