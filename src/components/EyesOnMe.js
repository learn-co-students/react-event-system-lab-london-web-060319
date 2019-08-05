// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  focusFunc = () => console.log("Good!");
  blurFunc = () => console.log("Hey! Eyes on me!");
  render() {
    return <button onFocus={this.focusFunc} onBlur={this.blurFunc}>Button</button>
  }
}

export default EyesOnMe