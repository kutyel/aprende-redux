import {
  INCREMENT_LIKES,
  ADD_COMMENT,
  DECREMENT_LIKES,
  REMOVE_COMMENT,
  LOAD_POSTS_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
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
export const loadPostsSuccess = posts => ({
  type: LOAD_POSTS_SUCCESS,
  posts,
})
export const loadCommentsSuccess = (postId, comments) => ({
  type: LOAD_COMMENTS_SUCCESS,
  postId,
  comments,
})

export const loadPosts = () => dispatch =>
  fetch(
    'https://gist.githubusercontent.com/kutyel/8f2d287ceb0a04bf3edb2e435b07f61d/raw'
  )
    .then(res => res.json())
    .then(posts => dispatch(loadPostsSuccess(posts)))
    .catch(console.error)

export const loadComments = mediaId => dispatch =>
  fetch(
    'https://gist.githubusercontent.com/kutyel/a6bfe0575bf1b84cecd8bb99e2d922ec/raw'
  )
    .then(res => res.json())
    .then(comments => dispatch(loadCommentsSuccess(mediaId, comments)))
    .catch(console.error)
