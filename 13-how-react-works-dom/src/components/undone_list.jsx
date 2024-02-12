import { Component, PureComponent } from "react";

class UndoneList extends PureComponent{

    render(){
        const {id, deal, made} = this.props

        return (
        <ul key = {id}>
            <li>
                {deal}
                <button onClick={() => made(deal)}>დასრულება</button>
            </li>   
        </ul>
        )
    }

} 

export default UndoneList