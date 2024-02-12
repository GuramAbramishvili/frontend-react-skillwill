import styles from "../css_modules/todoList.module.css"
import { Link } from "react-router-dom"

const TodoTask = ({id, title, name, deadline, delet, isCompleted, finish}) => {


    return (
    <div className={styles.taskBox} key={id}>
        <div>
            <p className={styles.taskP}>Task: {title}</p>
            <p className={styles.taskP}>Name: {name}</p>
            <p className={styles.taskP}>deadline: {deadline}</p>
        </div>
        <div className={styles.buttonWrapper}>
            <Link className={styles.editBtn} to={`/update/${id}`}>Edit</Link>
            <button className={styles.editBtn} onClick={()=> delet(id)}>Delete</button>
            <button className={styles.editBtn} onClick={()=> finish(isCompleted, id)}>Finish</button>
        </div>
    </div>
    )
} 

export default TodoTask