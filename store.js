import {combineReducers, createStore} from 'redux'

import todoListReducer from './src/reducers/todoList'
import editingTodoReducer from './src/reducers/editingTodoReducer'
const Reducers = combineReducers({
    todo: todoListReducer,
    editingTodo: editingTodoReducer
})


const Store = createStore(Reducers)

export default Store
