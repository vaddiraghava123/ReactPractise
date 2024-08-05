import React, { Component } from 'react';

class AppClassComponent extends Component {

    clickHandle() {
        console.log('Handle Class Event')
        alert("Hello Class Component");
    }
    render() {
        const {name} = this.props
        return (<div><h1 className='App'>
            {name}</h1>
            <button onClick={this.clickHandle}> ClickHandle</button></div>);
    }
}
export default AppClassComponent;
