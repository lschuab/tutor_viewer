// import {
//   CREATE_COURSE,
//   DELETE_COURSE,
// } from '../actions/tutors.actions'

// const initialState = []

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case FETCH_COURSES:
//       return payload

//     case CREATE_COURSE:
//       return [...state, payload]

//     case UPDATE_TUTOR:
//       return state.map(tutor => tutor.id === payload.id ? payload : tutor)

//     case DELETE_COURSE:
//       return state.filter(course => course.id !== payload)

//     default:
//       return state
//   }
// }