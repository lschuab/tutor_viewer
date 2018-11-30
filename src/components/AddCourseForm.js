import React from 'react';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import { connect } from 'react-redux'
import { createCourse } from '../redux/actions/courses.actions'

class AddCourseForm extends React.Component {
  state = {
    course_code: '',
    course_name: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createCourse(this.state)
    e.target.reset()
    this.setState({
      course_code: '',
      course_name: ''
    })
  }

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center"
          }}
        >Add New Course</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="courseCode">Course Code</Label>
            <Input
              required
              type="text"
              name="course_code"
              id="courseCode"
              placeholder="Course Code"
              onChange={e => this.setState({
                ...this.state,
                course_code: e.target.value})}
              style={{
                width: "400px"
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="courseName">Course Title</Label>
            <Input
              required
              type="text"
              name="course_name"
              id="courseName"
              placeholder="Course Title"
              onChange={e => this.setState({
                ...this.state,
                course_name: e.target.value})}
              style={{
                width: "400px"
              }}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses
})

export default connect(mapStateToProps, { createCourse })(AddCourseForm)