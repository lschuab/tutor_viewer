import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'

import { fetchTutors } from './redux/actions/tutors.actions'
import { fetchCourses } from './redux/actions/courses.actions'

store.dispatch(fetchTutors())
store.dispatch(fetchCourses())

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));