import { combineReducers } from 'redux'
import tutors from './tutors.reducers'
import courses from './courses.reducers'

export default combineReducers({
  tutors,
  courses
})