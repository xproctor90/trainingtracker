import React from "react";
import { Media } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate slider link item

const media = (
  <div>
    <Media>
     <Media.Left>
        <img width={64} height={64} src="/assets/thumbnail.png" alt=""/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
    </Media>
    <Media>
      <Media.Left>
        <img width={64} height={64} src="/assets/thumbnail.png" alt=""/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="/assets/thumbnail.png" alt=""/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Nested Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
      </Media.Body>
    </Media>
    <Media>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
      <Media.Right>
        <img width={64} height={64} src="/assets/thumbnail.png" alt=""/>
      </Media.Right>
    </Media>
    <Media>
      <Media.Left>
        <img width={64} height={64} src="/assets/thumbnail.png" alt=""/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Media Heading</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
       <Media.Right>
        <img width={64} height={64} src="/assets/thumbnail.png" alt=""/>
      </Media.Right>
    </Media>
  </div>
);
    export default media;