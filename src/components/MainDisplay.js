import React from 'react'
import AddTutorForm from './AddTutorForm'
import AddCourseForm from './AddCourseForm'
import { Switch, Route } from 'react-router-dom'
import Tutor from './Tutor'


const MainDisplay = () => {
  return (
    <div
      style={{
        padding: "30px",
        paddingTop: "10px",
        border: "solid",
        height: "95%",
        backgroundColor: "#66B9BF"
      }}
    >
      <Switch>
        <Route exact path='/dash/addTutor' component={AddTutorForm}/>
        <Route exact path='/dash/addCourse' component={AddCourseForm}/>
        <Route path='/dash/tutor/:id' component={Tutor}/>
      </Switch>
    </div>
  )
}

export default MainDisplay