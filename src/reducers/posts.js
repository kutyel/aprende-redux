import { INCREMENT_LIKES } from '../actions/types'

export default (state = [], { type, index }) => {
  switch (type) {
    case INCREMENT_LIKES:
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          likes: { count: state[index].likes.count + 1 },
        },
        ...state.slice(index + 1),
      ]
    // TODO: handle your new DECREMENT_LIKES action!
    default:
      return state
  }
}
