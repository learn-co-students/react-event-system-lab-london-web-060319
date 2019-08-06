// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    enterPassword = () => {
        console.log("Entering password...");
    };
    render() {
        return (
            <input type="password" onKeyUp={this.enterPassword}/>
           
        );
    }
}

export default Keypad;
