import React from "react"
import { WorkBtn,  WorkP } from "./styled"

const InProgressList = ({id, index, deal, finish, must }) => {

        return (
        <div key = {id}>
            <WorkP  color={index % 2 !== 0 ? '#dfe20f' : 'red'}>{deal} </WorkP>
            <WorkBtn onClick={() => must(deal)}>must start</WorkBtn>    
            <WorkBtn onClick={() => finish(deal)}>finish</WorkBtn>
        </div>
        )
} 

export default React.memo(InProgressList)