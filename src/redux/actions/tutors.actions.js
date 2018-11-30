import axios from 'axios'
const URL = 'http://localhost:8000'

export const FETCH_TUTORS = "FETCH_TUTORS"
// export const FETCH_TUTOR = "FETCH_TUTOR"
export const CREATE_TUTOR = "CREATE_TUTOR"
export const UPDATE_TUTOR = "UPDATE_TUTOR"
export const TOGGLE_TUTOR = "TOGGLE_TUTOR"
export const DELETE_TUTOR = "DELETE_TUTOR"
// export const ADD_COURSE = "ADD_COURSE"
// export const REMOVE_COURSE = "REMOVE_COURSE"

export const fetchTutors = () =>
  dispatch => {
    axios.get(`${URL}/tutors`)
    .then(res => dispatch({
      type: FETCH_TUTORS,
      payload: res.data
    }))
  }
  
// export const fetchTutor = id =>
//   dispatch => {
//     axios.get(`${URL}/tutors/${id}`)
//     .then(res => dispatch({
//       type: FETCH_TUTOR,
//       payload: res.data
//     }))
//   }

export const createTutor = newTutor =>
  dispatch => {
    axios.post(`${URL}/tutors`, newTutor)
    .then(res => dispatch({
      type: CREATE_TUTOR,
      payload: res.data
    }))
  }

export const updateTutor = updatedTutor =>
  dispatch => {
    axios.put(`${URL}/tutors/${updatedTutor.id}`, updatedTutor)
    .then(res => dispatch({
      type: UPDATE_TUTOR,
      payload: res.data
    }))
  }

export const toggleTutor = id =>
  dispatch => {
    axios.patch(`${URL}/tutors/${id}/toggle`)
    .then(res => dispatch({
      type: TOGGLE_TUTOR,
      payload: res.data
    }))
  }

export const deleteTutor = id =>
  dispatch => {
    axios.delete(`${URL}/tutors/${id}`)
    .then(res => dispatch({
      type: DELETE_TUTOR,
      payload: id
    }))
  }

// export const addCourse = (id, course_id) => 
//   dispatch => {
//     axios.post(`${URL}/tutors/${id}/courses`, { course_id })
//     .then(res => dispatch({
//       type: ADD_COURSE,
//       payload: res.data
//     }))
//   }

// export const removeCourse = (id, course_id) => 
//   dispatch => {
//     axios.delete(`${URL}/tutors/${id}/courses/${course_id}`)
//     .then(res => dispatch({
//       type: REMOVE_COURSE,
//       payload: res.data
//     }))
//   }