// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    focusHandler = () => {
        console.log('Good!')
    }
    blurHander = () => {
        console.log('Hey! Eyes on me!')
    }
    render()  {
        return (
            <button onFocus={this.focusHandler} onBlur={this.blurHander}>Click Me!</button>
        )
    }
}