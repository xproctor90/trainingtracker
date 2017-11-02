import React from "react";
import "./BaselineForm.css";
import { Button, Checkbox, Radio, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate Form link item
const formInstance = (props) =>
(
  <div>
  <form>
    <FormGroup
      id="formControlsText"
      type="text"
      label="Height"
      placeholder="Enter height in inches"
    />
    <FormGroup
      id="formControlsText"
      type="text"
      label="Weight"
      placeholder="Enter height in pounds"
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

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio name="radioGroup" inline>
        1
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
        2
      </Radio>
      {' '}
      <Radio name="radioGroup" inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
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
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit" href="/workout">
      Submit
    </Button>
  </form>
  </div>
);

export default formInstance;