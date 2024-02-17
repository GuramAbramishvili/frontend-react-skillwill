import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store/todo/todo.actions"

const TodoForm = () => {
    const dispatch = useDispatch()
    const [taskValue, setTaskValue] = useState('')
    const [nameValue, setName] = useState('')
    const [isComplited] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()


        const newTask = {
            title: taskValue,
            name: nameValue,
            isComplited: isComplited,
        }

        dispatch(addTodoAction(newTask))
        setTaskValue('')
    }


    return(
        <form onSubmit={onSubmit}> 
            <input type="text" value={taskValue} onChange={e => setTaskValue(e.target.value)}/>
            <input type="text" value={nameValue} onChange={e => setName(e.target.value)}/>
            <button>submit</button>
        </form>
    )
}

export default TodoForm