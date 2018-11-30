import React from "react";
import axios from "axios";
import { Col, Row, ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link, Switch, Route } from 'react-router-dom'
import TutorSchedule from './TutorSchedule'
import EditTutorForm from './EditTutorForm'
import DeleteTutor from './DeleteTutor'
import AddCoursesForm from './AddCoursesForm'
import AddShiftForm from './AddShiftForm'

const URL = "http://localhost:8000";

class Tutor extends React.Component {
  state = {
    tutor: {}
  };

  updateTutor = async () => {
    const response = await axios.get(
      `${URL}/tutors/${this.props.match.params.id}`
    );
    this.setState({ tutor: response.data });
  };

  componentWillReceiveProps = () => {
    this.updateTutor()
  }

  render() {
    console.log(this.state.tutor)
    if (+this.props.match.params.id !== this.state.tutor.id) {
      this.updateTutor();
    }

    let courseListItems = []

    if (this.state.tutor.id) {
      const listOfCourses = this.state.tutor.courses.sort()
      courseListItems = listOfCourses.map(course => 
        <ListGroupItem 
          key={course.id}
        >
          {course.course_code}
          {/* <Button
            color="danger"
            size="sm"
          >
            Remove
          </Button> */}
        </ListGroupItem>)
    }

    return (
      <div>
        <Row>
          <Col xs="7">
            <h1
              style={{
                textAlign: "center",
                marginBottom: "0"
              }}
            >
              <Link to={`/dash/tutor/${this.state.tutor.id}`}>
                {this.state.tutor.first_name + " " + this.state.tutor.last_name}
              </Link>
            </h1>
          </Col>
          <Col xs="5">
            <Link to={`/dash/tutor/${this.state.tutor.id}/edit`}>
              <Button
                style={{
                  marginRight: "10px"
                }}
              >
                Edit Tutor
              </Button>
            </Link>
            <Link to={`/dash/tutor/${this.state.tutor.id}/addCourse`}>
              <Button
                style={{
                  marginRight: "10px"
                }}
              >
                Add Course
              </Button>
            </Link>
            <Link to={`/dash/tutor/${this.state.tutor.id}/addShift`}>
              <Button
                style={{
                  marginRight: "10px"
                }}
              >
                Add Shift
              </Button>
            </Link>
            <Link to={`/dash/tutor/${this.state.tutor.id}/delete`}>
              <Button>
                Delete Tutor
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col 
            xs="1.5"
            style={{
              textAlign: "center"
            }}  
          >
            <span>Courses</span>
            <ListGroup
              style={{
                overflowY: "auto",
                height: "42em",
                width: "7em",
                marginTop: "10px"
              }}
            >
              {courseListItems}
            </ListGroup>
          </Col>
          <Col
            xs="10"
            style={{
              textAlign: "center"
            }}    
          >
            <span>Schedule</span>
            <div
              style={{
                width: "66em",
                height: "43em",
                backgroundColor: "#FFFFFF",
                marginTop: "10px",
                paddingLeft: "15px"
              }}
            >
              <Switch>
                <Route 
                  path="/dash/tutor/:id/edit"
                  component={EditTutorForm}
                />
                <Route 
                  path="/dash/tutor/:id/addCourse"
                  render={props => <AddCoursesForm id={this.props.match.params.id} updateTutor={this.updateTutor}/>}
                />
                <Route 
                  path="/dash/tutor/:id/addShift"
                  render={props => <AddShiftForm id={this.props.match.params.id} updateTutor={this.updateTutor}/>}
                />
                <Route 
                  path="/dash/tutor/:id/delete"
                  component={DeleteTutor}
                />
                <Route 
                  path="/dash/tutor/:id"
                  render={props => <TutorSchedule shifts={this.state.tutor.shifts}/>}
                />
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tutor;
