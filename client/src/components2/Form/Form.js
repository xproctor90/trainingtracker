import React from "react";
import { Button, Checkbox, Radio, FormGroup, ControlLabel, FormControl, ButtonToolbar } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate Form link item
const FormI = (props) =>
<div>
  <form>
    <FormGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FormGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FormGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FormGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>How much do you weight?</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Weight</option>
        <option value="100">100</option>
        <option value="130">130</option>
        <option value="160">160</option>
        <option value="190">190</option>
        <option value="220">220</option>
        <option value="250">250</option>
        <option value="280">280</option>
        <option value="310">310</option>
        <option value="340">340</option>
      </FormControl>
</FormGroup>
  <FormGroup controlId="formControlsSelect">
      <ControlLabel>How tall are you?</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Height</option>
        <option value="51">5'1</option>
        <option value="52">5'2</option>
        <option value="53">5'3</option>
        <option value="54">5'4</option>
        <option value="55">5'5</option>
        <option value="56">5'6</option>
        <option value="57">5'7</option>
        <option value="58">5'8</option>
        <option value="59">5'9</option>
        <option value="510">5'10</option>
        <option value="511">5'11</option>
        <option value="60">6'0</option>
        <option value="61">6'1</option>
        <option value="62">6'2</option>
        <option value="63">6'3</option>
        <option value="64">6'4</option>
        <option value="65">6'5</option>
        <option value="66">6'6</option>
        <option value="67">6'7</option>
        <option value="68">6'8</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelect">
      <ControlLabel>What is your Goal?</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Goal</option>
        <option value="Stronger">Get Stronger</option>
        <option value="Lose">Lose Weight</option>
        <option value="Stay">Stay in Shape</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Personal Goal</ControlLabel>
      <FormControl.Static>
        Make it something realistic and obtainable
      </FormControl.Static>
    </FormGroup>
  
  <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
  </ButtonToolbar>

  </form>


  </div>

export default FormI;
