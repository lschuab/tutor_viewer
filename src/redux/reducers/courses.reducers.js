import {
  FETCH_COURSES,
  CREATE_COURSE,
  DELETE_COURSE,
} from '../actions/courses.actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSES:
      return payload

    case CREATE_COURSE:
      return [...state, payload]

    case DELETE_COURSE:
      return state.filter(course => course.id !== +payload)

    default:
      return state
  }
}