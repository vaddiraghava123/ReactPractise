import React,{useReducer} from 'react'

const reducer = (state,action) => {
    switch (action.type) {

        case "INC": 
            return {counter: state.counter +1, showText: state.showText =true};
    }
}

const UseReducerHookImplement = () => {

    const [state,dispatch] = useReducer( reducer, {counter :0, showText : true})

  return (
    <div>UseReducerHookImplement
    {state.counter} <br/>
    <button 
        onClick={ ()=> {
        dispatch({type:"INC"})
    }}>Increment Counter 
    </button>
    {state.showText &&  <p>Testing the UseReducer hook for the string display</p>}
    <br></br>

    </div>
  )
}

export default UseReducerHookImplement