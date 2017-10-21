import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class User extends Component {
  state = {
    username: "",
    password: "",
  };

//   componentDidMount() {
//     this.loadPage();
//   }

//   loadPage = () => {
//     window.location.href = "http://localhost:3000/"
//     //   .then(res =>
//     //     this.setState({ navigate: false })
//     //   )
//     //   .catch(err => console.log(err));
//   };


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

  render() {   
    // const { navigate } = this.state;
    //   if (navigate) {
    //     return <Redirect to="/" push={true} />
    // }
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
      </Container>
    );
  }
}

export default User;
