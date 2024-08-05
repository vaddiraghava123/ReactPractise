import React from "react";
function FunctionClick() {

    function handleClick() {
        console.log('Event Handle')
    }
    return (
        <div>
            <button onClick={handleClick}>Click Event</button>
        </div>
    )
}
export default FunctionClick