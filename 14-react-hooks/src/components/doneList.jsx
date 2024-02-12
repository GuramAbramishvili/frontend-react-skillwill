import React from "react"

const DoneList = ({id, deal, back, remove}) => {

        console.log('finished'+ id)
        return (
        <ul key = {id}>
            <li> 
                {deal}
                <button onClick={() => remove(deal)}>წაშლა</button>
                <button onClick={() => back(deal)}>გადატანა</button>
            </li>
        </ul>
        )

} 

export default React.memo(DoneList)