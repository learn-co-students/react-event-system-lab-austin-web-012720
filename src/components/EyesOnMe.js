import React, { Component } from 'react';

let handleFocus = (event) => {
  console.log('Good!');
  
}

let handleBlur = (event) => {
  console.log('Hey! Eyes on me!');
  
}


class EyesOnMe extends Component {
  render() {
    return (
      <button onFocus={handleFocus} onBlur={handleBlur}>Button</button>
    )
  }
}

export default EyesOnMe;