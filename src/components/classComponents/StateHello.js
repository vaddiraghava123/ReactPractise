import React, { Component } from 'react';

class StateHello extends Component {

    constructor() {
        super()
        this.state = {
            val : 'State Value'
        }
    }

    hitbutton() {
        this.setState( {
            val: 'Thank you'
        })
    }
    render(){
        return (
            <div>
                <h2>Hello {this.state.val}</h2>
                <button onClick={ () => this.hitbutton()}>Hit</button>
           </div>
        )
    }
}

export default StateHello