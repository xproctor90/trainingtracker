import React from "react";
import { Media } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate slider link item

const MediaB = (props) =>

  <div>
    <Media>
     <Media.Left>
        <img width={64} height={64} src={require('../../IMG/randy.jpg')} alt="Randy"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Randy S.</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
    </Media>
    <Media>
      <Media.Left>
        <img width={64} height={64} src={require('../../IMG/john.jpg')} alt="jan"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>John</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
    </Media>
    <Media>
      <Media.Left>
        <img width={64} height={64} src={require('../../IMG/Alp.jpg')} alt="jill"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading>Alper</Media.Heading>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      </Media.Body>
    </Media>
  </div>

    export default MediaB;