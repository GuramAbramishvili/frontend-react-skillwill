import styles from '../css_modules/todoList.module.css'
import { useState } from 'react';


const TodoForm = ({onFormSubmit}) => {
    const [task, setTask] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
   

    const onSubmit = (e) => {
        e.preventDefault() 
        const newTask = {
            title: task,
            isCompleted: isCompleted
        }

        if(task.trim() !== ""){
            onFormSubmit(newTask)
            setTask("") 
        }else{
            alert("Enter task")
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit} className={styles.toDoForm}>
                <input 
                    type="text"
                    placeholder="Enter task"
                    onChange={e => setTask(e.target.value)} 
                    className={styles.formInput}
                />

                <button className={styles.formBtn}>submit</button>
            </form>
        </div>
    )
}

export default TodoForm