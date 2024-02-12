import styles from "../css_modules/todoList.module.css"

const TodoTask = ({id, title, isCompleted }) => {

    return (
    <div className={styles.taskBox} key={id}>
        <p className={styles.taskP}>{title}</p>
        <button className={styles.editBtn}>Edit</button>
    </div>
    )
} 

export default TodoTask