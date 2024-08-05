import React,{useState} from 'react'

const UseStateHookShortFormImplement = () => {

    const [counter,setCounter] = useState(0);
    const [showText, setShowText] = useState(true);

  return (
    <div>UseStateHookShortFormImplement
 <p> Shortform using usestate hook</p>
    {counter} <br/>
    <button onClick={()=> {
        setCounter(counter+1);
        setShowText(!showText);
    }}>Increment Counter </button>
    {showText &&  <p>Testing the usestate hook for the string display</p>}
    <br></br>

    </div>
  )
}

export default UseStateHookShortFormImplement