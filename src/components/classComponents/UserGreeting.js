import React, { Component } from "react";
class UserGreeting extends Component {

    constructor() {
        super()
        this.state = {
            val: false
        }

       }

   
    render() {
        let message
        if(this.state.val) {
             message ='Welcome Raghava'
             }
             else {
                message='Welcome Raghava 11' 
             
             }
        return (          
             this.state.val ? (<div>Testing True</div>) :
             (<div> {message}</div>)

        )
    }
}

export default UserGreeting