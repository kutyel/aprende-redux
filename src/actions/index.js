import { INCREMENT_LIKES, ADD_COMMENT } from './types'

export const increment = index => ({ type: INCREMENT_LIKES, index })
// TODO: create your own action for `decrement`ing likes! 💔
export const addComment = (postId, author, comment) => ({
  type: ADD_COMMENT,
  postId,
  author,
  comment,
})
// FIXME: create your own action `removeComments`! 🗑
