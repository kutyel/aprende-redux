import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'

const initialState = { posts: [], comments: [] }
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, createLogger())
)

export const history = syncHistoryWithStore(browserHistory, store)
export default store
