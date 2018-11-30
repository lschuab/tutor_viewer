import axios from 'axios'
const URL = 'http://localhost:8000'


export const FETCH_COURSES = "FETCH_COURSES"
// export const FETCH_COURSE_SHIFTS = "FETCH_COURSE_SHIFTS"
export const CREATE_COURSE = "CREATE_COURSE"
export const DELETE_COURSE = "DELETE_COURSE"

export const fetchCourses = () =>
  dispatch => {
    axios.get(`${URL}/courses`)
    .then(res => {
      return dispatch({
        type: FETCH_COURSES,
        payload: res.data
      })
    })
  }
  
// export const fetchCourseShifts = id =>
//   dispatch => {
//     axios.get(`${URL}/courses/${id}`)
//     .then(res => dispatch({
//       type: FETCH_COURSE_SHIFTS,
//       payload: res.data
//     }))
//   }

  export const createCourse = newCourse =>
  dispatch => {
    axios.post(`${URL}/courses`, newCourse)
    .then(res => dispatch({
      type: CREATE_COURSE,
      payload: res.data
    }))
  }

  export const deleteCourse = id =>
  dispatch => {
    axios.delete(`${URL}/courses/${id}`)
    .then(res => dispatch({
      type: DELETE_COURSE,
      payload: id
    }))
  }