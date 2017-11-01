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
import Cards from "../../components3/Abt";
import MediaB from "../../components2/Media";
import Video from "../../components3/Vid";
import Card from "../../components3/FlipCard";
import './AboutPage.css';


const AboutPage = () =>   
          <Container fluid>
            <Row>
              <Col size="md-2"></Col>

              <Col size="md-8">
                <Jumbotron>
                  <h1>About</h1>
                </Jumbotron>
                </Col>

                <Col size="md-2"></Col>
                </Row> 
                <Row>
                <Col size="md-1"></Col>
                <Col size="md-10">
               <Card />
              </Col>
              <Col size="md-1"></Col>
            </Row>
          </Container>
export default AboutPage;