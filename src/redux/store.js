import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [logger, thunk]

export default createStore(rootReducer, applyMiddleware(...middleware))