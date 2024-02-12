import { Component } from "react";

class TodoList extends Component{

    state = {
        inputValue: "",
        undone: [{id: 1, deal: "ტუტორთან შეხვედრა" }, {id: 2, deal: "პოსტ მასალა წავიკითხო" }, {id: 3, deal: "დავალება ავტვირთო" }],
        done: [{id: 1, deal: "შევასრულო დავალება" }, {id: 2, deal: "ლექციას დავესწრო" }]
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

    removeDeal = (id) => {
        const done = this.state.done.filter((doing) => doing.id !== id)
        this.setState({
            done
        })
    }




    render(){
        return(
        <div>
            <div className="list_box">
                <div className="must_do">
                    <p>შესასრულებელი</p>
                    {this.state.undone.map((d) => (
                        <ul key = {d.id}>
                            <li>
                                {d.deal}
                                <button onClick={() => this.madeDeal(d.deal)}>დასრულება</button>
                            </li>
                        </ul>
                    ))}
                </div>

                <div className="done">
                    <p>შესრულებული</p>
                    {this.state.done.map((d) => (
                        <ul key = {d.id}>
                            <li> 
                                {d.deal}
                                <button onClick={() => this.removeDeal(d.id)}>წაშლა</button>
                                <button onClick={() => this.returnDeal(d.deal)}>გადატანა</button>
                            </li>
                        </ul>
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