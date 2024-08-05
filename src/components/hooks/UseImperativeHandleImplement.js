import React, {useRef} from 'react';

import ChildButton from './ChildButton.js';
function UseImperativeHandleImplement() {

  const parentRef = useRef(" ");
  return (
    <div className="App">
        
        <h3 UseImperativeHandleImplement > </h3>
        <button
          onClick={() => {
            parentRef.current.alterToggle();
          }}
        > Button From Parent </button>
        <ChildButton ref={parentRef}/>
        </div>

  )
}

export default UseImperativeHandleImplement