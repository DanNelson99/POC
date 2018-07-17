import { createStore, combineReducers, applyMiddleware } from 'redux'
import container from './reducers/container'
import thunk from 'redux-thunk'
const reducer = combineReducers({
 container
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;