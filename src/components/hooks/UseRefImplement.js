import React, { useRef } from 'react'

function UseRefImplement() {

    const inputRef = useRef(null);

    const onClick = () => {
       // console.log(inputRef.current.value);
       //inputRef.current.focus();
       inputRef.current.value ="";
    }
  return (
    <div><h5>UseRefImplement</h5>
    <input type="text" placeholder='Ex...' ref={inputRef}></input>
    <button onClick={onClick}>Change Name</button>    
    </div>
    
  )
}

export default UseRefImplement