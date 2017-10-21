import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Workouts extends Component {
  state = {
    exercises: [],
    name: "",
  };

  componentDidMount() {
    this.loadWorkout();
  }

  loadWorkout = () => {
    API.getWorkouts()
      .then(res => {
        console.log("workout: " + res)
        this.setState({ exercises: res.data, name: "" })
      })
      .catch(err => console.log(err));
  };

  deleteWorkout = id => {
    API.deleteWorkout(id)
      .then(res => this.loadWorkout())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Workouts</h1>
            </Jumbotron>
            {this.state.exercises.length ? (
              <List>
                {this.state.exercises.map(exercise => (
                  <ListItem key={exercise._id}>
                    <Link to={"/workout/" + exercise._id}>
                      <strong>
                        {exercise.name}
                        {exercise.description}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Workouts;
