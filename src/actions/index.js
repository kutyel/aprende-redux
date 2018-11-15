import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  DECREMENT_LIKES,
  REMOVE_COMMENT,
} from './types'

export const increment = index => ({ type: INCREMENT_LIKES, index })
export const decrement = index => ({ type: DECREMENT_LIKES, index })
export const addComment = (postId, author, comment) => ({
  type: ADD_COMMENT,
  postId,
  author,
  comment,
})
export const removeComment = (postId, comment) => ({
  type: REMOVE_COMMENT,
  postId,
  comment,
})
