// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    enterPass = () => {
        console.log("Entering password...")
    }
    render() {
        return (
            <form>
                <input type="password" onKeyUp={this.enterPass}></input>
            </form>
        )
    }
}