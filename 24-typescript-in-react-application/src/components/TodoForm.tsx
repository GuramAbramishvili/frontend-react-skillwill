import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ITask } from "../interfaces/todo.interface"
import styles from "../style.module/style.module.css"

const TodoForm: React.FC<{}> = () => {
    const [taskValue, setTaskValue] = useState<string>('')
    const [nameValue, setName] = useState<string>('')
    const [deadlineValue, setDeadlineValue] = useState<string>('')
    const [isCompleted] = useState<boolean>(false)
    const navigate = useNavigate()


    const addTodo = (e:any) => {
            e.preventDefault()

            const newTask:ITask = {
                title: taskValue,
                name: nameValue,
                deadline: deadlineValue,
                isCompleted: isCompleted
            }

            fetch(`/api/v1/taskList`, {
                method: 'POST',
                headers: {
                  "Content-Type" : "application/json",
                  "Authorization" : `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify([newTask])
              }).then(() => navigate('/'))
        }




    return (
        <form className={styles.toDoForm} onSubmit={addTodo}>
            <label>Task</label>
            <input className={styles.formInput} type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)}/>
            <label>Name</label>
            <input className={styles.formInput}  type="text" value={nameValue} onChange={(e) => setName(e.target.value)}/>
            <label>Deadline</label>
            <input className={styles.formInput} type="date" value={deadlineValue} onChange={(e) => setDeadlineValue(e.target.value)}/>
            <button className={styles.formBtn}>submit</button>
        </form>
    )
}

export default TodoForm