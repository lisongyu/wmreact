const redux = rquire('redux')

const initialState = {
  counter: 0
}

// reducer
function reducer(state, action) {
  
}


// store
const store = redux.createStore()


// actions
const action1 = { type: "INCREMENT" }
const action2 = { type: "DECREMENT" }
const action3 = { type: "ADD_NUMBER", num: 5 }
const action4 = { type: "SUB_NUMBER", num: 12 }

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)