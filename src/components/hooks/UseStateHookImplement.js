import React, {useState} from 'react'

const UseStateHookImplement = () => {

 const [counter,setCounter] = useState(0);
 const [showText, setShowText] = useState(true);
 const [displayName, setDisplayName] = useState("Raghava");

 const incrementCounter = () => {
    setCounter(counter+1);
    setShowText(showText);
    console.log("Counter Value :: "+ counter);
 }

 let displayNameValues = (event) => {
        setDisplayName(event.target.value);
 }

  return (
    <div>

    <button onClick={incrementCounter}>Increment Counter </button>
    {showText &&  <p>Testing the usestate hook for the string display</p>}
    <br></br><br></br>
    <p><input onChange= {displayNameValues} placeholder='Enter your name ... '></input> 
    <span>The Name is :: {displayName}</span></p>
    <br></br><br></br><br></br>

    </div>
  )
}

export default UseStateHookImplement