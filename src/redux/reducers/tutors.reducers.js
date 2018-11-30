import {
  FETCH_TUTORS,
  CREATE_TUTOR,
  UPDATE_TUTOR,
  TOGGLE_TUTOR,
  DELETE_TUTOR,
} from '../actions/tutors.actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TUTORS:
      return payload

    case CREATE_TUTOR:
      return [...state, payload]

    case UPDATE_TUTOR:
      return state.map(tutor => tutor.id === payload.id ? payload : tutor)

    case TOGGLE_TUTOR:
      return state.map(tutor => tutor.id === payload.id ? payload : tutor)

    case DELETE_TUTOR:
      return state.filter(tutor => tutor.id !== +payload)

    default:
      return state
  }
}