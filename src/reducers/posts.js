import {
  INCREMENT_LIKES,
  DECREMENT_LIKES,
  LOAD_POSTS_SUCCESS,
} from '../actions/types'

export default (state = [], { type, index, posts }) => {
  switch (type) {
    case INCREMENT_LIKES:
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          user_has_liked: true,
          likes: { count: state[index].likes.count + 1 },
        },
        ...state.slice(index + 1),
      ]
    case DECREMENT_LIKES:
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          user_has_liked: false,
          likes: { count: state[index].likes.count - 1 },
        },
        ...state.slice(index + 1),
      ]
    case LOAD_POSTS_SUCCESS:
      return posts
    default:
      return state
  }
}
