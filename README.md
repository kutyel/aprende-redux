# Aprende Redux 🔄

Code for my Redux Workshop ⚡️

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## What is Redux?

![redux](redux.gif)

## A _very quick_ overview!

Open this [CodeSandbox](https://codesandbox.io/s/q97z8y8jrq) to learn and play with the basic concepts!

### Exercises

```sh
$ npm i # download dependencies
$ npm start # enjoy! 🚀
```

1. Go to `src/store.js` and _only_ fix the TODO for now...
2. Go to `src/components/App.js`.
3. Great! Now our Redux app is working! 🎉 Let's add some new stuff!
4. Go to `src/actions/types.js` and _only_ fix the TODO for now...
5. Go to `src/actions/index.js` and _only_ fix the TODO for now...
6. Go to `src/reducers/posts.js`.
7. You now introduced a bug! 🐛 _How can you fix it?_ 🤔 (hint: 2 steps)
8. Hint: it would be nice to use `redux-logger`, wouldn't it? 😉
9. Go back to to `src/actions/types.js` and fix the FIXME!
10. Go back to to `src/actions/index.js` and fix the FIXME!
11. Go to `src/reducers/comments.js`.
12. Go to the branch `redux-thunk`, and to `src/actions/index.js` and have a look! 👀
13. Where would you dispatch the action for `fetchComments`??? 🤔 (hint: 2 steps)
14. #BONUS! (lenses 👓)

---

```js
// TODO: 1) configure the store:
const store = createStore(reducer, initialState /*, enhancers */)

// TODO: 2) actions
export const INCREMENT_LIKES = 'INCREMENT_LIKES'
// FIXME: export const DECREMENT_LIKES = 'DECREMENT_LIKES'
export const ADD_COMMENT = 'ADD_COMMENT'
// FIXME: export const REMOVE_COMMENT = 'REMOVE_COMMENT'
// FIXME: Bug: use `decrement` and update `user_has_liked`!

// TODO: 3) reducers
// Must be PURE functions, compute *new* state and NEVER mutate!
// WARNING! Every reducer runs *every* time an action is called! ⚠️
// FIXME: create reducers for DECREMENT_LIKES AND REMOVE_COMMENT!

// TODO: 4) UI (connect)
// FIXME: connect the App component to the actual store!

// TODO: 5) thunks! (async)
// On a separate branch: setup redux-thunk, and call fetchPosts!
// FIXME: where would you call `fetchComments`?

// TODO: 6) BONUS!!! (lenses)
```
