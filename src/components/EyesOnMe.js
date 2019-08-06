import React from 'react';

export default class EyesOnMe extends React.Component{

  eyesonme = () => {
    console.log('Hey! Eyes on me!')
  }

  blurry = () => {
    console.log('Good!')
  }

  render() {
    return(
      <button onFocus={this.blurry} onBlur={this.eyesonme}> Click</button>
    )
  }

}
