import React from "react"
import { WorkBtn, WorkP } from "./styled"

const UndoneList = ({id, index, deal, made} ) => {
    
        console.log('mustDo'+ id)
        return (
        <div key = {id}>
            <WorkP color={index % 2 !== 0 ? '#dfe20f' : 'red'}>{deal}</WorkP>
            <WorkBtn onClick={() => made(deal)}>start</WorkBtn>
        </div>
        )

} 

export default React.memo(UndoneList)