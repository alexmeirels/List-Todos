export const ADD_TODO = 'ADD_TODO'

export const addTodo = text => ({
    type: ADD_TODO,
    text: text
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = todoId => ({
    type: TOGGLE_TODO,
    todoId: todoId
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT'
export const setEditingTodo = text => ({
    type: SET_TODO_TEXT,
    text: text
});