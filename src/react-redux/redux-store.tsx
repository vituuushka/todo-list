import { createStore } from "redux"
import { combineReducers, applyMiddleware } from "redux"
import tasksReducer from "./tasks-reducer"
import thunk from 'redux-thunk';

const reducers = combineReducers({
tasksPage: tasksReducer
})
const store = createStore(reducers, applyMiddleware(thunk))
export type RootState = ReturnType<typeof reducers>
export default store