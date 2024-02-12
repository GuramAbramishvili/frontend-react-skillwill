import React from "react"
import { WorkBtn, WorkP } from "./styled"

const DoneList = ({id, index, deal, back, remove}) => {

        console.log('finished'+ id)
        return (
        <div key = {id}>
            <WorkP color={index % 2 !== 0 ? '#dfe20f' : 'red'}>{deal} </WorkP>
                
                <WorkBtn onClick={() => remove(deal)}>delete</WorkBtn>
                <WorkBtn onClick={() => back(deal)}>not done</WorkBtn>
        </div>
        )
} 

export default React.memo(DoneList)