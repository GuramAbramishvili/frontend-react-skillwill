import { Component } from "react";
import DoneList from "./doneList";
import UndoneList from "./undone_list";

class TodoList extends Component{
    constructor(props){
        super(props)

        console.log('Constructor log')
        this.state = {
            inputValue: "",
            undone: [{id: 1, deal: "ტუტორთან შეხვედრა" }, {id: 2, deal: "პოსტ მასალა წავიკითხო" }, {id: 3, deal: "დავალება ავტვირთო" }],
            done: [{id: 1, deal: "შევასრულო დავალება" }, {id: 2, deal: "ლექციას დავესწრო" }]
        }
    }

    static 

    shouldComponentUpdate(nextProps, nextState){
        return !(this.state.undone == nextState.undone && this.state.done == nextState.done && this.state.inputValue == nextState.inputValue)
      }

    onChange = (event) => {
        const value = event.target.value
        this.setState({
            inputValue: value
        })

    }

    addDeal = (event) => {
        event.preventDefault()

        const doing = {
            id: this.state.undone.length + 1,
            deal: this.state.inputValue
        }

        this.setState({
            undone: [...this.state.undone, doing],
            inputValue: ""
        })
    }


    madeDeal = (deal) => {
        const undone = this.state.undone.filter((doing) => doing.deal !== deal)

        const madeDoing = {
            id: this.state.done.length + 1,
            deal: deal
        }

        this.setState({
            undone,
            done: [...this.state.done, madeDoing]
        })
    }

    returnDeal = (deal) => {
        const done = this.state.done.filter((doing) => doing.deal !== deal)
        
        const ret = {
            id: this.state.undone.length + 1,
            deal: deal
        }

        this.setState({
            done,
            undone: [...this.state.undone, ret]
        })

    }

    removeDeal = (deal) => {
        const done = this.state.done.filter((doing) => doing.deal !== deal)
        this.setState({
            done
        })
    }




    render(){
        console.log('render log')
        return(
        <div>
            <div className="list_box">
                <div className="must_do">
                    <p>შესასრულებელი</p>
                    {this.state.undone.map((d) => (
                            <UndoneList key={d.id} id={d.id} deal={d.deal} made={this.madeDeal} />
                    ))}
                </div>

                <div className="done">
                    <p>შესრულებული</p>
                    {this.state.done.map((d) => (
                            <DoneList key={d.id} id={d.id} deal={d.deal} remove={this.removeDeal} back={this.returnDeal}/>
                    ))}
                    
                </div>
            </div>

            <div className="form">
                <form onSubmit={this.addDeal}>
                    <p>შეიყვანეთ სამუშაო</p>
                    <input type="text" onChange={this.onChange} value= {this.state.inputValue}/><br />
                    <button type="submit">დამატება</button>
                </form>
            </div>
        </div>  
        )
    }
}

export default TodoList