import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/types'

const postComments = (
  state = [],
  { type, author: full_name, comment: text }
) => {
  switch (type) {
    case ADD_COMMENT:
      return [...state, { from: { full_name }, text }]
    case REMOVE_COMMENT:
      return state.filter(x => x.text !== text)
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
