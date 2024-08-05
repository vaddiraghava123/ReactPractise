import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffectImplement() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "Oorvin Nandan Jaswik";
    }, []);

    //UseLayoutEffect will be called before useEffect
    useLayoutEffect(() => {
        console.log("Layout"+inputRef.current.value);
    }, []);

    return (
        <div className="App">UseLayoutEffectImplement
            <input ref={inputRef} value="Raghava" ></input>

        </div>
    )
}

export default UseLayoutEffectImplement