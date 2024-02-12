import { Component, PureComponent } from "react";

class DoneList extends PureComponent{

    render(){
        const {id, deal, back, remove} = this.props

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

} 

export default DoneList