import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Redirect } from 'react-router';
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import Media
import Slide from "../../components2/Carousel";

class User extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadWorkout = () => {
    API.getWorkouts()
      .then(res => {
        console.log("workout: " + res.data);
        this.setState({ workouts: res.data, workoutName: "", exercises: [] })
      })
      .catch(err => console.log(err));
  };

  login = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.username && this.state.password && this.state.email) {
    API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
    })
    .then(window.location.href = '/workout')
    .catch(err => console.log(err));
    }
  };

  render() {   
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Create an Account</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email Address"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.username && this.state.password && this.state.email)}
                onClick={this.login}
              >
                Register
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

export default User;
