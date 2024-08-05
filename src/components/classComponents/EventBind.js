import React, { Component } from "react";
class EventBind extends Component {

    constructor() {
        super()
        this.state = {
            val:'HelloEvent'
        }

        this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent() {
        this.setState({
            val: 'ByeEvent'
        }
        )
        console.log(this)
    }
    clickEventNew = () =>{
        this.setState(
            {
                val: 'ByeEvent'
            }
        )
    }
    render() {
        return (
            <div>
            <button onClick={this.clickEvent.bind(this)}> {this.state.val} EventClick</button>
            <button onClick={() =>this.clickEvent()}> {this.state.val} 11EventClick</button>
            <button onClick={this.clickEvent}> {this.state.val} 11EventClick</button>
            <button onClick={this.clickEventNew}> {this.state.val} 11EventClick</button>
            
            </div>
        )
    }
}

export default EventBind