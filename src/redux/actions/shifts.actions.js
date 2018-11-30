// import axios from 'axios'

// export const CREATE_SHIFT = "CREATE_SHIFT"
// export const UPDATE_SHIFT = "UPDATE_SHIFT"
// export const DELETE_SHIFT = "UPDATE_SHIFT"

// export const createShift = newTutor =>
//   dispatch => {
//     axios.post(`${URL}/shifts`, newTutor)
//     .then(res => dispatch({
//       type: CREATE_SHIFT,
//       payload: res.data
//     }))
//   }

// export const updateShift = (id, updatedShift) =>
//   dispatch => {
//     axios.put(`${URL}/shifts/${id}`, updatedShift)
//     .then(res => dispatch({
//       type: UPDATE_SHIFT,
//       payload: res.data
//     }))
//   }

// export const deleteShift = id =>
//   dispatch => {
//     axios.delete(`${URL}/shifts/${id}`)
//     .then(res => dispatch({
//       type: DELETE_SHIFT,
//       payload: res.data
//     }))
//   }
