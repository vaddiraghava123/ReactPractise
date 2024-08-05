import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ChildButton = forwardRef((props,ref) => {

    const [toggle, setToggle] = useState(false);

    useImperativeHandle( ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        },
    }));

    return (
        <div>
            <button
            > Button From Child</button>
            {toggle && <span>Toggle</span>}
            </div>
    );
})

export default ChildButton;