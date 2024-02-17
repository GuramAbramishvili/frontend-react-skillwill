import styles from "../css.modules/style.module.css"

const TodoTask = ({index, title, name, isComplited, remove, finish}) => {



    return(
        <div key={index} className={styles.taskWrapper}>
            <div>
                <p>{title}</p>
                <p>{name}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={()=> remove(title)} className={styles.buttonItem}>x</button>
                <button onClick={()=> finish(title, name, isComplited)} className={styles.buttonItem}>✓</button>
            </div>
        </div>
    )
}

export default TodoTask