import { TODO_ACTIONS } from "./action.keys";

export const addTodoAction = (payload) => ({
    type: TODO_ACTIONS.ADD_TODO,
    payload
})

export const removeTodoAction = (payload) => ({
    type: TODO_ACTIONS.DELETE_TODO,
    payload
})


export const finishTodoAction = (payload) => ({
    type: TODO_ACTIONS.FINISH_TODO,
    payload
})