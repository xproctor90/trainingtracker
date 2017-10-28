import React from "react";
import { Button } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate slider link item

const buttonsInstance  = (props) =>
  <div>
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar>
  </div>
export default buttonsInstance;