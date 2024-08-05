import React from "react";
function ChildComponent(props) {
    return (
        <div><button onClick={props.greetHandler}> GreetParent</button>

        <button onClick={() => props.greetHandler('Child') }> GreetParent</button></div>
    )
}

export default ChildComponent