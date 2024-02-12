import { useCallback, useEffect, useRef, useState } from "react";
import DoneList from "./doneList";
import UndoneList from "./undone_list";

const TodoList = () => {

    const [inputValue, setInputValue] = useState("")
    const [undone, setUndone] = useState([{id: 1, deal: "ტუტორთან შეხვედრა" }, {id: 2, deal: "პოსტ მასალა წავიკითხო" }, {id: 3, deal: "დავალება ავტვირთო" }])
    const [done, setDone] = useState([{id: 1, deal: "შევასრულო დავალება" }, {id: 2, deal: "ლექციას დავესწრო" }])

    const inputRef = useRef(null)

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

    const madeDeal = useCallback((deal) => {
        const madeDoing = {
            id: done.length + 1,
            deal: deal
        }

        setUndone((prev) =>  prev.filter((doing) => doing.deal !== deal))
        setDone((prevState)=>[...prevState, madeDoing])
    },[])

    const returnDeal = useCallback((deal) => {        
        const ret = {
            id: undone.length + 1,
            deal: deal
        }

        setDone((prev)=> prev.filter((doing) => doing.deal !== deal))
        setUndone((prevState)=>[...prevState, ret])
    },[])

    const removeDeal = useCallback((deal) => {
        setDone((prevState) => prevState.filter((doing) => doing.deal !== deal))
    },[])



        return(
        <div>
            <div className="list_box">
                <div className="must_do">
                    <p>შესასრულებელი</p>
                    {undone.map((d) => (
                            <UndoneList key={d.id} id={d.id} deal={d.deal} made={madeDeal} />
                    ))}
                </div>

                <div className="done">
                    <p>შესრულებული</p>
                    {done.map((d) => (
                            <DoneList key={d.id} id={d.id} deal={d.deal} remove={removeDeal} back={returnDeal}/>
                    ))}
                    
                </div>
            </div>

            <div className="form">
                <form onSubmit={addDeal}>
                    <p>შეიყვანეთ სამუშაო</p>
                    <input ref={inputRef} type="text" onChange={onChange} value= {inputValue}/><br />
                    <button type="submit">დამატება</button>
                </form>
            </div>
        </div>  
        )
}

export default TodoList