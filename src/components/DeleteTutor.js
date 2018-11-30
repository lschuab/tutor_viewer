import React from 'react';
import { Button, Form, } from 'reactstrap';
import { connect } from 'react-redux'
import { deleteTutor } from '../redux/actions/tutors.actions'

class DeleteTutor extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.deleteTutor(this.props.match.params.id)
    e.target.reset()
    setTimeout(() => {
      this.props.history.push(`/dash`)
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
        >Permanantly Delete Tutor</h1>
        <h3
          style={{
            marginTop: "100px"
          }}
        >
          Deletion is permanant!
        </h3>
        <Form onSubmit={this.handleSubmit}>
          <Button color="danger">DELETE TUTOR</Button>
        </Form> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tutors: state.tutors
})

export default connect(mapStateToProps, { deleteTutor })(DeleteTutor)