import { useDispatch, useSelector } from "react-redux"
import TodoTask from "../components/todoTask"
import { finishTodoAction, removeTodoAction } from "../store/todo/todo.actions"

const MainPage = () => {
    const {todoList} = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const removeDeal = (task) => {
        dispatch(removeTodoAction(task))
    }

    const finishDeal = (status, name, task) => { 
        const newTask = {
            title: task,
            name: name,
            isComplited: status,
        }     

        dispatch(finishTodoAction(task, newTask))
    }



    return(
        <div>
            {todoList.map(t => 
                <TodoTask key={t.index} index={t.index} title={t.title} name={t.name} isComplited={t.isComplited} remove={removeDeal} finish={finishDeal}/>
            )}
        </div>
    )
} 

export default MainPage