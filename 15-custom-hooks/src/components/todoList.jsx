import { useCallback, useEffect, useRef, useState } from "react";
import DoneList from "./doneList";
import UndoneList from "./undone_list";
import InProgressList from "./inProgressList";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "../css_modules/wrapper.module.css"






const TodoList = () => {

    const [inputValue, setInputValue] = useState("")
    const [undone, setUndone] = useState([{id: 1, deal: "Download android app" }, {id: 2, deal: "Change and update account details in Steam app" }])
    const [inProgress, setInProgress] = useState([{id: 1, deal: "View transaction history by category" }, {id: 2, deal: "Fix ToDo List app" }, {id: 3, deal: "Prepare for the Test" }])
    const [done, setDone] = useState([{id: 1, deal: "Download 'Edge Of Time'" }, {id: 2, deal: "Create LinkedIn profile" }])

    const inputRef = useRef(null)
 
    const [isLight, toggle] = useLocalStorage('theme', 'white')




    console.log(isLight)
    const changeTheme = () =>{
        if(isLight === 'white'){
            toggle('#303742')
        }else if(isLight === '#303742'){
            toggle('white')
        }
        localStorage.clear()
    }   


    useEffect (() => {
        inputRef.current.focus()
    }, [done,undone])



    const onChange = (event) => {
        const value = event.target.value
        setInputValue(value)
    }


    const addDeal = (event) => {
        event.preventDefault()

        const doing = {
            id: undone.length + 1,
            deal: inputValue
        }
        if( inputValue.trim() !== ""){
            setUndone((prevState) => [...prevState, doing])
            setInputValue("")
        }else{
            alert("ჩაწერეთ სამუშაო ველში")
        }
    }


    const inProgressDeal = useCallback((deal) => {
        const startDoing = {
            id: inProgress.length + 1,
            deal: deal
        }

        setUndone((prev) =>  prev.filter((doing) => doing.deal !== deal))
        setInProgress((prevState)=>[...prevState, startDoing])
    },[])



    const addInProgressToDone = useCallback((deal) => {

        const madeDoing = {
            id: done.length + 1,
            deal: deal
        }

        setInProgress((prev) =>  prev.filter((doing) => doing.deal !== deal))
        setDone((prevState)=>[...prevState, madeDoing])
    },[])


    const returnDealinUndone = useCallback((deal) => {        
        const mustDo = {
            id: undone.length + 1,
            deal: deal
        }

        setInProgress((prev)=> prev.filter((doing) => doing.deal !== deal))
        setUndone((prevState)=>[...prevState, mustDo])
    },[])



    const returnDealinProgress = useCallback((deal) => {        
        const ret = {
            id: inProgress.length + 1,
            deal: deal
        }

        setDone((prev)=> prev.filter((doing) => doing.deal !== deal))
        setInProgress((prevState)=>[...prevState, ret])
    },[])




    const removeDeal = useCallback((deal) => {
        setDone((prevState) => prevState.filter((doing) => doing.deal !== deal))
    },[])





        return(
        <div>
            <button className={styles.toggleBtn} onClick={changeTheme}>toggle</button> 
            <div className = {styles.wrapper}>
                <div className = {styles.elemList} style={{backgroundColor: isLight}}>
                    <p className={styles.pHeader}>Backlog | {undone.length}</p>
                    {undone.map((d, index) => (
                            <UndoneList key={d.id} index={index} id={d.id} deal={d.deal} made={inProgressDeal} />
                    ))}
                </div>


                <div className = {styles.elemList} style={{backgroundColor: isLight}}>
                    <p className={styles.pHeader}>In Progress | {inProgress.length}</p>
                    {inProgress.map((d, index) => (
                            <InProgressList key={d.id} index={index} id={d.id} deal={d.deal} must={returnDealinUndone} finish={addInProgressToDone} />
                    ))}
                </div>


                <div className={styles.elemList} style={{backgroundColor: isLight}}>
                    <p className={styles.pHeader}>Done | {done.length}</p>
                    {done.map((d, index) => (
                            <DoneList key={d.id} index={index} id={d.id} deal={d.deal} remove={removeDeal} back={returnDealinProgress}/>
                    ))}
                </div>
            </div>

            <div className={styles.form}  style={{backgroundColor: isLight}}>
                <form onSubmit={addDeal}>
                    <p className={styles.formP}>Enter Backlog</p>
                    <input className={styles.formInput} ref={inputRef} type="text" onChange={onChange} value= {inputValue}/><br />
                    <button className={styles.formBtn} type="submit">Add</button>
                </form>

            </div>
        </div> 
        )
}

export default TodoList