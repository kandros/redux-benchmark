import {combineReducers} from 'redux';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return action.todos
        case 'TOGGLE_COMPLETED':

            return state.map(t => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        default:
            return state;
    }
}

export default combineReducers({
    todos
})