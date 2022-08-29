import {combineReducers, createStore} from 'redux'

import todoListReducer from './src/reducers/todoList'

const Reducers = combineReducers({
    todo: todoListReducer
})


const Store = createStore(Reducers)

export default Store
