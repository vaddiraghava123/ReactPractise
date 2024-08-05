import { Component } from "react";
import ChildComponent from "../functionComponents/ChildComponent";

class ParentComponenet extends Component {

    constructor() {
        super()
        this.state = {
            parentValue: 'Parent'
        }

        this.welcomeParent = this.welcomeParent.bind(this)
    }

    welcomeParent(childName) {
        alert('Parent Value '+ this.state.parentValue+ 'from '+childName)
    }
    render() {
        return (
            <div> <ChildComponent greetHandler= {this.welcomeParent}/> </div>
        )
    }
}

export default ParentComponenet