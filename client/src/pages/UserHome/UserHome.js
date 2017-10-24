import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Workouts extends Component {
  state = {
    workouts: [],
    workoutName: "",
    exercises: ""
  };

  componentDidMount() {
    this.loadWorkout();
  }

  loadWorkout = () => {
    API.getWorkouts()
      .then(res => {
        console.log("workout: " + res.data);
        this.setState({ exercises: res.data, workoutName: "", exercises: "" })
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
            {this.state.workouts.length ? (
              <List>
                {this.state.workouts.map(workout => (
                  <ListItem key={workout._id}>
                      {workout.exercises.map(exercise => (
                        <ListItem key={exercise._id}>
                          <strong>
                            {exercise.name}
                            {exercise.description}
                          </strong>
                        </ListItem>
                      ))}
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
