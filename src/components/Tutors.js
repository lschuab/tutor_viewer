import React from 'react';
import { ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Tutors extends React.Component {
  state = {
    query: ''
  }

  render() {
    const listOfTutors = this.props.tutors.filter(tutor => tutor.first_name.toLowerCase().startsWith(this.state.query.toLowerCase()) || tutor.last_name.toLowerCase().startsWith(this.state.query.toLowerCase())).sort((tutorA, tutorB) => tutorA.first_name.localeCompare(tutorB.first_name))
    const tutorListGroupItems = listOfTutors.map(tutor => 
      <Link key={tutor.id} to={`/dash/tutor/${tutor.id}`}>
        <ListGroupItem>{`${tutor.first_name} ${tutor.last_name}`}</ListGroupItem>
      </Link>
    )


    return (
      <div
        style={{
          maxHeight: "85%",
        }}
      >
        <Form>
          <FormGroup>
            <Input 
              type="text"
              name="query"
              id="tutorQuery"
              placeholder="Search by name"
              onChange={e => this.setState({query: e.target.value})}  
            />
          </FormGroup>
        </Form>
        <ListGroup
          style={{
            overflowY: "auto",
            height: "46.5em"
          }}
        >
          {tutorListGroupItems}
        </ListGroup>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tutors: state.tutors
})

export default connect(mapStateToProps)(Tutors)