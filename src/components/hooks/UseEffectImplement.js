import React,{useEffect, useState} from 'react';
import axios from 'axios';

function UseEffectImplement() {
    const [data,setData] = useState(" ");
    const [counter, setCounter] = useState(0);
    useEffect( () => {    
        axios.get("https://jsonplaceholder.typicode.com/comments")
             .then( (response) => {
                setData(response.data[0].email);
               console.log("Axios are :: ");
    });

}, [counter]);

         
    

  return <div> Hello UseEffect {data} 
  <div>{counter}</div>
  <button onClick={ () => {
    setCounter(counter+1);
  }}> Increment counter </button></div>
  }

export default UseEffectImplement;