import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Redirect } from 'react-router';
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import Slides
import Slide from "../../components2/Carousel";
// import Media
import MediaB from "../../components2/Media";
// import Form
import FormI from "../../components2/Form";

class User extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  login = event => {
    event.preventDefault();
    window.location.href = '/workout';
  };

  register = event => {
    event.preventDefault();
    window.location.href = '/signup';
  }

  render() {   
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Sign In</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.login}
              >
                Sign In
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
<<<<<<< HEAD
          <Col size="md-3">
          </Col>
         <Col size="md-6">
         <h1> xavier rocks </h1>
          <Slide />
=======
         <Col size="md-12">
         <br></br>
         <FormBtn
                onClick={this.register}
              >
                Create an Account
              </FormBtn>
>>>>>>> 1b7ab3b1dc8743e490c70ab2405988a5e1815d59
        </Col>
        <Col size="md-3">
          </Col>
          </Row>
           <Row>
          <Col size="md-3">
          </Col>
         <Col size="md-6">
         <h1> Testimonials </h1>
          <MediaB />
        </Col>
        <Col size="md-3">
          </Col>
          </Row>
          <Row>
          <Col size="md-3">
          </Col>
         <Col size="md-6">
         <h1> BaseLine </h1>
          <FormI />
        </Col>
        <Col size="md-3">
          </Col>
          </Row>

      </Container>
    );
  }
}

export default User;
