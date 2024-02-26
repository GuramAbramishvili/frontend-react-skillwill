import React from "react"
import { ITodo } from "../interfaces/todo.interface"
import useFetch from "../hooks/useFetch"
import styles from "../style.module/style.module.css"

const MainPage: React.FC<{}> = () => {
    const {response, resendRequest} = useFetch('/api/v1/taskList')

    const onDelete = (taskId:string) => {
        fetch(`/api/v1/taskList/${taskId}`, {
            method: 'DELETE',
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          }).then(() => resendRequest())
    }

    const onFinish = (taskId:string, isCompleted:boolean) => {
        fetch(`/api/v1/taskList/${taskId}`, {
            method: 'PUT',
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : `Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify({isCompleted : !isCompleted})
          }).then(() => resendRequest())
    }


    const undoneTasks:ITodo[] = response.filter(item => item.isCompleted !== true)
    const doneTasks:ITodo[] = response.filter(item => item.isCompleted !== false)

    return (
        <div>
            {undoneTasks.map(({_uuid, isCompleted, deadline, name, title}) => 
                <div className={styles.taskWrapper} key={_uuid}>
                    <p>Task: {title}</p>
                    <p>Name: {name}</p>
                    <p>Deadline: {deadline}</p>
                    <button className={styles.taskBtn}  onClick={()=> onDelete(_uuid)}>remove</button>
                    <button className={styles.taskBtn}  onClick={()=> onFinish(_uuid, isCompleted)}>finish</button>
                </div>
            )}

            <br/>
            {doneTasks.map(({_uuid, isCompleted, deadline, name, title}) => 
                <div className={styles.taskWrapper} key={_uuid}>
                    <p>Task: {title}</p>
                    <p>Name: {name}</p>
                    <p>Deadline: {deadline}</p>
                    <button className={styles.taskBtn} onClick={()=> onDelete(_uuid)}>remove</button>
                    <button className={styles.taskBtn} onClick={()=> onFinish(_uuid, isCompleted)}>return</button>
                </div>
            )}
        </div>
    )
}

export default MainPage