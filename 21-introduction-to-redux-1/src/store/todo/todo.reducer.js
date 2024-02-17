import { TODO_ACTIONS } from "./action.keys"

const initialState = {
    todoList: []
}



export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
          return { todoList: [...state.todoList, action.payload]}
        case TODO_ACTIONS.DELETE_TODO:
            return { todoList: [...state.todoList.filter((task) => task.title !== action.payload)]}
        case TODO_ACTIONS.FINISH_TODO:
            return { todoList: [...state.todoList]}
        default:
          return state
    }
}


