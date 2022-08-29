
import { ADD_TODO } from "../actions"

const initialState = {
    value : [],
    newTodo: null
}

const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return{
                ...state,
                newTodo: action.text

            }

        default:
            return state
    }
}


export default todoListReducer