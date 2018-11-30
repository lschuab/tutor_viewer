import React from 'react';
import { connect } from 'react-redux'
import { deleteTutor } from '../redux/actions/tutors.actions'
import axios from 'axios';
const URL = "http://localhost:8000";

class AddCoursesForm extends React.Component {
  
  addCourse = course_id => {
    axios.post(`${URL}/tutors/${this.props.id}/courses`, {
      tutor_id: this.props.id,
      course_id
    })
    .then(() => this.props.updateTutor())

  }
  

  render() {

    const courseList = this.props.courses.sort((courseA, courseB) => courseA.course_code.localeCompare(courseB.course_code))
    const courseListItems = courseList.map(course => 
      <div
        key={course.id}
        onClick={e => this.addCourse(course.id)}
        style={{
          backgroundColor: "white",
          border: "solid"
        }}
      >
        {course.course_code}
      </div>
    )

    return (
      <div
        style={{
          backgroundColor: "#66B9BF",
          height: "100%",
          marginLeft:"-15px",
          paddingLeft: "30px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            paddingTop: "20px",
          }}
        >Add Courses for this tutor</h1>
        <div
          style={{
            overflowY: "auto",
            height: "4em",
            width: "40em",
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap" 
          }}
          >
            {courseListItems}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses
})

export default connect(mapStateToProps, { deleteTutor })(AddCoursesForm)