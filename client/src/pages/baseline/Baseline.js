import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Thumbnail } from "react-bootstrap";
import { formInstance } from "../../components2/BaselineForm";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import "./BaselineForm.css";
import { Button, Checkbox, Radio, FormGroup, ControlLabel, FormControl } from "react-bootstrap";



class Baseline extends Component {
    state = {
      height: "",
      weight: "",
      bloodPressure: "",
      restHeartRate: "",
      waist: "",
      pullUps: "",
      pushUps: "",
      mile: ""
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveUser({
            height: this.state.height,
            weight: this.state.weight,
            bloodPressure: this.state.bloodPressure,
            restHeartRate: this.state.restHeartRate,
            waist: this.state.waist,
            pullUps: this.state.pullUps,
            pushUps: this.state.pushUps,
            mile: this.state.mile
          })
            .then(window.location.href = '/workout')
            .catch(err => console.log(err));
        }
      };
      
    // login = event => {
    //   event.preventDefault();

    //   window.location.href = '/workout';
    // };

    render() {   
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Baseline Test</h1>
                </Jumbotron>
                <form>
                <Input
                value={this.state.height}
                onChange={this.handleInputChange}
                name="Height"
                placeholder="Height"
                />
                <Input
                  value={this.state.weight}
                  onChange={this.handleInputChange}
                  name="Weight"
                  placeholder="Weight"
                />
                <Input
                  value={this.state.bloodPressure}
                  onChange={this.handleInputChange}
                  name="Blood Pressure"
                  placeholder="Blood Pressure"
                />
                <Input
                  value={this.state.restHeartRate}
                  onChange={this.handleInputChange}
                  name="Resting Heart Rate"
                  placeholder="Resting Heart Rate"
                />
                <Input
                  value={this.state.waist}
                  onChange={this.handleInputChange}
                  name="Waist Circumference"
                  placeholder="Waist Circumference"
                />
                <Input
                  value={this.state.pullUps}
                  onChange={this.handleInputChange}
                  name="Pull-Ups"
                  placeholder="Maximum number of consecutive pull-ups"
                />
                <Input
                  value={this.state.pushUps}
                  onChange={this.handleInputChange}
                  name="Push-Ups"
                  placeholder="Maximum number of consecutive push-ups"
                />
                <Input
                  value={this.state.sitUps}
                  onChange={this.handleInputChange}
                  name="Sit-Ups"
                  placeholder="Maximum number of consecutive sit-ups"
                />
                <Input
                  value={this.state.mile}
                  onChange={this.handleInputChange}
                  name="One Mile Test"
                  placeholder="Run/walk one mile as fast as you can"
                />
                <FormBtn
                  disabled={!(this.state.height && this.state.weight && this.state.bloodPressure && this.state.restHeartRate && this.state.waist && this.state.pullUps && this.state.pushUps && this.state.sitUps && this.state.mile)}
                  onClick={this.login}
                >
                Submit
                </FormBtn>
                </form>
              </Col>
            </Row>
            <Row>
             <Col size="md-12">
            </Col>
            </Row>
          </Container>
        );
      }
    }
    
export default Baseline;