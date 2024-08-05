import React from "react";

const PropsHello=(props)=> {
    const {name,id, children} = props
    return React.createElement('div',null,
    
    React.createElement('h3',null,'Hello Props'+name
    + '  '+id ),
    React.createElement('div',null,children))
}

export default PropsHello