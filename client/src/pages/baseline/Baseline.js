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
import FormInst from "../../components2/FormI";



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
              <Col size="md-2"></Col>

              <Col size="md-8">
                <Jumbotron>
                  <h1>Baseline Test</h1>
                </Jumbotron>
                </Col>

                <Col size="md-2"></Col>
                </Row> 
                <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
               <FormInst />
              </Col>
              <Col size="md-2"></Col>
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