
import { SET_TODO_TEXT, ADD_TODO } from "../actions";

const initialState = {
    id: null,
    text: '',
    done: false
}

const editingTodoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODO_TEXT:
            return {
                ...state, 
                text: action.text
            };
        case ADD_TODO:
            return initialState;
        default:
            return state
    }

}

export default editingTodoReducer;