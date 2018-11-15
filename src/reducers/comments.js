import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  LOAD_COMMENTS_SUCCESS,
} from '../actions/types'

const postComments = (
  state = [],
  { type, author: full_name, comment: text, comments, postId }
) => {
  switch (type) {
    case ADD_COMMENT:
      return [...state, { from: { full_name }, text }]
    case REMOVE_COMMENT:
      return state.filter(x => x.text !== text)
    case LOAD_COMMENTS_SUCCESS:
      return comments[postId]
    default:
      return state
  }
}

// This is called "reducer composition"
// https://redux.js.org/recipes/structuringreducers/splittingreducerlogic
export default (state = [], action) =>
  !action.postId
    ? state
    : {
        ...state,
        [action.postId]: postComments(state[action.postId], action),
      }
