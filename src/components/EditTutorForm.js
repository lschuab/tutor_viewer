import React from 'react';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import { connect } from 'react-redux'
import { updateTutor } from '../redux/actions/tutors.actions'

class EditTutorForm extends React.Component {
  state = {
  }

  componentDidMount = () => {
    this.setState(this.props.tutors.find(tutor => tutor.id === +this.props.match.params.id))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.updateTutor(this.state)
    e.target.reset()
    setTimeout(() => {
      this.props.history.push(`/dash/tutor/${this.props.match.params.id}`)
    }, 100)
  }

  render() {
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
        >Edit Tutor</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup
              style={{
                textAlign: "left"
              }}
          >
            <Label 
              for="firstName"
            >First Name</Label>
            <Input
              required
              type="text"
              name="first_name"
              id="firstName"
              placeholder={this.state.first_name}
              onChange={e => this.setState({
                ...this.state,
                first_name: e.target.value})}
              style={{
                width: "400px"
              }}
            />
          </FormGroup>
          <FormGroup
            style={{
              textAlign: "left"
            }}
          >
            <Label for="lastName">Last Name</Label>
            <Input
              required
              type="text"
              name="last_name"
              id="lastName"
              placeholder={this.state.last_name}
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

export default connect(mapStateToProps, { updateTutor })(EditTutorForm)