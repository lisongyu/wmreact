import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js'

const storeEnhancer=applyMiddleware(thunkMiddleware)
const store = createStore(reducer,storeEnhancer)
export default store