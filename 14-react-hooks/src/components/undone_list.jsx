import React from "react"

const UndoneList = ({id, deal, made} ) => {
    
        console.log('mustDo'+ id)
        return (
        <ul key = {id}>
            <li>
                {deal}
                <button onClick={() => made(deal)}>დასრულება</button>
            </li>   
        </ul>
        )


} 

export default React.memo(UndoneList)