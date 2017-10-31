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
import Slide from "../../components2/Carousel";
import MediaB from "../../components2/Media";
import Video from "../../components3/Vid";



const Home = () =>   
          <Container fluid>
            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">
               <Slide />
              </Col>
              <Col size="md-2"></Col>
            </Row>
            <Row>
            <Col size="md-2"></Col>
             <Col size="md-8">
             <MediaB />
            </Col>
            <Col size="md-2"></Col>
            </Row>
            <Row>
            <Col size="md-1"></Col>
             <Col size="md-10">
             <Video />
            </Col>
            <Col size="md-1"></Col>
            </Row>
          </Container>
export default Home;