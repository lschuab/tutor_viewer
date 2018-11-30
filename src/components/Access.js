import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Tutors from './Tutors'
import MainDisplay from './MainDisplay'
import { Link } from 'react-router-dom'


const Access = () => (
  <Col 
    className=""
    style={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
     }}  
  >
    <div 
      style={{
        height: "90vh",
        maxHeight: "90vh",
        width: "80vw",
        maxWidth: "80vw",
        backgroundColor: "#EEAA7B",
        border: "solid",
        borderRadius: "20px",
        padding: "30px",
        paddingTop: "10px",
        marginTop: "40px"
      }}  
    >
      <div
        style={{
          marginLeft: "250px",
          marginBottom: "10px"
        }}
      >
        <Link to='/dash/addTutor'>
          <Button
            style={{
              marginRight: "10px"
            }}
          >
            Add New Tutor
          </Button>
        </Link>
        <Link to='/dash/addCourse'>
          <Button
            style={{
              marginRight: "10px"
            }}
          >
            Add New Course
          </Button>
        </Link>
        <Link to='/dash/addTutor'>
          <Button>
            Add New Shift
          </Button>
        </Link>
      </div>
      <Row
        style={{
          height: "100%"
        }}
      >
        <Col xs="2">
          <Tutors/>
        </Col>
        <Col xs="10">
          <MainDisplay />
        </Col>
      </Row>
    </div>
  </Col>
)

export default Access;