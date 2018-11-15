import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'
import posts from './data/posts.json'
import comments from './data/comments.json'

const initialState = { posts, comments }
// TODO: create the Redux store

// FIXME: it would be nice to have a way to log what happens in Redux... 🤔

export const history = syncHistoryWithStore(browserHistory, store)
export default store
