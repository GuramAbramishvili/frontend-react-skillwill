import './App.css';
import TodoForm from './component/TodoForm';
import TodoTask from './component/TodoTask';
import { useEffect, useState } from 'react';
import styles from './css_modules/todoList.module.css'


const API_KEY = 'msD8JD00dEenCOutidLhJhTR-GrsUWCb71PO2L5jZEOG6hSuOw';



function App() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    fetch('/api/v1/taskList', {
      method: 'GET',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok) throw new Error("Response Failed")
      return res.json()
    })
    .then(data => setTaskList(data.items.map(tasks => {
      return {
        title: tasks.title,
        isCompleted: tasks.isCompleted,
        id: tasks.isCompleted._uuid
      }
    })))
    .catch(err => console.log(err))
  },[])

  const getTaskList = () =>{
    fetch('/api/v1/taskList', {
      method: 'GET',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok) throw new Error("Response Failed")
      return res.json()
    })
    .then(data => setTaskList(data.items.map(tasks => {
      return {
        title: tasks.title,
        isCompleted: tasks.isCompleted,
        id: tasks._uuid
      }
    })))
    .catch(err => console.log(err))
  }

  const onFormSubmit = (task) =>{
      fetch('/api/v1/taskList', {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${API_KEY}`
        },
        body: JSON.stringify([task])
      })
      .then(res => {
        if(!res.ok) throw new Error("Response Failed")
        return res.json()
      })
      .then(data => setTaskList((prev) => [...prev, {
          title: data.items[0].title,
          isCompleted: data.items[0].isCompleted,
          id: data.items[0]._uuid
      }]))
      .catch(err => console.log(err))
  }



  return (
    <div className="App">
        <TodoForm onFormSubmit={onFormSubmit}/>
        <button className={styles.getBtn} onClick={getTaskList}>get tasks</button><br />
        <button className={styles.getBtn} onClick={()=> setTaskList([])}>clear tasks</button>


      <div>
          {taskList.map((t) => 
            <TodoTask id={t.id} title={t.title} isCompleted={t.isCompleted}/>
          )}
      </div>

    </div>
  );
}

export default App
