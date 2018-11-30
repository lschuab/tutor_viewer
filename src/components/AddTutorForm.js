import React from 'react';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import { connect } from 'react-redux'
import { createTutor } from '../redux/actions/tutors.actions'

class AddTutorForm extends React.Component {
  state = {
    first_name: '',
    last_name: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createTutor(this.state)
    e.target.reset()
    setTimeout(() => {
      const id = this.props.tutors.find(tutor => tutor.first_name === this.state.first_name && tutor.last_name === this.state.last_name).id
      this.props.history.push(`/dash/tutor/${id}`)
    }, 100)
  }

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center"
          }}
        >Add New Tutor</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              required
              type="text"
              name="first_name"
              id="firstName"
              placeholder="First Name"
              onChange={e => this.setState({
                ...this.state,
                first_name: e.target.value})}
              style={{
                width: "400px"
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              required
              type="text"
              name="last_name"
              id="lastName"
              placeholder="Last Name"
              onChange={e => this.setState({
                ...this.state,
                last_name: e.target.value})}
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
  tutors: state.tutors
})

export default connect(mapStateToProps, { createTutor })(AddTutorForm)