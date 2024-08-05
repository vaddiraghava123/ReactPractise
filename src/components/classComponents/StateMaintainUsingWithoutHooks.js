import React, { Component } from "react";

class Counter extends Component {

    //constructor 
    constructor() {
        super()
        this.state = {
            val: 0
        }
    }
    /** hitCount() {
           this.setState(
            {
                val: this.state.val +1
            },
            () => {
                console.log('Callback', this.state.val)
            }            
        )
        console.log(this.state.val)
    }*/

    hitCountNew() {
        this.setState(
            prevState => ({
                val : prevState.val+1
            })
        )
    }

    hitCounts() {
        this.hitCountNew()
    }
    
    render() {
        return (
            <div>
                <h2> Counter Val : {this.state.val} </h2> 
                <button onClick={ () => this.hitCounts()}><h4>Hit Count</h4> </button>
                 </div>
        )
    }

}

export default Counter